/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/workspace-platform/index.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@openfin/workspace-platform/index.js ***!
  \***************************************************************/
/***/ ((module) => {

/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,c=o(e),d=1;d<arguments.length;d++){for(var p in i=Object(arguments[d]))a.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var l=0;l<s.length;l++)n.call(i,s[l])&&(c[s[l]]=i[s[l]])}}return c}},535:(e,t,a)=>{var n=a(525),o=60103,r=60106;var i=60109,s=60110,c=60112;var d=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),r=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),d=l("react.memo"),p=l("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}function h(){}function m(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(w(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=m.prototype=new h;v.constructor=m,n(v,y.prototype),v.isPureReactComponent=!0;var S={current:null},P=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,a){var n,r={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,n)&&!b.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=a;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:r,_owner:S.current}}function W(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,a,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case r:c=!0}}if(c)return i=i(c=e),e=""===n?"."+I(c,0):n,Array.isArray(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),A(i,t,a,"",(function(e){return e}))):null!=i&&(W(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var d=0;d<e.length;d++){var p=n+I(s=e[d],d);c+=A(s,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),d=0;!(s=e.next()).done;)c+=A(s=s.value,t,a,p=n+I(s,d++),i);else if("object"===s)throw t=""+e,Error(w(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function M(e,t,a){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(a,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function E(){var e=T.current;if(null===e)throw Error(w(321));return e}},378:(e,t,a)=>{a(535)}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{var e,t,o,r,i,s,c,d;a.r(n),a.d(n,{AppManifestType:()=>c,BrowserButtonType:()=>g,CustomActionCallerType:()=>h,GlobalContextMenuOptionType:()=>u,PageTabContextMenuOptionType:()=>w,SaveButtonContextMenuOptionType:()=>y,SaveModalType:()=>m,ViewTabMenuOptionType:()=>f,getCurrentSync:()=>Ft,init:()=>In,wrapSync:()=>Ut}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(e||(e={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(t||(t={})),function(e){e.Active="active",e.Default="default"}(o||(o={})),function(e){e.Suggestion="suggestion"}(r||(r={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(i||(i={})),function(e){e.MultiSelect="MultiSelect"}(s||(s={})),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(c||(c={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(d||(d={}));var p,l,u,w,f,g,y,h,m,v;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(p||(p={})),function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(l||(l={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.OpenStorefront="OpenStorefront",e.Quit="Quit",e.Custom="Custom"}(u||(u={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.Custom="Custom"}(w||(w={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Custom="Custom"}(f||(f={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(g||(g={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(y||(y={})),function(e){e.CustomButton="CustomButton",e.CustomDropdownItem="CustomDropdownItem",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(h||(h={})),function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(m||(m={})),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(v||(v={}));const S="undefined"!=typeof window&&"undefined"!=typeof fin,P=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),b=P&&"undefined"!=typeof indexedDB,k=P?window.origin:v.Local,W=S&&fin.me.uuid,C=S&&fin.me.name,I=S&&fin.me.entityType,A=(v.Local,v.Dev,v.Staging,v.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:k+e),M=(A("https://cdn.openfin.co/workspace/9.0.11"),A("https://cdn.openfin.co/workspace/9.0.11")),O=("undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&A(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&A(WORKSPACE_DOCS_CLIENT_URL),"26.102.71.7"),T="9.0.11";var E,B,x;!function(e){e.Workspace="openfin-browser"}(E||(E={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(B||(B={})),function(e){e.FinProtocol="fin-protocol"}(x||(x={}));const R={uuid:W},_=(E.Workspace,e=>{if(!S)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)}),L=()=>_(R);var V,D,U;!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(V||(V={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.Closed="closed",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(D||(D={})),function(e){e.BeforeUnload="beforeunload"}(U||(U={}));function F(e){if(!S)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const G={name:C,uuid:W};function $(){return F(G)}V.Home,E.Workspace,V.Dock,E.Workspace;const N={name:V.Storefront,uuid:E.Workspace};E.Workspace,E.Workspace;async function j(e){const t=F(e);"minimized"===await t.getState()&&await t.restore(),await t.show(),await t.setAsForeground()}const H=e=>e.startsWith(V.BrowserWindow);async function q(){return(await fin.Application.getCurrentSync().getChildWindows()).filter((e=>H(e.identity.name)))}const K=e=>F(e).getOptions().then((()=>!0)).catch((()=>!1)),Q=()=>K(N);var z;!function(e){e.Browser="Browser",e.Dock="Dock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(z||(z={}));const J=async(e,t)=>{const a={apiVersion:t.apiVersion||T,componentName:e,componentVersion:t.componentVersion||T,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:"workspace-licensing",data:a})};a(378);const X=e=>fin.System.getSystemAppConfig(e);let Y;async function Z(){if(Y)return Y;if(!S)return{};const e=await async function(){if(S)try{let e=await X("workspace").catch((e=>{}));return e||(e=await X("home")),e}catch(e){}}(),t=await async function(){const{manifest:e,initialOptions:t}=await fin.Application.getCurrentSync().getInfo();return e?.workspace||e?.home||t?.workspace||t?.home,e?.workspace?e?.workspace:e?.home?e?.home:t?.workspace?t?.workspace:t?.home?t?.home:void 0}();return Y={...t,...e},Y}var ee;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition"}(ee||(ee={}));const te=ee,ae=(e,t)=>{localStorage.setItem(`${W}-${e}`,t)},ne=e=>localStorage.getItem(`${W}-${e}`);var oe;!function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.SharePage="sharePage",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.RequestQuitPlatformDialogInternal="requestQuitPlatformDialogInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized"}(oe||(oe={}));const re=async e=>fin.Platform.wrapSync(e).getClient(),ie=async e=>{const t=await re(e),a="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let n;try{n=await t.dispatch("isWorkspacePlatform")}catch(e){throw new Error(a)}if(!0!==n?.isWorkspacePlatform)throw new Error(a);return n},se=async e=>(await ie(e),re(e)),ce=async e=>{if(!0!==(await ie(e))?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return re(e)},de=(e,t)=>!t.find((t=>t===e)),pe=(e,t)=>`${e} (${t})`,le=(e,t)=>{let a=1;const n=e.replace(/ \(.+\)$/,"");for(;!de(pe(n,a),t);)a+=1;return pe(n,a)};async function ue(e){try{const t=Ft();await t.applySnapshot(e.snapshot,{closeExistingWindows:!0}),we(e)}catch(e){}}function we(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);ae(te.CurrentWorkspaceId,t)}catch(e){}}async function fe(){if("undefined"==typeof localStorage)return;const e=Ft(),t=await e.getSnapshot();return{workspaceId:crypto.randomUUID(),title:await he(),metadata:{APIVersion:T},snapshot:t}}async function ge(){if("undefined"==typeof localStorage)return;const e=ne(te.CurrentWorkspaceId);if(!e)return fe();const t=JSON.parse(e),a=Ft(),n=await a.getSnapshot();return{...t,metadata:{APIVersion:T},snapshot:n}}const ye=async e=>await(async e=>(await se(G)).dispatch(oe.GetSavedWorkspace,e))(e.workspaceId)?(async e=>(await se(G)).dispatch(oe.UpdateSavedWorkspace,e))({workspaceId:e.workspaceId,workspace:e}):(async e=>(await se(G)).dispatch(oe.CreateSavedWorkspace,e))({workspace:e});async function he(e="Untitled Workspace"){const t=(await(async()=>(await se(G)).dispatch(oe.GetSavedWorkspaces,void 0))()).map((({title:e})=>e));return t.find((t=>t===e))?le(e,t):e}async function me(){if("undefined"!=typeof localStorage)try{const e=ne(te.LastFocusedBrowserWindow);if(!e)return;const t=JSON.parse(e);if(await K(t))return t}catch(e){throw new Error(`failed to get last focused browser window: ${e}`)}}function ve(e=fin.me.identity){H(e.name)&&function(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);ae(te.LastFocusedBrowserWindow,t)}catch(e){}}(e)}const Se=(e,t=0)=>{let a,n,o=!1;const r=async n=>{const i=await e(...n);if(o){await new Promise((e=>setTimeout(e,t)));const e=a;return a=void 0,o=!1,r(e)}return i};return(...e)=>(n?(o=!0,a=e):n=r(e).catch((e=>{throw e})).finally((()=>{n=void 0})),n)};var Pe;!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(Pe||(Pe={}));const be=(e,t)=>e.content?{...e,content:e.content.map((e=>be(e,t)))}:{...e,componentState:t(e.componentState)},ke=e=>({...e,name:e.name?e.name:crypto.randomUUID()}),We=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const a=We(e.content);t.push(...a)})),t},Ce=async(e,t,a=G)=>{let n;if(H(a.name)){n=(await F(a).getOptions()).layout||{settings:{}}}return{...n,content:[{type:"stack",content:[{type:"component",componentName:"view",componentState:{title:e,url:t}}]}]}};new Map;function Ie(e,t){return async(a,...n)=>{e.has(a)&&e.get(a).forEach((e=>e(...n))),t&&await t({event:a,payload:n})}}function Ae(e,t){return t&&t((t=>{const{event:a,payload:n}=t;e.has(a)&&e.get(a).forEach((e=>e(...n)))})),(t,a)=>{e.has(t)||e.set(t,new Set),e.get(t).add(a)}}function Me(e){return(t,a)=>{e.has(t)||e.set(t,new Set);const n=e.get(t),o=(...e)=>{a(...e),n.delete(o)};n.add(o)}}function Oe(e){return(t,a)=>{e.has(t)&&e.get(t).delete(a)}}const Te=P&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function Ee(e){let t;return()=>{if(!S)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await Te;const a={clientAPIVersion:T},n=await fin.InterApplicationBus.Channel.connect(e,{payload:a});return n.onDisconnection((async()=>{t=void 0})),n})().then((e=>e)).catch((a=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${a}`)}))),t}}const Be=e=>`__browser_window__-${e.uuid}-${e.name}`,xe=new Map,Re=e=>{const t=Be(e);return xe.has(t)||xe.set(t,Ee(t)),xe.get(t)()};var _e,Le;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page"}(_e||(_e={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(Le||(Le={}));const Ve={..._e,...Le};var De;!function(e){e.AttachedPagesToWindow="attached-pages-to-window",e.DetachedPagesFromWindow="detached-pages-from-window"}(De||(De={}));new Map;const Ue=async e=>{const t=await Re(e);return await t.dispatch(Ve.GetPages)},Fe=async e=>(await Re(e.identity)).dispatch(Ve.UpdatePageForWindow,e),Ge=async()=>{const e=await q();return(await Promise.all(e.map((async({identity:e})=>Ue(e))))).reduce(((e,t)=>e.concat(t)),[])},$e=async()=>(await se(G)).dispatch(oe.GetSavedPages,void 0),Ne=async e=>(await se(G)).dispatch(oe.GetSavedPage,e),je=async(e,t)=>{const a=await(async e=>(await Ge()).find((t=>t.pageId===e)))(e);return!a||a.title===t.title&&e===t.pageId||await Fe({identity:a.parentIdentity,pageId:e,page:{pageId:t.pageId,title:t.title}}),a},He=async({page:e})=>{await je(e.pageId,e),await(async e=>(await se(G)).dispatch(oe.CreateSavedPage,e))({page:e})},qe=async e=>{await Ne(e)&&await(async e=>(await se(G)).dispatch(oe.DeleteSavedPage,e))(e)},Ke=async({pageId:e,page:t})=>{await je(e,t);return await(async e=>(await se(G)).dispatch(oe.UpdateSavedPage,e))({pageId:e,page:t})},Qe=async e=>await Ne(e.pageId)?Ke({pageId:e.pageId,page:e}):He({page:e}),ze=async e=>{await(async e=>(await Re(e.identity)).dispatch(Ve.AttachPagesToWindow,e))(e)},Je=async e=>{await Fe(e)},Xe=async e=>{await(async e=>(await Re(e.identity)).dispatch(Ve.DetachPagesFromWindow,e))(e)},Ye=async e=>{await(async e=>(await Re(e.identity)).dispatch(Ve.SetActivePageForWindow,e))(e)},Ze=e=>Ue(e),et=async({identity:e,pageId:t})=>(await Ze(e)).find((e=>e.pageId===t)),tt=async e=>{await(async e=>(await Re(e.identity)).dispatch(Ve.ReorderPagesForWindow,e))(e)};async function at(e="Untitled Page"){const[t,a]=await Promise.all([$e(),Ge()]),n=[...t,...a].map((({title:e})=>e));return n.find((t=>t===e))?le(e,n):e}const nt=new Map,ot=e=>`${e.uuid}-${e.name}`;const rt=Se((async function(){let e=[];try{e=await Ge()}catch(e){return void nt.forEach(((e,t)=>{clearTimeout(e),nt.delete(t)}))}const t=new Set;e.forEach((e=>{We(e.layout.content).forEach((e=>{if(e.name){const a=ot(e);t.add(a)}}))}));const a=$();(await a.getCurrentViews()).forEach((({identity:e})=>{const a=ot(e);if(t.has(a)||nt.has(a))return;const n=setTimeout((()=>{fin.View.wrapSync(e).destroy(),nt.delete(a)}),5e3);nt.set(a,n)})),nt.forEach(((e,a)=>{t.has(a)&&(clearTimeout(e),nt.delete(a))}))}),2500),it=({name:e})=>{e&&H(e)&&rt().catch((()=>{}))};let st={};const ct=({actionId:e,payload:t})=>{if("function"!=typeof st[e])throw new Error(`Cannot find a configured function for the action '${e}'`);return st[e](t)};function dt(){return localStorage.getItem(te.MachineName)}let pt;async function lt(){return pt||(pt=await fin.System.getMachineId()),pt}const ut=e=>{if(e.layout&&Array.isArray(e.workspacePlatform?.pages)){const t=e.workspacePlatform.pages.find((e=>e.isActive));if(t)if(t.isLocked){const a=((e,t)=>{const a=We(t.content);return{...be(e,(e=>{const t=a.find((t=>t.name===e.name&&t.uuid===e.uuid)),n=t?t.isClosable:e.isClosable;return{...e,isClosable:n}})),settings:t.settings}})(e.layout,t.layout);t.layout=a,e.layout=a}else t.layout=e.layout}return e};async function wt(e){const t=e||await fin.Platform.getCurrentSync().getSnapshot();if(t.snapshotDetails?.machineId)return t;const a=dt();return{...t,snapshotDetails:{...e.snapshotDetails,machineId:await lt(),machineName:a}}}function ft(e){return new Promise(((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)}))}function gt(e,t){const a=indexedDB.open(e);a.onupgradeneeded=()=>a.result.createObjectStore(t);const n=ft(a);return(e,a)=>n.then((n=>a(n.transaction(t,e).objectStore(t))))}let yt;function ht(){return yt||(yt=gt("keyval-store","keyval")),yt}function mt(e,t=ht()){return t("readonly",(t=>ft(t.get(e))))}function vt(e,t,a=ht()){return a("readwrite",(a=>(a.put(t,e),ft(a.transaction))))}function St(e,t=ht()){return t("readwrite",(t=>(t.delete(e),ft(t.transaction))))}function Pt(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ft(e.transaction)}function bt(e=ht()){return e("readonly",(e=>{if(e.getAllKeys)return ft(e.getAllKeys());const t=[];return Pt(e,(e=>t.push(e.key))).then((()=>t))}))}const kt=(e,t="")=>e.toLowerCase().includes(t.toLowerCase()),Wt=b&&gt("openfin-home-pages","pages");async function Ct(e){const t=await mt(e,Wt);return t?(t.pageId=e.toString(),t.title=t.title||t.pageId,t):null}async function It(e){const t=await bt(Wt),a=await Promise.all(t.map((e=>Ct(e.toString()))));return e?a.filter((t=>kt(t.title,e))):a}async function At({page:e}){await vt(e.pageId,e,Wt)}async function Mt(e){await St(e,Wt)}async function Ot({pageId:e,page:t}){if(void 0===await Ct(e))throw new Error("page not found");await At({page:t}),e!==t.pageId&&await Mt(e)}var Tt;!function(e){e.Label="normal",e.Separator="separator",e.Submenu="submenu",e.Checkbox="checkbox"}(Tt||(Tt={}));const Et={type:Tt.Separator,data:void 0};var Bt;!function(e){e.RegisterProvider="register-provider",e.DeregisterProvider="deregister-provider",e.CreateProviderWindow="create-provider-window",e.GetProviders="get-providers",e.ShowProviderWindow="show-provider-window",e.HideProviderWindow="hide-provider-window",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme",e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.HideStorefront="hide-storefront",e.ShowStorefront="show-storefront"}(Bt||(Bt={}));Ee("__of_workspace_protocol__");const xt=async(e,t)=>{const a=await(async e=>({...e,layoutDetails:{machineId:await lt(),machineName:dt()}}))(t);return{pageId:crypto.randomUUID(),title:e,layout:a,isReadOnly:!1,hasUnsavedChanges:!0}},Rt=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),getPages:async()=>(await ce(e)).dispatch(oe.GetPagesForWindow,e),getPage:async t=>(await ce(e)).dispatch(oe.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>{const a=await ce(e);t?.title||(t.title=await a.dispatch(oe.GetUniquePageTitle,void 0));const n=(await a.dispatch(oe.GetAllAttachedPages,void 0)).find((e=>e.pageId===t.pageId||e.title===t.title));if(n)throw n.pageId===t.pageId?new Error(`page with id ${t.pageId} is already attached to a browser window ${n.parentIdentity.name}`):new Error(`page with title ${t.title} is already attached to a browser window ${n.parentIdentity.name}`);const o={identity:e,pages:[t]};return a.dispatch(oe.AttachPagesToWindow,o)},removePage:async t=>(await ce(e)).dispatch(oe.DetachPagesFromWindow,{identity:e,pageIds:[t]}),setActivePage:async t=>(await ce(e)).dispatch(oe.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.UpdatePageForWindow,t)},reorderPages:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await ce(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await ce(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},_openViewTabContextMenu:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await ce(e);return(await Re(e)).dispatch(Ve.OpenSaveModalInternal,t)},_openSaveButtonContextMenu:async t=>{const a=await ce(e);return t.identity=e,a.dispatch(oe.OpenSaveButtonContextMenuInternal,t)}});let _t=!1;const Lt=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>Rt(e),createWindow:async a=>{await ce(e),_t||(_t=!0,(async e=>{J(z.Browser,e)})({allowed:!0}));const n=await t.createWindow(a);return Rt(n.identity)},getAllAttachedPages:async()=>(await ce(e)).dispatch(oe.GetAllAttachedPages,void 0),getAllWindows:async()=>{await ce(e);return(await fin.Application.wrapSync(e).getChildWindows()).filter((e=>e.identity.name.includes("internal-generated-window-"))).map((e=>Rt(e.identity)))},getUniquePageTitle:async t=>(await ce(e)).dispatch(oe.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await ce(e)).dispatch(oe.GetLastFocusedBrowserWindow,void 0)}},Vt=e=>({createPage:async t=>(await ce(e)).dispatch(oe.CreateSavedPageInternal,t),deletePage:async t=>(await ce(e)).dispatch(oe.DeleteSavedPageInternal,t),updatePage:async t=>(await ce(e)).dispatch(oe.UpdateSavedPageInternal,t),getPage:async t=>(await ce(e)).dispatch(oe.GetSavedPage,t),getPages:async t=>(await ce(e)).dispatch(oe.GetSavedPages,t),savePage:async t=>(await ce(e)).dispatch(oe.SavePage,t),createWorkspace:async t=>(await se(e)).dispatch(oe.CreateSavedWorkspace,t),deleteWorkspace:async t=>(await se(e)).dispatch(oe.DeleteSavedWorkspace,t),updateWorkspace:async t=>(await se(e)).dispatch(oe.UpdateSavedWorkspace,t),getWorkspace:async t=>(await se(e)).dispatch(oe.GetSavedWorkspace,t),getWorkspaces:async t=>(await se(e)).dispatch(oe.GetSavedWorkspaces,t),saveWorkspace:async t=>(await se(e)).dispatch(oe.SaveWorkspace,t)}),Dt=e=>({getThemes:async()=>(await se(e)).dispatch(oe.GetThemes,void 0)}),Ut=e=>{const t=fin.Platform.wrapSync(e);return Object.assign(t,{applySnapshot:async(t,a)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,a)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),launchApp:async t=>{t.target||(t.target={uuid:W,name:C,entityType:I||"unknown"});return(await se(e)).dispatch(oe.LaunchApp,t)},_invokeCustomAction:async(t,a)=>{const n=await se(e),o={actionId:t,payload:{...a,callerType:a.callerType||h.API}};return n.dispatch(oe.InvokeCustomActionInternal,o)},_requestQuitPlatformDialog:async t=>(await se(e)).dispatch(oe.RequestQuitPlatformDialogInternal,t),getCurrentWorkspace:async()=>(await se(e)).dispatch(oe.GetCurrentWorkspace,void 0),applyWorkspace:async t=>(await se(e)).dispatch(oe.ApplyWorkspace,t),setActiveWorkspace:async t=>(await se(e)).dispatch(oe.SetActiveWorkspace,t),Theme:Dt(e),Browser:Lt(e),Storage:Vt(e)})},Ft=()=>Ut(fin.me.identity),Gt=async(e=G)=>{const{workspacePlatform:t}=await F(e).getOptions(),a=t?.newPageUrl,n=t?.newTabUrl;return{newPageUrl:a,newTabUrl:n}},$t=async(e=G)=>{const t=await Ft().Browser.getUniquePageTitle("Untitled Page"),a=await(async(e=G)=>{const{newPageUrl:t}=await Gt(e);if(!t)throw new Error("Trying to create a new page without a newPageUrl set");return Ce("New Tab",t,e)})(e);return xt(t,a)},Nt={type:Tt.Label,label:"Close Window",data:{type:u.CloseWindow}},jt={type:Tt.Label,label:"Open Storefront",data:{type:u.OpenStorefront}},Ht={type:Tt.Label,label:"Quit Platform",data:{type:u.Quit}},qt={type:Tt.Label,label:"New Window",data:{type:u.NewWindow}},Kt={type:Tt.Label,label:"Save Page",data:{type:u.SavePage}},Qt={type:Tt.Label,label:"Save Page As...",data:{type:u.SavePageAs}},zt={type:Tt.Label,label:"Restore to Last Saved Changes",data:{type:u.RestoreChanges}},Jt={type:Tt.Label,label:"Save Workspace",data:{type:u.SaveWorkspace}},Xt={type:Tt.Label,label:"Save Workspace As...",data:{type:u.SaveWorkspaceAs}},Yt={type:Tt.Label,label:"Rename Workspace",data:{type:u.RenameWorkspace}},Zt="Switch Workspace",ea="Delete Workspace",ta=[Nt,Et,jt,Et,Ht],aa=[Et,Nt,Et,Ht],na=(e,t,a)=>t.map((t=>{const n=t.workspaceId===e.workspaceId;return{label:t.title,type:Tt.Checkbox,enabled:!n,checked:n,data:{type:a,workspaceId:t.workspaceId}}})),oa=async e=>{const t=await Q(),{newPageUrl:a}=await Gt(e),n=await(async e=>{const t=F(e),{workspacePlatform:a}=await t.getOptions();return a?.disableMultiplePages})(e),o=await(async e=>{const t=F(e),{workspacePlatform:a}=await t.getOptions();return a?.isLocked})(e),r=[];var i;a&&(r.push(qt),n||r.push((i=!o,{type:Tt.Label,label:"New Page",data:{type:u.NewPage},enabled:i}))),r.push(Et);const s=Ft(),c=await s.getCurrentWorkspace(),d=await s.Storage.getWorkspaces(),p=d.find((e=>e.workspaceId===c.workspaceId));return p?r.push(zt):r.push({label:zt.label,enabled:!1}),r.push(Jt,Xt),p?r.push(Yt):r.push({label:Yt.label,enabled:!1}),d.some((e=>e.workspaceId!==c.workspaceId))?r.push({label:Zt,submenu:na(c,d,u.SwitchWorkspace)},{label:ea,submenu:na(c,d,u.DeleteWorkspace)}):r.push({label:Zt,enabled:!1},{label:ea,enabled:!1}),r.push(Et,Kt,Qt),t?[...r,...ta]:[...r,...aa]};let ra="Platform";const ia=async()=>ra;var sa,ca,da;!function(e){e.Home="/home/",e.HomeSearch="/home/?deeplink=search",e.HomePagesRename="/home/pages/rename/",e.Dock="/dock/",e.BrowserPagesLanding="/browser/pages/landing/",e.HomeIndicator="/home/indicator/",e.Browser="/browser/",e.BrowserPopupMenu="/browser/popup-menu/",e.Provider="/provider/",e.BrowserPopupMenuSharePage="/browser/popup-menu/share-page/",e.BrowserPopupMenuSaveModal="/browser/popup-menu/save-modal/",e.BrowserPopupMenuLayouts="/browser/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/browser/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/browser/indicator/",e.ResponseModal="/browser/popup-menu/response-modal/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/"}(sa||(sa={})),function(e){e.IconOpenFinLogo="/icons/openfinlogo.svg",e.IconFilter="/icons/filter.svg"}(ca||(ca={})),function(e){e.Search="search"}(da||(da={}));const pa={...ca,...sa};var la;!function(e){e.Home="/home",e.Browser="/browser",e.Provider="/provider",e.Storefront="/storefront",e.Dock="/dock"}(la||(la={}));const ua="/workspace/9.0.11";function wa(){return ua.substring(0,ua.length-"".length)}function fa(e){if(!P)throw new Error("getAbsoluteRoutePath can only be used in a window");return function(){if(!window)throw new Error("getAbsoluteBasePath can only be used in a window");return`${window.origin}${wa()}`}()+e}const ga={name:V.BrowserMenu,alwaysOnTop:!0,autoShow:!1,frame:!1,resizable:!1,backgroundColor:"#2f3136",smallWindow:!0,showTaskbarIcon:!1,backgroundThrottling:!0};function ya(e){const t={...ga,...e};return t.url=function(e){if(!P)throw new Error("resolveAbsolutePath can only be used in a window");return e.startsWith("http")?e:`${window.origin}${e}`}(t.url),t}var ha,ma;!function(e){e.Update="update",e.Response="response"}(ha||(ha={})),function(e){e.Canceled="canceled",e.Negative="negative",e.Affirmative="affirmative"}(ma||(ma={}));const va=function(e){const t=new Map;return{emit:Ie(t,(t=>S&&fin.InterApplicationBus.publish(e,t))),addListener:Ae(t,(t=>S&&fin.InterApplicationBus.subscribe({uuid:fin.me.uuid},e,t))),removeListener:Oe(t),once:Me(t)}}("window.menu"),Sa=e=>va.emit(ha.Response,e),Pa=Se((()=>L().getChildWindows()),500);const ba=new Map;async function ka({options:e,parameters:t},a){const n=ya(e),{name:o}=n;let r=await async function(e){return(await Pa()).find((t=>t.identity.name===e))}(o);return r||(r=await async function(e){const t=ya(e);if(!ba.has(t.name)){const e=(async()=>{const e=await fin.Platform.getCurrentSync().createWindow(t);return e.once("closed",(()=>{ba.delete(t.name)})),e})();ba.set(t.name,e)}return ba.get(t.name)}(n)),await async function(e,t){const a=ya(e),{top:n,left:o,defaultWidth:r,defaultHeight:i}=a,s={top:n,left:o,width:r,height:i},c={parentName:fin.Window.getCurrentSync().identity.name};for(const[e,a]of Object.entries(c))t.set(e,a);const d=t.toString(),p=`${a.url}?${d}`;va.emit(ha.Update,a.name,s,p),await Sa({name:a.name,data:ma.Canceled})}(e,t||new URLSearchParams),a&&r.center(),r}const Wa=async(e,t,a)=>{const n=t?F(t):$();if(!a){await(async(e=fin.me.identity)=>{const t=F(e),a=await t.getBounds();(a.right>screen.availLeft+screen.width||a.left<screen.availLeft||a.bottom>screen.availTop+screen.height||a.top<screen.availTop)&&await t.center()})(n.identity);const t=(e=>({left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}))(await n.getBounds()),{defaultHeight:a,defaultWidth:o}=e;return((e,t)=>{const{height:a,width:n}=t,o=n/2,r=a/2;return{left:e.left-o,top:e.top-r}})(t,{height:a,width:o})}return await n.getBounds()},Ca=async({options:e,content:t},a)=>{const n=new URLSearchParams({...t});return await ka({options:e,parameters:n},a),new Promise((t=>{va.once(ha.Response,(a=>{a.name===e.name&&t(a)}))}))},Ia=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Switch Workspace",windowOptions:{url:M+pa.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:`Are you sure you want to switch to ${t}`,body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),o=await Wa(a,a.modalParentIdentity),r={...a,top:o.top,left:o.left};return(await Ca({options:r,content:n})).data===ma.Affirmative},Aa=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Delete Workspace",windowOptions:{url:M+pa.ResponseModal,name:V.BrowserMenu,defaultHeight:144,defaultWidth:372,modalParentIdentity:e},content:{title:"Are you sure you want to permanently delete this workspace?",body:`${t}`,affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),o=await Wa(a,a.modalParentIdentity),r={...a,top:o.top,left:o.left};return(await Ca({options:r,content:n})).data===ma.Affirmative},Ma=async(e,t,a)=>{const n=a?void 0:e,{windowOptions:o,content:r}=await(async(e,t)=>({title:"Platform Quit",windowOptions:{url:M+pa.ResponseModal,name:V.BrowserMenu,defaultHeight:134,defaultWidth:474,modalParentIdentity:t},content:{title:`Close the ${"Platform"===e?"platform":`${e} Platform`}?`,body:"Closing a platform will close any workspaces, apps or any processes that are running.",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(t,n),i=await Wa(o,o.modalParentIdentity),s={...o,top:i.top,left:i.left};return(await Ca({options:s,content:r},a)).data===ma.Affirmative},Oa=async e=>{const{windowOptions:t,content:a}=await(async e=>({title:"Restore Changes",windowOptions:{url:M+pa.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:"Are you sure you want to restore to last saved changes?",body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e),n=await Wa(t,t.modalParentIdentity),o={...t,top:n.top,left:n.left};return(await Ca({options:o,content:a})).data===ma.Affirmative};var Ta;!function(e){e.ERROR="error",e.SUCCESS="success",e.INFO="info"}(Ta||(Ta={}));const Ea={alwaysOnTop:!0,autoShow:!1,frame:!1,resizable:!1,showTaskbarIcon:!1};var Ba;!function(e){e.Locked="LockClosedIcon",e.Unlocked="LockOpen1Icon"}(Ba||(Ba={}));const xa=function(e=Ea){const t=new Map;return async(a,n,o,r)=>{if(t.has(a)){const{currentUrl:e,currentName:o}=t.get(a);if(e===n)return;const r=fin.Window.wrapSync({uuid:fin.me.uuid,name:o});await r.close()}const i=`${V.HomeInternal}-${Date.now()}${Math.random()}`;t.set(a,{currentUrl:n,currentName:i});const s=await fin.Platform.getCurrentSync().createWindow({...e,name:i,url:n});((e,t)=>{const a=document.createElement("div");a.setAttribute("aria-live",t||"polite"),(e=>{e.style.position="absolute",e.style.width="1px",e.style.height="1px",e.style.padding="0",e.style.margin="-1px",e.style.overflow="hidden",e.style.whiteSpace="nowrap",e.style.border="0"})(a),document.body.appendChild(a),setTimeout((()=>{a.innerHTML=e}),100),setTimeout((()=>{document.body.removeChild(a)}),1e3)})(`New ${r} indicator: ${o}`),s.once("closed",(()=>{t.delete(a)}))}}();async function Ra(e,t,a,n){const o=new URLSearchParams;o.append("type",e),o.append("message",t),o.append("parentName",a||""),o.append("icon",n||"");const r=`${fa(pa.BrowserIndicator)}?${o.toString()}`;return xa("browser"+a,r,t,e)}function _a(e,t,a){return Ra(Ta.SUCCESS,e,t,a)}const La=async e=>{const t=Ft(),a=await t.getCurrentWorkspace(),n=await t.Storage.getWorkspaces(),o=a.workspaceId;if(n.some((e=>e.workspaceId===o)))t.Storage.saveWorkspace(a),t.setActiveWorkspace(a),_a("Workspace Saved",e.name);else{t.Browser.wrapSync(e)._openSaveModal({menuType:m.SAVE_WORKSPACE})}},Va=e=>{Ft().Browser.wrapSync(e)._openSaveModal({menuType:m.SAVE_WORKSPACE_AS})},Da=async(e,t)=>{const a=Ft().Browser.wrapSync(e),n=await Ft().Storage.getPages(),o=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive)),r=n.some((e=>o.pageId===e.pageId));if(r)try{await Ft().Storage.savePage((d=o,{...d,hasUnsavedChanges:void 0,parentIdentity:void 0,isActive:void 0})),await a.updatePage({pageId:o.pageId,page:{hasUnsavedChanges:!1}}),_a("Page saved",o.parentIdentity.name)}catch{i="Page failed to save",s=o.parentIdentity.name,Ra(Ta.ERROR,i,s,c)}else a._openSaveModal({id:o.pageId,menuType:m.SAVE_PAGE});var i,s,c,d},Ua=async(e,t)=>{const a=Ft().Browser.wrapSync(e),n=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive));a._openSaveModal({id:n.pageId,menuType:m.SAVE_PAGE_AS})},Fa=async(e,t)=>{if(!e)return;const a=t.identity,n=await Re(a),o=Ft().Browser.wrapSync(t.identity);switch(e.type){case u.NewWindow:const{newPageUrl:t}=await Gt(a);if(!t)throw new Error("Trying to create a new empty window without a newPageUrl set");Ft().createView({target:void 0,url:t});break;case u.NewPage:await(async e=>{const t=Ft().Browser.wrapSync(e),a=await $t(e);await t.addPage(a),await t.setActivePage(a.pageId)})(a);break;case u.CloseWindow:n.dispatch(Ve.CloseBrowserWindow);break;case u.SaveWorkspace:await La(a);break;case u.SavePage:await Da(a);break;case u.SavePageAs:await Ua(a);break;case u.SaveWorkspaceAs:await Va(a);break;case u.RenameWorkspace:o._openSaveModal({menuType:m.RENAME_WORKSPACE});break;case u.SwitchWorkspace:await(async(e,t)=>{const a=Ft(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await Ia(e,n.title)&&(await a.applyWorkspace(n),_a("Workspace Switched!",null))})(a,e);break;case u.DeleteWorkspace:await(async(e,t)=>{const a=Ft(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await Aa(e,n.title)&&(await a.Storage.deleteWorkspace(t.workspaceId),_a("Workspace Deleted!",e.name))})(a,e);break;case u.Quit:const r=await ia();await Ma(a,r)&&fin.Platform.getCurrentSync().quit();break;case u.OpenStorefront:(async()=>{await Q()&&j(N)})();break;case u.RestoreChanges:const i=await async function(){const e=Ft(),t=await e.getCurrentWorkspace();return(await e.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId))}();await Oa(a)&&await ue(i);break;case u.Custom:if(e.action){const t={callerType:h.GlobalContextMenu,windowIdentity:a,customData:e.action.customData};Ft()._invokeCustomAction(e.action.id,t)}}},Ga=async(e,t)=>{const a=await Re(t.identity),n=Ft();switch(e?.type){case w.Save:await Da(t.identity,t.pageId);break;case w.SaveAs:await Ua(t.identity,t.pageId);break;case w.Rename:await n.Browser.wrapSync(t.identity)._openSaveModal({menuType:m.RENAME_PAGE,id:t.pageId});break;case w.Duplicate:a.dispatch(Ve.DuplicatePage,t.pageId);break;case w.Close:a.dispatch(Ve.ClosePage,t.pageId);break;case w.Custom:if(e.action){const a={callerType:h.PageTabContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Ft()._invokeCustomAction(e.action.id,a)}}},$a=async(e,t)=>{if(e?.type){const a=t.identity;switch(e.type){case y.SavePage:await Da(a);break;case y.SaveWorkspace:await La(a);break;case y.SavePageAs:await Ua(a);break;case y.SaveWorkspaceAs:await Va(a);break;case y.Custom:if(e.action){const a={callerType:h.SaveButtonContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Ft()._invokeCustomAction(e.action.id,a)}}}},Na=async(e,t)=>{const a=t.selectedViews[0],n=fin.View.wrapSync(a),o=await(async e=>{const{newTabUrl:t}=await Gt(e);if(!t)throw new Error("Trying to create a new page without a newTabUrl set");return{...Ce("New View",t),url:t,target:e}})(e);await Ft().createView(o,e,n.identity)},ja=async(e,t)=>{const a=await(e=>Promise.all(e.map((async e=>fin.View.wrapSync(e).getInfo()))))(t),{newPageUrl:n,newTabUrl:o}=await Gt(e);a.forEach((async e=>{e.url!==n&&e.url!==o&&await fin.System.openUrlWithBrowser(e.url)}))},Ha=(e,t)=>{t.forEach((async t=>{const a=fin.View.wrapSync(t);await(async(e,t)=>{const{url:a}=await t.getInfo(),n={...await t.getOptions(),url:a,target:e,name:void 0};await Ft().createView(n,e,t.identity)})(e,a)}))},qa=async(e,t)=>{if(!e)return;const a=t.identity;switch(e.type){case f.CloseViews:await(async(e,t)=>{if((await fin.Window.wrapSync(e).getCurrentViews()).length!==t.length)t.forEach((async e=>{const t=fin.View.wrapSync(e);await t.destroy()}));else{const t=(await Ft().Browser.wrapSync(e).getPages()).find((e=>e.isActive));(await Re(e)).dispatch(Ve.ClosePage,t?.pageId)}})(a,t.selectedViews);break;case f.OpenWithDefaultBrowser:await ja(a,t.selectedViews);break;case f.ReloadViews:t.selectedViews.forEach((async e=>{const t=fin.View.wrapSync(e);await t.reload()}));break;case f.NewView:await Na(a,t);break;case f.DuplicateViews:Ha(a,t.selectedViews);break;case f.AddToChannel:(async(e,t,a)=>{const n={newChannelId:t,selectedViews:a};(await Re(e)).dispatch(Ve.AddToChannel,n)})(a,e.option,t.selectedViews);break;case f.RemoveFromChannel:(async(e,t)=>{(await Re(e)).dispatch(Ve.RemoveFromChannel,t)})(a,t.selectedViews);break;case f.Custom:if(e.action){const n={callerType:h.ViewTabContextMenu,windowIdentity:a,selectedViews:t.selectedViews,customData:e.action.customData};Ft()._invokeCustomAction(e.action.id,n)}}};async function Ka(e,t){const a=await oa(e.identity),n=await ia();a.find((e=>e.data?.type===u.Quit)).label=`Quit ${n}`;const o={...e,template:a,callback:Fa};await this.openGlobalContextMenu(o,t)}const Qa=async(e,t)=>{const{x:a,y:n,identity:o,template:r,callback:i}=e,{data:s}=await function(e,t){if(!S)throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");if(!t&&!fin.me.isWindow)throw new Error("showContextMenu can only be used in an OpenFin window.");return(t||fin.Window.getCurrentSync()).showPopupMenu(e)}({x:a,y:n,template:r},fin.Window.wrapSync(o));i(s,e)};async function za(e,t){const a={...e,callback:qa};await this.openViewTabContextMenu(a,t)}async function Ja(e,t){const a=await(async(e,t)=>{const a=await Ft().Storage.getPage(e),n=(await Ge()).find((t=>t.pageId===e)),{workspacePlatform:o}=await F(t).getOptions(),r=!(o.isLocked||o.preventPageClose||n.closeButton?.disabled||n.closeButton?.hidden);return[{type:Tt.Label,label:"Save Page",data:{type:w.Save}},{type:Tt.Label,label:"Save Page As",data:{type:w.SaveAs}},Et,{type:Tt.Label,label:"Rename Page",data:{type:w.Rename},enabled:!!a},{type:Tt.Label,label:"Duplicate Page",data:{type:w.Duplicate},enabled:!o.isLocked},Et,{type:Tt.Label,label:"Close Page",data:{type:w.Close},enabled:r}]})(e.pageId,e.identity),n={...e,template:a,callback:Ga};await this.openPageTabContextMenu(n,t)}async function Xa(e,t){const a={...e,template:await(async()=>[{type:Tt.Label,label:"Save Workspace",data:{type:y.SaveWorkspace}},{type:Tt.Label,label:"Save Workspace As",data:{type:y.SaveWorkspaceAs}},{type:Tt.Separator,data:void 0},{type:Tt.Label,label:"Save Page",data:{type:y.SavePage}},{type:Tt.Label,label:"Save Page As",data:{type:y.SavePageAs}}])(),callback:$a};await this.openSaveButtonContextMenu(a,t)}const Ya=b&&gt("openfin-workspace-platform-workspaces","workspaces");async function Za(e){const t=await mt(e,Ya);return t?(t.workspaceId=e.toString(),t.title=t.title||t.workspaceId,t):null}async function en(e){const t=await bt(Ya),a=await Promise.all(t.map((e=>Za(e.toString()))));return e?a.filter((t=>kt(t.title,e))):a}async function tn({workspace:e}){await vt(e.workspaceId,e,Ya)}async function an(e){await St(e,Ya)}async function nn({workspaceId:e,workspace:t}){if(void 0===await Za(e))throw new Error("workspace not found");await tn({workspace:t}),e!==t.workspaceId&&await an(e)}async function on({app:e,target:t}){const a=fin.Platform.getCurrentSync();switch(e.manifestType){case c.Snapshot:return a.applySnapshot(e.manifest);case c.View:return async function(e,t){const a=fin.Platform.getCurrentSync();if("view"===t.entityType){const a=fin.View.wrapSync(t),n=await a.getParentLayout();return await n.replaceView(t,{manifestUrl:e.manifest,url:void 0,target:void 0}),a.destroy()}return a.createView({name:void 0,url:void 0,manifestUrl:e.manifest,target:void 0})}(e,t);case c.External:return fin.System.launchExternalProcess({path:e.manifest,uuid:e.appId});default:return fin.Application.startFromManifest(e.manifest)}}const rn=e=>e&&"object"==typeof e&&!Array.isArray(e);function sn(e,...t){if(!t.length)return e;const a=t.shift();return rn(e)&&rn(a)&&Object.entries(a).forEach((([t,a])=>{if(rn(a))return e[t]||(e[t]={}),sn(e[t],a);e[t]=a})),sn(e,...t)}const cn=M+pa.Browser;function dn(e,t){const a=sn({},t,e);return a.detachOnClose=!0,a}async function pn(e,t,a){const n=e.manifestUrl?await t({manifestUrl:e.manifestUrl},a):void 0;if(n?.interop&&e.interop){const t={...e,...n,interop:e.interop};return delete t.manifestUrl,t}return e}const ln=e=>{const t=e.name===V.Home,a=e.name?.startsWith(V.HomeInternal),n=e.name?.startsWith(V.BrowserMenu);return!t&&!a&&!n},un=e=>"workspacePlatform"in e?e:(({workstacks:e,pages:t,...a})=>({...a,workspacePlatform:{pages:t||e||null}}))(e),wn={contextMenuSettings:{reload:!1},backgroundThrottling:!0,url:cn,contextMenu:!0,closeOnLastViewRemoved:!1,experimental:{showFavicons:!0,defaultFaviconUrl:`${M}/icons/defaultFavicon.svg`},permissions:{System:{openUrlWithBrowser:{enabled:!0,protocols:["mailto"]}}}},fn={dimensions:{borderWidth:3,headerHeight:30}},gn=async(e,t)=>{const a=await Ft().Storage.getPages(),n=await Ft().Browser.getAllAttachedPages();return e.map((e=>{let o=e.title;void 0===e.pageId&&(e.pageId=crypto.randomUUID());const r=a.find((e=>e.title===o));return(r&&r.pageId!==e.pageId||n.find((e=>e.title===o)))&&(o=le(e.title,[...a,...n].map((e=>e.title)))),n.push({...e,title:o}),{...t,...e,title:o,layout:(i=e.layout,be({...i},ke))};var i}))};var yn;!function(e){e.Browser="browser",e.Platform="platform",e.Classic="classic",e.Mixed="mixed"}(yn||(yn={}));const hn=e=>{const t=fin.Window.wrapSync(e);return Promise.all([t.bringToFront(),t.restore(),t.focus()])};async function mn(e){const t=(await q()).map((async e=>{const t=await e.getOptions();t.workspacePlatform?.pages&&t.layout&&await(async e=>(await Re(e)).dispatch(Ve.UpdatePagesWindowOptions))(e.identity)}));return await Promise.all(t),e?e():wt()}const vn=async e=>{await Ma(fin.me.identity,e.title??await ia(),e.shouldCenterOnMonitor)&&fin.Platform.getCurrentSync().quit()};let Sn=[];const Pn=()=>Sn;const bn=(e,t)=>async a=>{const n=null!==e;class o extends a{constructor(){super(),this.isWorkspacePlatform=()=>({isWorkspacePlatform:!0,isBrowserInitialized:!!e}),this.addPage=this.attachPagesToWindow,this.detachPagesFromWindow=Xe,this.getAllAttachedPages=Ge,this.getPagesForWindow=Ze,this.getPageForWindow=et,this.setActivePage=Ye,this.launchApp=on,this.savePage=Qe,this.saveWorkspace=ye,this.createSavedPageInternal=He,this.updateSavedPageInternal=Ke,this.deleteSavedPageInternal=qe,this.reorderPagesForWindow=tt,this.getUniquePageTitle=at,this.updatePageForWindow=Je,this.getLastFocusedBrowserWindow=me,this.getThemes=Pn,this.invokeCustomActionInternal=ct,this.requestQuitPlatformDialogInternal=vn,this.getCurrentWorkspace=ge,this.applyWorkspace=ue,this.setActiveWorkspace=we,this.openGlobalContextMenuInternal=this.openGlobalContextMenuInternal.bind(this),this.openGlobalContextMenu=this.openGlobalContextMenu.bind(this),this.getSavedPages=this.getSavedPages.bind(this),this.getSavedPage=this.getSavedPage.bind(this),this.createSavedPage=this.createSavedPage.bind(this),this.updateSavedPage=this.updateSavedPage.bind(this),this.deleteSavedPage=this.deleteSavedPage.bind(this),this.attachPagesToWindow=this.attachPagesToWindow.bind(this),this.openViewTabContextMenuInternal=this.openViewTabContextMenuInternal.bind(this),this.openViewTabContextMenu=this.openViewTabContextMenu.bind(this),this.openPageTabContextMenuInternal=this.openPageTabContextMenuInternal.bind(this),this.openPageTabContextMenu=this.openPageTabContextMenu.bind(this),this.getSavedWorkspaces=this.getSavedWorkspaces.bind(this),this.getSavedWorkspace=this.getSavedWorkspace.bind(this),this.createSavedWorkspace=this.createSavedWorkspace.bind(this),this.updateSavedWorkspace=this.updateSavedWorkspace.bind(this),this.deleteSavedWorkspace=this.deleteSavedWorkspace.bind(this),this.getCurrentWorkspace=this.getCurrentWorkspace.bind(this),this.applyWorkspace=this.applyWorkspace.bind(this),this.setActiveWorkspace=this.setActiveWorkspace.bind(this),this.openSaveButtonContextMenu=this.openSaveButtonContextMenu.bind(this),this.openSaveButtonContextMenuInternal=this.openSaveButtonContextMenuInternal.bind(this)}async getSnapshot(){const e=n?await mn((async()=>wt(await super.getSnapshot(void 0,fin.me.identity)))):await wt(await super.getSnapshot(void 0,fin.me.identity));return{...e,windows:e.windows.filter(ln).map(ut)}}async applySnapshot({snapshot:e,options:t}){const a=e=>super.applySnapshot({snapshot:e,options:{...t,closeExistingWindows:!1}});let o=e;"string"==typeof o&&(o=await super.fetchManifest({manifestUrl:o},fin.me.identity));const r=function(e){let t=!1,a=!1;for(const n of e.windows){if(t&&a)break;n.workspacePlatform?.pages?.length?a=!0:n.layout&&(t=!0)}return t&&a?yn.Mixed:t?yn.Platform:a?yn.Browser:e.windows.length?yn.Classic:null}(o);if(r===yn.Mixed)throw new Error("This snapshot cannot be applied as it contains a mixture of browser and platform windows.");if(n)yn.Platform;else if(r===yn.Browser)throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");return t?.closeExistingWindows&&await async function(){const e=await q();await Promise.all(e.map((e=>e.close(!0).catch((()=>{})))))}(),n?async function(e,t){const a=await Ge(),n=e.snapshotDetails?.monitorInfo||await fin.System.getMonitorInfo(),[o,r]=(e.windows||[]).reduce((([e,t],a)=>a?.workspacePlatform?.pages?.length?[[...e,a],t]:[e,[...t,a]]),[[],[]]),i=new Map;a.forEach((e=>i.set(e.pageId,e)));const s=[],c=o.map((async e=>{const t=un(e),a=[],n=(e=>{let t=!1;const a=(e||[]).map((e=>{const a=function({id:e,name:t,...a}){return{pageId:e,title:t,...a}}(e);return t&&a.isActive&&(a.isActive=!1),a.isActive&&(t=!0),a}));return!t&&a.length&&(a[0].isActive=!0),a})(t?.workspacePlatform?.pages);if(!n?.length){const e=await at();a.push(await xt(e,t.layout))}let o;n.forEach((e=>{const t=i.get(e.pageId);t?o=t:a.push(e)})),o&&await Promise.all([Ye({identity:o.parentIdentity,pageId:o.pageId}),hn(o.parentIdentity)]),a.length&&s.push({...t,workspacePlatform:{...t.workspacePlatform,pages:a}})}));if(await Promise.all(c),!s.length&&!r.length)return;const d=fin.Platform.getCurrentSync();return(t||d.applySnapshot.bind(d))({...e,snapshotDetails:{...e.snapshotDetails,monitorInfo:n},windows:[...s,...r]})}(o,a):a(o)}async createWindow(t,a){t.workspacePlatform?.toolbarOptions?.buttons&&(e=>{const t=e.filter((e=>e.type!==g.Custom)),a=new Set;for(const e of t){if(a.has(e.type))throw new Error(`Encountered a duplicate of ${e.type} button. No more than one instance of a button type may be provided.`);a.add(e.type)}})(t.workspacePlatform.toolbarOptions.buttons);let o=un(t);if(n){const t=this.getThemes();o=await(async(e,t,a)=>{let n=e;const o=n?.workspacePlatform?.pages;if(o){const e=o.find((e=>e.isActive));e?n.layout=e.layout:(o[0].isActive=!0,n.layout=o[0].layout)}if(n.layout){if(n=sn({},t.defaultWindowOptions,n,wn),n.layout=sn(n.layout,fn),(n.icon||n.taskbarIcon)&&(n.taskbarIconGroup=n.taskbarIconGroup||fin.me.identity.uuid),!n.backgroundColor){const e=a?.palette;n.backgroundColor=e?.background2||e?.backgroundPrimary}const e=n.workspacePlatform.newTabUrl;if(e&&(n.layout.settings||(n.layout.settings={}),n.layout.settings.newTabButton={url:e}),n=((e,t)=>{const a=e;return a.workspacePlatform||(a.workspacePlatform={}),a.workspacePlatform._internalDeferShowOptions={setAsForeground:!!t,deferShowEnabled:!0,autoShow:a.workspacePlatform?._internalAutoShow||a.workspacePlatform?._internalDeferShowOptions?.autoShow||void 0===a.autoShow||a.autoShow},a.autoShow=!1,a})(n,!0),!n.workspacePlatform.pages?.length){const e=await at("Untitled Page"),t={...await xt(e,n.layout),isActive:!0};n.workspacePlatform.pages=[t]}}return n.workspacePlatform?.pages&&(n.workspacePlatform.pages=await gn(n.workspacePlatform.pages,t?.defaultPageOptions)),n.cornerRounding&&delete n.cornerRounding,n})(o,e,t[0])}o=await(async e=>{const t=await fin.System.getMonitorInfo(),a=t.primaryMonitor.availableRect.bottom-t.primaryMonitor.availableRect.top,n=t.primaryMonitor.availableRect.right-t.primaryMonitor.availableRect.left;return e.defaultHeight=e.defaultHeight||"800",e.defaultWidth=e.defaultWidth||"800",a<e.defaultHeight&&(e.defaultHeight=a),n<e.defaultWidth&&(e.defaultWidth=n),e})(o);const r=(e,t)=>super.createWindow(e,t),i=n?(e=>async(t,a)=>{let n=!1;const o=await e(t,a);return t?.workspacePlatform?._internalDeferShowOptions?.deferShowEnabled?(await o.addListener(D.ShowRequested,(async()=>{if(n)return;const e=await o.getOptions();await o.updateOptions({workspacePlatform:{...e.workspacePlatform,_internalDeferShowOptions:{...e.workspacePlatform._internalDeferShowOptions,autoShow:!0}}}),n=!0})),o):o})(r):r;return i(o,a)}async createView(t,a){return t.opts=dn(t.opts,e?.defaultViewOptions),t.opts=await pn(t.opts,this.fetchManifest,a),super.createView(t,a)}async replaceView(t,a){return t.opts.newView=await dn(t.opts.newView,e?.defaultViewOptions),t.opts.newView=await pn(t.opts.newView,this.fetchManifest,a),super.replaceView(t,a)}async replaceLayout(e,t){return delete e.opts.layout?.dimensions,super.replaceLayout(e,t)}async closeView(e,t){const a=fin.View.wrapSync(e.view);await super.closeView(e,t),await a.destroy().catch((e=>e))}async getSavedPage(...e){return Ct.apply(this,e)}async getSavedPages(...e){return It.apply(this,e)}async createSavedPage(...e){return At.apply(this,e)}async deleteSavedPage(...e){return Mt.apply(this,e)}async updateSavedPage(...e){return Ot.apply(this,e)}async getSavedWorkspace(...e){return Za.apply(this,e)}async getSavedWorkspaces(...e){return en.apply(this,e)}async createSavedWorkspace(...e){return tn.apply(this,e)}async deleteSavedWorkspace(...e){return an.apply(this,e)}async updateSavedWorkspace(...e){return nn.apply(this,e)}async attachPagesToWindow(t){t.pages=await gn(t.pages,e?.defaultPageOptions),await ze(t)}async openGlobalContextMenuInternal(...e){return Ka.apply(this,e)}async openGlobalContextMenu(...e){return Qa.apply(this,e)}async openViewTabContextMenuInternal(...e){return za.apply(this,e)}async openViewTabContextMenu(...e){return Qa.apply(this,e)}async openPageTabContextMenuInternal(...e){return Ja.apply(this,e)}async openPageTabContextMenu(...e){return Qa.apply(this,e)}async openSaveButtonContextMenu(...e){return Qa.apply(this,e)}async openSaveButtonContextMenuInternal(...e){return Xa.apply(this,e)}}return"function"==typeof t?t(o):new o};async function kn(){!function(){const e=L();e.addListener(B.WindowOptionsChanged,rt),e.addListener(B.WindowClosed,it),e.addListener(B.WindowCreated,it),fin.InterApplicationBus.subscribe({uuid:fin.me.identity.uuid},"browser-window-ready",it)}(),async function(){const e=fin.Application.getCurrentSync();await e.addListener("window-focused",ve)}();we(await fe())}let Wn;function Cn({overrideCallback:e,interopOverride:t,browser:a}){if(!S)throw new Error("Cannot be used outside an OpenFin env.");if(!Wn){fin.Platform.getCurrentSync().once("platform-api-ready",(()=>kn())),a?.title&&(n=a.title,ra=n),Wn=fin.Platform.init({overrideCallback:bn(a,e||a?.overrideCallback),interopOverride:t||a?.interopOverride}),(async e=>{J(z.Platform,e)})({allowed:!0})}var n;return Wn}const In=async({theme:e,customActions:t,...a})=>{const n=O.split(".").map((e=>parseInt(e))),o=await(async e=>new Promise((async t=>{(await Z()).disableRuntimeValidation&&t(!0);const a=(await fin.System.getVersion()).split(".").map((e=>parseInt(e)));t(e.every(((t,n)=>!(n<3)||a[n]===e[n])))})))(n);var r;if(e&&((r=e).forEach((e=>{const t=e.palette.backgroundPrimary;if(!t.includes("#")&&!t.includes("rgb")&&!t.includes("hsl"))throw new Error("Background primary color is not the right format.")})),Sn=r,(async e=>{J(z.Theming,e)})({allowed:!0})),t&&(st=t),o)return Cn(a);throw new Error(`Runtime version is not supported.  ${n[0]}.${n[1]}.${n[2]}.* is required`)}})(),module.exports=n})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={703:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,deregister:()=>et,hide:()=>nt,register:()=>Ye,show:()=>tt});var o={};n.r(o),n.d(o,{subscribe:()=>ae});var r={};n.r(r),n.d(r,{create:()=>He});var i=n(678),s=n(532),a=n(436);const c="home";var d;!function(e){e.Commands="home-commands"}(d||(d={}));var u,p=n(806),l=(n(298),n(758));n(114),n(109),n(427);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(u||(u={}));var f=n(316);const w="all",g="0",h="5",y="6",v=()=>{};function m(e,t){return e?`${e}-${t}`:t}function S(e){return`__search-${e}-topic__`}const P=new Map;function C(e,t){P.has(e)||P.set(e,new Set),P.get(e).add(t)}function k(e,t){const n=P.get(e);n&&n.delete(t)}const W=new Map;function R(e,t){W.has(e)||W.set(e,new Set),W.get(e).add(t)}function T(e,t){const n=W.get(e);n&&n.delete(t)}const I=new Map;async function b(e,t){I.has(e)||I.set(e,new Map),I.get(e).set(t.id,t);const n=P.get(e);if(!n)return;const o=[...n].map((e=>e()));await Promise.all(o)}async function D(e,t){const n=I.get(e);if(!n)return;n.delete(t);const o=W.get(e);if(!o)return;const r=[...o].map((e=>e()));await Promise.all(r)}function B(e){return I.get(e)?[...I.get(e).values()]:[]}function F(e){const t=I.get(e);t&&t.clear()}function L(e,t){const n=I.get(e);return n?n.get(t):null}function A(e,t,n){return{...e,action:n||{...e.actions[0],trigger:f.px.UserAction},dispatcherIdentity:t}}function O(e,t,n="ascending"){const o=e||[];if(!t?.length)return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function x(e){const t={};let n=[];let o=[];let r=u.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,o?.length&&t.onChange()},t.onChange=v;const i={};return t.res=i,i.close=()=>{r!==u.Close&&(r=u.Close,t.onChange())},i.open=()=>{r!==u.Open&&(r=u.Open,t.onChange())},i.respond=n=>{const o=O(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function E(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function V(){return{name:fin.me.name,uuid:fin.me.uuid}}function M(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const _="deregistered or does not exist",$=new Error(`provider ${_}`),q=new Error("provider with name already exists"),G=new Error("bad payload"),H=new Error("subscription rejected"),N=new Error(`channel ${_}`),U=new Map;function j(e){const t=X(e);if(t)return t;throw N}function X(e){const t=U.get(e);if(t)return t}function K(e,t){U.set(e,t)}const J=new Map;function z(e){J.has(e)||J.set(e,new Map);const t=J.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function Z(e,t){return(await j(e)).dispatch(g,t)}function Q({namespacedTopic:e,topic:t}){const n=L.bind(null,e),o=z(e),r=Z.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=G;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=$;return{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=E(t,s,e),d.set(e.id,u));const p=x(),l=()=>{const e=p.getResultBuffer();p.setResultBuffer([]);const t=p.getRevokedBuffer();p.setRevokedBuffer([]);const n=p.getStatus();r({id:s,providerId:a,results:e,revoked:t,status:n})};let f=!0,w=!1;p.onChange=()=>{if(f)return f=!1,void l();w||(w=!0,setTimeout((()=>{w=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,p.res),n=p.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function Y(e,t,n){const o=n||await j(e),r=V(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0},s=await o.dispatch("2",i);return await b(e,{identity:r,...t}),s}async function ee(e,t){const n=await j(e);return await n.dispatch("3",t),D(e,t)}async function te(e,t,n,o){const r=A(n,V(),o),i=L(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await j(e)).dispatch(h,s)}async function ne(e,t){const n={...t,context:t?.context||{}},o={},r=async function*(e,t,{setState:n}){const o=await j(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await j(e)).dispatch(y,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function oe(e){return(await j(e)).dispatch("4",null)}async function re(e){const t=await j(e);var n;n=e,U.delete(n),F(e),await t.disconnect()}function ie(e){const{namespacedTopic:t}=e,n=z(t);return async o=>{if(!X(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);K(t,(async e=>{const{namespacedTopic:t}=e,n=await se(e);for(const e of B(t))await Y(t,e,n);return n})(e))}}async function se(e){const{namespacedTopic:t}=e,n=S(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(g,Q(e)),o.register(y,function(e){const t=z(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)return;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(ie(e)),o}async function ae(e){const t=("string"==typeof e?e:e?.topic)||w,n=("string"==typeof e?null:e?.uuid)||M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=X(o);return i||(i=se(r),K(o,i),await i),{getAllProviders:oe.bind(null,o),register:Y.bind(null,o),search:ne.bind(null,o),deregister:ee.bind(null,o),dispatch:te.bind(null,o),disconnect:re.bind(null,o)}}const ce=new Map;function de(e){const t=ue(e);if(t)return t;throw N}function ue(e){const t=ce.get(e);if(t)return t}const pe=new Map;function le(e,t){pe.has(e)||pe.set(e,new Set),pe.get(e).add(t)}function fe(e,t){const n=pe.get(e);n&&n.delete(t)}function we(e){return[...B(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function ge(e,t){if(L(e,t.id))throw new Error("provider with name already exists");const n=V();await b(e,{identity:n,...t})}function he(e,t){D(e,t)}async function ye(e,t,n,o){const r=L(e,t);if(!r)throw $;const{onResultDispatch:i}=r;if(!i)return;return i(A(n,V(),o))}async function*ve(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=x(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon,dispatchFocusEvents:s.dispatchFocusEvents}};n.push(a),o.push(e);const c=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);a.results=O(a.results,n),a.context={...a.context,...o}}catch(e){a.error=e}})();c.finally((()=>{c.done=!0})),i.push(c),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>L(e,t))).filter((e=>!!e)):[...B(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:a}=o,c=f.De.Fetching;const d=e=>{c=e,n.setState(c)};let p,l=!1;t.onClose((()=>{l=!0,p&&p()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(d(f.De.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},w=[];for(const t of s){const n=i[t],s=r[t],a=n.getStatus();(a===u.Open||c===f.De.Fetching&&a===u.Initial)&&(w.push(t),n.onChange=o);const d=n.getResultBuffer();d.length&&(n.setResultBuffer([]),s.results=O(s.results,d),e=!0);const p=n.getRevokedBuffer();if(p.length){n.setRevokedBuffer([]);const t=new Set(p);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=w,e&&(yield r),l)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{p=e}))])}while(s.length||a.length);return d(f.De.Complete),r}let me=0;function Se({namespacedTopic:e,topic:t},n){me+=1;const o=E(t,me.toString(),n),r=ve(e,o.req,{setState:e=>{r.state=e}});return r.id=me.toString(),r.close=o.close,r.state=f.De.Fetching,r}const Pe=new Map;function Ce(e,t){return`${e}:${t}`}function ke(e){return async(t,...n)=>{if(!t)return{error:G.message};let o;if(t.id)o=Ce(e.namespacedTopic,t.id);else{const n=Se(e,t);o=Ce(e.namespacedTopic,n.id),t.id=n.id,Pe.set(o,{generator:n})}const r=Pe.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{Pe.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}function We(e,t,n){return de(e).dispatch(t,y,{id:n})}function Re(e){return t=>function(e,t){const n=Ce(e,t),o=Pe.get(n);o&&o.generator.close()}(e,t.id)}async function Te(e,t,{id:n,query:o,context:r,targets:i}){const s=de(e),a={id:n,query:o,context:r,targets:i,providerId:t.id},c=await s.dispatch(t.identity,g,a),d=c.error;if(d)throw new Error(d);return c}const Ie=new Map;function be(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const De=new Map;function Be(e,t,n){return`${e}:${t}:${n}`}function Fe(e,t){const n=be.bind(null,e,t.identity),o=We.bind(null,e,t.identity),r=Te.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Ie.has(a)){const e=()=>{o(i.id),Ie.delete(a)};Ie.set(a,e),i.onClose(e)}const c=Be(e,t.id,i.id),d=()=>{De.delete(c),s.close()};i.onClose(d),De.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===u.Open&&s.open(),e.status===u.Close&&d()}));const p=await r(i);return p.status===u.Open&&s.open(),p.status!==u.Close&&p.status!==u.Initial||d(),p}}function Le(e,t){return async n=>{const o=de(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,h,r)}}const Ae=new Map;function Oe(e,t){return`${e}-${t.name}-${t.uuid}`}function xe(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(L(e,t.id))throw q;return t.identity=n,await async function(e,t){const n=Oe(e,t.identity);Ae.has(n)||Ae.set(n,[]),Ae.get(n).push(t.id),await b(e,{...t,onUserInput:Fe(e,t),onResultDispatch:Le(e,t)})}(e,t),{workspaceVersion:i.u0,clientAPIVersion:t.clientAPIVersion}}}function Ee(e){return t=>{t&&function(e,t){const n=L(e,t);if(!n)return;const o=Oe(e,n.identity),r=Ae.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),D(e,t))}}(e,t)}}const Ve=new Map;function Me(e,t){Ve.has(e)||Ve.set(e,new Set),Ve.get(e).add(t)}function _e(e,t){const n=Ve.get(e);n&&n.delete(t)}function $e(e){return async t=>{!function(e,t){const n=Oe(e,t),o=Ae.get(n);if(o){for(const t of o)D(e,t);Ae.delete(n)}}(e,t);const n=Ve.get(e);n&&n.forEach((e=>e(t)))}}async function qe(e){const{namespacedTopic:t}=e,n=S(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=pe.get(e);if(n)for(const e of n)if(!await e(t))throw H}}(e)),o.onDisconnection($e(t)),o.register(y,Re(t)),o.register(g,function(e){return t=>{const n=Be(e,t.providerId,t.id),o=De.get(n);o&&o(t)}}(t)),o.register("2",xe(t)),o.register("3",Ee(t)),o.register("4",function(e){return async()=>we(e)}(t)),o.register("1",ke(e)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)throw $;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function Ge(e){const t=de(e);var n;n=e,ce.delete(n),await t.destroy(),F(e)}async function He(e){const t=("string"==typeof e?e:e?.topic)||w,n=M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=ue(o);i||(i=await qe(r),function(e,t){ce.set(e,t)}(o,i));const s=fe.bind(null,o),a=_e.bind(null,o),c=k.bind(null,o),d=T.bind(null,o);return{getAllProviders:we.bind(null,o),search:Se.bind(null,r),register:ge.bind(null,o),deregister:he.bind(null,o),onSubscription:le.bind(null,o),onDisconnect:Me.bind(null,o),onRegister:C.bind(null,o),onDeregister:R.bind(null,o),dispatch:ye.bind(null,r),disconnect:Ge.bind(null,o),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=r,{subscribe:Ue}=o,je={create:Ne,subscribe:Ue,defaultTopic:"all"},Xe=()=>{window.search=je},Ke=e=>{const t=()=>{Xe(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Xe();const e="load",t=Ke(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=Ke(n);window.addEventListener(n,o)}const Je=new Map;async function ze(){await async function(e){Je.set(e,await Ue({topic:e,uuid:p.q9.Workspace}))}(c)}let Ze;async function Qe(e){return await async function(){return Ze||(Ze=ze()),Ze}(),Je.get(e)}const Ye=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,a.aB)();const t=await Qe(c);try{e.clientAPIVersion=i.u0;const n=await t.register(e);return(0,s.ck)({allowed:!0,componentVersion:n?.workspaceVersion}),n}catch(e){throw(0,s.ck)({allowed:!1,rejectionCode:e.message}),e}},et=async e=>{await(0,a.aB)();return(await Qe(c)).deregister(e)};async function tt(){return(await(0,a.Xl)()).dispatch(a.WF.ShowHome,void 0)}async function nt(){return(await(0,a.Xl)()).dispatch(a.WF.HideHome,void 0)}},298:(e,t,n)=>{n.d(t,{p:()=>o.px,w:()=>o.wt});var o=n(316)},427:(e,t,n)=>{var o;n.d(t,{v:()=>o}),function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(o||(o={}))},758:(e,t,n)=>{var o,r,i;n.d(t,{Pt:()=>o,el:()=>i,yW:()=>r}),function(e){e.Suggestion="suggestion"}(o||(o={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},114:(e,t,n)=>{var o,r;n.d(t,{L:()=>o,T:()=>r}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(o||(o={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},109:(e,t,n)=>{n.d(t,{Go:()=>r,ZJ:()=>s,bI:()=>i,p6:()=>o});const o={Container:"Container",Button:"Button"},r={Text:"Text",Image:"Image",List:"List"},i={...o,...r};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},528:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>s.L,StorefrontTemplate:()=>s.T,deregister:()=>g,hide:()=>h,register:()=>w,show:()=>y});var o=n(532),r=n(436),i=n(82),s=n(114),a=n(678);let c,d=!1;async function u(e,t,n){const o=await(0,r.Dm)();try{return await o.dispatch(e.action,e.payload)}catch(r){if(-1!==r.toString().indexOf(e.action))return d=!0,await o.dispatch(t.action,t.payload),n;throw r}}const p=new Map,l=e=>{if(!p.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return p.get(e)},f=async e=>{const t=await(0,r.Xl)();if(p.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return p.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(r.WF.GetStorefrontProviderApps,(e=>l(e).getApps())),e.register(r.WF.GetStorefrontProviderFooter,(e=>l(e).getFooter())),e.register(r.WF.GetStorefrontProviderLandingPage,(e=>l(e).getLandingPage())),e.register(r.WF.GetStorefrontProviderNavigation,(e=>l(e).getNavigation())),e.register(r.WF.LaunchStorefrontProviderApp,(({id:e,app:t})=>l(e).launchApp(t))))})(t),e.clientAPIVersion=a.u0,u({action:r.WF.RegisterProvider,payload:{providerType:i.lP.Storefront,info:e}},{action:r.WF.RegisterStorefrontProvider,payload:e},{workspaceVersion:"unknown"})},w=e=>(c=new Promise((async(t,n)=>{try{const n=await f(e);(0,o.d9)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:a.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,o.d9)({allowed:!1,rejectionCode:e.message}),n(e)}})),c),g=async e=>(await c,p.delete(e),await(0,r.aB)(),u({action:r.WF.DeregisterProvider,payload:{providerType:i.lP.Storefront,id:e}},{action:r.WF.DeregisterStorefrontProvider,payload:e})),h=async()=>(await c,await(0,r.aB)(),u({action:r.WF.HideProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.HideStorefront})),y=async()=>(await c,await(0,r.aB)(),u({action:r.WF.ShowProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.ShowStorefront}))},436:(e,t,n)=>{n.d(t,{WF:()=>s,Dm:()=>a,Xl:()=>p,aB:()=>u});var o=n(678);const r=o.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterProvider="register-provider",e.DeregisterProvider="deregister-provider",e.CreateProviderWindow="create-provider-window",e.GetProviders="get-providers",e.ShowProviderWindow="show-provider-window",e.HideProviderWindow="hide-provider-window",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme",e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.HideStorefront="hide-storefront",e.ShowStorefront="show-storefront"}(s||(s={}));const a=function(e){let t;return()=>{if(!o.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const n={clientAPIVersion:o.u0},i=await fin.InterApplicationBus.Channel.connect(e,{payload:n});return i.onDisconnection((async()=>{t=void 0})),i})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(o.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(o.aW)),fin.System.openUrlWithBrowser(d(o.GX))},p=async()=>(await u(),a())},82:(e,t,n)=>{n.d(t,{R8:()=>s,X_:()=>i,lP:()=>o});var o,r=n(436);!function(e){e.Storefront="storefront",e.Dock="dock"}(o||(o={}));const i=async e=>(await(0,r.Dm)()).dispatch(r.WF.ShowProviderWindow,{providerType:e}),s=async e=>(await(0,r.Dm)()).dispatch(r.WF.HideProviderWindow,{providerType:e})},806:(e,t,n)=>{n.d(t,{q9:()=>o});var o,r,i,s=n(678);!function(e){e.Workspace="openfin-browser"}(o||(o={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(r||(r={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,o.Workspace},678:(e,t,n)=>{var o;n.d(t,{AB:()=>a,Ax:()=>i,GX:()=>u,ZK:()=>d,aW:()=>p,oC:()=>c,sS:()=>r,u0:()=>f}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:o.Local,a=r&&fin.me.uuid,c=r&&fin.me.name,d=(r&&fin.me.entityType,"prod"===o.Local),u=(o.Dev,o.Staging,o.Prod,"fins://system-apps/workspace"),p="https://cdn.openfin.co/workspace/9.0.11/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,f=(l("https://cdn.openfin.co/workspace/9.0.11"),l("https://cdn.openfin.co/workspace/9.0.11"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"9.0.11")},532:(e,t,n)=>{n.d(t,{Wn:()=>d,ck:()=>a,d9:()=>c});var o,r=n(678),i=n(121);!function(e){e.Browser="Browser",e.Dock="Dock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(o||(o={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||r.u0,componentName:e,componentVersion:t.componentVersion||r.u0,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(o.Home,e)},c=async e=>{s(o.Storefront,e)},d=async e=>{s(o.Dock,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>d,JV:()=>l,OI:()=>u,iW:()=>p});var o,r,i,s=n(806),a=n(678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(o||(o={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.Closed="closed",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(r||(r={})),function(e){e.BeforeUnload="beforeunload"}(i||(i={}));function c(e){if(!a.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const d={name:a.oC,uuid:a.AB};const u={name:o.Home,uuid:s.q9.Workspace},p=(o.Dock,s.q9.Workspace,o.Storefront,s.q9.Workspace,{name:s.q9.Workspace,uuid:s.q9.Workspace});const l=e=>c(e).getOptions().then((()=>!0)).catch((()=>!1))},316:(e,t,n)=>{var o,r,i;n.d(t,{De:()=>o,px:()=>r,wt:()=>i}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(o||(o={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(i||(i={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{ActionTrigger:()=>P.p,AppManifestType:()=>W.L,ButtonStyle:()=>C.ZJ,CLIAction:()=>k.Pt,CLIFilterOptionType:()=>k.el,CLITemplate:()=>k.yW,ContainerTemplateFragmentNames:()=>C.p6,Dock:()=>e,DockButtonNames:()=>c.v,Home:()=>h,Legacy:()=>t,PresentationTemplateFragmentNames:()=>C.Go,SearchTagBackground:()=>P.w,Storefront:()=>S,StorefrontTemplate:()=>W.T,TemplateFragmentTypes:()=>C.bI});var e={};n.r(e),n.d(e,{DockButtonNames:()=>c.v,deregister:()=>l,minimize:()=>f,register:()=>p,show:()=>w});var t={};n.r(t),n.d(t,{getPages:()=>v,getWorkspaces:()=>m});var r=n(678),i=n(532),s=n(436),a=n(82),c=n(427);let d,u=!1;const p=e=>(d=new Promise((async(t,n)=>{try{const n=await(async e=>{const t=await(0,s.Xl)();if(u)throw new Error("A dock provider for the platform is already registered.");return u=!0,e.clientAPIVersion=r.u0,t.dispatch(s.WF.RegisterProvider,{providerType:a.lP.Dock,info:e})})(e);(0,i.Wn)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:r.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,i.Wn)({allowed:!1,rejectionCode:e.message}),n(e),d=null}})),d),l=async()=>{await d,u=!1;return(await(0,s.Xl)()).dispatch(s.WF.DeregisterProvider,{providerType:a.lP.Dock})},f=async()=>{await d,await(0,s.aB)(),await(0,a.R8)(a.lP.Dock)},w=async()=>{await d,await(0,s.aB)(),await(0,a.X_)(a.lP.Dock)};var g,h=n(703);n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(g||(g={}));new Map;var y;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition"}(y||(y={}));const v=()=>async function(){return(await(0,s.Dm)()).dispatch(s.WF.GetLegacyPages,void 0)}(),m=()=>(async()=>(await(0,s.Dm)()).dispatch(s.WF.GetLegacyWorkspaces,void 0))();var S=n(528),P=n(298),C=n(109),k=n(758),W=n(114)})(),module.exports=o})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@openfin/workspace/notifications.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@openfin/workspace/notifications.js ***!
  \**************************************************************/
/***/ ((module) => {

/*! For license information please see notifications.js.LICENSE.txt */
(()=>{var e={973:(e,t,r)=>{var n={1521:(e,t,r)=>{r.r(t),r.d(t,{ActivityLogIcon:()=>i,AlignBaselineIcon:()=>l,AlignBottomIcon:()=>a,AlignCenterHorizontallyIcon:()=>c,AlignCenterVerticallyIcon:()=>s,AlignLeftIcon:()=>C,AlignRightIcon:()=>d,AlignTopIcon:()=>u,AllSidesIcon:()=>f,AngleIcon:()=>h,ArchiveIcon:()=>p,ArrowBottomLeftIcon:()=>v,ArrowBottomRightIcon:()=>g,ArrowDownIcon:()=>w,ArrowLeftIcon:()=>m,ArrowRightIcon:()=>b,ArrowTopLeftIcon:()=>x,ArrowTopRightIcon:()=>y,ArrowUpIcon:()=>L,AspectRatioIcon:()=>M,AvatarIcon:()=>O,BackpackIcon:()=>E,BadgeIcon:()=>H,BarChartIcon:()=>j,BellIcon:()=>V,BlendingModeIcon:()=>Z,BookmarkIcon:()=>R,BorderAllIcon:()=>_,BorderBottomIcon:()=>S,BorderDashedIcon:()=>P,BorderDottedIcon:()=>I,BorderLeftIcon:()=>k,BorderNoneIcon:()=>B,BorderRightIcon:()=>A,BorderSolidIcon:()=>T,BorderSplitIcon:()=>$,BorderStyleIcon:()=>F,BorderTopIcon:()=>D,BoxIcon:()=>N,BoxModelIcon:()=>z,ButtonIcon:()=>W,CalendarIcon:()=>G,CameraIcon:()=>U,CardStackIcon:()=>q,CardStackMinusIcon:()=>Y,CardStackPlusIcon:()=>K,CaretDownIcon:()=>Q,CaretLeftIcon:()=>X,CaretRightIcon:()=>J,CaretSortIcon:()=>ee,CaretUpIcon:()=>te,ChatBubbleIcon:()=>re,CheckCircledIcon:()=>oe,CheckIcon:()=>ne,CheckboxIcon:()=>ie,ChevronDownIcon:()=>le,ChevronLeftIcon:()=>ae,ChevronRightIcon:()=>ce,ChevronUpIcon:()=>se,CircleBackslashIcon:()=>de,CircleIcon:()=>Ce,ClipboardCopyIcon:()=>fe,ClipboardIcon:()=>ue,ClockIcon:()=>he,CodeIcon:()=>pe,CodeSandboxLogoIcon:()=>ve,ColumnSpacingIcon:()=>ge,ColumnsIcon:()=>we,CommitIcon:()=>me,Component1Icon:()=>be,Component2Icon:()=>xe,ComponentBooleanIcon:()=>ye,ComponentInstanceIcon:()=>Le,ComponentNoneIcon:()=>Me,ComponentPlaceholderIcon:()=>Oe,ContainerIcon:()=>Ee,CookieIcon:()=>He,CopyIcon:()=>je,CornerBottomLeftIcon:()=>Ve,CornerBottomRightIcon:()=>Ze,CornerTopLeftIcon:()=>Re,CornerTopRightIcon:()=>_e,CornersIcon:()=>Se,CountdownTimerIcon:()=>Pe,CounterClockwiseClockIcon:()=>Ie,CropIcon:()=>ke,Cross1Icon:()=>Be,Cross2Icon:()=>Ae,CrossCircledIcon:()=>Te,Crosshair1Icon:()=>$e,Crosshair2Icon:()=>Fe,CrumpledPaperIcon:()=>De,CubeIcon:()=>Ne,CursorArrowIcon:()=>ze,CursorTextIcon:()=>We,DashIcon:()=>Ge,DashboardIcon:()=>Ue,DimensionsIcon:()=>qe,DiscIcon:()=>Ye,DividerHorizontalIcon:()=>Ke,DividerVerticalIcon:()=>Qe,DotFilledIcon:()=>Je,DotIcon:()=>Xe,DotsHorizontalIcon:()=>et,DotsVerticalIcon:()=>tt,DoubleArrowDownIcon:()=>rt,DoubleArrowLeftIcon:()=>nt,DoubleArrowRightIcon:()=>ot,DoubleArrowUpIcon:()=>it,DownloadIcon:()=>lt,DragHandleDots1Icon:()=>at,DragHandleDots2Icon:()=>ct,DragHandleHorizontalIcon:()=>st,DragHandleVerticalIcon:()=>Ct,DrawingPinFilledIcon:()=>ut,DrawingPinIcon:()=>dt,DropdownMenuIcon:()=>ft,EnterFullScreenIcon:()=>pt,EnterIcon:()=>ht,EnvelopeClosedIcon:()=>vt,EnvelopeOpenIcon:()=>gt,ExclamationTriangleIcon:()=>wt,ExitFullScreenIcon:()=>bt,ExitIcon:()=>mt,ExternalLinkIcon:()=>xt,EyeClosedIcon:()=>yt,EyeNoneIcon:()=>Lt,EyeOpenIcon:()=>Mt,FaceIcon:()=>Ot,FigmaLogoIcon:()=>Et,FileIcon:()=>Ht,FileMinusIcon:()=>jt,FilePlusIcon:()=>Vt,FileTextIcon:()=>Zt,FontBoldIcon:()=>Rt,FontFamilyIcon:()=>_t,FontItalicIcon:()=>St,FontRomanIcon:()=>Pt,FontSizeIcon:()=>It,FontStyleIcon:()=>kt,FrameIcon:()=>Bt,FramerLogoIcon:()=>At,GearIcon:()=>Tt,GitHubLogoIcon:()=>$t,GlobeIcon:()=>Ft,GridIcon:()=>Dt,GroupIcon:()=>Nt,Half1Icon:()=>zt,Half2Icon:()=>Wt,HamburgerMenuIcon:()=>Gt,HandIcon:()=>Ut,HeadingIcon:()=>qt,HeightIcon:()=>Yt,HomeIcon:()=>Kt,IconJarLogoIcon:()=>Qt,IdCardIcon:()=>Xt,ImageIcon:()=>Jt,InfoCircledIcon:()=>er,InputIcon:()=>tr,LapTimerIcon:()=>rr,LayersIcon:()=>nr,LayoutIcon:()=>or,LetterCaseCapitalizeIcon:()=>ir,LetterCaseLowercaseIcon:()=>lr,LetterCaseToggleIcon:()=>ar,LetterCaseUppercaseIcon:()=>cr,LetterSpacingIcon:()=>sr,LightningBoltIcon:()=>Cr,LineHeightIcon:()=>dr,Link1Icon:()=>ur,Link2Icon:()=>fr,LinkBreak1Icon:()=>hr,LinkBreak2Icon:()=>pr,LinkNone1Icon:()=>vr,LinkNone2Icon:()=>gr,ListBulletIcon:()=>wr,LockClosedIcon:()=>mr,LockOpen1Icon:()=>br,LockOpen2Icon:()=>xr,LoopIcon:()=>yr,MagicWandIcon:()=>Lr,MagnifyingGlassIcon:()=>Mr,MarginIcon:()=>Or,MaskOffIcon:()=>Er,MaskOnIcon:()=>Hr,MinusCircledIcon:()=>Vr,MinusIcon:()=>jr,MixIcon:()=>Zr,MixerHorizontalIcon:()=>Rr,MixerVerticalIcon:()=>_r,ModulzLogoIcon:()=>Sr,MoonIcon:()=>Pr,MoveIcon:()=>Ir,NotionLogoIcon:()=>kr,OpacityIcon:()=>Br,OverlineIcon:()=>Ar,PaddingIcon:()=>Tr,PaperPlaneIcon:()=>$r,PauseIcon:()=>Fr,Pencil1Icon:()=>Dr,Pencil2Icon:()=>Nr,PersonIcon:()=>zr,PieChartIcon:()=>Wr,PilcrowIcon:()=>Gr,PinBottomIcon:()=>Ur,PinLeftIcon:()=>qr,PinRightIcon:()=>Yr,PinTopIcon:()=>Kr,PlayIcon:()=>Qr,PlusCircledIcon:()=>Jr,PlusIcon:()=>Xr,QuestionMarkCircledIcon:()=>tn,QuestionMarkIcon:()=>en,QuoteIcon:()=>rn,RadiobuttonIcon:()=>nn,ReaderIcon:()=>on,ReloadIcon:()=>ln,ResetIcon:()=>an,ResumeIcon:()=>cn,RocketIcon:()=>sn,RotateCounterClockwiseIcon:()=>Cn,RowSpacingIcon:()=>dn,RowsIcon:()=>un,RulerHorizontalIcon:()=>fn,RulerSquareIcon:()=>hn,SectionIcon:()=>pn,SewingPinFilledIcon:()=>gn,SewingPinIcon:()=>vn,ShadowIcon:()=>wn,ShadowInnerIcon:()=>mn,ShadowNoneIcon:()=>bn,ShadowOuterIcon:()=>xn,Share1Icon:()=>yn,Share2Icon:()=>Ln,ShuffleIcon:()=>Mn,SizeIcon:()=>On,SketchLogoIcon:()=>En,SlashIcon:()=>Hn,SliderIcon:()=>jn,SpaceBetweenHorizontallyIcon:()=>Vn,SpaceBetweenVerticallyIcon:()=>Zn,SpaceEvenlyHorizontallyIcon:()=>Rn,SpaceEvenlyVerticallyIcon:()=>_n,SpeakerLoudIcon:()=>Sn,SpeakerModerateIcon:()=>Pn,SpeakerOffIcon:()=>In,SpeakerQuietIcon:()=>kn,SquareIcon:()=>Bn,StackIcon:()=>An,StarFilledIcon:()=>$n,StarIcon:()=>Tn,StitchesLogoIcon:()=>Fn,StopIcon:()=>Dn,StopwatchIcon:()=>Nn,StretchHorizontallyIcon:()=>zn,StretchVerticallyIcon:()=>Wn,StrikethroughIcon:()=>Gn,SunIcon:()=>Un,SwitchIcon:()=>qn,SymbolIcon:()=>Yn,TableIcon:()=>Kn,TargetIcon:()=>Qn,TextAlignCenterIcon:()=>Jn,TextAlignJustifyIcon:()=>eo,TextAlignLeftIcon:()=>to,TextAlignRightIcon:()=>ro,TextIcon:()=>Xn,TextNoneIcon:()=>no,ThickArrowDownIcon:()=>oo,ThickArrowLeftIcon:()=>io,ThickArrowRightIcon:()=>lo,ThickArrowUpIcon:()=>ao,TimerIcon:()=>co,TokensIcon:()=>so,TrackNextIcon:()=>Co,TrackPreviousIcon:()=>uo,TransparencyGridIcon:()=>fo,TrashIcon:()=>ho,TriangleDownIcon:()=>po,TriangleLeftIcon:()=>vo,TriangleRightIcon:()=>go,TriangleUpIcon:()=>wo,TwitterLogoIcon:()=>mo,UnderlineIcon:()=>bo,UpdateIcon:()=>xo,UploadIcon:()=>yo,ValueIcon:()=>Lo,ValueNoneIcon:()=>Mo,VercelLogoIcon:()=>Oo,VideoIcon:()=>Eo,ViewGridIcon:()=>Ho,ViewHorizontalIcon:()=>jo,ViewNoneIcon:()=>Vo,ViewVerticalIcon:()=>Zo,WidthIcon:()=>Ro,ZoomInIcon:()=>_o,ZoomOutIcon:()=>So});var n=r(6689);function o(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var i=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0 1.5C0 1.22386 0.223858 1 0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5ZM4 1.5C4 1.22386 4.22386 1 4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5ZM0 13.5C0 13.2239 0.223858 13 0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},l=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.5 1.75003C10.7107 1.75003 10.8988 1.88217 10.9703 2.08042L13.9703 10.4C14.064 10.6598 13.9293 10.9463 13.6696 11.04C13.4098 11.1336 13.1233 10.999 13.0296 10.7392L12.0477 8.01606H8.95227L7.97031 10.7392C7.87664 10.999 7.59012 11.1336 7.33035 11.04C7.07058 10.9463 6.93593 10.6598 7.0296 10.4L10.0296 2.08042C10.1011 1.88217 10.2892 1.75003 10.5 1.75003ZM10.5 3.72402L11.7411 7.16606H9.25877L10.5 3.72402ZM2.49949 2.09997C2.7204 2.09997 2.89949 2.27906 2.89949 2.49997L2.89949 9.53428L4.21664 8.21713C4.37285 8.06092 4.62612 8.06092 4.78233 8.21713C4.93854 8.37334 4.93854 8.6266 4.78233 8.78281L2.78233 10.7828C2.70732 10.8578 2.60557 10.9 2.49949 10.9C2.3934 10.9 2.29166 10.8578 2.21664 10.7828L0.216645 8.78281C0.0604349 8.6266 0.0604349 8.37334 0.216645 8.21713C0.372854 8.06092 0.62612 8.06092 0.78233 8.21713L2.09949 9.53428L2.09949 2.49997C2.09949 2.27906 2.27857 2.09997 2.49949 2.09997ZM0.0999695 13.5001C0.0999695 13.2791 0.279056 13.1001 0.499969 13.1001H14.5C14.7209 13.1001 14.9 13.2791 14.9 13.5001C14.9 13.721 14.7209 13.9001 14.5 13.9001H0.499969C0.279056 13.9001 0.0999695 13.721 0.0999695 13.5001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},a=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9 3C9 2.44772 8.55229 2 8 2H7C6.44772 2 6 2.44772 6 3L6 14H1.5C1.22386 14 1 14.2239 1 14.5C1 14.7761 1.22386 15 1.5 15L6 15H9H13.5C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H9V3Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},c=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.99988 1C6.44759 1 5.99988 1.44772 5.99988 2V7H1.49988C1.22374 7 0.999878 7.22386 0.999878 7.5C0.999878 7.77614 1.22374 8 1.49988 8H5.99988V13C5.99988 13.5523 6.44759 14 6.99988 14H7.99988C8.55216 14 8.99988 13.5523 8.99988 13V8H13.4999C13.776 8 13.9999 7.77614 13.9999 7.5C13.9999 7.22386 13.776 7 13.4999 7H8.99988V2C8.99988 1.44772 8.55216 1 7.99988 1L6.99988 1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},s=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.99988 6C1.44759 6 0.999877 6.44772 0.999877 7L0.999877 8C0.999877 8.55228 1.44759 9 1.99988 9L6.99988 9L6.99988 13.5C6.99988 13.7761 7.22374 14 7.49988 14C7.77602 14 7.99988 13.7761 7.99988 13.5L7.99988 9L12.9999 9C13.5522 9 13.9999 8.55228 13.9999 8L13.9999 7C13.9999 6.44772 13.5522 6 12.9999 6L7.99988 6L7.99988 1.5C7.99988 1.22386 7.77602 1 7.49988 1C7.22373 1 6.99988 1.22386 6.99988 1.5L6.99988 6L1.99988 6Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},C=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.499995 0.999995C0.223855 0.999995 -5.58458e-07 1.22385 -5.46388e-07 1.49999L-2.18554e-08 13.4999C-9.78492e-09 13.776 0.223855 13.9999 0.499995 13.9999C0.776136 13.9999 0.999991 13.776 0.999991 13.4999L0.999991 8.99993L12 8.99993C12.5523 8.99993 13 8.55222 13 7.99993L13 6.99994C13 6.44766 12.5523 5.99995 12 5.99995L0.999991 5.99995L0.999991 1.49999C0.999991 1.22385 0.776135 0.999995 0.499995 0.999995Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},d=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5L13.9999 6L2.99988 6C2.44759 6 1.99988 6.44772 1.99988 7L1.99988 8C1.99988 8.55228 2.44759 9 2.99988 9L13.9999 9L13.9999 13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5L14.9999 9L14.9999 6L14.9999 1.5C14.9999 1.22386 14.776 1 14.4999 1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},u=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 0C1.22386 0 1 0.223858 1 0.5C1 0.776142 1.22386 1 1.5 1H6V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V1H13.5C13.7761 1 14 0.776142 14 0.5C14 0.223858 13.7761 0 13.5 0H9H6H1.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},f=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 0.75L9.75 3H5.25L7.5 0.75ZM7.5 14.25L9.75 12H5.25L7.5 14.25ZM3 5.25L0.75 7.5L3 9.75V5.25ZM14.25 7.5L12 5.25V9.75L14.25 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},h=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.8914 2.1937C9.1158 2.35464 9.16725 2.66701 9.00631 2.89141L2.47388 12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7762 13.7761 13 13.5 13H1.5C1.31254 13 1.14082 12.8952 1.0552 12.7284C0.969578 12.5616 0.984438 12.361 1.09369 12.2086L8.19369 2.30862C8.35462 2.08422 8.667 2.03277 8.8914 2.1937ZM11.1 6.50001C11.1 6.22387 11.3238 6.00001 11.6 6.00001C11.8761 6.00001 12.1 6.22387 12.1 6.50001C12.1 6.77615 11.8761 7.00001 11.6 7.00001C11.3238 7.00001 11.1 6.77615 11.1 6.50001ZM10.4 4.00001C10.1239 4.00001 9.90003 4.22387 9.90003 4.50001C9.90003 4.77615 10.1239 5.00001 10.4 5.00001C10.6762 5.00001 10.9 4.77615 10.9 4.50001C10.9 4.22387 10.6762 4.00001 10.4 4.00001ZM12.1 8.50001C12.1 8.22387 12.3238 8.00001 12.6 8.00001C12.8761 8.00001 13.1 8.22387 13.1 8.50001C13.1 8.77615 12.8761 9.00001 12.6 9.00001C12.3238 9.00001 12.1 8.77615 12.1 8.50001ZM13.4 10C13.1239 10 12.9 10.2239 12.9 10.5C12.9 10.7761 13.1239 11 13.4 11C13.6762 11 13.9 10.7761 13.9 10.5C13.9 10.2239 13.6762 10 13.4 10Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},p=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},v=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.3536 3.64644C11.5488 3.8417 11.5488 4.15828 11.3536 4.35354L4.70711 11L9 11C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12L3.5 12C3.36739 12 3.24021 11.9473 3.14645 11.8536C3.05268 11.7598 3 11.6326 3 11.5L3 5.99999C3 5.72385 3.22386 5.49999 3.5 5.49999C3.77614 5.49999 4 5.72385 4 5.99999V10.2929L10.6464 3.64643C10.8417 3.45117 11.1583 3.45117 11.3536 3.64644Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},g=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},w=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},m=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},b=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},x=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},y=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},L=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},M=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.5 2H12.5C12.7761 2 13 2.22386 13 2.5V12.5C13 12.7761 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM1 2.5C1 1.67157 1.67157 1 2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5ZM7.5 4C7.77614 4 8 3.77614 8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5C7 3.77614 7.22386 4 7.5 4ZM8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5ZM7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8ZM10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5ZM11.5 8C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7C11.2239 7 11 7.22386 11 7.5C11 7.77614 11.2239 8 11.5 8Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},O=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},E=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},H=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.5 6H11.5C12.3284 6 13 6.67157 13 7.5C13 8.32843 12.3284 9 11.5 9H3.5C2.67157 9 2 8.32843 2 7.5C2 6.67157 2.67157 6 3.5 6ZM1 7.5C1 6.11929 2.11929 5 3.5 5H11.5C12.8807 5 14 6.11929 14 7.5C14 8.88071 12.8807 10 11.5 10H3.5C2.11929 10 1 8.88071 1 7.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},j=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},V=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Z=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},R=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},_=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("rect",{x:"7",y:"5",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"3",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"9",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"11",width:"1",height:"1",rx:".5",fill:r}))},S=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 13.25L14 13.25V14.75L1 14.75V13.25Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("rect",{x:"7",y:"5",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"5",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"3",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"3",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"9",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"9",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"11",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"11",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"5",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"3",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"7",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"1",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"9",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"11",width:"1",height:"1",rx:".5",fill:r}))},P=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0 7.5C0 7.22386 0.223858 7 0.5 7H3C3.27614 7 3.5 7.22386 3.5 7.5C3.5 7.77614 3.27614 8 3 8H0.5C0.223858 8 0 7.77614 0 7.5ZM5.75 7.5C5.75 7.22386 5.97386 7 6.25 7H8.75C9.02614 7 9.25 7.22386 9.25 7.5C9.25 7.77614 9.02614 8 8.75 8H6.25C5.97386 8 5.75 7.77614 5.75 7.5ZM12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},I=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 6.625C1.01675 6.625 0.625 7.01675 0.625 7.5C0.625 7.98325 1.01675 8.375 1.5 8.375C1.98325 8.375 2.375 7.98325 2.375 7.5C2.375 7.01675 1.98325 6.625 1.5 6.625ZM5.5 6.625C5.01675 6.625 4.625 7.01675 4.625 7.5C4.625 7.98325 5.01675 8.375 5.5 8.375C5.98325 8.375 6.375 7.98325 6.375 7.5C6.375 7.01675 5.98325 6.625 5.5 6.625ZM9.5 6.625C9.01675 6.625 8.625 7.01675 8.625 7.5C8.625 7.98325 9.01675 8.375 9.5 8.375C9.98325 8.375 10.375 7.98325 10.375 7.5C10.375 7.01675 9.98325 6.625 9.5 6.625ZM12.625 7.5C12.625 7.01675 13.0168 6.625 13.5 6.625C13.9832 6.625 14.375 7.01675 14.375 7.5C14.375 7.98325 13.9832 8.375 13.5 8.375C13.0168 8.375 12.625 7.98325 12.625 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},k=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("rect",{x:"10",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 10 7)",fill:r}),(0,n.createElement)("rect",{x:"10",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 10 13)",fill:r}),(0,n.createElement)("rect",{x:"12",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 12 7)",fill:r}),(0,n.createElement)("rect",{x:"12",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 12 13)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 8 7)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 14 7)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 8 13)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 14 13)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"5",width:"1",height:"1",rx:".5",transform:"rotate(90 8 5)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"5",width:"1",height:"1",rx:".5",transform:"rotate(90 14 5)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"3",width:"1",height:"1",rx:".5",transform:"rotate(90 8 3)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"3",width:"1",height:"1",rx:".5",transform:"rotate(90 14 3)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"9",width:"1",height:"1",rx:".5",transform:"rotate(90 8 9)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"9",width:"1",height:"1",rx:".5",transform:"rotate(90 14 9)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"11",width:"1",height:"1",rx:".5",transform:"rotate(90 8 11)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"11",width:"1",height:"1",rx:".5",transform:"rotate(90 14 11)",fill:r}),(0,n.createElement)("rect",{x:"6",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 6 7)",fill:r}),(0,n.createElement)("rect",{x:"6",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 6 13)",fill:r}),(0,n.createElement)("rect",{x:"4",y:"7",width:"1",height:"1",rx:".5",transform:"rotate(90 4 7)",fill:r}),(0,n.createElement)("rect",{x:"4",y:"13",width:"1",height:"1",rx:".5",transform:"rotate(90 4 13)",fill:r}),(0,n.createElement)("rect",{x:"10",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 10 1)",fill:r}),(0,n.createElement)("rect",{x:"12",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 12 1)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 8 1)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 14 1)",fill:r}),(0,n.createElement)("rect",{x:"6",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 6 1)",fill:r}),(0,n.createElement)("rect",{x:"4",y:"1",width:"1",height:"1",rx:".5",transform:"rotate(90 4 1)",fill:r}))},B=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("rect",{x:"7",y:"5.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"5.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"3.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"3.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"9.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"9.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"11.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"11.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"5.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"3.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"9.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"11.025",width:"1",height:"1",rx:".5",fill:r}))},A=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 5 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 5 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 3 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 3 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 5)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 5)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 3)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 3)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 9)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 9)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 11)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 11)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 9 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 9 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 11 7)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 11 13)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 5 1)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 3 1)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 7 1)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 1 1)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 9 1)",fill:r}),(0,n.createElement)("rect",{width:"1",height:"1",rx:".5",transform:"matrix(0 1 1 0 11 1)",fill:r}))},T=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},$=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("rect",{x:"7",y:"5.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"3.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"13.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"1.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"13",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"5",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"3",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"9",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"11",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"9.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"7",y:"11.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("rect",{x:"1",y:"7.025",width:"1",height:"1",rx:".5",fill:r}),(0,n.createElement)("path",{d:"M1 1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939H6V1.99994H2V5.99994H1V1.49994ZM13 1.99994H9V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994ZM1 13.4999V8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999ZM13 12.9999V8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},F=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H3.5C3.77614 7 4 7.22386 4 7.5C4 7.77614 3.77614 8 3.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11C1.77614 11 2 11.2239 2 11.5C2 11.7761 1.77614 12 1.5 12C1.22386 12 1 11.7761 1 11.5ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11ZM11 11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12C11.2239 12 11 11.7761 11 11.5ZM13.5 11C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11ZM6.5 7C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H8.5C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7H6.5ZM11 7.5C11 7.22386 11.2239 7 11.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H11.5C11.2239 8 11 7.77614 11 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},D=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("rect",{x:"8",y:"10",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 10)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"10",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 10)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"12",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 12)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"12",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 12)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 8)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 14)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 8)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 14)",fill:r}),(0,n.createElement)("rect",{x:"10",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 10 8)",fill:r}),(0,n.createElement)("rect",{x:"10",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 10 14)",fill:r}),(0,n.createElement)("rect",{x:"12",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 12 8)",fill:r}),(0,n.createElement)("rect",{x:"12",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 12 14)",fill:r}),(0,n.createElement)("rect",{x:"6",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 6 8)",fill:r}),(0,n.createElement)("rect",{x:"6",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 6 14)",fill:r}),(0,n.createElement)("rect",{x:"4",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 4 8)",fill:r}),(0,n.createElement)("rect",{x:"4",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 4 14)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"6",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 6)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"6",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 6)",fill:r}),(0,n.createElement)("rect",{x:"8",y:"4",width:"1",height:"1",rx:".5",transform:"rotate(-180 8 4)",fill:r}),(0,n.createElement)("rect",{x:"2",y:"4",width:"1",height:"1",rx:".5",transform:"rotate(-180 2 4)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"10",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 10)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"12",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 12)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"8",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 8)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"14",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 14)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"6",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 6)",fill:r}),(0,n.createElement)("rect",{x:"14",y:"4",width:"1",height:"1",rx:".5",transform:"rotate(-180 14 4)",fill:r}))},N=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},z=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.99998 0.999976C1.44769 0.999976 0.999976 1.44769 0.999976 1.99998V13C0.999976 13.5523 1.44769 14 1.99998 14H13C13.5523 14 14 13.5523 14 13V1.99998C14 1.44769 13.5523 0.999976 13 0.999976H1.99998ZM1.99998 1.99998L13 1.99998V13H1.99998V1.99998ZM4.49996 3.99996C4.22382 3.99996 3.99996 4.22382 3.99996 4.49996V10.5C3.99996 10.7761 4.22382 11 4.49996 11H10.5C10.7761 11 11 10.7761 11 10.5V4.49996C11 4.22382 10.7761 3.99996 10.5 3.99996H4.49996ZM4.99996 9.99996V4.99996H9.99996V9.99996H4.99996Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},W=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 5H13C13.5523 5 14 5.44772 14 6V9C14 9.55228 13.5523 10 13 10H2C1.44772 10 1 9.55228 1 9V6C1 5.44772 1.44772 5 2 5ZM0 6C0 4.89543 0.895431 4 2 4H13C14.1046 4 15 4.89543 15 6V9C15 10.1046 14.1046 11 13 11H2C0.89543 11 0 10.1046 0 9V6ZM4.5 6.75C4.08579 6.75 3.75 7.08579 3.75 7.5C3.75 7.91421 4.08579 8.25 4.5 8.25C4.91421 8.25 5.25 7.91421 5.25 7.5C5.25 7.08579 4.91421 6.75 4.5 6.75ZM6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5ZM10.5 6.75C10.0858 6.75 9.75 7.08579 9.75 7.5C9.75 7.91421 10.0858 8.25 10.5 8.25C10.9142 8.25 11.25 7.91421 11.25 7.5C11.25 7.08579 10.9142 6.75 10.5 6.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},G=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},U=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44772 13.5523 3 13 3H2ZM0 4C0 2.89543 0.895431 2 2 2H13C14.1046 2 15 2.89543 15 4V11C15 12.1046 14.1046 13 13 13H2C0.895431 13 0 12.1046 0 11V4ZM2 4.25C2 4.11193 2.11193 4 2.25 4H4.75C4.88807 4 5 4.11193 5 4.25V5.75454C5 5.89261 4.88807 6.00454 4.75 6.00454H2.25C2.11193 6.00454 2 5.89261 2 5.75454V4.25ZM12.101 7.58421C12.101 9.02073 10.9365 10.1853 9.49998 10.1853C8.06346 10.1853 6.89893 9.02073 6.89893 7.58421C6.89893 6.14769 8.06346 4.98315 9.49998 4.98315C10.9365 4.98315 12.101 6.14769 12.101 7.58421ZM13.101 7.58421C13.101 9.57302 11.4888 11.1853 9.49998 11.1853C7.51117 11.1853 5.89893 9.57302 5.89893 7.58421C5.89893 5.5954 7.51117 3.98315 9.49998 3.98315C11.4888 3.98315 13.101 5.5954 13.101 7.58421Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},q=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 10.9146C1.4174 10.7087 1 10.1531 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146ZM12 11V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Y=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.5 3C2.22386 3 2 3.22386 2 3.5V9.5C2 9.77614 2.22386 10 2.5 10H12.5C12.7761 10 13 9.77614 13 9.5V3.5C13 3.22386 12.7761 3 12.5 3H2.5ZM1 9.5C1 10.1531 1.4174 10.7087 2 10.9146V11.5C2 12.3284 2.67157 13 3.5 13H11.5C12.3284 13 13 12.3284 13 11.5V10.9146C13.5826 10.7087 14 10.1531 14 9.5V3.5C14 2.67157 13.3284 2 12.5 2H2.5C1.67157 2 1 2.67157 1 3.5V9.5ZM12 11.5V11H3V11.5C3 11.7761 3.22386 12 3.5 12H11.5C11.7761 12 12 11.7761 12 11.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5C5 6.77614 5.22386 7 5.5 7H9.5C9.77614 7 10 6.77614 10 6.5C10 6.22386 9.77614 6 9.5 6H5.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},K=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 10.9146C1.4174 10.7087 1 10.1531 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146ZM12 11V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12ZM5 6.5C5 6.22386 5.22386 6 5.5 6H7V4.5C7 4.22386 7.22386 4 7.5 4C7.77614 4 8 4.22386 8 4.5V6H9.5C9.77614 6 10 6.22386 10 6.5C10 6.77614 9.77614 7 9.5 7H8V8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5V7H5.5C5.22386 7 5 6.77614 5 6.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Q=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},X=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},J=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ee=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},te=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},re=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.5 3L2.49999 3.00002C1.67157 3.00002 0.999999 3.67159 0.999999 4.50002V9.50002C0.999999 10.3284 1.67157 11 2.5 11H7.50002C7.63263 11 7.75981 11.0527 7.85358 11.1465L9.99999 13.2929V11.5C9.99999 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3284 14 9.50002V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11928 15 4.5V9.50002C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8535L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50002V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ne=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},oe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ie=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 3H12V12H3L3 3ZM2 3C2 2.44771 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44771 13 2 12.5523 2 12V3ZM10.3498 5.51105C10.506 5.28337 10.4481 4.97212 10.2204 4.81587C9.99275 4.65961 9.6815 4.71751 9.52525 4.94519L6.64048 9.14857L5.19733 7.40889C5.02102 7.19635 4.7058 7.16699 4.49327 7.34329C4.28073 7.5196 4.25137 7.83482 4.42767 8.04735L6.2934 10.2964C6.39348 10.4171 6.54437 10.4838 6.70097 10.4767C6.85757 10.4695 7.00177 10.3894 7.09047 10.2601L10.3498 5.51105Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},le=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ae=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ce=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},se=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ce=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},de=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM3.85768 3.15057C4.84311 2.32448 6.11342 1.82708 7.49991 1.82708C10.6329 1.82708 13.1727 4.36689 13.1727 7.49991C13.1727 8.88638 12.6753 10.1567 11.8492 11.1421L3.85768 3.15057ZM3.15057 3.85768C2.32448 4.84311 1.82708 6.11342 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C8.88638 13.1727 10.1567 12.6753 11.1421 11.8492L3.15057 3.85768Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ue=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},fe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},he=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},pe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ve=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.71144 0.796902C7.57741 0.734357 7.42257 0.734357 7.28855 0.796902L1.28855 3.5969C1.11251 3.67905 0.999993 3.85573 0.999993 4.04999V10.95C0.999993 11.1443 1.11251 11.3209 1.28855 11.4031L7.28855 14.2031C7.42257 14.2656 7.57741 14.2656 7.71144 14.2031L13.7114 11.4031C13.8875 11.3209 14 11.1443 14 10.95V4.04999C14 3.85573 13.8875 3.67905 13.7114 3.5969L7.71144 0.796902ZM7.49999 3.15674L5.98039 2.51091L7.49999 1.80176L9.01959 2.51091L7.49999 3.15674ZM7.69556 4.16018L10.2382 3.07958L12.2719 4.02865L7.49999 6.05671L2.72808 4.02865L4.76181 3.07958L7.30442 4.16018C7.42939 4.2133 7.57059 4.2133 7.69556 4.16018ZM7.99999 6.93078L13 4.80578V7.92966L11.0821 8.8119C10.7273 8.97509 10.5 9.32988 10.5 9.72039V11.7982L7.99999 12.9649V6.93078ZM11.5 11.3316L13 10.6316V9.03039L11.5 9.72039V11.3316ZM6.99999 6.93078V12.9649L4.50231 11.7993V9.72036C4.50231 9.32985 4.27499 8.97506 3.92022 8.81187L1.99999 7.92856V4.80578L6.99999 6.93078ZM1.99999 10.6316L3.50231 11.3326L3.50231 9.72036L1.99999 9.02929V10.6316Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ge=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.00012 1.5C8.00012 1.22386 7.77626 1 7.50012 1C7.22398 1 7.00012 1.22386 7.00012 1.5V13.5C7.00012 13.7761 7.22398 14 7.50012 14C7.77626 14 8.00012 13.7761 8.00012 13.5V1.5ZM3.31812 5.818C3.49386 5.64227 3.49386 5.35734 3.31812 5.18161C3.14239 5.00587 2.85746 5.00587 2.68173 5.18161L0.681729 7.18161C0.505993 7.35734 0.505993 7.64227 0.681729 7.818L2.68173 9.818C2.85746 9.99374 3.14239 9.99374 3.31812 9.818C3.49386 9.64227 3.49386 9.35734 3.31812 9.18161L2.08632 7.9498H5.50017C5.7487 7.9498 5.95017 7.74833 5.95017 7.4998C5.95017 7.25128 5.7487 7.0498 5.50017 7.0498H2.08632L3.31812 5.818ZM12.3181 5.18161C12.1424 5.00587 11.8575 5.00587 11.6817 5.18161C11.506 5.35734 11.506 5.64227 11.6817 5.818L12.9135 7.0498H9.50017C9.25164 7.0498 9.05017 7.25128 9.05017 7.4998C9.05017 7.74833 9.25164 7.9498 9.50017 7.9498H12.9135L11.6817 9.18161C11.506 9.35734 11.506 9.64227 11.6817 9.818C11.8575 9.99374 12.1424 9.99374 12.3181 9.818L14.3181 7.818C14.4939 7.64227 14.4939 7.35734 14.3181 7.18161L12.3181 5.18161Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},we=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.14998 14V1H0.849976V14H2.14998ZM6.14998 14V1H4.84998V14H6.14998ZM10.15 1V14H8.84998V1H10.15ZM14.15 14V1H12.85V14H14.15Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},me=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},be=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},xe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.87935 1H3.9H11.1H11.1207C11.5231 0.999994 11.8553 0.999989 12.1259 1.0221C12.407 1.04506 12.6653 1.09434 12.908 1.21799C13.2843 1.40973 13.5903 1.7157 13.782 2.09202C13.9057 2.33469 13.9549 2.59304 13.9779 2.87409C14 3.14468 14 3.47686 14 3.87934V3.9V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H3.9H3.87934C3.47686 14 3.14468 14 2.87409 13.9779C2.59304 13.9549 2.33469 13.9057 2.09202 13.782C1.7157 13.5903 1.40973 13.2843 1.21799 12.908C1.09434 12.6653 1.04506 12.407 1.0221 12.1259C0.999989 11.8553 0.999994 11.5231 1 11.1207V11.1207V11.1V3.9V3.87935V3.87934C0.999994 3.47686 0.999989 3.14468 1.0221 2.87409C1.04506 2.59304 1.09434 2.33469 1.21799 2.09202C1.40973 1.7157 1.7157 1.40973 2.09202 1.21799C2.33469 1.09434 2.59304 1.04506 2.87409 1.0221C3.14469 0.999989 3.47687 0.999994 3.87935 1ZM2.95552 2.01878C2.73631 2.03669 2.62421 2.06915 2.54601 2.10899C2.35785 2.20487 2.20487 2.35785 2.10899 2.54601C2.06915 2.62421 2.03669 2.73631 2.01878 2.95552C2.00039 3.18056 2 3.47171 2 3.9V7H7V2H3.9C3.47171 2 3.18056 2.00039 2.95552 2.01878ZM7 8H2V11.1C2 11.5283 2.00039 11.8194 2.01878 12.0445C2.03669 12.2637 2.06915 12.3758 2.10899 12.454C2.20487 12.6422 2.35785 12.7951 2.54601 12.891C2.62421 12.9309 2.73631 12.9633 2.95552 12.9812C3.18056 12.9996 3.47171 13 3.9 13H7V8ZM8 8H13V11.1C13 11.5283 12.9996 11.8194 12.9812 12.0445C12.9633 12.2637 12.9309 12.3758 12.891 12.454C12.7951 12.6422 12.6422 12.7951 12.454 12.891C12.3758 12.9309 12.2637 12.9633 12.0445 12.9812C11.8194 12.9996 11.5283 13 11.1 13H8V8ZM13 7H8V2H11.1C11.5283 2 11.8194 2.00039 12.0445 2.01878C12.2637 2.03669 12.3758 2.06915 12.454 2.10899C12.6422 2.20487 12.7951 2.35785 12.891 2.54601C12.9309 2.62421 12.9633 2.73631 12.9812 2.95552C12.9996 3.18056 13 3.47171 13 3.9V7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ye=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.85367 1.48956C7.65841 1.29429 7.34182 1.29429 7.14656 1.48956L1.48971 7.14641C1.29445 7.34167 1.29445 7.65825 1.48971 7.85352L7.14656 13.5104C7.34182 13.7056 7.65841 13.7056 7.85367 13.5104L13.5105 7.85352C13.7058 7.65825 13.7058 7.34167 13.5105 7.14641L7.85367 1.48956ZM7.5 2.55033L2.55037 7.49996L7.5 12.4496V2.55033Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Le=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.1465 1.48959C7.34176 1.29432 7.65835 1.29432 7.85361 1.48959L13.5105 7.14644C13.7057 7.3417 13.7057 7.65829 13.5105 7.85355L7.85361 13.5104C7.65835 13.7057 7.34176 13.7057 7.1465 13.5104L1.48965 7.85355C1.29439 7.65829 1.29439 7.3417 1.48965 7.14644L7.1465 1.48959ZM7.50005 2.55025L2.55031 7.49999L7.50005 12.4497L12.4498 7.49999L7.50005 2.55025Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Me=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.85361 1.48959C7.65835 1.29432 7.34176 1.29432 7.1465 1.48959L1.48965 7.14644C1.29439 7.3417 1.29439 7.65829 1.48965 7.85355L3.9645 10.3284L1.64644 12.6464C1.45118 12.8417 1.45118 13.1583 1.64644 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.6716 11.0355L7.1465 13.5104C7.34176 13.7057 7.65835 13.7057 7.85361 13.5104L13.5105 7.85355C13.7057 7.65829 13.7057 7.3417 13.5105 7.14644L11.0356 4.67154L13.3535 2.35355C13.5488 2.15829 13.5488 1.84171 13.3535 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.3285 3.96443L7.85361 1.48959ZM9.62135 4.67154L7.50005 2.55025L2.55031 7.49999L4.6716 9.62129L9.62135 4.67154ZM5.37871 10.3284L7.50005 12.4497L12.4498 7.49999L10.3285 5.37865L5.37871 10.3284Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Oe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.8034 7.14644C12.9986 6.95118 13.3152 6.95118 13.5105 7.14644C13.7057 7.3417 13.7057 7.65829 13.5105 7.85355C13.3152 8.04881 12.9986 8.04881 12.8034 7.85355C12.6081 7.65828 12.6081 7.3417 12.8034 7.14644ZM12.0962 8.56065C12.2915 8.75592 12.2915 9.0725 12.0962 9.26776C11.901 9.46302 11.5844 9.46302 11.3891 9.26776C11.1939 9.0725 11.1939 8.75592 11.3891 8.56065C11.5844 8.36539 11.901 8.36539 12.0962 8.56065ZM10.682 9.97487C10.8773 10.1701 10.8773 10.4867 10.682 10.682C10.4868 10.8772 10.1702 10.8772 9.97493 10.682C9.77967 10.4867 9.77967 10.1701 9.97493 9.97487C10.1702 9.7796 10.4868 9.7796 10.682 9.97487ZM9.26782 11.3891C9.46308 11.5843 9.46308 11.9009 9.26782 12.0962C9.07256 12.2915 8.75598 12.2915 8.56071 12.0962C8.36545 11.9009 8.36545 11.5843 8.56072 11.3891C8.75598 11.1938 9.07256 11.1938 9.26782 11.3891ZM7.1465 13.5104C6.95124 13.3151 6.95124 12.9986 7.1465 12.8033C7.17091 12.7789 7.19721 12.7575 7.22494 12.7392C7.41901 12.6111 7.68275 12.6324 7.85361 12.8033C8.04887 12.9986 8.04887 13.3151 7.85361 13.5104C7.65835 13.7057 7.34176 13.7057 7.1465 13.5104Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M2.90386 8.56065C2.7086 8.75592 2.7086 9.0725 2.90386 9.26776 3.09912 9.46302 3.41571 9.46302 3.61097 9.26776 3.80623 9.0725 3.80623 8.75592 3.61097 8.56065 3.41571 8.36539 3.09912 8.36539 2.90386 8.56065zM4.31807 9.97487C4.12281 10.1701 4.12281 10.4867 4.31807 10.682 4.51334 10.8772 4.82992 10.8772 5.02518 10.682 5.22044 10.4867 5.22044 10.1701 5.02518 9.97487 4.82992 9.7796 4.51334 9.7796 4.31807 9.97487zM5.73229 11.3891C5.53703 11.5843 5.53703 11.9009 5.73229 12.0962 5.92755 12.2914 6.24413 12.2915 6.43939 12.0962 6.63466 11.9009 6.63466 11.5843 6.43939 11.3891 6.24413 11.1938 5.92755 11.1938 5.73229 11.3891zM2.19675 7.85355C2.36761 7.68269 2.38897 7.41895 2.26082 7.22488 2.09046 6.96684 1.71063 6.92546 1.48965 7.14644 1.29439 7.3417 1.29439 7.65829 1.48965 7.85355 1.68491 8.04881 2.00149 8.04881 2.19675 7.85355zM3.61097 5.73223C3.41571 5.53696 3.09912 5.53696 2.90386 5.73223 2.7086 5.92749 2.7086 6.24407 2.90386 6.43933 3.09912 6.6346 3.41571 6.6346 3.61097 6.43933 3.80623 6.24407 3.80623 5.92749 3.61097 5.73223zM5.02518 4.31801C4.82992 4.12275 4.51334 4.12275 4.31807 4.31801 4.12281 4.51328 4.12281 4.82986 4.31807 5.02512 4.51334 5.22038 4.82992 5.22038 5.02518 5.02512 5.22044 4.82986 5.22044 4.51328 5.02518 4.31801zM6.43939 2.9038C6.24413 2.70854 5.92755 2.70854 5.73229 2.9038 5.53703 3.09906 5.53703 3.41564 5.73229 3.61091 5.92755 3.80617 6.24413 3.80617 6.43939 3.61091 6.63466 3.41564 6.63466 3.09906 6.43939 2.9038zM7.85361 1.48959C7.65835 1.29432 7.34176 1.29432 7.1465 1.48959 6.95124 1.68485 6.95124 2.00143 7.1465 2.19669 7.34176 2.39196 7.65835 2.39196 7.85361 2.19669 8.04887 2.00143 8.04887 1.68485 7.85361 1.48959zM9.26782 2.9038C9.07256 2.70854 8.75598 2.70854 8.56071 2.9038 8.36545 3.09906 8.36545 3.41564 8.56071 3.61091 8.75598 3.80617 9.07256 3.80617 9.26782 3.61091 9.46308 3.41564 9.46308 3.09906 9.26782 2.9038zM10.682 4.31801C10.4868 4.12275 10.1702 4.12275 9.97493 4.31801 9.77967 4.51328 9.77967 4.82986 9.97493 5.02512 10.1702 5.22038 10.4868 5.22038 10.682 5.02512 10.8773 4.82986 10.8773 4.51328 10.682 4.31801zM12.0962 5.73223C11.901 5.53696 11.5844 5.53696 11.3891 5.73223 11.1939 5.92749 11.1939 6.24407 11.3891 6.43933 11.5844 6.6346 11.901 6.6346 12.0962 6.43933 12.2915 6.24407 12.2915 5.92749 12.0962 5.73223z",fill:r}))},Ee=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 1.5C2 1.77614 1.77614 2 1.5 2C1.22386 2 1 1.77614 1 1.5C1 1.22386 1.22386 1 1.5 1C1.77614 1 2 1.22386 2 1.5ZM5 13H10V2L5 2L5 13ZM4 13C4 13.5523 4.44772 14 5 14H10C10.5523 14 11 13.5523 11 13V2C11 1.44772 10.5523 1 10 1H5C4.44772 1 4 1.44771 4 2V13ZM13.5 2C13.7761 2 14 1.77614 14 1.5C14 1.22386 13.7761 1 13.5 1C13.2239 1 13 1.22386 13 1.5C13 1.77614 13.2239 2 13.5 2ZM2 3.5C2 3.77614 1.77614 4 1.5 4C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3C1.77614 3 2 3.22386 2 3.5ZM13.5 4C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3C13.2239 3 13 3.22386 13 3.5C13 3.77614 13.2239 4 13.5 4ZM2 5.5C2 5.77614 1.77614 6 1.5 6C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5C1.77614 5 2 5.22386 2 5.5ZM13.5 6C13.7761 6 14 5.77614 14 5.5C14 5.22386 13.7761 5 13.5 5C13.2239 5 13 5.22386 13 5.5C13 5.77614 13.2239 6 13.5 6ZM2 7.5C2 7.77614 1.77614 8 1.5 8C1.22386 8 1 7.77614 1 7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5ZM13.5 8C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7C13.2239 7 13 7.22386 13 7.5C13 7.77614 13.2239 8 13.5 8ZM2 9.5C2 9.77614 1.77614 10 1.5 10C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9C1.77614 9 2 9.22386 2 9.5ZM13.5 10C13.7761 10 14 9.77614 14 9.5C14 9.22386 13.7761 9 13.5 9C13.2239 9 13 9.22386 13 9.5C13 9.77614 13.2239 10 13.5 10ZM2 11.5C2 11.7761 1.77614 12 1.5 12C1.22386 12 1 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11C1.77614 11 2 11.2239 2 11.5ZM13.5 12C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12ZM2 13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5C1 13.2239 1.22386 13 1.5 13C1.77614 13 2 13.2239 2 13.5ZM13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},He=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.0697 1.76746C12.4807 1.21947 11.4605 0.454311 11.0495 1.0023C10.6385 1.55028 11.6588 2.31544 12.0697 1.76746ZM8.39263 1.07811C7.15585 0.950602 5.7823 1.16348 4.58433 1.70937C3.38552 2.25563 2.32735 3.15309 1.78844 4.41832C1.37574 5.38724 1.01715 6.28113 1.00088 7.44354C0.984724 8.59844 1.30522 9.96898 2.13174 11.928C2.61142 13.0649 4.03963 13.5446 5.13895 13.8079C6.40836 14.1119 7.80857 14.1914 8.6644 14.0742C9.36515 13.9782 10.1448 13.8284 10.7987 13.297C11.8977 12.4039 12.9009 11.3955 13.4994 10.3393C14.104 9.27221 14.3256 8.09207 13.7216 6.95324C13.5628 6.65373 13.316 6.57734 13.0412 6.4923C12.9374 6.46016 12.8295 6.42678 12.7209 6.37966C11.6211 5.90234 10.9646 5.34963 10.9135 5.02876C10.8656 4.72808 10.9221 4.51463 10.9811 4.29181C11.0129 4.17199 11.0453 4.04947 11.0626 3.90922C11.0838 3.73737 11.0814 3.33319 10.6996 3.12761C10.4048 2.96888 10.2164 2.65843 10.0407 2.36904C9.99742 2.29775 9.95492 2.22773 9.9118 2.16158C9.62634 1.72367 9.20769 1.16213 8.39263 1.07811ZM4.99899 2.61935C3.96483 3.09058 3.12554 3.83097 2.70846 4.81018C2.29808 5.77368 2.01406 6.50873 2.00079 7.45753C1.98741 8.41385 2.25043 9.6368 3.0531 11.5393C3.39181 12.3421 4.62167 12.6557 5.37186 12.8354C6.5493 13.1174 7.822 13.1802 8.52868 13.0834C9.21271 12.9897 9.74568 12.8642 10.1681 12.5209C11.229 11.6587 12.121 10.7435 12.6293 9.84635C12.9349 9.30709 13.5141 7.7028 12.6292 7.3873C10.7539 6.71875 10.262 6.06669 9.99011 5.41268C9.80915 4.97744 9.82868 4.52282 9.95741 4.07885L9.95741 4.07884C9.97662 4.0126 9.99538 3.94791 10.0334 3.88882C9.81857 3.73676 9.6515 3.55195 9.51464 3.3715C9.42876 3.25828 9.3469 3.12099 9.26197 2.97856C9.01866 2.57052 8.75018 2.12027 8.29008 2.07283C7.22889 1.96343 6.03398 2.14772 4.99899 2.61935ZM13.2081 3.77471C13.441 3.22671 12.4547 2.63606 12.0822 3.10163C11.5817 3.72732 12.9029 4.49281 13.2081 3.77471ZM14.3672 2.26031C14.9668 2.27493 15.1551 1.11603 14.5718 0.949371C13.8076 0.731026 13.5918 2.24139 14.3672 2.26031ZM14.2857 5.09098C14.8644 5.10004 15.0462 4.38222 14.4832 4.27899C13.7455 4.14375 13.5373 5.07927 14.2857 5.09098ZM6.9075 4.28672C6.46898 4.66754 6.0522 4.15185 5.97983 3.7365C5.86848 3.09744 6.33696 2.56856 6.94823 2.91156C7.43344 3.18382 7.26678 3.97471 6.9075 4.28672ZM4.94455 5.88184C5.40885 5.41754 4.59567 4.57013 4.11425 5.05154C3.83338 5.33242 4.00936 5.65376 4.23744 5.88184C4.43271 6.0771 4.74929 6.0771 4.94455 5.88184ZM6.97716 6.71984C7.31181 7.38914 8.48804 6.79159 7.99413 6.14788C7.86519 5.97983 7.68657 5.9494 7.62145 5.94207C7.21217 5.89601 6.76349 6.2925 6.97716 6.71984ZM6.98798 8.72461C7.14066 9.1188 7.51122 9.3187 7.91915 9.1633C8.27434 9.02799 8.33186 8.39689 8.17175 8.07427C8.02331 7.77514 7.63956 7.67793 7.33747 7.79417C6.98512 7.92976 6.85672 8.38708 6.98576 8.71889L6.98798 8.72461ZM10.3885 8.84081C10.7575 8.6566 11.4617 8.82771 11.4617 9.31199C11.4617 9.71286 10.9587 10.2165 10.5634 10.2826C10.1813 10.3465 9.70515 9.97581 9.76648 9.57718C9.81445 9.26539 10.1217 8.97401 10.3885 8.84081ZM7.56704 10.8432C7.33461 10.7502 7.14353 10.8601 7.11437 10.8769L7.11279 10.8778C6.90782 10.9949 6.71383 11.2439 6.6747 11.4842C6.59018 12.0034 7.13199 12.1239 7.52661 12.0987C8.2074 12.0553 8.06547 11.0426 7.56704 10.8432ZM4.8805 10.8932C5.0674 10.7723 5.15658 10.5363 5.08293 10.3153C4.93046 9.79687 4.3246 9.71252 3.96561 10.1297C3.79336 10.3299 3.80749 10.6274 3.99214 10.8105L3.99495 10.814L3.9979 10.8176C4.22025 11.0942 4.63624 11.1857 4.8805 10.8932ZM3.04695 7.81318C3.33147 8.0977 3.60077 8.15067 3.98443 8.05859C4.60826 7.90887 4.13814 6.24299 3.047 6.87296C2.70939 7.06788 2.86716 7.63339 3.04695 7.81318Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},je=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ve=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.87737 12H9.9H11.5C11.7761 12 12 11.7761 12 11.5C12 11.2239 11.7761 11 11.5 11H9.9C8.77164 11 7.95545 10.9996 7.31352 10.9472C6.67744 10.8952 6.25662 10.7946 5.91103 10.6185C5.25247 10.283 4.71703 9.74753 4.38148 9.08897C4.20539 8.74338 4.10481 8.32256 4.05284 7.68648C4.00039 7.04455 4 6.22836 4 5.1V3.5C4 3.22386 3.77614 3 3.5 3C3.22386 3 3 3.22386 3 3.5V5.1V5.12263C3 6.22359 3 7.08052 3.05616 7.76791C3.11318 8.46584 3.23058 9.0329 3.49047 9.54296C3.9219 10.3897 4.61031 11.0781 5.45704 11.5095C5.9671 11.7694 6.53416 11.8868 7.23209 11.9438C7.91948 12 8.77641 12 9.87737 12Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ze=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.12263 12H5.1H3.5C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H5.1C6.22836 11 7.04455 10.9996 7.68648 10.9472C8.32256 10.8952 8.74338 10.7946 9.08897 10.6185C9.74753 10.283 10.283 9.74753 10.6185 9.08897C10.7946 8.74338 10.8952 8.32256 10.9472 7.68648C10.9996 7.04455 11 6.22836 11 5.1V3.5C11 3.22386 11.2239 3 11.5 3C11.7761 3 12 3.22386 12 3.5V5.1V5.12263C12 6.22359 12 7.08052 11.9438 7.76791C11.8868 8.46584 11.7694 9.0329 11.5095 9.54296C11.0781 10.3897 10.3897 11.0781 9.54296 11.5095C9.0329 11.7694 8.46584 11.8868 7.76791 11.9438C7.08052 12 6.22359 12 5.12263 12Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Re=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.87737 3H9.9H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H9.9C8.77164 4 7.95545 4.00039 7.31352 4.05284C6.67744 4.10481 6.25662 4.20539 5.91103 4.38148C5.25247 4.71703 4.71703 5.25247 4.38148 5.91103C4.20539 6.25662 4.10481 6.67744 4.05284 7.31352C4.00039 7.95545 4 8.77164 4 9.9V11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5V9.9V9.87737C3 8.77641 3 7.91948 3.05616 7.23209C3.11318 6.53416 3.23058 5.9671 3.49047 5.45704C3.9219 4.61031 4.61031 3.9219 5.45704 3.49047C5.9671 3.23058 6.53416 3.11318 7.23209 3.05616C7.91948 3 8.77641 3 9.87737 3Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},_e=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.12263 3H5.1H3.5C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H5.1C6.22836 4 7.04455 4.00039 7.68648 4.05284C8.32256 4.10481 8.74338 4.20539 9.08897 4.38148C9.74753 4.71703 10.283 5.25247 10.6185 5.91103C10.7946 6.25662 10.8952 6.67744 10.9472 7.31352C10.9996 7.95545 11 8.77164 11 9.9V11.5C11 11.7761 11.2239 12 11.5 12C11.7761 12 12 11.7761 12 11.5V9.9V9.87737C12 8.77641 12 7.91948 11.9438 7.23209C11.8868 6.53416 11.7694 5.9671 11.5095 5.45704C11.0781 4.61031 10.3897 3.9219 9.54296 3.49047C9.0329 3.23058 8.46584 3.11318 7.76791 3.05616C7.08052 3 6.22359 3 5.12263 3Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Se=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.1 3C10.5283 3 10.8194 3.00039 11.0445 3.01878C11.2637 3.03669 11.3758 3.06915 11.454 3.10899C11.6422 3.20487 11.7951 3.35785 11.891 3.54601C11.9309 3.62421 11.9633 3.73631 11.9812 3.95552C11.9996 4.18056 12 4.47171 12 4.9V5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5V4.87935C13 4.47687 13 4.14469 12.9779 3.87409C12.9549 3.59304 12.9057 3.33469 12.782 3.09202C12.5903 2.7157 12.2843 2.40973 11.908 2.21799C11.6653 2.09434 11.407 2.04506 11.1259 2.0221C10.8553 1.99999 10.5231 1.99999 10.1207 2H10.1206H10.1H9.5C9.22386 2 9 2.22386 9 2.5C9 2.77614 9.22386 3 9.5 3H10.1ZM5.5 2H4.87935H4.87934C4.47686 1.99999 4.14468 1.99999 3.87409 2.0221C3.59304 2.04506 3.33469 2.09434 3.09202 2.21799C2.7157 2.40973 2.40973 2.7157 2.21799 3.09202C2.09434 3.33469 2.04506 3.59304 2.0221 3.87409C1.99999 4.14468 1.99999 4.47686 2 4.87934V4.87935V5.5C2 5.77614 2.22386 6 2.5 6C2.77614 6 3 5.77614 3 5.5V4.9C3 4.47171 3.00039 4.18056 3.01878 3.95552C3.03669 3.73631 3.06915 3.62421 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.62421 3.06915 3.73631 3.03669 3.95552 3.01878C4.18056 3.00039 4.47171 3 4.9 3H5.5C5.77614 3 6 2.77614 6 2.5C6 2.22386 5.77614 2 5.5 2ZM13 9.5C13 9.22386 12.7761 9 12.5 9C12.2239 9 12 9.22386 12 9.5V10.1C12 10.5283 11.9996 10.8194 11.9812 11.0445C11.9633 11.2637 11.9309 11.3758 11.891 11.454C11.7951 11.6422 11.6422 11.7951 11.454 11.891C11.3758 11.9309 11.2637 11.9633 11.0445 11.9812C10.8194 11.9996 10.5283 12 10.1 12H9.5C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13H10.1206C10.5231 13 10.8553 13 11.1259 12.9779C11.407 12.9549 11.6653 12.9057 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C12.9057 11.6653 12.9549 11.407 12.9779 11.1259C13 10.8553 13 10.5231 13 10.1206V9.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V10.1C3 10.5283 3.00039 10.8194 3.01878 11.0445C3.03669 11.2637 3.06915 11.3758 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.62421 11.9309 3.73631 11.9633 3.95552 11.9812C4.18056 11.9996 4.47171 12 4.9 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H4.87935C4.47687 13 4.14469 13 3.87409 12.9779C3.59304 12.9549 3.33469 12.9057 3.09202 12.782C2.7157 12.5903 2.40973 12.2843 2.21799 11.908C2.09434 11.6653 2.04506 11.407 2.0221 11.1259C1.99999 10.8553 1.99999 10.5231 2 10.1207V10.1206V10.1V9.5C2 9.22386 2.22386 9 2.5 9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Pe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.7217 1.84998 3.34851 3.90636 2.76336 4.99997H4.5C4.77614 4.99997 5 5.22383 5 5.49997C5 5.77611 4.77614 5.99997 4.5 5.99997H1.5C1.22386 5.99997 1 5.77611 1 5.49997V2.49997C1 2.22383 1.22386 1.99997 1.5 1.99997C1.77614 1.99997 2 2.22383 2 2.49997V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7 10V5.00001H8V10H7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ie=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.72167 1.84998 3.34849 3.9064 2.76335 5H4.5C4.77614 5 5 5.22386 5 5.5C5 5.77614 4.77614 6 4.5 6H1.5C1.22386 6 1 5.77614 1 5.5V2.5C1 2.22386 1.22386 2 1.5 2C1.77614 2 2 2.22386 2 2.5V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7.5 4.00001C7.77614 4.00001 8 4.22387 8 4.50001V7.29291L9.85355 9.14646C10.0488 9.34172 10.0488 9.65831 9.85355 9.85357C9.65829 10.0488 9.34171 10.0488 9.14645 9.85357L7.14645 7.85357C7.05268 7.7598 7 7.63262 7 7.50001V4.50001C7 4.22387 7.22386 4.00001 7.5 4.00001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ke=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.5 8.00684e-07C3.77614 7.88614e-07 4 0.223859 4 0.500001L4 3.00006L11.5 3.00006C11.7761 3.00006 12 3.22392 12 3.50006L12 11.0001L14.5 11C14.7761 11 15 11.2238 15 11.5C15 11.7761 14.7762 12 14.5 12L12 12.0001L12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5L11 12.0001L3.5 12.0001C3.22386 12.0001 3 11.7762 3 11.5001L3 4.00005L0.499989 4C0.223847 4 -6.10541e-06 3.77613 -5.02576e-07 3.49999C5.13006e-06 3.22385 0.223867 3 0.50001 3L3 3.00005L3 0.500001C3 0.223859 3.22386 8.12755e-07 3.5 8.00684e-07ZM4 4.00006L4 11.0001L11 11.0001L11 4.00006L4 4.00006Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Be=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ae=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Te=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},$e=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.50207C0.877075 3.84319 3.84319 0.877075 7.50208 0.877075C11.1609 0.877075 14.1271 3.84319 14.1271 7.50207C14.1271 11.1609 11.1609 14.1271 7.50208 14.1271C3.84319 14.1271 0.877075 11.1609 0.877075 7.50207ZM1.84898 7.00003C2.0886 4.26639 4.26639 2.0886 7.00003 1.84898V4.50003C7.00003 4.77617 7.22388 5.00003 7.50003 5.00003C7.77617 5.00003 8.00003 4.77617 8.00003 4.50003V1.84862C10.7356 2.08643 12.9154 4.26502 13.1552 7.00003H10.5C10.2239 7.00003 10 7.22388 10 7.50003C10 7.77617 10.2239 8.00003 10.5 8.00003H13.1555C12.9176 10.7369 10.7369 12.9176 8.00003 13.1555V10.5C8.00003 10.2239 7.77617 10 7.50003 10C7.22388 10 7.00003 10.2239 7.00003 10.5V13.1552C4.26502 12.9154 2.08643 10.7356 1.84862 8.00003H4.50003C4.77617 8.00003 5.00003 7.77617 5.00003 7.50003C5.00003 7.22388 4.77617 7.00003 4.50003 7.00003H1.84898Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Fe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.054C4.80517 11.8689 3.04222 10.1668 2.76344 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.7417C2.93252 4.73662 4.73662 2.93252 7 2.7417V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V2.76344C10.1668 3.04222 11.8689 4.80517 12.054 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.0322C11.7621 10.0991 10.0991 11.7621 8 12.0322Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},De=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.60913 0.0634287C4.39082 0.0088505 4.16575 0.12393 4.08218 0.332867L3.1538 2.6538L0.832866 3.58218C0.702884 3.63417 0.604504 3.7437 0.566705 3.87849C0.528906 4.01329 0.555994 4.158 0.639992 4.26999L2.01148 6.09864L1.06343 9.89085C1.00944 10.1068 1.12145 10.3298 1.32691 10.4154L4.20115 11.613L5.62557 13.7496C5.73412 13.9124 5.93545 13.9864 6.12362 13.9327L9.62362 12.9327C9.62988 12.9309 9.63611 12.929 9.64229 12.9269L12.6423 11.9269C12.7923 11.8769 12.905 11.7519 12.9393 11.5976L13.9393 7.09761C13.9776 6.92506 13.9114 6.74605 13.77 6.63999L11.95 5.27499V2.99999C11.95 2.82955 11.8537 2.67373 11.7012 2.5975L8.70124 1.0975C8.67187 1.08282 8.64098 1.07139 8.60913 1.06343L4.60913 0.0634287ZM11.4323 6.01173L12.7748 7.01858L10.2119 9.15429C10.1476 9.20786 10.0995 9.2783 10.0731 9.35769L9.25382 11.8155L7.73849 10.8684C7.52774 10.7367 7.25011 10.8007 7.11839 11.0115C6.98667 11.2222 7.05074 11.4999 7.26149 11.6316L8.40341 12.3453L6.19221 12.9771L4.87441 11.0004C4.82513 10.9265 4.75508 10.8688 4.67307 10.8346L2.03046 9.73352L2.85134 6.44999H4.99999C5.24852 6.44999 5.44999 6.24852 5.44999 5.99999C5.44999 5.75146 5.24852 5.54999 4.99999 5.54999H2.72499L1.7123 4.19974L3.51407 3.47903L6.35769 4.4269C6.53655 4.48652 6.73361 4.42832 6.85138 4.28111L8.62413 2.06518L11.05 3.27811V5.19533L8.83287 6.08218C8.70996 6.13134 8.61494 6.23212 8.57308 6.35769L8.07308 7.85769C7.99449 8.09346 8.12191 8.34831 8.35769 8.4269C8.59346 8.50549 8.84831 8.37807 8.9269 8.14229L9.3609 6.84029L11.4323 6.01173ZM7.71052 1.76648L6.34462 3.47386L4.09505 2.724L4.77192 1.03183L7.71052 1.76648ZM10.2115 11.7885L12.116 11.1537L12.7745 8.19034L10.8864 9.76374L10.2115 11.7885Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ne=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ze=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.29227 0.048984C3.47033 -0.032338 3.67946 -0.00228214 3.8274 0.125891L12.8587 7.95026C13.0134 8.08432 13.0708 8.29916 13.0035 8.49251C12.9362 8.68586 12.7578 8.81866 12.5533 8.82768L9.21887 8.97474L11.1504 13.2187C11.2648 13.47 11.1538 13.7664 10.9026 13.8808L8.75024 14.8613C8.499 14.9758 8.20255 14.8649 8.08802 14.6137L6.15339 10.3703L3.86279 12.7855C3.72196 12.934 3.50487 12.9817 3.31479 12.9059C3.1247 12.8301 3 12.6461 3 12.4414V0.503792C3 0.308048 3.11422 0.130306 3.29227 0.048984ZM4 1.59852V11.1877L5.93799 9.14425C6.05238 9.02363 6.21924 8.96776 6.38319 8.99516C6.54715 9.02256 6.68677 9.12965 6.75573 9.2809L8.79056 13.7441L10.0332 13.178L8.00195 8.71497C7.93313 8.56376 7.94391 8.38824 8.03072 8.24659C8.11753 8.10494 8.26903 8.01566 8.435 8.00834L11.2549 7.88397L4 1.59852Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},We=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2C5.42215 2 6.0399 2.23054 6.42075 2.56379C6.79286 2.88939 7 3.36626 7 4V7H5.75C5.47386 7 5.25 7.22386 5.25 7.5C5.25 7.77614 5.47386 8 5.75 8H7V11C7 11.6337 6.79286 12.1106 6.42075 12.4362C6.0399 12.7695 5.42215 13 4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14C5.57785 14 6.4601 13.7305 7.07925 13.1888C7.24168 13.0467 7.38169 12.8896 7.5 12.7198C7.61832 12.8896 7.75832 13.0467 7.92075 13.1888C8.5399 13.7305 9.42215 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.57785 13 8.9601 12.7695 8.57925 12.4362C8.20714 12.1106 8 11.6337 8 11V8H9.25C9.52614 8 9.75 7.77614 9.75 7.5C9.75 7.22386 9.52614 7 9.25 7H8V4C8 3.36626 8.20714 2.88939 8.57925 2.56379C8.9601 2.23054 9.57785 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.42215 1 8.5399 1.26946 7.92075 1.81121C7.75832 1.95333 7.61832 2.11043 7.5 2.28023C7.38168 2.11043 7.24168 1.95333 7.07925 1.81121C6.4601 1.26946 5.57785 1 4.5 1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ge=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 7.5C5 7.22386 5.22386 7 5.5 7H9.5C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ue=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},qe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ye=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 4.36689 4.36689 1.82707 7.49991 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49991C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49991ZM8.37287 7.50006C8.37287 7.98196 7.98221 8.37263 7.5003 8.37263C7.01839 8.37263 6.62773 7.98196 6.62773 7.50006C6.62773 7.01815 7.01839 6.62748 7.5003 6.62748C7.98221 6.62748 8.37287 7.01815 8.37287 7.50006ZM9.32287 7.50006C9.32287 8.50664 8.50688 9.32263 7.5003 9.32263C6.49372 9.32263 5.67773 8.50664 5.67773 7.50006C5.67773 6.49348 6.49372 5.67748 7.5003 5.67748C8.50688 5.67748 9.32287 6.49348 9.32287 7.50006Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ke=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Qe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 2C7.77614 2 8 2.22386 8 2.5L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 2.5C7 2.22386 7.22386 2 7.5 2Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Xe=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 9.125C8.39746 9.125 9.125 8.39746 9.125 7.5C9.125 6.60254 8.39746 5.875 7.5 5.875C6.60254 5.875 5.875 6.60254 5.875 7.5C5.875 8.39746 6.60254 9.125 7.5 9.125ZM7.5 10.125C8.94975 10.125 10.125 8.94975 10.125 7.5C10.125 6.05025 8.94975 4.875 7.5 4.875C6.05025 4.875 4.875 6.05025 4.875 7.5C4.875 8.94975 6.05025 10.125 7.5 10.125Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Je=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:r}))},et=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},tt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},rt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},nt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ot=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},it=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},lt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},at=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("circle",{cx:"4.5",cy:"2.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"4.5",cy:"4.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"4.5",cy:"6.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"4.5",cy:"8.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"4.5",cy:"10.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"4.5",cy:"12.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"2.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"4.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"6.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"8.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"10.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"6.5",cy:"12.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"2.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"4.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"6.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"8.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"10.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"8.499",cy:"12.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"2.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"4.5",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"6.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"8.499",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"10.498",r:".6",fill:r}),(0,n.createElement)("circle",{cx:"10.499",cy:"12.498",r:".6",fill:r}))},ct=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},st=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ct=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.09998 12.5C4.09998 12.7209 4.27906 12.9 4.49998 12.9C4.72089 12.9 4.89998 12.7209 4.89998 12.5L4.89998 2.50002C4.89998 2.27911 4.72089 2.10003 4.49998 2.10003C4.27906 2.10003 4.09998 2.27911 4.09998 2.50002L4.09998 12.5ZM6.09998 12.5C6.09998 12.7209 6.27906 12.9 6.49998 12.9C6.72089 12.9 6.89998 12.7209 6.89998 12.5L6.89998 2.50002C6.89998 2.27911 6.72089 2.10003 6.49998 2.10003C6.27906 2.10003 6.09998 2.27911 6.09998 2.50002L6.09998 12.5ZM8.49998 12.9C8.27906 12.9 8.09998 12.7209 8.09998 12.5L8.09998 2.50002C8.09998 2.27911 8.27906 2.10002 8.49998 2.10002C8.72089 2.10002 8.89998 2.27911 8.89998 2.50002L8.89998 12.5C8.89998 12.7209 8.72089 12.9 8.49998 12.9ZM10.1 12.5C10.1 12.7209 10.2791 12.9 10.5 12.9C10.7209 12.9 10.9 12.7209 10.9 12.5L10.9 2.50002C10.9 2.27911 10.7209 2.10002 10.5 2.10002C10.2791 2.10002 10.1 2.27911 10.1 2.50002L10.1 12.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},dt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ut=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ft=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49999 3.09998C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999ZM7.49998 5.1C7.27907 5.1 7.09998 5.27908 7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998ZM7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5ZM7.49998 9.1C7.27907 9.1 7.09998 9.27908 7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998ZM7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5ZM2.5 9.25003L5 6.00003H0L2.5 9.25003Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ht=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},pt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 2.5C2 2.22386 2.22386 2 2.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H12.5C12.7761 2 13 2.22386 13 2.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3H9.5C9.22386 3 9 2.77614 9 2.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H2.5C2.22386 13 2 12.7761 2 12.5V9.5C2 9.22386 2.22386 9 2.5 9ZM12.5 9C12.7761 9 13 9.22386 13 9.5V12.5C13 12.7761 12.7761 13 12.5 13H9.5C9.22386 13 9 12.7761 9 12.5C9 12.2239 9.22386 12 9.5 12H12V9.5C12 9.22386 12.2239 9 12.5 9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},vt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},gt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},wt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},mt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},bt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.5 2C5.77614 2 6 2.22386 6 2.5V5.5C6 5.77614 5.77614 6 5.5 6H2.5C2.22386 6 2 5.77614 2 5.5C2 5.22386 2.22386 5 2.5 5H5V2.5C5 2.22386 5.22386 2 5.5 2ZM9.5 2C9.77614 2 10 2.22386 10 2.5V5H12.5C12.7761 5 13 5.22386 13 5.5C13 5.77614 12.7761 6 12.5 6H9.5C9.22386 6 9 5.77614 9 5.5V2.5C9 2.22386 9.22386 2 9.5 2ZM2 9.5C2 9.22386 2.22386 9 2.5 9H5.5C5.77614 9 6 9.22386 6 9.5V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V10H2.5C2.22386 10 2 9.77614 2 9.5ZM9 9.5C9 9.22386 9.22386 9 9.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H10V12.5C10 12.7761 9.77614 13 9.5 13C9.22386 13 9 12.7761 9 12.5V9.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},xt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},yt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14.7649 6.07595C14.9991 6.22231 15.0703 6.53078 14.9239 6.76495C14.4849 7.46742 13.9632 8.10644 13.3702 8.66304L14.5712 9.86405C14.7664 10.0593 14.7664 10.3759 14.5712 10.5712C14.3759 10.7664 14.0593 10.7664 13.8641 10.5712L12.6011 9.30816C11.8049 9.90282 10.9089 10.3621 9.93374 10.651L10.383 12.3276C10.4544 12.5944 10.2961 12.8685 10.0294 12.94C9.76266 13.0115 9.4885 12.8532 9.41703 12.5864L8.95916 10.8775C8.48742 10.958 8.00035 10.9999 7.5 10.9999C6.99964 10.9999 6.51257 10.958 6.04082 10.8775L5.58299 12.5864C5.51153 12.8532 5.23737 13.0115 4.97063 12.94C4.7039 12.8685 4.5456 12.5944 4.61706 12.3277L5.06624 10.651C4.09111 10.3621 3.19503 9.90281 2.3989 9.30814L1.1359 10.5711C0.940638 10.7664 0.624058 10.7664 0.428797 10.5711C0.233537 10.3759 0.233537 10.0593 0.428797 9.86404L1.62982 8.66302C1.03682 8.10643 0.515113 7.46742 0.0760677 6.76495C-0.0702867 6.53078 0.000898544 6.22231 0.235064 6.07595C0.46923 5.9296 0.777703 6.00078 0.924057 6.23495C1.40354 7.00212 1.989 7.68056 2.66233 8.2427C2.67315 8.25096 2.6837 8.25971 2.69397 8.26897C4.00897 9.35527 5.65536 9.9999 7.5 9.9999C10.3078 9.9999 12.6563 8.50629 14.0759 6.23495C14.2223 6.00078 14.5308 5.9296 14.7649 6.07595Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Lt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Mt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ot=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82708 7.49972C1.82708 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82708 10.6327 1.82708 7.49972ZM5.03747 9.21395C4.87949 8.98746 4.56782 8.93193 4.34133 9.08991C4.11484 9.24789 4.05931 9.55956 4.21729 9.78605C4.93926 10.8211 6.14033 11.5 7.50004 11.5C8.85974 11.5 10.0608 10.8211 10.7828 9.78605C10.9408 9.55956 10.8852 9.24789 10.6587 9.08991C10.4323 8.93193 10.1206 8.98746 9.9626 9.21395C9.41963 9.99238 8.51907 10.5 7.50004 10.5C6.481 10.5 5.58044 9.99238 5.03747 9.21395ZM5.37503 6.84998C5.85828 6.84998 6.25003 6.45815 6.25003 5.97498C6.25003 5.4918 5.85828 5.09998 5.37503 5.09998C4.89179 5.09998 4.50003 5.4918 4.50003 5.97498C4.50003 6.45815 4.89179 6.84998 5.37503 6.84998ZM10.5 5.97498C10.5 6.45815 10.1083 6.84998 9.62503 6.84998C9.14179 6.84998 8.75003 6.45815 8.75003 5.97498C8.75003 5.4918 9.14179 5.09998 9.62503 5.09998C10.1083 5.09998 10.5 5.4918 10.5 5.97498Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Et=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ht=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},jt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.29289L12 4.70711V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.60355C13 4.40464 12.921 4.21388 12.7803 4.07322L9.85355 1.14645C9.75979 1.05268 9.63261 1 9.5 1H3.5ZM5.25 7C4.97386 7 4.75 7.22386 4.75 7.5C4.75 7.77614 4.97386 8 5.25 8H9.75C10.0261 8 10.25 7.77614 10.25 7.5C10.25 7.22386 10.0261 7 9.75 7H5.25Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Vt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Zt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Rt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5176 8.62787 11.5176 9.48128C11.5176 10.5125 10.9902 12 9.27734 12C8.77742 12 6.42626 12 5.10505 12ZM8.37891 8.00341H5.8V10.631H8.37891C8.9 10.631 9.6296 10.1211 9.6296 9.29877C9.6296 8.47643 8.9 8.00341 8.37891 8.00341ZM5.8 4.36903V6.69577H8.17969C8.53906 6.69577 9.27734 6.35939 9.27734 5.50002C9.27734 4.64064 8.48047 4.36903 8.17969 4.36903H5.8Z",fill:r}))},_t=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.5 4.5C2.5 3.09886 3.59886 2 5 2H12.499C12.7752 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H8.69244L8.40509 3.85458C8.18869 4.49752 7.89401 5.37197 7.58091 6.29794C7.50259 6.52956 7.42308 6.76453 7.34332 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H7.00407C6.56724 9.28543 6.16435 10.4613 5.95799 11.0386C5.63627 11.9386 5.20712 12.4857 4.66741 12.7778C4.16335 13.0507 3.64154 13.0503 3.28378 13.05L3.25 13.05C2.94624 13.05 2.7 12.8037 2.7 12.5C2.7 12.1962 2.94624 11.95 3.25 11.95C3.64182 11.95 3.9035 11.9405 4.14374 11.8105C4.36443 11.691 4.65532 11.4148 4.92217 10.6683C5.10695 10.1514 5.45375 9.14134 5.8422 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H6.18187C6.30127 6.64785 6.42132 6.29323 6.53887 5.94559C6.85175 5.02025 7.14627 4.14631 7.36256 3.50368L7.53192 3H5C4.15114 3 3.5 3.65114 3.5 4.5C3.5 4.77614 3.27614 5 3 5C2.72386 5 2.5 4.77614 2.5 4.5Z",fill:r}))},St=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Pt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.79993 3.50017C4.79993 3.25164 5.0014 3.05017 5.24993 3.05017H9.74993C9.99845 3.05017 10.1999 3.25164 10.1999 3.50017C10.1999 3.7487 9.99845 3.95017 9.74993 3.95017H8.09993V11.05H9.74994C9.99847 11.05 10.1999 11.2515 10.1999 11.5C10.1999 11.7486 9.99847 11.95 9.74994 11.95H5.24994C5.00141 11.95 4.79994 11.7486 4.79994 11.5C4.79994 11.2515 5.00141 11.05 5.24994 11.05H6.89993V3.95017H5.24993C5.0014 3.95017 4.79993 3.7487 4.79993 3.50017Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},It=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.78233 2.21707C2.70732 2.14206 2.60557 2.09991 2.49949 2.09991C2.3934 2.09991 2.29166 2.14206 2.21664 2.21707L0.216645 4.21707C0.0604351 4.37328 0.0604351 4.62655 0.216645 4.78276C0.372855 4.93897 0.626121 4.93897 0.78233 4.78276L2.09949 3.4656L2.09949 11.5342L0.78233 10.2171C0.62612 10.0609 0.372854 10.0609 0.216645 10.2171C0.0604349 10.3733 0.0604349 10.6265 0.216645 10.7828L2.21664 12.7828C2.29166 12.8578 2.3934 12.8999 2.49949 12.8999C2.60557 12.8999 2.70731 12.8578 2.78233 12.7828L4.78233 10.7828C4.93854 10.6265 4.93854 10.3733 4.78233 10.2171C4.62612 10.0609 4.37285 10.0609 4.21664 10.2171L2.89949 11.5342L2.89949 3.4656L4.21664 4.78276C4.37285 4.93897 4.62612 4.93897 4.78233 4.78276C4.93854 4.62655 4.93854 4.37328 4.78233 4.21707L2.78233 2.21707ZM10.5 2.74997C10.7107 2.74997 10.8988 2.88211 10.9703 3.08036L13.9703 11.3999C14.064 11.6597 13.9293 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.95228L7.97033 11.7392C7.87666 11.9989 7.59013 12.1336 7.33036 12.0399C7.07059 11.9462 6.93595 11.6597 7.02962 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25879L10.5 4.72396Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},kt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.03791 9.98075C0.934777 9.6583 1.11603 9.37719 1.40005 9.24871C1.68408 9.12022 2.09463 9.13412 2.27071 9.45426C2.85393 10.5147 3.64599 10.7282 4.48665 10.7282C5.52721 10.7282 6.29659 10.2615 6.29659 9.45426C6.29659 8.8047 5.9119 8.46416 4.87134 8.14253L4.15872 7.92181C2.64518 7.44883 1.88842 6.69206 1.88842 5.45601C1.88842 3.79743 3.27583 2.6875 5.24342 2.6875C6.91733 2.6875 7.97409 3.33536 8.43833 4.31065C8.57087 4.58909 8.57614 4.91294 8.22794 5.19114C7.87974 5.46934 7.52351 5.34799 7.23327 5.03839C6.47215 4.22653 5.99545 4.04968 5.25604 4.04968C4.1398 4.04968 3.547 4.63618 3.547 5.27943C3.547 5.86592 3.96322 6.23169 4.94702 6.5344L5.67856 6.76143C7.22994 7.23441 7.97409 7.95964 7.97409 9.17047C7.97409 10.7723 6.69389 12.0903 4.46143 12.0903C2.86612 12.0903 1.40005 11.1131 1.03791 9.98075ZM11.8491 8.77985C10.661 8.39543 10.1649 7.86114 10.1649 6.98805C10.1649 5.86736 11.1636 5.04639 12.6128 5.04639C13.8546 5.04639 14.6629 5.63345 14.9778 6.6346C15.0443 6.84599 14.9593 6.98006 14.7475 7.0491C14.5394 7.11697 14.3176 7.09974 14.238 6.89611C13.9356 6.12273 13.352 5.76311 12.5998 5.76311C11.6467 5.76311 11.0135 6.25178 11.0135 6.91638C11.0135 7.45066 11.3464 7.75038 12.2473 8.04358L12.8348 8.23254C14.062 8.62999 14.5516 9.13821 14.5516 10.0178C14.5516 11.1972 13.481 12.0442 11.9927 12.0442C10.6439 12.0442 9.65644 11.2809 9.41979 10.3361C9.36535 10.1188 9.41192 10.0287 9.70039 9.96184C9.98886 9.89499 10.0714 9.89918 10.1715 10.1369C10.4555 10.8114 11.1531 11.3275 12.0318 11.3275C12.9914 11.3275 13.6834 10.7802 13.6834 10.0634C13.6834 9.53567 13.3961 9.28807 12.4366 8.97532L11.8491 8.77985Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Bt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},At=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.3825 1.29567C3.46241 1.11432 3.64188 0.997284 3.84005 0.997284H11.5C11.7761 0.997284 12 1.22114 12 1.49728V5.5C12 5.77614 11.7761 6 11.5 6H8.63521L11.5288 9.16247C11.6626 9.3087 11.6974 9.52015 11.6175 9.70154C11.5376 9.88293 11.3582 10 11.16 10H8V13.5C8 13.7022 7.87818 13.8845 7.69134 13.9619C7.5045 14.0393 7.28945 13.9966 7.14645 13.8536L3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5V5.5C3 5.22386 3.22386 5 3.5 5H6.36531L3.47105 1.83468C3.33732 1.68844 3.30259 1.47701 3.3825 1.29567ZM7.72032 5L4.97474 1.99728H11V5H7.72032ZM7.27978 6H4V9H7.5H10.0247L7.27978 6ZM4.70711 10L7 12.2929V10H4.70711Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Tt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},$t=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ft=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Dt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.5 2H8V7H13V2.5C13 2.22386 12.7761 2 12.5 2ZM13 8H8V13H12.5C12.7761 13 13 12.7761 13 12.5V8ZM7 7V2H2.5C2.22386 2 2 2.22386 2 2.5V7H7ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Nt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.44995 0.949951C1.31734 0.949951 1.19016 1.00263 1.0964 1.0964C1.00263 1.19017 0.949951 1.31735 0.949951 1.44995L0.949966 3.44995C0.949969 3.7261 1.17383 3.94995 1.44997 3.94995C1.72611 3.94995 1.94997 3.72609 1.94997 3.44995L1.94995 1.94995H3.44997C3.72611 1.94995 3.94997 1.72609 3.94997 1.44995C3.94997 1.17381 3.72611 0.949951 3.44997 0.949951H1.44995ZM5.94995 0.949951C5.67381 0.949951 5.44995 1.17381 5.44995 1.44995C5.44995 1.72609 5.67381 1.94995 5.94995 1.94995H8.94995C9.22609 1.94995 9.44995 1.72609 9.44995 1.44995C9.44995 1.17381 9.22609 0.949951 8.94995 0.949951H5.94995ZM5.44995 13.45C5.44995 13.1738 5.67381 12.95 5.94995 12.95H8.94995C9.22609 12.95 9.44995 13.1738 9.44995 13.45C9.44995 13.7261 9.22609 13.95 8.94995 13.95H5.94995C5.67381 13.95 5.44995 13.7261 5.44995 13.45ZM1.94995 5.94995C1.94995 5.67381 1.72609 5.44995 1.44995 5.44995C1.17381 5.44995 0.949951 5.67381 0.949951 5.94995V8.94995C0.949951 9.22609 1.17381 9.44995 1.44995 9.44995C1.72609 9.44995 1.94995 9.22609 1.94995 8.94995V5.94995ZM13.45 5.44995C13.7261 5.44995 13.95 5.67381 13.95 5.94995V8.94995C13.95 9.22609 13.7261 9.44995 13.45 9.44995C13.1738 9.44995 12.95 9.22609 12.95 8.94995V5.94995C12.95 5.67381 13.1738 5.44995 13.45 5.44995ZM11.45 0.949951C11.1738 0.949951 10.95 1.17381 10.95 1.44995C10.95 1.72609 11.1738 1.94995 11.45 1.94995H12.9499V3.44995C12.9499 3.72609 13.1738 3.94995 13.4499 3.94995C13.7261 3.94995 13.9499 3.72609 13.9499 3.44995V1.44995C13.9499 1.17381 13.7252 0.949951 13.449 0.949951H11.45ZM1.44995 10.95C1.72609 10.95 1.94995 11.1738 1.94995 11.45V12.95H3.44997C3.72611 12.95 3.94997 13.1738 3.94997 13.45C3.94997 13.7261 3.72611 13.95 3.44997 13.95H1.44995C1.17381 13.95 0.949951 13.7261 0.949951 13.45V11.45C0.949951 11.1738 1.17381 10.95 1.44995 10.95ZM13.95 11.45C13.95 11.1738 13.7261 10.95 13.45 10.95C13.1738 10.9499 12.95 11.1738 12.95 11.4499L12.9491 12.95H11.45C11.1738 12.95 10.95 13.1738 10.95 13.45C10.95 13.7261 11.1738 13.95 11.45 13.95H13.4499C13.7261 13.95 13.9499 13.7261 13.9499 13.45L13.95 11.45Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},zt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.00003 1.84861C4.10114 2.1017 1.82707 4.53515 1.82707 7.49972C1.82707 10.4643 4.10114 12.8977 7.00003 13.1508V1.84861ZM8.00003 13.1508C10.8988 12.8976 13.1727 10.4642 13.1727 7.49972C13.1727 4.53524 10.8988 2.10185 8.00003 1.84864V13.1508Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Wt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Gt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ut=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.8113 1.64706C6.62188 2.87918 6.68268 3.88523 6.76848 5.30499C6.78415 5.56426 6.80065 5.83732 6.81661 6.12808C6.83111 6.39208 6.63758 6.62172 6.37495 6.65217C6.11232 6.68262 5.87138 6.50334 5.82509 6.24304L5.74754 5.80698C5.64402 5.16529 5.48355 4.25481 5.17807 3.44741C4.86241 2.61312 4.4486 2.04121 3.93436 1.86044C3.64994 1.76104 3.41901 1.84279 3.25868 2.01052C3.08746 2.18962 2.9976 2.47065 3.0627 2.75399C3.2146 3.34424 3.44627 3.9167 3.69836 4.51802C3.72082 4.57158 3.74346 4.62543 3.76621 4.67954C3.9954 5.22457 4.23619 5.7972 4.41644 6.39081L4.41691 6.39238C4.562 6.87586 4.65646 7.2595 4.73086 7.56165C4.76034 7.68138 4.78667 7.78831 4.81175 7.88359C4.86768 8.09606 4.77836 8.32014 4.59161 8.43588C4.40486 8.55161 4.16445 8.53188 3.99907 8.38725C3.73749 8.15848 3.515 7.92784 3.31817 7.71802C3.27627 7.67335 3.23602 7.63018 3.19705 7.58838C3.04777 7.42826 2.91712 7.28812 2.78334 7.16029C2.45989 6.85122 2.18398 6.68004 1.80585 6.64369L1.80324 6.64343C1.56117 6.61888 1.41402 6.66441 1.31756 6.72627C1.21899 6.78947 1.11988 6.90414 1.03784 7.1123C0.976576 7.28492 1.01515 7.62987 1.1929 7.96911L1.19728 7.97747C1.40086 8.38452 1.74475 8.81587 2.18141 9.29299C2.39739 9.52898 2.62872 9.76849 2.86934 10.0174L2.87966 10.0281C3.11546 10.2721 3.35962 10.5247 3.59713 10.7827C4.4288 11.6863 5.27706 12.7538 5.4627 14H11.5087C11.5636 12.4353 11.8756 11.268 12.2875 10.1346C12.4454 9.70041 12.6121 9.28412 12.7826 8.85829C13.1097 8.04139 13.4509 7.18937 13.7705 6.10824C14.0989 4.99737 14.0097 4.37033 13.8613 4.03984C13.717 3.71858 13.4914 3.61786 13.3816 3.59606C13.1381 3.54774 13.0384 3.60947 12.9698 3.67901C12.867 3.78316 12.7698 3.98273 12.6921 4.30269C12.6166 4.61345 12.5752 4.96517 12.533 5.32501L12.5298 5.35285C12.4924 5.67242 12.4505 6.03016 12.3665 6.30098C12.3383 6.40699 12.2819 6.50407 12.1979 6.57539C12.1382 6.6261 12.0104 6.70818 11.8309 6.69312C11.5424 6.66891 11.3712 6.42143 11.365 6.14783C11.356 5.75454 11.3883 5.35864 11.4074 4.96608C11.4428 4.23646 11.477 3.5337 11.4245 2.8342L11.4242 2.82934C11.3916 2.32997 11.0493 2.00228 10.7007 1.9228C10.5305 1.88401 10.369 1.90601 10.2347 1.9835C10.103 2.05946 9.95535 2.21318 9.8574 2.51394L9.85631 2.51726C9.81525 2.6404 9.77298 2.87753 9.73606 3.2124C9.70044 3.53542 9.67337 3.91279 9.65156 4.29418C9.6329 4.62033 9.61785 4.9584 9.60434 5.26194C9.58728 5.64529 9.57267 5.97357 9.55633 6.1532C9.54983 6.22459 9.52939 6.29493 9.49501 6.35785C9.47356 6.39711 9.36115 6.60947 9.07106 6.61843C8.77917 6.62744 8.63975 6.40057 8.61698 6.35919C8.55634 6.24899 8.55066 6.11807 8.54754 5.99283C8.54474 5.88064 8.54294 5.71798 8.54174 5.54767C8.53935 5.20582 8.53935 4.81919 8.53935 4.70952C8.53935 3.6657 8.53838 2.65372 8.44714 1.64372C8.39183 1.24127 8.06278 1.00455 7.6436 1.00005C7.22399 0.995552 6.87918 1.22704 6.8113 1.64706ZM9.41219 1.3617C9.21469 0.448484 8.39913 0.00810324 7.65433 0.00011154C6.86452 -0.00836308 5.98761 0.465881 5.82365 1.49037L5.82318 1.49334C5.78239 1.7584 5.75229 2.01481 5.7309 2.26652C5.39423 1.67364 4.92622 1.14894 4.2655 0.916859C3.58661 0.679312 2.9492 0.887087 2.53582 1.31952C2.13415 1.73971 1.94438 2.36742 2.09031 2.98746L2.09269 2.99713C2.26478 3.66808 2.52396 4.30316 2.77613 4.90465C2.79814 4.95717 2.8201 5.00941 2.84194 5.06139C3.02139 5.48842 3.19378 5.89866 3.33871 6.31256C2.96404 5.98142 2.51925 5.70796 1.90276 5.6484C1.48865 5.60663 1.10391 5.67536 0.777805 5.88444C0.454239 6.0919 0.240671 6.40405 0.104187 6.75406L0.100868 6.76281C-0.10184 7.31286 0.0663312 7.97157 0.304895 8.42897C0.573704 8.96474 0.996104 9.47904 1.44372 9.96813C1.67046 10.2159 1.91136 10.4652 2.15033 10.7124L2.15682 10.7191C2.39524 10.9658 2.63217 11.2109 2.86134 11.4599C3.80937 12.49 4.50002 13.4632 4.50002 14.5C4.50002 14.7761 4.72388 15 5.00002 15H12C12.2762 15 12.5 14.7761 12.5 14.5C12.5 12.8212 12.8021 11.6462 13.2274 10.4762C13.3653 10.0968 13.5216 9.70579 13.6868 9.29247C14.0238 8.44922 14.398 7.51298 14.7295 6.39175C15.0956 5.15324 15.0559 4.25904 14.7735 3.63017C14.487 2.99208 13.9798 2.6953 13.5763 2.6152C13.1276 2.52614 12.7367 2.60475 12.4268 2.83081C12.4253 2.80773 12.4236 2.78468 12.4219 2.76167C12.3587 1.8105 11.6907 1.12285 10.923 0.947821C10.5346 0.859287 10.1111 0.900393 9.73509 1.11724C9.61852 1.18446 9.51055 1.26623 9.41219 1.3617Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},qt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.75432 2.0502C8.50579 2.0502 8.30432 2.25167 8.30432 2.5002C8.30432 2.74873 8.50579 2.9502 8.75432 2.9502H9.94997V7.05004H5.04997V2.9502H6.25432C6.50285 2.9502 6.70432 2.74873 6.70432 2.5002C6.70432 2.25167 6.50285 2.0502 6.25432 2.0502H2.75432C2.50579 2.0502 2.30432 2.25167 2.30432 2.5002C2.30432 2.74873 2.50579 2.9502 2.75432 2.9502H3.94997V12.0502H2.75432C2.50579 12.0502 2.30432 12.2517 2.30432 12.5002C2.30432 12.7487 2.50579 12.9502 2.75432 12.9502H6.25432C6.50285 12.9502 6.70432 12.7487 6.70432 12.5002C6.70432 12.2517 6.50285 12.0502 6.25432 12.0502H5.04997V7.95004H9.94997V12.0502H8.75432C8.50579 12.0502 8.30432 12.2517 8.30432 12.5002C8.30432 12.7487 8.50579 12.9502 8.75432 12.9502H12.2543C12.5028 12.9502 12.7043 12.7487 12.7043 12.5002C12.7043 12.2517 12.5028 12.0502 12.2543 12.0502H11.05V2.9502H12.2543C12.5028 2.9502 12.7043 2.74873 12.7043 2.5002C12.7043 2.25167 12.5028 2.0502 12.2543 2.0502H8.75432Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Yt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.1813 1.68179C7.35704 1.50605 7.64196 1.50605 7.8177 1.68179L10.3177 4.18179C10.4934 4.35753 10.4934 4.64245 10.3177 4.81819C10.142 4.99392 9.85704 4.99392 9.6813 4.81819L7.9495 3.08638L7.9495 11.9136L9.6813 10.1818C9.85704 10.0061 10.142 10.0061 10.3177 10.1818C10.4934 10.3575 10.4934 10.6424 10.3177 10.8182L7.8177 13.3182C7.73331 13.4026 7.61885 13.45 7.4995 13.45C7.38015 13.45 7.26569 13.4026 7.1813 13.3182L4.6813 10.8182C4.50557 10.6424 4.50557 10.3575 4.6813 10.1818C4.85704 10.0061 5.14196 10.0061 5.3177 10.1818L7.0495 11.9136L7.0495 3.08638L5.3177 4.81819C5.14196 4.99392 4.85704 4.99392 4.6813 4.81819C4.50557 4.64245 4.50557 4.35753 4.6813 4.18179L7.1813 1.68179Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Kt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Qt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 0.0032959C6.80473 0.0032959 6.24953 0.281106 6.25 0.749995C6.25 0.997258 6.42446 1.12014 6.57687 1.22749C6.69507 1.31074 6.8 1.38465 6.8 1.5C6.8 1.7071 6.06224 1.74264 5.19789 1.78427C3.97553 1.84314 2.5 1.91421 2.5 2.5C2.5 2.77614 2.72386 3 3 3H12C12.2761 3 12.5 2.77614 12.5 2.5C12.5 1.91421 11.0245 1.84314 9.80211 1.78427C8.93776 1.74264 8.2 1.7071 8.2 1.5C8.2 1.38465 8.30493 1.31074 8.42313 1.22749C8.57554 1.12014 8.75 0.997258 8.75 0.749995C8.75047 0.281106 8.19527 0.0032959 7.5 0.0032959ZM2.89451 6.12266C2.25806 6.52471 1.90417 7.31118 2.02473 8.0556L2.83588 12.4772C3.00993 13.3562 3.7629 14 4.66061 14H10.3373C11.2354 14 11.9884 13.3562 12.1625 12.4772L12.9736 8.05607C13.089 7.32358 12.8284 6.53276 12.1331 6.09373C11.7283 5.83013 11.6412 5.33231 12.1331 5.12796C12.8284 4.86435 12.6948 4 12 4H10.3001H6.80005H2.99996C2.30469 4 2.19878 4.89328 2.89451 5.15689C3.38642 5.33231 3.29939 5.83013 2.89451 6.12266ZM8.20006 6.25C8.20006 5.81769 8.08572 5.37615 7.90635 5L4.11093 5C4.20626 5.21312 4.2419 5.43889 4.22904 5.65521C4.19522 6.22412 3.84587 6.66899 3.48016 6.93322L3.45492 6.95146L3.42858 6.9681C3.13407 7.15414 2.95801 7.53989 3.01058 7.88749L3.81797 12.2886C3.90513 12.7154 4.26148 13 4.66061 13H10.3373C10.737 13 11.0932 12.7153 11.1804 12.2886L11.9874 7.8898C12.048 7.48247 11.8954 7.12631 11.5992 6.93927L11.5875 6.93184L11.5875 6.93176C11.1947 6.67602 10.8331 6.22785 10.7986 5.64798C10.7846 5.412 10.8264 5.19397 10.9112 5H9.05517C9.01987 5.14611 9.00006 5.31201 9.00006 5.5C9.00006 5.9745 9.21679 6.37127 9.44367 6.78662C9.69284 7.24278 9.95425 7.72136 9.95425 8.34993C9.95425 9.2698 9.49868 9.84205 8.62189 9.84205C8.13206 9.84205 7.57818 9.46097 7.57818 8.75781C7.57818 8.35279 7.71558 8.01646 7.86121 7.65998C8.0254 7.25806 8.20006 6.83051 8.20006 6.25Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Xt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Jt=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},er=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},tr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.5 1C6.22386 1 6 1.22386 6 1.5C6 1.77614 6.22386 2 6.5 2C7.12671 2 7.45718 2.20028 7.65563 2.47812C7.8781 2.78957 8 3.28837 8 4V11C8 11.7116 7.8781 12.2104 7.65563 12.5219C7.45718 12.7997 7.12671 13 6.5 13C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14C7.37329 14 8.04282 13.7003 8.46937 13.1031C8.47976 13.0886 8.48997 13.0739 8.5 13.0591C8.51003 13.0739 8.52024 13.0886 8.53063 13.1031C8.95718 13.7003 9.62671 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.87329 13 9.54282 12.7997 9.34437 12.5219C9.1219 12.2104 9 11.7116 9 11V4C9 3.28837 9.1219 2.78957 9.34437 2.47812C9.54282 2.20028 9.87329 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.62671 1 8.95718 1.29972 8.53063 1.89688C8.52024 1.91143 8.51003 1.92611 8.5 1.9409C8.48997 1.92611 8.47976 1.91143 8.46937 1.89688C8.04282 1.29972 7.37329 1 6.5 1ZM14 5H11V4H14C14.5523 4 15 4.44772 15 5V10C15 10.5523 14.5523 11 14 11H11V10H14V5ZM6 4V5H1L1 10H6V11H1C0.447715 11 0 10.5523 0 10V5C0 4.44772 0.447715 4 1 4H6Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},rr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L12.058 2.05806C12.3021 1.81398 12.6978 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13361 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.49998 8.49998V4.09998C5.06992 4.09998 3.09998 6.06992 3.09998 8.49998C3.09998 10.93 5.06992 12.9 7.49998 12.9C8.715 12.9 9.815 12.4075 10.6112 11.6112L7.49998 8.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},nr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},or=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9 2H6V13H9V2ZM10 2V13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2H10ZM2.5 2H5V13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ir=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00915 6.68569 8.00915 8.60972C8.00915 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.53C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 9.79823V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.7719 10.4952 13.1543 9.79823Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},lr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.69899 5.20703C2.05823 5.20703 0.809204 6.68569 0.809204 8.60972C0.809204 10.6337 2.15823 12.0124 3.69899 12.0124C4.52126 12.0124 5.37402 11.6693 5.9539 11.0223V11.53C5.9539 11.7785 6.15537 11.98 6.4039 11.98C6.65243 11.98 6.8539 11.7785 6.8539 11.53V5.72001C6.8539 5.47149 6.65243 5.27001 6.4039 5.27001C6.15537 5.27001 5.9539 5.47149 5.9539 5.72001V6.22269C5.40506 5.60075 4.59218 5.20703 3.69899 5.20703ZM5.9539 9.799V7.30117C5.56339 6.58064 4.74118 6.05757 3.8868 6.05757C2.9089 6.05757 1.83508 6.96581 1.83508 8.60955C1.83508 10.1533 2.80889 11.1615 3.8868 11.1615C4.76984 11.1615 5.57141 10.4957 5.9539 9.799ZM10.799 5.20703C9.15823 5.20703 7.9092 6.68569 7.9092 8.60972C7.9092 10.6337 9.25823 12.0124 10.799 12.0124C11.6215 12.0124 12.4744 11.6692 13.0543 11.0218V11.53C13.0543 11.7785 13.2558 11.98 13.5043 11.98C13.7529 11.98 13.9543 11.7785 13.9543 11.53V5.72C13.9543 5.47147 13.7529 5.27 13.5043 5.27C13.2558 5.27 13.0543 5.47147 13.0543 5.72V6.22318C12.5055 5.60095 11.6924 5.20703 10.799 5.20703ZM13.0543 9.79822V7.30196C12.664 6.58102 11.8415 6.05757 10.9868 6.05757C10.0089 6.05757 8.93508 6.96581 8.93508 8.60955C8.93508 10.1533 9.90889 11.1615 10.9868 11.1615C11.8702 11.1615 12.672 10.4952 13.0543 9.79822Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ar=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.2895 2.75C11.4964 2.74979 11.6821 2.87701 11.7565 3.07003L14.9664 11.39C15.0657 11.6477 14.9375 11.9371 14.6798 12.0365C14.4222 12.1359 14.1328 12.0076 14.0334 11.75L12.9822 9.02537H9.61106L8.56672 11.749C8.46786 12.0068 8.1787 12.1357 7.92086 12.0369C7.66302 11.938 7.53414 11.6488 7.63301 11.391L10.8232 3.07099C10.8972 2.87782 11.0826 2.75021 11.2895 2.75ZM11.2915 4.64284L12.6543 8.17537H9.93698L11.2915 4.64284ZM2.89895 5.20703C1.25818 5.20703 0.00915527 6.68569 0.00915527 8.60972C0.00915527 10.6337 1.35818 12.0124 2.89895 12.0124C3.72141 12.0124 4.57438 11.6692 5.15427 11.0219V11.53C5.15427 11.7785 5.35574 11.98 5.60427 11.98C5.8528 11.98 6.05427 11.7785 6.05427 11.53V5.72C6.05427 5.47147 5.8528 5.27 5.60427 5.27C5.35574 5.27 5.15427 5.47147 5.15427 5.72V6.22317C4.60543 5.60095 3.79236 5.20703 2.89895 5.20703ZM5.15427 9.79823V7.30195C4.76393 6.58101 3.94144 6.05757 3.08675 6.05757C2.10885 6.05757 1.03503 6.96581 1.03503 8.60955C1.03503 10.1533 2.00885 11.1615 3.08675 11.1615C3.97011 11.1615 4.77195 10.4952 5.15427 9.79823Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},cr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.6255 2.75C3.83478 2.75 4.02192 2.88034 4.09448 3.07664L7.16985 11.3962C7.2656 11.6552 7.13324 11.9428 6.87423 12.0386C6.61522 12.1343 6.32763 12.002 6.23188 11.7429L5.22387 9.01603H2.02712L1.01911 11.7429C0.923362 12.002 0.635774 12.1343 0.376762 12.0386C0.117749 11.9428 -0.0146052 11.6552 0.0811401 11.3962L3.15651 3.07664C3.22908 2.88034 3.41621 2.75 3.6255 2.75ZM3.6255 4.69207L4.90966 8.16603H2.34133L3.6255 4.69207ZM11.3719 2.75C11.5811 2.75 11.7683 2.88034 11.8408 3.07664L14.9162 11.3962C15.012 11.6552 14.8796 11.9428 14.6206 12.0386C14.3616 12.1343 14.074 12.002 13.9782 11.7429L12.9702 9.01603H9.77348L8.76547 11.7429C8.66972 12.002 8.38213 12.1343 8.12312 12.0386C7.86411 11.9428 7.73175 11.6552 7.8275 11.3962L10.9029 3.07664C10.9754 2.88034 11.1626 2.75 11.3719 2.75ZM11.3719 4.69207L12.656 8.16603H10.0877L11.3719 4.69207Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},sr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.55293 0.999969C4.75295 0.999969 4.93372 1.11917 5.0125 1.30301L8.01106 8.29982C8.11984 8.55363 8.00226 8.84757 7.74844 8.95635C7.49463 9.06512 7.20069 8.94754 7.09191 8.69373L6.11613 6.41685H2.98973L2.01395 8.69373C1.90517 8.94754 1.61123 9.06512 1.35742 8.95635C1.1036 8.84757 0.986023 8.55363 1.0948 8.29982L4.09336 1.30301C4.17214 1.11917 4.35291 0.999969 4.55293 0.999969ZM4.55293 2.76929L5.75186 5.56685H3.354L4.55293 2.76929ZM11.0562 9.00214C11.2617 9.00214 11.4463 8.87633 11.5215 8.68502L14.2733 1.68299C14.3743 1.42598 14.2478 1.13575 13.9908 1.03475C13.7338 0.933747 13.4436 1.06021 13.3426 1.31722L11.0562 7.13514L8.76973 1.31722C8.66873 1.06021 8.3785 0.933747 8.1215 1.03475C7.86449 1.13575 7.73802 1.42598 7.83902 1.68299L10.5908 8.68502C10.666 8.87633 10.8506 9.00214 11.0562 9.00214ZM14.9537 12.4999C14.9537 12.606 14.9115 12.7077 14.8365 12.7828L12.8365 14.7828C12.6803 14.939 12.4271 14.939 12.2708 14.7828C12.1146 14.6265 12.1146 14.3733 12.2708 14.2171L13.588 12.8999H1.51937L2.83653 14.2171C2.99274 14.3733 2.99274 14.6265 2.83653 14.7828C2.68032 14.939 2.42705 14.939 2.27084 14.7828L0.270843 12.7828C0.195828 12.7077 0.153687 12.606 0.153687 12.4999C0.153687 12.3938 0.195828 12.2921 0.270843 12.2171L2.27084 10.2171C2.42705 10.0609 2.68032 10.0609 2.83653 10.2171C2.99274 10.3733 2.99274 10.6265 2.83653 10.7828L1.51937 12.0999L13.588 12.0999L12.2708 10.7828C12.1146 10.6265 12.1146 10.3733 12.2708 10.2171C12.4271 10.0609 12.6803 10.0609 12.8365 10.2171L14.8365 12.2171C14.9115 12.2921 14.9537 12.3938 14.9537 12.4999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Cr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.69666 0.040354C8.90859 0.131038 9.03105 0.354856 8.99315 0.582235L8.09019 6.00001H12.4999C12.6893 6.00001 12.8625 6.10701 12.9472 6.2764C13.0318 6.44579 13.0136 6.6485 12.8999 6.8L6.89997 14.8C6.76166 14.9844 6.5152 15.0503 6.30327 14.9596C6.09134 14.869 5.96888 14.6451 6.00678 14.4178L6.90974 8.99999H2.49999C2.31061 8.99999 2.13747 8.89299 2.05278 8.7236C1.96808 8.55421 1.98636 8.3515 2.09999 8.2L8.09996 0.200037C8.23827 0.0156255 8.48473 -0.0503301 8.69666 0.040354ZM3.49999 8H7.49996C7.64694 8 7.78647 8.06466 7.88147 8.17681C7.97647 8.28895 8.01732 8.43722 7.99316 8.58219L7.33026 12.5596L11.4999 7H7.49996C7.35299 7 7.21346 6.93534 7.11846 6.82319C7.02346 6.71105 6.98261 6.56278 7.00677 6.41781L7.66967 2.44042L3.49999 8Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},dr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.78233 2.21713C3.70732 2.14212 3.60557 2.09998 3.49949 2.09998C3.3934 2.09998 3.29166 2.14212 3.21664 2.21713L1.21664 4.21713C1.06044 4.37334 1.06044 4.62661 1.21664 4.78282C1.37285 4.93903 1.62612 4.93903 1.78233 4.78282L3.09949 3.46566L3.09949 11.5343L1.78233 10.2171C1.62612 10.0609 1.37285 10.0609 1.21664 10.2171C1.06043 10.3733 1.06043 10.6266 1.21664 10.7828L3.21664 12.7828C3.29166 12.8578 3.3934 12.9 3.49949 12.9C3.60557 12.9 3.70731 12.8578 3.78233 12.7828L5.78233 10.7828C5.93854 10.6266 5.93854 10.3733 5.78233 10.2171C5.62612 10.0609 5.37285 10.0609 5.21664 10.2171L3.89949 11.5343L3.89949 3.46566L5.21664 4.78282C5.37285 4.93903 5.62612 4.93903 5.78233 4.78282C5.93854 4.62661 5.93854 4.37334 5.78233 4.21713L3.78233 2.21713ZM8.49998 3.99997C8.22383 3.99997 7.99998 4.22382 7.99998 4.49997C7.99998 4.77611 8.22383 4.99997 8.49998 4.99997H14.5C14.7761 4.99997 15 4.77611 15 4.49997C15 4.22382 14.7761 3.99997 14.5 3.99997H8.49998ZM7.99998 7.49997C7.99998 7.22382 8.22383 6.99997 8.49998 6.99997H14.5C14.7761 6.99997 15 7.22382 15 7.49997C15 7.77611 14.7761 7.99997 14.5 7.99997H8.49998C8.22383 7.99997 7.99998 7.77611 7.99998 7.49997ZM8.49998 9.99997C8.22383 9.99997 7.99998 10.2238 7.99998 10.5C7.99998 10.7761 8.22383 11 8.49998 11H14.5C14.7761 11 15 10.7761 15 10.5C15 10.2238 14.7761 9.99997 14.5 9.99997H8.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ur=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.62471 4.00001L4.56402 4.00001C4.04134 3.99993 3.70687 3.99988 3.4182 4.055C2.2379 4.28039 1.29846 5.17053 1.05815 6.33035C0.999538 6.61321 0.999604 6.93998 0.999703 7.43689L0.999711 7.50001L0.999703 7.56313C0.999604 8.06004 0.999538 8.38681 1.05815 8.66967C1.29846 9.8295 2.2379 10.7196 3.4182 10.945C3.70688 11.0001 4.04135 11.0001 4.56403 11L4.62471 11H5.49971C5.77585 11 5.99971 10.7762 5.99971 10.5C5.99971 10.2239 5.77585 10 5.49971 10H4.62471C4.02084 10 3.78907 9.99777 3.60577 9.96277C2.80262 9.8094 2.19157 9.21108 2.03735 8.46678C2.00233 8.29778 1.99971 8.08251 1.99971 7.50001C1.99971 6.91752 2.00233 6.70225 2.03735 6.53324C2.19157 5.78895 2.80262 5.19062 3.60577 5.03725C3.78907 5.00225 4.02084 5.00001 4.62471 5.00001H5.49971C5.77585 5.00001 5.99971 4.77615 5.99971 4.50001C5.99971 4.22387 5.77585 4.00001 5.49971 4.00001H4.62471ZM10.3747 5.00001C10.9786 5.00001 11.2104 5.00225 11.3937 5.03725C12.1968 5.19062 12.8079 5.78895 12.9621 6.53324C12.9971 6.70225 12.9997 6.91752 12.9997 7.50001C12.9997 8.08251 12.9971 8.29778 12.9621 8.46678C12.8079 9.21108 12.1968 9.8094 11.3937 9.96277C11.2104 9.99777 10.9786 10 10.3747 10H9.49971C9.22357 10 8.99971 10.2239 8.99971 10.5C8.99971 10.7762 9.22357 11 9.49971 11H10.3747L10.4354 11C10.9581 11.0001 11.2925 11.0001 11.5812 10.945C12.7615 10.7196 13.701 9.8295 13.9413 8.66967C13.9999 8.38681 13.9998 8.06005 13.9997 7.56314L13.9997 7.50001L13.9997 7.43688C13.9998 6.93998 13.9999 6.61321 13.9413 6.33035C13.701 5.17053 12.7615 4.28039 11.5812 4.055C11.2925 3.99988 10.9581 3.99993 10.4354 4.00001L10.3747 4.00001H9.49971C9.22357 4.00001 8.99971 4.22387 8.99971 4.50001C8.99971 4.77615 9.22357 5.00001 9.49971 5.00001H10.3747ZM5.00038 7C4.72424 7 4.50038 7.22386 4.50038 7.5C4.50038 7.77614 4.72424 8 5.00038 8H10.0004C10.2765 8 10.5004 7.77614 10.5004 7.5C10.5004 7.22386 10.2765 7 10.0004 7H5.00038Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},fr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},hr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355ZM2.03735 8.46678C2.17398 9.12619 2.66918 9.67103 3.33886 9.89338L2.57833 10.6539C1.80843 10.2534 1.23784 9.53693 1.05815 8.66967C0.999538 8.38681 0.999604 8.06004 0.999703 7.56313L0.999711 7.50001L0.999703 7.43689C0.999604 6.93998 0.999538 6.61321 1.05815 6.33035C1.29846 5.17053 2.2379 4.28039 3.4182 4.055C3.70687 3.99988 4.04134 3.99993 4.56402 4.00001L4.62471 4.00001H5.49971C5.77585 4.00001 5.99971 4.22387 5.99971 4.50001C5.99971 4.77615 5.77585 5.00001 5.49971 5.00001H4.62471C4.02084 5.00001 3.78907 5.00225 3.60577 5.03725C2.80262 5.19062 2.19157 5.78895 2.03735 6.53324C2.00233 6.70225 1.99971 6.91752 1.99971 7.50001C1.99971 8.08251 2.00233 8.29778 2.03735 8.46678ZM12.9621 6.53324C12.8255 5.87397 12.3304 5.32922 11.661 5.10679L12.4215 4.34631C13.1912 4.74686 13.7616 5.46323 13.9413 6.33035C13.9999 6.61321 13.9998 6.93998 13.9997 7.43688L13.9997 7.50001L13.9997 7.56314C13.9998 8.06005 13.9999 8.38681 13.9413 8.66967C13.701 9.8295 12.7615 10.7196 11.5812 10.945C11.2925 11.0001 10.9581 11.0001 10.4354 11L10.3747 11H9.49971C9.22357 11 8.99971 10.7762 8.99971 10.5C8.99971 10.2239 9.22357 10 9.49971 10H10.3747C10.9786 10 11.2104 9.99777 11.3937 9.96277C12.1968 9.8094 12.8079 9.21108 12.9621 8.46678C12.9971 8.29778 12.9997 8.08251 12.9997 7.50001C12.9997 6.91752 12.9971 6.70225 12.9621 6.53324Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},pr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.50021 0C4.77635 0 5.0002 0.223853 5.0002 0.49999V2.49995C5.0002 2.77609 4.77635 2.99994 4.50021 2.99994C4.22408 2.99994 4.00022 2.77609 4.00022 2.49995V0.49999C4.00022 0.223853 4.22408 0 4.50021 0ZM0.646451 0.64647C0.84171 0.451212 1.15829 0.451212 1.35354 0.64647L2.85351 2.14644C3.04877 2.3417 3.04877 2.65827 2.85351 2.85353C2.65826 3.04879 2.34168 3.04879 2.14642 2.85353L0.646452 1.35356C0.451193 1.1583 0.451193 0.841728 0.646451 0.64647ZM0.00030517 4.49991C0.00030517 4.22377 0.224158 3.99992 0.500295 3.99992H2.50025C2.77639 3.99992 3.00024 4.22377 3.00024 4.49991C3.00024 4.77605 2.77639 4.9999 2.50025 4.9999H0.500295C0.224158 4.9999 0.00030517 4.77605 0.00030517 4.49991ZM12.0001 10.4998C12.0001 10.2236 12.2239 9.9998 12.5001 9.9998H14.5C14.7761 9.9998 15 10.2236 15 10.4998C15 10.7759 14.7761 10.9998 14.5 10.9998H12.5001C12.2239 10.9998 12.0001 10.7759 12.0001 10.4998ZM10.5001 11.9998C10.7762 11.9998 11.0001 12.2236 11.0001 12.4997V14.4997C11.0001 14.7758 10.7762 14.9997 10.5001 14.9997C10.224 14.9997 10.0001 14.7758 10.0001 14.4997V12.4997C10.0001 12.2236 10.224 11.9998 10.5001 11.9998ZM12.1462 12.1462C12.3415 11.951 12.658 11.951 12.8533 12.1462L14.3533 13.6462C14.5485 13.8415 14.5485 14.158 14.3533 14.3533C14.158 14.5485 13.8414 14.5485 13.6462 14.3533L12.1462 12.8533C11.951 12.6581 11.951 12.3415 12.1462 12.1462ZM7.76478 3.69938C8.19177 3.27238 8.35724 3.11008 8.5116 3.00522C9.18794 2.54577 10.0431 2.53677 10.6784 2.95401C10.8227 3.04875 10.9767 3.19911 11.3886 3.61099C11.8005 4.02287 11.9509 4.17694 12.0456 4.3212C12.4628 4.95653 12.4539 5.81168 11.9944 6.48802C11.8895 6.64238 11.7272 6.80785 11.3002 7.23484L10.6815 7.85354C10.4863 8.0488 10.4863 8.36538 10.6815 8.56064C10.8768 8.75589 11.1934 8.75589 11.3886 8.56064L12.0073 7.94193L12.0502 7.89903C12.4199 7.5295 12.6564 7.29303 12.8216 7.04993C13.4968 6.05598 13.5316 4.7623 12.8815 3.77228C12.7229 3.53083 12.4918 3.29982 12.1404 2.94853L12.0957 2.9039L12.0511 2.85925C11.6998 2.50782 11.4688 2.27672 11.2273 2.11816C10.2373 1.46798 8.94364 1.50284 7.94968 2.17805C7.70659 2.34319 7.47012 2.57973 7.1006 2.94936L7.1006 2.94937L7.05769 2.99228L6.43898 3.61099C6.24372 3.80625 6.24372 4.12282 6.43898 4.31808C6.63424 4.51334 6.95081 4.51334 7.14607 4.31808L7.76478 3.69938ZM2.99191 7.05807L2.94899 7.10097C2.57935 7.4705 2.34282 7.70697 2.17767 7.95006C1.50246 8.94401 1.4676 10.2377 2.11778 11.2277C2.27634 11.4692 2.50744 11.7002 2.85886 12.0515L2.85888 12.0515L2.90352 12.0961L2.94815 12.1407L2.94815 12.1407L2.94817 12.1408C3.29945 12.4922 3.53045 12.7233 3.7719 12.8818C4.76193 13.532 6.0556 13.4972 7.04956 12.8219C7.29265 12.6568 7.52912 12.4203 7.89865 12.0506L7.94155 12.0077L8.56026 11.389C8.75552 11.1937 8.75552 10.8772 8.56026 10.6819C8.365 10.4867 8.04842 10.4867 7.85317 10.6819L7.23446 11.3006C6.80747 11.7276 6.642 11.8899 6.48764 11.9948C5.8113 12.4542 4.95615 12.4632 4.32082 12.046C4.17656 11.9512 4.02249 11.8009 3.61061 11.389C3.19873 10.9771 3.04837 10.8231 2.95363 10.6788C2.53639 10.0435 2.54539 9.18832 3.00484 8.51198C3.10971 8.35761 3.27201 8.19215 3.699 7.76516L4.3177 7.14645C4.51296 6.95119 4.51296 6.63462 4.3177 6.43936C4.12245 6.2441 3.80587 6.2441 3.61061 6.43936L2.99191 7.05807Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},vr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.56427 3.99988C4.58422 3.99989 4.60445 3.99989 4.62496 3.99989H5.49996C5.7761 3.99989 5.99996 4.22375 5.99996 4.49989C5.99996 4.77603 5.7761 4.99989 5.49996 4.99989H4.62496C4.02108 4.99989 3.78932 5.00213 3.60601 5.03713C2.80287 5.1905 2.19181 5.78883 2.03759 6.53312C2.00257 6.70212 1.99996 6.91739 1.99996 7.49989C1.99996 8.08239 2.00257 8.29766 2.03759 8.46666C2.19181 9.21095 2.80287 9.80928 3.60601 9.96265C3.78932 9.99765 4.02108 9.99989 4.62496 9.99989H5.49996C5.7761 9.99989 5.99996 10.2237 5.99996 10.4999C5.99996 10.776 5.7761 10.9999 5.49996 10.9999H4.62496C4.60445 10.9999 4.58422 10.9999 4.56427 10.9999C4.04159 11 3.70712 11 3.41845 10.9449C2.23814 10.7195 1.29871 9.82937 1.05839 8.66955C0.999782 8.38669 0.999848 8.05992 0.999947 7.56301C0.999951 7.54227 0.999955 7.52123 0.999955 7.49989C0.999955 7.47855 0.999951 7.45751 0.999947 7.43677C0.999848 6.93986 0.999782 6.61309 1.05839 6.33023C1.29871 5.17041 2.23814 4.28027 3.41845 4.05488C3.70712 3.99976 4.04159 3.99981 4.56427 3.99988ZM11.3939 5.03713C11.2106 5.00213 10.9788 4.99989 10.375 4.99989H9.49996C9.22381 4.99989 8.99996 4.77603 8.99996 4.49989C8.99996 4.22375 9.22381 3.99989 9.49996 3.99989H10.375C10.3955 3.99989 10.4157 3.99989 10.4356 3.99988C10.9583 3.99981 11.2928 3.99976 11.5815 4.05488C12.7618 4.28027 13.7012 5.17041 13.9415 6.33023C14.0001 6.61309 14.0001 6.93985 14 7.43676C14 7.4575 14 7.47854 14 7.49989C14 7.52124 14 7.54228 14 7.56302C14.0001 8.05992 14.0001 8.38669 13.9415 8.66955C13.7012 9.82937 12.7618 10.7195 11.5815 10.9449C11.2928 11 10.9583 11 10.4356 10.9999C10.4157 10.9999 10.3955 10.9999 10.375 10.9999H9.49996C9.22381 10.9999 8.99996 10.776 8.99996 10.4999C8.99996 10.2237 9.22381 9.99989 9.49996 9.99989H10.375C10.9788 9.99989 11.2106 9.99765 11.3939 9.96265C12.197 9.80928 12.8081 9.21095 12.9623 8.46666C12.9973 8.29766 13 8.08239 13 7.49989C13 6.91739 12.9973 6.70212 12.9623 6.53312C12.8081 5.78883 12.197 5.1905 11.3939 5.03713Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},gr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.6788 2.95419C10.0435 2.53694 9.18829 2.54594 8.51194 3.00541C8.35757 3.11027 8.1921 3.27257 7.7651 3.69957L7.14638 4.31829C6.95112 4.51355 6.63454 4.51355 6.43928 4.31829C6.24401 4.12303 6.24401 3.80645 6.43928 3.61119L7.058 2.99247C7.0725 2.97797 7.08679 2.96366 7.1009 2.94955C7.47044 2.57991 7.70691 2.34336 7.95001 2.17822C8.94398 1.50299 10.2377 1.46813 11.2277 2.11832C11.4692 2.27689 11.7002 2.508 12.0515 2.85942C12.0662 2.8741 12.081 2.88898 12.0961 2.90408C12.1112 2.91917 12.1261 2.93405 12.1408 2.94871C12.4922 3.30001 12.7233 3.53102 12.8819 3.77248C13.5321 4.76252 13.4972 6.05623 12.822 7.0502C12.6568 7.2933 12.4203 7.52976 12.0507 7.89929C12.0366 7.9134 12.0222 7.92771 12.0077 7.94221L11.389 8.56093C11.1938 8.7562 10.8772 8.7562 10.6819 8.56093C10.4867 8.36567 10.4867 8.04909 10.6819 7.85383L11.3006 7.23511C11.7276 6.80811 11.8899 6.64264 11.9948 6.48827C12.4543 5.81192 12.4633 4.95675 12.046 4.32141C11.9513 4.17714 11.8009 4.02307 11.389 3.61119C10.9771 3.1993 10.8231 3.04893 10.6788 2.95419ZM4.31796 6.43961C4.51322 6.63487 4.51322 6.95146 4.31796 7.14672L3.69924 7.76544C3.27224 8.19244 3.10993 8.35791 3.00507 8.51227C2.54561 9.18863 2.53661 10.0438 2.95385 10.6791C3.0486 10.8234 3.19896 10.9775 3.61085 11.3894C4.02274 11.8012 4.17681 11.9516 4.32107 12.0464C4.95642 12.4636 5.81158 12.4546 6.48794 11.9951C6.6423 11.8903 6.80777 11.728 7.23477 11.301L7.85349 10.6823C8.04875 10.487 8.36533 10.487 8.5606 10.6823C8.75586 10.8775 8.75586 11.1941 8.5606 11.3894L7.94188 12.0081C7.92738 12.0226 7.91307 12.0369 7.89897 12.051C7.52943 12.4206 7.29296 12.6572 7.04986 12.8223C6.05589 13.4976 4.76219 13.5324 3.77214 12.8822C3.53068 12.7237 3.29967 12.4925 2.94837 12.1411C2.93371 12.1264 2.91883 12.1116 2.90374 12.0965C2.88865 12.0814 2.87377 12.0665 2.8591 12.0518C2.50766 11.7005 2.27656 11.4695 2.11799 11.2281C1.4678 10.238 1.50265 8.94432 2.17788 7.95035C2.34303 7.70724 2.57957 7.47077 2.94922 7.10124C2.96333 7.08713 2.97763 7.07283 2.99213 7.05833L3.61085 6.43961C3.80611 6.24435 4.12269 6.24435 4.31796 6.43961Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},wr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},mr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},br=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.4986 0C6.3257 0 5.36107 0.38943 4.73753 1.19361C4.23745 1.83856 4 2.68242 4 3.63325H5C5 2.84313 5.19691 2.23312 5.5278 1.80636C5.91615 1.30552 6.55152 1 7.4986 1C8.35683 1 8.96336 1.26502 9.35846 1.68623C9.75793 2.11211 10 2.76044 10 3.63601V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44771 12.5523 6 12 6H11V3.63601C11 2.58135 10.7065 1.66167 10.0878 1.0021C9.46477 0.337871 8.57061 0 7.4986 0ZM3 7H12V13H3V7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},xr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},yr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.35355 1.85355C3.54882 1.65829 3.54882 1.34171 3.35355 1.14645C3.15829 0.951184 2.84171 0.951184 2.64645 1.14645L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L2.64645 5.85355C2.84171 6.04882 3.15829 6.04882 3.35355 5.85355C3.54882 5.65829 3.54882 5.34171 3.35355 5.14645L2.20711 4H9.5C11.433 4 13 5.567 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5C14 5.01472 11.9853 3 9.5 3H2.20711L3.35355 1.85355ZM2 7.5C2 7.22386 1.77614 7 1.5 7C1.22386 7 1 7.22386 1 7.5C1 9.98528 3.01472 12 5.5 12H12.7929L11.6464 13.1464C11.4512 13.3417 11.4512 13.6583 11.6464 13.8536C11.8417 14.0488 12.1583 14.0488 12.3536 13.8536L14.3536 11.8536C14.5488 11.6583 14.5488 11.3417 14.3536 11.1464L12.3536 9.14645C12.1583 8.95118 11.8417 8.95118 11.6464 9.14645C11.4512 9.34171 11.4512 9.65829 11.6464 9.85355L12.7929 11H5.5C3.567 11 2 9.433 2 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Lr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Mr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Or=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.49988 2.00012C1.77602 2.00012 1.99988 1.77626 1.99988 1.50012C1.99988 1.22398 1.77602 1.00012 1.49988 1.00012C1.22374 1.00012 0.999878 1.22398 0.999878 1.50012C0.999878 1.77626 1.22374 2.00012 1.49988 2.00012ZM4.49988 2.00012C4.77602 2.00012 4.99988 1.77626 4.99988 1.50012C4.99988 1.22398 4.77602 1.00012 4.49988 1.00012C4.22374 1.00012 3.99988 1.22398 3.99988 1.50012C3.99988 1.77626 4.22374 2.00012 4.49988 2.00012ZM7.99988 1.50012C7.99988 1.77626 7.77602 2.00012 7.49988 2.00012C7.22374 2.00012 6.99988 1.77626 6.99988 1.50012C6.99988 1.22398 7.22374 1.00012 7.49988 1.00012C7.77602 1.00012 7.99988 1.22398 7.99988 1.50012ZM10.4999 2.00012C10.776 2.00012 10.9999 1.77626 10.9999 1.50012C10.9999 1.22398 10.776 1.00012 10.4999 1.00012C10.2237 1.00012 9.99988 1.22398 9.99988 1.50012C9.99988 1.77626 10.2237 2.00012 10.4999 2.00012ZM13.9999 1.50012C13.9999 1.77626 13.776 2.00012 13.4999 2.00012C13.2237 2.00012 12.9999 1.77626 12.9999 1.50012C12.9999 1.22398 13.2237 1.00012 13.4999 1.00012C13.776 1.00012 13.9999 1.22398 13.9999 1.50012ZM1.49988 14.0001C1.77602 14.0001 1.99988 13.7763 1.99988 13.5001C1.99988 13.224 1.77602 13.0001 1.49988 13.0001C1.22374 13.0001 0.999878 13.224 0.999878 13.5001C0.999878 13.7763 1.22374 14.0001 1.49988 14.0001ZM1.99988 10.5001C1.99988 10.7763 1.77602 11.0001 1.49988 11.0001C1.22374 11.0001 0.999878 10.7763 0.999878 10.5001C0.999878 10.224 1.22374 10.0001 1.49988 10.0001C1.77602 10.0001 1.99988 10.224 1.99988 10.5001ZM1.49988 8.00012C1.77602 8.00012 1.99988 7.77626 1.99988 7.50012C1.99988 7.22398 1.77602 7.00012 1.49988 7.00012C1.22374 7.00012 0.999878 7.22398 0.999878 7.50012C0.999878 7.77626 1.22374 8.00012 1.49988 8.00012ZM1.99988 4.50012C1.99988 4.77626 1.77602 5.00012 1.49988 5.00012C1.22374 5.00012 0.999878 4.77626 0.999878 4.50012C0.999878 4.22398 1.22374 4.00012 1.49988 4.00012C1.77602 4.00012 1.99988 4.22398 1.99988 4.50012ZM13.4999 11.0001C13.776 11.0001 13.9999 10.7763 13.9999 10.5001C13.9999 10.224 13.776 10.0001 13.4999 10.0001C13.2237 10.0001 12.9999 10.224 12.9999 10.5001C12.9999 10.7763 13.2237 11.0001 13.4999 11.0001ZM13.9999 7.50012C13.9999 7.77626 13.776 8.00012 13.4999 8.00012C13.2237 8.00012 12.9999 7.77626 12.9999 7.50012C12.9999 7.22398 13.2237 7.00012 13.4999 7.00012C13.776 7.00012 13.9999 7.22398 13.9999 7.50012ZM13.4999 5.00012C13.776 5.00012 13.9999 4.77626 13.9999 4.50012C13.9999 4.22398 13.776 4.00012 13.4999 4.00012C13.2237 4.00012 12.9999 4.22398 12.9999 4.50012C12.9999 4.77626 13.2237 5.00012 13.4999 5.00012ZM4.99988 13.5001C4.99988 13.7763 4.77602 14.0001 4.49988 14.0001C4.22374 14.0001 3.99988 13.7763 3.99988 13.5001C3.99988 13.224 4.22374 13.0001 4.49988 13.0001C4.77602 13.0001 4.99988 13.224 4.99988 13.5001ZM7.49988 14.0001C7.77602 14.0001 7.99988 13.7763 7.99988 13.5001C7.99988 13.224 7.77602 13.0001 7.49988 13.0001C7.22374 13.0001 6.99988 13.224 6.99988 13.5001C6.99988 13.7763 7.22374 14.0001 7.49988 14.0001ZM10.9999 13.5001C10.9999 13.7763 10.776 14.0001 10.4999 14.0001C10.2237 14.0001 9.99988 13.7763 9.99988 13.5001C9.99988 13.224 10.2237 13.0001 10.4999 13.0001C10.776 13.0001 10.9999 13.224 10.9999 13.5001ZM13.4999 14.0001C13.776 14.0001 13.9999 13.7763 13.9999 13.5001C13.9999 13.224 13.776 13.0001 13.4999 13.0001C13.2237 13.0001 12.9999 13.224 12.9999 13.5001C12.9999 13.7763 13.2237 14.0001 13.4999 14.0001ZM3.99988 5.00012C3.99988 4.44784 4.44759 4.00012 4.99988 4.00012H9.99988C10.5522 4.00012 10.9999 4.44784 10.9999 5.00012V10.0001C10.9999 10.5524 10.5522 11.0001 9.99988 11.0001H4.99988C4.44759 11.0001 3.99988 10.5524 3.99988 10.0001V5.00012ZM4.99988 5.00012H9.99988V10.0001H4.99988V5.00012Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Er=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 2H14V13H1L1 2ZM0 2C0 1.44772 0.447715 1 1 1H14C14.5523 1 15 1.44772 15 2V13C15 13.5523 14.5523 14 14 14H1C0.447715 14 0 13.5523 0 13V2ZM4.875 7.5C4.875 6.05025 6.05025 4.875 7.5 4.875C8.94975 4.875 10.125 6.05025 10.125 7.5C10.125 8.94975 8.94975 10.125 7.5 10.125C6.05025 10.125 4.875 8.94975 4.875 7.5ZM7.5 3.875C5.49797 3.875 3.875 5.49797 3.875 7.5C3.875 9.50203 5.49797 11.125 7.5 11.125C9.50203 11.125 11.125 9.50203 11.125 7.5C11.125 5.49797 9.50203 3.875 7.5 3.875Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Hr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 1C0.447715 1 0 1.44772 0 2V13C0 13.5523 0.447715 14 1 14H14C14.5523 14 15 13.5523 15 13V2C15 1.44772 14.5523 1 14 1H1ZM7.5 10.625C9.22589 10.625 10.625 9.22589 10.625 7.5C10.625 5.77411 9.22589 4.375 7.5 4.375C5.77411 4.375 4.375 5.77411 4.375 7.5C4.375 9.22589 5.77411 10.625 7.5 10.625Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},jr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Vr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM4.50003 7C4.22389 7 4.00003 7.22386 4.00003 7.5C4.00003 7.77614 4.22389 8 4.50003 8H10.5C10.7762 8 11 7.77614 11 7.5C11 7.22386 10.7762 7 10.5 7H4.50003Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Zr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Rr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},_r=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Sr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.25925 3.16667L4.37036 5.33333V1L7.25925 3.16667ZM1 8.22222L3.88889 6.05555L1 3.88889V8.22222ZM1 14L3.88889 11.8333L1 9.66666V14ZM7.74072 8.22222L10.6296 6.05555L7.74072 3.88889V8.22222ZM14 3.16667L11.1111 5.33333V1L14 3.16667ZM11.1111 11.1111L14 8.94444L11.1111 6.77777V11.1111ZM3.88889 11.1111L1 8.94444L3.88889 6.77777V11.1111ZM4.37036 6.05555L7.25925 8.22222V3.88889L4.37036 6.05555ZM3.88889 5.33333L1 3.16667L3.88889 1V5.33333ZM7.74072 3.16667L10.6296 5.33333V1L7.74072 3.16667ZM14 8.22222L11.1111 6.05555L14 3.88889V8.22222ZM11.1111 11.8333L14 14V9.66666L11.1111 11.8333Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Pr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ir=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.81819 0.93179C7.64245 0.756054 7.35753 0.756054 7.18179 0.93179L5.43179 2.68179C5.25605 2.85753 5.25605 3.14245 5.43179 3.31819C5.60753 3.49392 5.89245 3.49392 6.06819 3.31819L6.99999 2.38638V5.49999C6.99999 5.77613 7.22385 5.99999 7.49999 5.99999C7.77613 5.99999 7.99999 5.77613 7.99999 5.49999V2.38638L8.93179 3.31819C9.10753 3.49392 9.39245 3.49392 9.56819 3.31819C9.74392 3.14245 9.74392 2.85753 9.56819 2.68179L7.81819 0.93179ZM7.99999 9.49999C7.99999 9.22385 7.77613 8.99999 7.49999 8.99999C7.22385 8.99999 6.99999 9.22385 6.99999 9.49999V12.6136L6.06819 11.6818C5.89245 11.5061 5.60753 11.5061 5.43179 11.6818C5.25605 11.8575 5.25605 12.1424 5.43179 12.3182L7.18179 14.0682C7.35753 14.2439 7.64245 14.2439 7.81819 14.0682L9.56819 12.3182C9.74392 12.1424 9.74392 11.8575 9.56819 11.6818C9.39245 11.5061 9.10753 11.5061 8.93179 11.6818L7.99999 12.6136V9.49999ZM8.99999 7.49999C8.99999 7.22385 9.22385 6.99999 9.49999 6.99999H12.6136L11.6818 6.06819C11.5061 5.89245 11.5061 5.60753 11.6818 5.43179C11.8575 5.25605 12.1424 5.25605 12.3182 5.43179L14.0682 7.18179C14.2439 7.35753 14.2439 7.64245 14.0682 7.81819L12.3182 9.56819C12.1424 9.74392 11.8575 9.74392 11.6818 9.56819C11.5061 9.39245 11.5061 9.10753 11.6818 8.93179L12.6136 7.99999H9.49999C9.22385 7.99999 8.99999 7.77613 8.99999 7.49999ZM3.31819 6.06819L2.38638 6.99999H5.49999C5.77613 6.99999 5.99999 7.22385 5.99999 7.49999C5.99999 7.77613 5.77613 7.99999 5.49999 7.99999H2.38638L3.31819 8.93179C3.49392 9.10753 3.49392 9.39245 3.31819 9.56819C3.14245 9.74392 2.85753 9.74392 2.68179 9.56819L0.93179 7.81819C0.756054 7.64245 0.756054 7.35753 0.93179 7.18179L2.68179 5.43179C2.85753 5.25605 3.14245 5.25605 3.31819 5.43179C3.49392 5.60753 3.49392 5.89245 3.31819 6.06819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},kr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z",fill:r}))},Br=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 1.5C4.5 4.25 3 6.5 3 9C3 11.4853 5.01472 13.5 7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 6.5 10.5 4.25 7.5 1.5ZM11 9C11 7.11203 9.97315 5.27195 7.5 2.87357C5.02686 5.27195 4 7.11203 4 9C4 10.933 5.567 12.5 7.5 12.5C9.433 12.5 11 10.933 11 9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ar=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.49985 1.10001C3.27894 1.10001 3.09985 1.27909 3.09985 1.50001C3.09985 1.72092 3.27894 1.90001 3.49985 1.90001H11.4999C11.7208 1.90001 11.8999 1.72092 11.8999 1.50001C11.8999 1.27909 11.7208 1.10001 11.4999 1.10001H3.49985ZM4.99995 4.25001C4.99995 3.97387 4.77609 3.75001 4.49995 3.75001C4.22381 3.75001 3.99995 3.97387 3.99995 4.25001V9.55001C3.99995 11.483 5.56695 13.05 7.49995 13.05C9.43295 13.05 11 11.483 11 9.55001V4.25001C11 3.97387 10.7761 3.75001 10.5 3.75001C10.2238 3.75001 9.99995 3.97387 9.99995 4.25001V9.55001C9.99995 10.9307 8.88066 12.05 7.49995 12.05C6.11924 12.05 4.99995 10.9307 4.99995 9.55001V4.25001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Tr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.85714 2H12.1429C12.6162 2 13 2.38376 13 2.85714V12.1429C13 12.6162 12.6162 13 12.1429 13H2.85714C2.38376 13 2 12.6162 2 12.1429V2.85714C2 2.38376 2.38376 2 2.85714 2ZM1 2.85714C1 1.83147 1.83147 1 2.85714 1H12.1429C13.1685 1 14 1.83147 14 2.85714V12.1429C14 13.1685 13.1685 14 12.1429 14H2.85714C1.83147 14 1 13.1685 1 12.1429V2.85714ZM7.49988 5.00012C7.77602 5.00012 7.99988 4.77626 7.99988 4.50012C7.99988 4.22398 7.77602 4.00012 7.49988 4.00012C7.22374 4.00012 6.99988 4.22398 6.99988 4.50012C6.99988 4.77626 7.22374 5.00012 7.49988 5.00012ZM4.49988 11.0001C4.77602 11.0001 4.99988 10.7763 4.99988 10.5001C4.99988 10.224 4.77602 10.0001 4.49988 10.0001C4.22374 10.0001 3.99988 10.224 3.99988 10.5001C3.99988 10.7763 4.22374 11.0001 4.49988 11.0001ZM4.99988 7.50012C4.99988 7.77626 4.77602 8.00012 4.49988 8.00012C4.22374 8.00012 3.99988 7.77626 3.99988 7.50012C3.99988 7.22398 4.22374 7.00012 4.49988 7.00012C4.77602 7.00012 4.99988 7.22398 4.99988 7.50012ZM4.49988 5.00012C4.77602 5.00012 4.99988 4.77626 4.99988 4.50012C4.99988 4.22398 4.77602 4.00012 4.49988 4.00012C4.22374 4.00012 3.99988 4.22398 3.99988 4.50012C3.99988 4.77626 4.22374 5.00012 4.49988 5.00012ZM10.9999 10.5001C10.9999 10.7763 10.776 11.0001 10.4999 11.0001C10.2237 11.0001 9.99988 10.7763 9.99988 10.5001C9.99988 10.224 10.2237 10.0001 10.4999 10.0001C10.776 10.0001 10.9999 10.224 10.9999 10.5001ZM10.4999 8.00012C10.776 8.00012 10.9999 7.77626 10.9999 7.50012C10.9999 7.22398 10.776 7.00012 10.4999 7.00012C10.2237 7.00012 9.99988 7.22398 9.99988 7.50012C9.99988 7.77626 10.2237 8.00012 10.4999 8.00012ZM10.9999 4.50012C10.9999 4.77626 10.776 5.00012 10.4999 5.00012C10.2237 5.00012 9.99988 4.77626 9.99988 4.50012C9.99988 4.22398 10.2237 4.00012 10.4999 4.00012C10.776 4.00012 10.9999 4.22398 10.9999 4.50012ZM7.49988 11.0001C7.77602 11.0001 7.99988 10.7763 7.99988 10.5001C7.99988 10.224 7.77602 10.0001 7.49988 10.0001C7.22374 10.0001 6.99988 10.224 6.99988 10.5001C6.99988 10.7763 7.22374 11.0001 7.49988 11.0001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},$r=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.20307 1.04312C1.00481 0.954998 0.77234 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568116 1.75196L3.92115 7.50002L0.568116 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.77234 13.9952 1.00481 14.045 1.20307 13.9569L14.7031 7.95692C14.8836 7.87667 15 7.69761 15 7.50002C15 7.30242 14.8836 7.12336 14.7031 7.04311L1.20307 1.04312ZM4.84552 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22091 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22091 7.10002 9 7.10002H4.84552Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Fr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Dr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Nr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},zr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Wr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.85001 7.50043C1.85001 4.37975 4.37963 1.85001 7.50001 1.85001C10.6204 1.85001 13.15 4.37975 13.15 7.50043C13.15 10.6211 10.6204 13.1509 7.50001 13.1509C4.37963 13.1509 1.85001 10.6211 1.85001 7.50043ZM7.50001 0.850006C3.82728 0.850006 0.850006 3.82753 0.850006 7.50043C0.850006 11.1733 3.82728 14.1509 7.50001 14.1509C11.1727 14.1509 14.15 11.1733 14.15 7.50043C14.15 3.82753 11.1727 0.850006 7.50001 0.850006ZM7.00001 8.00001V3.12811C7.16411 3.10954 7.33094 3.10001 7.50001 3.10001C9.93006 3.10001 11.9 5.07014 11.9 7.50043C11.9 7.66935 11.8905 7.83604 11.872 8.00001H7.00001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Gr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3 5.5C3 7.983 4.99169 9 7 9V12.5C7 12.7761 7.22386 13 7.5 13C7.77614 13 8 12.7761 8 12.5V9V3.1H9V12.5C9 12.7761 9.22386 13 9.5 13C9.77614 13 10 12.7761 10 12.5V3.1H11.5C11.8038 3.1 12.05 2.85376 12.05 2.55C12.05 2.24624 11.8038 2 11.5 2H9.5H8H7.5H7C4.99169 2 3 3.017 3 5.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ur=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.5 13.95C13.7485 13.95 13.95 13.7485 13.95 13.5C13.95 13.2514 13.7485 13.05 13.5 13.05L1.49995 13.05C1.25142 13.05 1.04995 13.2514 1.04995 13.5C1.04995 13.7485 1.25142 13.95 1.49995 13.95L13.5 13.95ZM11.0681 7.5683C11.2439 7.39257 11.2439 7.10764 11.0681 6.93191C10.8924 6.75617 10.6075 6.75617 10.4317 6.93191L7.94993 9.41371L7.94993 1.49998C7.94993 1.25146 7.74846 1.04998 7.49993 1.04998C7.2514 1.04998 7.04993 1.25146 7.04993 1.49998L7.04993 9.41371L4.56813 6.93191C4.39239 6.75617 4.10746 6.75617 3.93173 6.93191C3.75599 7.10764 3.75599 7.39257 3.93173 7.5683L7.18173 10.8183C7.35746 10.994 7.64239 10.994 7.81812 10.8183L11.0681 7.5683Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},qr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.05005 13.5C2.05005 13.7485 2.25152 13.95 2.50005 13.95C2.74858 13.95 2.95005 13.7485 2.95005 13.5L2.95005 1.49995C2.95005 1.25142 2.74858 1.04995 2.50005 1.04995C2.25152 1.04995 2.05005 1.25142 2.05005 1.49995L2.05005 13.5ZM8.4317 11.0681C8.60743 11.2439 8.89236 11.2439 9.06809 11.0681C9.24383 10.8924 9.24383 10.6075 9.06809 10.4317L6.58629 7.94993L14.5 7.94993C14.7485 7.94993 14.95 7.74846 14.95 7.49993C14.95 7.2514 14.7485 7.04993 14.5 7.04993L6.58629 7.04993L9.06809 4.56813C9.24383 4.39239 9.24383 4.10746 9.06809 3.93173C8.89236 3.75599 8.60743 3.75599 8.4317 3.93173L5.1817 7.18173C5.00596 7.35746 5.00596 7.64239 5.1817 7.81812L8.4317 11.0681Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Yr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.95 1.50005C12.95 1.25152 12.7485 1.05005 12.5 1.05005C12.2514 1.05005 12.05 1.25152 12.05 1.50005L12.05 13.5C12.05 13.7486 12.2514 13.95 12.5 13.95C12.7485 13.95 12.95 13.7486 12.95 13.5L12.95 1.50005ZM6.5683 3.93188C6.39257 3.75614 6.10764 3.75614 5.93191 3.93188C5.75617 4.10761 5.75617 4.39254 5.93191 4.56827L8.41371 7.05007L0.499984 7.05007C0.251456 7.05007 0.0499847 7.25155 0.0499847 7.50007C0.0499846 7.7486 0.251457 7.95007 0.499984 7.95007L8.41371 7.95007L5.93191 10.4319C5.75617 10.6076 5.75617 10.8925 5.93191 11.0683C6.10764 11.244 6.39257 11.244 6.56831 11.0683L9.8183 7.81827C9.99404 7.64254 9.99404 7.35761 9.8183 7.18188L6.5683 3.93188Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Kr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.50005 1.05005C1.25152 1.05005 1.05005 1.25152 1.05005 1.50005C1.05005 1.74858 1.25152 1.95005 1.50005 1.95005L13.5 1.95005C13.7486 1.95005 13.95 1.74858 13.95 1.50005C13.95 1.25152 13.7486 1.05005 13.5 1.05005H1.50005ZM3.93188 7.43169C3.75614 7.60743 3.75614 7.89236 3.93188 8.06809C4.10761 8.24383 4.39254 8.24383 4.56827 8.06809L7.05007 5.58629V13.5C7.05007 13.7485 7.25155 13.95 7.50007 13.95C7.7486 13.95 7.95007 13.7485 7.95007 13.5L7.95007 5.58629L10.4319 8.06809C10.6076 8.24383 10.8925 8.24383 11.0683 8.06809C11.244 7.89235 11.244 7.60743 11.0683 7.43169L7.81827 4.18169C7.64254 4.00596 7.35761 4.00596 7.18188 4.18169L3.93188 7.43169Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Qr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Xr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Jr=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},en=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.07505 4.10001C5.07505 2.91103 6.25727 1.92502 7.50005 1.92502C8.74283 1.92502 9.92505 2.91103 9.92505 4.10001C9.92505 5.19861 9.36782 5.71436 8.61854 6.37884L8.58757 6.4063C7.84481 7.06467 6.92505 7.87995 6.92505 9.5C6.92505 9.81757 7.18248 10.075 7.50005 10.075C7.81761 10.075 8.07505 9.81757 8.07505 9.5C8.07505 8.41517 8.62945 7.90623 9.38156 7.23925L9.40238 7.22079C10.1496 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21869 0.775024 7.50005 0.775024C5.7814 0.775024 3.92505 2.12757 3.92505 4.10001C3.92505 4.41758 4.18249 4.67501 4.50005 4.67501C4.81761 4.67501 5.07505 4.41758 5.07505 4.10001ZM7.50005 13.3575C7.9833 13.3575 8.37505 12.9657 8.37505 12.4825C8.37505 11.9992 7.9833 11.6075 7.50005 11.6075C7.0168 11.6075 6.62505 11.9992 6.62505 12.4825C6.62505 12.9657 7.0168 13.3575 7.50005 13.3575Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},tn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},rn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},nn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 11.1575 3.84216 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1575 0.877045 7.49985 0.877045ZM1.82701 7.49988C1.82701 4.36686 4.36683 1.82704 7.49985 1.82704C10.6328 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6328 13.1727 7.49985 13.1727C4.36683 13.1727 1.82701 10.6329 1.82701 7.49988ZM7.49999 9.49999C8.60456 9.49999 9.49999 8.60456 9.49999 7.49999C9.49999 6.39542 8.60456 5.49999 7.49999 5.49999C6.39542 5.49999 5.49999 6.39542 5.49999 7.49999C5.49999 8.60456 6.39542 9.49999 7.49999 9.49999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},on=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ln=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},an=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},cn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.04995 2.74995C3.04995 2.44619 2.80371 2.19995 2.49995 2.19995C2.19619 2.19995 1.94995 2.44619 1.94995 2.74995V12.25C1.94995 12.5537 2.19619 12.8 2.49995 12.8C2.80371 12.8 3.04995 12.5537 3.04995 12.25V2.74995ZM5.73333 2.30776C5.57835 2.22596 5.39185 2.23127 5.24177 2.32176C5.0917 2.41225 4.99995 2.57471 4.99995 2.74995V12.25C4.99995 12.4252 5.0917 12.5877 5.24177 12.6781C5.39185 12.7686 5.57835 12.7739 5.73333 12.6921L14.7333 7.94214C14.8973 7.85559 15 7.68539 15 7.49995C15 7.31452 14.8973 7.14431 14.7333 7.05776L5.73333 2.30776ZM5.99995 11.4207V3.5792L13.4287 7.49995L5.99995 11.4207Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},sn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Cn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.59664 2.93628C7.76085 3.06401 8.00012 2.94698 8.00012 2.73895V1.99998C9.98143 2 11.1848 2.3637 11.9105 3.08945C12.6363 3.81522 13 5.0186 13 6.99998C13 7.27613 13.2239 7.49998 13.5 7.49998C13.7761 7.49998 14 7.27613 14 6.99998C14 4.9438 13.6325 3.39719 12.6176 2.38234C11.6028 1.36752 10.0562 0.999999 8.00012 0.999984V0.261266C8.00012 0.0532293 7.76085 -0.0637944 7.59664 0.063928L6.00384 1.30277C5.87516 1.40286 5.87516 1.59735 6.00384 1.69744L7.59664 2.93628ZM9.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H9.5C9.77614 13 10 12.7761 10 12.5V5.5C10 5.22386 9.77614 5 9.5 5ZM2.5 4C1.67157 4 1 4.67157 1 5.5V12.5C1 13.3284 1.67157 14 2.5 14H9.5C10.3284 14 11 13.3284 11 12.5V5.5C11 4.67157 10.3284 4 9.5 4H2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},dn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.81832 0.68179C7.64258 0.506054 7.35766 0.506054 7.18192 0.68179L5.18192 2.68179C5.00619 2.85753 5.00619 3.14245 5.18192 3.31819C5.35766 3.49392 5.64258 3.49392 5.81832 3.31819L7.05012 2.08638L7.05012 5.50023C7.05012 5.74876 7.25159 5.95023 7.50012 5.95023C7.74865 5.95023 7.95012 5.74876 7.95012 5.50023L7.95012 2.08638L9.18192 3.31819C9.35766 3.49392 9.64258 3.49392 9.81832 3.31819C9.99406 3.14245 9.99406 2.85753 9.81832 2.68179L7.81832 0.68179ZM7.95012 12.9136V9.50023C7.95012 9.2517 7.74865 9.05023 7.50012 9.05023C7.25159 9.05023 7.05012 9.2517 7.05012 9.50023V12.9136L5.81832 11.6818C5.64258 11.5061 5.35766 11.5061 5.18192 11.6818C5.00619 11.8575 5.00619 12.1424 5.18192 12.3182L7.18192 14.3182C7.26632 14.4026 7.38077 14.45 7.50012 14.45C7.61947 14.45 7.73393 14.4026 7.81832 14.3182L9.81832 12.3182C9.99406 12.1424 9.99406 11.8575 9.81832 11.6818C9.64258 11.5061 9.35766 11.5061 9.18192 11.6818L7.95012 12.9136ZM1.49994 7.00017C1.2238 7.00017 0.999939 7.22403 0.999939 7.50017C0.999939 7.77631 1.2238 8.00017 1.49994 8.00017L13.4999 8.00017C13.7761 8.00017 13.9999 7.77631 13.9999 7.50017C13.9999 7.22403 13.7761 7.00017 13.4999 7.00017L1.49994 7.00017Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},un=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},fn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.5 4C0.223858 4 0 4.22386 0 4.5V10.5C0 10.7761 0.223858 11 0.5 11H14.5C14.7761 11 15 10.7761 15 10.5V4.5C15 4.22386 14.7761 4 14.5 4H0.5ZM1 10V5H2.075V7.5C2.075 7.73472 2.26528 7.925 2.5 7.925C2.73472 7.925 2.925 7.73472 2.925 7.5V5H4.075V6.5C4.075 6.73472 4.26528 6.925 4.5 6.925C4.73472 6.925 4.925 6.73472 4.925 6.5V5H6.075V6.5C6.075 6.73472 6.26528 6.925 6.5 6.925C6.73472 6.925 6.925 6.73472 6.925 6.5V5H8.075V7.5C8.075 7.73472 8.26528 7.925 8.5 7.925C8.73472 7.925 8.925 7.73472 8.925 7.5V5H10.075V6.5C10.075 6.73472 10.2653 6.925 10.5 6.925C10.7347 6.925 10.925 6.73472 10.925 6.5V5H12.075V6.5C12.075 6.73472 12.2653 6.925 12.5 6.925C12.7347 6.925 12.925 6.73472 12.925 6.5V5H14V10H1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},hn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},pn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 1.5C2 1.77614 1.77614 2 1.5 2C1.22386 2 1 1.77614 1 1.5C1 1.22386 1.22386 1 1.5 1C1.77614 1 2 1.22386 2 1.5ZM2 5L2 10H13V5H2ZM2 4C1.44772 4 1 4.44772 1 5V10C1 10.5523 1.44772 11 2 11H13C13.5523 11 14 10.5523 14 10V5C14 4.44772 13.5523 4 13 4H2ZM1.5 14C1.77614 14 2 13.7761 2 13.5C2 13.2239 1.77614 13 1.5 13C1.22386 13 1 13.2239 1 13.5C1 13.7761 1.22386 14 1.5 14ZM4 1.5C4 1.77614 3.77614 2 3.5 2C3.22386 2 3 1.77614 3 1.5C3 1.22386 3.22386 1 3.5 1C3.77614 1 4 1.22386 4 1.5ZM3.5 14C3.77614 14 4 13.7761 4 13.5C4 13.2239 3.77614 13 3.5 13C3.22386 13 3 13.2239 3 13.5C3 13.7761 3.22386 14 3.5 14ZM6 1.5C6 1.77614 5.77614 2 5.5 2C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5ZM5.5 14C5.77614 14 6 13.7761 6 13.5C6 13.2239 5.77614 13 5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14ZM8 1.5C8 1.77614 7.77614 2 7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1C7.77614 1 8 1.22386 8 1.5ZM7.5 14C7.77614 14 8 13.7761 8 13.5C8 13.2239 7.77614 13 7.5 13C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14ZM10 1.5C10 1.77614 9.77614 2 9.5 2C9.22386 2 9 1.77614 9 1.5C9 1.22386 9.22386 1 9.5 1C9.77614 1 10 1.22386 10 1.5ZM9.5 14C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13C9.22386 13 9 13.2239 9 13.5C9 13.7761 9.22386 14 9.5 14ZM12 1.5C12 1.77614 11.7761 2 11.5 2C11.2239 2 11 1.77614 11 1.5C11 1.22386 11.2239 1 11.5 1C11.7761 1 12 1.22386 12 1.5ZM11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13C11.2239 13 11 13.2239 11 13.5C11 13.7761 11.2239 14 11.5 14ZM14 1.5C14 1.77614 13.7761 2 13.5 2C13.2239 2 13 1.77614 13 1.5C13 1.22386 13.2239 1 13.5 1C13.7761 1 14 1.22386 14 1.5ZM13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},vn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},gn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},wn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".05",d:"M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".1",d:"M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".15",d:"M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".2",d:"M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".25",d:"M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".3",d:"M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".35",d:"M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".4",d:"M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".45",d:"M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".5",d:"M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},mn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".05",d:"M12.1619 3.85182C8.35817 4.88918 4.88936 8.358 3.85199 12.1617L3.3696 12.0301C4.45356 8.05564 8.05581 4.45339 12.0303 3.36943L12.1619 3.85182Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".1",d:"M11.8807 3.42707C8.03441 4.50542 4.50561 8.03422 3.42726 11.8805L2.94582 11.7456C4.07129 7.73121 7.7314 4.0711 11.7458 2.94563L11.8807 3.42707Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".15",d:"M11.5201 3.02556C7.69092 4.16199 4.16779 7.68323 3.02805 11.512L2.54883 11.3694C3.73676 7.37869 7.38659 3.73076 11.3778 2.54623L11.5201 3.02556Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".2",d:"M11.0468 2.66169C7.31117 3.87664 3.87918 7.3079 2.66298 11.0434L2.18754 10.8886C3.45324 7.00109 7.00445 3.45062 10.8921 2.18621L11.0468 2.66169Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".25",d:"M10.5201 2.32365C6.92091 3.61447 3.62391 6.90876 2.32845 10.5073L1.858 10.338C3.20398 6.59909 6.61155 3.19424 10.3513 1.85301L10.5201 2.32365Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".3",d:"M9.90222 2.03122C6.50003 3.39465 3.39968 6.49367 2.03399 9.89551L1.56998 9.70924C2.98651 6.18076 6.18728 2.98133 9.71622 1.5671L9.90222 2.03122Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".35",d:"M9.20727 1.78873C6.06136 3.20349 3.21103 6.05203 1.79331 9.19738L1.33747 8.99192C2.80536 5.73528 5.74485 2.7976 9.0022 1.33272L9.20727 1.78873Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".4",d:"M8.40713 1.62085C5.59323 3.05117 3.05794 5.58509 1.62544 8.39847L1.17987 8.1716C2.66036 5.26397 5.27232 2.6534 8.18057 1.17513L8.40713 1.62085Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".45",d:"M7.46207 1.56747C5.08689 2.94695 2.95362 5.07912 1.57249 7.45379L1.14028 7.20241C2.56503 4.75273 4.7607 2.55818 7.21096 1.1351L7.46207 1.56747Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".5",d:"M6.30407 1.70487C4.51964 2.91063 2.90983 4.52061 1.7043 6.30513L1.28998 6.02524C2.5313 4.18773 4.18673 2.53214 6.02413 1.29059L6.30407 1.70487Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},bn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 9.1488 1.47969 10.657 2.4767 11.8162L1.64647 12.6464C1.45121 12.8417 1.45121 13.1583 1.64647 13.3535C1.84173 13.5488 2.15832 13.5488 2.35358 13.3535L3.18383 12.5233C4.34302 13.5202 5.8511 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 5.85107 13.5202 4.34298 12.5233 3.1838L13.3536 2.35355C13.5488 2.15829 13.5488 1.8417 13.3536 1.64644C13.1583 1.45118 12.8417 1.45118 12.6465 1.64644L11.8162 2.47667C10.657 1.47966 9.14883 0.877045 7.49991 0.877045ZM11.1423 3.15065C10.1568 2.32449 8.88644 1.82704 7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 8.88641 2.32452 10.1568 3.15069 11.1422L11.1423 3.15065ZM3.85781 11.8493C4.84322 12.6753 6.11348 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 6.11345 12.6754 4.84319 11.8493 3.85778L3.85781 11.8493Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".05",d:"M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".1",d:"M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".15",d:"M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".2",d:"M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".25",d:"M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".3",d:"M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".35",d:"M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".4",d:"M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".45",d:"M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".5",d:"M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},xn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{opacity:".05",d:"M12.1398 3.88616C13.8553 4.94159 15 6.837 15 8.99999C15 12.3137 12.3137 15 9.00001 15C6.8435 15 4.95295 13.8621 3.89569 12.1552L4.32075 11.8919C5.29069 13.4578 7.02375 14.5 9.00001 14.5C12.0375 14.5 14.5 12.0375 14.5 8.99999C14.5 7.0178 13.4516 5.28026 11.8778 4.31202L12.1398 3.88616Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".2",d:"M12.851 5.0732C13.8684 6.07105 14.5 7.46198 14.5 8.99999C14.5 12.0375 12.0376 14.5 9.00002 14.5C7.46214 14.5 6.07131 13.8685 5.07348 12.8512L5.43042 12.5011C6.33809 13.4264 7.60185 14 9.00002 14C11.7614 14 14 11.7614 14 8.99999C14 7.6017 13.4264 6.33785 12.5009 5.43017L12.851 5.0732Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".35",d:"M13.3021 6.45071C13.7455 7.19737 14 8.06934 14 9C14 11.7614 11.7614 14 9.00001 14C8.04867 14 7.15867 13.7341 6.40118 13.2723L6.66141 12.8454C7.34274 13.2607 8.14305 13.5 9.00001 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 8.16164 13.271 7.37753 12.8722 6.70598L13.3021 6.45071Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".5",d:"M13.3744 7.94021C13.4566 8.2803 13.5 8.63524 13.5 9C13.5 11.4853 11.4853 13.5 9.00002 13.5C8.61103 13.5 8.23321 13.4506 7.87267 13.3576L7.99758 12.8734C8.31767 12.956 8.65352 13 9.00002 13C11.2091 13 13 11.2091 13 9C13 8.67507 12.9613 8.35952 12.8884 8.05756L13.3744 7.94021Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{opacity:".65",d:"M12.9155 9.82132C12.5898 11.3813 11.3562 12.6072 9.79203 12.9215L9.69353 12.4313C11.0613 12.1565 12.1413 11.0833 12.4261 9.71913L12.9155 9.82132Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}),(0,n.createElement)("path",{d:"M1.2771 7.50252C1.2771 4.06455 4.06413 1.27753 7.50209 1.27753C10.94 1.27753 13.7271 4.06455 13.7271 7.50252C13.7271 10.9405 10.94 13.7275 7.50209 13.7275C4.06412 13.7275 1.2771 10.9405 1.2771 7.50252ZM7.50209 2.22752C4.5888 2.22752 2.2271 4.58922 2.2271 7.50252C2.2271 10.4158 4.5888 12.7775 7.50209 12.7775C10.4154 12.7775 12.7771 10.4158 12.7771 7.50252C12.7771 4.58922 10.4154 2.22752 7.50209 2.22752Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},yn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ln=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Mn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},On=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M11.5 3.04999C11.7485 3.04999 11.95 3.25146 11.95 3.49999V7.49999C11.95 7.74852 11.7485 7.94999 11.5 7.94999C11.2515 7.94999 11.05 7.74852 11.05 7.49999V4.58639L4.58638 11.05H7.49999C7.74852 11.05 7.94999 11.2515 7.94999 11.5C7.94999 11.7485 7.74852 11.95 7.49999 11.95L3.49999 11.95C3.38064 11.95 3.26618 11.9026 3.18179 11.8182C3.0974 11.7338 3.04999 11.6193 3.04999 11.5L3.04999 7.49999C3.04999 7.25146 3.25146 7.04999 3.49999 7.04999C3.74852 7.04999 3.94999 7.25146 3.94999 7.49999L3.94999 10.4136L10.4136 3.94999L7.49999 3.94999C7.25146 3.94999 7.04999 3.74852 7.04999 3.49999C7.04999 3.25146 7.25146 3.04999 7.49999 3.04999L11.5 3.04999Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},En=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.53731 0.826873C7.5125 0.824392 7.4875 0.824392 7.46269 0.826873L3.96269 1.17687C3.85672 1.18747 3.76025 1.24262 3.69736 1.32857L0.699771 5.42528C0.654046 5.48627 0.62647 5.56165 0.625057 5.6434C0.625019 5.6456 0.625 5.64781 0.625 5.65001C0.625 5.65052 0.625001 5.65103 0.625003 5.65153C0.625363 5.74237 0.658021 5.82559 0.712087 5.8903L7.21042 13.7883C7.28165 13.8749 7.38789 13.925 7.5 13.925C7.61211 13.925 7.71835 13.8749 7.78958 13.7883L14.2879 5.89031C14.342 5.8256 14.3746 5.74237 14.375 5.65153C14.375 5.65103 14.375 5.65052 14.375 5.65001C14.375 5.64849 14.375 5.64697 14.375 5.64545C14.3749 5.63963 14.3747 5.63382 14.3744 5.62801C14.37 5.55219 14.3431 5.48242 14.3002 5.42527L11.3026 1.32857C11.2397 1.24262 11.1433 1.18747 11.0373 1.17687L7.53731 0.826873ZM10.925 5.27501V5.25236L10.9223 5.27501H10.925ZM10.9342 5.17498H13.1877L11.2495 2.5261L10.9342 5.17498ZM10.5707 1.88395L8.04432 1.63131L10.1747 5.21034L10.5707 1.88395ZM6.95568 1.63131L4.42931 1.88395L4.82531 5.21034L6.95568 1.63131ZM3.75046 2.5261L1.81226 5.17498H4.0658L3.75046 2.5261ZM1.79416 6.02501L6.75861 12.0587L4.22371 6.0669C4.21787 6.0531 4.21314 6.0391 4.20949 6.02501H1.79416ZM5.15055 6.02501L7.49999 12.1085L9.84943 6.02501H9.78681H5.21319H5.15055ZM10.7905 6.02501C10.7869 6.0391 10.7821 6.0531 10.7763 6.0669L8.24139 12.0587L13.2058 6.02501H10.7905ZM7.5 2.18317L9.34038 5.27501H5.65962L7.5 2.18317Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Hn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},jn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.3004 7.49991C10.3004 8.4943 9.49426 9.30041 8.49988 9.30041C7.50549 9.30041 6.69938 8.4943 6.69938 7.49991C6.69938 6.50553 7.50549 5.69942 8.49988 5.69942C9.49426 5.69942 10.3004 6.50553 10.3004 7.49991ZM11.205 8C10.9699 9.28029 9.84816 10.2504 8.49988 10.2504C7.1516 10.2504 6.0299 9.28029 5.79473 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H5.7947C6.0298 5.71962 7.15154 4.74942 8.49988 4.74942C9.84822 4.74942 10.9699 5.71962 11.2051 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H11.205Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Vn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14.4999 0.999994C14.2237 0.999994 13.9999 1.22385 13.9999 1.49999L13.9999 5.99995L9.99992 5.99995C9.44764 5.99995 8.99993 6.44766 8.99993 6.99994L8.99993 7.99994C8.99993 8.55222 9.44764 8.99993 9.99992 8.99993L13.9999 8.99993L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999994 14.4999 0.999994ZM4.99996 5.99995L0.999992 5.99995L0.999992 1.49999C0.999992 1.22385 0.776136 0.999994 0.499996 0.999994C0.223856 0.999994 -9.7852e-09 1.22385 -2.18557e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 8.99993L4.99996 8.99993C5.55224 8.99993 5.99995 8.55222 5.99995 7.99993L5.99995 6.99994C5.99995 6.44766 5.55224 5.99995 4.99996 5.99995Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Zn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1L9 1V5C9 5.55228 8.55228 6 8 6H7C6.44772 6 6 5.55228 6 5V1H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM7 9C6.44772 9 6 9.44771 6 10V14H1.49988C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H9V10C9 9.44772 8.55228 9 8 9H7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Rn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14.4999 0.999992C14.2237 0.999992 13.9999 1.22385 13.9999 1.49999L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999992 14.4999 0.999992ZM0.499996 0.999992C0.223856 0.999992 -9.78509e-09 1.22385 -2.18556e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 1.49999C0.999992 1.22385 0.776136 0.999992 0.499996 0.999992ZM1.99998 6.99994C1.99998 6.44766 2.44769 5.99995 2.99998 5.99995L5.99995 5.99995C6.55223 5.99995 6.99994 6.44766 6.99994 6.99994L6.99994 7.99993C6.99994 8.55221 6.55223 8.99992 5.99995 8.99992L2.99998 8.99992C2.4477 8.99992 1.99998 8.55221 1.99998 7.99993L1.99998 6.99994ZM8.99993 5.99995C8.44765 5.99995 7.99993 6.44766 7.99993 6.99994L7.99993 7.99993C7.99993 8.55221 8.44765 8.99992 8.99993 8.99992L11.9999 8.99992C12.5522 8.99992 12.9999 8.55221 12.9999 7.99993L12.9999 6.99994C12.9999 6.44766 12.5522 5.99995 11.9999 5.99995L8.99993 5.99995Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},_n=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM7 2C6.44772 2 6 2.44772 6 3V6C6 6.55228 6.44772 7 7 7H8C8.55228 7 9 6.55228 9 6V3C9 2.44772 8.55228 2 8 2H7ZM7 8C6.44772 8 6 8.44771 6 9V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V9C9 8.44772 8.55228 8 8 8H7ZM1.49988 14C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H1.49988Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Sn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.46968 1.05085C7.64122 1.13475 7.75 1.30904 7.75 1.5V13.5C7.75 13.691 7.64122 13.8653 7.46968 13.9492C7.29813 14.0331 7.09377 14.0119 6.94303 13.8947L3.2213 11H1.5C0.671571 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.2213L6.94303 1.10533C7.09377 0.988085 7.29813 0.966945 7.46968 1.05085ZM6.75 2.52232L3.69983 4.89468C3.61206 4.96294 3.50405 5 3.39286 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77615 1.22386 10 1.5 10H3.39286C3.50405 10 3.61206 10.0371 3.69983 10.1053L6.75 12.4777V2.52232ZM10.2784 3.84804C10.4623 3.72567 10.7106 3.77557 10.833 3.95949C12.2558 6.09798 12.2558 8.90199 10.833 11.0405C10.7106 11.2244 10.4623 11.2743 10.2784 11.1519C10.0944 11.0296 10.0445 10.7813 10.1669 10.5973C11.4111 8.72728 11.4111 6.27269 10.1669 4.40264C10.0445 4.21871 10.0944 3.97041 10.2784 3.84804ZM12.6785 1.43044C12.5356 1.2619 12.2832 1.24104 12.1147 1.38386C11.9462 1.52667 11.9253 1.77908 12.0681 1.94762C14.7773 5.14488 14.7773 9.85513 12.0681 13.0524C11.9253 13.2209 11.9462 13.4733 12.1147 13.6161C12.2832 13.759 12.5356 13.7381 12.6785 13.5696C15.6406 10.0739 15.6406 4.92612 12.6785 1.43044Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Pn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8 1.5C8 1.31062 7.893 1.13749 7.72361 1.05279C7.55421 0.968093 7.35151 0.986371 7.2 1.1L3.33333 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671573 11 1.5 11H3.33333L7.2 13.9C7.35151 14.0136 7.55421 14.0319 7.72361 13.9472C7.893 13.8625 8 13.6894 8 13.5V1.5ZM3.8 4.9L7 2.5V12.5L3.8 10.1C3.71345 10.0351 3.60819 10 3.5 10H1.5C1.22386 10 1 9.77614 1 9.5V5.5C1 5.22386 1.22386 5 1.5 5H3.5C3.60819 5 3.71345 4.96491 3.8 4.9ZM10.833 3.95949C10.7106 3.77557 10.4623 3.72567 10.2784 3.84804C10.0944 3.97041 10.0445 4.21871 10.1669 4.40264C11.4111 6.27268 11.4111 8.72728 10.1669 10.5973C10.0445 10.7813 10.0944 11.0296 10.2784 11.1519C10.4623 11.2743 10.7106 11.2244 10.833 11.0405C12.2558 8.90199 12.2558 6.09798 10.833 3.95949Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},In=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.72361 1.05279C7.893 1.13749 8 1.31062 8 1.5V13.5C8 13.6894 7.893 13.8625 7.72361 13.9472C7.55421 14.0319 7.35151 14.0136 7.2 13.9L3.33333 11H1.5C0.671573 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.33333L7.2 1.1C7.35151 0.986371 7.55421 0.968093 7.72361 1.05279ZM7 2.5L3.8 4.9C3.71345 4.96491 3.60819 5 3.5 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77614 1.22386 10 1.5 10H3.5C3.60819 10 3.71345 10.0351 3.8 10.1L7 12.5V2.5ZM14.8536 5.14645C15.0488 5.34171 15.0488 5.65829 14.8536 5.85355L13.2071 7.5L14.8536 9.14645C15.0488 9.34171 15.0488 9.65829 14.8536 9.85355C14.6583 10.0488 14.3417 10.0488 14.1464 9.85355L12.5 8.20711L10.8536 9.85355C10.6583 10.0488 10.3417 10.0488 10.1464 9.85355C9.95118 9.65829 9.95118 9.34171 10.1464 9.14645L11.7929 7.5L10.1464 5.85355C9.95118 5.65829 9.95118 5.34171 10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645L12.5 6.79289L14.1464 5.14645C14.3417 4.95118 14.6583 4.95118 14.8536 5.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},kn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8 1.5C8 1.31062 7.893 1.13749 7.72361 1.05279C7.55421 0.968093 7.35151 0.986371 7.2 1.1L3.33333 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671573 11 1.5 11H3.33333L7.2 13.9C7.35151 14.0136 7.55421 14.0319 7.72361 13.9472C7.893 13.8625 8 13.6894 8 13.5V1.5ZM3.8 4.9L7 2.5V12.5L3.8 10.1C3.71345 10.0351 3.60819 10 3.5 10H1.5C1.22386 10 1 9.77614 1 9.5V5.5C1 5.22386 1.22386 5 1.5 5H3.5C3.60819 5 3.71345 4.96491 3.8 4.9ZM10.083 5.05577C9.96066 4.87185 9.71235 4.82195 9.52843 4.94432C9.3445 5.06669 9.2946 5.31499 9.41697 5.49892C10.2207 6.70693 10.2207 8.29303 9.41697 9.50104C9.2946 9.68496 9.3445 9.93326 9.52843 10.0556C9.71235 10.178 9.96066 10.1281 10.083 9.94418C11.0653 8.46773 11.0653 6.53222 10.083 5.05577Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Bn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 1H1.5H13.5H14V1.5V13.5V14H13.5H1.5H1V13.5V1.5V1ZM2 2V13H13V2H2Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},An=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.75432 1.81954C7.59742 1.72682 7.4025 1.72682 7.24559 1.81954L1.74559 5.06954C1.59336 5.15949 1.49996 5.32317 1.49996 5.5C1.49996 5.67683 1.59336 5.84051 1.74559 5.93046L7.24559 9.18046C7.4025 9.27318 7.59742 9.27318 7.75432 9.18046L13.2543 5.93046C13.4066 5.84051 13.5 5.67683 13.5 5.5C13.5 5.32317 13.4066 5.15949 13.2543 5.06954L7.75432 1.81954ZM7.49996 8.16923L2.9828 5.5L7.49996 2.83077L12.0171 5.5L7.49996 8.16923ZM2.25432 8.31954C2.01658 8.17906 1.70998 8.2579 1.56949 8.49564C1.42901 8.73337 1.50785 9.03998 1.74559 9.18046L7.24559 12.4305C7.4025 12.5232 7.59742 12.5232 7.75432 12.4305L13.2543 9.18046C13.4921 9.03998 13.5709 8.73337 13.4304 8.49564C13.2899 8.2579 12.9833 8.17906 12.7456 8.31954L7.49996 11.4192L2.25432 8.31954Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Tn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},$n=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z",fill:r}))},Fn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Dn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM12 3H3V12H12V3Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Nn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},zn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14.4999 0.999992C14.2237 0.999992 13.9999 1.22385 13.9999 1.49999L13.9999 5.99995L0.999992 5.99995L0.999992 1.49999C0.999992 1.22385 0.776136 0.999992 0.499996 0.999992C0.223856 0.999992 -9.78509e-09 1.22385 -2.18556e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 8.99992L13.9999 8.99992L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999992 14.4999 0.999992Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Wn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1H6H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM9 14V1L6 1V14H1.49988C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Gn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.00003 3.25C5.00003 2.97386 4.77617 2.75 4.50003 2.75C4.22389 2.75 4.00003 2.97386 4.00003 3.25V7.10003H2.49998C2.27906 7.10003 2.09998 7.27912 2.09998 7.50003C2.09998 7.72094 2.27906 7.90003 2.49998 7.90003H4.00003V8.55C4.00003 10.483 5.56703 12.05 7.50003 12.05C9.43303 12.05 11 10.483 11 8.55V7.90003H12.5C12.7209 7.90003 12.9 7.72094 12.9 7.50003C12.9 7.27912 12.7209 7.10003 12.5 7.10003H11V3.25C11 2.97386 10.7762 2.75 10.5 2.75C10.2239 2.75 10 2.97386 10 3.25V7.10003H5.00003V3.25ZM5.00003 7.90003V8.55C5.00003 9.93071 6.11932 11.05 7.50003 11.05C8.88074 11.05 10 9.93071 10 8.55V7.90003H5.00003Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Un=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},qn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Yn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Kn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8 2H12.5C12.7761 2 13 2.22386 13 2.5V5H8V2ZM7 5V2H2.5C2.22386 2 2 2.22386 2 2.5V5H7ZM2 6V9H7V6H2ZM8 6H13V9H8V6ZM8 10H13V12.5C13 12.7761 12.7761 13 12.5 13H8V10ZM2 12.5V10H7V13H2.5C2.22386 13 2 12.7761 2 12.5ZM1 2.5C1 1.67157 1.67157 1 2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Qn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Xn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M3.94993 2.95002L3.94993 4.49998C3.94993 4.74851 3.74845 4.94998 3.49993 4.94998C3.2514 4.94998 3.04993 4.74851 3.04993 4.49998V2.50004C3.04993 2.45246 3.05731 2.40661 3.07099 2.36357C3.12878 2.18175 3.29897 2.05002 3.49993 2.05002H11.4999C11.6553 2.05002 11.7922 2.12872 11.8731 2.24842C11.9216 2.32024 11.9499 2.40682 11.9499 2.50002L11.9499 2.50004V4.49998C11.9499 4.74851 11.7485 4.94998 11.4999 4.94998C11.2514 4.94998 11.0499 4.74851 11.0499 4.49998V2.95002H8.04993V12.05H9.25428C9.50281 12.05 9.70428 12.2515 9.70428 12.5C9.70428 12.7486 9.50281 12.95 9.25428 12.95H5.75428C5.50575 12.95 5.30428 12.7486 5.30428 12.5C5.30428 12.2515 5.50575 12.05 5.75428 12.05H6.94993V2.95002H3.94993Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Jn=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},eo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},to=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ro=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},no=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L11.9291 2.36383C11.9159 2.32246 11.897 2.28368 11.8732 2.24845C11.7923 2.12875 11.6554 2.05005 11.5001 2.05005H3.50005C3.29909 2.05005 3.1289 2.18178 3.07111 2.3636C3.05743 2.40665 3.05005 2.45249 3.05005 2.50007V4.50001C3.05005 4.74854 3.25152 4.95001 3.50005 4.95001C3.74858 4.95001 3.95005 4.74854 3.95005 4.50001V2.95005H6.95006V7.34284L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L6.95006 8.75705V12.0501H5.7544C5.50587 12.0501 5.3044 12.2515 5.3044 12.5001C5.3044 12.7486 5.50587 12.9501 5.7544 12.9501H9.2544C9.50293 12.9501 9.7044 12.7486 9.7044 12.5001C9.7044 12.2515 9.50293 12.0501 9.2544 12.0501H8.05006V7.65705L13.3536 2.35355ZM8.05006 6.24284L11.0501 3.24283V2.95005H8.05006V6.24284Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},oo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V6H12.5C12.6873 6 12.8589 6.10467 12.9446 6.27121C13.0303 6.43774 13.0157 6.63821 12.9069 6.79062L7.90687 13.7906C7.81301 13.922 7.66148 14 7.5 14C7.33853 14 7.18699 13.922 7.09314 13.7906L2.09314 6.79062C1.98427 6.63821 1.96972 6.43774 2.05542 6.27121C2.14112 6.10467 2.31271 6 2.5 6H5V3.5ZM6 4V6.5C6 6.77614 5.77614 7 5.5 7H3.4716L7.5 12.6398L11.5284 7H9.5C9.22386 7 9 6.77614 9 6.5V4H6Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},io=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1 7.5C1 7.66148 1.07798 7.81301 1.20938 7.90687L8.20938 12.9069C8.36179 13.0157 8.56226 13.0303 8.72879 12.9446C8.89533 12.8589 9 12.6873 9 12.5L9 10L11.5 10C11.7761 10 12 9.77614 12 9.5L12 5.5C12 5.22386 11.7761 5 11.5 5L9 5L9 2.5C9 2.31271 8.89533 2.14112 8.72879 2.05542C8.56226 1.96972 8.36179 1.98427 8.20938 2.09313L1.20938 7.09314C1.07798 7.18699 1 7.33853 1 7.5ZM8 3.4716L8 5.5C8 5.77614 8.22386 6 8.5 6L11 6L11 9L8.5 9C8.22386 9 8 9.22386 8 9.5L8 11.5284L2.36023 7.5L8 3.4716Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},lo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14 7.5C14 7.66148 13.922 7.81301 13.7906 7.90687L6.79062 12.9069C6.63821 13.0157 6.43774 13.0303 6.27121 12.9446C6.10467 12.8589 6 12.6873 6 12.5L6 10L3.5 10C3.22386 10 3 9.77614 3 9.5L3 5.5C3 5.22386 3.22386 5 3.5 5L6 5L6 2.5C6 2.31271 6.10467 2.14112 6.27121 2.05542C6.43774 1.96972 6.63821 1.98427 6.79062 2.09313L13.7906 7.09314C13.922 7.18699 14 7.33853 14 7.5ZM7 3.4716L7 5.5C7 5.77614 6.77614 6 6.5 6L4 6L4 9L6.5 9C6.77614 9 7 9.22386 7 9.5L7 11.5284L12.6398 7.5L7 3.4716Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ao=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},co=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},so=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Co=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M13.0502 2.74989C13.0502 2.44613 12.804 2.19989 12.5002 2.19989C12.1965 2.19989 11.9502 2.44613 11.9502 2.74989V7.2825C11.9046 7.18802 11.8295 7.10851 11.7334 7.05776L2.73338 2.30776C2.5784 2.22596 2.3919 2.23127 2.24182 2.32176C2.09175 2.41225 2 2.57471 2 2.74995V12.25C2 12.4252 2.09175 12.5877 2.24182 12.6781C2.3919 12.7686 2.5784 12.7739 2.73338 12.6921L11.7334 7.94214C11.8295 7.89139 11.9046 7.81188 11.9502 7.7174V12.2499C11.9502 12.5536 12.1965 12.7999 12.5002 12.7999C12.804 12.7999 13.0502 12.5536 13.0502 12.2499V2.74989ZM3 11.4207V3.5792L10.4288 7.49995L3 11.4207Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},uo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.94976 2.74989C1.94976 2.44613 2.196 2.19989 2.49976 2.19989C2.80351 2.19989 3.04976 2.44613 3.04976 2.74989V7.2825C3.0954 7.18802 3.17046 7.10851 3.26662 7.05776L12.2666 2.30776C12.4216 2.22596 12.6081 2.23127 12.7582 2.32176C12.9083 2.41225 13 2.57471 13 2.74995V12.25C13 12.4252 12.9083 12.5877 12.7582 12.6781C12.6081 12.7686 12.4216 12.7739 12.2666 12.6921L3.26662 7.94214C3.17046 7.89139 3.0954 7.81188 3.04976 7.7174V12.2499C3.04976 12.5536 2.80351 12.7999 2.49976 12.7999C2.196 12.7999 1.94976 12.5536 1.94976 12.2499V2.74989ZM4.57122 7.49995L12 11.4207V3.5792L4.57122 7.49995Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},fo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{opacity:".25",d:"M0 0H3V3H0V0ZM6 3H3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3ZM6 6V3H9V6H6ZM6 9H3V6H6V9ZM9 9V6H12V9H9ZM9 9H6V12H9V9Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},ho=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},po=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4 6H11L7.5 10.5L4 6Z",fill:r}))},vo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M9 4L9 11L4.5 7.5L9 4Z",fill:r}))},go=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6 11L6 4L10.5 7.5L6 11Z",fill:r}))},wo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4 9H11L7.5 4.5L4 9Z",fill:r}))},mo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},bo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M5.00001 2.75C5.00001 2.47386 4.77615 2.25 4.50001 2.25C4.22387 2.25 4.00001 2.47386 4.00001 2.75V8.05C4.00001 9.983 5.56702 11.55 7.50001 11.55C9.43301 11.55 11 9.983 11 8.05V2.75C11 2.47386 10.7762 2.25 10.5 2.25C10.2239 2.25 10 2.47386 10 2.75V8.05C10 9.43071 8.88072 10.55 7.50001 10.55C6.1193 10.55 5.00001 9.43071 5.00001 8.05V2.75ZM3.49998 13.1001C3.27906 13.1001 3.09998 13.2791 3.09998 13.5001C3.09998 13.721 3.27906 13.9001 3.49998 13.9001H11.5C11.7209 13.9001 11.9 13.721 11.9 13.5001C11.9 13.2791 11.7209 13.1001 11.5 13.1001H3.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},xo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},yo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Lo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Mo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 9.1488 1.47963 10.657 2.47665 11.8162L1.64643 12.6464C1.45117 12.8417 1.45117 13.1583 1.64643 13.3535C1.8417 13.5488 2.15828 13.5488 2.35354 13.3535L3.18377 12.5233C4.34296 13.5202 5.85104 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 5.85107 13.5202 4.34299 12.5233 3.1838L13.3535 2.35354C13.5488 2.15827 13.5488 1.84169 13.3535 1.64643C13.1583 1.45117 12.8417 1.45117 12.6464 1.64643L11.8162 2.47668C10.657 1.47966 9.14877 0.877045 7.49985 0.877045ZM11.1422 3.15066C10.1567 2.32449 8.88639 1.82704 7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.88642 2.32446 10.1568 3.15063 11.1422L11.1422 3.15066ZM3.85776 11.8493C4.84317 12.6753 6.11343 13.1727 7.49985 13.1727C10.6328 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 6.11346 12.6753 4.8432 11.8493 3.85779L3.85776 11.8493Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Oo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Eo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.76447 3.12199C5.63151 3.04859 6.56082 3 7.5 3C8.43918 3 9.36849 3.04859 10.2355 3.12199C11.2796 3.21037 11.9553 3.27008 12.472 3.39203C12.9425 3.50304 13.2048 3.64976 13.4306 3.88086C13.4553 3.90618 13.4902 3.94414 13.5133 3.97092C13.7126 4.20149 13.8435 4.4887 13.918 5.03283C13.9978 5.6156 14 6.37644 14 7.52493C14 8.66026 13.9978 9.41019 13.9181 9.98538C13.8439 10.5206 13.7137 10.8061 13.5125 11.0387C13.4896 11.0651 13.4541 11.1038 13.4296 11.1287C13.2009 11.3625 12.9406 11.5076 12.4818 11.6164C11.9752 11.7365 11.3143 11.7942 10.2878 11.8797C9.41948 11.9521 8.47566 12 7.5 12C6.52434 12 5.58052 11.9521 4.7122 11.8797C3.68572 11.7942 3.02477 11.7365 2.51816 11.6164C2.05936 11.5076 1.7991 11.3625 1.57037 11.1287C1.54593 11.1038 1.51035 11.0651 1.48748 11.0387C1.28628 10.8061 1.15612 10.5206 1.08193 9.98538C1.00221 9.41019 1 8.66026 1 7.52493C1 6.37644 1.00216 5.6156 1.082 5.03283C1.15654 4.4887 1.28744 4.20149 1.48666 3.97092C1.5098 3.94414 1.54468 3.90618 1.56942 3.88086C1.7952 3.64976 2.05752 3.50304 2.52796 3.39203C3.04473 3.27008 3.7204 3.21037 4.76447 3.12199ZM0 7.52493C0 5.28296 0 4.16198 0.729985 3.31713C0.766457 3.27491 0.815139 3.22194 0.854123 3.18204C1.63439 2.38339 2.64963 2.29744 4.68012 2.12555C5.56923 2.05028 6.52724 2 7.5 2C8.47276 2 9.43077 2.05028 10.3199 2.12555C12.3504 2.29744 13.3656 2.38339 14.1459 3.18204C14.1849 3.22194 14.2335 3.27491 14.27 3.31713C15 4.16198 15 5.28296 15 7.52493C15 9.74012 15 10.8477 14.2688 11.6929C14.2326 11.7348 14.1832 11.7885 14.1444 11.8281C13.3629 12.6269 12.3655 12.71 10.3709 12.8763C9.47971 12.9505 8.50782 13 7.5 13C6.49218 13 5.52028 12.9505 4.62915 12.8763C2.63446 12.71 1.63712 12.6269 0.855558 11.8281C0.816844 11.7885 0.767442 11.7348 0.731221 11.6929C0 10.8477 0 9.74012 0 7.52493ZM5.25 5.38264C5.25 5.20225 5.43522 5.08124 5.60041 5.15369L10.428 7.27105C10.6274 7.35853 10.6274 7.64147 10.428 7.72895L5.60041 9.84631C5.43522 9.91876 5.25 9.79775 5.25 9.61736V5.38264Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ho=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M7 2H1.5C1.22386 2 1 2.22386 1 2.5V7H7V2ZM8 2V7H14V2.5C14 2.22386 13.7761 2 13.5 2H8ZM7 8H1V12.5C1 12.7761 1.22386 13 1.5 13H7V8ZM8 13V8H14V12.5C14 12.7761 13.7761 13 13.5 13H8ZM1.5 1C0.671573 1 0 1.67157 0 2.5V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H1.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},jo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M1.5 2H13.5C13.7761 2 14 2.22386 14 2.5V7H1V2.5C1 2.22386 1.22386 2 1.5 2ZM1 8V12.5C1 12.7761 1.22386 13 1.5 13H13.5C13.7761 13 14 12.7761 14 12.5V8H1ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Vo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M14 2.58711L1.85163 13H13.5C13.7761 13 14 12.7761 14 12.5V2.58711ZM0.762879 13.8067L0.825396 13.8796L0.854717 13.8545C1.05017 13.9478 1.26899 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.93949 14.6926 1.45078 14.2371 1.19331L14.1746 1.12037L14.1453 1.1455C13.9498 1.05222 13.731 1 13.5 1H1.5C0.671573 1 0 1.67157 0 2.5V12.5C0 13.0605 0.307435 13.5492 0.762879 13.8067ZM1 12.4129L13.1484 2H1.5C1.22386 2 1 2.22386 1 2.5V12.4129Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Zo=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},Ro=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M4.81812 4.68161C4.99386 4.85734 4.99386 5.14227 4.81812 5.318L3.08632 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4939 7.35734 13.4939 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08632L4.81812 9.68161C4.99386 9.85734 4.99386 10.1423 4.81812 10.318C4.64239 10.4937 4.35746 10.4937 4.18173 10.318L1.68173 7.818C1.50599 7.64227 1.50599 7.35734 1.68173 7.18161L4.18173 4.68161C4.35746 4.50587 4.64239 4.50587 4.81812 4.68161Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},_o=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159ZM4.25 6.5C4.25 6.22386 4.47386 6 4.75 6H6V4.75C6 4.47386 6.22386 4.25 6.5 4.25C6.77614 4.25 7 4.47386 7 4.75V6H8.25C8.52614 6 8.75 6.22386 8.75 6.5C8.75 6.77614 8.52614 7 8.25 7H7V8.25C7 8.52614 6.77614 8.75 6.5 8.75C6.22386 8.75 6 8.52614 6 8.25V7H4.75C4.47386 7 4.25 6.77614 4.25 6.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))},So=function(e){var t=e.color,r=void 0===t?"currentColor":t,i=o(e,["color"]);return(0,n.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),(0,n.createElement)("path",{d:"M6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10ZM6.5 11C7.56251 11 8.53901 10.6318 9.30884 10.0159L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L10.0159 9.30884C10.6318 8.53901 11 7.56251 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11ZM4.75 6C4.47386 6 4.25 6.22386 4.25 6.5C4.25 6.77614 4.47386 7 4.75 7H8.25C8.52614 7 8.75 6.77614 8.75 6.5C8.75 6.22386 8.52614 6 8.25 6H4.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}},7418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var l,a,c=o(e),s=1;s<arguments.length;s++){for(var C in l=Object(arguments[s]))r.call(l,C)&&(c[C]=l[C]);if(t){a=t(l);for(var d=0;d<a.length;d++)n.call(l,a[d])&&(c[a[d]]=l[a[d]])}}return c}},5251:(e,t,r)=>{r(7418);var n=r(6689),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,C=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(C=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:C,props:i,_owner:l.current}}t.jsx=s,t.jsxs=s},5893:(e,t,r)=>{e.exports=r(5251)},7621:(e,t,r)=>{var n;!function(o){var i=/^\s+/,l=/\s+$/,a=0,c=o.round,s=o.min,C=o.max,d=o.random;function u(e,t){if(t=t||{},(e=e||"")instanceof u)return e;if(!(this instanceof u))return new u(e,t);var r=function(e){var t,r,n,a={r:0,g:0,b:0},c=1,d=null,u=null,f=null,h=!1,p=!1;return"string"==typeof e&&(e=function(e){e=e.replace(i,"").replace(l,"").toLowerCase();var t,r=!1;if(Z[e])e=Z[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=N.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=N.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=N.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=N.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=N.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=N.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=N.hex8.exec(e))?{r:I(t[1]),g:I(t[2]),b:I(t[3]),a:T(t[4]),format:r?"name":"hex8"}:(t=N.hex6.exec(e))?{r:I(t[1]),g:I(t[2]),b:I(t[3]),format:r?"name":"hex"}:(t=N.hex4.exec(e))?{r:I(t[1]+""+t[1]),g:I(t[2]+""+t[2]),b:I(t[3]+""+t[3]),a:T(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=N.hex3.exec(e))&&{r:I(t[1]+""+t[1]),g:I(t[2]+""+t[2]),b:I(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(t=e.r,r=e.g,n=e.b,a={r:255*S(t,255),g:255*S(r,255),b:255*S(n,255)},h=!0,p="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(d=B(e.s),u=B(e.v),a=function(e,t,r){e=6*S(e,360),t=S(t,100),r=S(r,100);var n=o.floor(e),i=e-n,l=r*(1-t),a=r*(1-i*t),c=r*(1-(1-i)*t),s=n%6;return{r:255*[r,a,l,l,c,r][s],g:255*[c,r,r,a,l,l][s],b:255*[l,l,c,r,r,a][s]}}(e.h,d,u),h=!0,p="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(d=B(e.s),f=B(e.l),a=function(e,t,r){var n,o,i;function l(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=S(e,360),t=S(t,100),r=S(r,100),0===t)n=o=i=r;else{var a=r<.5?r*(1+t):r+t-r*t,c=2*r-a;n=l(c,a,e+1/3),o=l(c,a,e),i=l(c,a,e-1/3)}return{r:255*n,g:255*o,b:255*i}}(e.h,d,f),h=!0,p="hsl"),e.hasOwnProperty("a")&&(c=e.a)),c=_(c),{ok:h,format:e.format||p,r:s(255,C(a.r,0)),g:s(255,C(a.g,0)),b:s(255,C(a.b,0)),a:c}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=c(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=c(this._r)),this._g<1&&(this._g=c(this._g)),this._b<1&&(this._b=c(this._b)),this._ok=r.ok,this._tc_id=a++}function f(e,t,r){e=S(e,255),t=S(t,255),r=S(r,255);var n,o,i=C(e,t,r),l=s(e,t,r),a=(i+l)/2;if(i==l)n=o=0;else{var c=i-l;switch(o=a>.5?c/(2-i-l):c/(i+l),i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:o,l:a}}function h(e,t,r){e=S(e,255),t=S(t,255),r=S(r,255);var n,o,i=C(e,t,r),l=s(e,t,r),a=i,c=i-l;if(o=0===i?0:c/i,i==l)n=0;else{switch(i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:o,v:a}}function p(e,t,r,n){var o=[k(c(e).toString(16)),k(c(t).toString(16)),k(c(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function v(e,t,r,n){return[k(A(n)),k(c(e).toString(16)),k(c(t).toString(16)),k(c(r).toString(16))].join("")}function g(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.s-=t/100,r.s=P(r.s),u(r)}function w(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.s+=t/100,r.s=P(r.s),u(r)}function m(e){return u(e).desaturate(100)}function b(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.l+=t/100,r.l=P(r.l),u(r)}function x(e,t){t=0===t?0:t||10;var r=u(e).toRgb();return r.r=C(0,s(255,r.r-c(-t/100*255))),r.g=C(0,s(255,r.g-c(-t/100*255))),r.b=C(0,s(255,r.b-c(-t/100*255))),u(r)}function y(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.l-=t/100,r.l=P(r.l),u(r)}function L(e,t){var r=u(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,u(r)}function M(e){var t=u(e).toHsl();return t.h=(t.h+180)%360,u(t)}function O(e){var t=u(e).toHsl(),r=t.h;return[u(e),u({h:(r+120)%360,s:t.s,l:t.l}),u({h:(r+240)%360,s:t.s,l:t.l})]}function E(e){var t=u(e).toHsl(),r=t.h;return[u(e),u({h:(r+90)%360,s:t.s,l:t.l}),u({h:(r+180)%360,s:t.s,l:t.l}),u({h:(r+270)%360,s:t.s,l:t.l})]}function H(e){var t=u(e).toHsl(),r=t.h;return[u(e),u({h:(r+72)%360,s:t.s,l:t.l}),u({h:(r+216)%360,s:t.s,l:t.l})]}function j(e,t,r){t=t||6,r=r||30;var n=u(e).toHsl(),o=360/r,i=[u(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,i.push(u(n));return i}function V(e,t){t=t||6;for(var r=u(e).toHsv(),n=r.h,o=r.s,i=r.v,l=[],a=1/t;t--;)l.push(u({h:n,s:o,v:i})),i=(i+a)%1;return l}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:o.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=_(e),this._roundA=c(100*this._a)/100,this},toHsv:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=h(this._r,this._g,this._b),t=c(360*e.h),r=c(100*e.s),n=c(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=f(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=f(this._r,this._g,this._b),t=c(360*e.h),r=c(100*e.s),n=c(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return p(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,o){var i=[k(c(e).toString(16)),k(c(t).toString(16)),k(c(r).toString(16)),k(A(n))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:c(this._r),g:c(this._g),b:c(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+c(this._r)+", "+c(this._g)+", "+c(this._b)+")":"rgba("+c(this._r)+", "+c(this._g)+", "+c(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:c(100*S(this._r,255))+"%",g:c(100*S(this._g,255))+"%",b:c(100*S(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+c(100*S(this._r,255))+"%, "+c(100*S(this._g,255))+"%, "+c(100*S(this._b,255))+"%)":"rgba("+c(100*S(this._r,255))+"%, "+c(100*S(this._g,255))+"%, "+c(100*S(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(R[p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+v(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=u(e);r="#"+v(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return u(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(m,arguments)},spin:function(){return this._applyModification(L,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(M,arguments)},monochromatic:function(){return this._applyCombination(V,arguments)},splitcomplement:function(){return this._applyCombination(H,arguments)},triad:function(){return this._applyCombination(O,arguments)},tetrad:function(){return this._applyCombination(E,arguments)}},u.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:B(e[n]));e=r}return u(e,t)},u.equals=function(e,t){return!(!e||!t)&&u(e).toRgbString()==u(t).toRgbString()},u.random=function(){return u.fromRatio({r:d(),g:d(),b:d()})},u.mix=function(e,t,r){r=0===r?0:r||50;var n=u(e).toRgb(),o=u(t).toRgb(),i=r/100;return u({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},u.readability=function(e,t){var r=u(e),n=u(t);return(o.max(r.getLuminance(),n.getLuminance())+.05)/(o.min(r.getLuminance(),n.getLuminance())+.05)},u.isReadable=function(e,t,r){var n,o,i,l,a,c=u.readability(e,t);switch(o=!1,(i=r,"AA"!==(l=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==l&&(l="AA"),"small"!==(a=(i.size||"small").toLowerCase())&&"large"!==a&&(a="small"),n={level:l,size:a}).level+n.size){case"AAsmall":case"AAAlarge":o=c>=4.5;break;case"AAlarge":o=c>=3;break;case"AAAsmall":o=c>=7}return o},u.mostReadable=function(e,t,r){var n,o,i,l,a=null,c=0;o=(r=r||{}).includeFallbackColors,i=r.level,l=r.size;for(var s=0;s<t.length;s++)(n=u.readability(e,t[s]))>c&&(c=n,a=u(t[s]));return u.isReadable(e,a,{level:i,size:l})||!o?a:(r.includeFallbackColors=!1,u.mostReadable(e,["#fff","#000"],r))};var Z=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=u.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(Z);function _(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function S(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=s(t,C(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),o.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function P(e){return s(1,C(0,e))}function I(e){return parseInt(e,16)}function k(e){return 1==e.length?"0"+e:""+e}function B(e){return e<=1&&(e=100*e+"%"),e}function A(e){return o.round(255*parseFloat(e)).toString(16)}function T(e){return I(e)/255}var $,F,D,N=(F="[\\s|\\(]+("+($="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+$+")[,|\\s]+("+$+")\\s*\\)?",D="[\\s|\\(]+("+$+")[,|\\s]+("+$+")[,|\\s]+("+$+")[,|\\s]+("+$+")\\s*\\)?",{CSS_UNIT:new RegExp($),rgb:new RegExp("rgb"+F),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+F),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+F),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function z(e){return!!N.CSS_UNIT.exec(e)}e.exports?e.exports=u:void 0===(n=function(){return u}.call(t,r,t,e))||(e.exports=n)}(Math)},4249:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonTextOnly=t.ButtonSecondary=t.ButtonPrimary=t.Button=void 0;const i=r(5893),l=o(r(7518)),a=r(1335),c=r(575),s=r(6126);t.Button=e=>{var{label:t,children:r,size:o="base",shape:l="square",kind:a="primary",layout:c="fit",href:s}=e,u=n(e,["label","children","size","shape","kind","layout","href"]);return(0,i.jsx)(C,Object.assign({as:s?"a":"button",size:o,shape:l,kind:a,layout:c},u,{children:t?(0,i.jsx)(d,Object.assign({alignItems:"center",justifyContent:"center"},{children:t})):r}))};const C=l.default.button`
  /* Default values that get overridden by variants */
  background: ${({theme:e})=>e.palette.inputBackground};
  border: 1px solid ${({theme:e})=>e.palette.inputBackground};
  color: ${({theme:e})=>e.palette.brandPrimaryText};

  /* Inject variants */
  ${(0,c.getVariantCSS)(s.variants,s.Variant.size)}
  ${(0,c.getVariantCSS)(s.variants,s.Variant.shape)}
  ${(0,c.getVariantCSS)(s.variants,s.Variant.kind)}
  ${(0,c.getVariantCSS)(s.variants,s.Variant.layout)}

  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.px.small};
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  line-height: ${({theme:e})=>e.lineHeight.ui};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  transition: border-color var(--openfin-ui-globalTransition);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled,
  &:active:disabled {
    background: ${({theme:e})=>e.palette.inputDisabled};
    border-color: ${({theme:e})=>e.palette.inputDisabled};
    color: ${({theme:e})=>e.palette.inputPlaceholder};
    cursor: not-allowed;
  }
`,d=(0,l.default)(a.Box)`
  padding: ${({theme:e})=>`0 ${e.px.xsmall}`};
`;t.ButtonPrimary=e=>(0,i.jsx)(t.Button,Object.assign({},e,{kind:"primary"})),t.ButtonSecondary=e=>(0,i.jsx)(t.Button,Object.assign({},e,{kind:"secondary"})),t.ButtonTextOnly=e=>(0,i.jsx)(t.Button,Object.assign({},e,{kind:"textOnly"}))},6126:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.variants=t.ButtonShape=t.ButtonLayout=t.ButtonSize=t.ButtonKind=t.Variant=void 0;const n=r(7518);t.Variant={shape:"shape",size:"size",kind:"kind",layout:"layout"},t.ButtonKind={primary:"primary",secondary:"secondary",textOnly:"textOnly"},t.ButtonSize={small:"small",base:"base",large:"large"},t.ButtonLayout={fit:"fit",full:"full"},t.ButtonShape={square:"square",pill:"pill"},t.variants={[t.Variant.size]:{[t.ButtonSize.base]:n.css`
      padding: ${({theme:e})=>`${e.px.small} ${e.px.large}`};
      font-size: ${({theme:e})=>e.fontSize.base};
    `,[t.ButtonSize.small]:n.css`
      padding: ${({theme:e})=>`${e.px.xsmall} ${e.px.base}`};
      font-size: ${({theme:e})=>e.fontSize.small};
    `,[t.ButtonSize.large]:n.css`
      padding: ${({theme:e})=>`${e.px.base} ${e.px.xlarge}`};
      font-size: ${({theme:e})=>e.fontSize.large};
    `},[t.Variant.shape]:{[t.ButtonShape.square]:n.css`
      border-radius: ${({theme:e})=>e.radius.small};
    `,[t.ButtonShape.pill]:n.css`
      border-radius: ${({theme:e})=>e.radius.pill};
    `},[t.Variant.layout]:{[t.ButtonLayout.fit]:n.css`
      width: fit-content;
    `,[t.ButtonLayout.full]:n.css`
      width: 100%;
    `},[t.Variant.kind]:{[t.ButtonKind.primary]:n.css`
      background: ${({theme:e})=>e.palette.brandPrimary};
      border-color: ${({theme:e})=>e.palette.brandPrimary};

      &:hover {
        background: ${({theme:e})=>e.palette.brandPrimaryHover};
      }

      &:active {
        background: ${({theme:e})=>e.palette.brandPrimaryActive};
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.brandPrimaryFocused};
      }
    `,[t.ButtonKind.secondary]:n.css`
      background: ${({theme:e})=>e.palette.brandSecondary};
      border-color: ${({theme:e})=>e.palette.brandSecondary};
      color: ${({theme:e})=>e.palette.brandSecondaryText};

      &:hover {
        background: ${({theme:e})=>e.palette.brandSecondaryHover};
      }

      &:active {
        background: ${({theme:e})=>e.palette.brandSecondaryActive};
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.brandSecondaryFocused};
      }
    `,[t.ButtonKind.textOnly]:n.css`
      background: transparent;
      border-color: transparent;
      color: ${({theme:e})=>e.palette.textDefault};

      &:active {
        opacity: 0.8;
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.inputFocused};
      }
    `}}},4130:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(4249),t),o(r(6126),t)},2609:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(5971),t)},5971:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const i=r(5893),l=r(6689),a=o(r(7518)),c=r(8510),s=r(1335);t.Toggle=e=>{var{id:t,label:r,onChange:o,labelSide:a="right",type:c="checkbox"}=e,s=n(e,["id","label","onChange","labelSide","type"]);const[p,v]=(0,l.useState)(s.checked);return(0,l.useEffect)((()=>{v(s.checked)}),[s.checked]),(0,i.jsxs)(C,Object.assign({labelSide:a},{children:[r?(0,i.jsx)(h,Object.assign({htmlFor:t},{children:r})):void 0,(0,i.jsxs)(d,Object.assign({isChecked:p},{children:[(0,i.jsx)(f,Object.assign({},s,{id:t,type:c,onChange:e=>{v(e.target.checked),null==o||o(e)}})),(0,i.jsx)(u,{tabIndex:-1,"aria-hidden":"true",isChecked:p})]}))]}))};const C=a.default.div`
  display: flex;
  gap: ${({theme:e})=>e.px.xlarge};
  flex-direction: ${({labelSide:e})=>"left"===e?"row":"row-reverse"};
  line-height: ${({theme:e})=>e.px.xlarge};
`,d=(0,a.default)(s.Box)`
  --px-toggle: ${({theme:e})=>e.px.xlarge};
  --px-knob: ${({theme:e})=>e.px.base};

  position: relative;
  height: var(--px-toggle);
  width: calc(2 * var(--px-toggle));
  border: 1px solid
    ${({isChecked:e,theme:t})=>e?t.palette.brandPrimary:t.palette.background6};
  border-radius: calc(0.5 * var(--px-toggle));

  background: ${({isChecked:e,theme:t})=>e?t.palette.brandPrimary:t.palette.background6};
  transition: background var(--openfin-ui-globalTransition),
    border-color var(---openfin-ui-globalTransition);

  &:focus-within {
    border-color: ${({theme:e})=>e.palette.inputFocused};
  }
`,u=a.default.button`
  position: absolute;
  width: var(--px-knob);
  height: var(--px-knob);
  top: 50%;
  left: ${({theme:e})=>e.px.xsmall};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${({isChecked:e,theme:t})=>e?t.palette.brandPrimaryText:t.palette.inputColor};
  border: none;
  outline: none;
  transition: left var(--openfin-ui-globalTransition), background var(--openfin-ui-globalTransition);
  pointer-events: none; /* Allow pass-thru for native input */
`,f=(0,a.default)(c.RawInput)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  outline: none;
  appearance: none;
  display: block;

  &:checked + ${u} {
    left: calc(100% - ${({theme:e})=>e.px.large});
  }
  &:disabled + ${u} {
    background: ${({theme:e})=>e.palette.inputDisabled};
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`,h=a.default.label``},5300:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;const i=r(5893),l=o(r(7518)),a=r(1335);t.Badge=e=>{var{count:t=0,max:r}=e,o=n(e,["count","max"]);let l=t.toString();return r&&t>r&&(l=`${r}+`),(0,i.jsx)(c,Object.assign({},o,{children:l}))};const c=(0,l.default)(a.Box)`
  background: ${({theme:e})=>e.palette.statusCritical};
  border-radius: ${({theme:e})=>e.radius.pill};
  color: ${({theme:e})=>e._color.white};
  font-size: ${({theme:e})=>e.fontSize.small};
  min-width: ${({theme:e})=>e.px.xlarge};
  padding: 2px 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({theme:e})=>e.shadow.base};
`},3136:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(5300),t)},7006:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;const i=r(5893),l=o(r(7518)),a=r(1335),c=r(9507),s=r(3471),C=r(9669);t.Icon=(0,l.default)((e=>{var{icon:t,children:r,size:o="base",containerSize:l}=e,a=n(e,["icon","children","size","containerSize"]);return(0,i.jsx)(u,Object.assign({},a,{iconSize:o,containerSize:l||o,justifyContent:"center",alignItems:"center"},{children:t?(0,i.jsx)(d,{ariaLabel:a["aria-label"],icon:t}):r}))}))``;const d=(0,l.default)((e=>{var{icon:t,ariaLabel:r}=e,o=n(e,["icon","ariaLabel"]);const l=s.IconSet[t];return(0,i.jsx)(l,Object.assign({role:"img","aria-label":r},o))}))``,u=(0,l.default)(a.Box)`
  /**
   * 1. Initialize local variables with reasonable defaults
   */
  --px-default: ${({theme:e})=>e.iconSize.base};

  /**
   * 2. Inject variants -- ? What are Variants
   */
  ${(0,c.getVariantCSS)(C.variants,C.Variant.containerSize)}
  ${(0,c.getVariantCSS)(C.variants,C.Variant.iconSize)}

  width: var(--px-container, var(--px-default));
  height: var(--px-container, var(--px-default));

  /* SVG Asset */
  & > *,
  ${d} {
    display: block;
    width: var(--px-icon, var(--px-default));
    height: var(--px-icon, var(--px-default));
    border-radius: inherit;
  }
`},9669:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.variants=t.Variant=void 0;const n=r(7518);t.Variant={iconSize:"iconSize",containerSize:"containerSize"},t.variants={[t.Variant.iconSize]:{xsmall:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.xsmall};
    `,small:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.small};
    `,base:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.base};
    `,large:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.large};
    `,xlarge:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.xlarge};
    `,xxlarge:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.xxlarge};
    `,xxxlarge:n.css`
      --px-icon: ${({theme:e})=>e.iconSize.xxxlarge};
    `},[t.Variant.containerSize]:{xsmall:n.css`
      --px-container: ${({theme:e})=>e.iconSize.xsmall};
    `,small:n.css`
      --px-container: ${({theme:e})=>e.iconSize.small};
    `,base:n.css`
      --px-container: ${({theme:e})=>e.iconSize.base};
    `,large:n.css`
      --px-container: ${({theme:e})=>e.iconSize.large};
    `,xlarge:n.css`
      --px-container: ${({theme:e})=>e.iconSize.xlarge};
    `,xxlarge:n.css`
      --px-container: ${({theme:e})=>e.iconSize.xxlarge};
    `,xxxlarge:n.css`
      --px-container: ${({theme:e})=>e.iconSize.xxxlarge};
    `}}},9634:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(7006),t)},9285:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.BellFilledIcon=void 0;const o=r(5893);t.BellFilledIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C11.2296 2 10.5845 2.58379 10.5078 3.35041C10.4952 3.47677 10.4057 3.58157 10.2846 3.61971C8.06554 4.31851 6.42238 6.33796 6.30033 8.77893L6.12382 12.3091C6.09936 12.7982 5.81331 13.2362 5.3753 13.4552L4.60739 13.8392C4.14761 14.0691 3.85718 14.539 3.85718 15.0531V16.25C3.85718 16.6248 4.16098 16.9286 4.53575 16.9286H19.4643C19.8391 16.9286 20.1429 16.6248 20.1429 16.25V15.0531C20.1429 14.539 19.8525 14.0691 19.3927 13.8392L18.6247 13.4552C18.1867 13.2362 17.9006 12.7982 17.8762 12.3091L17.6997 8.77893C17.5776 6.33796 15.9344 4.31851 13.7154 3.61972C13.5942 3.58157 13.5048 3.47678 13.4922 3.35041C13.4155 2.5838 12.7704 2 12 2Z",fill:t}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.28571 18.2857C9.28571 19.7848 10.5009 21 12 21C13.4991 21 14.7143 19.7848 14.7143 18.2857L9.28571 18.2857Z",fill:t})]}))}},4718:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.BellIcon=void 0;const o=r(5893);t.BellIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.47306 1.22943C6.5193 1.22943 5.87291 1.98399 5.65371 2.72697C5.65207 2.72932 5.64921 2.73303 5.64485 2.73756C5.6392 2.74342 5.63264 2.74896 5.62599 2.75355C5.61926 2.75819 5.61452 2.7604 5.613 2.76102L5.61265 2.76117C5.05088 2.99251 4.39193 3.36022 3.87697 4.03357C3.35815 4.71196 3.01949 5.65571 3.01945 6.97749L5.65371 2.72697L3.01945 6.97776C3.01866 8.30165 2.87871 9.0313 2.67091 9.53439C2.48879 9.97531 2.24889 10.2658 1.912 10.6738L1.91185 10.674C1.86263 10.7336 1.81135 10.7957 1.75787 10.8612C1.14923 11.606 1.72729 12.6419 2.65986 12.6419H5.09019C5.21191 12.98 5.40726 13.2906 5.66618 13.5495C6.12827 14.0116 6.75499 14.2712 7.40848 14.2712C8.06197 14.2712 8.6887 14.0116 9.15078 13.5495C9.40971 13.2906 9.60505 12.98 9.72678 12.6419H12.2894C13.2234 12.6419 13.792 11.6008 13.1884 10.8613L13.1883 10.8612C13.1348 10.7957 13.0835 10.7336 13.0342 10.674C12.6973 10.2659 12.4574 9.9754 12.2755 9.53451C12.0678 9.03147 11.9282 8.30182 11.9282 6.97776C11.9282 5.65688 11.5891 4.71299 11.0703 4.03433C10.5553 3.36075 9.89652 2.99234 9.33499 2.76115L9.33467 2.76102C9.33409 2.76079 9.32982 2.75888 9.32313 2.75424C9.31655 2.74967 9.30981 2.74394 9.30382 2.7377C9.29875 2.73241 9.29545 2.72803 9.29363 2.72531C9.07264 1.98378 8.42691 1.22943 7.47306 1.22943ZM8.68654 12.6419H6.13042C6.1876 12.7295 6.25403 12.8115 6.3291 12.8866C6.61537 13.1729 7.00363 13.3337 7.40848 13.3337C7.81333 13.3337 8.2016 13.1729 8.48787 12.8866C8.56293 12.8115 8.62937 12.7295 8.68654 12.6419ZM6.55145 2.99716C6.69571 2.50085 7.07121 2.16693 7.47306 2.16693C7.87492 2.16693 8.2505 2.50061 8.3966 2.99785L8.39695 2.99904C8.48499 3.29575 8.72843 3.52538 8.97809 3.62806C9.45625 3.82492 9.94894 4.11119 10.3255 4.60373C10.6982 5.09119 10.9907 5.82486 10.9907 6.97776C10.9907 8.35506 11.1337 9.2255 11.4089 9.89217C11.6483 10.4723 11.9823 10.8749 12.3167 11.278C12.3653 11.3366 12.4139 11.3951 12.4622 11.4542C12.5016 11.5025 12.5046 11.5552 12.4793 11.605C12.4553 11.6524 12.3996 11.7044 12.2894 11.7044H2.65986C2.54604 11.7044 2.48955 11.6509 2.46588 11.6045C2.44119 11.5562 2.44325 11.504 2.4838 11.4544L2.48383 11.4544C2.53215 11.3952 2.58075 11.3366 2.62934 11.2781L2.62946 11.2779C2.96389 10.8748 3.29785 10.4723 3.5374 9.89229C3.81273 9.22571 3.95615 8.35533 3.95695 6.97803V6.97776C3.95695 5.82341 4.24928 5.08999 4.62165 4.60309C4.99792 4.1111 5.49044 3.82537 5.96963 3.62805C6.21661 3.52645 6.46257 3.30002 6.55111 2.99833L6.55145 2.99716Z",fill:t,role:"img"})}))}},8265:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokenLinkIcon=void 0;const o=r(5893);t.BrokenLinkIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.3335 3.7002C6.05735 3.7002 5.8335 3.92405 5.8335 4.2002V27.8002C5.8335 28.0763 6.05735 28.3002 6.3335 28.3002H25.6668C25.943 28.3002 26.1668 28.0763 26.1668 27.8002V12.2335H18.1335C17.8574 12.2335 17.6335 12.0097 17.6335 11.7335V3.7002H6.3335ZM18.6335 4.4073L25.4597 11.2335H18.6335V4.4073ZM4.8335 4.2002C4.8335 3.37177 5.50507 2.7002 6.3335 2.7002H18.1335C18.2661 2.7002 18.3933 2.75287 18.487 2.84664L27.0204 11.38C27.1141 11.4737 27.1668 11.6009 27.1668 11.7335V27.8002C27.1668 28.6286 26.4953 29.3002 25.6668 29.3002H6.3335C5.50507 29.3002 4.8335 28.6286 4.8335 27.8002V4.2002Z",fill:t}),(0,o.jsx)("path",{d:"M14.248 21.9084V21.8409C14.2528 21.4006 14.2966 21.0502 14.3794 20.7898C14.4647 20.5294 14.5854 20.3187 14.7417 20.1577C14.8979 19.9967 15.0861 19.8499 15.3063 19.7173C15.4483 19.6274 15.5762 19.5268 15.6898 19.4155C15.8034 19.3042 15.8934 19.1764 15.9597 19.032C16.026 18.8875 16.0591 18.7277 16.0591 18.5526C16.0591 18.3419 16.0094 18.1596 15.91 18.0057C15.8105 17.8518 15.678 17.7334 15.5123 17.6506C15.3489 17.5653 15.1666 17.5227 14.9654 17.5227C14.7831 17.5227 14.6091 17.5606 14.4434 17.6364C14.2776 17.7121 14.1403 17.8305 14.0314 17.9915C13.9225 18.1501 13.8598 18.3549 13.8432 18.6058H12.7637C12.7802 18.1797 12.888 17.8198 13.0868 17.5263C13.2857 17.2304 13.5485 17.0066 13.8752 16.8551C14.2042 16.7036 14.5676 16.6278 14.9654 16.6278C15.401 16.6278 15.7821 16.7095 16.1088 16.8729C16.4355 17.0339 16.6889 17.2599 16.8688 17.5511C17.0511 17.84 17.1422 18.1773 17.1422 18.5632C17.1422 18.8284 17.1008 19.0675 17.0179 19.2805C16.9351 19.4912 16.8167 19.6795 16.6628 19.8452C16.5113 20.0109 16.329 20.1577 16.1159 20.2855C15.9147 20.411 15.7514 20.5412 15.6259 20.6761C15.5028 20.8111 15.4128 20.9709 15.356 21.1555C15.2992 21.3402 15.2684 21.5687 15.2637 21.8409V21.9084H14.248ZM14.7843 24.0675C14.5901 24.0675 14.4232 23.9988 14.2836 23.8615C14.1439 23.7218 14.074 23.5537 14.074 23.3572C14.074 23.1631 14.1439 22.9974 14.2836 22.8601C14.4232 22.7204 14.5901 22.6506 14.7843 22.6506C14.976 22.6506 15.1417 22.7204 15.2814 22.8601C15.4235 22.9974 15.4945 23.1631 15.4945 23.3572C15.4945 23.4875 15.4614 23.607 15.3951 23.7159C15.3311 23.8224 15.2459 23.9077 15.1394 23.9716C15.0328 24.0355 14.9145 24.0675 14.7843 24.0675Z",fill:t})]}))}},6447:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronDownIcon=void 0;const o=r(5893);t.ChevronDownIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},{children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M5.05282 9.88707C5.33612 9.58489 5.81075 9.56958 6.11293 9.85287L12 15.372L17.887 9.85287C18.1892 9.56958 18.6638 9.58489 18.9471 9.88707C19.2304 10.1893 19.2151 10.6639 18.9129 10.9472L12.5129 16.9472C12.2244 17.2176 11.7755 17.2176 11.487 16.9472L5.08702 10.9472C4.78484 10.6639 4.76952 10.1893 5.05282 9.88707Z",fill:t},r))}))}},2147:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronLeftIcon=void 0;const o=r(5893);t.ChevronLeftIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},{children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M14.1127 5.05272C14.4149 5.33601 14.4302 5.81064 14.1469 6.11282L8.62784 11.9999L14.1469 17.8869C14.4302 18.1891 14.4149 18.6637 14.1127 18.947C13.8106 19.2303 13.3359 19.215 13.0526 18.9128L7.05264 12.5128C6.78218 12.2243 6.78218 11.7754 7.05264 11.4869L13.0526 5.08691C13.3359 4.78473 13.8106 4.76942 14.1127 5.05272Z",fill:t},r))}))}},2402:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronRightIcon=void 0;const o=r(5893);t.ChevronRightIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},{children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M9.86986 6.66972C10.1628 6.37683 10.6376 6.37683 10.9305 6.66972L15.7305 11.4697C15.8712 11.6104 15.9502 11.8011 15.9502 12C15.9502 12.199 15.8712 12.3897 15.7305 12.5304L10.9305 17.3304C10.6376 17.6233 10.1628 17.6233 9.86986 17.3304C9.57696 17.0375 9.57696 16.5626 9.86986 16.2697L14.1395 12L9.86986 7.73038C9.57696 7.43749 9.57696 6.96261 9.86986 6.66972Z",fill:t},r))}))}},4825:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronUpIcon=void 0;const o=r(5893);t.ChevronUpIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},{children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M5.05285 14.1129C5.33615 14.4151 5.81078 14.4304 6.11296 14.1471L12 8.62802L17.887 14.1471C18.1892 14.4304 18.6639 14.4151 18.9472 14.1129C19.2305 13.8107 19.2151 13.3361 18.913 13.0528L12.513 7.05282C12.2245 6.78236 11.7755 6.78236 11.4871 7.05282L5.08705 13.0528C4.78487 13.3361 4.76956 13.8107 5.05285 14.1129Z",fill:t},r))}))}},6795:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FilterIcon=void 0;const o=r(5893);t.FilterIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M4 6.5C4 6.36739 4.05268 6.24021 4.14645 6.14645C4.24021 6.05268 4.36739 6 4.5 6H7.5C7.63261 6 7.75979 6.05268 7.85355 6.14645C7.94732 6.24021 8 6.36739 8 6.5C8 6.63261 7.94732 6.75979 7.85355 6.85355C7.75979 6.94732 7.63261 7 7.5 7H4.5C4.36739 7 4.24021 6.94732 4.14645 6.85355C4.05268 6.75979 4 6.63261 4 6.5ZM2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H9.5C9.63261 3 9.75979 3.05268 9.85355 3.14645C9.94732 3.24021 10 3.36739 10 3.5C10 3.63261 9.94732 3.75979 9.85355 3.85355C9.75979 3.94732 9.63261 4 9.5 4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5ZM0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947321 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5Z",fill:t})}))}},117:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FloppyDiskIcon=void 0;const o=r(5893);t.FloppyDiskIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M1.875 2.1875C1.875 2.15298 1.90298 2.125 1.9375 2.125H8.23039C8.24697 2.125 8.26287 2.13158 8.27459 2.14331L9.98169 3.85041C9.99341 3.86213 10 3.87803 10 3.89461V10.1875C10 10.222 9.97202 10.25 9.9375 10.25H1.9375C1.90298 10.25 1.875 10.222 1.875 10.1875V2.1875ZM1.9375 1.25C1.41973 1.25 1 1.66973 1 2.1875V10.1875C1 10.7053 1.41973 11.125 1.9375 11.125H9.9375C10.4553 11.125 10.875 10.7053 10.875 10.1875V3.89461C10.875 3.64597 10.7762 3.40751 10.6004 3.23169L8.89331 1.52459C8.71749 1.34877 8.47903 1.25 8.23039 1.25H1.9375ZM2.84924 3.4081C2.84924 3.23754 2.98751 3.09927 3.15807 3.09927H7.4816C7.65215 3.09927 7.79042 3.23754 7.79042 3.4081V4.64339C7.79042 4.81395 7.65215 4.95221 7.4816 4.95221H3.15807C2.98751 4.95221 2.84924 4.81395 2.84924 4.64339V3.4081ZM4.5368 6.63977C4.82638 6.35019 5.21913 6.18751 5.62865 6.18751C6.03818 6.18751 6.43093 6.35019 6.72051 6.63977C7.01009 6.92935 7.17277 7.3221 7.17277 7.73163C7.17277 8.14115 7.01009 8.5339 6.72051 8.82348C6.43093 9.11306 6.03818 9.27574 5.62865 9.27574C5.21913 9.27574 4.82638 9.11306 4.5368 8.82348C4.24722 8.5339 4.08454 8.14115 4.08454 7.73163C4.08454 7.3221 4.24722 6.92935 4.5368 6.63977Z",fill:t,role:"img"})}))}},529:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FragmentsIcon=void 0;const o=r(5893);t.FragmentsIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M8.80001 4.80002H4.80001C3.91761 4.80002 3.20001 5.51762 3.20001 6.40002V10.4C3.20001 11.2824 3.91761 12 4.80001 12H8.80001C9.68241 12 10.4 11.2824 10.4 10.4V6.40002C10.4 5.51762 9.68241 4.80002 8.80001 4.80002ZM20.3592 6.46882L17.5312 3.64002C16.908 3.01602 15.892 3.01602 15.2688 3.64002L12.4408 6.46882C11.8168 7.09282 11.8168 8.10722 12.4408 8.73122L15.2688 11.56C15.5808 11.872 15.9904 12.028 16.4 12.028C16.8096 12.028 17.2192 11.872 17.5312 11.56L20.3592 8.73122C20.9832 8.10722 20.9832 7.09282 20.3592 6.46882ZM8.80001 13.6H4.80001C3.91761 13.6 3.20001 14.3176 3.20001 15.2V19.2C3.20001 20.0824 3.91761 20.8 4.80001 20.8H8.80001C9.68241 20.8 10.4 20.0824 10.4 19.2V15.2C10.4 14.3176 9.68241 13.6 8.80001 13.6ZM17.6 13.6H13.6C12.7176 13.6 12 14.3176 12 15.2V19.2C12 20.0824 12.7176 20.8 13.6 20.8H17.6C18.4824 20.8 19.2 20.0824 19.2 19.2V15.2C19.2 14.3176 18.4824 13.6 17.6 13.6Z",fill:t})}))}},7788:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.LightBulbFilledIcon=void 0;const o=r(5893);t.LightBulbFilledIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:[(0,o.jsx)("path",{d:"M1.83 1.31008C2.24409 0.891667 2.73768 0.560307 3.28174 0.335504C3.82581 0.110701 4.40934 -0.00300333 4.998 0.00108291C6.18628 -0.00310785 7.32905 0.457733 8.182 1.28508C8.59881 1.68719 8.93046 2.16903 9.15723 2.70194C9.384 3.23485 9.50125 3.80793 9.502 4.38708C9.502 5.68008 8.917 6.83008 7.883 7.82508L7.577 9.00008H2.466L2.236 8.03708C1.154 6.90708 0.556 5.81908 0.5 4.58208V4.54408C0.54 3.24808 1.033 2.12108 1.831 1.31108L1.83 1.31008Z",fill:t}),(0,o.jsx)("path",{d:"M2.7041 10L2.9371 10.978L2.9451 11C3.0451 11.297 3.2371 11.544 3.4791 11.717C3.7301 11.897 4.0371 11.999 4.3611 11.999H4.3631L5.7461 11.995L5.7671 11.993C6.07587 11.9669 6.36913 11.8465 6.6071 11.648C6.8381 11.454 7.0131 11.188 7.0871 10.874L7.3161 10H2.7041V10Z",fill:t})]}))}},3703:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.LightBulbOutlinedIcon=void 0;const o=r(5893);t.LightBulbOutlinedIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M4.99766 0.00100149C3.76866 0.00100149 2.64766 0.482002 1.82966 1.311C1.03166 2.121 0.539657 3.248 0.499657 4.544L0.498657 4.563V4.583C0.555657 5.819 1.15366 6.907 2.23566 8.037L2.93766 10.978L2.94466 11C3.04466 11.297 3.23666 11.544 3.47866 11.717C3.72966 11.897 4.03666 11.999 4.36166 11.999L5.74566 11.995L5.76666 11.993C6.07542 11.9669 6.36869 11.8465 6.60666 11.648C6.83766 11.454 7.01266 11.188 7.08666 10.874L7.88266 7.824C8.91666 6.83 9.50066 5.68 9.50066 4.387C9.49991 3.80785 9.38266 3.23477 9.15589 2.70186C8.92912 2.16895 8.59746 1.68711 8.18066 1.285C7.32796 0.457894 6.18559 -0.00292788 4.99766 0.00100149ZM2.54266 2.013C2.86344 1.68871 3.24596 1.43198 3.66762 1.258C4.08928 1.08401 4.54153 0.996283 4.99766 1C5.92514 0.995784 6.81744 1.35471 7.48366 2C7.80471 2.30904 8.06023 2.67957 8.23496 3.08951C8.40969 3.49945 8.50005 3.94038 8.50066 4.386C8.50066 5.377 8.04766 6.312 7.09666 7.191L6.98866 7.291L6.54266 9H3.49366L3.14466 7.536L3.04766 7.436C1.99966 6.372 1.54766 5.48 1.49866 4.557C1.53666 3.509 1.93266 2.632 2.54266 2.014V2.013ZM3.73266 10H6.28266L6.11766 10.627L6.11466 10.64C6.09211 10.7342 6.03944 10.8185 5.96466 10.88C5.88873 10.9435 5.79595 10.9834 5.69766 10.995L4.36066 11C4.25321 11.0003 4.14833 10.9671 4.06066 10.905C3.9877 10.8536 3.93139 10.782 3.89866 10.699L3.73166 10H3.73266Z",fill:t})}))}},8311:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.LockedClosedFilledIcon=void 0;const o=r(5893);t.LockedClosedFilledIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M5.00003 4.63623C5.00003 3.76052 5.24222 3.10561 5.64327 2.67378C6.03938 2.24727 6.64585 1.97852 7.50143 1.97852C8.35748 1.97852 8.96309 2.24673 9.35827 2.6723C9.75841 3.10321 10 3.75729 10 4.63346V6.50021H11V4.63346C11 3.57917 10.7076 2.65578 10.0911 1.99183C9.46955 1.32254 8.57586 0.978516 7.50143 0.978516C6.42678 0.978516 5.53255 1.3235 4.91052 1.99328C4.29342 2.65775 4.00003 3.58169 4.00003 4.63623V6.50021H5.00003V4.63623ZM3 6.50021C2.72386 6.50021 2.5 6.72407 2.5 7.00021V13.0002C2.5 13.2764 2.72386 13.5002 3 13.5002H12C12.2761 13.5002 12.5 13.2764 12.5 13.0002V7.00021C12.5 6.72407 12.2761 6.50021 12 6.50021H3Z",fill:t,role:"img"})}))}},5729:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.MinimizeIcon=void 0;const o=r(5893);t.MinimizeIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.16602 12C2.16602 11.7239 2.38987 11.5 2.66602 11.5H13.3327C13.6088 11.5 13.8327 11.7239 13.8327 12C13.8327 12.2761 13.6088 12.5 13.3327 12.5H2.66602C2.38987 12.5 2.16602 12.2761 2.16602 12Z",fill:t,role:"img"})}))}},379:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.OpenFinIcon=void 0;const o=r(5893);t.OpenFinIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M14.2685 5.73916C14.1785 5.64906 14.0817 5.56592 13.979 5.49047L13.9412 5.46429C13.9196 5.44919 13.8984 5.43358 13.8763 5.41898C13.8541 5.40438 13.8284 5.38878 13.8048 5.37418L13.7715 5.35354C13.7418 5.33592 13.7116 5.3193 13.6814 5.30319L13.6638 5.29363C13.3065 5.10618 12.9091 5.00807 12.5057 5.00768C11.8417 5.00715 11.2052 4.74291 10.7362 4.2731C10.2671 3.8033 10.004 3.16642 10.0046 2.50262C10.0065 1.49222 9.39933 0.580219 8.46634 0.191911C7.53335 -0.196397 6.45826 0.015466 5.74244 0.728701C5.02661 1.44194 4.81103 2.51607 5.19621 3.4502C5.5814 4.38433 6.4915 4.99447 7.5021 4.9961C8.16603 4.99664 8.80256 5.26088 9.27161 5.73068C9.74066 6.20049 10.0038 6.83736 10.0031 7.50117C10.0026 8.16497 9.7383 8.80137 9.2684 9.27032C8.7985 9.73928 8.1615 10.0024 7.49756 10.0017C6.83413 10.0022 6.19772 9.73894 5.72865 9.26987C5.25958 8.8008 4.99636 8.16447 4.99703 7.50117C4.99703 6.12155 3.87841 5.00315 2.49852 5.00315C1.11862 5.00315 0 6.12155 0 7.50117C0 8.88078 1.11862 9.99918 2.49852 9.99918C3.87841 9.99918 4.99703 11.1176 4.99703 12.4972C4.99703 13.8795 6.1178 15 7.50033 15C8.88287 15 10.0036 13.8795 10.0036 12.4972C10.0036 11.1176 11.1223 9.99918 12.5021 9.99918C12.9482 9.99948 13.3862 9.88022 13.7705 9.65383C13.8038 9.6342 13.8365 9.61356 13.8712 9.59241L13.8783 9.58788C13.9085 9.56775 13.9387 9.5466 13.9679 9.52546L13.981 9.5164C14.0072 9.49727 14.0314 9.47662 14.0591 9.45598L14.0812 9.43887C14.1054 9.41923 14.1286 9.39859 14.1522 9.37795L14.1779 9.3558C14.2081 9.32862 14.2378 9.30042 14.267 9.27123L14.2716 9.2672C14.3794 9.15887 14.4772 9.04091 14.5636 8.9148C14.5824 8.88761 14.6005 8.86009 14.618 8.83223C15.237 7.84584 15.092 6.56267 14.2685 5.73916Z",fill:t,role:"img"})}))}},1539:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.StackIcon=void 0;const o=r(5893);t.StackIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M14.2178 3.00092C14.1504 3.00514 14.0839 3.01844 14.02 3.04047L3.51986 6.4287C3.36864 6.47743 3.23681 6.57291 3.14335 6.70138C3.04989 6.82986 2.99964 6.98469 2.99983 7.14356V15.754C2.99843 15.8534 3.01679 15.9521 3.05385 16.0443C3.09091 16.1366 3.14593 16.2205 3.21571 16.2913C3.2855 16.3621 3.36865 16.4183 3.46035 16.4566C3.55204 16.495 3.65045 16.5147 3.74984 16.5147C3.84924 16.5147 3.94764 16.495 4.03934 16.4566C4.13103 16.4183 4.21419 16.3621 4.28397 16.2913C4.35375 16.2205 4.40878 16.1366 4.44584 16.0443C4.4829 15.9521 4.50126 15.8534 4.49985 15.754V7.68849L14.48 4.46725C14.649 4.41529 14.7942 4.30532 14.89 4.15674C14.9858 4.00815 15.026 3.8305 15.0036 3.65514C14.9812 3.47977 14.8975 3.31797 14.7674 3.19827C14.6373 3.07857 14.4691 3.00868 14.2925 3.00092C14.2676 2.99967 14.2427 2.99967 14.2178 3.00092ZM17.2178 5.25095C17.1504 5.25517 17.0839 5.26848 17.0201 5.2905L6.5199 8.67874C6.36869 8.72746 6.23685 8.82294 6.14339 8.95142C6.04993 9.07989 5.99968 9.23472 5.99988 9.39359V18.0041C5.99847 18.1035 6.01683 18.2021 6.05389 18.2944C6.09095 18.3866 6.14597 18.4705 6.21576 18.5413C6.28554 18.6121 6.3687 18.6683 6.46039 18.7066C6.55209 18.745 6.65049 18.7648 6.74989 18.7648C6.84928 18.7648 6.94769 18.745 7.03938 18.7066C7.13108 18.6683 7.21423 18.6121 7.28402 18.5413C7.3538 18.4705 7.40882 18.3866 7.44588 18.2944C7.48294 18.2021 7.5013 18.1035 7.4999 18.0041V9.93852L17.48 6.71728C17.649 6.66533 17.7942 6.55535 17.89 6.40677C17.9858 6.25818 18.0261 6.08054 18.0036 5.90517C17.9812 5.72981 17.8976 5.568 17.7675 5.4483C17.6374 5.32861 17.4691 5.25871 17.2925 5.25095C17.2676 5.24971 17.2427 5.24971 17.2178 5.25095ZM20.193 7.50538C20.1344 7.50982 20.0758 7.52197 20.0186 7.54053L9.51848 10.9288C9.20948 11.0293 8.99992 11.3181 8.99992 11.6436V20.2541C8.99992 20.4979 9.11829 20.7262 9.3178 20.8664C9.44605 20.9572 9.59693 21.0041 9.74993 21.0041C9.83468 21.0041 9.92014 20.9894 10.0019 20.9602L20.502 17.2101C20.8006 17.1044 21.0001 16.8213 21.0001 16.504V8.25392C21.0001 8.01467 20.8853 7.78922 20.691 7.64747C20.5459 7.54172 20.3688 7.49205 20.193 7.50538Z",fill:t})}))}},4020:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.StorefrontIcon=void 0;const o=r(5893);t.StorefrontIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:(0,o.jsx)("path",{d:"M5 3C4.448 3 4 3.448 4 4C4 4.552 4.448 5 5 5H19C19.552 5 20 4.552 20 4C20 3.448 19.552 3 19 3H5ZM4.61719 7C4.23819 7 3.89361 7.21373 3.72461 7.55273L2.10547 10.7891C2.03547 10.9281 2 11.0813 2 11.2363V12C2 12.552 2.448 13 3 13V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V13C21.552 13 22 12.552 22 12V11.2363C22 11.0813 21.9645 10.9281 21.8945 10.7891L20.2754 7.55273C20.1064 7.21373 19.7618 7 19.3828 7H4.61719ZM6 13H18C18.552 13 19 13.448 19 14V18C19 18.552 18.552 19 18 19H6C5.448 19 5 18.552 5 18V14C5 13.448 5.448 13 6 13Z",fill:t})}))}},7937:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceIcon=void 0;const o=r(5893);t.WorkspaceIcon=e=>{var{color:t="currentColor"}=e,r=n(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},r,{children:[(0,o.jsx)("path",{d:"M6.73811 2.8125H3.53137C3.13442 2.8125 2.81262 3.1343 2.81262 3.53125V7.51204C2.81262 7.909 3.13442 8.23079 3.53137 8.23079H6.73811C7.13506 8.23079 7.45686 7.909 7.45686 7.51204V3.53125C7.45686 3.1343 7.13506 2.8125 6.73811 2.8125Z",fill:t}),(0,o.jsx)("path",{d:"M12.1565 6.26758H8.94971C8.75123 6.26758 8.59033 6.42848 8.59033 6.62696V11.3818C8.59033 11.5803 8.75123 11.7412 8.94971 11.7412H12.1565C12.3549 11.7412 12.5158 11.5803 12.5158 11.3818V6.62696C12.5158 6.42848 12.3549 6.26758 12.1565 6.26758Z",stroke:t,strokeWidth:"0.718753"}),(0,o.jsx)("path",{d:"M12.1564 2.8125H8.94971C8.55275 2.8125 8.23096 3.1343 8.23096 3.53125V4.41587C8.23096 4.81283 8.55275 5.13463 8.94971 5.13463H12.1564C12.5534 5.13463 12.8752 4.81283 12.8752 4.41587V3.53125C12.8752 3.1343 12.5534 2.8125 12.1564 2.8125Z",fill:t}),(0,o.jsx)("path",{d:"M6.73798 9.00488H3.53125C3.1343 9.00488 2.8125 9.32668 2.8125 9.72364V11.3823C2.8125 11.7793 3.1343 12.1011 3.53125 12.1011H6.73798C7.13494 12.1011 7.45674 11.7793 7.45674 11.3823V9.72364C7.45674 9.32668 7.13494 9.00488 6.73798 9.00488Z",fill:t})]}))}},2772:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(379),t),o(r(4718),t),o(r(7937),t),o(r(8311),t),o(r(5729),t),o(r(7788),t),o(r(3703),t),o(r(6795),t),o(r(8265),t),o(r(117),t),o(r(1539),t),o(r(9285),t),o(r(4020),t),o(r(529),t),o(r(2402),t),o(r(2147),t),o(r(4825),t),o(r(6447),t)},3117:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IconWithBadge=void 0;const i=r(5893),l=o(r(7518)),a=r(7006),c=r(3136),s=r(1335);t.IconWithBadge=e=>{var{count:t=0,max:r}=e,o=n(e,["count","max"]);return(0,i.jsxs)(C,{children:[(0,i.jsx)(a.Icon,Object.assign({},o)),t>0&&(0,i.jsx)(d,{count:t,max:r})]})};const C=(0,l.default)(s.Box)`
  position: relative;
`,d=(0,l.default)(c.Badge)`
  position: absolute;
  transform: scale(70%);
  right: -${({theme:e})=>e.px.base};
  top: -${({theme:e})=>e.px.small};
`},144:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(3117),t)},9239:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(8275),t)},8275:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=void 0;const i=r(5893),l=o(r(7518)),a=r(9634);t.Loader=(0,l.default)((e=>{var t=n(e,[]);return(0,i.jsx)(a.Icon,Object.assign({},t,{children:(0,i.jsx)("svg",Object.assign({width:"100%",height:"100%",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"},{children:(0,i.jsx)("g",Object.assign({fill:"none",fillRule:"evenodd"},{children:(0,i.jsxs)("g",Object.assign({transform:"translate(1 1)",strokeWidth:"2"},{children:[(0,i.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),(0,i.jsx)("path",Object.assign({d:"M36 18c0-9.94-8.06-18-18-18"},{children:(0,i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})}))]}))}))}))}))}))``},358:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledInputField=t.BaseInput=void 0;const i=r(5893),l=r(6689),a=o(r(7518)),c=r(1335),s=r(9507),C=r(7769);t.BaseInput=(0,l.forwardRef)(((e,r)=>{var{className:o,renderInput:l,message:a,label:c,status:s,name:C,type:p="text"}=e,v=n(e,["className","renderInput","message","label","status","name","type"]);const g="checkbox"===p||"radio"===p;return(0,i.jsxs)(h,Object.assign({flexDirection:"column",alignItems:"flex-start"},{children:[(0,i.jsxs)(d,Object.assign({inline:g},{children:[!!c&&(0,i.jsx)(u,Object.assign({as:"label",htmlFor:C,weight:"bold"},{children:c})),!!l&&l(Object.assign({name:C,status:s,type:p},v)),!l&&(0,i.jsx)(t.StyledInputField,Object.assign({className:o,name:C,status:s,type:p},v,{ref:r}))]})),!!a&&(0,i.jsx)(f,Object.assign({status:s},{children:a}))]}))})),t.BaseInput.displayName="BaseInput";const d=(0,a.default)(c.Box)`
  align-items: ${({inline:e})=>e?"center":"flex-start"};
  flex-direction: ${({inline:e})=>e?"row-reverse":"column"};
  justify-content: ${({inline:e})=>e?"flex-end":"flex-start"};
  width: 100%;

  ${({inline:e,theme:t})=>e&&`\n    ${u} {\n      cursor: pointer;\n      margin-bottom: 0;\n      margin-left: ${t.px.small};\n      font-weight: ${t.fontWeight.normal};\n    }\n  `}
`,u=(0,a.default)(C.Text)`
  margin-bottom: ${({theme:e})=>e.px.small};
`,f=(0,a.default)(C.Text)`
  color: ${({theme:e,status:t})=>(0,s.getStatusColor)(e,t,"textHelp")};
  margin-top: ${({theme:e})=>e.px.small};
`,h=(0,a.default)(c.Box)`
  font-size: ${({theme:e})=>e.fontSize.base};
`;t.StyledInputField=a.default.input`
  background: ${({theme:e})=>e.palette.background5};
  border: 1px solid ${({theme:e})=>e.palette.background6};
  border-color: ${({theme:e,status:t})=>(0,s.getStatusColor)(e,t,"inputBackground")};
  border-radius: ${({theme:e})=>e.radius.small};
  box-shadow: ${({theme:e})=>e.shadow.base};
  color: ${({theme:e})=>e.palette.inputColor};
  font-size: ${({theme:e})=>e.fontSize.base};
  padding: ${({theme:e})=>`${e.px.small} ${e.px.base}`};
  transition: border-color var(--openfin-ui-globalTransition);
  width: 100%;

  &:focus {
    outline: 0;
    border-color: ${({theme:e})=>e.palette.inputFocused};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled::placeholder {
    color: ${({theme:e})=>e.palette.inputDisabled};
  }

  /**
   * This is a hack to invert the calendar icon. This only works in dark mode.
   * Until either light mode is a thing or we get a datetime picker design, this will do.
   */
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`},8878:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(358),t)},1:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;const c=r(5893),s=i(r(6689)),C=a(r(7518)),d=r(8878),u=r(9634),f=r(9507);t.Checkbox=s.forwardRef(((e,t)=>{var{status:r}=e,n=l(e,["status"]);return(0,c.jsx)(d.BaseInput,Object.assign({},n,{type:"checkbox",status:r,renderInput:e=>{var n=l(e,[]);return(0,c.jsxs)(h,{children:[(0,c.jsx)(g,Object.assign({ref:t,id:n.name,type:"checkbox"},n)),(0,c.jsx)(p,Object.assign({status:r},{children:(0,c.jsx)(v,{})}))]})}}))})),t.Checkbox.displayName="Checkbox";const h=C.default.div`
  display: inline-block;
  position: relative;
`,p=C.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>e.px.base};
  width: ${({theme:e})=>e.px.base};
  border: 1px solid ${({theme:e})=>e.palette.textDefault};
  border-color: ${({theme:e,status:t})=>(0,f.getStatusColor)(e,t,"textDefault")};
  border-radius: 2px;
  pointer-events: none;
`,v=(0,C.default)(u.Icon).attrs({icon:"CheckIcon",size:"small"})`
  opacity: 0;
`,g=C.default.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:checked + ${p+" "+v} {
    opacity: 1;
  }

  &:hover + ${p} {
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.inputFocused};
  }

  &:focus + ${p} {
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.inputFocused};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + ${p} {
    opacity: 0.5;
  }
`},8051:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(1),t)},1978:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(6884),t)},6884:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberInput=void 0;const i=r(5893),l=r(6689),a=o(r(7518)),c=r(6606),s=r(9634),C=r(1335),d=r(8878);var u;!function(e){e[e.Up=1]="Up",e[e.Down=-1]="Down"}(u||(u={})),t.NumberInput=(0,l.forwardRef)(((e,t)=>{var{min:r,max:o,onChange:a,step:s=1,value:C}=e,h=n(e,["min","max","onChange","step","value"]);const p=Number(s),[v,g]=(0,l.useState)(Number(C));(0,l.useEffect)((()=>g(Number(C))),[]);const w=e=>{const t=v?Number(v):0,n=r?Number(r):void 0,i=o?Number(o):void 0,l=(0,c.clamp)(t+p*e,n,i);g(l)};return(0,i.jsx)(d.BaseInput,Object.assign({type:"number"},h,{renderInput:e=>{var l=n(e,[]);return(0,i.jsx)(f,Object.assign({ref:t,onIncrement:()=>w(u.Up),onDecrement:()=>w(u.Down),onChange:e=>{const{value:t}=e.target;t&&g(Number(t)),a&&a(e)},min:r,max:o,step:s},l,{value:v}))}}))})),t.NumberInput.displayName="NumberInput";const f=(0,l.forwardRef)(((e,t)=>{var{onIncrement:r,onDecrement:o}=e,l=n(e,["onIncrement","onDecrement"]);return(0,i.jsxs)(h,{children:[(0,i.jsx)(g,Object.assign({ref:t},l)),(0,i.jsxs)(p,Object.assign({flexDirection:"column",disabled:l.disabled},{children:[(0,i.jsx)(v,Object.assign({onClick:r,disabled:l.disabled},{children:(0,i.jsx)(s.Icon,{icon:"TriangleUpIcon"})})),(0,i.jsx)(v,Object.assign({onClick:o,disabled:l.disabled},{children:(0,i.jsx)(s.Icon,{icon:"TriangleDownIcon"})}))]}))]})}));f.displayName="StyledNumberInput";const h=a.default.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.small};
  width: 100%;
`,p=(0,a.default)(C.Box)`
  align-items: center;
  position: absolute;
  right: 1px;
  top: 1px;
  gap: 1px;
  height: calc(100% - 2px);
  border-radius: ${({theme:e})=>`0 ${e.radius.small} ${e.radius.small} 0`};
  overflow: hidden;

  pointer-events: ${({disabled:e})=>e?"none":void 0};
`,v=(0,a.default)(C.Box)`
  cursor: pointer;
  background: ${({theme:e})=>e.palette.inputDisabled};
  padding: 0 ${({theme:e})=>e.px.xsmall};
  user-select: none;
  height: 50%;
  align-items: center;
  justify-content: center;

  color: ${({disabled:e,theme:t})=>e?t.palette.textHelp:t.palette.textDefault};

  &:hover {
    background: ${({theme:e})=>e.palette.inputFocused};
  }

  &:active {
    background: ${({theme:e})=>e.palette.inputColor};
  }
`,g=(0,a.default)(d.StyledInputField)`
  appearance: textfield;
  padding-right: ${({theme:e})=>e.px.xxxlarge};

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`},5215:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(2255),t)},2255:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=void 0;const l=r(5893),a=i(r(6689)),c=i(r(7518)),s=r(1335),C=r(7769),d=r(2565);t.RadioGroup=({direction:e="column",disabled:t,labelSide:r="right",gap:n="small",message:o,name:i,children:c})=>(0,l.jsxs)(u,{children:[(0,l.jsx)(f,Object.assign({direction:e,labelSide:r,gap:n},{children:a.Children.map(c,(e=>{const n=e;return n.type===d.RadioInput?a.cloneElement(n,{name:i,labelSide:r,disabled:t}):n}))})),o?(0,l.jsx)(h,Object.assign({disabled:t},{children:o})):null]});const u=(0,c.default)(s.Box)`
  display: flex;
  flex-direction: column;
  width: max-content;
`,f=(0,c.default)(s.Box)`
  display: flex;
  flex-direction: ${e=>e.direction};
  align-items: ${e=>{switch(e.labelSide){case"left":return"end";case"right":return"start";default:return"center"}}};
  width: fit-content;
`,h=(0,c.default)(C.Text)`
  color: ${({theme:e})=>e.palette.inputPlaceholder};
  margin-top: ${({theme:e})=>e.px.base};

  ${({disabled:e})=>e&&c.css`
      color: ${({theme:e})=>e.palette.inputDisabled};
    `}
`},3641:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(2565),t)},2565:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioInput=void 0;const a=r(5893),c=r(7769),s=i(r(6689)),C=i(r(7518)),d=r(1335);t.RadioInput=s.forwardRef(((e,t)=>{var{disabled:r,id:n,label:o,labelSide:i}=e,c=l(e,["disabled","id","label","labelSide"]);return(0,a.jsx)(u,{children:(0,a.jsxs)(p,Object.assign({as:"label",htmlFor:n,labelSide:i,disabled:r},{children:[(0,a.jsx)(h,Object.assign({ref:t,type:"radio",disabled:r},c)),(0,a.jsx)(f,{}),o||""]}))})})),t.RadioInput.displayName="RadioInput";const u=(0,C.default)(d.Box)`
  display: flex;
  flex-direction: column;
`,f=C.default.div`
  width: ${({theme:e})=>e.px.base};
  height: ${({theme:e})=>e.px.base};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: ${({theme:e})=>e.palette.textDefault};
  box-sizing: content-box;

  input:checked ~ &:after {
    content: '';
    display: block;
    margin: ${({theme:e})=>e.px.xsmall};
    width: ${({theme:e})=>e.px.xsmall};
    height: ${({theme:e})=>e.px.xsmall};
    border-radius: 50%;
    background-color: ${({theme:e})=>e.palette.textDefault};
  }

  input:disabled ~ & {
    border-color: ${({theme:e})=>e.palette.inputDisabled};
  }

  input:disabled ~ &:after {
    background-color: ${({theme:e})=>e.palette.inputDisabled};
  }
`,h=C.default.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,p=(0,C.default)(c.Text)`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: ${({labelSide:e})=>{switch(e||"right"){case"left":return"row-reverse";case"right":return"row";case"top":return"column-reverse";case"bottom":return"column"}}};
  gap: ${({theme:e})=>e.px.small};
  cursor: pointer;

  ${({disabled:e})=>e?C.css`
          & {
            cursor: default;
          }

          color: ${({theme:e})=>e.palette.inputDisabled};
        `:null}
`},8510:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(7429),t)},7429:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RawInput=void 0;const o=n(r(7518));t.RawInput=o.default.input``,t.RawInput.displayName="RawInput"},8951:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(2352),t)},2352:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;const n=r(5893),o=r(6689),i=r(8878);t.TextInput=(0,o.forwardRef)(((e,t)=>(0,n.jsx)(i.BaseInput,Object.assign({ref:t,type:"text"},e)))),t.TextInput.displayName="TextInput"},3339:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Box=void 0;const o=n(r(7518)),i=r(8732),l=r(5459),a={1:l.Palette.background1,2:l.Palette.background2,3:l.Palette.background3,4:l.Palette.background4,5:l.Palette.background5,6:l.Palette.background6};t.Box=o.default.div`
  /**
   * Style Scrollbar for Boxes with overflow
   */
  ${i.Mixins.scrollbar.base}

  display: ${({display:e="flex"})=>e};
  flex-direction: ${({flexDirection:e="row"})=>e};
  flex-wrap: ${({flexWrap:e="nowrap"})=>e};
  align-items: ${({alignItems:e})=>e};
  justify-content: ${({justifyContent:e})=>e};
  gap: ${({theme:e,gap:t})=>t&&e.px[t]};
  align-self: ${({alignSelf:e})=>e};
  flex-basis: ${({flexBasis:e})=>e};
  flex-grow: ${({flexGrow:e})=>e};
  flex-shrink: ${({flexShrink:e})=>e};
  order: ${({order:e})=>e};
  padding: ${({theme:e,padding:t})=>t&&e.px[t]};
  background: ${({theme:e,background:t})=>t&&e.palette[a[t]]};
`,t.Box.displayName="Box"},1335:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(3339),t)},6710:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DefinitionList=void 0;const i=r(5893),l=o(r(6689)),a=o(r(7518));t.DefinitionList=e=>{var{definitions:t}=e,r=n(e,["definitions"]);return(0,i.jsx)(c,Object.assign({},r,{children:Array.from(t.keys()).map(((e,r)=>(0,i.jsxs)(l.default.Fragment,{children:[(0,i.jsx)(s,{children:e}),(0,i.jsx)(C,{children:t.get(e)})]},`${e}-${r}`)))}))};const c=a.default.dl`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${({theme:e})=>`0 ${e.px.large}`};
  overflow-y: auto;
  padding: ${({theme:e})=>`${e.px.small} ${e.px.base}`};
  word-break: break-word;
`,s=a.default.dt`
  color: ${({theme:e})=>e.palette.textHelp};
  font-size: ${({theme:e})=>e.fontSize.small};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  line-height: ${({theme:e})=>e.px.base};
  padding-bottom: ${({theme:e})=>e.px.small};
  white-space: nowrap;
`,C=a.default.dd`
  font-size: ${({theme:e})=>e.fontSize.small};
  line-height: ${({theme:e})=>e.px.base};
  padding-bottom: ${({theme:e})=>e.px.small};
`},5377:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(6710),t)},9431:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyles=void 0;const n=r(7518),o=r(3471),i=r(575);t.GlobalStyles=n.createGlobalStyle`
  /** -> Define Global CSS Vars */
  :root {
    --openfin-ui-globalBackground: ${({theme:e})=>e.palette.background1};
    --openfin-ui-globalText: ${({theme:e})=>e.palette.textDefault};
    --openfin-ui-globalPlaceholder: ${({theme:e})=>e.palette.inputPlaceholder};
    --openfin-ui-globalTypography: ${o.Typography.base};
    --openfin-ui-globalTransition: ${({theme:e})=>e.transition.base};

    /* Map over the palette keys and create variables out of them */
    ${i.getRootCssVars}
  }

  /** -> @font-face Declaration */
  ${i.getFontFaces}

  /** -> Micro Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /**
     * Prevent browser auto-weighting
     * @link https://css-tricks.com/almanac/properties/f/font-synthesis/
     */
    font-synthesis: none;
  }

  /** -> Apply Global Styles */
  :root,
  body {
    background: var(--openfin-ui-globalBackground);
    color: var(--openfin-ui-globalText);
    font: var(--openfin-ui-globalTypography);
  }

  ::placeholder {
    color: var(--openfin-ui-globalPlaceholder);
  }

  /** -> Reduced Motion (Accessibility) */
  @media (prefers-reduced-motion) {
    :root {
      --openfin-ui-globalTransition: ${({theme:e})=>e.transition.none};
    }
  }
`},1069:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(9431),t)},9507:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(3471),t),o(r(6714),t),o(r(9272),t),o(r(575),t),o(r(1441),t),o(r(8732),t),o(r(5459),t),o(r(5317),t),o(r(420),t)},9984:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getMostReadable=t.darkenColor=t.lightenColor=void 0;const o=n(r(7621));t.lightenColor=(e,t)=>i(e,"lighten",t),t.darkenColor=(e,t)=>i(e,"darken",t);const i=(e,t,r)=>{if(r&&(r<0||r>100))throw new Error(`${r} must be a number between 0 and 100`);return(0,o.default)(e)[t](r).toString()};t.getMostReadable=(e,t)=>o.default.mostReadable(e,t).toHexString()},8029:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=void 0,t.Configuration={fontLoading:"cdn"}},3471:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.cdnFontFaceCss=t.IconSize=t.IconSet=t.Transition=t.Typography=t.LineHeight=t.FontWeight=t.FontSize=t.FontStack=t.Shadow=t.Radius=t.UnitPx=t.Unit=t.SizeName=t.Size=t.Color=void 0;const l=i(r(1521)),a=i(r(2772)),c=r(9272);t.Color={white:"#FFFFFF",lightGray1:"#FAFBFE",lightGray2:"#F3F5F8",lightGray3:"#ECEEF1",lightGray4:"#DDDFE4",lightGray5:"#C9CBD2",neutralGray:"#7D808A",darkGray1:"#53565F",darkGray2:"#383A40",darkGray3:"#2F3136",darkGray4:"#24262B",darkGray5:"#1E1F23",darkGray6:"#111214",openFinDarkest:"#3D39CD",openFinDarker:"#4642E0",openFin:"#504CFF",openFinLight:"#5254FB",openFinLighter:"#5C5EFE",openFinLightest:"#6864FF",functional1:"#35C759",functional2:"#46C8F1",functional3:"#0498FB",functional4:"#3A6FF9",functional5:"#5C5EFE",functional6:"#882BFE",functional7:"#BE1D1F",functional8:"#C93400",functional9:"#FF5E60",functional10:"#F48F00",purple:"#8C61FF",lightblue:"#36C3FE",aqua:"#00CC88",yellow:"#FFEB00",salmon:"#FF8C4C",pink:"#FF5E60",lightpink:"#FF8FB8",white00:"rgba(255,255,255,0.0)",white10:"rgba(255,255,255,0.1)",white20:"rgba(255,255,255,0.2)",white30:"rgba(255,255,255,0.3)",white40:"rgba(255,255,255,0.4)",white50:"rgba(255,255,255,0.5)",white60:"rgba(255,255,255,0.6)",white70:"rgba(255,255,255,0.7)",white80:"rgba(255,255,255,0.8)",white90:"rgba(255,255,255,0.9)",black00:"rgba(0,0,0,0.0)",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",transparent:"transparent"},t.Size={xsmall:"xsmall",small:"small",base:"base",large:"large",xlarge:"xlarge",xxlarge:"xxlarge",xxxlarge:"xxxlarge",xxxxlarge:"xxxxlarge"},t.SizeName={[t.Size.xsmall]:"Extra Small",[t.Size.small]:"Small",[t.Size.base]:"Base",[t.Size.large]:"Large",[t.Size.xlarge]:"Extra Large",[t.Size.xxlarge]:"2X Large",[t.Size.xxxlarge]:"3X Large",[t.Size.xxxxlarge]:"4X Large"},t.Unit={[t.Size.xsmall]:4,[t.Size.small]:8,[t.Size.base]:12,[t.Size.large]:16,[t.Size.xlarge]:20,[t.Size.xxlarge]:24,[t.Size.xxxlarge]:32,[t.Size.xxxxlarge]:48},t.UnitPx={[t.Size.xsmall]:"4px",[t.Size.small]:"8px",[t.Size.base]:"12px",[t.Size.large]:"16px",[t.Size.xlarge]:"20px",[t.Size.xxlarge]:"24px",[t.Size.xxxlarge]:"32px",[t.Size.xxxxlarge]:"48px"},t.Radius={[t.Size.small]:"4px",[t.Size.base]:"8px",[t.Size.large]:"24px",pill:"100vh",round:"50%",none:"0"},t.Shadow={[t.Size.base]:"0 4px 4px rgba(0, 0, 0, 0.25)"},t.FontStack=["Inter","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","sans-serif"].join(", "),t.FontSize={[t.Size.xsmall]:"8px",[t.Size.small]:"10px",[t.Size.base]:"12px",[t.Size.large]:"14px",[t.Size.xlarge]:"16px",[t.Size.xxlarge]:"18px",[t.Size.xxxlarge]:"20px",[t.Size.xxxxlarge]:"40px"},t.FontWeight={normal:400,bold:600},t.LineHeight={ui:1,heading:1.2,text:1.5},t.Typography={base:`${t.FontSize.base}/${t.LineHeight.text} ${t.FontStack}`},t.Transition={base:"200ms cubic-bezier(0.16, 1, 0.3, 1)",none:"0ms"},t.IconSet=Object.assign(Object.assign({},l),a),t.IconSize={[t.Size.xsmall]:t.UnitPx.small,[t.Size.small]:t.UnitPx.base,[t.Size.base]:"15px",[t.Size.large]:t.UnitPx.xlarge,[t.Size.xlarge]:t.UnitPx.xxlarge,[t.Size.xxlarge]:t.UnitPx.xxxlarge,[t.Size.xxxlarge]:t.UnitPx.xxxxlarge},t.cdnFontFaceCss=(0,c.createFontFaceCss)({regular:"//cdn.openfin.co/fonts/inter/Inter-Regular.woff2?v3.15",italic:"//cdn.openfin.co/fonts/inter/Inter-Italic.woff2?v3.15",semiBold:"//cdn.openfin.co/fonts/inter/Inter-SemiBold.woff2?v3.15",semiBoldItalic:"//cdn.openfin.co/fonts/inter/Inter-SemiBoldItalic.woff2?v3.15"})},9272:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createFontFaceCss=void 0;const n=r(7518),o=r(3471);t.createFontFaceCss=function(e){return n.css`
    @font-face {
      font-family: 'Inter';
      src: url(${e.regular}) format('woff2');
      font-weight: ${o.FontWeight.normal};
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Inter';
      src: url(${e.italic}) format('woff2');
      font-weight: ${o.FontWeight.normal};
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Inter';
      src: url(${e.semiBold}) format('woff2');
      font-weight: ${o.FontWeight.bold};
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Inter';
      src: url(${e.semiBoldItalic}) format('woff2');
      font-weight: ${o.FontWeight.bold};
      font-style: italic;
      font-display: swap;
    }
  `}},6714:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;const n=r(8029),o=r(3471),i=r(9984),l=r(5459),a={_config:n.Configuration,_color:o.Color,fontSize:o.FontSize,fontWeight:o.FontWeight,lineHeight:o.LineHeight,iconSize:o.IconSize,radius:o.Radius,shadow:o.Shadow,transition:o.Transition,unit:o.Unit,px:o.UnitPx},c=(e,t)=>({[`${e}Active`]:(0,i.darkenColor)(t,2),[`${e}Hover`]:(0,i.lightenColor)(t,5),[`${e}Focused`]:(0,i.lightenColor)(t,20),[`${e}Text`]:(0,i.getMostReadable)(t,[o.Color.white,o.Color.darkGray5])});t.createTheme=e=>Object.assign(Object.assign({},a),{palette:Object.assign(Object.assign(Object.assign({},e),c(l.Palette.brandPrimary,e.brandPrimary)),c(l.Palette.brandSecondary,e.brandSecondary))})},575:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getStatusColor=t.getFontFaces=t.getRootCssVars=t.getVariantCSS=void 0;const n=r(3471),o=r(5459);t.getVariantCSS=(e,t)=>r=>e[t][r[t]],t.getRootCssVars=({theme:e})=>Object.keys(o.Palette).map((t=>`--openfin-ui-${t}: ${e.palette[t]};`)).join("\n"),t.getFontFaces=({theme:e})=>"import"===e._config.fontLoading?e._config.fontCss:n.cdnFontFaceCss,t.getStatusColor=(e,t,r)=>{switch(t){case"active":return e.palette.statusActive;case"critical":return e.palette.statusCritical;case"warning":return e.palette.statusWarning;case"success":return e.palette.statusSuccess;default:return r?e.palette[r]:"inherit"}}},1441:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8732:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Mixins=void 0;const n=r(3471),o=r(7518),i=o.css`
  user-select: none;
`,l=o.css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,a=o.css`
  &::-webkit-scrollbar {
    width: var(--scrollbarSize, ${n.UnitPx.xsmall});
    height: var(--scrollbarSize, ${n.UnitPx.xsmall});
  }

  &::-webkit-scrollbar-track {
    background: ${n.Color.neutralGray};
    border-radius: var(--scrollbarSize, ${n.UnitPx.xsmall});
    opacity: 0.8;
  }

  &::-webkit-scrollbar-thumb {
    background: ${n.Color.white};
    width: var(--scrollbarSize, ${n.UnitPx.xsmall});
    height: var(--scrollbarSize, ${n.UnitPx.xsmall});
    border-radius: var(--scrollbarSize, ${n.UnitPx.xsmall});
    opacity: 0.8;
  }
`,c=o.css`
  --scrollbarSize: 2px;
  ${a};
`,s=o.css`
  -webkit-app-region: drag;
`,C=o.css`
  -webkit-app-region: no-drag;
`;t.Mixins={noSelect:i,textOverflow:l,scrollbar:{[n.Size.base]:a,[n.Size.small]:c},appRegion:{drag:s,noDrag:C}}},5459:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Palette=void 0,t.Palette={background1:"background1",background2:"background2",background3:"background3",background4:"background4",background5:"background5",background6:"background6",brandPrimary:"brandPrimary",brandSecondary:"brandSecondary",brandPrimaryActive:"brandPrimaryActive",brandPrimaryHover:"brandPrimaryHover",brandPrimaryFocused:"brandPrimaryFocused",brandPrimaryText:"brandPrimaryText",brandSecondaryActive:"brandSecondaryActive",brandSecondaryHover:"brandSecondaryHover",brandSecondaryFocused:"brandSecondaryFocused",brandSecondaryText:"brandSecondaryText",inputBackground:"inputBackground",inputColor:"inputColor",inputPlaceholder:"inputPlaceholder",inputDisabled:"inputDisabled",inputFocused:"inputFocused",statusSuccess:"statusSuccess",statusWarning:"statusWarning",statusCritical:"statusCritical",statusActive:"statusActive",textDefault:"textDefault",textHelp:"textHelp",textInactive:"textInactive"}},5317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},4266:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(9483),t)},9483:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OpenFinDarkTheme=t.OpenFinLightTheme=void 0;const n=r(5459),o=r(3471),i=r(6714),l={[n.Palette.brandPrimary]:o.Color.openFin,[n.Palette.statusSuccess]:o.Color.functional1,[n.Palette.statusWarning]:o.Color.functional10,[n.Palette.statusCritical]:o.Color.functional7,[n.Palette.statusActive]:o.Color.functional3};t.OpenFinLightTheme=(0,i.createTheme)(Object.assign(Object.assign({},l),{[n.Palette.background1]:o.Color.white,[n.Palette.background2]:o.Color.lightGray1,[n.Palette.background3]:o.Color.lightGray2,[n.Palette.background4]:o.Color.lightGray3,[n.Palette.background5]:o.Color.lightGray4,[n.Palette.background6]:o.Color.lightGray5,[n.Palette.brandSecondary]:o.Color.darkGray5,[n.Palette.inputBackground]:o.Color.lightGray3,[n.Palette.inputColor]:o.Color.darkGray5,[n.Palette.inputPlaceholder]:o.Color.darkGray2,[n.Palette.inputDisabled]:o.Color.neutralGray,[n.Palette.inputFocused]:o.Color.lightGray5,[n.Palette.textDefault]:o.Color.darkGray5,[n.Palette.textHelp]:o.Color.darkGray3,[n.Palette.textInactive]:o.Color.neutralGray})),t.OpenFinDarkTheme=(0,i.createTheme)(Object.assign(Object.assign({},l),{[n.Palette.background1]:o.Color.darkGray6,[n.Palette.background2]:o.Color.darkGray5,[n.Palette.background3]:o.Color.darkGray4,[n.Palette.background4]:o.Color.darkGray3,[n.Palette.background5]:o.Color.darkGray2,[n.Palette.background6]:o.Color.darkGray1,[n.Palette.brandSecondary]:o.Color.darkGray2,[n.Palette.inputBackground]:o.Color.darkGray1,[n.Palette.inputColor]:o.Color.white,[n.Palette.inputPlaceholder]:o.Color.lightGray5,[n.Palette.inputDisabled]:o.Color.neutralGray,[n.Palette.inputFocused]:o.Color.lightGray5,[n.Palette.textDefault]:o.Color.white,[n.Palette.textHelp]:o.Color.lightGray5,[n.Palette.textInactive]:o.Color.neutralGray}))},420:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=void 0;const n=r(5893),o=r(7518),i=r(7088),l=r(1069);t.ThemeProvider=({children:e,themes:t,scheme:r,config:a,includeGlobalStyles:c=!0})=>{const s=(0,i.useTheme)({themes:t,scheme:r,config:a});return(0,n.jsx)(o.ThemeProvider,Object.assign({theme:s},{children:(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(l.GlobalStyles,{}),e]})}))}},3429:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContactCard=void 0;const i=r(5893),l=o(r(6689)),a=o(r(7518)),c=r(5377),s=r(7444);t.ContactCard=e=>{var{name:t,title:r,photoUrl:o,useInitials:a=!1,details:c}=e,x=n(e,["name","title","photoUrl","useInitials","details"]);const y=o||a,L=l.default.useMemo((()=>(0,s.getInitials)(t)),[t]),M=l.default.useMemo((()=>(0,s.getColorForName)(t)),[t]);return(0,i.jsxs)(C,Object.assign({},x,{children:[(0,i.jsxs)(d,{children:[y&&(0,i.jsx)(u,Object.assign({iconColor:M},{children:o?(0,i.jsx)(h,{alt:r,src:o}):(0,i.jsx)(f,{children:L})})),(0,i.jsxs)(p,{children:[(0,i.jsxs)(v,{children:[" ",t," "]}),r&&(0,i.jsxs)(g,{children:[" ",r," "]})]})]}),(0,i.jsx)(w,{children:c.map(((e,r)=>(0,i.jsxs)(l.default.Fragment,{children:[(0,i.jsx)(b,{definitions:e}),r<c.length-1&&(0,i.jsx)(m,{})]},`${t}-details-${r}`)))})]}))};const C=a.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({theme:e})=>e.px.base};
`,d=a.default.div`
  border-bottom: solid 1px ${({theme:e})=>e.palette.background6};
  display: flex;
  margin-bottom: ${({theme:e})=>e.px.base};
  padding-bottom: ${({theme:e})=>e.px.small};
`,u=a.default.div`
  align-items: center;
  background-color: ${e=>e.iconColor};
  border-radius: ${({theme:e})=>e.px.xsmall};
  display: flex;
  height: ${({theme:e})=>e.iconSize.xxxlarge};
  justify-content: center;
  margin-right: ${({theme:e})=>e.px.small};
  width: ${({theme:e})=>e.iconSize.xxxlarge};
`,f=a.default.span`
  font-size: ${({theme:e})=>e.fontSize.base};
  text-transform: uppercase;
`,h=a.default.img`
  border-radius: ${({theme:e})=>e.px.xsmall};
  height: ${({theme:e})=>e.iconSize.xxxlarge};
  object-fit: cover;
  user-select: none;
  width: ${({theme:e})=>e.iconSize.xxxlarge};
`,p=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`,v=a.default.span`
  font-size: ${({theme:e})=>e.fontSize.large};
  line-height: ${({theme:e})=>e.px.large};
  overflow: hidden;
  padding-bottom: ${({theme:e})=>e.px.xsmall};
  text-overflow: ellipsis;
  white-space: nowrap;
`,g=a.default.span`
  color: ${({theme:e})=>e.palette.textHelp};
  line-height: ${({theme:e})=>e.px.base};
  overflow: hidden;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=a.default.div`
  background-color: ${({theme:e})=>e.palette.background5};
  border-radius: 2px;
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.px.small};
`,m=a.default.div`
  border-bottom: solid 1px ${({theme:e})=>e.palette.background6};
  margin-bottom: ${({theme:e})=>e.px.base};
`,b=(0,a.default)(c.DefinitionList)`
  dt {
    text-align: left;
    text-transform: capitalize;
  }

  dd {
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`},3188:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(3429),t)},7444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getColorForName=t.getInitials=void 0,t.getInitials=e=>{const t=e.trim(),r=t.lastIndexOf(" ");return r>-1?[t.charAt(0),t.charAt(r+1)].join(""):t.slice(0,2)};const r=["#8C61FF","#00CC88","#FF8FB8","#FF976B","#FD5E60","#36C3FE","#5254FB"];t.getColorForName=(e="")=>{let t=0;for(let r=0;r<e.length;r++)t+=e.codePointAt(r)||0;return r[t%r.length]}},1996:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.H6=t.H5=t.H4=t.H3=t.H2=t.H1=t.Heading=t.defaultSize=void 0;const i=r(5893),l=o(r(7518)),a=r(3471),c=r(7769);t.defaultSize={h1:a.Size.xxxlarge,h2:a.Size.xxlarge,h3:a.Size.xlarge,h4:a.Size.large,h5:a.Size.base,h6:a.Size.small},t.Heading=e=>{var{level:r=1,className:o}=e,l=n(e,["level","className"]);const a=`h${r}`;return(0,i.jsx)(s,Object.assign({className:o,as:a,size:t.defaultSize[a],weight:"bold"},l))};const s=(0,l.default)(c.Text)`
  line-height: ${({theme:e})=>e.lineHeight.heading};
`;t.H1=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:1})))``,t.H2=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:2})))``,t.H3=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:3})))``,t.H4=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:4})))``,t.H5=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:5})))``,t.H6=(0,l.default)(t.Heading).attrs((e=>Object.assign(Object.assign({},e),{level:6})))``},7063:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(1996),t)},7769:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(5431),t)},5431:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;const o=n(r(7518));t.Text=o.default.span`
  color: ${({theme:e})=>e.palette.textDefault};
  font-size: ${({theme:e,size:t="base"})=>e.fontSize[t]};
  font-weight: ${({theme:e,weight:t="normal"})=>e.fontWeight[t]};
  line-height: ${({theme:e})=>e.lineHeight.text};
`,t.Text.displayName="Text"},3190:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useColorScheme=t.ColorScheme=void 0;const n=r(4481);t.ColorScheme={dark:"dark",light:"light"};const o=e=>`(prefers-color-scheme: ${e})`;t.useColorScheme=({defaultScheme:e=t.ColorScheme.light})=>{const r=(0,n.useMediaQuery)(o(t.ColorScheme.dark)),i=(0,n.useMediaQuery)(o(t.ColorScheme.light));switch(!0){case r:return t.ColorScheme.dark;case i:return t.ColorScheme.light;default:return e}}},4481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutMediaQuery=t.useMediaQuery=void 0;const n=r(6689),o=e=>t=>{const[r,o]=(0,n.useState)(!1);return e((()=>{const e=window.matchMedia(t);if(e){e.matches!==r&&o(e.matches);const t=()=>o(e.matches),n=()=>e.removeEventListener("change",t);return e.addEventListener("change",t),n}}),[r,t]),r};t.useMediaQuery=o(n.useEffect),t.useLayoutMediaQuery=o(n.useLayoutEffect)},2776:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.usePrevious=void 0;const n=r(6689);t.usePrevious=e=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}},7088:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTheme=void 0;const n=r(4266),o=r(3190),i=r(9507),l={[o.ColorScheme.dark]:n.OpenFinDarkTheme,[o.ColorScheme.light]:n.OpenFinLightTheme};t.useTheme=({themes:e,scheme:t,config:r})=>{const n=t?o.ColorScheme[t]:(0,o.useColorScheme)({defaultScheme:o.ColorScheme.light}),a=void 0===e?l[n]:(0,i.createTheme)(Object.assign(Object.assign({},l[n].palette),e[n].palette));return r&&(a._config=Object.assign(Object.assign({},a._config),r)),a}},341:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StoryHelpers=void 0,i(r(4130),t),i(r(2609),t),i(r(3136),t),i(r(9634),t),i(r(144),t),i(r(9239),t),i(r(8510),t),i(r(8951),t),i(r(1978),t),i(r(8051),t),i(r(3641),t),i(r(5215),t),i(r(1335),t),i(r(5377),t),i(r(1069),t),i(r(9507),t),i(r(3188),t),i(r(7063),t),i(r(7769),t),i(r(3190),t),i(r(4481),t),i(r(2776),t),t.StoryHelpers=l(r(8812)),i(r(4991),t)},6606:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomInteger=t.clamp=void 0,t.clamp=(e,t,r)=>t&&r?Math.min(Math.max(e,t),r):r&&!t?Math.min(e,r):t&&!r?Math.max(e,t):e,t.generateRandomInteger=()=>Math.floor(1e3*Math.random())},4991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.whenFin=void 0,t.whenFin=function(e,t){const r="undefined"!=typeof fin?e:t;return"function"==typeof r?r():r}},8812:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SpatialLink=t.JSONData=t.Pre=t.PlaceholderContent=t.StoryGrid=t.StoryColumn=t.StoryRow=void 0;const o=r(5893),i=n(r(7518)),l=r(1335);t.StoryRow=(0,i.default)(l.Box).attrs({gap:"large",alignItems:"flex-start"})``,t.StoryColumn=(0,i.default)(l.Box).attrs({flexDirection:"column",gap:"large",alignItems:"flex-start"})`
  max-width: 500px;
`,t.StoryGrid=(0,i.default)(l.Box).attrs({gap:"large"})`
  display: grid;
`,t.PlaceholderContent=(0,i.default)(t.StoryColumn)`
  background: ${({theme:e})=>e.palette.background2};
  box-shadow: ${({theme:e})=>`0 0 0 1px ${e.palette.background3}`};
  padding: ${({theme:e})=>e.px.small};
  border-radius: ${({theme:e})=>e.radius.small};
  user-select: none;
`,t.Pre=i.default.pre`
  margin: ${({theme:e})=>e.px.base} 0;
  padding: ${({theme:e})=>e.px.base};
  border-radius: ${({theme:e})=>e.radius.base};
`,t.JSONData=({data:e})=>(0,o.jsx)(t.Pre,{children:JSON.stringify(e,void 0,2)}),t.SpatialLink=i.default.a.attrs({href:"https://docs.google.com/spreadsheets/d/10fcDXFdGJ8-cQxJ5X1EPSKP-aMrxgqnM8YIlYmcOPoQ",target:"_blank",rel:"noreferrer",title:"Spatial"})`
  display: block;
  color: ${({theme:e})=>e.palette.textDefault};
  text-decoration: none;
  padding: ${({theme:e})=>e.px.small};
  border: 1px solid ${({theme:e})=>e.palette.textDefault};
  border-radius: ${({theme:e})=>e.radius.small};
  &:after {
    display: block;
    content: 'Source: Spatial';
  }
`},6689:e=>{e.exports=r(378)},7518:e=>{e.exports=r(921)}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l=i(341),a=t;for(var c in l)a[c]=l[c];l.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})},525:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var l,a,c=o(e),s=1;s<arguments.length;s++){for(var C in l=Object(arguments[s]))r.call(l,C)&&(c[C]=l[C]);if(t){a=t(l);for(var d=0;d<a.length;d++)n.call(l,a[d])&&(c[a[d]]=l[a[d]])}}return c}},633:e=>{var t;window,t=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",function(e){e.CREATE_NOTIFICATION="create-notification",e.UPDATE_NOTIFICATION="update-notification",e.CLEAR_NOTIFICATION="clear-notification",e.GET_APP_NOTIFICATIONS="fetch-app-notifications",e.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",e.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",e.ADD_EVENT_LISTENER="add-event-listener",e.REMOVE_EVENT_LISTENER="remove-event-listener",e.GET_PROVIDER_STATUS="get-provider-status",e.GET_NOTIFICATIONS_COUNT="get-notifications-count",e.REGISTER_PLATFORM="register-notifications-platform",e.DEREGISTER_PLATFORM="deregister-notifications-platform"}(t.APITopic||(t.APITopic={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.tryServiceDispatch=t.getServicePromise=t.eventEmitter=void 0;const n=r(7),o=r(3),i=r(0),l=r(9);let a;t.eventEmitter=new n.EventEmitter;const c=new o.DeferredPromise;let s,C=!1;async function d(){if(window.navigator.appVersion.includes("Windows"))try{const e=await fin.System.getRvmInfo();parseInt(e.version.split(".")[0])>=6&&(fin.System.launchManifest?fin.System.launchManifest("fins://system-apps/notification-center",{noUi:!0}).catch((e=>{})):fin.System.openUrlWithBrowser("fins://system-apps/notification-center").catch((()=>{})))}catch(e){}else fin.System.openUrlWithBrowser("fins://system-apps/notification-center")}async function u(){var e,t;if(await c.promise,!a){if("undefined"==typeof fin){const e="fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.";return a=Promise.reject(new Error(e)),a}fin.System.getVersion().then((e=>{parseInt(e.split(".")[2])}));const{name:r,uuid:n}=null!==(t=null===(e=fin.me)||void 0===e?void 0:e.identity)&&void 0!==t?t:fin.Window.me;if(n===i.SERVICE_IDENTITY.uuid&&r===i.SERVICE_IDENTITY.name)a=Promise.reject(new Error("Trying to connect to provider from provider"));else{const e=window.setTimeout((()=>{}),5e3);a=fin.InterApplicationBus.Channel.connect(i.SERVICE_CHANNEL,{wait:!0,payload:{version:"1.15.0"}}).then((t=>{window.clearTimeout(e);const r=f();return t.register("WARN",(e=>{})),t.register("event",(e=>{r.dispatchEvent(e)})),t.setDefaultAction((()=>!1)),t.onDisconnection((()=>{C=!0,a=null,d(),setTimeout((()=>{u()}),300)})),t}))}}return a}function f(){return s||(s=new l.EventRouter(t.eventEmitter)),s}"undefined"!=typeof fin&&"undefined"!=typeof window&&(d(),u(),"loading"!==document.readyState?c.resolve():(window.addEventListener("DOMContentLoaded",(()=>{c.resolve()})),document.addEventListener("DOMContentLoaded",(()=>{c.resolve()})))),t.getServicePromise=u,t.tryServiceDispatch=async function(e,t){return(await u()).dispatch(e,t)},t.getEventRouter=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActionNoopType=t.ActionTrigger=void 0,function(e){e.CONTROL="control",e.SELECT="select",e.CLOSE="close",e.EXPIRE="expire",e.PROGRAMMATIC="programmatic"}(t.ActionTrigger||(t.ActionTrigger={})),function(e){e.EVENT_DISMISS="event_dismiss"}(t.ActionNoopType||(t.ActionNoopType={}))},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(8)),n(r(4))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){const e=new Promise(((e,t)=>{this._resolve=e,this._reject=t}));this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},l=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.getNotificationsCount=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicator=t.NotificationOptions=t.provider=void 0;const c=r(2),s=r(1),C=r(0),d=i(r(10));t.provider=d;const u=r(12),f=r(13);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return f.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return f.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return f.IndicatorColor}});const h=r(5);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return h.NotificationOptions}}),l(r(2),t),l(r(14),t),l(r(15),t),l(r(16),t),l(r(19),t),l(r(20),t),l(r(24),t),t.VERSION="1.15.0";const p=s.getEventRouter();function v(e){const{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}p.registerDeserializer("notification-created",(e=>v(e))),p.registerDeserializer("notification-closed",(e=>v(e))),p.registerDeserializer("notification-action",(e=>{const t=v(e),{controlSource:r,controlIndex:n}=t,o=a(t,["controlSource","controlIndex"]);if(e.trigger===c.ActionTrigger.CONTROL){const t=e.notification[r][n];return Object.assign(Object.assign({},o),{control:t})}return o})),p.registerDeserializer("notifications-count-changed",(e=>e)),t.addEventListener=function(e,t){u.validateEnvironment(),e=u.sanitizeEventType(e),t=u.sanitizeFunction(t);const r=s.eventEmitter.listenerCount(e);s.eventEmitter.addListener(e,t),0===r&&1===s.eventEmitter.listenerCount(e)&&s.tryServiceDispatch(C.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=function(e,t){u.validateEnvironment(),e=u.sanitizeEventType(e),t=u.sanitizeFunction(t);const r=s.eventEmitter.listenerCount(e);s.eventEmitter.removeListener(e,t),1===r&&0===s.eventEmitter.listenerCount(e)&&s.tryServiceDispatch(C.APITopic.REMOVE_EVENT_LISTENER,e)},t.create=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw new Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw new Error('Invalid argument passed to create: "expires" must be null or a valid Date object');const t=await s.tryServiceDispatch(C.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf()}));return Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw new Error('Invalid argument passed to create: "id" must be Id of previously created Notification');const t=await s.tryServiceDispatch(C.APITopic.UPDATE_NOTIFICATION,Object.assign({},e));return Object.assign({},t)},t.clear=async function(e){return s.tryServiceDispatch(C.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await s.tryServiceDispatch(C.APITopic.GET_APP_NOTIFICATIONS,void 0)).map((e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null})))},t.clearAll=async function(){return s.tryServiceDispatch(C.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return s.tryServiceDispatch(C.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return s.tryServiceDispatch(C.APITopic.GET_NOTIFICATIONS_COUNT,void 0)}},function(e,t,r){"use strict";var n,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var l=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(r,n){function o(r){e.removeListener(t,i),n(r)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),r([].slice.call(arguments))}g(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&g(e,"error",t,r)}(e,o,{once:!0})}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function C(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function d(e,t,r,n){var o,i,l;if(s(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),l=i[t]),void 0===l)l=i[t]=r,++e._eventsCount;else if("function"==typeof l?l=i[t]=n?[r,l]:[l,r]:n?l.unshift(r):l.push(r),(o=C(e))>0&&l.length>o&&!l.warned){l.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+l.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=l.length,console&&console.warn}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=u.bind(n);return o.listener=r,n.wrapFn=o,o}function h(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):v(o,o.length)}function p(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function v(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function g(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){n.once&&e.removeEventListener(t,o),r(i)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||l(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||l(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return C(this)},a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var l;if(t.length>0&&(l=t[0]),l instanceof Error)throw l;var a=new Error("Unhandled error."+(l?" ("+l.message+")":""));throw a.context=l,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var s=c.length,C=v(c,s);for(r=0;r<s;++r)i(C[r],this,t)}return!0},a.prototype.addListener=function(e,t){return d(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return d(this,e,t,!0)},a.prototype.once=function(e,t){return s(t),this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var r,n,o,i,l;if(s(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){l=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,l||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},a.prototype.listeners=function(e){return h(this,e,!0)},a.prototype.rawListeners=function(e){return h(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},a.prototype.listenerCount=p,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(4);async function o(e,t){let r=0;for(const n of e)await t(n,r,e),r++}async function i(e,t){await Promise.all(e.map(t))}function l(e,t,r){const o=new n.DeferredPromise,i=e.add(((...e)=>{t(...e)&&(i.remove(),o.resolve())}));return r&&r.catch((e=>{i.remove(),o.reject(e)})),a(o.promise)}function a(e){return e.catch((()=>{})),e}t.serialForEach=o,t.serialMap=async function(e,t){const r=[];return await o(e,(async(e,n,o)=>{r.push(await t(e,n,o))})),r},t.serialFilter=async function(e,t){const r=[];return await o(e,(async(e,n,o)=>{await t(e,n,o)&&r.push(e)})),r},t.parallelForEach=i,t.parallelMap=async function(e,t){const r=[];return await i(e,(async(e,n,o)=>{r[n]=await t(e,n,o)})),r},t.parallelFilter=async function(e,t){const r=[];return await i(e,(async(e,n,o)=>{r[n]=await t(e,n,o)})),e.filter(((e,t)=>r[t]))},t.withStrictTimeout=function(e,t,r){const n=new Promise(((t,n)=>setTimeout((()=>n(new Error(r))),e)));return a(Promise.race([n,t]))},t.withTimeout=function(e,t){const r=new Promise((t=>setTimeout((()=>t([!0,void 0])),e))),n=t.then((e=>[!1,e]));return Promise.race([r,n])},t.untilTrue=function(e,t,r){return t()?Promise.resolve():l(e,t,r)},t.untilSignal=l,t.allowReject=a},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.EventRouter=void 0,t.EventRouter=class{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){const{type:t,target:r}=e,o=n(e,["type","target"]);let i;if(!r)throw new Error("Invalid event, no target specified");if("default"===r)i=this._defaultEmitter;else{if(!this._emitterProviders[r.type])throw new Error(`Invalid target, no provider registered for '${r.type}'`);i=this._emitterProviders[r.type](r.id)}const l=Object.assign({type:t},o),a=this._deserializers[t];a?i.emit(t,a(l)):i.emit(t,l)}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;const o=n(r(11)),i=r(3),l=r(1),a=r(0);function c(){return i.withStrictTimeout(500,l.tryServiceDispatch(a.APITopic.GET_PROVIDER_STATUS,void 0),"").catch((()=>({connected:!1,version:null,templateAPIVersion:null})))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){const t=await c();if(t.connected&&null!==t.version){const r=o.default(t.version,e);if(0===r||1===r)return!0}return!1}},function(e,t){e.exports=function(e,t){for(var r=e.split("."),n=t.split("."),o=0;o<3;o++){var i=Number(r[o]),l=Number(n[o]);if(i>l)return 1;if(l>i)return-1;if(!isNaN(i)&&isNaN(l))return 1;if(isNaN(i)&&!isNaN(l))return-1}return 0}},function(e,t,r){"use strict";function n(e,t){let r;try{r=JSON.stringify(e)}catch(e){r=t}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.safeStringify=t.validateEnvironment=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw new Error(`Invalid argument passed: ${n(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e)return e;throw new Error(`Invalid argument passed: ${n(e,"The provided event type")} is not a valid Notifications event type`)},t.validateEnvironment=function(){if("undefined"==typeof fin)throw new Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.safeStringify=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,function(e){e.FAILURE="failure",e.WARNING="warning",e.SUCCESS="success"}(t.IndicatorType||(t.IndicatorType={})),function(e){e.RED="red",e.GREEN="green",e.YELLOW="yellow",e.BLUE="blue",e.PURPLE="purple",e.GRAY="gray"}(t.IndicatorColor||(t.IndicatorColor={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(17),t),o(r(18),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.WidgetType=Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(21),t),o(r(22),t),o(r(5),t),o(r(23),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deregisterPlatform=t.registerPlatform=void 0;const n=r(1),o=r(0);t.registerPlatform=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to registerPlatform: argument must be an object and must not be null");if(!e.id)throw new Error('Invalid argument passed to registerPlatform: "id" must be a non-empty string in platform info.');return n.tryServiceDispatch(o.APITopic.REGISTER_PLATFORM,Object.assign({},e))},t.deregisterPlatform=async function(e){if(!e)throw new Error('Invalid argument passed to deregisterPlatform: "id" must be a non-empty string.');return n.tryServiceDispatch(o.APITopic.DEREGISTER_PLATFORM,{id:e})}}])},e.exports=t()},535:(e,t,r)=>{"use strict";var n=r(525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,a=60110,c=60112;t.Suspense=60113;var s=60115,C=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),l=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),s=d("react.memo"),C=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function v(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||h}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=p,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var m=w.prototype=new g;m.constructor=w,n(m,v.prototype),m.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,r){var n,i={},l=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,n)&&!y.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var s=Array(c),C=0;C<c;C++)s[C]=arguments[C+2];i.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:b.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function H(e,t,r,n,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return l=l(c=e),e=""===n?"."+E(c,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),H(l,t,r,"",(function(e){return e}))):null!=l&&(M(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var C=n+E(a=e[s],s);c+=H(a,t,r,C,l)}else if(C=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof C)for(e=C.call(e),s=0;!(a=e.next()).done;)c+=H(a=a.value,t,r,C=n+E(a,s++),l);else if("object"===a)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function j(e,t,r){if(null==e)return e;var n=[],o=0;return H(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function V(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var Z={current:null};function R(){var e=Z.current;if(null===e)throw Error(f(321));return e}var _={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!M(e))throw Error(f(143));return e}},t.Component=v,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var i=n({},e.props),l=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=b.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(C in t)x.call(t,C)&&!y.hasOwnProperty(C)&&(i[C]=void 0===t[C]&&void 0!==s?s[C]:t[C])}var C=arguments.length-2;if(1===C)i.children=r;else if(1<C){s=Array(C);for(var d=0;d<C;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:o,type:e.type,key:l,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=L,t.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:C,_payload:{_status:-1,_result:e},_init:V}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},378:(e,t,r)=>{"use strict";e.exports=r(535)},921:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ServerStyleSheet:()=>ut,StyleSheetConsumer:()=>ht,StyleSheetContext:()=>ft,StyleSheetManager:()=>pt,ThemeConsumer:()=>Ct,ThemeContext:()=>st,ThemeProvider:()=>dt,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:()=>Ot,createGlobalStyle:()=>xt,css:()=>Be,default:()=>Et,isStyledComponent:()=>D,keyframes:()=>Lt,withTheme:()=>Mt});var n=r(946),o=r.n(n),i=r(246),l=r.n(i),a=r(378);const c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var s=r(309),C=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function d(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||C(n)&&C(o)))return!1;var n,o;return!0}const u=function(e,t){var r;void 0===t&&(t=d);var n,o=[],i=!1;return function(){for(var l=[],a=0;a<arguments.length;a++)l[a]=arguments[a];return i&&r===this&&t(l,o)||(n=e.apply(this,l),i=!0,r=this,o=l),n}};var f=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const h=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return f.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));function p(e){return Object.prototype.toString.call(e).slice(8,-1)}function v(e){return"Undefined"===p(e)}function g(e){return"Null"===p(e)}function w(e){return"Object"===p(e)&&(e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype)}function m(e){return"Array"===p(e)}function b(e){return"Symbol"===p(e)}var x,y,L,M,O;x=g,y=v;function E(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],l=0,a=i.length;l<a;l++,o++)n[o]=i[l];return n}function H(e,t,r,n){var o=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";"enumerable"===o&&(e[t]=r),"nonenumerable"===o&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function j(e,t,r){if(!w(t))return r&&m(r)&&r.forEach((function(r){t=r(e,t)})),t;var n={};w(e)&&(n=E(Object.getOwnPropertyNames(e),Object.getOwnPropertySymbols(e)).reduce((function(r,n){var o=e[n];return(!b(n)&&!Object.getOwnPropertyNames(t).includes(n)||b(n)&&!Object.getOwnPropertySymbols(t).includes(n))&&H(r,n,o,e),r}),{}));return E(Object.getOwnPropertyNames(t),Object.getOwnPropertySymbols(t)).reduce((function(n,o){var i=t[o],l=w(e)?e[o]:void 0;return r&&m(r)&&r.forEach((function(e){i=e(l,i)})),void 0!==l&&w(i)&&(i=j(l,i,r)),H(n,o,i,t),n}),n)}const V=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,o=e;return w(e)&&e.extensions&&1===Object.keys(e).length&&(o={},n=e.extensions),t.reduce((function(e,t){return j(e,t,n)}),o)};var Z=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},S=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},B=function(e){return"object"===(void 0===e?"undefined":R(e))&&e.constructor===Object},A=Object.freeze([]),T=Object.freeze({});function $(e){return"function"==typeof e}function F(e){return e.displayName||e.name||"Component"}function D(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",z="data-styled-version",W="data-styled-streamed",G="undefined"!=typeof window&&"HTMLElement"in window,U="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||"undefined"!=typeof process&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||!1,q={};var Y=function(e){function t(r){_(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var l=k(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+r+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return k(l)}return I(t,e),t}(Error),K=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,Q=function(e){var t=""+(e||""),r=[];return t.replace(K,(function(e,t,n){return r.push({componentId:t,matchIndex:n}),e})),r.map((function(e,n){var o=e.componentId,i=e.matchIndex,l=r[n+1];return{componentId:o,cssFromDOM:l?t.slice(i,l.matchIndex):t.slice(i)}}))},X=/^\s*\/\/.*$/gm,J=new(o())({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),ee=new(o())({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),te=[],re=function(e){if(-2===e){var t=te;return te=[],t}},ne=l()((function(e){te.push(e)})),oe=void 0,ie=void 0,le=void 0,ae=function(e,t,r){return t>0&&-1!==r.slice(0,t).indexOf(ie)&&r.slice(t-ie.length,t)!==ie?"."+oe:e};ee.use([function(e,t,r){2===e&&r.length&&r[0].lastIndexOf(ie)>0&&(r[0]=r[0].replace(le,ae))},ne,re]),J.use([ne,re]);var ce=function(e){return J("",e)};function se(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",o=e.join("").replace(X,""),i=t&&r?r+" "+t+" { "+o+" }":o;return oe=n,ie=t,le=new RegExp("\\"+ie+"\\b","g"),ee(r||!t?"":t,i)}var Ce=function(){return r.nc},de=function(e,t,r){r&&((e[t]||(e[t]=Object.create(null)))[r]=!0)},ue=function(e,t){e[t]=Object.create(null)},fe=function(e){return function(t,r){return void 0!==e[t]&&e[t][r]}},he=function(e){var t="";for(var r in e)t+=Object.keys(e[r]).join(" ")+" ";return t.trim()},pe=function(e){if(e.sheet)return e.sheet;for(var t=e.ownerDocument.styleSheets.length,r=0;r<t;r+=1){var n=e.ownerDocument.styleSheets[r];if(n.ownerNode===e)return n}throw new Y(10)},ve=function(e,t,r){if(!t)return!1;var n=e.cssRules.length;try{e.insertRule(t,r<=n?r:n)}catch(e){return!1}return!0},ge=function(e){return"\n/* sc-component-id: "+e+" */\n"},we=function(e,t){for(var r=0,n=0;n<=t;n+=1)r+=e[n];return r},me=function(e,t){return function(r){var n=Ce();return"<style "+[n&&'nonce="'+n+'"',N+'="'+he(t)+'"',z+'="4.4.1"',r].filter(Boolean).join(" ")+">"+e()+"</style>"}},be=function(e,t){return function(){var r,n=((r={})[N]=he(t),r[z]="4.4.1",r),o=Ce();return o&&(n.nonce=o),a.createElement("style",P({},n,{dangerouslySetInnerHTML:{__html:e()}}))}},xe=function(e){return function(){return Object.keys(e)}},ye=function(e,t){return e.createTextNode(ge(t))},Le=function e(t,r){var n=void 0===t?Object.create(null):t,o=void 0===r?Object.create(null):r,i=function(e){var t=o[e];return void 0!==t?t:o[e]=[""]},l=function(){var e="";for(var t in o){var r=o[t][0];r&&(e+=ge(t)+r)}return e},a={clone:function(){var t=function(e){var t=Object.create(null);for(var r in e)t[r]=P({},e[r]);return t}(n),r=Object.create(null);for(var i in o)r[i]=[o[i][0]];return e(t,r)},css:l,getIds:xe(o),hasNameForId:fe(n),insertMarker:i,insertRules:function(e,t,r){i(e)[0]+=t.join(" "),de(n,e,r)},removeRules:function(e){var t=o[e];void 0!==t&&(t[0]="",ue(n,e))},sealed:!1,styleTag:null,toElement:be(l,n),toHTML:me(l,n)};return a},Me=function(e,t,r,n,o){if(G&&!r){var i=function(e,t,r){var n=document;e?n=e.ownerDocument:t&&(n=t.ownerDocument);var o=n.createElement("style");o.setAttribute(N,""),o.setAttribute(z,"4.4.1");var i=Ce();if(i&&o.setAttribute("nonce",i),o.appendChild(n.createTextNode("")),e&&!t)e.appendChild(o);else{if(!t||!e||!t.parentNode)throw new Y(6);t.parentNode.insertBefore(o,r?t:t.nextSibling)}return o}(e,t,n);return U?function(e,t){var r=Object.create(null),n=Object.create(null),o=void 0!==t,i=!1,l=function(t){var o=n[t];return void 0!==o?o:(n[t]=ye(e.ownerDocument,t),e.appendChild(n[t]),r[t]=Object.create(null),n[t])},a=function(){var e="";for(var t in n)e+=n[t].data;return e};return{clone:function(){throw new Y(5)},css:a,getIds:xe(n),hasNameForId:fe(r),insertMarker:l,insertRules:function(e,n,a){for(var c=l(e),s=[],C=n.length,d=0;d<C;d+=1){var u=n[d],f=o;if(f&&-1!==u.indexOf("@import"))s.push(u);else{f=!1;var h=d===C-1?"":" ";c.appendData(""+u+h)}}de(r,e,a),o&&s.length>0&&(i=!0,t().insertRules(e+"-import",s))},removeRules:function(l){var a=n[l];if(void 0!==a){var c=ye(e.ownerDocument,l);e.replaceChild(c,a),n[l]=c,ue(r,l),o&&i&&t().removeRules(l+"-import")}},sealed:!1,styleTag:e,toElement:be(a,r),toHTML:me(a,r)}}(i,o):function(e,t){var r=Object.create(null),n=Object.create(null),o=[],i=void 0!==t,l=!1,a=function(e){var t=n[e];return void 0!==t?t:(n[e]=o.length,o.push(0),ue(r,e),n[e])},c=function(){var t=pe(e).cssRules,r="";for(var i in n){r+=ge(i);for(var l=n[i],a=we(o,l),c=a-o[l];c<a;c+=1){var s=t[c];void 0!==s&&(r+=s.cssText)}}return r};return{clone:function(){throw new Y(5)},css:c,getIds:xe(n),hasNameForId:fe(r),insertMarker:a,insertRules:function(n,c,s){for(var C=a(n),d=pe(e),u=we(o,C),f=0,h=[],p=c.length,v=0;v<p;v+=1){var g=c[v],w=i;w&&-1!==g.indexOf("@import")?h.push(g):ve(d,g,u+f)&&(w=!1,f+=1)}i&&h.length>0&&(l=!0,t().insertRules(n+"-import",h)),o[C]+=f,de(r,n,s)},removeRules:function(a){var c=n[a];if(void 0!==c&&!1!==e.isConnected){var s=o[c];!function(e,t,r){for(var n=t-r,o=t;o>n;o-=1)e.deleteRule(o)}(pe(e),we(o,c)-1,s),o[c]=0,ue(r,a),i&&l&&t().removeRules(a+"-import")}},sealed:!1,styleTag:e,toElement:be(c,r),toHTML:me(c,r)}}(i,o)}return Le()},Oe=/\s+/,Ee=void 0;Ee=G?U?40:1e3:-1;var He=0,je=void 0,Ve=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G?document.head:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_(this,e),this.getImportRuleTag=function(){var e=t.importRuleTag;if(void 0!==e)return e;var r=t.tags[0];return t.importRuleTag=Me(t.target,r?r.styleTag:null,t.forceServer,!0)},He+=1,this.id=He,this.forceServer=n,this.target=n?null:r,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!G||this.forceServer)return this;var e=[],t=[],r=!1,n=document.querySelectorAll("style["+N+"]["+z+'="4.4.1"]'),o=n.length;if(!o)return this;for(var i=0;i<o;i+=1){var l=n[i];r||(r=!!l.getAttribute(W));for(var a,c=(l.getAttribute(N)||"").trim().split(Oe),s=c.length,C=0;C<s;C+=1)a=c[C],this.rehydratedNames[a]=!0;t.push.apply(t,Q(l.textContent)),e.push(l)}var d=t.length;if(!d)return this;var u=this.makeTag(null);!function(e,t,r){for(var n=0,o=r.length;n<o;n+=1){var i=r[n],l=i.componentId,a=i.cssFromDOM,c=ce(a);e.insertRules(l,c)}for(var s=0,C=t.length;s<C;s+=1){var d=t[s];d.parentNode&&d.parentNode.removeChild(d)}}(u,e,t),this.capacity=Math.max(1,Ee-d),this.tags.push(u);for(var f=0;f<d;f+=1)this.tagMap[t[f].componentId]=u;return this},e.reset=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];je=new e(void 0,t).rehydrate()},e.prototype.clone=function(){var t=new e(this.target,this.forceServer);return this.clones.push(t),t.tags=this.tags.map((function(e){for(var r=e.getIds(),n=e.clone(),o=0;o<r.length;o+=1)t.tagMap[r[o]]=n;return n})),t.rehydratedNames=P({},this.rehydratedNames),t.deferred=P({},this.deferred),t},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach((function(e){e.sealed=!0}))},e.prototype.makeTag=function(e){var t=e?e.styleTag:null;return Me(this.target,t,this.forceServer,!1,this.getImportRuleTag)},e.prototype.getTagForId=function(e){var t=this.tagMap[e];if(void 0!==t&&!t.sealed)return t;var r=this.tags[this.tags.length-1];return this.capacity-=1,0===this.capacity&&(this.capacity=Ee,r=this.makeTag(r),this.tags.push(r)),this.tagMap[e]=r},e.prototype.hasId=function(e){return void 0!==this.tagMap[e]},e.prototype.hasNameForId=function(e,t){if(void 0===this.ignoreRehydratedNames[e]&&this.rehydratedNames[t])return!0;var r=this.tagMap[e];return void 0!==r&&r.hasNameForId(e,t)},e.prototype.deferredInject=function(e,t){if(void 0===this.tagMap[e]){for(var r=this.clones,n=0;n<r.length;n+=1)r[n].deferredInject(e,t);this.getTagForId(e).insertMarker(e),this.deferred[e]=t}},e.prototype.inject=function(e,t,r){for(var n=this.clones,o=0;o<n.length;o+=1)n[o].inject(e,t,r);var i=this.getTagForId(e);if(void 0!==this.deferred[e]){var l=this.deferred[e].concat(t);i.insertRules(e,l,r),this.deferred[e]=void 0}else i.insertRules(e,t,r)},e.prototype.remove=function(e){var t=this.tagMap[e];if(void 0!==t){for(var r=this.clones,n=0;n<r.length;n+=1)r[n].remove(e);t.removeRules(e),this.ignoreRehydratedNames[e]=!0,this.deferred[e]=void 0}},e.prototype.toHTML=function(){return this.tags.map((function(e){return e.toHTML()})).join("")},e.prototype.toReactElements=function(){var e=this.id;return this.tags.map((function(t,r){var n="sc-"+e+"-"+r;return(0,a.cloneElement)(t.toElement(),{key:n})}))},S(e,null,[{key:"master",get:function(){return je||(je=(new e).rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),Ze=function(){function e(t,r){var n=this;_(this,e),this.inject=function(e){e.hasNameForId(n.id,n.name)||e.inject(n.id,n.rules,n.name)},this.toString=function(){throw new Y(12,String(n.name))},this.name=t,this.rules=r,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),Re=/([A-Z])/g,_e=/^ms-/;function Se(e){return e.replace(Re,"-$1").toLowerCase().replace(_e,"-ms-")}var Pe=function(e){return null==e||!1===e||""===e},Ie=function e(t,r){var n=[];return Object.keys(t).forEach((function(r){if(!Pe(t[r])){if(B(t[r]))return n.push.apply(n,e(t[r],r)),n;if($(t[r]))return n.push(Se(r)+":",t[r],";"),n;n.push(Se(r)+": "+(o=r,(null==(i=t[r])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||o in c?String(i).trim():i+"px")+";"))}var o,i;return n})),r?[r+" {"].concat(n,["}"]):n};function ke(e,t,r){if(Array.isArray(e)){for(var n,o=[],i=0,l=e.length;i<l;i+=1)null!==(n=ke(e[i],t,r))&&(Array.isArray(n)?o.push.apply(o,n):o.push(n));return o}return Pe(e)?null:D(e)?"."+e.styledComponentId:$(e)?"function"!=typeof(a=e)||a.prototype&&a.prototype.isReactComponent||!t?e:ke(e(t),t,r):e instanceof Ze?r?(e.inject(r),e.getName()):e:B(e)?Ie(e):e.toString();var a}function Be(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return $(e)||B(e)?ke(Z(A,[e].concat(r))):ke(Z(e,r))}function Ae(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;if(!(0,s.isValidElementType)(t))throw new Y(1,String(t));var n=function(){return e(t,r,Be.apply(void 0,arguments))};return n.withConfig=function(n){return Ae(e,t,P({},r,n))},n.attrs=function(n){return Ae(e,t,P({},r,{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n}function Te(e){for(var t,r=0|e.length,n=0|r,o=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++o;switch(r){case 3:n^=(255&e.charCodeAt(o+2))<<16;case 2:n^=(255&e.charCodeAt(o+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(o)))+((1540483477*(n>>>16)&65535)<<16)}return((n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16))^n>>>15)>>>0}var $e=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fe(e){var t="",r=void 0;for(r=e;r>52;r=Math.floor(r/52))t=$e(r%52)+t;return $e(r%52)+t}function De(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!De(n,t))return!1;if($(n)&&!D(n))return!1}return!t.some((function(e){return $(e)||function(e){for(var t in e)if($(e[t]))return!0;return!1}(e)}))}var Ne,ze=function(e){return Fe(Te(e))},We=function(){function e(t,r,n){_(this,e),this.rules=t,this.isStatic=De(t,r),this.componentId=n,Ve.master.hasId(n)||Ve.master.deferredInject(n,[])}return e.prototype.generateAndInjectStyles=function(e,t){var r=this.isStatic,n=this.componentId,o=this.lastClassName;if(G&&r&&"string"==typeof o&&t.hasNameForId(n,o))return o;var i=ke(this.rules,e,t),l=ze(this.componentId+i.join(""));return t.hasNameForId(n,l)||t.inject(this.componentId,se(i,"."+l,void 0,n),l),this.lastClassName=l,l},e.generateName=function(e){return ze(e)},e}(),Ge=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T,n=!!r&&e.theme===r.theme,o=e.theme&&!n?e.theme:t||r.theme;return o},Ue=/[[\].#*$><+~=|^:(),"'`-]+/g,qe=/(^-|-$)/g;function Ye(e){return e.replace(Ue,"-").replace(qe,"")}function Ke(e){return"string"==typeof e&&!0}var Qe={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Xe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Je=((Ne={})[s.ForwardRef]={$$typeof:!0,render:!0},Ne),et=Object.defineProperty,tt=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,nt=void 0===rt?function(){return[]}:rt,ot=Object.getOwnPropertyDescriptor,it=Object.getPrototypeOf,lt=Object.prototype,at=Array.prototype;function ct(e,t,r){if("string"!=typeof t){var n=it(t);n&&n!==lt&&ct(e,n,r);for(var o=at.concat(tt(t),nt(t)),i=Je[e.$$typeof]||Qe,l=Je[t.$$typeof]||Qe,a=o.length,c=void 0,s=void 0;a--;)if(s=o[a],!(Xe[s]||r&&r[s]||l&&l[s]||i&&i[s])&&(c=ot(t,s)))try{et(e,s,c)}catch(e){}return e}return e}var st=(0,a.createContext)(),Ct=st.Consumer,dt=function(e){function t(r){_(this,t);var n=k(this,e.call(this,r));return n.getContext=u(n.getContext.bind(n)),n.renderInner=n.renderInner.bind(n),n}return I(t,e),t.prototype.render=function(){return this.props.children?a.createElement(st.Consumer,null,this.renderInner):null},t.prototype.renderInner=function(e){var t=this.getContext(this.props.theme,e);return a.createElement(st.Provider,{value:t},this.props.children)},t.prototype.getTheme=function(e,t){if($(e))return e(t);if(null===e||Array.isArray(e)||"object"!==(void 0===e?"undefined":R(e)))throw new Y(8);return P({},t,e)},t.prototype.getContext=function(e,t){return this.getTheme(e,t)},t}(a.Component),ut=function(){function e(){_(this,e),this.masterSheet=Ve.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return e.prototype.seal=function(){if(!this.sealed){var e=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(e,1),this.sealed=!0}},e.prototype.collectStyles=function(e){if(this.sealed)throw new Y(2);return a.createElement(pt,{sheet:this.instance},e)},e.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},e.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},e.prototype.interleaveWithNodeStream=function(e){throw new Y(3)},e}(),ft=(0,a.createContext)(),ht=ft.Consumer,pt=function(e){function t(r){_(this,t);var n=k(this,e.call(this,r));return n.getContext=u(n.getContext),n}return I(t,e),t.prototype.getContext=function(e,t){if(e)return e;if(t)return new Ve(t);throw new Y(4)},t.prototype.render=function(){var e=this.props,t=e.children,r=e.sheet,n=e.target;return a.createElement(ft.Provider,{value:this.getContext(r,n)},t)},t}(a.Component),vt={};var gt=function(e){function t(){_(this,t);var r=k(this,e.call(this));return r.attrs={},r.renderOuter=r.renderOuter.bind(r),r.renderInner=r.renderInner.bind(r),r}return I(t,e),t.prototype.render=function(){return a.createElement(ht,null,this.renderOuter)},t.prototype.renderOuter=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve.master;return this.styleSheet=e,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():a.createElement(Ct,null,this.renderInner)},t.prototype.renderInner=function(e){var t=this.props.forwardedComponent,r=t.componentStyle,n=t.defaultProps,o=(t.displayName,t.foldedComponentIds),i=t.styledComponentId,l=t.target,c=void 0;c=r.isStatic?this.generateAndInjectStyles(T,this.props):this.generateAndInjectStyles(Ge(this.props,e,n)||T,this.props);var s=this.props.as||this.attrs.as||l,C=Ke(s),d={},u=P({},this.props,this.attrs),f=void 0;for(f in u)"forwardedComponent"!==f&&"as"!==f&&("forwardedRef"===f?d.ref=u[f]:"forwardedAs"===f?d.as=u[f]:C&&!h(f)||(d[f]=u[f]));return this.props.style&&this.attrs.style&&(d.style=P({},this.attrs.style,this.props.style)),d.className=Array.prototype.concat(o,i,c!==i?c:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),(0,a.createElement)(s,d)},t.prototype.buildExecutionContext=function(e,t,r){var n=this,o=P({},t,{theme:e});return r.length?(this.attrs={},r.forEach((function(e){var t,r=e,i=!1,l=void 0,a=void 0;for(a in $(r)&&(r=r(o),i=!0),r)l=r[a],i||!$(l)||(t=l)&&t.prototype&&t.prototype.isReactComponent||D(l)||(l=l(o)),n.attrs[a]=l,o[a]=l})),o):o},t.prototype.generateAndInjectStyles=function(e,t){var r=t.forwardedComponent,n=r.attrs,o=r.componentStyle;r.warnTooManyClasses;return o.isStatic&&!n.length?o.generateAndInjectStyles(T,this.styleSheet):o.generateAndInjectStyles(this.buildExecutionContext(e,t,n),this.styleSheet)},t}(a.Component);function wt(e,t,r){var n=D(e),o=!Ke(e),i=t.displayName,l=void 0===i?function(e){return Ke(e)?"styled."+e:"Styled("+F(e)+")"}(e):i,c=t.componentId,s=void 0===c?function(e,t,r){var n="string"!=typeof t?"sc":Ye(t),o=(vt[n]||0)+1;vt[n]=o;var i=n+"-"+e.generateName(n+o);return r?r+"-"+i:i}(We,t.displayName,t.parentComponentId):c,C=t.ParentComponent,d=void 0===C?gt:C,u=t.attrs,f=void 0===u?A:u,h=t.displayName&&t.componentId?Ye(t.displayName)+"-"+t.componentId:t.componentId||s,p=n&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,v=new We(n?e.componentStyle.rules.concat(r):r,p,h),g=void 0,w=function(e,t){return a.createElement(d,P({},e,{forwardedComponent:g,forwardedRef:t}))};return w.displayName=l,(g=a.forwardRef(w)).displayName=l,g.attrs=p,g.componentStyle=v,g.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):A,g.styledComponentId=h,g.target=n?e.target:e,g.withComponent=function(e){var n=t.componentId,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["componentId"]),i=n&&n+"-"+(Ke(e)?e:Ye(F(e)));return wt(e,P({},o,{attrs:p,componentId:i,ParentComponent:d}),r)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?V(e.defaultProps,t):t}}),g.toString=function(){return"."+g.styledComponentId},o&&ct(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var mt=function(e){return Ae(wt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){mt[e]=mt(e)}));var bt=function(){function e(t,r){_(this,e),this.rules=t,this.componentId=r,this.isStatic=De(t,A),Ve.master.hasId(r)||Ve.master.deferredInject(r,[])}return e.prototype.createStyles=function(e,t){var r=se(ke(this.rules,e,t),"");t.inject(this.componentId,r)},e.prototype.removeStyles=function(e){var t=this.componentId;e.hasId(t)&&e.remove(t)},e.prototype.renderStyles=function(e,t){this.removeStyles(t),this.createStyles(e,t)},e}();function xt(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Be.apply(void 0,[e].concat(r)),i="sc-global-"+Te(JSON.stringify(o)),l=new bt(o,i),c=function(e){function t(r){_(this,t);var n=k(this,e.call(this,r)),o=n.constructor,i=o.globalStyle,l=o.styledComponentId;return G&&(window.scCGSHMRCache[l]=(window.scCGSHMRCache[l]||0)+1),n.state={globalStyle:i,styledComponentId:l},n}return I(t,e),t.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),0===window.scCGSHMRCache[this.state.styledComponentId]&&this.state.globalStyle.removeStyles(this.styleSheet)},t.prototype.render=function(){var e=this;return a.createElement(ht,null,(function(t){e.styleSheet=t||Ve.master;var r=e.state.globalStyle;return r.isStatic?(r.renderStyles(q,e.styleSheet),null):a.createElement(Ct,null,(function(t){var n=e.constructor.defaultProps,o=P({},e.props);return void 0!==t&&(o.theme=Ge(e.props,t,n)),r.renderStyles(o,e.styleSheet),null}))}))},t}(a.Component);return c.globalStyle=l,c.styledComponentId=i,c}G&&(window.scCGSHMRCache={});var yt=function(e){return e.replace(/\s|\\n/g,"")};function Lt(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Be.apply(void 0,[e].concat(r)),i=Fe(Te(yt(JSON.stringify(o))));return new Ze(i,se(o,i,"@keyframes"))}var Mt=function(e){var t=a.forwardRef((function(t,r){return a.createElement(Ct,null,(function(n){var o=e.defaultProps,i=Ge(t,n,o);return a.createElement(e,P({},t,{theme:i,ref:r}))}))}));return ct(t,e),t.displayName="WithTheme("+F(e)+")",t},Ot={StyleSheet:Ve};const Et=mt},130:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,C=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,p=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,m=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case C:case d:case i:case a:case l:case f:return e;default:switch(e=e&&e.$$typeof){case s:case u:case v:case p:case c:return e;default:return t}}case o:return t}}}function y(e){return x(e)===d}t.ForwardRef=u,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===l||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===p||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===w||e.$$typeof===m||e.$$typeof===b||e.$$typeof===g)}},309:(e,t,r)=>{"use strict";e.exports=r(130)},246:e=>{e.exports=function(){"use strict";return function(e){var t="/*|*/",r=t+"}";function n(t){if(t)try{e(t+"}")}catch(e){}}return function(o,i,l,a,c,s,C,d,u,f){switch(o){case 1:if(0===u&&64===i.charCodeAt(0))return e(i+";"),"";break;case 2:if(0===d)return i+t;break;case 3:switch(d){case 102:case 112:return e(l[0]+i),"";default:return i+(0===f?t:"")}case-2:i.split(r).forEach(n)}}}}()},946:e=>{e.exports=function e(t){"use strict";var r=/^\0+/g,n=/[\0\r\f]/g,o=/: */g,i=/zoo|gra/,l=/([,: ])(transform)/g,a=/,+\s*(?![^(]*[)])/g,c=/ +\s*(?![^(]*[)])/g,s=/ *[\0] */g,C=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,f=/\W+/g,h=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,v=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,w=/([[}=:>])\s+/g,m=/(\{[^{]+?);(?=\})/g,b=/\s{2,}/g,x=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,O=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,H=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,V="-webkit-",Z="-moz-",R="-ms-",_=59,S=125,P=123,I=40,k=41,B=91,A=93,T=10,$=13,F=9,D=64,N=32,z=38,W=45,G=95,U=42,q=44,Y=58,K=39,Q=34,X=47,J=62,ee=43,te=126,re=0,ne=12,oe=11,ie=107,le=109,ae=115,ce=112,se=111,Ce=105,de=99,ue=100,fe=112,he=1,pe=1,ve=0,ge=1,we=1,me=1,be=0,xe=0,ye=0,Le=[],Me=[],Oe=0,Ee=null,He=-2,je=-1,Ve=0,Ze=1,Re=2,_e=3,Se=0,Pe=1,Ie="",ke="",Be="";function Ae(e,t,o,i,l){for(var a,c,C=0,d=0,u=0,f=0,g=0,w=0,m=0,b=0,y=0,M=0,O=0,E=0,H=0,j=0,G=0,be=0,Me=0,Ee=0,He=0,je=o.length,$e=je-1,Ge="",Ue="",qe="",Ye="",Ke="",Qe="";G<je;){if(m=o.charCodeAt(G),G===$e&&d+f+u+C!==0&&(0!==d&&(m=d===X?T:X),f=u=C=0,je++,$e++),d+f+u+C===0){if(G===$e&&(be>0&&(Ue=Ue.replace(n,"")),Ue.trim().length>0)){switch(m){case N:case F:case _:case $:case T:break;default:Ue+=o.charAt(G)}m=_}if(1===Me)switch(m){case P:case S:case _:case Q:case K:case I:case k:case q:Me=0;case F:case $:case T:case N:break;default:for(Me=0,He=G,g=m,G--,m=_;He<je;)switch(o.charCodeAt(He++)){case T:case $:case _:++G,m=g,He=je;break;case Y:be>0&&(++G,m=g);case P:He=je}}switch(m){case P:for(g=(Ue=Ue.trim()).charCodeAt(0),O=1,He=++G;G<je;){switch(m=o.charCodeAt(G)){case P:O++;break;case S:O--;break;case X:switch(w=o.charCodeAt(G+1)){case U:case X:G=We(w,G,$e,o)}break;case B:m++;case I:m++;case Q:case K:for(;G++<$e&&o.charCodeAt(G)!==m;);}if(0===O)break;G++}if(qe=o.substring(He,G),g===re&&(g=(Ue=Ue.replace(r,"").trim()).charCodeAt(0)),g===D){switch(be>0&&(Ue=Ue.replace(n,"")),w=Ue.charCodeAt(1)){case ue:case le:case ae:case W:a=t;break;default:a=Le}if(He=(qe=Ae(t,a,qe,w,l+1)).length,ye>0&&0===He&&(He=Ue.length),Oe>0&&(a=Te(Le,Ue,Ee),c=ze(_e,qe,a,t,pe,he,He,w,l,i),Ue=a.join(""),void 0!==c&&0===(He=(qe=c.trim()).length)&&(w=0,qe="")),He>0)switch(w){case ae:Ue=Ue.replace(L,Ne);case ue:case le:case W:qe=Ue+"{"+qe+"}";break;case ie:qe=(Ue=Ue.replace(h,"$1 $2"+(Pe>0?Ie:"")))+"{"+qe+"}",qe=1===we||2===we&&De("@"+qe,3)?"@"+V+qe+"@"+qe:"@"+qe;break;default:qe=Ue+qe,i===fe&&(Ye+=qe,qe="")}else qe=""}else qe=Ae(t,Te(t,Ue,Ee),qe,i,l+1);Ke+=qe,E=0,Me=0,j=0,be=0,Ee=0,H=0,Ue="",qe="",m=o.charCodeAt(++G);break;case S:case _:if((He=(Ue=(be>0?Ue.replace(n,""):Ue).trim()).length)>1)switch(0===j&&((g=Ue.charCodeAt(0))===W||g>96&&g<123)&&(He=(Ue=Ue.replace(" ",":")).length),Oe>0&&void 0!==(c=ze(Ze,Ue,t,e,pe,he,Ye.length,i,l,i))&&0===(He=(Ue=c.trim()).length)&&(Ue="\0\0"),g=Ue.charCodeAt(0),w=Ue.charCodeAt(1),g){case re:break;case D:if(w===Ce||w===de){Qe+=Ue+o.charAt(G);break}default:if(Ue.charCodeAt(He-1)===Y)break;Ye+=Fe(Ue,g,w,Ue.charCodeAt(2))}E=0,Me=0,j=0,be=0,Ee=0,Ue="",m=o.charCodeAt(++G)}}switch(m){case $:case T:if(d+f+u+C+xe===0)switch(M){case k:case K:case Q:case D:case te:case J:case U:case ee:case X:case W:case Y:case q:case _:case P:case S:break;default:j>0&&(Me=1)}d===X?d=0:ge+E===0&&i!==ie&&Ue.length>0&&(be=1,Ue+="\0"),Oe*Se>0&&ze(Ve,Ue,t,e,pe,he,Ye.length,i,l,i),he=1,pe++;break;case _:case S:if(d+f+u+C===0){he++;break}default:switch(he++,Ge=o.charAt(G),m){case F:case N:if(f+C+d===0)switch(b){case q:case Y:case F:case N:Ge="";break;default:m!==N&&(Ge=" ")}break;case re:Ge="\\0";break;case ne:Ge="\\f";break;case oe:Ge="\\v";break;case z:f+d+C===0&&ge>0&&(Ee=1,be=1,Ge="\f"+Ge);break;case 108:if(f+d+C+ve===0&&j>0)switch(G-j){case 2:b===ce&&o.charCodeAt(G-3)===Y&&(ve=b);case 8:y===se&&(ve=y)}break;case Y:f+d+C===0&&(j=G);break;case q:d+u+f+C===0&&(be=1,Ge+="\r");break;case Q:case K:0===d&&(f=f===m?0:0===f?m:f);break;case B:f+d+u===0&&C++;break;case A:f+d+u===0&&C--;break;case k:f+d+C===0&&u--;break;case I:f+d+C===0&&(0===E&&(2*b+3*y==533||(O=0,E=1)),u++);break;case D:d+u+f+C+j+H===0&&(H=1);break;case U:case X:if(f+C+u>0)break;switch(d){case 0:switch(2*m+3*o.charCodeAt(G+1)){case 235:d=X;break;case 220:He=G,d=U}break;case U:m===X&&b===U&&He+2!==G&&(33===o.charCodeAt(He+2)&&(Ye+=o.substring(He,G+1)),Ge="",d=0)}}if(0===d){if(ge+f+C+H===0&&i!==ie&&m!==_)switch(m){case q:case te:case J:case ee:case k:case I:if(0===E){switch(b){case F:case N:case T:case $:Ge+="\0";break;default:Ge="\0"+Ge+(m===q?"":"\0")}be=1}else switch(m){case I:j+7===G&&108===b&&(j=0),E=++O;break;case k:0==(E=--O)&&(be=1,Ge+="\0")}break;case F:case N:switch(b){case re:case P:case S:case _:case q:case ne:case F:case N:case T:case $:break;default:0===E&&(be=1,Ge+="\0")}}Ue+=Ge,m!==N&&m!==F&&(M=m)}}y=b,b=m,G++}if(He=Ye.length,ye>0&&0===He&&0===Ke.length&&0===t[0].length==0&&(i!==le||1===t.length&&(ge>0?ke:Be)===t[0])&&(He=t.join(",").length+2),He>0){if(a=0===ge&&i!==ie?function(e){for(var t,r,o=0,i=e.length,l=Array(i);o<i;++o){for(var a=e[o].split(s),c="",C=0,d=0,u=0,f=0,h=a.length;C<h;++C)if(!(0===(d=(r=a[C]).length)&&h>1)){if(u=c.charCodeAt(c.length-1),f=r.charCodeAt(0),t="",0!==C)switch(u){case U:case te:case J:case ee:case N:case I:break;default:t=" "}switch(f){case z:r=t+ke;case te:case J:case ee:case N:case k:case I:break;case B:r=t+r+ke;break;case Y:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(me>0){r=t+r.substring(8,d-1);break}default:(C<1||a[C-1].length<1)&&(r=t+ke+r)}break;case q:t="";default:r=d>1&&r.indexOf(":")>0?t+r.replace(x,"$1"+ke+"$2"):t+r+ke}c+=r}l[o]=c.replace(n,"").trim()}return l}(t):t,Oe>0&&void 0!==(c=ze(Re,Ye,a,e,pe,he,He,i,l,i))&&0===(Ye=c).length)return Qe+Ye+Ke;if(Ye=a.join(",")+"{"+Ye+"}",we*ve!=0){switch(2!==we||De(Ye,2)||(ve=0),ve){case se:Ye=Ye.replace(v,":"+Z+"$1")+Ye;break;case ce:Ye=Ye.replace(p,"::"+V+"input-$1")+Ye.replace(p,"::"+Z+"$1")+Ye.replace(p,":"+R+"input-$1")+Ye}ve=0}}return Qe+Ye+Ke}function Te(e,t,r){var n=t.trim().split(C),o=n,i=n.length,l=e.length;switch(l){case 0:case 1:for(var a=0,c=0===l?"":e[0]+" ";a<i;++a)o[a]=$e(c,o[a],r,l).trim();break;default:a=0;var s=0;for(o=[];a<i;++a)for(var d=0;d<l;++d)o[s++]=$e(e[d]+" ",n[a],r,l).trim()}return o}function $e(e,t,r,n){var o=t,i=o.charCodeAt(0);switch(i<33&&(i=(o=o.trim()).charCodeAt(0)),i){case z:switch(ge+n){case 0:case 1:if(0===e.trim().length)break;default:return o.replace(d,"$1"+e.trim())}break;case Y:if(103!==o.charCodeAt(1))return e.trim()+o.replace(d,"$1"+e.trim());if(me>0&&ge>0)return o.replace(u,"$1").replace(d,"$1"+Be);default:if(r*ge>0&&o.indexOf("\f")>0)return o.replace(d,(e.charCodeAt(0)===Y?"":"$1")+e.trim())}return e+o}function Fe(e,t,r,n){var s,C=0,d=e+";",u=2*t+3*r+4*n;if(944===u)return function(e){var t=e.length,r=e.indexOf(":",9)+1,n=e.substring(0,r).trim(),o=e.substring(r,t-1).trim();switch(e.charCodeAt(9)*Pe){case 0:break;case W:if(110!==e.charCodeAt(10))break;default:var i=o.split((o="",a)),l=0;for(r=0,t=i.length;l<t;r=0,++l){for(var s=i[l],C=s.split(c);s=C[r];){var d=s.charCodeAt(0);if(1===Pe&&(d>D&&d<90||d>96&&d<123||d===G||d===W&&s.charCodeAt(1)!==W)&&isNaN(parseFloat(s))+(-1!==s.indexOf("("))===1)switch(s){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:s+=Ie}C[r++]=s}o+=(0===l?"":",")+C.join(" ")}}return o=n+o+";",1===we||2===we&&De(o,1)?V+o+o:o}(d);if(0===we||2===we&&!De(d,1))return d;switch(u){case 1015:return 97===d.charCodeAt(10)?V+d+d:d;case 951:return 116===d.charCodeAt(3)?V+d+d:d;case 963:return 110===d.charCodeAt(5)?V+d+d:d;case 1009:if(100!==d.charCodeAt(4))break;case 969:case 942:return V+d+d;case 978:return V+d+Z+d+d;case 1019:case 983:return V+d+Z+d+R+d+d;case 883:return d.charCodeAt(8)===W?V+d+d:d.indexOf("image-set(",11)>0?d.replace(j,"$1"+V+"$2")+d:d;case 932:if(d.charCodeAt(4)===W)switch(d.charCodeAt(5)){case 103:return V+"box-"+d.replace("-grow","")+V+d+R+d.replace("grow","positive")+d;case 115:return V+d+R+d.replace("shrink","negative")+d;case 98:return V+d+R+d.replace("basis","preferred-size")+d}return V+d+R+d+d;case 964:return V+d+R+"flex-"+d+d;case 1023:if(99!==d.charCodeAt(8))break;return s=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),V+"box-pack"+s+V+d+R+"flex-pack"+s+d;case 1005:return i.test(d)?d.replace(o,":"+V)+d.replace(o,":"+Z)+d:d;case 1e3:switch(C=(s=d.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(C)){case 226:s=d.replace(y,"tb");break;case 232:s=d.replace(y,"tb-rl");break;case 220:s=d.replace(y,"lr");break;default:return d}return V+d+R+s+d;case 1017:if(-1===d.indexOf("sticky",9))return d;case 975:switch(C=(d=e).length-10,u=(s=(33===d.charCodeAt(C)?d.substring(0,C):d).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(s.charCodeAt(8)<111)break;case 115:d=d.replace(s,V+s)+";"+d;break;case 207:case 102:d=d.replace(s,V+(u>102?"inline-":"")+"box")+";"+d.replace(s,V+s)+";"+d.replace(s,R+s+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===W)switch(d.charCodeAt(6)){case 105:return s=d.replace("-items",""),V+d+V+"box-"+s+R+"flex-"+s+d;case 115:return V+d+R+"flex-item-"+d.replace(O,"")+d;default:return V+d+R+"flex-line-pack"+d.replace("align-content","").replace(O,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==W||122===d.charCodeAt(4))break;case 931:case 953:if(!0===H.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?Fe(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):d.replace(s,V+s)+d.replace(s,Z+s.replace("fill-",""))+d;break;case 962:if(d=V+d+(102===d.charCodeAt(5)?R+d:"")+d,r+n===211&&105===d.charCodeAt(13)&&d.indexOf("transform",10)>0)return d.substring(0,d.indexOf(";",27)+1).replace(l,"$1"+V+"$2")+d}return d}function De(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10),o=e.substring(r+1,e.length-1);return Ee(2!==t?n:n.replace(E,"$1"),o,t)}function Ne(e,t){var r=Fe(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(M," or ($1)").substring(4):"("+t+")"}function ze(e,t,r,n,o,i,l,a,c,s){for(var C,d=0,u=t;d<Oe;++d)switch(C=Me[d].call(Ue,e,u,r,n,o,i,l,a,c,s)){case void 0:case!1:case!0:case null:break;default:u=C}if(u!==t)return u}function We(e,t,r,n){for(var o=t+1;o<r;++o)switch(n.charCodeAt(o)){case X:if(e===U&&n.charCodeAt(o-1)===U&&t+2!==o)return o+1;break;case T:if(e===X)return o+1}return o}function Ge(e){for(var t in e){var r=e[t];switch(t){case"keyframe":Pe=0|r;break;case"global":me=0|r;break;case"cascade":ge=0|r;break;case"compress":be=0|r;break;case"semicolon":xe=0|r;break;case"preserve":ye=0|r;break;case"prefix":Ee=null,r?"function"!=typeof r?we=1:(we=2,Ee=r):we=0}}return Ge}function Ue(t,r){if(void 0!==this&&this.constructor===Ue)return e(t);var o=t,i=o.charCodeAt(0);i<33&&(i=(o=o.trim()).charCodeAt(0)),Pe>0&&(Ie=o.replace(f,i===B?"":"-")),i=1,1===ge?Be=o:ke=o;var l,a=[Be];Oe>0&&void 0!==(l=ze(je,r,a,a,pe,he,0,0,0,0))&&"string"==typeof l&&(r=l);var c=Ae(Le,a,r,0,0);return Oe>0&&void 0!==(l=ze(He,c,a,a,pe,he,c.length,0,0,0))&&"string"!=typeof(c=l)&&(i=0),Ie="",Be="",ke="",ve=0,pe=1,he=1,be*i==0?c:c.replace(n,"").replace(g,"").replace(w,"$1").replace(m,"$1").replace(b," ")}return Ue.use=function e(t){switch(t){case void 0:case null:Oe=Me.length=0;break;default:if("function"==typeof t)Me[Oe++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else Se=0|!!t}return e},Ue.set=Ge,void 0!==t&&Ge(t),Ue}(null)},591:(e,t,r)=>{"use strict";r.d(t,{V:()=>q});var n=r(973);const o=e=>e.replace(/[^\d,]/g,"").split(","),i=e=>{if(e.length<2)throw new Error("Invalid color object, cannot convert to HSL.");const t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.min(t,r,n),i=Math.max(t,r,n),l=i-o;let a=0,c=0,s=0;return a=0===l?0:i===t?(r-n)/l%6:i===r?(n-t)/l+2:(t-r)/l+4,a=Math.round(60*a),a<0&&(a+=360),s=(i+o)/2,c=0==l?0:l/(1-Math.abs(2*s-1)),c=+(100*c).toFixed(1),s=+(100*s).toFixed(1),{hsl:`hsl(${a}, ${c}%, ${s}%)`,hsla:`hsl(${a}, ${c}%, ${s}%, 1)`,hue:a,lightness:s,saturation:c}},l=e=>{if(!e)throw new Error("Color is not defined");const t=e.toLowerCase();let r;if(t.includes("rgb")){const e=o(t);e.length>3&&e.pop(),r=i(e).hue}if(t.includes("#")){const e=(e=>{if(!e.includes("#"))throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");let t=0,r=0,n=0;if(4===e.length)t=`0x${e[1]}${e[1]}`,r=`0x${e[2]}${e[2]}`,n=`0x${e[3]}${e[3]}`;else{if(7!==e.length)throw new Error("Invalid hex string length, cannot convert to RGB.");t=`0x${e[1]}${e[2]}`,r=`0x${e[3]}${e[4]}`,n=`0x${e[5]}${e[6]}`}return[+t,+r,+n]})(t);r=i(e).hue}if(t.includes("hsl")){r=o(t)[0]}const n=r.toString();if(!n)throw new Error(`Hue was unable to be extracted from "${t}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);return n},a=(e,t)=>{const r={};return Object.keys(e).forEach((n=>{r[n]=t[n]?t[n]:e[n]})),r};var c,s=r(678);!function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.SharePage="sharePage",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.RequestQuitPlatformDialogInternal="requestQuitPlatformDialogInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized"}(c||(c={}));const C=async e=>fin.Platform.wrapSync(e).getClient(),d=async e=>{const t=await C(e),r="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let n;try{n=await t.dispatch("isWorkspacePlatform")}catch(e){throw new Error(r)}if(!0!==n?.isWorkspacePlatform)throw new Error(r);return n},u=async e=>(await d(e),C(e)),f=async e=>{if(!0!==(await d(e))?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return C(e)};var h,p,v,g,w,m,b,x;!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(h||(h={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(p||(p={})),function(e){e.Active="active",e.Default="default"}(v||(v={})),function(e){e.Suggestion="suggestion"}(g||(g={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(w||(w={})),function(e){e.MultiSelect="MultiSelect"}(m||(m={})),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(b||(b={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(x||(x={}));var y,L,M,O,E,H,j,V,Z;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(y||(y={})),function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(L||(L={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.OpenStorefront="OpenStorefront",e.Quit="Quit",e.Custom="Custom"}(M||(M={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.Custom="Custom"}(O||(O={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Custom="Custom"}(E||(E={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(H||(H={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(j||(j={})),function(e){e.CustomButton="CustomButton",e.CustomDropdownItem="CustomDropdownItem",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(V||(V={})),function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(Z||(Z={}));var R=r(532);const _=s.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function S(e){let t;return()=>{if(!s.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await _;const r={clientAPIVersion:s.u0},n=await fin.InterApplicationBus.Channel.connect(e,{payload:r});return n.onDisconnection((async()=>{t=void 0})),n})().then((e=>e)).catch((r=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${r}`)}))),t}}r(121);const P=e=>`__browser_window__-${e.uuid}-${e.name}`,I=new Map;var k,B;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page"}(k||(k={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(B||(B={}));const A={...k,...B},T=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),getPages:async()=>(await f(e)).dispatch(c.GetPagesForWindow,e),getPage:async t=>(await f(e)).dispatch(c.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>{const r=await f(e);t?.title||(t.title=await r.dispatch(c.GetUniquePageTitle,void 0));const n=(await r.dispatch(c.GetAllAttachedPages,void 0)).find((e=>e.pageId===t.pageId||e.title===t.title));if(n)throw n.pageId===t.pageId?new Error(`page with id ${t.pageId} is already attached to a browser window ${n.parentIdentity.name}`):new Error(`page with title ${t.title} is already attached to a browser window ${n.parentIdentity.name}`);const o={identity:e,pages:[t]};return r.dispatch(c.AttachPagesToWindow,o)},removePage:async t=>(await f(e)).dispatch(c.DetachPagesFromWindow,{identity:e,pageIds:[t]}),setActivePage:async t=>(await f(e)).dispatch(c.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.UpdatePageForWindow,t)},reorderPages:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await f(e);const r=fin.Window.wrapSync(e);await r.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await f(e);const r=fin.Window.wrapSync(e);await r.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},_openViewTabContextMenu:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await f(e);const r=await(e=>{const t=P(e);return I.has(t)||I.set(t,S(t)),I.get(t)()})(e);return r.dispatch(A.OpenSaveModalInternal,t)},_openSaveButtonContextMenu:async t=>{const r=await f(e);return t.identity=e,r.dispatch(c.OpenSaveButtonContextMenuInternal,t)}});let $=!1;const F=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>T(e),createWindow:async r=>{await f(e),$||($=!0,(0,R.GO)({allowed:!0}));const n=await t.createWindow(r);return T(n.identity)},getAllAttachedPages:async()=>(await f(e)).dispatch(c.GetAllAttachedPages,void 0),getAllWindows:async()=>{await f(e);return(await fin.Application.wrapSync(e).getChildWindows()).filter((e=>e.identity.name.includes("internal-generated-window-"))).map((e=>T(e.identity)))},getUniquePageTitle:async t=>(await f(e)).dispatch(c.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await f(e)).dispatch(c.GetLastFocusedBrowserWindow,void 0)}},D=e=>({createPage:async t=>(await f(e)).dispatch(c.CreateSavedPageInternal,t),deletePage:async t=>(await f(e)).dispatch(c.DeleteSavedPageInternal,t),updatePage:async t=>(await f(e)).dispatch(c.UpdateSavedPageInternal,t),getPage:async t=>(await f(e)).dispatch(c.GetSavedPage,t),getPages:async t=>(await f(e)).dispatch(c.GetSavedPages,t),savePage:async t=>(await f(e)).dispatch(c.SavePage,t),createWorkspace:async t=>(await u(e)).dispatch(c.CreateSavedWorkspace,t),deleteWorkspace:async t=>(await u(e)).dispatch(c.DeleteSavedWorkspace,t),updateWorkspace:async t=>(await u(e)).dispatch(c.UpdateSavedWorkspace,t),getWorkspace:async t=>(await u(e)).dispatch(c.GetSavedWorkspace,t),getWorkspaces:async t=>(await u(e)).dispatch(c.GetSavedWorkspaces,t),saveWorkspace:async t=>(await u(e)).dispatch(c.SaveWorkspace,t)}),N=e=>({getThemes:async()=>(await u(e)).dispatch(c.GetThemes,void 0)}),z=e=>{const t=fin.Platform.wrapSync(e);return Object.assign(t,{applySnapshot:async(t,r)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,r)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),launchApp:async t=>{t.target||(t.target={uuid:s.AB,name:s.oC,entityType:s.CL||"unknown"});return(await u(e)).dispatch(c.LaunchApp,t)},_invokeCustomAction:async(t,r)=>{const n=await u(e),o={actionId:t,payload:{...r,callerType:r.callerType||V.API}};return n.dispatch(c.InvokeCustomActionInternal,o)},_requestQuitPlatformDialog:async t=>(await u(e)).dispatch(c.RequestQuitPlatformDialogInternal,t),getCurrentWorkspace:async()=>(await u(e)).dispatch(c.GetCurrentWorkspace,void 0),applyWorkspace:async t=>(await u(e)).dispatch(c.ApplyWorkspace,t),setActiveWorkspace:async t=>(await u(e)).dispatch(c.SetActiveWorkspace,t),Theme:N(e),Browser:F(e),Storage:D(e)})},W={[n.Palette.brandPrimary]:n.Color.openFin,[n.Palette.statusSuccess]:n.Color.functional1,[n.Palette.statusWarning]:n.Color.functional10,[n.Palette.statusCritical]:n.Color.functional7,[n.Palette.statusActive]:n.Color.functional3},G={...W,[n.Palette.background1]:n.Color.white,[n.Palette.background2]:n.Color.lightGray1,[n.Palette.background3]:n.Color.lightGray2,[n.Palette.background4]:n.Color.lightGray3,[n.Palette.background5]:n.Color.lightGray4,[n.Palette.background6]:n.Color.lightGray5,[n.Palette.brandSecondary]:n.Color.darkGray5,[n.Palette.inputBackground]:n.Color.lightGray3,[n.Palette.inputColor]:n.Color.darkGray5,[n.Palette.inputPlaceholder]:n.Color.darkGray2,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.textDefault]:n.Color.darkGray5,[n.Palette.textHelp]:n.Color.darkGray3,[n.Palette.textInactive]:n.Color.neutralGray},U={...W,[n.Palette.background1]:n.Color.darkGray6,[n.Palette.background2]:n.Color.darkGray5,[n.Palette.background3]:n.Color.darkGray4,[n.Palette.background4]:n.Color.darkGray3,[n.Palette.background5]:n.Color.darkGray2,[n.Palette.background6]:n.Color.darkGray1,[n.Palette.brandSecondary]:n.Color.darkGray2,[n.Palette.inputBackground]:n.Color.darkGray1,[n.Palette.inputColor]:n.Color.white,[n.Palette.inputPlaceholder]:n.Color.lightGray5,[n.Palette.inputDisabled]:n.Color.neutralGray,[n.Palette.inputFocused]:n.Color.lightGray5,[n.Palette.textDefault]:n.Color.white,[n.Palette.textHelp]:n.Color.lightGray5,[n.Palette.textInactive]:n.Color.neutralGray},q=async e=>{const t=await z(e).Theme.getThemes();var r;return(r=t,r.map((e=>{const t=e.palette,r=a(U,t),o=a(G,t),i={light:{background1:`hsla(${c=l(t.backgroundPrimary)}, 0%, 100%, 1)`,background2:`hsla(${c}, 67%, 99%, 1)`,background3:`hsla(${c}, 26%, 96%, 1)`,background4:`hsla(${c}, 15%, 94%, 1)`,background5:`hsla(${c}, 10%, 88%, 1)`,background6:`hsla(${c}, 80%, 80%, 1)`},dark:{background1:`hsla(${c}, 8%, 7%, 1)`,background2:`hsla(${c}, 8%, 13%, 1)`,background3:`hsla(${c}, 9%, 15%, 1)`,background4:`hsla(${c}, 6%, 23%, 1)`,background5:`hsla(${c}, 21%, 28%, 1)`,background6:`hsla(${c}, 5%, 51%, 1)`}};var c;const s=Object.keys(e.palette).filter((e=>!(!e.includes("background")||11!==e.length)));s.length>0&&s.forEach((t=>{i.dark[t]=e.palette[t],i.light[t]=e.palette[t]}));const C=(0,n.createTheme)({...r,...i.dark}),d={light:(0,n.createTheme)({...o,...i.light}),dark:C};return{label:e.label,logoUrl:e.logoUrl,theme:d}})))[0]}},806:(e,t,r)=>{"use strict";r.d(t,{q9:()=>n});var n,o,i,l=r(678);!function(e){e.Workspace="openfin-browser"}(n||(n={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(o||(o={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));l.AB,n.Workspace},678:(e,t,r)=>{"use strict";var n;r.d(t,{AB:()=>a,Ax:()=>i,CL:()=>s,oC:()=>c,sS:()=>o,u0:()=>d}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(n||(n={}));const o="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),l=i?window.origin:n.Local,a=o&&fin.me.uuid,c=o&&fin.me.name,s=o&&fin.me.entityType,C=(n.Local,n.Dev,n.Staging,n.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:l+e),d=(C("https://cdn.openfin.co/workspace/9.0.11"),C("https://cdn.openfin.co/workspace/9.0.11"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&C(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&C(WORKSPACE_DOCS_CLIENT_URL),"9.0.11")},532:(e,t,r)=>{"use strict";r.d(t,{GO:()=>l,tj:()=>a});var n,o=r(678);r(121);!function(e){e.Browser="Browser",e.Dock="Dock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(n||(n={}));const i=async(e,t)=>{const r={apiVersion:t.apiVersion||o.u0,componentName:e,componentVersion:t.componentVersion||o.u0,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:"workspace-licensing",data:r})},l=async e=>{i(n.Browser,e)},a=async e=>{i(n.Notification,e)}},121:(e,t,r)=>{"use strict";var n,o,i,l=r(806),a=r(678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(n||(n={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.Closed="closed",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(o||(o={})),function(e){e.BeforeUnload="beforeunload"}(i||(i={}));a.oC,a.AB;n.Home,l.q9.Workspace,n.Dock,l.q9.Workspace,n.Storefront,l.q9.Workspace,l.q9.Workspace,l.q9.Workspace}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};(()=>{"use strict";r.r(n),r.d(n,{deregister:()=>s,register:()=>c});var e=r(633),t=r(532),o=r(591),i={};for(const t in e)["default","register","deregister"].indexOf(t)<0&&(i[t]=()=>e[t]);r.d(n,i);const l=async t=>{let r=t.message;if(t.message.includes("register-notifications-platform")&&(r="Notifications platforms are not supported in versions below 1.13.0, try updating your notifications-service.",e?.provider?.getStatus)){const{version:t}=await e.provider.getStatus();r+=` Your version is: ${t}`}return r},a=async e=>{if(e instanceof Error&&e.message.includes("register-notifications-platform"))throw new Error(await l(e));throw e},c=async r=>{const n=await(0,o.V)(fin.me.identity);try{await e.registerPlatform({...r,theme:n?.theme}),(0,t.tj)({allowed:!0,apiVersion:e.VERSION})}catch(r){(0,t.tj)({allowed:!1,rejectionCode:await l(r),apiVersion:e.VERSION}),await a(r)}},s=async t=>{try{await e.deregisterPlatform(t)}catch(e){await a(e)}}})(),module.exports=n})();
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ "./client/src/actions.ts":
/*!*******************************!*\
  !*** ./client/src/actions.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_IDS": () => (/* binding */ ACTION_IDS),
/* harmony export */   "getActions": () => (/* binding */ getActions)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/workspace/notifications */ "../../node_modules/@openfin/workspace/notifications.js");
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./client/src/auth.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons */ "./client/src/buttons.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./client/src/home.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./share */ "./client/src/share.ts");










async function getViewWindowIdentity(view) {
    const currentWindow = await view.getCurrentWindow();
    if (currentWindow.identity.name === undefined || currentWindow.identity.name === fin.me.identity.uuid) {
        return new Promise((resolve, reject) => {
            view
                .once("target-changed", async () => {
                const hostWindow = await view.getCurrentWindow();
                resolve(hostWindow.identity);
            })
                .catch(() => { });
        });
    }
    return currentWindow.identity;
}
const ACTION_IDS = {
    raiseCreateAppDefinitionIntent: "raise-create-app-definition-intent",
    moveViewToNewWindow: "move-view-to-new-window",
    movePageToNewWindow: "move-page-to-new-window",
    pinWindow: "pin-window",
    unpinWindow: "unpin-window",
    homeShow: "home-show",
    notificationToggle: "notification-toggle",
    share: "share",
    changeOpacity: "change-opacity",
    restoreOpacity: "restore-opacity",
    logoutAndQuit: "logout-and-quit",
    launchApp: "launch-app",
    launchView: "launch-view"
};
async function getActions() {
    const actionMap = {};
    actionMap[ACTION_IDS.raiseCreateAppDefinitionIntent] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.ViewTabContextMenu) {
            const brokerClient = fin.Interop.connectSync(fin.me.identity.uuid, {});
            for (let i = 0; i < payload.selectedViews.length; i++) {
                const viewIdentity = payload.selectedViews[i];
                const intentName = "CreateAppDefinition";
                try {
                    const view = fin.View.wrapSync(viewIdentity);
                    const options = await view.getOptions();
                    const info = await view.getInfo();
                    const name = options.name;
                    const fdc3InteropApi = options.fdc3InteropApi !== undefined &&
                        options.fdc3InteropApi !== null &&
                        options.fdc3InteropApi.length > 0
                        ? options.fdc3InteropApi
                        : "1.2";
                    const preloads = Array.isArray(options.preloadScripts) && options.preloadScripts.length > 0
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
                        manifestType: _manifest_types__WEBPACK_IMPORTED_MODULE_8__.manifestTypes.inlineView.id,
                        manifest,
                        tags: [_manifest_types__WEBPACK_IMPORTED_MODULE_8__.manifestTypes.view.id],
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
                }
                catch (error) {
                    console.error(`Error while trying to raise intent ${intentName} for view ${viewIdentity.name}`, error);
                }
            }
        }
    };
    actionMap[ACTION_IDS.moveViewToNewWindow] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.ViewTabContextMenu) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const initialView = await platform.createView({
                name: payload.selectedViews[0].name
            });
            if (payload.selectedViews.length > 1) {
                const windowIdentity = await getViewWindowIdentity(initialView);
                for (let i = 1; i < payload.selectedViews.length; i++) {
                    await platform.createView({
                        name: payload.selectedViews[i].name
                    }, windowIdentity, initialView.identity);
                }
            }
        }
    };
    actionMap[ACTION_IDS.movePageToNewWindow] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.PageTabContextMenu) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const windowOptions = await (0,_browser__WEBPACK_IMPORTED_MODULE_4__.getDefaultWindowOptions)();
            const win = platform.Browser.wrapSync(payload.windowIdentity);
            const page = await win.getPage(payload.pageId);
            windowOptions.workspacePlatform.pages = [page];
            await platform.createWindow(windowOptions);
            await win.removePage(page.pageId);
        }
    };
    actionMap[ACTION_IDS.pinWindow] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.CustomButton) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
            const options = await browserWindow.openfinWindow.getOptions();
            const currentToolbarOptions = options.workspacePlatform.toolbarOptions;
            await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: true });
            if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                const newButtons = await (0,_buttons__WEBPACK_IMPORTED_MODULE_5__.updateToolbarButtons)(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                await browserWindow.replaceToolbarOptions({ buttons: newButtons });
            }
        }
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.ViewTabContextMenu) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
            const options = await browserWindow.openfinWindow.getOptions();
            const currentToolbarOptions = options.workspacePlatform.toolbarOptions;
            await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: true });
            if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                const newButtons = await (0,_buttons__WEBPACK_IMPORTED_MODULE_5__.updateToolbarButtons)(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                await browserWindow.replaceToolbarOptions({ buttons: newButtons });
            }
        }
    };
    actionMap[ACTION_IDS.unpinWindow] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.CustomButton) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
            const options = await browserWindow.openfinWindow.getOptions();
            const currentToolbarOptions = options.workspacePlatform.toolbarOptions;
            await browserWindow.openfinWindow.updateOptions({ alwaysOnTop: false });
            if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                const newButtons = await (0,_buttons__WEBPACK_IMPORTED_MODULE_5__.updateToolbarButtons)(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                await browserWindow.replaceToolbarOptions({ buttons: newButtons });
            }
        }
    };
    actionMap[ACTION_IDS.homeShow] = async () => {
        await (0,_home__WEBPACK_IMPORTED_MODULE_6__.show)();
    };
    actionMap[ACTION_IDS.notificationToggle] = async () => {
        await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.toggleNotificationCenter)();
    };
    actionMap[ACTION_IDS.share] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.CustomButton) {
            await (0,_share__WEBPACK_IMPORTED_MODULE_9__.showShareOptions)(payload);
        }
    };
    actionMap[ACTION_IDS.changeOpacity] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.CustomButton) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
            const options = await browserWindow.openfinWindow.getOptions();
            const currentToolbarOptions = options.workspacePlatform.toolbarOptions;
            await browserWindow.openfinWindow.updateOptions({ opacity: 0.7 });
            if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                const newButtons = await (0,_buttons__WEBPACK_IMPORTED_MODULE_5__.updateToolbarButtons)(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                await browserWindow.replaceToolbarOptions({ buttons: newButtons });
            }
        }
    };
    actionMap[ACTION_IDS.restoreOpacity] = async (payload) => {
        if (payload.callerType === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.CustomActionCallerType.CustomButton) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
            const options = await browserWindow.openfinWindow.getOptions();
            const currentToolbarOptions = options.workspacePlatform.toolbarOptions;
            await browserWindow.openfinWindow.updateOptions({ opacity: 1 });
            if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                const newButtons = await (0,_buttons__WEBPACK_IMPORTED_MODULE_5__.updateToolbarButtons)(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                await browserWindow.replaceToolbarOptions({ buttons: newButtons });
            }
        }
    };
    actionMap[ACTION_IDS.logoutAndQuit] = async () => {
        await _auth__WEBPACK_IMPORTED_MODULE_3__.logout();
    };
    actionMap[ACTION_IDS.launchApp] = async (payload) => {
        if (payload.customData?.appId) {
            const app = await (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getApp)(payload.customData.appId);
            if (app) {
                await (0,_launch__WEBPACK_IMPORTED_MODULE_7__.launch)(app);
            }
            else {
                console.error(`Unable to find app with id '${payload.customData.appId}' in call to launchApp action from source '${payload.customData?.source ?? "unknown source"}'`);
            }
        }
        else {
            console.error(`No appId specified in payload.customData in launchApp action`);
        }
    };
    actionMap[ACTION_IDS.launchView] = async (payload) => {
        if (payload.customData?.url) {
            await (0,_browser__WEBPACK_IMPORTED_MODULE_4__.launchView)(payload.customData?.url);
        }
        else {
            console.error(`No url specified in payload.customData in launchView action`);
        }
    };
    return actionMap;
}


/***/ }),

/***/ "./client/src/apps.ts":
/*!****************************!*\
  !*** ./client/src/apps.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getAppIcon": () => (/* binding */ getAppIcon),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "getAppsByIntent": () => (/* binding */ getAppsByIntent),
/* harmony export */   "getAppsByTag": () => (/* binding */ getAppsByTag),
/* harmony export */   "getIntent": () => (/* binding */ getIntent),
/* harmony export */   "getIntentsByContext": () => (/* binding */ getIntentsByContext),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _connections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connections */ "./client/src/connections.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");


let cachedApps;
let endpoints;
let cacheDuration = 0;
let endpointIds = [];
let isInitialized = false;
let defaultCredentials;
let appAssetTag = "appasset";
let supportedManifestTypes = [];
let canLaunchExternalProcess;
let canDownloadAppAssets;
async function getCanLaunchExternalProcess() {
    if (canLaunchExternalProcess === undefined) {
        let canLaunchExternalProcessResponse;
        try {
            canLaunchExternalProcessResponse = await fin.System.queryPermissionForCurrentContext("System.launchExternalProcess");
            canLaunchExternalProcess = canLaunchExternalProcessResponse?.granted;
        }
        catch (error) {
            console.error("Error while querying for System.launchExternalProcess permission", error);
            canLaunchExternalProcess = false;
        }
    }
    return canLaunchExternalProcess;
}
async function getCanDownloadAppAssets() {
    if (canDownloadAppAssets === undefined) {
        let canDownloadAppAssetsResponse;
        try {
            canDownloadAppAssetsResponse = await fin.System.queryPermissionForCurrentContext("System.downloadAsset");
            canDownloadAppAssets = canDownloadAppAssetsResponse?.granted;
        }
        catch (error) {
            console.error("Error while querying for System.downloadAsset permission", error);
            canDownloadAppAssets = false;
        }
    }
    return canDownloadAppAssets;
}
async function validateEntries(apps) {
    const hasLaunchExternalProcess = await getCanLaunchExternalProcess();
    const hasDownloadAppAssets = await getCanDownloadAppAssets();
    const validatedApps = [];
    const rejectedAppIds = [];
    for (let i = 0; i < apps.length; i++) {
        let validApp = true;
        if (supportedManifestTypes !== undefined && supportedManifestTypes.length > 0) {
            validApp = supportedManifestTypes.includes(apps[i].manifestType);
        }
        if (validApp) {
            if (apps[i].manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_1__.manifestTypes.external.id) {
                validatedApps.push(apps[i]);
            }
            else if (!hasLaunchExternalProcess) {
                rejectedAppIds.push(apps[i].appId);
            }
            else if (Array.isArray(apps[i].tags) && apps[i].tags.includes(appAssetTag) && !hasDownloadAppAssets) {
                rejectedAppIds.push(apps[i].appId);
            }
            else {
                validatedApps.push(apps[i]);
            }
        }
    }
    if (rejectedAppIds.length > 0) {
        console.warn("Apps.ts: validateEntries: Not passing the following list of applications as they will not be able to run on this machine due to missing permissions. Alternatively this logic could be moved to the launch function where a selection is not launched but the user is presented with a modal saying they can't launch it due to permissions.", rejectedAppIds);
    }
    return validatedApps;
}
async function getEntries(source, credentials, cache) {
    const options = credentials !== undefined ? { credentials } : undefined;
    if (!Array.isArray(source)) {
        return [];
    }
    const apps = [];
    for (let i = 0; i < endpointIds.length; i++) {
        const endpointId = endpointIds[i];
        try {
            if (endpoints.hasEndpoint(endpointId)) {
                const results = await endpoints.requestResponse(endpointId);
                apps.push(...results);
            }
            else {
                const resp = await fetch(endpointId, options);
                const jsonResults = await resp.json();
                apps.push(...jsonResults);
            }
        }
        catch (error) {
            console.error(`Error fetching apps from endpoint ${endpointId}`, error);
        }
    }
    const connectedApps = await (0,_connections__WEBPACK_IMPORTED_MODULE_0__.getConnectedApps)();
    if (connectedApps.length > 0) {
        console.log(`Adding ${connectedApps.length} apps from connected apps to the apps list to be validated.`);
        apps.push(...connectedApps);
    }
    cachedApps = await validateEntries(apps);
    if (cache !== undefined && cache !== 0) {
        setTimeout(() => {
            console.log("Clearing cache of apps as cache duration has passed.");
            cachedApps = undefined;
        }, cache);
    }
    return cachedApps;
}
function updateEntry(source, intent, app) {
    if (source[intent.name] === undefined) {
        // in a production app you would either need to ensure that every app was populated with the same name & displayName for an intent from a golden source (e.g. intents table) so picking the first entry wouldn't make a difference.
        // or you could pull in a golden source of intents from a service and then do a lookup using the intent name to get an object with intent name and official display name.
        source[intent.name] = {
            intent: {
                name: intent.name,
                displayName: intent.displayName
            },
            apps: []
        };
    }
    source[intent.name].apps.push(app);
    return source;
}
async function init(options, endpointProvider) {
    if (isInitialized) {
        console.warn("The app service is already initialized.");
        return;
    }
    isInitialized = true;
    endpoints = endpointProvider;
    if (options?.appsSourceUrl !== undefined) {
        // backward compatibility support
        console.log("Using appsSourceUrl as it was specified. Backwards compatibility mode. Try to use the endpointIds setting instead and define some endpoints.");
        if (Array.isArray(options?.appsSourceUrl)) {
            console.log("appsSourceUrl specified as an array of urls");
            const appUrls = options?.appsSourceUrl || [];
            endpointIds.push(...appUrls);
        }
        else {
            console.log("appsSourceUrl specified as a single url.");
            endpointIds.push(options?.appsSourceUrl);
        }
    }
    else if (Array.isArray(options?.endpointIds)) {
        console.log("Using the following passed endpoints", options?.endpointIds);
        endpointIds = options?.endpointIds || [];
    }
    if (options?.cacheDurationInSeconds !== undefined) {
        cacheDuration += options?.cacheDurationInSeconds * 1000;
    }
    if (options?.cacheDurationInMinutes !== undefined) {
        cacheDuration += options?.cacheDurationInMinutes * 60 * 1000;
    }
    defaultCredentials = options?.includeCredentialOnSourceRequest;
    appAssetTag = options?.appAssetTag ?? "appasset";
    supportedManifestTypes = options.manifestTypes || [];
}
async function getApps() {
    console.log("Requesting apps.");
    try {
        const apps = cachedApps ?? (await getEntries(endpointIds, defaultCredentials, cacheDuration));
        return apps;
    }
    catch (err) {
        console.error("Error retrieving apps. Returning empty list.", err);
        return [];
    }
}
async function getAppsByTag(tags, mustMatchAll = false) {
    const apps = await getApps();
    const filteredApps = apps.filter((value) => {
        if (value.tags === undefined) {
            return false;
        }
        let matchFound = false;
        for (let i = 0; i < tags.length; i++) {
            if (value.tags.includes(tags[i])) {
                if (mustMatchAll) {
                    matchFound = true;
                }
                else {
                    return true;
                }
            }
            else if (mustMatchAll) {
                return false;
            }
        }
        return matchFound;
    });
    return filteredApps;
}
async function getApp(requestedApp) {
    const apps = await getApps();
    let appId;
    if (requestedApp !== undefined) {
        if (typeof requestedApp === "string") {
            appId = requestedApp;
        }
        else {
            appId = requestedApp.appId;
        }
    }
    if (appId === undefined) {
        return undefined;
    }
    const app = apps.find((entry) => entry.appId === appId);
    return app;
}
async function getAppsByIntent(intent) {
    const apps = await getApps();
    const filteredApps = apps.filter((value) => {
        if (value.intents === undefined) {
            return false;
        }
        for (let i = 0; i < value.intents.length; i++) {
            if (value.intents[i].name.toLowerCase() === intent.toLowerCase()) {
                return true;
            }
        }
        return false;
    });
    return filteredApps;
}
async function getIntent(intent, contextType) {
    const apps = await getApps();
    let intents = {};
    if (Array.isArray(apps)) {
        for (const value of apps) {
            if (value.intents !== undefined) {
                for (let i = 0; i < value.intents.length; i++) {
                    if (value.intents[i].name === intent) {
                        if (contextType === undefined) {
                            intents = updateEntry(intents, value.intents[i], value);
                        }
                        else if (Array.isArray(value.intents[i].contexts) &&
                            value.intents[i].contexts.includes(contextType)) {
                            intents = updateEntry(intents, value.intents[i], value);
                        }
                    }
                }
            }
        }
        const results = Object.values(intents);
        if (results.length === 0) {
            console.log(`No results found for findIntent for intent ${intent} and context ${contextType}`);
            return null;
        }
        else if (results.length === 1) {
            return results[0];
        }
        console.warn(`Received more than one result for findIntent for intent ${intent} and context ${contextType}. Returning the first entry.`);
        return results[0];
    }
    console.warn("There was no apps returned so we are unable to find apps that support an intent.");
    return null;
}
async function getIntentsByContext(contextType) {
    const apps = await getApps();
    let intents = {};
    if (Array.isArray(apps)) {
        for (const value of apps) {
            if (value.intents !== undefined) {
                for (let i = 0; i < value.intents.length; i++) {
                    if (Array.isArray(value.intents[i].contexts) && value.intents[i].contexts.includes(contextType)) {
                        intents = updateEntry(intents, value.intents[i], value);
                    }
                }
            }
        }
        return Object.values(intents);
    }
    console.warn("Unable to get apps so we can not get apps and intents that support a particular context");
    return [];
}
function getAppIcon(app) {
    if (Array.isArray(app.icons) && app.icons.length > 0) {
        return app.icons[0].src;
    }
}


/***/ }),

/***/ "./client/src/auth.ts":
/*!****************************!*\
  !*** ./client/src/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "isAuthenticationEnabled": () => (/* binding */ isAuthenticationEnabled),
/* harmony export */   "isAuthenticationRequired": () => (/* binding */ isAuthenticationRequired),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "setLogger": () => (/* binding */ setLogger),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "unsubscribe": () => (/* binding */ unsubscribe)
/* harmony export */ });
let logInfo = console.log;
let logWarning = console.warn;
let logError = console.error;
let authProvider;
let authOptions;
let authEnabled = false;
function isAuthenticationEnabled() {
    return authEnabled;
}
async function init(options) {
    authOptions = options;
    if (authOptions === undefined || authOptions === null) {
        logInfo("Unable to initialize authentication without settings. If this platform requires auth please ensure you have set the authProvider settings.");
        return;
    }
    if (authProvider === undefined) {
        if (authOptions.authProviderId !== undefined &&
            authOptions.authProviderId !== null &&
            authOptions.authProviderId.trim() !== "" &&
            Array.isArray(authOptions.modules)) {
            const moduleDefinition = authOptions.modules.find((entry) => entry.id === authOptions.authProviderId);
            if (moduleDefinition === undefined) {
                logWarning(`Specified Auth Module Id: ${authOptions.authProviderId} is not available.`);
                return;
            }
            try {
                const mod = await import(/* webpackIgnore: true */ moduleDefinition.url);
                authProvider = mod.authProvider;
                await authProvider.init(moduleDefinition.data);
                authEnabled = true;
                logInfo("Auth: Auth provider module initialized.");
            }
            catch (err) {
                logError(`Error loading module ${options.authProviderId} with url ${moduleDefinition.url}: ${err.message}`);
            }
        }
        else {
            logError("You must provide an authProvider id and a matching module to the auth init function.");
        }
    }
    else {
        logWarning("The auth provider has already been initialized.");
    }
}
function subscribe(to, callback) {
    if (authProvider === undefined) {
        logWarning("Auth: Please initialize auth before trying to use subscribe.");
        return null;
    }
    return authProvider.subscribe(to, callback);
}
function unsubscribe(from) {
    if (authProvider === undefined) {
        logWarning("Auth: Please initialize auth before trying to use unsubscribe.");
        return null;
    }
    return authProvider.unsubscribe(from);
}
async function login() {
    if (authProvider === undefined) {
        logWarning("Auth: Please initialize auth before trying to use login.");
        return false;
    }
    logInfo("Auth: Log in requested.");
    return authProvider.login();
}
async function logout() {
    if (authProvider === undefined) {
        logWarning("Auth: Please initialize auth before trying to use logout.");
        return false;
    }
    logInfo("Auth: Log out requested.");
    return authProvider.logout();
}
async function isAuthenticationRequired() {
    if (authProvider === undefined) {
        logInfo("Auth: Auth may not be required for this app. If it is please initialize auth before trying to use isAuthenticationRequired.");
        return false;
    }
    logInfo("Auth: isAuthenticationRequired requested.");
    return authProvider.isAuthenticationRequired();
}
async function getUserInfo() {
    if (authProvider === undefined) {
        logWarning("Auth: Please initialize auth before trying to use getUserInfo.");
        return null;
    }
    logInfo("Auth: getUserInfo requested.");
    return getUserInfo();
}
function setLogger(info, warn, error) {
    if (authProvider === undefined) {
        if (warn !== undefined) {
            warn("Auth: Please initialize auth before trying to use setLogger.");
        }
        else {
            logWarning("Auth: Please initialize auth before trying to use setLogger.");
        }
        return;
    }
    if (info !== undefined) {
        logInfo = info;
    }
    if (warn !== undefined) {
        logWarning = warn;
    }
    if (error !== undefined) {
        logError = error;
    }
    authProvider.setLogger(logInfo, logWarning, logError);
}


/***/ }),

/***/ "./client/src/bootstrapper.ts":
/*!************************************!*\
  !*** ./client/src/bootstrapper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./client/src/auth.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _connections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connections */ "./client/src/connections.ts");
/* harmony import */ var _dock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dock */ "./client/src/dock.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./client/src/home.ts");
/* harmony import */ var _init_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init-options */ "./client/src/init-options.ts");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integrations */ "./client/src/integrations.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications */ "./client/src/notifications.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share */ "./client/src/share.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./client/src/store.ts");














let bootstrapOptions;
async function onReAuthenticationRequired() {
    console.log(`The platform has detected that authentication is required (might be expired session).`);
    console.log(`At this stage the platform can decide how to proceed:`);
    console.log(` - Hide all visible windows?`);
    console.log(` - Disable results from showing in home by having the home provider check to see if authentication is required before showing results?`);
    console.log(` - Have Store check if authentication is required before returning store entries?`);
    console.log(` - Have launch functions not launch if authentication is required?`);
    console.log(` - If an intent is raised do not action it if authentication is required?`);
    if (bootstrapOptions.home) {
        await (0,_home__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }
    if (bootstrapOptions.store) {
        await (0,_store__WEBPACK_IMPORTED_MODULE_12__.hide)();
    }
    if (bootstrapOptions.dock) {
        await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.minimize)();
    }
    // login management handled by platform.
}
async function init() {
    // you can kick off your bootstrapping process here where you may decide to prompt for authentication,
    // gather reference data etc before starting workspace and interacting with it.
    console.log("Initializing the bootstrapper");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_10__.getSettings)();
    bootstrapOptions = { ...settings.bootstrap };
    bootstrapOptions.home = bootstrapOptions.home ?? true;
    bootstrapOptions.store = bootstrapOptions.store ?? false;
    bootstrapOptions.dock = bootstrapOptions.dock ?? false;
    bootstrapOptions.notifications = bootstrapOptions.notifications ?? false;
    bootstrapOptions.autoShow = bootstrapOptions.autoShow ?? [];
    await (0,_integrations__WEBPACK_IMPORTED_MODULE_6__.register)({
        rootUrl: settings?.platformProvider.rootUrl,
        launchView: _browser__WEBPACK_IMPORTED_MODULE_1__.launchView,
        launchPage: _browser__WEBPACK_IMPORTED_MODULE_1__.launchPage,
        launchSnapshot: async (manifestUrl) => (0,_launch__WEBPACK_IMPORTED_MODULE_7__.launchSnapshot)({
            manifestType: _manifest_types__WEBPACK_IMPORTED_MODULE_8__.manifestTypes.snapshot.id,
            manifest: manifestUrl,
            appId: "",
            title: "",
            icons: null,
            publisher: null
        }),
        openUrl: async (url) => fin.System.openUrlWithBrowser(url),
        showHome: _home__WEBPACK_IMPORTED_MODULE_4__.show
    }, settings.integrationProvider);
    const registeredComponents = [];
    if (bootstrapOptions.home) {
        // only register search logic once workspace is running
        await (0,_home__WEBPACK_IMPORTED_MODULE_4__.register)();
        registeredComponents.push("home");
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("show-home", async () => {
            await (0,_home__WEBPACK_IMPORTED_MODULE_4__.show)();
        });
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("hide-home", async () => {
            await (0,_home__WEBPACK_IMPORTED_MODULE_4__.hide)();
        });
    }
    if (bootstrapOptions.store) {
        await (0,_store__WEBPACK_IMPORTED_MODULE_12__.register)();
        registeredComponents.push("store");
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("show-store", async () => {
            await (0,_store__WEBPACK_IMPORTED_MODULE_12__.show)();
        });
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("hide-store", async () => {
            await (0,_store__WEBPACK_IMPORTED_MODULE_12__.hide)();
        });
    }
    if (bootstrapOptions.dock) {
        await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.register)(bootstrapOptions);
        registeredComponents.push("dock");
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("show-dock", async () => {
            await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.show)();
        });
        (0,_connections__WEBPACK_IMPORTED_MODULE_2__.registerAction)("minimize-dock", async () => {
            await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.minimize)();
        });
    }
    if (bootstrapOptions.notifications) {
        await (0,_notifications__WEBPACK_IMPORTED_MODULE_9__.register)();
    }
    await (0,_share__WEBPACK_IMPORTED_MODULE_11__.register)();
    // Remove any entries from autoShow that have not been registered
    bootstrapOptions.autoShow = bootstrapOptions.autoShow.filter((component) => registeredComponents.includes(component));
    // If the autoShow options is not empty, default to the first registered component.
    if (bootstrapOptions.autoShow.length === 0 && registeredComponents.length > 0) {
        bootstrapOptions.autoShow = [registeredComponents[0]];
    }
    for (const autoShow of bootstrapOptions.autoShow) {
        if (autoShow === "home") {
            await (0,_home__WEBPACK_IMPORTED_MODULE_4__.show)();
        }
        else if (autoShow === "store") {
            await (0,_store__WEBPACK_IMPORTED_MODULE_12__.show)();
        }
        else if (autoShow === "dock") {
            await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.show)();
        }
    }
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticationEnabled)()) {
        console.log("Setting up listeners for authentication events.");
        // platform is instantiated and authentication if required is given. Watch for session
        // expiry
        _auth__WEBPACK_IMPORTED_MODULE_0__.subscribe("logged-in", async () => {
            // what behavior do you want to do when someone logs in
            // potentially the inverse if you hid something on session expiration
        });
        _auth__WEBPACK_IMPORTED_MODULE_0__.subscribe("before-logged-out", async () => {
            // what behavior do you want to do when someone logs in
            // do you want to save anything before they log themselves out
        });
        _auth__WEBPACK_IMPORTED_MODULE_0__.subscribe("session-expired", onReAuthenticationRequired);
        const authenticationRequired = await _auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticationRequired();
        if (authenticationRequired) {
            await onReAuthenticationRequired();
        }
    }
    const providerWindow = fin.Window.getCurrentSync();
    await providerWindow.once("close-requested", async (event) => {
        await (0,_integrations__WEBPACK_IMPORTED_MODULE_6__.deregister)();
        await (0,_dock__WEBPACK_IMPORTED_MODULE_3__.deregister)();
        await (0,_store__WEBPACK_IMPORTED_MODULE_12__.deregister)();
        await (0,_home__WEBPACK_IMPORTED_MODULE_4__.deregister)();
        await (0,_share__WEBPACK_IMPORTED_MODULE_11__.deregister)();
        await (0,_notifications__WEBPACK_IMPORTED_MODULE_9__.deregister)();
        await fin.Platform.getCurrentSync().quit();
    });
    // Once the platform is started and everything is bootstrapped initialize the init options
    // listener so that it is ready to handle initial params or subsequent requests.
    await (0,_init_options__WEBPACK_IMPORTED_MODULE_5__.init)(settings?.initOptionsProvider);
}


/***/ }),

/***/ "./client/src/browser.ts":
/*!*******************************!*\
  !*** ./client/src/browser.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deletePageBounds": () => (/* binding */ deletePageBounds),
/* harmony export */   "getDefaultWindowOptions": () => (/* binding */ getDefaultWindowOptions),
/* harmony export */   "getPageBounds": () => (/* binding */ getPageBounds),
/* harmony export */   "launchPage": () => (/* binding */ launchPage),
/* harmony export */   "launchView": () => (/* binding */ launchView),
/* harmony export */   "savePageBounds": () => (/* binding */ savePageBounds)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./client/src/buttons.ts");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _modules_endpoints_local_storage_platform_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/endpoints/local-storage/platform-local-storage */ "./client/src/modules/endpoints/local-storage/platform-local-storage.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");





const DEFAULT_PAGE_BOUNDS_STORAGE = new _modules_endpoints_local_storage_platform_local_storage__WEBPACK_IMPORTED_MODULE_3__.PlatformLocalStorage("page-bounds", "PageBounds");
async function savePageBounds(pageId) {
    const bounds = await getPageBounds(pageId);
    if (bounds !== null) {
        const setPageBoundsEndpointId = "page-bounds-set";
        if (_endpoint__WEBPACK_IMPORTED_MODULE_2__.hasEndpoint(setPageBoundsEndpointId)) {
            await _endpoint__WEBPACK_IMPORTED_MODULE_2__.action(setPageBoundsEndpointId, {
                id: pageId,
                payload: bounds
            });
            return;
        }
        await DEFAULT_PAGE_BOUNDS_STORAGE.set(pageId, bounds);
    }
}
async function deletePageBounds(pageId) {
    const removePageBoundsEndpointId = "page-bounds-remove";
    if (_endpoint__WEBPACK_IMPORTED_MODULE_2__.hasEndpoint(removePageBoundsEndpointId)) {
        await _endpoint__WEBPACK_IMPORTED_MODULE_2__.action(removePageBoundsEndpointId, { id: pageId });
        return;
    }
    await DEFAULT_PAGE_BOUNDS_STORAGE.remove(pageId);
}
async function getPageBounds(pageId, fromStorage = false) {
    let bounds = null;
    if (fromStorage) {
        const getPageBoundsEndpointId = "page-bounds-get";
        if (_endpoint__WEBPACK_IMPORTED_MODULE_2__.hasEndpoint(getPageBoundsEndpointId)) {
            bounds = await _endpoint__WEBPACK_IMPORTED_MODULE_2__.requestResponse(getPageBoundsEndpointId, { id: pageId });
        }
        else {
            bounds = await DEFAULT_PAGE_BOUNDS_STORAGE.get(pageId);
        }
    }
    else {
        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        const pages = await platform.Browser.getAllAttachedPages();
        let windowId;
        for (const page of pages) {
            if (page.pageId === pageId) {
                windowId = page.parentIdentity;
            }
        }
        if (windowId !== undefined) {
            const hostWindow = platform.Browser.wrapSync(windowId);
            bounds = await hostWindow.openfinWindow.getBounds();
        }
    }
    return bounds;
}
async function launchPage(page, bounds) {
    let customBounds = bounds;
    if (customBounds === undefined) {
        customBounds = await getPageBounds(page.pageId, true);
    }
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    const newWindow = {
        workspacePlatform: {
            pages: [page]
        }
    };
    if (customBounds !== undefined && customBounds !== null) {
        const monitors = await fin.System.getMonitorInfo();
        newWindow.height = customBounds.height;
        newWindow.width = customBounds.width;
        newWindow.defaultHeight = customBounds.height;
        newWindow.defaultWidth = customBounds.width;
        if (monitors.virtualScreen !== undefined) {
            if (monitors.virtualScreen.left !== undefined && customBounds.left >= monitors.virtualScreen.left) {
                newWindow.x = customBounds.left;
                newWindow.defaultLeft = customBounds.left;
            }
            if (monitors.virtualScreen.top !== undefined && customBounds.top >= monitors.virtualScreen.top) {
                newWindow.y = customBounds.top;
                newWindow.defaultTop = customBounds.top;
            }
        }
    }
    return platform.Browser.createWindow(newWindow);
}
async function launchView(view, targetIdentity) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    let viewOptions;
    if (typeof view === "string") {
        viewOptions = { url: view, target: null };
    }
    else {
        viewOptions = view;
    }
    return platform.createView(viewOptions, targetIdentity);
}
async function getDefaultWindowOptions() {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_4__.getSettings)();
    return {
        icon: settings.browserProvider.windowOptions?.icon,
        workspacePlatform: {
            pages: null,
            title: settings.browserProvider.windowOptions?.title,
            favicon: settings.browserProvider.windowOptions?.icon,
            newTabUrl: settings.browserProvider.windowOptions?.newTabUrl,
            newPageUrl: settings.browserProvider.windowOptions?.newPageUrl,
            toolbarOptions: {
                buttons: await (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.getDefaultToolbarButtons)()
            }
        }
    };
}


/***/ }),

/***/ "./client/src/buttons.ts":
/*!*******************************!*\
  !*** ./client/src/buttons.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultToolbarButtons": () => (/* binding */ getDefaultToolbarButtons),
/* harmony export */   "updateToolbarButtons": () => (/* binding */ updateToolbarButtons)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ "./client/src/themes.ts");



let allToolbarButtons;
let defaultToolbarButtons;
async function getAvailableToolbarButtons() {
    if (Array.isArray(allToolbarButtons)) {
        return allToolbarButtons;
    }
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_2__.getCurrentTheme)();
    const availableToolbarButtons = settings?.browserProvider?.toolbarButtons || [];
    const validatedToolbarButtons = [];
    for (const entry of availableToolbarButtons) {
        if (entry.button.iconUrl !== undefined &&
            theme?.label !== undefined &&
            entry.themes !== undefined &&
            entry.themes[theme.label] !== undefined) {
            entry.button.iconUrl = entry.themes[theme.label];
        }
        validatedToolbarButtons.push(entry);
    }
    allToolbarButtons = validatedToolbarButtons;
    return validatedToolbarButtons;
}
async function getDefaultToolbarButtons() {
    if (Array.isArray(defaultToolbarButtons)) {
        return defaultToolbarButtons;
    }
    const defaultButtons = [];
    const availableToolbarButtons = await getAvailableToolbarButtons();
    for (const entry of availableToolbarButtons) {
        if (entry.include) {
            defaultButtons.push(entry.button);
        }
    }
    defaultToolbarButtons = defaultButtons;
    return defaultButtons;
}
async function updateToolbarButtons(buttons, buttonId, replacementButtonId) {
    const index = buttons.findIndex((entry) => {
        if (entry.type === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.BrowserButtonType.Custom &&
            entry.action.customData.sourceId === buttonId) {
            return true;
        }
        return false;
    });
    if (index !== -1) {
        const availableToolbarButtons = await getAvailableToolbarButtons();
        const replacement = availableToolbarButtons.find((entry) => {
            if (entry.button.type === _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.BrowserButtonType.Custom) {
                const customButton = entry.button;
                return customButton?.action?.customData?.sourceId === replacementButtonId;
            }
            return false;
        });
        buttons[index] = replacement.button;
        return buttons;
    }
    return buttons;
}


/***/ }),

/***/ "./client/src/connections.ts":
/*!***********************************!*\
  !*** ./client/src/connections.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAction": () => (/* binding */ clearAction),
/* harmony export */   "getConnectedAppSourceClients": () => (/* binding */ getConnectedAppSourceClients),
/* harmony export */   "getConnectedApps": () => (/* binding */ getConnectedApps),
/* harmony export */   "getConnectedSnapshotSourceClients": () => (/* binding */ getConnectedSnapshotSourceClients),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "launchConnectedApp": () => (/* binding */ launchConnectedApp),
/* harmony export */   "registerAction": () => (/* binding */ registerAction)
/* harmony export */ });
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");

let connectionService;
const connectedClients = {};
const registeredActions = {};
const appSourceTypeId = "appSource";
const snapshotSourceTypeId = "snapshotSource";
const actionsTypeId = "actions";
let initialized = false;
let connectionOptions;
function isActionSupported(identity, payload) {
    const requestingClient = connectedClients[identity.uuid];
    const actionId = payload?.action;
    const requestedAction = registerAction[actionId];
    const actionSettings = requestingClient.connectionTypes.find((entry) => entry.type === actionsTypeId);
    let supportedActions = connectionOptions.supportedActions ?? [];
    if (actionSettings?.type === actionsTypeId) {
        if (Array.isArray(actionSettings.supportedActions) && actionSettings.supportedActions.length > 0) {
            supportedActions = actionSettings.supportedActions;
        }
        if (requestedAction !== undefined && supportedActions.includes(actionId)) {
            return true;
        }
    }
    return false;
}
async function executeAction(identity, payload) {
    const actionId = payload?.action;
    if (isActionSupported(identity, payload)) {
        const requestedAction = registerAction[actionId];
        console.log(`Executing action: ${actionId} on behalf of connection: ${identity.uuid}`);
        await requestedAction();
        return true;
    }
    console.log(`Not Executing action: ${actionId} on behalf of connection: ${identity.uuid} as the action was either not provided or not listed in the supported ${actionsTypeId} definition.`);
    return false;
}
async function disconnect(identity) {
    delete connectedClients[identity.uuid];
    const connectedClientIds = Object.keys(connectedClients);
    // disconnect from channel?
    if (connectedClientIds.length === 0) {
        // this logic can be updated to not disconnect or disconnect after a window of time
        console.log(`No connections left.`);
    }
}
async function init(options) {
    if (initialized) {
        return;
    }
    initialized = true;
    connectionOptions = options;
    if (connectionOptions?.connectionId !== undefined) {
        connectionService = await fin.InterApplicationBus.Channel.create(connectionOptions.connectionId);
        console.log(`Configuring connection provider.`);
        connectionService.onConnection((identity, payload) => {
            // can reject a connection here by throwing an error
            console.log("Client connection request identity:", JSON.stringify(identity));
            console.log("Client connection request payload:", JSON.stringify(payload));
            const validatedConnection = connectionOptions.connections.find((entry) => entry.identity.uuid === identity.uuid);
            let isValid = false;
            let errorMessage = "This connection has failed the validation check and cannot connect to the requested application.";
            if (validatedConnection !== undefined) {
                isValid = true;
                if (validatedConnection.validatePayload) {
                    console.warn(`This connection has specified payload validation but that check needs to be implemented. UUID: ${validatedConnection.identity.uuid}`);
                    isValid = true;
                }
                if (isValid) {
                    if (connectedClients[identity.uuid] !== undefined) {
                        isValid = false;
                        errorMessage = `This platform can only accept one connection from an external connection. The uuid (${identity.uuid}) is already registered.`;
                    }
                    else {
                        // assign the passed identity
                        validatedConnection.identity = identity;
                        connectedClients[identity.uuid] = validatedConnection;
                        console.log(`The following connection has been added to the connected list: ${identity.uuid}`);
                    }
                }
            }
            if (!isValid) {
                console.warn(`The following connection has not been added to the connected list: ${identity.uuid} as it failed validation`);
                throw new Error(errorMessage);
            }
        });
        connectionService.onDisconnection(async (identity) => {
            console.log(`Client disconnected uuid: ${identity.uuid}, name: ${identity.name}`);
            await disconnect(identity);
        });
        connectionService.register("action", async (payload, identity) => {
            console.log("Action received from client:", identity, payload);
            const result = await executeAction(identity, payload);
            return { result };
        });
        connectionService.register("canAction", async (payload, identity) => {
            console.log("Check for action permission received from client:", identity, payload);
            const result = isActionSupported(identity, payload);
            return { result };
        });
    }
    else {
        console.log(`This platform is not configured to support a connectionProvider.`);
    }
}
function registerAction(actionName, action) {
    if (registeredActions[actionName] === undefined) {
        console.log(`Adding action ${actionName} to available actions list.`);
        registerAction[actionName] = action;
        return true;
    }
    console.warn(`Not adding action ${actionName} to available actions list as it is already registered.`);
    return false;
}
function clearAction(actionName) {
    if (registeredActions[actionName] === undefined) {
        console.warn(`Cannot remove action ${actionName} from available actions list as it is not registered.`);
        return false;
    }
    delete registeredActions[actionName];
    console.log(`Action ${actionName} cleared from available actions list.`);
    return true;
}
async function getConnectedAppSourceClients() {
    const connections = [];
    const availableConnections = Object.values(connectedClients);
    for (const connection of availableConnections) {
        const matchedConnection = connection.connectionTypes.find((supportedConnectionType) => supportedConnectionType.type === appSourceTypeId);
        if (matchedConnection?.type === appSourceTypeId) {
            connections.push({ identity: connection.identity, connectionData: matchedConnection });
        }
    }
    return connections;
}
async function getConnectedApps() {
    const connectedSources = await getConnectedAppSourceClients();
    const apps = [];
    for (let i = 0; i < connectedSources.length; i++) {
        const returnedApplications = await connectionService.dispatch(connectedSources[i].identity, "getApps");
        const supportedManifestTypes = connectedSources[i]?.connectionData?.manifestTypes;
        let validatedApps = [];
        if (Array.isArray(supportedManifestTypes) && supportedManifestTypes.length > 0) {
            validatedApps = returnedApplications.filter((entry) => supportedManifestTypes.includes(entry.manifestType));
        }
        else {
            validatedApps = returnedApplications;
        }
        for (let v = 0; v < validatedApps.length; v++) {
            if (validatedApps[v].manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_0__.manifestTypes.connection.id) {
                // ensure that if an app from a connection is marked as connection
                // then it should only be sent to itself and not another uuid
                validatedApps[v].manifest = connectedSources[i].identity.uuid;
            }
        }
        apps.push(...validatedApps);
    }
    return apps;
}
async function launchConnectedApp(app) {
    const connectedSources = await getConnectedAppSourceClients();
    const connectedSource = connectedSources.find((entry) => entry.identity.uuid === app.manifest);
    if (app.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_0__.manifestTypes.connection.id && connectedSource !== undefined) {
        console.log(`Launching app: ${app.appId} against connection: ${connectedSource.identity.uuid}`);
        await connectionService.dispatch(connectedSource.identity, "launchApp", app);
    }
    else {
        console.warn(`A request to launch app ${app.appId} was not successful. Either the manifestType is not ${_manifest_types__WEBPACK_IMPORTED_MODULE_0__.manifestTypes.connection.id}:${app.manifestType} or the connection ${app.manifest} is either not registered in the connectionProvider with ${appSourceTypeId} support or hasn't connected to this platform.`);
    }
}
async function getConnectedSnapshotSourceClients() {
    const connections = [];
    const availableConnections = Object.values(connectedClients);
    for (const connection of availableConnections) {
        const matchedConnection = connection.connectionTypes.find((supportedConnectionType) => supportedConnectionType.type === snapshotSourceTypeId);
        if (matchedConnection?.type === snapshotSourceTypeId) {
            connections.push({ identity: connection.identity, connectionData: matchedConnection });
        }
    }
    return connections;
}


/***/ }),

/***/ "./client/src/dock.ts":
/*!****************************!*\
  !*** ./client/src/dock.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "minimize": () => (/* binding */ minimize),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./client/src/actions.ts");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");




let isDockRegistered = false;
async function register(bootstrapOptions) {
    console.log("Initialising dock.");
    isDockRegistered = true;
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const buttons = [];
    if (Array.isArray(settings.dockProvider.apps)) {
        for (const appButton of settings.dockProvider.apps) {
            if (!Array.isArray(appButton.tags)) {
                console.error("You must specify an array for the tags parameter for an DockAppButton");
            }
            else {
                const dockApps = await (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getAppsByTag)(appButton.tags);
                if (appButton.display === "individual") {
                    for (const dockApp of dockApps) {
                        buttons.push({
                            tooltip: appButton.tooltip ?? dockApp.title,
                            iconUrl: appButton.iconUrl ?? (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getAppIcon)(dockApp),
                            action: {
                                id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.launchApp,
                                customData: {
                                    source: "dock",
                                    appId: dockApp.appId
                                }
                            }
                        });
                    }
                }
                else if (appButton.display === "group") {
                    if (!appButton.tooltip) {
                        console.error("You must specify the tooltip for a grouped DockAppButton");
                    }
                    let iconUrl = appButton.iconUrl;
                    const options = [];
                    for (const dockApp of dockApps) {
                        // If the config doesn't specify an icon, just use the icon from the first entry
                        if (!iconUrl) {
                            iconUrl = (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getAppIcon)(dockApp);
                        }
                        options.push({
                            tooltip: dockApp.title,
                            action: {
                                id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.launchApp,
                                customData: {
                                    source: "dock",
                                    appId: dockApp.appId
                                }
                            }
                        });
                    }
                    buttons.push({
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.DockButtonNames.DropdownButton,
                        tooltip: appButton.tooltip,
                        iconUrl,
                        options
                    });
                }
            }
        }
    }
    // Now add the custom buttons
    if (Array.isArray(settings.dockProvider?.buttons)) {
        for (const dockButton of settings.dockProvider.buttons) {
            // Is this a dock drop down
            if ("options" in dockButton) {
                if (!dockButton.tooltip || !dockButton.iconUrl) {
                    console.error("You must specify the tooltip and iconUrl for a DockButtonDropdown");
                }
                else {
                    const options = [];
                    for (const option of dockButton.options) {
                        let optionTooltip = option.tooltip;
                        // If the options has an appId we are going to launch that
                        // but the config can override the tooltip
                        if (option.appId && !optionTooltip) {
                            const app = await (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getApp)(option.appId);
                            optionTooltip = app.title;
                        }
                        // If we have an appId do the default dock launch action
                        // otherwise we just perform a custom action and this
                        // must be handled in actions.ts
                        options.push({
                            tooltip: optionTooltip,
                            action: option.appId
                                ? {
                                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.launchApp,
                                    customData: {
                                        source: "dock",
                                        appId: option.appId
                                    }
                                }
                                : option.action
                        });
                    }
                    buttons.push({
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.DockButtonNames.DropdownButton,
                        tooltip: dockButton.tooltip,
                        iconUrl: dockButton.iconUrl,
                        options
                    });
                }
            }
            else {
                let tooltip = dockButton.tooltip;
                let iconUrl = dockButton.iconUrl;
                // If the button has an appId we are going to launch that
                // but the config can override the tooltip or icon
                if (dockButton.appId && (!tooltip || !iconUrl)) {
                    const app = await (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getApp)(dockButton.appId);
                    if (!tooltip) {
                        tooltip = app.title;
                    }
                    if (!iconUrl) {
                        iconUrl = (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getAppIcon)(app);
                    }
                }
                // This is just a button with no dropdown
                // it might be launching an app or a custom action
                // which we must define in actions.ts
                buttons.push({
                    type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.DockButtonNames.ActionButton,
                    tooltip,
                    iconUrl,
                    action: dockButton.appId
                        ? {
                            id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.launchApp,
                            customData: {
                                source: "dock",
                                appId: dockButton.appId
                            }
                        }
                        : dockButton.action
                });
            }
        }
    }
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Dock.register({
        id: settings.dockProvider?.id,
        title: settings.dockProvider?.title,
        icon: settings.dockProvider?.icon,
        workspaceComponents: {
            hideWorkspacesButton: settings.dockProvider.workspaceComponents?.hideWorkspacesButton,
            hideHomeButton: !bootstrapOptions.home || settings.dockProvider.workspaceComponents?.hideHomeButton,
            hideStorefrontButton: !bootstrapOptions.store || settings.dockProvider.workspaceComponents?.hideStorefrontButton,
            hideNotificationsButton: !bootstrapOptions.notifications || settings.dockProvider.workspaceComponents?.hideNotificationsButton
        },
        buttons
    });
}
async function show() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Dock.show();
}
async function minimize() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Dock.minimize();
}
async function deregister() {
    if (isDockRegistered) {
        return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Dock.deregister();
    }
    console.warn("Unable to deregister home as there is an indication it was never registered");
}


/***/ }),

/***/ "./client/src/endpoint.ts":
/*!********************************!*\
  !*** ./client/src/endpoint.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "action": () => (/* binding */ action),
/* harmony export */   "hasEndpoint": () => (/* binding */ hasEndpoint),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "requestResponse": () => (/* binding */ requestResponse)
/* harmony export */ });
let endpointDefinitions = [];
let moduleDefinitions = [];
let isInitialized = false;
const availableEndpoints = {};
async function getModuleEndpoint(moduleId) {
    const endpointModule = availableEndpoints[moduleId];
    if (endpointModule !== undefined) {
        return endpointModule;
    }
    const moduleDefinition = moduleDefinitions.find((entry) => entry.id === moduleId);
    if (moduleDefinition === undefined) {
        console.warn(`Specified Endpoint Module Id: ${moduleId} is not available.`);
        return undefined;
    }
    try {
        const mod = await import(/* webpackIgnore: true */ moduleDefinition.url);
        const endpoint = mod.endpoint;
        await endpoint.init(moduleDefinition.data);
        availableEndpoints[moduleDefinition.id] = endpoint;
        return endpoint;
    }
    catch (err) {
        console.error(`Error loading module ${moduleId} with url ${moduleDefinition.url}`, err);
        return undefined;
    }
}
function getEndpointDefinition(endpointId) {
    const endpoint = endpointDefinitions.find((entry) => entry.id === endpointId);
    if (endpoint === undefined) {
        console.warn(`Specified Endpoint Id ${endpointId} is not available.`);
    }
    return endpoint;
}
function getRequestOptions(url, options, request) {
    if (options.method === "GET") {
        if (request !== undefined) {
            const keys = Object.keys(request);
            if (keys.length > 0) {
                const length = keys.length;
                for (let i = 0; i < length; i++) {
                    url = url.replace(`[${keys[i]}]`, encodeURIComponent(request[keys[i]]));
                }
            }
        }
    }
    else if (options.method === "POST" && request !== undefined) {
        options.body = JSON.stringify(request);
    }
    return { url, options };
}
async function init(options) {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    endpointDefinitions = options?.endpoints || [];
    moduleDefinitions = options?.modules || [];
}
function hasEndpoint(id) {
    return endpointDefinitions.some((entry) => entry.id === id);
}
async function action(endpointId, request) {
    const endpoint = getEndpointDefinition(endpointId);
    if (endpoint === undefined) {
        return false;
    }
    const endpointType = endpoint.type;
    // currently only fetch is supported but you could load different implementations of this intent based on type
    if (endpointType === "fetch") {
        const { url, ...options } = endpoint.options;
        const req = getRequestOptions(url, options, request);
        if (req.options.method !== "GET" && req.options.method !== "POST") {
            console.warn(`${endpointId} specifies a type: ${endpointType} with a method ${req.options.method} that is not supported.`);
            return false;
        }
        const response = await fetch(req.url, req.options);
        return response.ok;
    }
    else if (endpointType === "module") {
        const resolvedEndpoint = await getModuleEndpoint(endpoint.typeId);
        if (resolvedEndpoint === undefined) {
            return false;
        }
        return resolvedEndpoint.action(endpoint, request);
    }
    console.warn(`${endpointId} specifies a type: ${endpointType} that is not supported.`);
    return false;
}
async function requestResponse(endpointId, request) {
    const endpoint = endpointDefinitions.find((entry) => entry.id === endpointId);
    if (endpoint === undefined) {
        return null;
    }
    const endpointType = endpoint.type;
    // currently only fetch is supported but you could load different implementations of this intent based on type
    if (endpointType === "fetch") {
        const { url, ...options } = endpoint.options;
        const req = getRequestOptions(url, options, request);
        if (req.options.method !== "GET" && req.options.method !== "POST") {
            console.warn(`${endpointId} specifies a type: ${endpointType} with a method ${req.options.method} that is not supported.`);
            return null;
        }
        const response = await fetch(req.url, req.options);
        if (response.ok) {
            const json = await response.json();
            return json;
        }
        return null;
    }
    else if (endpointType === "module") {
        const resolvedEndpoint = await getModuleEndpoint(endpoint.typeId);
        if (resolvedEndpoint === undefined) {
            return null;
        }
        return resolvedEndpoint.requestResponse(endpoint, request);
    }
    console.warn(`${endpointId} specifies a type: ${endpointType} that is not supported.`);
    return null;
}


/***/ }),

/***/ "./client/src/home.ts":
/*!****************************!*\
  !*** ./client/src/home.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./client/src/integrations.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share */ "./client/src/share.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./client/src/template.ts");
/* harmony import */ var _workspace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workspace */ "./client/src/workspace.ts");











const HOME_ACTION_DELETE_PAGE = "Delete Page";
const HOME_ACTION_LAUNCH_PAGE = "Launch Page";
const HOME_ACTION_SHARE_PAGE = "Share Page";
const HOME_ACTION_DELETE_WORKSPACE = "Delete Workspace";
const HOME_ACTION_LAUNCH_WORKSPACE = "Launch Workspace";
const HOME_ACTION_SHARE_WORKSPACE = "Share Workspace";
const HOME_TAG_FILTERS = "tags";
let isHomeRegistered = false;
let registrationInfo;
function getSearchFilters(tags) {
    if (Array.isArray(tags)) {
        const filters = [];
        const uniqueTags = [...new Set(tags.sort())];
        const tagFilter = {
            id: HOME_TAG_FILTERS,
            title: "Tags",
            type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLIFilterOptionType.MultiSelect,
            options: []
        };
        for (const tag of uniqueTags) {
            if (Array.isArray(tagFilter.options)) {
                tagFilter.options.push({
                    value: tag,
                    isSelected: false
                });
            }
        }
        filters.push(tagFilter);
        return filters;
    }
    return [];
}
function mapAppEntriesToSearchEntries(apps) {
    const appResults = [];
    if (Array.isArray(apps)) {
        for (let i = 0; i < apps.length; i++) {
            const action = { name: "Launch View", hotkey: "enter" };
            const entry = {
                key: apps[i].appId,
                title: apps[i].title,
                data: apps[i]
            };
            switch (apps[i].manifestType) {
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.view.id:
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.inlineView.id: {
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.view.label;
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.window.id:
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.inlineWindow.id: {
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.window.label;
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.desktopBrowser.id: {
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.desktopBrowser.label;
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.snapshot.id: {
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.snapshot.label;
                    action.name = "Launch Snapshot";
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.manifest.id: {
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.manifest.label;
                    action.name = "Launch App";
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.external.id: {
                    action.name = "Launch Native App";
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.external.label;
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.endpoint.id: {
                    action.name = "Launch";
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.endpoint.label;
                    break;
                }
                case _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.connection.id: {
                    action.name = "Launch Connected App";
                    entry.label = _manifest_types__WEBPACK_IMPORTED_MODULE_6__.manifestTypes.connection.label;
                    break;
                }
            }
            entry.actions = [action];
            entry.icon = (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getAppIcon)(apps[i]);
            if (apps[i].description !== undefined) {
                entry.description = apps[i].description;
                entry.shortDescription = apps[i].description;
                entry.template = _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.SimpleText;
                entry.templateContent = apps[i].description;
            }
            else {
                entry.template = _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Plain;
            }
            appResults.push(entry);
        }
    }
    return appResults;
}
async function mapPageEntriesToSearchEntries(pages) {
    const pageResults = [];
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_7__.getSettings)();
    let pageIcon;
    if (settings?.platformProvider?.rootUrl !== undefined) {
        pageIcon = `${settings.platformProvider.rootUrl}/icons/page.svg`;
    }
    const pageTemplate = _template__WEBPACK_IMPORTED_MODULE_9__.PAGE_TEMPLATE.template;
    if (Array.isArray(pages)) {
        for (let i = 0; i < pages.length; i++) {
            const entry = {
                key: pages[i].pageId,
                title: pages[i].title,
                label: "Page",
                icon: pageIcon,
                actions: [
                    { name: HOME_ACTION_SHARE_PAGE, hotkey: "CmdOrCtrl+Shift+S" },
                    { name: HOME_ACTION_DELETE_PAGE, hotkey: "CmdOrCtrl+Shift+D" },
                    { name: HOME_ACTION_LAUNCH_PAGE, hotkey: "Enter" }
                ],
                data: { tags: ["page"], pageId: pages[i].pageId },
                template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
                templateContent: {
                    layout: pageTemplate,
                    data: {
                        title: pages[i].title,
                        description: pages[i].description,
                        instructions: "Use the buttons below to interact with your saved page:",
                        openText: "Launch",
                        deleteText: "Delete",
                        shareText: "Share"
                    }
                }
            };
            pageResults.push(entry);
        }
    }
    return pageResults;
}
async function mapWorkspaceEntriesToSearchEntries(workspaces) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_7__.getSettings)();
    let workspaceIcon;
    if (settings?.platformProvider?.rootUrl !== undefined) {
        workspaceIcon = `${settings.platformProvider.rootUrl}/icons/workspaces.svg`;
    }
    const workspaceTemplate = _template__WEBPACK_IMPORTED_MODULE_9__.WORKSPACE_TEMPLATE.template;
    const currentWorkspaceTemplate = _template__WEBPACK_IMPORTED_MODULE_9__.CURRENT_WORKSPACE_TEMPLATE.template;
    const workspaceResults = [];
    if (Array.isArray(workspaces)) {
        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__.getCurrentSync)();
        const currentWorkspace = await platform.getCurrentWorkspace();
        const currentWorkspaceId = currentWorkspace?.workspaceId;
        for (let i = 0; i < workspaces.length; i++) {
            const entryWorkspaceId = workspaces[i].workspaceId;
            const actions = entryWorkspaceId === currentWorkspaceId
                ? []
                : [
                    {
                        name: HOME_ACTION_SHARE_WORKSPACE,
                        hotkey: "CmdOrCtrl+Shift+S"
                    },
                    {
                        name: HOME_ACTION_DELETE_WORKSPACE,
                        hotkey: "CmdOrCtrl+Shift+D"
                    },
                    { name: HOME_ACTION_LAUNCH_WORKSPACE, hotkey: "Enter" }
                ];
            const layout = currentWorkspaceId === workspaces[i].workspaceId ? currentWorkspaceTemplate : workspaceTemplate;
            const instructions = currentWorkspaceId === workspaces[i].workspaceId
                ? "This is the currently active workspace. You can use the Browser menu to update/rename this workspace."
                : "Use the buttons below to interact with your saved Workspace:";
            const entry = {
                key: entryWorkspaceId,
                title: workspaces[i].title,
                label: "Workspace",
                icon: workspaceIcon,
                actions,
                data: { tags: ["workspace"], workspaceId: entryWorkspaceId },
                template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
                templateContent: {
                    layout,
                    data: {
                        title: workspaces[i].title,
                        instructions,
                        openText: "Launch",
                        deleteText: "Delete",
                        shareText: "Share"
                    }
                }
            };
            workspaceResults.push(entry);
        }
    }
    return workspaceResults;
}
async function getResults(query, queryMinLength, queryAgainst, filters) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__.getCurrentSync)();
    const apps = await (0,_apps__WEBPACK_IMPORTED_MODULE_2__.getApps)();
    const pages = await platform.Storage.getPages();
    const workspaces = await (0,_workspace__WEBPACK_IMPORTED_MODULE_10__.getWorkspaces)();
    const tags = [];
    const appSearchEntries = mapAppEntriesToSearchEntries(apps);
    const pageSearchEntries = await mapPageEntriesToSearchEntries(pages);
    const workspaceEntries = await mapWorkspaceEntriesToSearchEntries(workspaces);
    const initialResults = [...appSearchEntries, ...pageSearchEntries, ...workspaceEntries];
    if (initialResults.length > 0) {
        const finalResults = initialResults.filter((entry) => {
            let textMatchFound = true;
            let filterMatchFound = true;
            const isCommand = query.startsWith("/");
            if (query.length >= queryMinLength || isCommand) {
                textMatchFound = queryAgainst.some((target) => {
                    const path = target.split(".");
                    if (path.length === 1) {
                        const targetValue = entry[path[0]];
                        if (typeof targetValue === "string") {
                            const lowerTarget = targetValue.toLowerCase();
                            if (isCommand) {
                                return lowerTarget.startsWith(query);
                            }
                            return lowerTarget.includes(query);
                        }
                    }
                    else if (path.length === 2) {
                        const specifiedTarget = entry[path[0]];
                        let targetValue;
                        if (specifiedTarget !== undefined && specifiedTarget !== null) {
                            targetValue = specifiedTarget[path[1]];
                        }
                        if (typeof targetValue === "string") {
                            const lowerTarget = targetValue.toLowerCase();
                            if (isCommand) {
                                return lowerTarget.startsWith(query);
                            }
                            return lowerTarget.includes(query);
                        }
                        if (Array.isArray(targetValue)) {
                            if (targetValue.length > 0 &&
                                typeof targetValue[0] === "string" &&
                                targetValue.some((matchTarget) => matchTarget.toLowerCase().startsWith(query))) {
                                return true;
                            }
                            console.warn(`Manifest configuration for search specified a queryAgainst target that is an array but not an array of strings. Only string values and arrays are supported: ${specifiedTarget}`);
                        }
                    }
                    else {
                        console.warn("The manifest configuration for search has a queryAgainst entry that has a depth greater than 1. You can search for e.g. data.tags if data has tags in it and it is either a string or an array of strings.");
                    }
                    return false;
                });
            }
            const tagFilters = Array.isArray(filters) ? filters.filter((f) => f.id === HOME_TAG_FILTERS) : [];
            if (tagFilters.length > 0) {
                filterMatchFound = tagFilters.some((filter) => {
                    if (Array.isArray(filter.options)) {
                        if (entry.data?.tags !== undefined) {
                            return filter.options.every((option) => !option.isSelected || entry.data.tags.includes(option.value));
                        }
                    }
                    else if (filter.options.isSelected && entry.data?.tags !== undefined) {
                        return entry.data?.tags.indexOf(filter.options.value) > -1;
                    }
                    return true;
                });
            }
            if (textMatchFound && Array.isArray(entry.data?.tags)) {
                tags.push(...entry.data.tags);
            }
            return textMatchFound && filterMatchFound;
        });
        return {
            results: finalResults,
            context: {
                filters: getSearchFilters(tags)
            }
        };
    }
    return {
        results: [],
        context: {
            filters: []
        }
    };
}
async function register() {
    console.log("Initialising home.");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_7__.getSettings)();
    if (settings.homeProvider === undefined ||
        settings.homeProvider.id === undefined ||
        settings.homeProvider.title === undefined) {
        console.warn("homeProvider: not configured in the customSettings of your manifest correctly. Ensure you have the homeProvider object defined in customSettings with the following defined: id, title");
        return null;
    }
    const queryMinLength = settings?.homeProvider?.queryMinLength ?? 3;
    const queryAgainst = settings?.homeProvider?.queryAgainst ?? ["title"];
    let lastResponse;
    let filters;
    const onUserInput = async (request, response) => {
        try {
            const query = request.query.toLowerCase();
            if (query.toLowerCase().startsWith("/w ")) {
                const workspaces = await (0,_workspace__WEBPACK_IMPORTED_MODULE_10__.getWorkspaces)();
                const title = request.query.replace("/w ", "");
                const foundMatch = workspaces.find((entry) => entry.title.toLowerCase() === title.toLowerCase());
                if (foundMatch !== undefined && foundMatch !== null) {
                    // we have a match
                    return {
                        results: [
                            {
                                key: "WORKSPACE-EXISTS",
                                title: `Workspace ${foundMatch.title} already exists.`,
                                actions: [],
                                data: {
                                    tags: ["workspace"],
                                    workspaceId: foundMatch.workspaceId
                                }
                            }
                        ]
                    };
                }
                if (lastResponse !== undefined) {
                    lastResponse.close();
                }
                lastResponse = response;
                lastResponse.open();
                return {
                    results: [
                        {
                            key: "WORKSPACE-SAVE",
                            title: `Save Current Workspace as ${title}`,
                            label: "Suggestion",
                            actions: [{ name: "Save Workspace", hotkey: "Enter" }],
                            data: {
                                tags: ["workspace"],
                                workspaceId: crypto.randomUUID(),
                                workspaceTitle: title
                            }
                        }
                    ]
                };
            }
            filters = request?.context?.selectedFilters;
            if (lastResponse !== undefined) {
                lastResponse.close();
            }
            lastResponse = response;
            lastResponse.open();
            if (query === "?") {
                const integrationHelpSearchEntries = await (0,_integrations__WEBPACK_IMPORTED_MODULE_4__.getHelpSearchEntries)();
                const searchResults = {
                    results: integrationHelpSearchEntries,
                    context: {
                        filters: []
                    }
                };
                return searchResults;
            }
            const searchResults = await getResults(query, queryMinLength, queryAgainst, filters);
            const integrationResults = await (0,_integrations__WEBPACK_IMPORTED_MODULE_4__.getSearchResults)(query, filters, lastResponse);
            if (Array.isArray(integrationResults.results) && integrationResults.results.length > 0) {
                searchResults.results = searchResults.results.concat(integrationResults.results);
            }
            if (Array.isArray(integrationResults.context.filters) &&
                integrationResults.context.filters.length > 0) {
                searchResults.context.filters = searchResults.context.filters.concat(integrationResults.context.filters);
            }
            // Remove any empty filter lists as these can cause the UI to continually
            // expand and collapse as you type
            const finalFilters = [];
            if (Array.isArray(searchResults.context?.filters)) {
                for (const filter of searchResults.context.filters) {
                    if (Array.isArray(filter.options) && filter.options.length > 0) {
                        finalFilters.push(filter);
                    }
                }
            }
            searchResults.context.filters = finalFilters.length > 0 ? finalFilters : undefined;
            if (searchResults.results.length > 0 || finalFilters.length > 0) {
                return searchResults;
            }
        }
        catch (err) {
            console.error("Exception while getting search list results", err);
        }
    };
    const onSelection = async (result) => {
        if (result.data !== undefined) {
            const handled = await (0,_integrations__WEBPACK_IMPORTED_MODULE_4__.itemSelection)(result, lastResponse);
            if (!handled) {
                const data = result.data;
                if (data.workspaceId !== undefined) {
                    if (data.workspaceId !== undefined && result.key === "WORKSPACE-SAVE") {
                        await (0,_workspace__WEBPACK_IMPORTED_MODULE_10__.saveWorkspace)(data.workspaceId, data.workspaceTitle);
                        if (lastResponse !== undefined && lastResponse !== null) {
                            lastResponse.revoke(result.key);
                            lastResponse.respond([
                                {
                                    key: "WORKSPACE-SAVED",
                                    title: `Workspace ${data.workspaceTitle} saved.`,
                                    actions: [],
                                    data: {
                                        tags: ["workspace"],
                                        workspaceId: data.workspaceId,
                                        workspaceTitle: data.workspaceTitle,
                                        workspaceDescription: data.workspaceDescription
                                    }
                                }
                            ]);
                        }
                    }
                    else if (data.workspaceId !== undefined && result.key === "WORKSPACE-EXISTS") {
                        if (lastResponse !== undefined && lastResponse !== null) {
                            lastResponse.revoke(result.key);
                        }
                    }
                    else if (data.workspaceId !== undefined) {
                        const workspaceAction = result.action.name;
                        if (workspaceAction === HOME_ACTION_LAUNCH_WORKSPACE ||
                            workspaceAction === _template__WEBPACK_IMPORTED_MODULE_9__.WORKSPACE_TEMPLATE.actions.launch) {
                            await (0,_workspace__WEBPACK_IMPORTED_MODULE_10__.launchWorkspace)(data.workspaceId);
                        }
                        else if (workspaceAction === HOME_ACTION_DELETE_WORKSPACE ||
                            workspaceAction === _template__WEBPACK_IMPORTED_MODULE_9__.WORKSPACE_TEMPLATE.actions["delete"]) {
                            await (0,_workspace__WEBPACK_IMPORTED_MODULE_10__.deleteWorkspace)(data.workspaceId);
                            if (lastResponse !== undefined && lastResponse !== null) {
                                lastResponse.revoke(result.key);
                            }
                        }
                        else if (workspaceAction === HOME_ACTION_SHARE_WORKSPACE ||
                            workspaceAction === _template__WEBPACK_IMPORTED_MODULE_9__.WORKSPACE_TEMPLATE.actions.share) {
                            await (0,_share__WEBPACK_IMPORTED_MODULE_8__.share)({ workspaceId: data.workspaceId });
                        }
                        else {
                            console.warn(`Unrecognised action for workspace selection: ${data.workspaceId}`);
                        }
                    }
                }
                else if (data.pageId !== undefined) {
                    const pageAction = result.action.name;
                    if (pageAction === HOME_ACTION_LAUNCH_PAGE || pageAction === _template__WEBPACK_IMPORTED_MODULE_9__.PAGE_TEMPLATE.actions.launch) {
                        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__.getCurrentSync)();
                        const pageToLaunch = await platform.Storage.getPage(data.pageId);
                        await (0,_browser__WEBPACK_IMPORTED_MODULE_3__.launchPage)(pageToLaunch);
                    }
                    else if (pageAction === HOME_ACTION_DELETE_PAGE || pageAction === _template__WEBPACK_IMPORTED_MODULE_9__.PAGE_TEMPLATE.actions["delete"]) {
                        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__.getCurrentSync)();
                        await platform.Storage.deletePage(data.pageId);
                        if (lastResponse !== undefined && lastResponse !== null) {
                            lastResponse.revoke(result.key);
                        }
                    }
                    else if (pageAction === HOME_ACTION_SHARE_PAGE || pageAction === _template__WEBPACK_IMPORTED_MODULE_9__.PAGE_TEMPLATE.actions.share) {
                        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_1__.getCurrentSync)();
                        const page = await platform.Storage.getPage(data.pageId);
                        const bounds = await (0,_browser__WEBPACK_IMPORTED_MODULE_3__.getPageBounds)(data.pageId, true);
                        await (0,_share__WEBPACK_IMPORTED_MODULE_8__.share)({ page, bounds });
                    }
                    else {
                        console.warn(`Unknown action triggered on search result for page Id: ${data.pageId}`);
                    }
                }
                else {
                    await (0,_launch__WEBPACK_IMPORTED_MODULE_5__.launch)(data);
                }
            }
        }
        else {
            console.warn("Unable to execute result without data being passed");
        }
    };
    const cliProvider = {
        title: settings.homeProvider.title,
        id: settings.homeProvider.id,
        icon: settings.homeProvider.icon,
        onUserInput,
        onResultDispatch: onSelection
    };
    registrationInfo = await _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.register(cliProvider);
    isHomeRegistered = true;
    console.log("Home configured.");
    return registrationInfo;
}
async function show() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.show();
}
async function hide() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.hide();
}
async function deregister() {
    if (isHomeRegistered) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_7__.getSettings)();
        return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.deregister(settings.homeProvider.id);
    }
    console.warn("Unable to deregister home as there is an indication it was never registered");
}


/***/ }),

/***/ "./client/src/init-options.ts":
/*!************************************!*\
  !*** ./client/src/init-options.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "registerActionListener": () => (/* binding */ registerActionListener),
/* harmony export */   "registerListener": () => (/* binding */ registerListener),
/* harmony export */   "removeActionListener": () => (/* binding */ removeActionListener),
/* harmony export */   "removeListener": () => (/* binding */ removeListener)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);

const actionListeners = new Map();
const actionListenerMap = {};
const listeners = new Map();
const listenerMap = {};
let initialized = false;
const actionParamName = "action";
const actionPayloadParamName = "payload";
const modules = {};
async function loadInitOptionsModule(id, url, data) {
    try {
        if (modules[id] === undefined) {
            const mod = await import(/* webpackIgnore: true */ url);
            const actionHandler = mod.handler;
            if (actionHandler.init !== undefined) {
                await actionHandler.init(data);
            }
            modules[id] = actionHandler;
        }
        return true;
    }
    catch (err) {
        console.error(`Init Options: Error loading module ${id} with url ${url}`, err);
        return false;
    }
}
function extractPayloadFromParams(initOptions) {
    try {
        if (typeof initOptions?.payload === "string") {
            const plainJson = atob(initOptions?.payload);
            const payload = JSON.parse(plainJson);
            console.log("Init Options: Extracted payload", payload);
            return payload;
        }
    }
    catch (err) {
        console.error("Init Options: Error decoding payload, it should be Base64 encoded", initOptions, err);
    }
}
async function notifyActionListeners(initOptions) {
    const action = initOptions[actionParamName];
    const payload = initOptions[actionPayloadParamName] !== undefined ? extractPayloadFromParams(initOptions) : undefined;
    const availableListeners = actionListeners.get(action);
    if (availableListeners !== undefined && availableListeners !== null) {
        const subscriberIds = Array.from(availableListeners.keys());
        for (let i = 0; i < subscriberIds.length; i++) {
            const subscriberId = subscriberIds[i];
            console.log(`Init Options: Notifying subscriber with subscription Id: ${subscriberId} of action: ${action}`);
            try {
                await availableListeners.get(subscriberId)(action, payload);
            }
            catch (error) {
                console.error(`Init Options: Error executing action: ${action} against registered listener: ${subscriberId}.`, error);
            }
        }
    }
}
async function notifyListeners(initOptions) {
    const customParamIds = Array.from(listeners.keys());
    let listenerId;
    for (let i = 0; i < customParamIds.length; i++) {
        if (initOptions[customParamIds[i]] !== undefined) {
            listenerId = customParamIds[i];
            break;
        }
    }
    if (listenerId !== undefined) {
        console.log(`Init Options: Init param has been passed and it has a matching listener (${listenerId}). Passing on init options to listeners`);
        const availableListeners = listeners.get(listenerId);
        if (availableListeners !== undefined && availableListeners !== null) {
            const subscriberIds = Array.from(availableListeners.keys());
            for (let l = 0; l < subscriberIds.length; l++) {
                const subscriberId = subscriberIds[l];
                console.log(`Init Options: Notifying subscriber with subscription Id: ${subscriberId} of request: ${listenerId}`);
                try {
                    await availableListeners.get(subscriberId)(initOptions);
                }
                catch (error) {
                    console.error(`Init Options: Error executing handler for parameter: ${listenerId} against registered listener: ${subscriberId}.`, error);
                }
            }
        }
    }
}
async function queryOnLaunch(userAppConfigArgs) {
    if (userAppConfigArgs !== undefined) {
        console.log("Init Options: Received during startup:", userAppConfigArgs);
        if (userAppConfigArgs[actionParamName] !== undefined) {
            await notifyActionListeners(userAppConfigArgs);
        }
        else {
            await notifyListeners(userAppConfigArgs);
        }
    }
}
async function queryWhileRunning(event) {
    if (event?.userAppConfigArgs !== undefined) {
        console.log("Init Options: Received while platform is running:", event.userAppConfigArgs);
        if (event.userAppConfigArgs[actionParamName] !== undefined) {
            await notifyActionListeners(event.userAppConfigArgs);
        }
        else {
            await notifyListeners(event.userAppConfigArgs);
        }
    }
}
async function init(options) {
    if (initialized) {
        return;
    }
    initialized = true;
    if (Array.isArray(options?.modules)) {
        for (let i = 0; i < options.modules.length; i++) {
            const module = options.modules[i];
            if (Array.isArray(module?.supportedActions) && module.supportedActions.length > 0) {
                const isModuleLoaded = await loadInitOptionsModule(module.id, module.url, module.data);
                if (isModuleLoaded) {
                    for (let a = 0; a < module.supportedActions.length; a++) {
                        const supportedAction = module.supportedActions[a];
                        registerActionListener(supportedAction, async (requestedAction, payload) => {
                            const actionHandler = modules[module.id];
                            if (actionHandler !== undefined) {
                                console.log(`Init Options: Action: ${requestedAction} being handled by module ${module.id}`);
                                await actionHandler.action(requestedAction, payload);
                            }
                            else {
                                console.warn(`Init Options: Unable to retrieve module with id: ${module.id} to execute action: ${requestedAction}`);
                            }
                        });
                    }
                }
            }
        }
    }
    const app = fin.Application.getCurrentSync();
    const appInfo = await app.getInfo();
    const customInitOptions = appInfo.initialOptions;
    await queryOnLaunch(customInitOptions?.userAppConfigArgs);
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    await platform.Application.addListener("run-requested", queryWhileRunning);
}
function registerActionListener(action, actionHandler) {
    const key = crypto.randomUUID();
    if (!actionListeners.has(action)) {
        actionListeners.set(action, new Map());
    }
    const handlers = actionListeners.get(action);
    handlers.set(key, actionHandler);
    actionListeners.set(action, handlers);
    actionListenerMap[key] = action;
    return key;
}
function registerListener(paramName, handler) {
    if (paramName === actionParamName) {
        console.warn("Init Options: Please use registerActionListener if you wish to listen for an action.");
        return null;
    }
    const key = crypto.randomUUID();
    if (!listeners.has(paramName)) {
        listeners.set(paramName, new Map());
    }
    const handlers = listeners.get(paramName);
    handlers.set(key, handler);
    listeners.set(paramName, handlers);
    listenerMap[key] = paramName;
    return key;
}
function removeListener(id) {
    let removed = false;
    if (listenerMap[id] !== undefined) {
        const paramName = listenerMap[id];
        const listener = listeners.get(paramName);
        delete listenerMap[id];
        if (listener?.has(id)) {
            listener.delete(id);
            removed = true;
        }
    }
    return removed;
}
function removeActionListener(id) {
    let removed = false;
    if (actionListenerMap[id] !== undefined) {
        const action = actionListenerMap[id];
        const actionListener = actionListeners.get(action);
        delete actionListenerMap[id];
        if (actionListener?.has(id)) {
            actionListener.delete(id);
            removed = true;
        }
    }
    return removed;
}


/***/ }),

/***/ "./client/src/integrations.ts":
/*!************************************!*\
  !*** ./client/src/integrations.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKnownIntegrationProvider": () => (/* binding */ addKnownIntegrationProvider),
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "getHelpSearchEntries": () => (/* binding */ getHelpSearchEntries),
/* harmony export */   "getManagementResults": () => (/* binding */ getManagementResults),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults),
/* harmony export */   "itemSelection": () => (/* binding */ itemSelection),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./client/src/templates.ts");



const knownIntegrationProviders = {};
const homeIntegrations = [];
let passedIntegrationManager;
let passedIntegrationProvider;
/**
 * Create an integration result.
 * @param id The id of the integration.
 * @param name The name of the integration.
 * @param description The description of the integration.
 * @param icon The icon of the integration.
 * @param include is search enabled for this integration.
 * @returns The search result.
 */
async function createResult(id, name, description, icon, include) {
    const buttonAction = include ? "Turn Off Integration" : "Turn On Integration";
    return {
        key: `integration-${id}`,
        title: `${name}`,
        icon,
        actions: [],
        data: {
            providerId: "integration-provider",
            integrationId: id,
            include
        },
        template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
        templateContent: {
            layout: await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createContainer)("column", [
                await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createContainer)("column", [
                    await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createContainer)("row", [
                        await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createImage)("icon", name, { width: "32px", height: "32px" }),
                        await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createTitle)("title")
                    ], {
                        alignItems: "center",
                        gap: "10px"
                    }),
                    await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createText)("description", 12)
                ], {
                    gap: "20px"
                }),
                await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createContainer)("column", [
                    await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createText)("status", 12, { paddingBottom: "10px", fontFamily: "monospace" }),
                    await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createButton)(include ? _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary : _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary, "btnText", buttonAction)
                ])
            ], {
                padding: "10px",
                flex: 1,
                justifyContent: "space-between"
            }),
            data: {
                title: name,
                description: description ?? "You can enable/disable an integrations features",
                icon,
                status: `Integration State: ${include ? "On" : "Off"}`,
                btnText: buttonAction
            }
        }
    };
}
async function initializeIntegration(integration) {
    if (!passedIntegrationManager) {
        console.error("IntegrationManager is not available, make sure your have called register");
    }
    if (!knownIntegrationProviders[integration.id] && integration.moduleUrl) {
        try {
            const mod = await import(/* webpackIgnore: true */ integration.moduleUrl);
            knownIntegrationProviders[integration.id] = mod.integration;
        }
        catch (err) {
            console.error(`Error loading module ${integration.moduleUrl}`, err);
        }
    }
    if (knownIntegrationProviders[integration.id]) {
        const homeIntegration = knownIntegrationProviders[integration.id];
        homeIntegrations.push({
            module: homeIntegration,
            integration,
            include: true
        });
        if (homeIntegration.register) {
            await homeIntegration.register(passedIntegrationManager, integration);
        }
    }
    else {
        console.error("Missing module in integration providers", integration.id);
    }
}
async function getManagementResults() {
    if (!passedIntegrationProvider) {
        console.error("IntegrationProvider is not available, make sure your have called register");
    }
    const homeResponse = {
        results: [],
        context: {
            filters: []
        }
    };
    const integrations = passedIntegrationProvider.integrations;
    if (Array.isArray(integrations)) {
        for (const integration of integrations) {
            if (integration.enabled) {
                const existingIntegration = homeIntegrations.find((entry) => entry.integration.id === integration.id);
                if (existingIntegration) {
                    const result = await createResult(existingIntegration.integration.id, existingIntegration.integration.title, existingIntegration.integration.description, existingIntegration.integration.icon, existingIntegration.include);
                    homeResponse.results.push(result);
                }
                else {
                    const result = await createResult(integration.id, integration.title, integration.description, integration.icon, false);
                    homeResponse.results.push(result);
                }
            }
        }
    }
    if (homeResponse.results.length === 0) {
        const description = "You either have no integrations listed or none of them are enabled. Please check with support if you believe you should have access to integrations.";
        const noEntries = {
            key: "integration-provider-no-results",
            title: "No integrations available",
            data: {},
            actions: [],
            icon: passedIntegrationProvider.icon,
            description,
            shortDescription: description,
            template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.SimpleText,
            templateContent: description
        };
        homeResponse.results.push(noEntries);
        console.error("Integration management is enabled but you have no integrations listed in your settings or none of them are enabled.");
    }
    return homeResponse;
}
async function setPreference(integrationId, include) {
    const integrationPreferenceEndpointId = "integration-preferences-set";
    if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(integrationPreferenceEndpointId)) {
        // eslint-disable-next-line max-len
        const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(integrationPreferenceEndpointId, { id: integrationId, payload: { include } });
        if (success) {
            console.log(`Saved integration: ${integrationId} preference. Include: ${include}`);
        }
        else {
            console.log(`Unable to save integration: ${integrationId} preference. Include: ${include}`);
        }
    }
}
async function getPreference(integrationId) {
    const integrationPreferenceEndpointId = "integration-preferences-get";
    if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(integrationPreferenceEndpointId)) {
        // eslint-disable-next-line max-len
        const preference = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.requestResponse(integrationPreferenceEndpointId, { id: integrationId });
        if (preference !== undefined && preference !== null) {
            console.log(`Retrieved preference for integration: ${integrationId}`);
        }
        else {
            console.log(`Unable to get preference for integration: ${integrationId}`);
        }
        return preference;
    }
    return null;
}
async function updateIntegrationStatus(lastResponse, integrationId, include) {
    if (!passedIntegrationProvider) {
        console.error("IntegrationProvider is not available, make sure your have called register");
    }
    const knownIntegration = knownIntegrationProviders[integrationId];
    if (knownIntegration === undefined) {
        const integration = passedIntegrationProvider.integrations.find((entry) => entry.id === integrationId);
        if (integration !== undefined) {
            await initializeIntegration(integration);
            const result = await createResult(integration.id, integration.title, integration.description, integration.icon, !include);
            lastResponse.respond([result]);
            await setPreference(integration.id, !include);
            return true;
        }
        console.warn(`Unable to find specified integration: ${integrationId} in settings.`);
        return false;
    }
    const index = homeIntegrations.findIndex((entry) => entry.integration.id === integrationId);
    if (index !== -1) {
        homeIntegrations[index].include = !include;
        lastResponse.respond([
            await createResult(homeIntegrations[index].integration.id, homeIntegrations[index].integration.title, homeIntegrations[index].integration.description, homeIntegrations[index].integration.icon, !include)
        ]);
        await setPreference(homeIntegrations[index].integration.id, !include);
        return true;
    }
    return false;
}
/**
 * Register all the workspace integrations.
 * @param integrationManager The integration manager.
 * @param integrationProvider The integration provider settings.
 */
async function register(integrationManager, integrationProvider) {
    passedIntegrationManager = integrationManager;
    passedIntegrationProvider = integrationProvider;
    const integrations = integrationProvider?.integrations;
    if (Array.isArray(integrations)) {
        for (const integration of integrations) {
            if (integration.enabled) {
                const integrationPreference = await getPreference(integration.id);
                if (integrationPreference !== null) {
                    // follow preference
                    if (integrationPreference.include) {
                        await initializeIntegration(integration);
                    }
                }
                else if (integration.autoStart ?? true) {
                    await initializeIntegration(integration);
                }
            }
        }
    }
}
/**
 * Deregister all the integrations.
 * @param integrationProvider The integration provider.
 */
async function deregister() {
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.deregister) {
            await homeIntegration.module.deregister(homeIntegration.integration);
        }
    }
}
/**
 * Get the search results from all the integration providers.
 * @param query The query to get the search results for.
 * @param filters The filters to apply to the search results.
 * @param lastResponse The last search response used for updating existing results.
 * @returns The search results and new filters.
 */
async function getSearchResults(query, filters, lastResponse) {
    if (!passedIntegrationProvider) {
        console.error("IntegrationProvider is not available, make sure your have called register");
    }
    const homeResponse = {
        results: [],
        context: {
            filters: []
        }
    };
    if (passedIntegrationProvider.isManagementEnabled &&
        query.startsWith(`/${passedIntegrationProvider.command ?? "integrations"}`)) {
        return getManagementResults();
    }
    const promises = [];
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.getSearchResults && homeIntegration.include) {
            promises.push(homeIntegration.module.getSearchResults(homeIntegration.integration, query, filters, lastResponse));
        }
    }
    const promiseResults = await Promise.allSettled(promises);
    for (const promiseResult of promiseResults) {
        if (promiseResult.status === "fulfilled") {
            if (Array.isArray(promiseResult.value.results)) {
                homeResponse.results = homeResponse.results.concat(promiseResult.value.results);
            }
            const newFilters = promiseResult.value.context?.filters;
            if (Array.isArray(newFilters) && homeResponse.context?.filters) {
                homeResponse.context.filters = homeResponse.context.filters.concat(newFilters);
            }
        }
        else {
            console.error(promiseResult.reason);
        }
    }
    return homeResponse;
}
/**
 * Get the help search entries for all the integration providers.
 * @returns The list of help entries.
 */
async function getHelpSearchEntries() {
    if (!passedIntegrationProvider) {
        console.error("IntegrationProvider is not available, make sure your have called register");
    }
    let results = [];
    if (passedIntegrationProvider.isManagementEnabled) {
        const commandKeyword = passedIntegrationProvider.command ?? "integrations";
        const command = `/${commandKeyword}`;
        const helpEntry = {
            key: "integration-provider-help",
            title: command,
            label: "Help",
            icon: passedIntegrationProvider.icon,
            actions: [],
            data: {
                providerId: "integration-provider"
            },
            template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
            templateContent: await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createHelp)(command, [
                passedIntegrationProvider.commandDescription ??
                    `Allows the management of ${commandKeyword} for this platform. You can decide whether enabled integrations should be included when a query is entered.`
            ], [command])
        };
        results.push(helpEntry);
    }
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.getHelpSearchEntries && homeIntegration.include) {
            const integrationResults = await homeIntegration.module.getHelpSearchEntries(homeIntegration.integration);
            results = results.concat(integrationResults);
        }
    }
    return results;
}
/**
 * The item for one of the providers was selected.
 * @param result The result of the selection.
 * @param lastResponse The last response.
 * @returns True if the selection was handled.
 */
async function itemSelection(result, lastResponse) {
    if (result.data) {
        if (result.data?.providerId === "integration-provider") {
            const integrationId = result.data.integrationId;
            const include = result.data.include;
            return updateIntegrationStatus(lastResponse, integrationId, include);
        }
        const foundIntegration = homeIntegrations.find((hi) => hi.integration.id === result.data?.providerId);
        if (foundIntegration?.module?.itemSelection) {
            const handled = await foundIntegration.module.itemSelection(foundIntegration.integration, result, lastResponse);
            if (!handled) {
                console.warn(`Error while trying to handle ${foundIntegration.integration.id} entry`, result.data);
            }
            return handled;
        }
    }
    return false;
}
/**
 * Add an integration module that was loaded manually.
 * @param id The id of the module.
 * @param module The module.
 */
function addKnownIntegrationProvider(id, module) {
    knownIntegrationProviders[id] = module;
}


/***/ }),

/***/ "./client/src/interopbroker.ts":
/*!*************************************!*\
  !*** ./client/src/interopbroker.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interopOverride": () => (/* binding */ interopOverride)
/* harmony export */ });
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");




const NO_APPS_FOUND = "NoAppsFound";
const RESOLVER_TIMEOUT = "ResolverTimeout";
function interopOverride(InteropBroker, provider, options, ...args) {
    class InteropOverride extends InteropBroker {
        async launchAppWithIntent(app, intent) {
            console.log("Launching app with intent.");
            if (app.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.view.id &&
                app.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.inlineView.id &&
                app.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.snapshot.id) {
                // optional logic show a prompt to the user to let them know
                console.warn("Unable to raise intent against app as only view/snapshot based apps are supported.");
                return null;
            }
            if (app.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.view.id || app.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.inlineView.id) {
                console.log(`The supporting app is a view (${app.manifestType})`);
                const identity = await (0,_launch__WEBPACK_IMPORTED_MODULE_1__.launchView)(app);
                if (identity === null) {
                    // optional logic show a prompt to the user to let them know
                    console.warn("Unable to raise intent against view as no identity was returned.");
                    return null;
                }
                await super.setIntentTarget(intent, identity);
            }
            if (app.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_2__.manifestTypes.snapshot.id) {
                console.log("The supporting app is a view.");
                const identities = await (0,_launch__WEBPACK_IMPORTED_MODULE_1__.launchSnapshot)(app);
                if (identities === null) {
                    // optional logic show a prompt to the user to let them know
                    console.warn("Unable to raise intent against target as no identity was returned.");
                    return null;
                }
                for (let i = 0; i < identities.length; i++) {
                    await super.setIntentTarget(intent, identities[i]);
                }
            }
            return {
                source: app.appId,
                version: app.version
            };
        }
        async getTargetIdentity(appId) {
            if (appId === undefined || appId === null) {
                return;
            }
            const passedIdentity = appId.split("@");
            const name = passedIdentity[0];
            let uuid = fin.me.identity.uuid;
            if (passedIdentity.length === 2) {
                uuid = passedIdentity[1];
            }
            const resolvedIdentity = { uuid, name };
            try {
                const targetView = await fin.View.wrap({ uuid, name });
                await targetView.getInfo();
                // passed identity found
                return resolvedIdentity;
            }
            catch {
                // passed identity does not exist
            }
        }
        async launchAppPicker(launchOptions) {
            // show menu
            // launch a new window and optionally pass the available intents as customData.apps as part of the window options
            // the window can then use raiseIntent against a specific app (the selected one). This is a very basic example.
            const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
            const height = settings?.platformProvider?.intentPicker?.height || 400;
            const width = settings?.platformProvider?.intentPicker?.width || 400;
            // this logic runs in the provider so we are using it as a way of determining the root (so it works with root hosting and subdirectory based hosting if a url is not provided)
            const url = settings?.platformProvider?.intentPicker.url ||
                window.location.href.replace("platform/provider.html", "common/windows/intents/picker.html");
            const winOption = {
                name: "intent-picker",
                includeInSnapshot: false,
                fdc3InteropApi: "1.2",
                defaultWidth: width,
                defaultHeight: height,
                showTaskbarIcon: false,
                saveWindowState: false,
                defaultCentered: true,
                customData: {
                    apps: launchOptions.apps,
                    intent: launchOptions.intent,
                    intents: launchOptions.intents
                },
                url,
                frame: false,
                autoShow: true,
                alwaysOnTop: true
            };
            const win = await fin.Window.create(winOption);
            const webWindow = win.getWebWindow();
            try {
                // eslint-disable-next-line @typescript-eslint/dot-notation
                const selectedAppId = await webWindow["getIntentSelection"]();
                return selectedAppId;
            }
            catch {
                console.error("App for intent not selected/launched.", launchOptions.intent);
                return null;
            }
        }
        async isConnectionAuthorized(id, payload) {
            console.log("Interop connection being made by the following identity with payload:", id, payload);
            // perform connection validation checks here if required and return false if it shouldn't be permissioned.
            return true;
        }
        async isActionAuthorized(action, payload, identity) {
            console.log("Interop Broker is action authorized:", action, payload, identity);
            // perform check here if you wish and return true/false accordingly
            return true;
        }
        async handleInfoForIntentsByContext(context, clientIdentity) {
            const intents = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getIntentsByContext)(context.type);
            if (intents.length === 0) {
                throw new Error(NO_APPS_FOUND);
            }
            const mappedIntents = intents.map((entry) => ({
                intent: entry.intent,
                apps: entry.apps.map((app) => ({
                    name: app.appId,
                    appId: app.appId,
                    title: app.title
                }))
            }));
            return mappedIntents;
        }
        async handleInfoForIntent(intentOptions, clientIdentity) {
            const result = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getIntent)(intentOptions.name, intentOptions.context?.type);
            if (result === null) {
                throw new Error(NO_APPS_FOUND);
            }
            const response = {
                intent: result.intent,
                apps: result.apps.map((app) => {
                    const appEntry = {
                        name: app.appId,
                        appId: app.appId,
                        title: app.title
                    };
                    return appEntry;
                })
            };
            return response;
        }
        async handleFiredIntentForContext(contextForIntent, clientIdentity) {
            const availableIntents = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getIntentsByContext)(contextForIntent.type);
            if (availableIntents.length === 0) {
                throw new Error(NO_APPS_FOUND);
            }
            const intent = {
                context: contextForIntent,
                name: undefined,
                displayName: undefined
            };
            let targetApp;
            let targetAppIntent;
            let targetAppIntentCount = 0;
            if (contextForIntent.metadata?.target !== undefined) {
                targetApp = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getApp)(contextForIntent.metadata?.target);
            }
            if (targetApp !== undefined && Array.isArray(targetApp.intents)) {
                for (let i = 0; i < targetApp.intents.length; i++) {
                    targetAppIntent = targetApp.intents[i];
                    if (Array.isArray(targetAppIntent.contexts) &&
                        targetAppIntent.contexts.includes(contextForIntent.type)) {
                        targetAppIntentCount++;
                    }
                }
            }
            if (targetApp !== undefined && targetAppIntent !== undefined && targetAppIntentCount === 1) {
                // a preferred name for an app was given with the context object
                // the app existed and it supported the context type and there was only one intent that supported
                // that context type. Launch the app with that intent otherwise present the user with a list of
                // everything that supports that context type
                intent.name = targetAppIntent.name;
                intent.displayName = targetAppIntent.name;
                const intentResolver = await this.launchAppWithIntent(targetApp, intent);
                if (intentResolver === null) {
                    throw new Error(NO_APPS_FOUND);
                }
                return intentResolver;
            }
            if (availableIntents.length === 1) {
                intent.name = availableIntents[0].intent.name;
                intent.displayName = availableIntents[0].intent.name;
                if (availableIntents[0].apps.length === 1) {
                    const intentResolver = await this.launchAppWithIntent(availableIntents[0].apps[0], intent);
                    if (intentResolver === null) {
                        throw new Error(NO_APPS_FOUND);
                    }
                    return intentResolver;
                }
                if (availableIntents[0].apps.length > 1) {
                    try {
                        const userSelection = await this.launchAppPicker({
                            apps: availableIntents[0].apps,
                            intent
                        });
                        const selectedApp = availableIntents[0].apps.find((entry) => entry.appId === userSelection.appId && entry.appId !== undefined);
                        if (selectedApp !== null && selectedApp !== undefined) {
                            const intentResolver = await this.launchAppWithIntent(selectedApp, intent);
                            if (intentResolver === null) {
                                throw new Error(NO_APPS_FOUND);
                            }
                            return intentResolver;
                        }
                        console.error("We were returned a non existent appId to launch with the intent.");
                        throw new Error(NO_APPS_FOUND);
                    }
                    catch {
                        console.error("App for intent by context not selected/launched.", intent);
                        throw new Error(RESOLVER_TIMEOUT);
                    }
                }
            }
            else {
                try {
                    const userSelection = await this.launchAppPicker({
                        intent,
                        intents: availableIntents
                    });
                    const selectedIntent = availableIntents.find((entry) => entry.intent.name === userSelection.intent.name);
                    if (selectedIntent === undefined) {
                        console.error("The user selected an intent but it's name doesn't match the available intents.", userSelection);
                        throw new Error(NO_APPS_FOUND);
                    }
                    const selectedApp = selectedIntent.apps.find((entry) => entry.appId === userSelection.appId && entry.appId !== undefined);
                    if (selectedApp !== null && selectedApp !== undefined) {
                        intent.displayName = userSelection.intent.displayName;
                        intent.name = userSelection.intent.name;
                        const intentResolver = await this.launchAppWithIntent(selectedApp, intent);
                        if (intentResolver === null) {
                            throw new Error(NO_APPS_FOUND);
                        }
                        return intentResolver;
                    }
                    console.error("We were returned a non existent appId to launch with the intent.");
                    throw new Error(NO_APPS_FOUND);
                }
                catch {
                    console.error("App for intent by context not selected/launched.", intent);
                    throw new Error(RESOLVER_TIMEOUT);
                }
            }
        }
        async handleFiredIntent(intent) {
            console.log("Received request for a raised intent:", intent);
            let intentApps = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getAppsByIntent)(intent.name);
            let targetApp;
            if (intent.metadata?.target !== undefined) {
                targetApp = await (0,_apps__WEBPACK_IMPORTED_MODULE_0__.getApp)(intent.metadata?.target);
                if (targetApp === undefined) {
                    // check to see if you have been passed a specific identity for a view that should be targetted instead of an app
                    const targetIdentity = await this.getTargetIdentity(intent.metadata?.target);
                    if (targetIdentity !== undefined) {
                        console.log("We were passed a view identity instead of an app entry when raising/firing an intent. We will fire the intent at that as it exists and no app entry exists with that name.:", targetIdentity, intent);
                        await super.setIntentTarget(intent, targetIdentity);
                        return {
                            source: targetIdentity.name
                        };
                    }
                }
            }
            if (intentApps.length === 0) {
                console.log("No apps support this intent.");
                throw new Error(NO_APPS_FOUND);
            }
            if (targetApp !== undefined && intentApps.includes(targetApp)) {
                console.log("Assigning selected application with intent.", intent);
                intentApps = [targetApp];
            }
            if (intentApps.length === 1) {
                // handle single entry
                const intentResolver = await this.launchAppWithIntent(intentApps[0], intent);
                if (intentResolver === null) {
                    throw new Error(NO_APPS_FOUND);
                }
                return intentResolver;
            }
            // show menu
            // launch a new window and optionally pass the available intents as customData.apps as part of the window options
            // the window can then use raiseIntent against a specific app (the selected one). This is a very basic example.
            try {
                const userSelection = await this.launchAppPicker({
                    apps: intentApps,
                    intent
                });
                if (intentApps === undefined) {
                    console.warn("We should have a list of apps to search from.");
                    intentApps = [];
                }
                const selectedApp = intentApps.find((entry) => entry.appId === userSelection.appId && entry.appId !== undefined);
                if (selectedApp !== null && selectedApp !== undefined) {
                    const intentResolver = await this.launchAppWithIntent(selectedApp, intent);
                    if (intentResolver === null) {
                        throw new Error(NO_APPS_FOUND);
                    }
                    return intentResolver;
                }
                console.error("We were returned a non existent appId to launch with the intent.");
                throw new Error(NO_APPS_FOUND);
            }
            catch {
                console.error("App for intent not selected/launched.", intent);
                throw new Error(RESOLVER_TIMEOUT);
            }
        }
    }
    return new InteropOverride(provider, options, ...args);
}


/***/ }),

/***/ "./client/src/launch.ts":
/*!******************************!*\
  !*** ./client/src/launch.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "launch": () => (/* binding */ launch),
/* harmony export */   "launchSnapshot": () => (/* binding */ launchSnapshot),
/* harmony export */   "launchView": () => (/* binding */ launchView),
/* harmony export */   "launchWindow": () => (/* binding */ launchWindow)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connections */ "./client/src/connections.ts");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _manifest_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifest-types */ "./client/src/manifest-types.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");





async function getViewIdentities(name, uuid) {
    const identity = { uuid, name };
    const win = fin.Window.wrapSync(identity);
    const views = await win.getCurrentViews();
    const viewIdentities = views.map((view) => view.identity);
    await win.setAsForeground();
    return viewIdentities;
}
async function doesViewExist(name, uuid) {
    const view = fin.View.wrapSync({ name, uuid });
    let exists = false;
    try {
        await view.getInfo();
        const viewHost = await view.getCurrentWindow();
        await viewHost.bringToFront();
        exists = true;
    }
    catch {
        exists = false;
    }
    return exists;
}
async function doesWindowExist(name, uuid) {
    const win = fin.Window.wrapSync({ name, uuid });
    let exists = false;
    try {
        await win.getInfo();
        exists = true;
        if (await win.isShowing()) {
            await win.bringToFront();
        }
    }
    catch {
        exists = false;
    }
    return exists;
}
function findViewNames(layout) {
    const collectedNames = [];
    JSON.stringify(layout, (_, nestedValue) => {
        // check to ensure that we have a name field and that we also have a url field in this object (in case name was added to a random part of the layout)
        if (nestedValue?.name?.length && nestedValue.url !== undefined) {
            collectedNames.push(nestedValue.name);
        }
        return nestedValue;
    });
    return collectedNames;
}
async function launchWindow(windowApp) {
    if (windowApp === undefined || windowApp === null) {
        console.warn("No app was passed to launchWindow");
        return null;
    }
    if (windowApp.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.window.id &&
        windowApp.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineWindow.id) {
        console.warn(`The app passed was not of manifestType ${_manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.window.id} or ${_manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineWindow.id}.`);
        return null;
    }
    let manifest;
    if (windowApp.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.window.id) {
        const manifestResponse = await fetch(windowApp.manifest);
        manifest = await manifestResponse.json();
    }
    else {
        // conversion because of manifestType. In most use cases manifest is always a path to an executable or to a manifest file. For classic windows we are demonstrating how it could be used
        // for passing the manifest inline
        manifest = windowApp.manifest;
    }
    const name = manifest.name;
    let identity = { uuid: fin.me.identity.uuid, name };
    const wasNameSpecified = name !== undefined;
    let windowExists = false;
    if (wasNameSpecified) {
        windowExists = await doesWindowExist(identity.name, identity.uuid);
    }
    else {
        manifest.name = `classic-window-${crypto.randomUUID()}`;
        identity.name = manifest.name;
    }
    if (!windowExists) {
        try {
            const createdWindow = await fin.Window.create(manifest);
            identity = createdWindow.identity;
        }
        catch (err) {
            console.error("Error launching window", err);
            return null;
        }
    }
    return identity;
}
async function launchView(viewApp) {
    if (viewApp === undefined || viewApp === null) {
        console.warn("No app was passed to launchView");
        return null;
    }
    if (viewApp.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.view.id &&
        viewApp.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineView.id) {
        console.warn(`The app passed was not of manifestType ${_manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.view.id} or ${_manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineView.id}.`);
        return null;
    }
    let manifest;
    if (viewApp.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.view.id) {
        const manifestResponse = await fetch(viewApp.manifest);
        manifest = await manifestResponse.json();
    }
    else {
        // conversion because of manifestType. In most use cases manifest is always a path to an executable or to a manifest file. For views we are demonstrating how it could be used
        // for passing the manifest inline
        manifest = viewApp.manifest;
    }
    const name = manifest.name;
    let identity = { uuid: fin.me.identity.uuid, name };
    const wasNameSpecified = name !== undefined;
    let viewExists = false;
    if (wasNameSpecified) {
        viewExists = await doesViewExist(identity.name, identity.uuid);
    }
    if (!viewExists) {
        try {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            const createdView = await platform.createView(manifest);
            identity = createdView.identity;
        }
        catch (err) {
            console.error("Error launching view", err);
            return null;
        }
    }
    return identity;
}
async function launchSnapshot(snapshotApp) {
    if (snapshotApp === undefined || snapshotApp === null) {
        console.warn("No app was passed to launchSnapshot");
        return null;
    }
    if (snapshotApp.manifestType !== _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.snapshot.id) {
        console.warn(`The app passed was not of manifestType ${_manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.snapshot.id}.`);
        return null;
    }
    const manifestResponse = await fetch(snapshotApp.manifest);
    const manifest = await manifestResponse.json();
    const windows = manifest.windows;
    const windowsToCreate = [];
    if (Array.isArray(windows)) {
        const windowsToGather = [];
        const viewIds = [];
        for (let i = 0; i < windows.length; i++) {
            const getViewIdsForLayout = findViewNames(windows[i].layout);
            if (getViewIdsForLayout.length === 0) {
                const uuid = window.crypto.randomUUID();
                const name = `internal-generated-window-${uuid}`;
                windows[i].name = name;
                windowsToCreate.push(windows[i]);
                windowsToGather.push(name);
            }
            else {
                // we have views. Grab the first one to validate existence.
                const viewId = getViewIdsForLayout[0];
                for (const entry of getViewIdsForLayout) {
                    viewIds.push({ name: entry, uuid: fin.me.identity.uuid });
                }
                // these views should be readonly and cannot be pulled out of the page or closed
                if (!(await doesViewExist(viewId, fin.me.identity.uuid))) {
                    windowsToCreate.push(windows[i]);
                }
            }
        }
        manifest.windows = windowsToCreate;
        if (windowsToCreate.length > 0) {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            try {
                await platform.applySnapshot(manifest);
            }
            catch (err) {
                console.error("Error trying to apply snapshot to platform.", err, manifest);
            }
        }
        for (let w = 0; w < windowsToGather.length; w++) {
            const windowViewIds = await getViewIdentities(windowsToGather[w], fin.me.identity.uuid);
            viewIds.push(...windowViewIds);
        }
        return viewIds;
    }
    return null;
}
async function launch(appEntry) {
    try {
        console.log("Application launch requested:", appEntry);
        if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.external.id) {
            const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_4__.getSettings)();
            const appAssetTag = settings?.appProvider?.appAssetTag ?? "appasset";
            if (appEntry.tags?.includes(appAssetTag)) {
                console.log("Application requested is a native app with a tag of appasset so it is provided by this workspace platform. Managing request via platform and not Workspace.");
                const options = {};
                options.alias = appEntry.manifest;
                options.uuid = appEntry.appId;
                await fin.System.launchExternalProcess(options);
            }
            else {
                console.log("Application requested is a native app. Managing request via platform and not Workspace.");
                const options = {};
                options.path = appEntry.manifest;
                options.uuid = appEntry.appId;
                await fin.System.launchExternalProcess(options);
            }
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineExternal.id) {
            console.log("Application requested is a native app defined as inline-external. Managing request via platform and not Workspace.");
            try {
                const options = appEntry.manifest;
                await fin.System.launchExternalProcess(options);
            }
            catch (err) {
                console.error(`Error trying to launch inline-external with appId: ${appEntry.appId}`, err);
            }
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineView.id) {
            await launchView(appEntry);
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.window.id ||
            appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.inlineWindow.id) {
            await launchWindow(appEntry);
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.desktopBrowser.id) {
            await fin.System.openUrlWithBrowser(appEntry.manifest);
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.endpoint.id) {
            if (_endpoint__WEBPACK_IMPORTED_MODULE_2__.hasEndpoint(appEntry.manifest)) {
                const launched = await _endpoint__WEBPACK_IMPORTED_MODULE_2__.action(appEntry.manifest, { payload: appEntry });
                if (!launched) {
                    console.warn(`App with id: ${appEntry.appId} encountered when launched using endpoint: ${appEntry.manifest}.`);
                }
            }
            else {
                console.warn(`App with id: ${appEntry.appId} could not be launched as it is of manifestType: ${appEntry.manifestType} and the endpoint: ${appEntry.manifest} is not available.`);
            }
        }
        else if (appEntry.manifestType === _manifest_types__WEBPACK_IMPORTED_MODULE_3__.manifestTypes.connection.id) {
            console.log(`An app defined by a connection (connected app) has been selected. Passing selection to connection.`);
            await (0,_connections__WEBPACK_IMPORTED_MODULE_1__.launchConnectedApp)(appEntry);
        }
        else {
            const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
            await platform.launchApp({ app: appEntry });
        }
        console.log("Finished application launch request");
    }
    catch (err) {
        console.error("Failed during application launch request", err);
    }
}


/***/ }),

/***/ "./client/src/manifest-types.ts":
/*!**************************************!*\
  !*** ./client/src/manifest-types.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manifestTypes": () => (/* binding */ manifestTypes)
/* harmony export */ });
const manifestTypes = {
    view: {
        id: "view",
        label: "View",
        description: "This manifest type expects the manifest setting to be pointed to a json file that contains view options."
    },
    inlineView: {
        id: "inline-view",
        label: "View",
        description: "This manifest type expects the manifest setting to have the options inline rather than a url to a json file."
    },
    window: {
        id: "window",
        label: "Window",
        description: "This manifest type expects the manifest setting to point to a json file that contains classic window options."
    },
    inlineWindow: {
        id: "inline-window",
        label: "Window",
        description: "This manifest type expects the manifest setting to have the classic window options inline rather than a url to a json file."
    },
    snapshot: {
        id: "snapshot",
        label: "Snapshot",
        description: "This manifest type expects the manifest setting to point to a json file that contains a snapshot (one or more windows)"
    },
    manifest: {
        id: "manifest",
        label: "App",
        description: "This manifest type expects the manifest setting to point to a json file that is an openfin manifest. An openfin app."
    },
    external: {
        id: "external",
        label: "Native App",
        description: "This manifest type expects the manifest setting to point to an exe or an app asset name."
    },
    inlineExternal: {
        id: "inline-external",
        label: "Native App",
        description: "This manifest type expects the manifest setting to point to an exe or an app asset name using an inline launch external process request."
    },
    desktopBrowser: {
        id: "desktop-browser",
        label: "Desktop Browser",
        description: "This manifest type expects the manifest setting to point to a url which will be launched in the default desktop browser."
    },
    endpoint: {
        id: "endpoint",
        label: "Endpoint",
        description: "This manifest type expects the manifest setting to point to an endpoint (which should be defined in the endpointProvider). Action will be called on that endpoint and passed the specified app."
    },
    connection: {
        id: "connection",
        label: "Connected App",
        description: "This manifest type expects the manifest setting to have a uuid. This must match to a connection registered in the connectionProvider with app support."
    }
};


/***/ }),

/***/ "./client/src/menu.ts":
/*!****************************!*\
  !*** ./client/src/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalMenu": () => (/* binding */ getGlobalMenu),
/* harmony export */   "getPageMenu": () => (/* binding */ getPageMenu),
/* harmony export */   "getViewMenu": () => (/* binding */ getViewMenu)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./client/src/actions.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./client/src/auth.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");





function updateGlobalMenuEntry(menuEntries, dataType, action, entry) {
    const entryIndex = menuEntries.findIndex((menuEntry) => menuEntry.data !== undefined && menuEntry.data.type === dataType);
    if (entryIndex === -1) {
        console.warn(`Unable to find global menu with entry type: ${dataType}`);
    }
    else {
        switch (action) {
            case "DELETE": {
                menuEntries.splice(entryIndex);
                break;
            }
            case "REPLACE-LABEL": {
                if (entry === undefined || entry.label === undefined) {
                    console.warn(`Asked to replace label of menu entry but not provided an entry to grab a label from or given an empty label. Target menu data type: ${dataType}`);
                }
                else {
                    menuEntries[entryIndex].label = entry.label;
                }
                break;
            }
            case "INSERT-AFTER": {
                if (entry === undefined) {
                    console.warn(`You cannot insert a menu entry after the menu entry with data type: ${dataType} if you do not specify a menu entry`);
                }
                else {
                    menuEntries.splice(entryIndex + 1, 0, entry);
                }
                break;
            }
            case "INSERT-BEFORE": {
                if (entry === undefined) {
                    console.warn(`You cannot insert a menu entry before the menu entry with data type: ${dataType} if you do not specify a menu entry`);
                }
                else if (entryIndex === 0) {
                    menuEntries.unshift(entry);
                }
                else {
                    menuEntries.splice(entryIndex - 1, 0, entry);
                }
                break;
            }
        }
    }
    return menuEntries;
}
async function getGlobalMenu(defaultGlobalContextMenu = []) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const allowedMenuActions = settings?.browserProvider?.supportedMenuActions;
    let menuItems = defaultGlobalContextMenu;
    if (allowedMenuActions === undefined || allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.notificationToggle)) {
        menuItems = updateGlobalMenuEntry(defaultGlobalContextMenu, _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.OpenStorefront, "INSERT-AFTER", {
            label: "Toggle Notification Center",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.notificationToggle
                }
            }
        });
    }
    if (allowedMenuActions === undefined || allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.homeShow)) {
        menuItems = updateGlobalMenuEntry(menuItems, _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.OpenStorefront, "INSERT-AFTER", {
            label: "Open Home",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.homeShow
                }
            }
        });
    }
    menuItems = updateGlobalMenuEntry(menuItems, _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Quit, "REPLACE-LABEL", {
        type: "normal",
        label: "Quit App",
        data: {
            type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Quit
        }
    });
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_2__.isAuthenticationEnabled)() &&
        (allowedMenuActions === undefined || allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.logoutAndQuit)) &&
        !(await _auth__WEBPACK_IMPORTED_MODULE_2__.isAuthenticationRequired())) {
        menuItems = updateGlobalMenuEntry(menuItems, _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Quit, "INSERT-AFTER", {
            label: "Log Out and Quit App",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.GlobalContextMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.logoutAndQuit
                }
            }
        });
    }
    return menuItems;
}
async function getPageMenu(defaultPageContextMenu = []) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const allowedMenuActions = settings?.browserProvider?.supportedMenuActions;
    const customMenuEntries = [];
    if (allowedMenuActions === undefined || allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.movePageToNewWindow)) {
        customMenuEntries.push({
            label: "Move Page to new Window",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.PageTabContextMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.movePageToNewWindow
                }
            }
        });
    }
    if (customMenuEntries.length > 0) {
        customMenuEntries.push({
            type: "separator",
            data: undefined
        });
    }
    return [...customMenuEntries, ...defaultPageContextMenu];
}
async function getViewMenu(defaultViewContextMenu = []) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const allowedMenuActions = settings?.browserProvider?.supportedMenuActions;
    const customMenuEntries = [];
    if (allowedMenuActions === undefined || allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.moveViewToNewWindow)) {
        customMenuEntries.push({
            label: "Move View(s) to new Window",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.ViewTabMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.moveViewToNewWindow
                }
            }
        });
    }
    if (allowedMenuActions === undefined ||
        allowedMenuActions.includes(_actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.raiseCreateAppDefinitionIntent)) {
        customMenuEntries.push({
            label: "Create App Definition",
            data: {
                type: _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.ViewTabMenuOptionType.Custom,
                action: {
                    id: _actions__WEBPACK_IMPORTED_MODULE_1__.ACTION_IDS.raiseCreateAppDefinitionIntent
                }
            }
        });
    }
    if (customMenuEntries.length > 0) {
        customMenuEntries.push({
            type: "separator",
            data: undefined
        });
    }
    return [...customMenuEntries, ...defaultViewContextMenu];
}


/***/ }),

/***/ "./client/src/modules/endpoints/local-storage/platform-local-storage.ts":
/*!******************************************************************************!*\
  !*** ./client/src/modules/endpoints/local-storage/platform-local-storage.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformLocalStorage": () => (/* binding */ PlatformLocalStorage)
/* harmony export */ });
class PlatformLocalStorage {
    constructor(storageId, storageType) {
        this._storageTypeName = storageType;
        this._storageKey = `${fin.me.identity.uuid.toLowerCase().replaceAll(" ", "")}-${storageId}`;
    }
    async get(id) {
        if (id === undefined) {
            console.error(`No id was specified for getting a ${this._storageTypeName} entry.`);
            return null;
        }
        const store = this.getCompleteStore();
        const savedEntry = store[id];
        if (savedEntry === undefined || savedEntry === null) {
            console.warn(`No ${this._storageTypeName} entry was found for id ${id}.`);
            return null;
        }
        return savedEntry;
    }
    async set(id, entry) {
        if (id === undefined) {
            console.error(`You need to provide a id for the ${this._storageTypeName} entry you wish to save.`);
        }
        else {
            const store = this.getCompleteStore();
            store[id] = entry;
            this.setCompleteStore(store);
        }
    }
    async getAll(query) {
        const store = this.getCompleteStore();
        if (Object.keys(store).length === 0) {
            console.log(`Storage has no ${this._storageTypeName} entries.`);
            return [];
        }
        return Object.values(store);
    }
    async remove(id) {
        if (id === undefined) {
            console.error(`An id to clear the saved ${this._storageTypeName} was not provided.`);
        }
        else {
            const store = this.getCompleteStore();
            const entry = store[id];
            if (entry !== undefined) {
                delete store[id];
                this.setCompleteStore(store);
            }
            else {
                console.error(`You tried to delete a non-existent ${this._storageTypeName} with id ${id}`);
            }
        }
    }
    getCompleteStore() {
        const store = localStorage.getItem(this._storageKey);
        if (store === null) {
            console.log(`Storage has no ${this._storageTypeName} entries. Creating store.`);
            this.setCompleteStore({});
            return {};
        }
        return JSON.parse(store);
    }
    setCompleteStore(store) {
        localStorage.setItem(this._storageKey, JSON.stringify(store));
    }
}


/***/ }),

/***/ "./client/src/notifications.ts":
/*!*************************************!*\
  !*** ./client/src/notifications.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace/notifications */ "../../node_modules/@openfin/workspace/notifications.js");
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");


let notificationsRegistered = false;
async function register() {
    if (!notificationsRegistered) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
        const notificationPlatform = settings.notificationProvider;
        if (notificationPlatform !== undefined) {
            try {
                await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.register)(settings.notificationProvider);
                notificationsRegistered = true;
                console.log("Registered notifications");
            }
            catch (error) {
                console.error("We were unable to register with Notification Center:", error);
            }
        }
        else {
            console.warn("Unable to register notifications platform as we do not have it defined as part of settings.");
        }
    }
}
async function deregister() {
    if (notificationsRegistered) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
        const notificationPlatform = settings.notificationProvider;
        if (notificationPlatform !== undefined) {
            await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_0__.deregister)(notificationPlatform.id);
            console.log("Unregistered platform notifications.");
        }
        else {
            console.warn("Unable to register platform notifications as we do not have notifications defined as part of settings.");
        }
    }
}


/***/ }),

/***/ "./client/src/platform-override.ts":
/*!*****************************************!*\
  !*** ./client/src/platform-override.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overrideCallback": () => (/* binding */ overrideCallback)
/* harmony export */ });
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./client/src/menu.ts");
/* harmony import */ var _snapshot_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snapshot-source */ "./client/src/snapshot-source.ts");




const overrideCallback = async (WorkspacePlatformProvider) => {
    class Override extends WorkspacePlatformProvider {
        async getSnapshot(...args) {
            const snapshot = await super.getSnapshot(...args);
            return (0,_snapshot_source__WEBPACK_IMPORTED_MODULE_3__.decorateSnapshot)(snapshot);
        }
        async applySnapshot(...args) {
            await Promise.all([super.applySnapshot(...args), (0,_snapshot_source__WEBPACK_IMPORTED_MODULE_3__.applyClientSnapshot)(args[0].snapshot)]);
        }
        async getSavedWorkspaces(query) {
            // you can add your own custom implementation here if you are storing your workspaces
            // in non-default location (e.g. on the server instead of locally)
            const getWorkspacesEndpointId = "workspace-get-all";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(getWorkspacesEndpointId)) {
                const workspacesResponse = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.requestResponse(getWorkspacesEndpointId, { query });
                console.log(`Returning saved workspaces from custom storage for query: ${query ?? "none"}.`);
                return workspacesResponse.data;
            }
            console.log(`Returning saved workspaces from default storage for query: ${query ?? "none"}.`);
            return super.getSavedWorkspaces(query);
        }
        async getSavedWorkspace(id) {
            // you can add your own custom implementation here if you are storing your workspaces
            // in non-default location (e.g. on the server instead of locally)
            const getWorkspaceEndpointId = "workspace-get";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(getWorkspaceEndpointId)) {
                // eslint-disable-next-line max-len
                const workspaceResponse = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.requestResponse(getWorkspaceEndpointId, { id });
                console.log(`Returning saved workspace from custom storage for workspace id: ${id}.`);
                return workspaceResponse;
            }
            console.log(`Returning saved workspace from default storage for workspace id: ${id}.`);
            return super.getSavedWorkspace(id);
        }
        async createSavedWorkspace(req) {
            // you can add your own custom implementation here if you are storing your workspaces
            // in non-default location (e.g. on the server instead of locally)
            const setWorkspaceEndpointId = "workspace-set";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(setWorkspaceEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(setWorkspaceEndpointId, { id: req.workspace.workspaceId, payload: req.workspace });
                if (success) {
                    console.log(`Saved workspace with id: ${req.workspace.workspaceId} to custom storage`);
                }
                else {
                    console.log(`Unable to save workspace with id: ${req.workspace.workspaceId} to custom storage`);
                }
                return;
            }
            console.log(`Saving workspace to default storage for workspace id: ${req.workspace.workspaceId}.`);
            return super.createSavedWorkspace(req);
        }
        async updateSavedWorkspace(req) {
            // you can add your own custom implementation here if you are storing your workspaces
            // in non-default location (e.g. on the server instead of locally)
            const setWorkspaceEndpointId = "workspace-set";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(setWorkspaceEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(setWorkspaceEndpointId, { id: req.workspace.workspaceId, payload: req.workspace });
                if (success) {
                    console.log(`Updated workspace with id: ${req.workspace.workspaceId} against custom storage`);
                }
                else {
                    console.log(`Unable to update workspace with id: ${req.workspace.workspaceId} against custom storage`);
                }
                return;
            }
            console.log(`Saving updated workspace to default storage for workspace id: ${req.workspace.workspaceId}.`);
            return super.updateSavedWorkspace(req);
        }
        async deleteSavedWorkspace(id) {
            // you can add your own custom implementation here if you are storing your workspaces
            // in non-default location (e.g. on the server instead of locally)
            const removeWorkspaceEndpointId = "workspace-remove";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(removeWorkspaceEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(removeWorkspaceEndpointId, { id });
                if (success) {
                    console.log(`Removed workspace with id: ${id} from custom storage`);
                }
                else {
                    console.log(`Unable to remove workspace with id: ${id} from custom storage`);
                }
                return;
            }
            console.log(`Deleting workspace from default storage for workspace id: ${id}.`);
            return super.deleteSavedWorkspace(id);
        }
        async getSavedPages(query) {
            // you can add your own custom implementation here if you are storing your pages
            // in non-default location (e.g. on the server instead of locally)
            const getPagesEndpointId = "page-get-all";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(getPagesEndpointId)) {
                // eslint-disable-next-line max-len
                const pagesResponse = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.requestResponse(getPagesEndpointId, { query });
                console.log(`Returning saved pages from custom storage for query: ${query ?? "none"}.`);
                return pagesResponse.data;
            }
            console.log(`Returning saved pages from default storage for query: ${query ?? "none"}.`);
            return super.getSavedPages(query);
        }
        async getSavedPage(id) {
            // you can add your own custom implementation here if you are storing your pages
            // in non-default location (e.g. on the server instead of locally)
            const getPageEndpointId = "page-get";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(getPageEndpointId)) {
                // eslint-disable-next-line max-len
                const pageResponse = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.requestResponse(getPageEndpointId, {
                    id
                });
                console.log(`Returning saved page from custom storage for page id: ${id}.`);
                return pageResponse;
            }
            console.log(`Returning saved page with id ${id} from default storage.`);
            return super.getSavedPage(id);
        }
        async createSavedPage(req) {
            // always save page bounds regardless of storage for pages
            await (0,_browser__WEBPACK_IMPORTED_MODULE_0__.savePageBounds)(req.page.pageId);
            // you can add your own custom implementation here if you are storing your pages
            // in non-default location (e.g. on the server instead of locally)
            const setPageEndpointId = "page-set";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(setPageEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(setPageEndpointId, {
                    id: req.page.pageId,
                    payload: req.page
                });
                if (success) {
                    console.log(`Saved page with id: ${req.page.pageId} to custom storage`);
                }
                else {
                    console.log(`Unable to save page with id: ${req.page.pageId} to custom storage`);
                }
                return;
            }
            console.log(`creating saved page and saving to default storage. PageId: ${req.page.pageId}`);
            return super.createSavedPage(req);
        }
        async updateSavedPage(req) {
            // save page bounds even if using default storage for pages.
            await (0,_browser__WEBPACK_IMPORTED_MODULE_0__.savePageBounds)(req.pageId);
            // you can add your own custom implementation here if you are storing your pages
            // in non-default location (e.g. on the server instead of locally)
            const setPageEndpointId = "page-set";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(setPageEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(setPageEndpointId, {
                    id: req.page.pageId,
                    payload: req.page
                });
                if (success) {
                    console.log(`Updated page with id: ${req.page.pageId} against custom storage`);
                }
                else {
                    console.log(`Unable to save page with id: ${req.page.pageId} against custom storage`);
                }
                return;
            }
            console.log(`updating saved page and saving to default storage with page id: ${req.page.pageId}.`);
            return super.updateSavedPage(req);
        }
        async deleteSavedPage(id) {
            // save page bounds even if using default storage for pages.
            await (0,_browser__WEBPACK_IMPORTED_MODULE_0__.deletePageBounds)(id);
            // you can add your own custom implementation here if you are storing your pages
            // in non-default location (e.g. on the server instead of locally)
            const removePageEndpointId = "page-remove";
            if (_endpoint__WEBPACK_IMPORTED_MODULE_1__.hasEndpoint(removePageEndpointId)) {
                // eslint-disable-next-line max-len
                const success = await _endpoint__WEBPACK_IMPORTED_MODULE_1__.action(removePageEndpointId, { id });
                if (success) {
                    console.log(`Removed page with id: ${id} from custom storage`);
                }
                else {
                    console.log(`Unable to remove page with id: ${id} from custom storage`);
                }
                return;
            }
            console.log(`deleting saved page from default storage. PageId: ${id}.`);
            await super.deleteSavedPage(id);
        }
        async openGlobalContextMenu(req, callerIdentity) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return super.openGlobalContextMenu({
                ...req,
                template: await (0,_menu__WEBPACK_IMPORTED_MODULE_2__.getGlobalMenu)(req.template)
            }, callerIdentity);
        }
        async openViewTabContextMenu(req, callerIdentity) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return super.openViewTabContextMenu({
                ...req,
                template: await (0,_menu__WEBPACK_IMPORTED_MODULE_2__.getViewMenu)(req.template)
            }, callerIdentity);
        }
        async openPageTabContextMenu(req, callerIdentity) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return super.openPageTabContextMenu({
                ...req,
                template: await (0,_menu__WEBPACK_IMPORTED_MODULE_2__.getPageMenu)(req.template)
            }, callerIdentity);
        }
        async quit(payload, callerIdentity) {
            return super.quit(payload, callerIdentity);
        }
    }
    return new Override();
};


/***/ }),

/***/ "./client/src/platform.ts":
/*!********************************!*\
  !*** ./client/src/platform.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./client/src/actions.ts");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./client/src/auth.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _connections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connections */ "./client/src/connections.ts");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _interopbroker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interopbroker */ "./client/src/interopbroker.ts");
/* harmony import */ var _platform_override__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./platform-override */ "./client/src/platform-override.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./themes */ "./client/src/themes.ts");












let platformInitialized = false;
async function onLogOutOrCancel() {
    if (platformInitialized) {
        console.log("Calling quit on platform.");
        const plat = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        await plat.quit();
    }
    else {
        console.log("Platform not yet initialized. Closing provider window.");
        const platformWindow = fin.Window.wrapSync(fin.me.identity);
        await platformWindow.close(true);
    }
}
async function manageAuthFlow() {
    console.log(`Authentication required. Requesting login.`);
    const userLoggedIn = await _auth__WEBPACK_IMPORTED_MODULE_3__.login();
    if (!userLoggedIn) {
        // user cancelled the login process.
        // or exceeded tries.
        // stop the platform from starting.
        console.warn(`User process was cancelled. At this point you 
		should close the application so that the user can relaunch and 
		try again. We are closing the platform.`);
        await onLogOutOrCancel();
    }
    console.log(`Logged in.`);
}
async function setupPlatform(settings) {
    console.log("Initializing Core Services");
    await _endpoint__WEBPACK_IMPORTED_MODULE_6__.init(settings?.endpointProvider);
    await _connections__WEBPACK_IMPORTED_MODULE_5__.init(settings?.connectionProvider);
    await _apps__WEBPACK_IMPORTED_MODULE_2__.init(settings?.appProvider, _endpoint__WEBPACK_IMPORTED_MODULE_6__);
    console.log("Initializing platform");
    const browser = {};
    if (settings.browserProvider !== undefined) {
        browser.defaultWindowOptions = await (0,_browser__WEBPACK_IMPORTED_MODULE_4__.getDefaultWindowOptions)();
    }
    console.log("Specifying following browser options:", browser);
    const customActions = await (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActions)();
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_10__.getThemes)();
    await (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.init)({
        browser,
        theme,
        customActions,
        interopOverride: _interopbroker__WEBPACK_IMPORTED_MODULE_7__.interopOverride,
        overrideCallback: _platform_override__WEBPACK_IMPORTED_MODULE_8__.overrideCallback
    });
    platformInitialized = true;
}
async function init() {
    if (!(await (0,_settings__WEBPACK_IMPORTED_MODULE_9__.isValid)())) {
        console.error("The application cannot startup as the source of the setting used to bootstrap this application is not from a valid host. Please update the the list or this logic if required.");
        return;
    }
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_9__.getSettings)();
    console.log("Initializing Auth Check");
    await _auth__WEBPACK_IMPORTED_MODULE_3__.init(settings.authProvider);
    // in a real application you would feed in your own logger.
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__.isAuthenticationEnabled)()) {
        _auth__WEBPACK_IMPORTED_MODULE_3__.setLogger(console.log, console.warn, console.error);
        const authenticationRequired = await _auth__WEBPACK_IMPORTED_MODULE_3__.isAuthenticationRequired();
        if (authenticationRequired) {
            const loggedInSubscription = _auth__WEBPACK_IMPORTED_MODULE_3__.subscribe("logged-in", async () => {
                console.log("Platform logged in. Setting up platform.");
                await setupPlatform(settings);
                console.log("Unsubscribing from logged in events as platform has been initialized.");
                _auth__WEBPACK_IMPORTED_MODULE_3__.unsubscribe(loggedInSubscription);
            });
            await manageAuthFlow();
        }
        else {
            await setupPlatform(settings);
        }
        // check for session expiry
        _auth__WEBPACK_IMPORTED_MODULE_3__.subscribe("session-expired", manageAuthFlow);
        // check for logout
        _auth__WEBPACK_IMPORTED_MODULE_3__.subscribe("logged-out", onLogOutOrCancel);
    }
    else {
        await setupPlatform(settings);
    }
}


/***/ }),

/***/ "./client/src/settings.ts":
/*!********************************!*\
  !*** ./client/src/settings.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "isValid": () => (/* binding */ isValid)
/* harmony export */ });
let settings;
async function getConfiguredSettings() {
    const app = await fin.Application.getCurrent();
    const manifest = await app.getManifest();
    if (manifest.customSettings !== undefined) {
        settings = manifest.customSettings;
    }
    else {
        settings = {};
    }
    return settings;
}
async function getSettings() {
    if (settings === undefined) {
        settings = await getConfiguredSettings();
    }
    return settings;
}
async function isValid() {
    console.log(`Settings: Validating source of initial settings.`);
    const app = await fin.Application.getCurrent();
    const info = await app.getInfo();
    const manifestUrl = info.manifestUrl;
    console.log(`Settings: Source of initial settings: ${manifestUrl}`);
    // this check could be removed or it could be dynamically generated as part of the code or passed made available from the server
    // that hosts the code. It couldn't be from the manifest itself as it is validating where the manifest is coming from.
    const validHosts = [
        "localhost",
        "127.0.0.1",
        "built-on-openfin.github.io",
        "openfin.github.io",
        "samples.openfin.co",
        "cdn.openfin.co"
    ];
    const url = new URL(manifestUrl);
    console.log(`Settings: Checking host: ${url.hostname} vs valid list: ${JSON.stringify(validHosts)}`);
    const isValidHost = validHosts.includes(url.hostname);
    if (isValidHost) {
        console.log(`The source of the initial settings is valid.`);
    }
    else {
        console.warn(`The source of the initial settings ${manifestUrl} does not match any of the valid host names. Please update the list if required.`);
    }
    return isValidHost;
}


/***/ }),

/***/ "./client/src/share.ts":
/*!*****************************!*\
  !*** ./client/src/share.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "share": () => (/* binding */ share),
/* harmony export */   "showShareOptions": () => (/* binding */ showShareOptions)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/workspace/notifications */ "../../node_modules/@openfin/workspace/notifications.js");
/* harmony import */ var _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoint */ "./client/src/endpoint.ts");
/* harmony import */ var _init_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-options */ "./client/src/init-options.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _workspace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workspace */ "./client/src/workspace.ts");







let shareRegistered = false;
let initOptionsListenerId;
async function notifyOfSuccessfulLoad() {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const notification = {
        expires: new Date(Date.now() + 30000),
        body: "The share request has been fetched and applied.",
        buttons: [
            {
                submit: false,
                onClick: null,
                index: 3,
                iconUrl: "",
                cta: false,
                title: "Dismiss",
                type: "button"
            }
        ],
        stream: {
            id: "share-requests",
            displayName: "Share Request",
            appId: fin.me.identity.uuid
        },
        priority: 1,
        icon: settings.browserProvider.windowOptions.icon,
        indicator: {
            color: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.IndicatorColor.GREEN,
            text: "Share Request Applied"
        },
        category: "share",
        title: "Share Request Applied",
        template: "markdown"
    };
    await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.create)(notification);
}
async function notifyOfSuccess(url, expiryInHours) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const notification = {
        expires: new Date(Date.now() + 30000),
        body: `The share request you raised has been copied to the **clipboard** and will be valid for ${expiryInHours} hours. \n Share Url: \n * **${url}**`,
        buttons: [
            {
                submit: false,
                onClick: null,
                index: 3,
                iconUrl: "",
                cta: false,
                title: "Dismiss",
                type: "button"
            }
        ],
        stream: {
            id: "share-requests",
            displayName: "Share Request",
            appId: fin.me.identity.uuid
        },
        priority: 1,
        icon: settings.browserProvider.windowOptions.icon,
        indicator: {
            color: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.IndicatorColor.BLUE,
            text: "Share Request Raised"
        },
        category: "share",
        title: "Share Request Raised",
        template: "markdown"
    };
    await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.create)(notification);
}
async function notifyOfFailure(body) {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const notification = {
        expires: new Date(Date.now() + 30000),
        body,
        buttons: [
            {
                submit: false,
                onClick: null,
                index: 3,
                iconUrl: "",
                cta: false,
                title: "Dismiss",
                type: "button"
            }
        ],
        stream: {
            id: "share-requests",
            displayName: "Share Request",
            appId: fin.me.identity.uuid
        },
        priority: 1,
        icon: settings.browserProvider.windowOptions.icon,
        indicator: {
            color: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.IndicatorColor.RED,
            text: "Share Request Failed"
        },
        category: "share",
        title: "Share Request Failed",
        template: "markdown"
    };
    await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.create)(notification);
}
async function notifyOfExpiry() {
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const notification = {
        expires: new Date(Date.now() + 30000),
        body: "The share request has expired and is no longer available.",
        buttons: [
            {
                submit: false,
                onClick: null,
                index: 3,
                iconUrl: "",
                cta: false,
                title: "Dismiss",
                type: "button"
            }
        ],
        stream: {
            id: "share-requests",
            displayName: "Share Request",
            appId: fin.me.identity.uuid
        },
        priority: 1,
        icon: settings.browserProvider.windowOptions.icon,
        indicator: {
            color: _openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.IndicatorColor.RED,
            text: "Share Request Expired"
        },
        category: "share",
        title: "Share Request Expired",
        template: "markdown"
    };
    await (0,_openfin_workspace_notifications__WEBPACK_IMPORTED_MODULE_1__.create)(notification);
}
async function saveSharedPage(data) {
    let page;
    let bounds;
    if (data.page !== undefined && data.bounds !== undefined) {
        page = data.page;
        bounds = data.bounds;
    }
    else {
        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        const targetWindow = platform.Browser.wrapSync(data.windowIdentity);
        page = await targetWindow.getPage(data.pageId);
        bounds = await targetWindow.openfinWindow.getBounds();
    }
    const payload = {
        type: "page",
        data: {
            page,
            bounds
        }
    };
    await saveShareRequest(payload);
}
async function saveSharedWorkspace(workspaceId) {
    let snapshot = null;
    if (workspaceId === undefined) {
        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        snapshot = await platform.getSnapshot();
    }
    else {
        const savedWorkspace = await (0,_workspace__WEBPACK_IMPORTED_MODULE_6__.getWorkspace)(workspaceId);
        if (savedWorkspace !== null) {
            snapshot = savedWorkspace.snapshot;
        }
    }
    if (snapshot === null || snapshot === undefined) {
        await notifyOfFailure("Unable to action your workspace share request.");
    }
    else {
        const payload = {
            type: "workspace",
            data: {
                snapshot
            }
        };
        await saveShareRequest(payload);
    }
}
async function saveShareRequest(payload) {
    try {
        const expiryInHours = 24;
        const response = await (0,_endpoint__WEBPACK_IMPORTED_MODULE_3__.requestResponse)("share-save", payload);
        let id = response.id;
        if (id === undefined) {
            const indexOfId = response.url.lastIndexOf("/");
            if (indexOfId !== -1) {
                id = response.url.slice(indexOfId + 1);
            }
        }
        if (id === undefined) {
            await notifyOfFailure("The share request you raised could not be generated.");
            return;
        }
        const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        const platformInfo = await platform.Application.getInfo();
        let finsLink;
        if (platformInfo.manifestUrl.startsWith("http")) {
            finsLink = `${platformInfo.manifestUrl.replace("http", "fin")}?$$shareId=${id}`;
        }
        else {
            console.error("We do not support file based manifest launches. The manifest has to be served over http/https:", platformInfo.manifestUrl);
            await notifyOfFailure("The share request you raised could not be generated.");
            return;
        }
        await fin.Clipboard.writeText({
            data: finsLink
        });
        await notifyOfSuccess(finsLink, expiryInHours);
    }
    catch (error) {
        console.error("Error saving share request:", error);
        await notifyOfFailure("The share request you raised could not be generated.");
    }
}
async function loadSharedEntry(id) {
    try {
        const shareEntry = await (0,_endpoint__WEBPACK_IMPORTED_MODULE_3__.requestResponse)("share-get", { id });
        if (shareEntry !== undefined && shareEntry !== null) {
            if (shareEntry.type === "page") {
                await (0,_browser__WEBPACK_IMPORTED_MODULE_2__.launchPage)(shareEntry.data.page, shareEntry.data.bounds);
            }
            else if (shareEntry.type === "workspace") {
                const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
                await platform.applySnapshot(shareEntry.data.snapshot);
            }
            else {
                console.warn(`Share entry of unknown type specified: ${shareEntry.type}`);
                await notifyOfFailure("The specified share link is not supported and cannot be loaded.");
                return;
            }
            await notifyOfSuccessfulLoad();
        }
        else {
            await notifyOfExpiry();
        }
    }
    catch (error) {
        console.error("There has been an error trying to load and apply the share link.", error);
        await notifyOfFailure("The specified share link cannot be loaded.");
    }
}
async function register() {
    if (!shareRegistered) {
        shareRegistered = true;
        initOptionsListenerId = (0,_init_options__WEBPACK_IMPORTED_MODULE_4__.registerListener)("shareId", async (initOptions) => {
            console.log("Received share request.");
            if (typeof initOptions.shareId === "string") {
                await loadSharedEntry(initOptions.shareId);
            }
            else {
                console.warn("shareId passed but it wasn't a string");
            }
        });
    }
    else {
        console.warn("Share cannot be registered more than once.");
    }
}
async function deregister() {
    if (shareRegistered) {
        // any cleanup logic can go here
        (0,_init_options__WEBPACK_IMPORTED_MODULE_4__.removeListener)(initOptionsListenerId);
    }
    else {
        console.warn("Share isn't registered yet so cannot be deregistered.");
    }
}
async function showShareOptions(payload) {
    if (shareRegistered) {
        console.log("Share called with payload:", payload);
        const windowIdentity = payload.windowIdentity;
        let pageId;
        const platformWorkspace = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
        const currentWindow = platformWorkspace.Browser.wrapSync(windowIdentity);
        const currentPages = await currentWindow.getPages();
        for (const page of currentPages) {
            if (page.isActive) {
                pageId = page.pageId;
            }
        }
        const template = [
            {
                label: "Share Page",
                data: { identity: { windowIdentity, pageId }, type: "page" }
            },
            { type: "separator", data: {} },
            {
                label: "Share Workspace",
                data: { identity: {}, type: "workspace" }
            }
        ];
        const r = await currentWindow.openfinWindow.showPopupMenu({
            template,
            x: payload.x,
            y: payload.y
        });
        if (r.result === "closed") {
            console.log("share menu dismissed.");
        }
        else if (r.data.type === "page") {
            await saveSharedPage(r.data.identity);
        }
        else if (r.data.type === "workspace") {
            await saveSharedWorkspace();
        }
    }
    else {
        console.warn("Share cannot be triggered as it hasn't been registered yet.");
    }
}
async function share(options) {
    if (shareRegistered) {
        if (options === undefined || options.workspaceId !== undefined) {
            console.log("A request to share the workspace has been raised.");
            await saveSharedWorkspace(options?.workspaceId);
        }
        else {
            console.log("Share called with payload: =", options);
            await saveSharedPage(options);
        }
    }
    else {
        console.warn("Share cannot be triggered as it hasn't been registered yet.");
    }
}


/***/ }),

/***/ "./client/src/snapshot-source.ts":
/*!***************************************!*\
  !*** ./client/src/snapshot-source.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyClientSnapshot": () => (/* binding */ applyClientSnapshot),
/* harmony export */   "decorateSnapshot": () => (/* binding */ decorateSnapshot)
/* harmony export */ });
/* harmony import */ var _connections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connections */ "./client/src/connections.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");


async function decorateSnapshot(snapshot) {
    const sources = await (0,_connections__WEBPACK_IMPORTED_MODULE_0__.getConnectedSnapshotSourceClients)();
    if (sources.length === 0) {
        return snapshot;
    }
    const clientSnapshots = await Promise.all(sources.map(async (entry) => {
        const snapShotSource = await fin.SnapshotSource.wrap({ uuid: entry.identity.uuid });
        try {
            console.log(`Snapshot source: ${entry.identity.uuid}. Requesting a snapshot.`);
            const sourceSnapshot = await snapShotSource.getSnapshot();
            return { identity: entry.identity, snapshot: sourceSnapshot };
        }
        catch {
            console.log(`Snapshot source: ${entry.identity.uuid} was not available.`);
            return null;
        }
    }));
    const validatedClientSnapshots = clientSnapshots.filter((snapshotSource) => snapshotSource !== null);
    const decoratedSnapshot = Object.assign(snapshot, {
        clientSnapshots: validatedClientSnapshots
    });
    return decoratedSnapshot;
}
async function applyClientSnapshot(snapshot) {
    const sources = await (0,_connections__WEBPACK_IMPORTED_MODULE_0__.getConnectedSnapshotSourceClients)();
    if (!Array.isArray(snapshot?.clientSnapshots)) {
        return {};
    }
    await Promise.all(snapshot.clientSnapshots.map(async (clientSnapshot) => {
        if (clientSnapshot) {
            if (sources.some((source) => source.identity.uuid === clientSnapshot.identity.uuid)) {
                try {
                    const snapShotSource = await fin.SnapshotSource.wrap(clientSnapshot.identity);
                    console.log(`Snapshot source: ${clientSnapshot.identity.uuid} is running and has a snapshot entry. Applying snapshot.`);
                    await snapShotSource.applySnapshot(clientSnapshot.snapshot);
                }
                catch {
                    console.log(`Snapshot source: ${clientSnapshot.identity.uuid} is not able to apply the snapshot.`);
                }
            }
            else if (clientSnapshot?.snapshot !== undefined) {
                // eslint-disable-next-line @typescript-eslint/dot-notation
                const app = clientSnapshot.snapshot["App"] ?? clientSnapshot.snapshot["app"];
                if (app !== undefined) {
                    await (0,_launch__WEBPACK_IMPORTED_MODULE_1__.launch)(app);
                }
            }
            else {
                console.log(`Client snapshot was available but the source ${clientSnapshot.identity.uuid} was not connected and it didn't provide an app/App entry as part of the snapshot to trigger a launch.`);
            }
        }
        return {};
    }));
}


/***/ }),

/***/ "./client/src/store.ts":
/*!*****************************!*\
  !*** ./client/src/store.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps */ "./client/src/apps.ts");
/* harmony import */ var _launch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launch */ "./client/src/launch.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");




let isStoreRegistered = false;
let registrationInfo;
async function register() {
    console.log("Initializing the storefront provider.");
    const provider = await getStoreProvider();
    if (provider !== null) {
        try {
            registrationInfo = await _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Storefront.register(provider);
            console.log(`store version:`, registrationInfo);
            isStoreRegistered = true;
            console.log("Storefront provider initialized.");
            return registrationInfo;
        }
        catch (err) {
            console.error("An error was encountered while trying to register the content store provider", err);
            return null;
        }
    }
}
async function deregister() {
    if (isStoreRegistered) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
        await _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Storefront.deregister(settings.storefrontProvider.id);
    }
    else {
        console.warn("Unable to call store deregister as there is an indication it was never registered successfully.");
    }
}
async function show() {
    console.log("Showing the store.");
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Storefront.show();
}
async function hide() {
    console.log("Hiding the store.");
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Storefront.hide();
}
/**
 * This function is used when a navigation item or section hasn't been configured with an ID. This is to simplify configuration for this demo.
 * In a real application you would need an idempotent and unique ID (think GUID) that doesn't change for that navigation item/section regardless of how
 * many times it is regenerated (e.g. more items can be added to the item/section but the ID stays the same).
 * As you navigate around the store this ID is used as a route. So if a user clicks on a link, navigates to a new page and the re-requested navigation item has
 * a different ID then the store will not be able to find a match and it won't be able to render the navigation item.
 * A real application would not use this approach (as an update to the tag list would result in a new ID which would fail if the config was fetched from a server and not a manifest)
 */
function getId(title, tags = []) {
    const search = " ";
    const replaceWith = "-";
    let result = title.replaceAll(search, replaceWith);
    result += `-${tags.join("-")}`;
    return result.toLowerCase();
}
function isStorefrontConfigurationValid(config) {
    const idList = [];
    let hasDuplicateIds = false;
    if (config === undefined ||
        config.storefrontProvider === undefined ||
        config.storefrontProvider.id === undefined ||
        config.storefrontProvider.title === undefined ||
        (config.storefrontProvider.footer === undefined &&
            config.storefrontProvider.landingPage !== undefined &&
            config.storefrontProvider.landingPage.topRow !== undefined &&
            config.storefrontProvider.landingPage.middleRow !== undefined &&
            config.storefrontProvider.landingPage.bottomRow !== undefined &&
            config.storefrontProvider.navigation !== undefined)) {
        console.error("StorefrontProvider is not correctly configured in the customSettings of this manifest. You must ensure that storefrontProvider is defined, that it has an id and title and that the footer, landingPage (top row, middle row and bottom row) and navigation sections have been defined.");
        return false;
    }
    const validateId = (id, namespace, warning) => {
        if (id === undefined) {
            console.warn(`${namespace}: ${warning}`);
        }
        else if (idList.includes(id)) {
            hasDuplicateIds = true;
            console.error(`${namespace}: The id is used in more than one place. Please have a unique and idempotent id: ${id}`);
        }
        else {
            idList.push(id);
        }
    };
    const warningMessage = "The id is not defined. This demo will generate an id based on title but you should have a unique and idempotent id when building your own store.";
    console.log("Validating settings storefrontProvider navigation config");
    const navigation = config.storefrontProvider.navigation;
    for (let i = 0; i < navigation.length; i++) {
        validateId(navigation[i].id, `storefrontProvider.navigation[${i}].id`, warningMessage);
        const items = navigation[i].items;
        for (let n = 0; n < items.length; n++) {
            validateId(items[n].id, `storefrontProvider.navigation[${i}].items[${n}].id`, warningMessage);
        }
    }
    console.log("Validating settings storefrontProvider landing page hero config");
    const landingPage = config.storefrontProvider.landingPage;
    if (landingPage?.hero?.cta !== undefined) {
        validateId(landingPage.hero.cta.id, "storefrontProvider.landingPage.hero.cta.id", warningMessage);
    }
    console.log("Validating settings storefrontProvider landing page top row config");
    const topRow = landingPage.topRow;
    if (topRow.items !== undefined) {
        for (let i = 0; i < topRow.items.length; i++) {
            validateId(topRow.items[i].id, `storefrontProvider.landingPage.topRow.items[${i}].id`, warningMessage);
        }
    }
    console.log("Validating settings storefrontProvider landing page bottom row config");
    const bottomRow = landingPage.bottomRow;
    if (bottomRow.items !== undefined) {
        for (let i = 0; i < bottomRow.items.length; i++) {
            validateId(bottomRow.items[i].id, `storefrontProvider.landingPage.bottomRow.items[${i}].id`, warningMessage);
        }
    }
    console.log("Validating ids, checking for duplicate ids.");
    if (hasDuplicateIds) {
        console.error("You have defined duplicate ids (please see the other error messages) which could result in strange behaviour (if we are routing by id and you have two or more items that resolve to the same id then it could navigate to something unexpected. Please ensure ids are unique and idempotent.");
        return false;
    }
    return true;
}
async function getStoreProvider() {
    console.log("Getting the store provider.");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    if (isStorefrontConfigurationValid(settings)) {
        return {
            id: settings.storefrontProvider.id,
            title: settings.storefrontProvider.title,
            icon: settings.storefrontProvider.icon,
            getNavigation: getNavigation.bind(this),
            getLandingPage: getLandingPage.bind(this),
            getFooter: getFooter.bind(this),
            getApps: _apps__WEBPACK_IMPORTED_MODULE_1__.getApps,
            launchApp: _launch__WEBPACK_IMPORTED_MODULE_2__.launch
        };
    }
    return null;
}
async function getNavigation() {
    console.log("Showing the store navigation.");
    const navigationSectionItemLimit = 5;
    const navigationSectionLimit = 2;
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const navigationSections = [];
    if (settings?.storefrontProvider?.navigation === undefined) {
        return [];
    }
    for (let i = 0; i < settings.storefrontProvider.navigation.length; i++) {
        if (navigationSections.length === navigationSectionLimit) {
            console.log("More than 2 navigation sections defined in StorefrontProvider settings. Only two are taken.");
            break;
        }
        const navigationSection = {
            id: settings.storefrontProvider.navigation[i].id ??
                getId(settings.storefrontProvider.navigation[i].title),
            title: settings.storefrontProvider.navigation[i].title,
            items: (await getNavigationItems(settings.storefrontProvider.navigation[i].items, navigationSectionItemLimit))
        };
        navigationSections.push(navigationSection);
    }
    return navigationSections;
}
async function getLandingPage() {
    console.log("Getting the store landing page.");
    const landingPage = {
        topRow: null,
        middleRow: null,
        bottomRow: null
    };
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    const storeFrontDetailedNavigationItemBottomRowLimit = 3;
    const storeFrontDetailedNavigationItemTopRowLimit = 4;
    const middleRowAppLimit = 6;
    if (settings?.storefrontProvider?.landingPage?.hero !== undefined) {
        const hero = settings.storefrontProvider.landingPage.hero;
        const cta = await getNavigationItem(hero.cta.id, hero.cta.title, hero.cta.tags);
        landingPage.hero = {
            title: hero.title,
            image: hero.image,
            description: hero.description,
            cta
        };
    }
    if (settings?.storefrontProvider?.landingPage?.topRow !== undefined) {
        const row = await getLandingPageRow(settings?.storefrontProvider?.landingPage?.topRow, storeFrontDetailedNavigationItemTopRowLimit);
        landingPage.topRow = {
            title: row.title,
            items: row.items
        };
    }
    else {
        console.error("You need to have a topRow defined in your landing page.");
    }
    if (settings?.storefrontProvider?.landingPage?.middleRow !== undefined) {
        const middleRow = settings.storefrontProvider.landingPage.middleRow;
        const middleRowApps = await (0,_apps__WEBPACK_IMPORTED_MODULE_1__.getAppsByTag)(middleRow.tags);
        if (middleRowApps.length > middleRowAppLimit) {
            console.warn(`Too many apps (${middleRowApps.length}) have been returned by the middle row tag definition ${middleRow.tags.join(" ")}. Only ${middleRowAppLimit} will be shown.`);
        }
        const validatedMiddleRowApps = middleRowApps.slice(0, middleRowAppLimit);
        landingPage.middleRow = {
            title: middleRow.title,
            apps: validatedMiddleRowApps
        };
    }
    else {
        console.error("You need to have a middleRow defined in your landing page.");
    }
    if (settings?.storefrontProvider?.landingPage?.bottomRow !== undefined) {
        const row = await getLandingPageRow(settings.storefrontProvider.landingPage.bottomRow, storeFrontDetailedNavigationItemBottomRowLimit);
        landingPage.bottomRow = {
            title: row.title,
            items: row.items
        };
    }
    else {
        console.error("You need to have a bottomRow defined in your landing page.");
    }
    return landingPage;
}
async function getFooter() {
    console.log("Getting the store footer.");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    if (settings?.storefrontProvider?.footer !== undefined) {
        return settings.storefrontProvider.footer;
    }
    console.error("Storefront is being initialised without a footer configured.");
    return null;
}
/**
 * This section generates a navigation item for Storefront based on some configuration.
 * @param id
 * This id should be unique and idempotent and isn't changed regardless of how often the same navigation item is regenerated.
 * The reason for this is because it is used for routing in Storefront. If a user navigated from a link and the id changes when the item
 * is re-requested by storefront then it will not be able to render the contents.
 * @param title
 * @param tags
 * Tags are used as a way of filtering out which apps should be assigned to a StorefrontNavigationItem.
 * This allows apps to be tagged on the server and the store would automatically update the apps assigned to a particular section.
 * @returns StorefrontNavigationItem
 */
async function getNavigationItem(id, title, tags) {
    const navigationItem = {
        id: id ?? getId(title, tags),
        title,
        templateId: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.StorefrontTemplate.AppGrid,
        templateData: {
            apps: []
        }
    };
    const apps = await (0,_apps__WEBPACK_IMPORTED_MODULE_1__.getAppsByTag)(tags);
    if (apps !== undefined && apps.length > 0) {
        navigationItem.templateData.apps = apps;
    }
    return navigationItem;
}
async function getNavigationItems(items, limit) {
    const navigationItems = [];
    for (let i = 0; i < items.length; i++) {
        const navigationItem = await getNavigationItem(items[i].id, items[i].title, items[i].tags);
        navigationItems.push(navigationItem);
    }
    if (navigationItems.length > limit) {
        console.warn(`You have defined too many navigations items (${navigationItems.length}). Please limit it to ${limit} as we will only take the first ${limit}`);
    }
    return navigationItems.slice(0, limit);
}
async function getLandingPageRow(definition, limit) {
    const items = [];
    for (let i = 0; i < definition.items.length; i++) {
        const navigationItem = await getNavigationItem(definition.items[i].id, definition.items[i].title, definition.items[i].tags);
        const item = {
            description: definition.items[i].description,
            image: definition.items[i].image,
            ...navigationItem
        };
        items.push(item);
    }
    if (items.length > limit) {
        console.warn(`You have defined too many storefront detailed navigation items (${items.length}). Please keep it to the limit of ${limit} as only the first ${limit} will be returned.`);
    }
    const detailedNavigationItems = items.slice(0, limit);
    return {
        title: definition.title,
        items: detailedNavigationItems
    };
}


/***/ }),

/***/ "./client/src/template.ts":
/*!********************************!*\
  !*** ./client/src/template.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_WORKSPACE_TEMPLATE": () => (/* binding */ CURRENT_WORKSPACE_TEMPLATE),
/* harmony export */   "PAGE_TEMPLATE": () => (/* binding */ PAGE_TEMPLATE),
/* harmony export */   "WORKSPACE_TEMPLATE": () => (/* binding */ WORKSPACE_TEMPLATE)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);

const PAGE_ACTIONS = {
    delete: "page-delete",
    share: "page-share",
    launch: "page-launch"
};
const WORKSPACE_ACTIONS = {
    delete: "workspace-delete",
    share: "workspace-share",
    launch: "workspace-launch"
};
const PAGE_TEMPLATE = {
    actions: PAGE_ACTIONS,
    template: {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "title",
                style: {
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "center"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "description",
                optional: true,
                style: {
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "instructions",
                style: {
                    fontWeight: "bold",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
                style: {
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px"
                },
                children: [
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px"
                        },
                        action: PAGE_ACTIONS.launch,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "openText",
                                optional: false
                            }
                        ]
                    },
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        buttonStyle: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        },
                        action: PAGE_ACTIONS.delete,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "deleteText",
                                optional: false
                            }
                        ]
                    },
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        buttonStyle: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px"
                        },
                        action: PAGE_ACTIONS.share,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "shareText",
                                optional: false
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
const WORKSPACE_TEMPLATE = {
    actions: WORKSPACE_ACTIONS,
    template: {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "title",
                style: {
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "center"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "instructions",
                optional: true,
                style: {
                    fontWeight: "bold",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
                style: {
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px"
                },
                children: [
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px"
                        },
                        action: WORKSPACE_ACTIONS.launch,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "openText",
                                optional: false
                            }
                        ]
                    },
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        buttonStyle: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        },
                        action: WORKSPACE_ACTIONS.delete,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "deleteText",
                                optional: false
                            }
                        ]
                    },
                    {
                        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
                        buttonStyle: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "80px"
                        },
                        action: WORKSPACE_ACTIONS.share,
                        children: [
                            {
                                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                                dataKey: "shareText",
                                optional: false
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
const CURRENT_WORKSPACE_TEMPLATE = {
    template: {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "title",
                style: {
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "center"
                }
            },
            {
                type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
                dataKey: "instructions",
                optional: true,
                style: {
                    fontWeight: "bold",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }
            }
        ]
    }
};


/***/ }),

/***/ "./client/src/templates.ts":
/*!*********************************!*\
  !*** ./client/src/templates.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createHelp": () => (/* binding */ createHelp),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createText": () => (/* binding */ createText),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes */ "./client/src/themes.ts");


async function createHelp(title, description, examples
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    const additionalData = {};
    const fragments = [];
    for (let i = 0; i < description.length; i++) {
        const descriptionKey = `desc-${i}`;
        additionalData[descriptionKey] = description[i];
        fragments.push(await createText(descriptionKey, 12, {
            padding: "6px 0px"
        }));
    }
    const exampleFragments = [];
    for (let i = 0; i < examples.length; i++) {
        const exampleKey = `line-${i}`;
        additionalData[exampleKey] = examples[i];
        exampleFragments.push(await createText(exampleKey, 12, {
            fontFamily: "monospace"
        }));
    }
    if (exampleFragments.length > 0) {
        fragments.push(await createContainer("column", exampleFragments, {
            padding: "10px",
            marginTop: "6px",
            backgroundColor: theme.palette.inputBackground,
            color: theme.palette.inputColor,
            borderRadius: "5px"
        }));
    }
    return {
        layout: await createContainer("column", [await createTitle("title"), ...fragments], {
            padding: "10px"
        }),
        data: {
            title,
            ...additionalData
        }
    };
}
async function createContainer(containerType, children, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            display: "flex",
            flexDirection: containerType,
            ...style
        },
        children
    };
}
async function createTitle(dataKey, fontSize = 16, fontWeight = "bold", style) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
        dataKey,
        style: {
            color: theme.palette.brandPrimary,
            fontSize: `${fontSize ?? 16}px`,
            fontWeight,
            ...style
        }
    };
}
async function createText(dataKey, fontSize = 14, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
        dataKey,
        style: {
            fontSize: `${fontSize ?? 14}px`,
            ...style
        }
    };
}
async function createImage(dataKey, alternativeText, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Image,
        dataKey,
        alternativeText,
        style: {
            ...style
        }
    };
}
async function createButton(buttonStyle, titleKey, action, style) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    const buttonOptions = buttonStyle === _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary
        ? {
            border: `1px solid ${theme.palette.inputColor}`
        }
        : {};
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
        buttonStyle,
        children: [await createText(titleKey, 12)],
        action,
        style: {
            ...buttonOptions,
            ...style
        }
    };
}


/***/ }),

/***/ "./client/src/themes.ts":
/*!******************************!*\
  !*** ./client/src/themes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTheme": () => (/* binding */ getCurrentTheme),
/* harmony export */   "getThemes": () => (/* binding */ getThemes),
/* harmony export */   "validateThemes": () => (/* binding */ validateThemes)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");

const DEFAULT_PALETTES = {
    light: {
        brandPrimary: "#504CFF",
        brandSecondary: "#1E1F23",
        backgroundPrimary: "#FAFBFE",
        background1: "#FFFFFF",
        background2: "#FAFBFE",
        background3: "#F3F5F8",
        background4: "#ECEEF1",
        background5: "#DDDFE4",
        background6: "#C9CBD2",
        statusSuccess: "#35C759",
        statusWarning: "#F48F00",
        statusCritical: "#BE1D1F",
        statusActive: "#0498FB",
        inputBackground: "#ECEEF1",
        inputColor: "#1E1F23",
        inputPlaceholder: "#383A40",
        inputDisabled: "#7D808A",
        inputFocused: "#C9CBD2",
        textDefault: "#1E1F23",
        textHelp: "#2F3136",
        textInactive: "#7D808A"
    },
    dark: {
        brandPrimary: "#504CFF",
        brandSecondary: "#383A40",
        backgroundPrimary: "#1E1F23",
        background1: "#111214",
        background2: "#1E1F23",
        background3: "#24262B",
        background4: "#2F3136",
        background5: "#383A40",
        background6: "#53565F",
        statusSuccess: "#35C759",
        statusWarning: "#F48F00",
        statusCritical: "#BE1D1F",
        statusActive: "#0498FB",
        inputBackground: "#53565F",
        inputColor: "#FFFFFF",
        inputPlaceholder: "#C9CBD2",
        inputDisabled: "#7D808A",
        inputFocused: "#C9CBD2",
        textDefault: "#FFFFFF",
        textHelp: "#C9CBD2",
        textInactive: "#7D808A"
    }
};
let validatedThemes;
function getSystemPreferredColorScheme() {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
}
async function getCurrentTheme() {
    const themes = await getThemes();
    if (themes.length === 0) {
        return {
            label: "default",
            palette: DEFAULT_PALETTES.dark
        };
    }
    return themes[0];
}
async function getThemes() {
    if (!validatedThemes) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_0__.getSettings)();
        validatedThemes = validateThemes(settings?.themeProvider?.themes);
    }
    return validatedThemes.slice();
}
function validateThemes(themes) {
    const customThemes = [];
    if (Array.isArray(themes)) {
        const preferredColorScheme = getSystemPreferredColorScheme();
        for (let i = 0; i < themes.length; i++) {
            const themeToValidate = themes[i];
            const palette = validatePalette(themeToValidate.palette, themeToValidate.label);
            if (palette !== null) {
                themeToValidate.palette = palette;
            }
            else {
                // don't pass an empty object as there are no theme properties
                themeToValidate.palette = undefined;
            }
            if (themeToValidate.label.toLowerCase() === preferredColorScheme) {
                console.log(`Found a theme that matches system color scheme preferences and making it the default theme: ${preferredColorScheme}`);
                customThemes.unshift(themeToValidate);
            }
            else {
                customThemes.push(themeToValidate);
            }
        }
    }
    return customThemes;
}
function validatePalette(themePalette, themeLabel) {
    if (!themePalette) {
        return null;
    }
    const keys = Object.keys(themePalette);
    if (keys.length === 0) {
        return null;
    }
    const palette = {
        ...DEFAULT_PALETTES.dark
    };
    for (const key of keys) {
        if (themePalette[key] !== undefined &&
            themePalette[key] !== null &&
            themePalette[key].trim().length > 0) {
            palette[key] = themePalette[key];
        }
    }
    const brandPrimaryKey = "brandPrimary";
    const brandSecondaryKey = "brandSecondary";
    const backgroundPrimaryKey = "backgroundPrimary";
    if (!themePalette[brandPrimaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${brandPrimaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandPrimary}`);
    }
    if (!themePalette[brandSecondaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${brandSecondaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandSecondary}`);
    }
    if (!themePalette[backgroundPrimaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${backgroundPrimaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandPrimary}`);
    }
    return palette;
}


/***/ }),

/***/ "./client/src/workspace.ts":
/*!*********************************!*\
  !*** ./client/src/workspace.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteWorkspace": () => (/* binding */ deleteWorkspace),
/* harmony export */   "getWorkspace": () => (/* binding */ getWorkspace),
/* harmony export */   "getWorkspaceIds": () => (/* binding */ getWorkspaceIds),
/* harmony export */   "getWorkspaceTitles": () => (/* binding */ getWorkspaceTitles),
/* harmony export */   "getWorkspaces": () => (/* binding */ getWorkspaces),
/* harmony export */   "launchWorkspace": () => (/* binding */ launchWorkspace),
/* harmony export */   "saveWorkspace": () => (/* binding */ saveWorkspace)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);

async function getWorkspace(workspaceId) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    return platform.Storage.getWorkspace(workspaceId);
}
async function getWorkspaceIds() {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    const entries = await platform.Storage.getWorkspaces();
    const ids = [];
    for (const wks of entries) {
        ids.push(wks.workspaceId);
    }
    return ids;
}
async function getWorkspaceTitles() {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    const entries = await platform.Storage.getWorkspaces();
    const titles = [];
    for (const wks of entries) {
        titles.push(wks.title);
    }
    return titles;
}
async function getWorkspaces() {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    return platform.Storage.getWorkspaces();
}
async function deleteWorkspace(workspaceId) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    await platform.Storage.deleteWorkspace(workspaceId);
}
async function saveWorkspace(workspaceId, title) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    const snapshot = await platform.getSnapshot();
    const currentWorkspace = await platform.getCurrentWorkspace();
    const currentMetaData = currentWorkspace?.metadata;
    const workspace = {
        workspaceId,
        title,
        metadata: currentMetaData,
        snapshot
    };
    await platform.Storage.saveWorkspace(workspace);
}
async function launchWorkspace(workspaceId) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    const workspace = await getWorkspace(workspaceId);
    await platform.applyWorkspace(workspace);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrapper */ "./client/src/bootstrapper.ts");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "./client/src/platform.ts");


window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => (0,_bootstrapper__WEBPACK_IMPORTED_MODULE_0__.init)());
    await (0,_platform__WEBPACK_IMPORTED_MODULE_1__.init)();
});

})();

/******/ })()
;