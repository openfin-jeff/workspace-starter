import { LaunchBarWindowSettings } from "./shapes";

export async function createLaunchBarWindow(options: LaunchBarWindowSettings) {
	return fin.Window.create(options);
}
