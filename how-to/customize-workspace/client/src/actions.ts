import {
	BrowserCreateWindowRequest,
	CustomActionCallerType,
	CustomActionPayload,
	CustomActionsMap,
	CustomButtonActionPayload,
	CustomDropdownItemActionPayload,
	getCurrentSync
} from "@openfin/workspace-platform";
import { toggleNotificationCenter } from "@openfin/workspace/notifications";
import { ActionsModule, ActionsProviderOptions } from "./actions-shapes";
import { getApp } from "./apps";
import * as authProvider from "./auth";
import { getDefaultWindowOptions, launchView } from "./browser";
import { updateToolbarButtons } from "./buttons";
import { show } from "./home";
import { launch } from "./launch";
import { createLogger } from "./logger-provider";
import { manifestTypes } from "./manifest-types";
import { showShareOptions } from "./share";

const logger = createLogger("Actions");

async function getViewWindowIdentity(view: OpenFin.View): Promise<OpenFin.Identity> {
	const currentWindow = await view.getCurrentWindow();

	if (currentWindow.identity.name === undefined || currentWindow.identity.name === fin.me.identity.uuid) {
		return new Promise<OpenFin.Identity>((resolve, reject) => {
			view
				.once("target-changed", async () => {
					const hostWindow = await view.getCurrentWindow();
					resolve(hostWindow.identity);
				})
				.catch(() => {});
		});
	}
	return currentWindow.identity;
}

export const ACTION_IDS = {
	raiseCreateAppDefinitionIntent: "raise-create-app-definition-intent",
	moveViewToNewWindow: "move-view-to-new-window",
	movePageToNewWindow: "move-page-to-new-window",
	pinWindow: "pin-window",
	unpinWindow: "unpin-window",
	homeShow: "home-show",
	notificationToggle: "notification-toggle",
	share: "share",
	logoutAndQuit: "logout-and-quit",
	launchApp: "launch-app",
	launchView: "launch-view"
};

export async function getActions(actionsProviderOptions?: ActionsProviderOptions): Promise<CustomActionsMap> {
	let actionMap: CustomActionsMap = await getDefaultActions();

	if (Array.isArray(actionsProviderOptions.modules)) {
		const platform = getCurrentSync();
		for (const module of actionsProviderOptions.modules) {
			if (module.enabled) {
				try {
					const mod: ActionsModule = await import(/* webpackIgnore: true */ module.url);
					if (mod.actions.initialize) {
						await mod.actions.initialize(
							{
								updateToolbarButtons
							},
							createLogger
						);
					}
					const modActions = await mod.actions.get(platform);
					actionMap = {
						...actionMap,
						...modActions
					};
				} catch (err) {
					this.error(`Error loading module ${module.id} with url ${module.url}`, err);
				}
			}
		}
	}

	return actionMap;
}

export async function getDefaultActions(): Promise<CustomActionsMap> {
	const actionMap: CustomActionsMap = {};
	actionMap[ACTION_IDS.raiseCreateAppDefinitionIntent] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.ViewTabContextMenu) {
			const brokerClient = fin.Interop.connectSync(fin.me.identity.uuid, {});
			for (let i = 0; i < payload.selectedViews.length; i++) {
				const viewIdentity = payload.selectedViews[i];
				const intentName = "CreateAppDefinition";
				try {
					const view = fin.View.wrapSync(viewIdentity);
					const options = await view.getOptions();
					const info = await view.getInfo();
					const name = options.name;
					const fdc3InteropApi =
						options.fdc3InteropApi !== undefined &&
						options.fdc3InteropApi !== null &&
						options.fdc3InteropApi.length > 0
							? options.fdc3InteropApi
							: "1.2";
					const preloads =
						Array.isArray(options.preloadScripts) && options.preloadScripts.length > 0
							? options.preloadScripts
							: undefined;
					const manifest = {
						url: info.url,
						fdc3InteropApi,
						interop: options.interop,
						customData: options.customData,
						preloadScripts: preloads
					};
					const icons = [];
					const favicons = info.favicons || [];
					for (let f = 0; f < favicons.length; f++) {
						icons.push({ src: favicons[f] });
					}
					const app = {
						appId: name,
						name,
						title: info.title,
						description: info.title,
						manifestType: manifestTypes.inlineView.id,
						manifest,
						tags: [manifestTypes.view.id],
						icons,
						images: [],
						publisher: "",
						contactEmail: "",
						supportEmail: "",
						intents: []
					};
					const intent = {
						name: intentName,
						context: {
							type: "openfin.app",
							app
						}
					};
					await brokerClient.fireIntent(intent);
				} catch (error) {
					logger.error(
						`Error while trying to raise intent ${intentName} for view ${viewIdentity.name}`,
						error
					);
				}
			}
		}
	};

	actionMap[ACTION_IDS.moveViewToNewWindow] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.ViewTabContextMenu) {
			const platform = getCurrentSync();
			const initialView = await platform.createView({
				name: payload.selectedViews[0].name
			} as OpenFin.PlatformViewCreationOptions);
			if (payload.selectedViews.length > 1) {
				const windowIdentity = await getViewWindowIdentity(initialView);
				for (let i = 1; i < payload.selectedViews.length; i++) {
					await platform.createView(
						{
							name: payload.selectedViews[i].name
						} as OpenFin.PlatformViewCreationOptions,
						windowIdentity,
						initialView.identity
					);
				}
			}
		}
	};

	actionMap[ACTION_IDS.movePageToNewWindow] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.PageTabContextMenu) {
			const platform = getCurrentSync();
			const windowOptions = await getDefaultWindowOptions();
			const win = platform.Browser.wrapSync(payload.windowIdentity);
			const page = await win.getPage(payload.pageId);
			windowOptions.workspacePlatform.pages = [page];
			await platform.createWindow(windowOptions);
			await win.removePage(page.pageId);
		}
	};

	actionMap[ACTION_IDS.pinWindow] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.CustomButton) {
			const platform = getCurrentSync();
			const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
			const options = await browserWindow.openfinWindow.getOptions();
			const currentToolbarOptions = (options as BrowserCreateWindowRequest).workspacePlatform.toolbarOptions;
			await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: true });
			if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
				const newButtons = await updateToolbarButtons(
					currentToolbarOptions.buttons,
					payload.customData.sourceId as string,
					payload.customData.replacementId as string
				);
				await browserWindow.replaceToolbarOptions({ buttons: newButtons });
			}
		}

		if (payload.callerType === CustomActionCallerType.ViewTabContextMenu) {
			const platform = getCurrentSync();
			const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
			const options = await browserWindow.openfinWindow.getOptions();
			const currentToolbarOptions = (options as BrowserCreateWindowRequest).workspacePlatform.toolbarOptions;
			await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: true });
			if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
				const newButtons = await updateToolbarButtons(
					currentToolbarOptions.buttons,
					payload.customData.sourceId as string,
					payload.customData.replacementId as string
				);
				await browserWindow.replaceToolbarOptions({ buttons: newButtons });
			}
		}
	};

	actionMap[ACTION_IDS.unpinWindow] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.CustomButton) {
			const platform = getCurrentSync();
			const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
			const options = await browserWindow.openfinWindow.getOptions();
			const currentToolbarOptions = (options as BrowserCreateWindowRequest).workspacePlatform.toolbarOptions;
			await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: false });
			if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
				const newButtons = await updateToolbarButtons(
					currentToolbarOptions.buttons,
					payload.customData.sourceId as string,
					payload.customData.replacementId as string
				);
				await browserWindow.replaceToolbarOptions({ buttons: newButtons });
			}
		}
	};

	actionMap[ACTION_IDS.homeShow] = async () => {
		await show();
	};

	actionMap[ACTION_IDS.notificationToggle] = async () => {
		await toggleNotificationCenter();
	};

	actionMap[ACTION_IDS.share] = async (payload: CustomActionPayload) => {
		if (payload.callerType === CustomActionCallerType.CustomButton) {
			await showShareOptions(payload);
		}
	};

	actionMap[ACTION_IDS.logoutAndQuit] = async () => {
		await authProvider.logout();
	};

	actionMap[ACTION_IDS.launchApp] = async (
		payload: CustomButtonActionPayload | CustomDropdownItemActionPayload
	) => {
		if (payload.customData?.appId) {
			const app = await getApp(payload.customData.appId as string);
			if (app) {
				await launch(app);
			} else {
				logger.error(
					`Unable to find app with id '${
						payload.customData.appId
					}' in call to launchApp action from source '${payload.customData?.source ?? "unknown source"}'`
				);
			}
		} else {
			logger.error("No appId specified in payload.customData in launchApp action");
		}
	};

	actionMap[ACTION_IDS.launchView] = async (
		payload: CustomButtonActionPayload | CustomDropdownItemActionPayload
	) => {
		if (payload.customData?.url) {
			await launchView(payload.customData?.url as string);
		} else {
			logger.error("No url specified in payload.customData in launchView action");
		}
	};

	return actionMap;
}
