/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@openfin/salesforce/connection/connection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@openfin/salesforce/connection/connection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAuthTokensToLocalStorage": () => (/* binding */ addAuthTokensToLocalStorage),
/* harmony export */   "checkAuthWindow": () => (/* binding */ checkAuthWindow),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "disconnect": () => (/* binding */ disconnect),
/* harmony export */   "exchangeAuthCodeForTokens": () => (/* binding */ exchangeAuthCodeForTokens),
/* harmony export */   "generateCodeChallenge": () => (/* binding */ generateCodeChallenge),
/* harmony export */   "generateCodeVerifier": () => (/* binding */ generateCodeVerifier),
/* harmony export */   "getAccessTokenStorageKey": () => (/* binding */ getAccessTokenStorageKey),
/* harmony export */   "getAuthTokensFromLocalStorage": () => (/* binding */ getAuthTokensFromLocalStorage),
/* harmony export */   "getConnection": () => (/* binding */ getConnection),
/* harmony export */   "executeApiRequest": () => (/* binding */ executeApiRequest),
/* harmony export */   "getObjectById": () => (/* binding */ getObjectById),
/* harmony export */   "getRefreshTokenStorageKey": () => (/* binding */ getRefreshTokenStorageKey),
/* harmony export */   "handleRestApiError": () => (/* binding */ handleRestApiError),
/* harmony export */   "refreshAccessToken": () => (/* binding */ refreshAccessToken),
/* harmony export */   "removeAuthTokensFromLocalStorage": () => (/* binding */ removeAuthTokensFromLocalStorage),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "shouldRefreshAccessTokenAndRetryRequest": () => (/* binding */ shouldRefreshAccessTokenAndRetryRequest),
/* harmony export */   "validateAccessToken": () => (/* binding */ validateAccessToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@openfin/salesforce/logger/logger.js");
/* harmony import */ var _objects_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/objects */ "./node_modules/@openfin/salesforce/objects/objects.js");
/* harmony import */ var _proxy_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proxy/proxy */ "./node_modules/@openfin/salesforce/proxy/proxy.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search */ "./node_modules/@openfin/salesforce/search/search.js");
const AUTH_TIMEOUT=3e5,AUTH_WINDOW_NAME="salesforce-auth",REDIRECT_URI="https://login.salesforce.com/services/oauth2/success",addAuthTokensToLocalStorage=(e,o,r)=>{e.accessToken&&window.localStorage.setItem(getAccessTokenStorageKey(o,r),e.accessToken),e.refreshToken&&window.localStorage.setItem(getRefreshTokenStorageKey(o,r),e.refreshToken)},checkAuthWindow=async(e,o,r,t,n,a)=>{let s;try{s=await e.getInfo()}catch(e){window.clearInterval(o),window.clearTimeout(r);var c=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Could not locate oauth flow window");return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(c),a(c)}const i=new URL(s.url);if(0===new URL(s.url).href.toLowerCase().indexOf(REDIRECT_URI.toLowerCase())){if(window.clearInterval(o),window.clearTimeout(r),e.removeAllListeners(),e.close(!0),i.searchParams.get("state")!==t){var l=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("State mismatch");return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(l),a(l)}l=i.searchParams.get("code");if(l)return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Authorization code received"),n(l);l=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Authorization code missing");return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(l),a(l)}l=await e.executeJavaScript("window.document.body.innerText");const g=new URLSearchParams(l),h=g.get("error_description");h?(window.clearInterval(o),window.clearTimeout(r),e.removeAllListeners(),e.close(!0),r=h[0].toUpperCase()+h.slice(1),r=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError(r),(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(r),a(r)):await e.isShowing()||((0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Showing auth window"),await e.show(!0),await e.focus())},connect=async(e,o,r=!1)=>{let t;try{t=new URL(e).origin}catch(e){throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Invalid Salesforce URL")}if(!/salesforce.com$/i.test(t))throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Invalid Salesforce URL");if(void 0===(o??void 0)||""===o.trim())throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Consumer key not provided");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Connecting to ${t} using key `+o);var n=await getConnection(e,o);if(n)return n;(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("No existing connection found, starting auth flow");const a=(await fin.Application.getCurrentSync().getChildWindows()).find(e=>e.identity.name===AUTH_WINDOW_NAME);a&&await a.close(!0);e=r?"https://test.salesforce.com":"https://login.salesforce.com";const s=(new Date).getTime().toString();n=generateCodeVerifier(),r=await generateCodeChallenge(n),r=(e+`/services/oauth2/authorize?
    client_id=${o}&
    redirect_uri=${REDIRECT_URI}&
    response_type=code&
    scope=api+refresh_token&
    state=${s}&
    code_challenge=${r}&
    display=popup&
    prompt=select_account
    `).replace(/\s/g,"");const c=await fin.Window.create({alwaysOnTop:!0,maximizable:!1,minimizable:!1,autoShow:!1,defaultCentered:!0,defaultHeight:700,defaultWidth:600,includeInSnapshots:!1,name:AUTH_WINDOW_NAME,resizable:!1,saveWindowState:!1,showTaskbarIcon:!1,url:r});r=await new Promise((e,o)=>{let r;const t=window.setTimeout(()=>{window.clearInterval(r),window.clearTimeout(t),c.removeAllListeners(),c.close(!0);var e=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Authorization timed out");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),o(e)},AUTH_TIMEOUT);c.addListener("closing",async()=>{(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("User closed auth window"),window.clearInterval(r),window.clearTimeout(t),c.removeAllListeners();var e=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Failed to complete authorization");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),o(e)}),r=window.setInterval(()=>checkAuthWindow(c,r,t,s,e,o),500)}),n=await exchangeAuthCodeForTokens(r,n,t,o);if((0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Checking connection with new access token"),await validateAccessToken(n.accessToken,t))return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Connection established"),addAuthTokensToLocalStorage(n,t,o),{consumerKey:o,disconnect:disconnect(t,o),getObjectById:getObjectById(t,o),orgUrl:t,search:search(t,o),executeApiRequest:executeApiRequest(t,o)};o=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError("Invalid Salesforce org URL or access token");throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(o),o},disconnect=(o,r)=>async()=>{(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Disconnecting from Salesforce");let e=window.localStorage.getItem(getRefreshTokenStorageKey(o,r));if(e)(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Revoking refresh token");else{if(e=window.localStorage.getItem(getAccessTokenStorageKey(o,r)),!e)return void (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("No tokens found in storage");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Revoking access token")}try{await axios__WEBPACK_IMPORTED_MODULE_0___default().get(o+"/services/oauth2/revoke?token="+e)}catch(e){(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logWarning)("Failed to revoke tokens",e?.message)}removeAuthTokensFromLocalStorage(o,r)},exchangeAuthCodeForTokens=async(e,o,r,t)=>{(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Exchanging auth code for tokens");r+="/services/oauth2/token",o=`
    grant_type=authorization_code&
    client_id=${t}&
    code=${e}&
    code_verifier=${o}&
    redirect_uri=${REDIRECT_URI}
    `.replace(/\s/g,"");let n;try{var a=await axios__WEBPACK_IMPORTED_MODULE_0___default().post(r,o,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});n=a.data}catch(e){var s=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Failed to exchange authorization code for auth tokens",e);throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(s),s}var{access_token:a,refresh_token:s}=n;if(!a||!s)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError("Missing access token or refresh token during code exchange");return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Tokens received"),{accessToken:a,refreshToken:s}},generateCodeChallenge=async e=>{const o=new TextEncoder;e=o.encode(e),e=await window.crypto.subtle.digest("SHA-256",e);return btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(e)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+\$/,"")},generateCodeVerifier=()=>{var e=new Uint32Array(64);return window.crypto.getRandomValues(e),Array.from(e,e=>("0"+e.toString(16)).substr(-2)).join("")},getAccessTokenStorageKey=(e,o)=>{return`access-token_#_${new URL(e).hostname}_#_`+o},getAuthTokensFromLocalStorage=(e,o)=>{return{accessToken:window.localStorage.getItem(getAccessTokenStorageKey(e,o)),refreshToken:window.localStorage.getItem(getRefreshTokenStorageKey(e,o))}},getConnection=async(e,o)=>{let r;if((0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Checking for existing connection"),!e||!o)return null;try{r=new URL(e).origin}catch(e){return null}var t=getAuthTokensFromLocalStorage(r,o)["accessToken"];if(!t)return null;if(!await validateAccessToken(t,r))try{await refreshAccessToken(r,o)}catch(e){return null}return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Connection exists to "+e),{consumerKey:o,disconnect:disconnect(r,o),getObjectById:getObjectById(r,o),orgUrl:r,search:search(r,o),executeApiRequest:executeApiRequest(r,o)}},executeApiRequest=(c,i)=>async(o,r,t,n)=>{var a=getAuthTokensFromLocalStorage(c,i)["accessToken"];if(!a){var s=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError;throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(s),s}s=e=>(0,_proxy_proxy__WEBPACK_IMPORTED_MODULE_4__.executeSalesforceRestApiRequest)(c,e,o,r,t,n);let e;try{e=await s(a)}catch(e){if(!(e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError))throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),e;return handleRestApiError(e,c,i,a,s)}return e},getObjectById=(a,s)=>async(o,r)=>{var t=getAuthTokensFromLocalStorage(a,s)["accessToken"];if(!t){var n=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError;throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(n),n}n=e=>(0,_objects_objects__WEBPACK_IMPORTED_MODULE_3__.getObjectDataFromSalesforce)(o,r,a,e);let e;try{e=await n(t)}catch(e){if(!(e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError))throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),e;return handleRestApiError(e,a,s,t,n)}return e},getRefreshTokenStorageKey=(e,o)=>{return`refresh-token_#_${new URL(e).hostname}_#_`+o},handleRestApiError=async(e,o,r,t,n)=>{if((0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),await shouldRefreshAccessTokenAndRetryRequest(e,o,t))try{var a=await refreshAccessToken(o,r);return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Retrying request"),await n(a.accessToken)}catch(e){throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),e}throw e},refreshAccessToken=async(o,r)=>{var e=getAuthTokensFromLocalStorage(o,r)["refreshToken"];if(!e)throw removeAuthTokensFromLocalStorage(o,r),new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError("No refresh token available");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Refreshing access token");var t=o+"/services/oauth2/token",n=`
    grant_type=refresh_token&
    client_id=${r}&
    refresh_token=${e}
    `.replace(/\s/g,"");let a;try{var s=await axios__WEBPACK_IMPORTED_MODULE_0___default().post(t,n,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});a=s.data}catch(e){var s=e.response?.data?.error_description,c="Failed to refresh access token",s=s?c+": "+s:c;throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)(s),removeAuthTokensFromLocalStorage(o,r),new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError(c)}c=a.access_token;if(!c)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError("Missing access token after refreshing");e={accessToken:c,refreshToken:e};return addAuthTokensToLocalStorage(e,o,r),e},removeAuthTokensFromLocalStorage=(e,o)=>{window.localStorage.removeItem(getAccessTokenStorageKey(e,o)),window.localStorage.removeItem(getRefreshTokenStorageKey(e,o))},search=(n,a)=>async o=>{var r=getAuthTokensFromLocalStorage(n,a)["accessToken"];if(!r){var t=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ConnectionError;throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(t),t}t=e=>(0,_search_search__WEBPACK_IMPORTED_MODULE_5__.executeSearch)(o,n,e);let e;try{e=await t(r)}catch(e){if(!(e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError))throw (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logError)(e),e;return handleRestApiError(e,n,a,r,t)}return e},shouldRefreshAccessTokenAndRetryRequest=async(e,o,r)=>("Network Error"===e.innerError?.message||"Network Error"===e.message)&&!await validateAccessToken(r,o),validateAccessToken=async(e,o)=>{try{await axios__WEBPACK_IMPORTED_MODULE_0___default().get(o+"/services/oauth2/userinfo?oauth_token="+e)}catch(e){return!1}return!0};

/***/ }),

/***/ "./node_modules/@openfin/salesforce/core.types.js":
/*!********************************************************!*\
  !*** ./node_modules/@openfin/salesforce/core.types.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesforceObjectType": () => (/* binding */ SalesforceObjectType)
/* harmony export */ });
var SalesforceObjectType;!function(e){e.Account="Account",e.Contact="Contact",e.Opportunity="Opportunity",e.Task="Task"}(SalesforceObjectType=SalesforceObjectType||{});

/***/ }),

/***/ "./node_modules/@openfin/salesforce/errors/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@openfin/salesforce/errors/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiError": () => (/* binding */ ApiError),
/* harmony export */   "AuthorizationError": () => (/* binding */ AuthorizationError),
/* harmony export */   "ConnectionError": () => (/* binding */ ConnectionError),
/* harmony export */   "ObjectDataError": () => (/* binding */ ObjectDataError),
/* harmony export */   "ParameterError": () => (/* binding */ ParameterError),
/* harmony export */   "QueryError": () => (/* binding */ QueryError),
/* harmony export */   "SearchError": () => (/* binding */ SearchError),
/* harmony export */   "RestApiError": () => (/* binding */ RestApiError),
/* harmony export */   "WorkspaceError": () => (/* binding */ WorkspaceError)
/* harmony export */ });
class ApiError extends Error{constructor(r="An unexpected error has occurred",e){super(r),e&&(this.innerError=e),this.stack=this.stack?.replace(/^(\w*Error)/,""+this.constructor.name)}}class AuthorizationError extends ApiError{constructor(r="Unable to authorize connection to Salesforce",e){super(r,e),e&&e.isAxiosError&&(e.message=e.response?.data?.error_description??e.message)}}class ConnectionError extends ApiError{constructor(r="Not connected to Salesforce",e){super(r,e)}}class ObjectDataError extends ApiError{constructor(r="Retrieve Salesforce object data failed",e){super(r,e)}}class ParameterError extends ApiError{constructor(r="Invalid parameter detected",e){super(r,e)}}class QueryError extends ApiError{constructor(r="Execute Salesforce query failed",e){super(r,e)}}class SearchError extends ApiError{constructor(r="Unable to retrieve search results from Salesforce",e){super(r,e)}}class RestApiError extends ApiError{constructor(r,e="Execute Salesforce REST API request failed"){super(e,r??void 0),this.restApiErrorCode="",this.restApiErrorDescription="",this.restApiResponseStatus=void 0;var e=r;e?.isAxiosError&&(this.restApiResponseStatus=e.response?.status,!e.response?.data?.length||(r=e.response?.data?.[0])&&({errorCode:e,message:r}=r,this.restApiErrorCode=e,this.restApiErrorDescription=r))}}class WorkspaceError extends ApiError{constructor(r="An unexpected error occurred",e){super(r,e)}}

/***/ }),

/***/ "./node_modules/@openfin/salesforce/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@openfin/salesforce/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": () => (/* reexport safe */ _connection_connection__WEBPACK_IMPORTED_MODULE_0__.connect),
/* harmony export */   "getConnection": () => (/* reexport safe */ _connection_connection__WEBPACK_IMPORTED_MODULE_0__.getConnection),
/* harmony export */   "SalesforceObjectType": () => (/* reexport safe */ _core_types__WEBPACK_IMPORTED_MODULE_1__.SalesforceObjectType),
/* harmony export */   "ApiError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.ApiError),
/* harmony export */   "AuthorizationError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.AuthorizationError),
/* harmony export */   "ConnectionError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.ConnectionError),
/* harmony export */   "ObjectDataError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.ObjectDataError),
/* harmony export */   "ParameterError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.ParameterError),
/* harmony export */   "QueryError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.QueryError),
/* harmony export */   "RestApiError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.RestApiError),
/* harmony export */   "SearchError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.SearchError),
/* harmony export */   "WorkspaceError": () => (/* reexport safe */ _errors_errors__WEBPACK_IMPORTED_MODULE_2__.WorkspaceError),
/* harmony export */   "disableLogging": () => (/* reexport safe */ _logger_logger__WEBPACK_IMPORTED_MODULE_3__.disableLogging),
/* harmony export */   "enableLogging": () => (/* reexport safe */ _logger_logger__WEBPACK_IMPORTED_MODULE_3__.enableLogging),
/* harmony export */   "getObjectUrl": () => (/* reexport safe */ _objects_objects__WEBPACK_IMPORTED_MODULE_4__.getObjectUrlFromSObject),
/* harmony export */   "SalesforceCleanStatus": () => (/* reexport safe */ _proxy_proxy_types__WEBPACK_IMPORTED_MODULE_5__.SalesforceCleanStatus),
/* harmony export */   "SalesforceRecurrenceInstance": () => (/* reexport safe */ _proxy_proxy_types__WEBPACK_IMPORTED_MODULE_5__.SalesforceRecurrenceInstance),
/* harmony export */   "SalesforceRecurrenceRegeneratedType": () => (/* reexport safe */ _proxy_proxy_types__WEBPACK_IMPORTED_MODULE_5__.SalesforceRecurrenceRegeneratedType),
/* harmony export */   "SalesforceTaskSubtype": () => (/* reexport safe */ _proxy_proxy_types__WEBPACK_IMPORTED_MODULE_5__.SalesforceTaskSubtype)
/* harmony export */ });
/* harmony import */ var _connection_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection/connection */ "./node_modules/@openfin/salesforce/connection/connection.js");
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.types */ "./node_modules/@openfin/salesforce/core.types.js");
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger/logger */ "./node_modules/@openfin/salesforce/logger/logger.js");
/* harmony import */ var _objects_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/objects */ "./node_modules/@openfin/salesforce/objects/objects.js");
/* harmony import */ var _proxy_proxy_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proxy/proxy.types */ "./node_modules/@openfin/salesforce/proxy/proxy.types.js");


/***/ }),

/***/ "./node_modules/@openfin/salesforce/logger/logger.js":
/*!***********************************************************!*\
  !*** ./node_modules/@openfin/salesforce/logger/logger.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableLogging": () => (/* binding */ enableLogging),
/* harmony export */   "disableLogging": () => (/* binding */ disableLogging),
/* harmony export */   "logInfo": () => (/* binding */ logInfo),
/* harmony export */   "logWarning": () => (/* binding */ logWarning),
/* harmony export */   "logError": () => (/* binding */ logError)
/* harmony export */ });
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version */ "./node_modules/@openfin/salesforce/version.js");
let loggingEnabled=!1;const prefix="[@openfin/salesforce]",enableLogging=()=>{loggingEnabled=!0,logInfo("v"+_version__WEBPACK_IMPORTED_MODULE_1__.API_VERSION)},disableLogging=()=>{loggingEnabled=!1},logInfo=(...n)=>{loggingEnabled&&console.log(prefix,...n)},logWarning=(...n)=>{loggingEnabled&&console.warn(prefix,...n)},logError=n=>{if(loggingEnabled&&(n.innerError?console.error(prefix,n,"\n\n(inner)",n.innerError):console.error(prefix,n),n instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_0__.RestApiError)){const{restApiErrorCode:o,restApiErrorDescription:r}=n;r&&(n=r.replace(/\n/g," ").trim(),n=o?o+": "+n:n,console.warn(prefix,n))}};window.fin||Object.assign(window,{fin:{}}),Object.assign(window.fin,{Integrations:{Salesforce:{enableLogging:enableLogging,disableLogging:disableLogging}}});

/***/ }),

/***/ "./node_modules/@openfin/salesforce/objects/objects.js":
/*!*************************************************************!*\
  !*** ./node_modules/@openfin/salesforce/objects/objects.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeSoqlQuery": () => (/* binding */ executeSoqlQuery),
/* harmony export */   "extendObjects": () => (/* binding */ extendObjects),
/* harmony export */   "getBatchedObjectDataFromSalesforce": () => (/* binding */ getBatchedObjectDataFromSalesforce),
/* harmony export */   "getObjectDataFromSalesforce": () => (/* binding */ getObjectDataFromSalesforce),
/* harmony export */   "getObjectUrl": () => (/* binding */ getObjectUrl),
/* harmony export */   "getObjectUrlFromSObject": () => (/* binding */ getObjectUrlFromSObject),
/* harmony export */   "getRelatedObjects": () => (/* binding */ getRelatedObjects)
/* harmony export */ });
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.types */ "./node_modules/@openfin/salesforce/core.types.js");
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@openfin/salesforce/logger/logger.js");
/* harmony import */ var _proxy_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proxy/proxy */ "./node_modules/@openfin/salesforce/proxy/proxy.js");
const executeSoqlQuery=async(e,t,r)=>{try{var o=e.replace(/\s+/g,"+");return(await (0,_proxy_proxy__WEBPACK_IMPORTED_MODULE_3__.executeSalesforceRestApiRequest)(t,r,"/services/data/vXX.X/query/?q="+o)).data.records}catch(e){let t;throw t=e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError?e:new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.QueryError,t}},extendObjects=(e,t,r)=>{if(e.objectType!==_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account&&e.objectType!==_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact)return e;{const o=e;return{...e,AbsolutePhotoUrl:o.PhotoUrl?""+t+o.PhotoUrl:null,getRelatedOpportunities:()=>getRelatedObjects(o.Id,o.objectType,_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Opportunity,t,r),getRelatedTasks:()=>getRelatedObjects(o.Id,o.objectType,_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Task,t,r)}}},getBatchedObjectDataFromSalesforce=async(e,t,c,a)=>{if(0===e.length)return[];e={batchRequests:e.map(e=>({method:"GET",url:`vXX.X/sobjects/${t}/`+e}))};try{const r=await (0,_proxy_proxy__WEBPACK_IMPORTED_MODULE_3__.executeSalesforceRestApiRequest)(c,a,"/services/data/vXX.X/composite/batch/","POST",e,{"Content-Type":"application/json"});return r.data.results.map(e=>{var{result:t,statusCode:e}=e;if(200!==e)return null;const{attributes:r,...o}=t;t=getObjectUrl(o.Id,c),t={objectType:r.type,objectUrl:t,...o};return extendObjects(t,c,a)})}catch(e){let t;throw t=e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError?e:new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ObjectDataError,t}},getObjectDataFromSalesforce=async(e,t,r,o)=>{if(!e&&!t)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Object ID or type not provided.");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Retrieving object data",{objectId:e,objectType:t});try{const{attributes:s,Id:l,...b}=(await (0,_proxy_proxy__WEBPACK_IMPORTED_MODULE_3__.executeSalesforceRestApiRequest)(r,o,`/services/data/vXX.X/sobjects/${t}/`+e)).data;var c=getObjectUrl(l,r),a={Id:l,objectType:s.type,objectUrl:c,...b};return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Object found",a),extendObjects(a,r,o)}catch(e){let t;if(e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError){if(404===e.restApiResponseStatus)return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("No object found"),null;t=e}else t=new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ObjectDataError;throw t}},getObjectUrl=(e,t)=>t+"/"+e,getObjectUrlFromSObject=(e,t)=>getObjectUrl(e.Id,t.orgUrl),getRelatedObjects=async(e,t,r,o,c)=>{(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Retrieving related objects",{sourceObjectId:e,sourceObjectType:t,targetObjectType:r});let a;switch(!0){case r===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Opportunity&&t===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account:a="AccountId";break;case r===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Opportunity&&t===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact:a="ContactId";break;case r===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Task&&t===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account:a="WhatId";break;case r===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Task&&t===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact:a="WhoId";break;default:throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ObjectDataError(`Get related objects for "${t}" objects is not supported`)}e=`SELECT FIELDS(ALL) FROM ${r} WHERE ${a} = '${e}' ORDER BY LastModifiedDate LIMIT 200`;const s=await executeSoqlQuery(e,o,c);return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Found ${s.length} related object(s)`),s.map(e=>{const{attributes:t,...r}=e;e=getObjectUrl(e.Id,o);return{objectType:t.type,objectUrl:e,...r}})};

/***/ }),

/***/ "./node_modules/@openfin/salesforce/proxy/proxy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@openfin/salesforce/proxy/proxy.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendLeadingSlashIfMissing": () => (/* binding */ appendLeadingSlashIfMissing),
/* harmony export */   "executeSalesforceRestApiRequest": () => (/* binding */ executeSalesforceRestApiRequest),
/* harmony export */   "processApiVersionInCompositeRequestData": () => (/* binding */ processApiVersionInCompositeRequestData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@openfin/salesforce/logger/logger.js");
const REST_API_VERSION="52.0",API_VERSION_TOKEN_REGEX=new RegExp("vXX\\.X","i"),appendLeadingSlashIfMissing=e=>e.startsWith("/")?e:"/"+e,executeSalesforceRestApiRequest=async(r,e,s,a="GET",t={},o={})=>{if(!s)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("API endpoint not provided");s=appendLeadingSlashIfMissing(s);var i=/\/v(\w{2}\.\w)\//.exec(s)?.[1];if(!i)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError(null,"REST API version not specified");API_VERSION_TOKEN_REGEX.test(s)?s=s.replace(i,REST_API_VERSION):i!==REST_API_VERSION&&(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logWarning)(`Requested REST API version (${i}) is different to the current supported version (${REST_API_VERSION}). Using an API version other than current supported version may cause errors.`);let n;const p=new RegExp(`/services/data/v${REST_API_VERSION}/composite`,"i");n=p.test(s)?processApiVersionInCompositeRequestData(t):t,(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Executing ${a.toUpperCase()} API request to `+s,n,o),Object.assign(o,{Authorization:"Bearer "+e});try{let e;switch(a.toUpperCase()){case"GET":e=await axios__WEBPACK_IMPORTED_MODULE_0___default().get(""+r+s,{headers:o});break;case"POST":e=await axios__WEBPACK_IMPORTED_MODULE_0___default().post(""+r+s,n,{headers:o});break;case"PATCH":e=await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(""+r+s,t,{headers:o});break;case"DELETE":e=await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](""+r+s,{headers:o});break;case"HEAD":e=await axios__WEBPACK_IMPORTED_MODULE_0___default().head(""+r+s,{headers:o});break;default:throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError(null,"Invalid HTTP method")}return{data:e.data,status:e.status}}catch(e){if(e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError)throw e;throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError(e)}},processApiVersionInCompositeRequestData=e=>{const r=Array.isArray(e)?e:Object.entries(e);return r.reduce((e,r)=>{const s=Array.isArray(e)?r:r[1];let a;switch(!0){case null==s:a=s;break;case"string"==typeof s:a=s.replace(API_VERSION_TOKEN_REGEX,"v"+REST_API_VERSION);break;case Array.isArray(s):case"object"==typeof s:a=processApiVersionInCompositeRequestData(s);break;default:a=s}return Array.isArray(e)?e.push(a):e[r[0]]=a,e},Array.isArray(e)?[]:{})};

/***/ }),

/***/ "./node_modules/@openfin/salesforce/proxy/proxy.types.js":
/*!***************************************************************!*\
  !*** ./node_modules/@openfin/salesforce/proxy/proxy.types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesforceCleanStatus": () => (/* binding */ SalesforceCleanStatus),
/* harmony export */   "SalesforceRecurrenceInstance": () => (/* binding */ SalesforceRecurrenceInstance),
/* harmony export */   "SalesforceRecurrenceRegeneratedType": () => (/* binding */ SalesforceRecurrenceRegeneratedType),
/* harmony export */   "SalesforceTaskSubtype": () => (/* binding */ SalesforceTaskSubtype)
/* harmony export */ });
var SalesforceCleanStatus,SalesforceRecurrenceInstance,SalesforceRecurrenceRegeneratedType,SalesforceTaskSubtype;!function(e){e.Matched="Matched",e.Different="Different",e.Acknowledged="Acknowledged",e.NotFound="NotFound",e.Inactive="Inactive",e.Pending="Pending",e.SelectMatch="SelectMatch",e.Skipped="Skipped"}(SalesforceCleanStatus=SalesforceCleanStatus||{}),function(e){e.First="First",e.Fourth="Fourth",e.Last="Last",e.Second="Second",e.Third="Third"}(SalesforceRecurrenceInstance=SalesforceRecurrenceInstance||{}),function(e){e.None="None",e.AfterDueDate="After due date",e.AfterTheTaskIsClosed="After the task is closed",e.TaskClosed="(Task closed)"}(SalesforceRecurrenceRegeneratedType=SalesforceRecurrenceRegeneratedType||{}),function(e){e.Task="Task",e.Email="Email",e.ListEmail="List Email",e.Cadence="Cadence",e.Call="Call"}(SalesforceTaskSubtype=SalesforceTaskSubtype||{});

/***/ }),

/***/ "./node_modules/@openfin/salesforce/search/search.js":
/*!***********************************************************!*\
  !*** ./node_modules/@openfin/salesforce/search/search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatSalesforceAddressFields": () => (/* binding */ concatSalesforceAddressFields),
/* harmony export */   "executeSearch": () => (/* binding */ executeSearch),
/* harmony export */   "executeSoslQuery": () => (/* binding */ executeSoslQuery),
/* harmony export */   "getFieldSpecsByObjectType": () => (/* binding */ getFieldSpecsByObjectType),
/* harmony export */   "processSearchResult": () => (/* binding */ processSearchResult)
/* harmony export */ });
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.types */ "./node_modules/@openfin/salesforce/core.types.js");
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/errors */ "./node_modules/@openfin/salesforce/errors/errors.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/logger */ "./node_modules/@openfin/salesforce/logger/logger.js");
/* harmony import */ var _objects_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/objects */ "./node_modules/@openfin/salesforce/objects/objects.js");
/* harmony import */ var _proxy_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proxy/proxy */ "./node_modules/@openfin/salesforce/proxy/proxy.js");
const ACCOUNT_FIELD_SPEC="Account(Id, Industry, Name, Phone, PhotoUrl, Type, Website, Ownership, TickerSymbol)",CONTACT_FIELD_SPEC="Contact(AccountId, Department, Email, Id, MailingCity, MailingCountry, MailingState, Name, OtherCity, OtherCountry, OtherState, Phone, PhotoUrl, Title)",DEFAULT_SEARCH_LIMIT=10,concatSalesforceAddressFields=(e,t,r)=>{const o=[];return e&&o.push(e),t&&o.push(t),r&&o.push(r),0===o.length?null:o.join(", ")},executeSearch=async(e,t,r)=>{const{emailAddress:o,limit:c,phoneNumber:a,objectType:s,text:n}=e;if(!(n||o||a))throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Search query invalid. Must have at least one of the properties: test, emailAddress or phoneNumber");if(e.objectType&&e.objectType.toLowerCase()!==_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account.toLowerCase()&&e.objectType.toLowerCase()!==_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact.toLowerCase())throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError("Search query invalid. Currently only searching accounts and contacts is supported");(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Executing search query",e);e=`FIND {${[n,o,a].filter(Boolean).join(" AND ")}} IN ${n||a?n||o?"ALL":"PHONE":"EMAIL"} FIELDS RETURNING ${getFieldSpecsByObjectType(s)} LIMIT `+(c||DEFAULT_SEARCH_LIMIT);const l=await executeSoslQuery(e,t,r);if(0===l.length)return (0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Query returned no results"),[];(0,_logger_logger__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Query returned ${l.length} result(s)`);e=[...new Set(l.filter(e=>e.attributes.type===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact).map(e=>e.AccountId))],r=await (0,_objects_objects__WEBPACK_IMPORTED_MODULE_3__.getBatchedObjectDataFromSalesforce)(e,_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account,t,r);return l.map(processSearchResult(r,t))},executeSoslQuery=async(e,t,r)=>{const o=/FIND\s*{(.+)}/gim.exec(e);if(null===o)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.ParameterError('Invalid SOSL query. Query must include a search string demarcated by curly brackets ("{...}")');var c=o[1].replace(/[?&|!()^~*:"'+{}\-[\]\\]/gm,"\\$&");e=e.replace(/{(.+)}/gm,`{${c}}`);try{return(await (0,_proxy_proxy__WEBPACK_IMPORTED_MODULE_4__.executeSalesforceRestApiRequest)(t,r,"/services/data/vXX.X/search/?q="+encodeURIComponent(e))).data.searchRecords}catch(e){throw e instanceof _errors_errors__WEBPACK_IMPORTED_MODULE_1__.RestApiError?e:new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.SearchError}},getFieldSpecsByObjectType=e=>{switch(e?.toLowerCase()){case _core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account.toLowerCase():return ACCOUNT_FIELD_SPEC;case _core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact.toLowerCase():return CONTACT_FIELD_SPEC;default:return ACCOUNT_FIELD_SPEC+", "+CONTACT_FIELD_SPEC}},processSearchResult=(f,b)=>t=>{var r=t["attributes"],o=(0,_objects_objects__WEBPACK_IMPORTED_MODULE_3__.getObjectUrl)(t.Id,b);if(r.type===_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Account){const{attributes:e,PhotoUrl:a,...s}=t;return{objectType:r.type,objectUrl:o,AbsolutePhotoUrl:a?""+b+a:null,...s}}if(r.type!==_core_types__WEBPACK_IMPORTED_MODULE_0__.SalesforceObjectType.Contact)throw new _errors_errors__WEBPACK_IMPORTED_MODULE_1__.SearchError("Unexpected object type");{const{attributes:n,AccountId:l,PhotoUrl:i,MailingCity:u,MailingState:p,MailingCountry:y,OtherCity:S,OtherState:d,OtherCountry:h,...C}=t;var c=f?.find(e=>e?.Id===l),t=i?""+b+i:null;let e=concatSalesforceAddressFields(u,p,y);return e=e||concatSalesforceAddressFields(S,d,h),!e&&c&&(e=concatSalesforceAddressFields(c.BillingCity,c.BillingState,c.BillingCountry)),!e&&c&&(e=concatSalesforceAddressFields(c.ShippingCity,c.ShippingState,c.ShippingCountry)),{objectType:r.type,objectUrl:o,AbsolutePhotoUrl:t,AccountName:c?.Name,Location:e,...C}}};

/***/ }),

/***/ "./node_modules/@openfin/salesforce/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/@openfin/salesforce/version.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_VERSION": () => (/* binding */ API_VERSION)
/* harmony export */ });
const API_VERSION="2.0.0";

/***/ }),

/***/ "./node_modules/@openfin/workspace-platform/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@openfin/workspace-platform/index.js ***!
  \***********************************************************/
/***/ ((module) => {

(()=>{var e={282:(e,t,n)=>{e=n.nmd(e);var r="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",i="[object Function]",s="[object Object]",c=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,d={};d["[object Float32Array]"]=d["[object Float64Array]"]=d["[object Int8Array]"]=d["[object Int16Array]"]=d["[object Int32Array]"]=d["[object Uint8Array]"]=d["[object Uint8ClampedArray]"]=d["[object Uint16Array]"]=d["[object Uint32Array]"]=!0,d[a]=d["[object Array]"]=d["[object ArrayBuffer]"]=d["[object Boolean]"]=d["[object DataView]"]=d["[object Date]"]=d["[object Error]"]=d[i]=d["[object Map]"]=d["[object Number]"]=d[s]=d["[object RegExp]"]=d["[object Set]"]=d["[object String]"]=d["[object WeakMap]"]=!1;var l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=l||p||Function("return this")(),g=t&&!t.nodeType&&t,h=g&&e&&!e.nodeType&&e,w=h&&h.exports===g,y=w&&l.process,v=function(){try{return h&&h.require&&h.require("util").types||y&&y.binding&&y.binding("util")}catch(e){}}(),m=v&&v.isTypedArray;function P(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var S,b,_,I=Array.prototype,A=Function.prototype,O=Object.prototype,W=f["__core-js_shared__"],R=A.toString,E=O.hasOwnProperty,C=(S=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",T=O.toString,k=R.call(Object),F=RegExp("^"+R.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=w?f.Buffer:void 0,U=f.Symbol,j=f.Uint8Array,$=(L&&L.allocUnsafe,b=Object.getPrototypeOf,_=Object,function(e){return b(_(e))}),B=Object.create,D=O.propertyIsEnumerable,M=I.splice,x=U?U.toStringTag:void 0,G=function(){try{var e=se(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),N=L?L.isBuffer:void 0,z=Math.max,V=Date.now,q=se(f,"Map"),H=se(Object,"create"),Y=function(){function e(){}return function(t){if(!me(t))return{};if(B)return B(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function K(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function J(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Z(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function X(e){var t=this.__data__=new J(e);this.size=t.size}function Q(e,t,n){(void 0!==n&&!pe(e[t],n)||void 0===n&&!(t in e))&&ne(e,t,n)}function ee(e,t,n){var r=e[t];E.call(e,t)&&pe(r,n)&&(void 0!==n||t in e)||ne(e,t,n)}function te(e,t){for(var n=e.length;n--;)if(pe(e[n][0],t))return n;return-1}function ne(e,t,n){"__proto__"==t&&G?G(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}K.prototype.clear=function(){this.__data__=H?H(null):{},this.size=0},K.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},K.prototype.get=function(e){var t=this.__data__;if(H){var n=t[e];return n===r?void 0:n}return E.call(t,e)?t[e]:void 0},K.prototype.has=function(e){var t=this.__data__;return H?void 0!==t[e]:E.call(t,e)},K.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=H&&void 0===t?r:t,this},J.prototype.clear=function(){this.__data__=[],this.size=0},J.prototype.delete=function(e){var t=this.__data__,n=te(t,e);return!(n<0||(n==t.length-1?t.pop():M.call(t,n,1),--this.size,0))},J.prototype.get=function(e){var t=this.__data__,n=te(t,e);return n<0?void 0:t[n][1]},J.prototype.has=function(e){return te(this.__data__,e)>-1},J.prototype.set=function(e,t){var n=this.__data__,r=te(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Z.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(q||J),string:new K}},Z.prototype.delete=function(e){var t=ie(this,e).delete(e);return this.size-=t?1:0,t},Z.prototype.get=function(e){return ie(this,e).get(e)},Z.prototype.has=function(e){return ie(this,e).has(e)},Z.prototype.set=function(e,t){var n=ie(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},X.prototype.clear=function(){this.__data__=new J,this.size=0},X.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},X.prototype.get=function(e){return this.__data__.get(e)},X.prototype.has=function(e){return this.__data__.has(e)},X.prototype.set=function(e,t){var n=this.__data__;if(n instanceof J){var r=n.__data__;if(!q||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Z(r)}return n.set(e,t),this.size=n.size,this};function re(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?function(e){var t=E.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var o=T.call(e);return r&&(t?e[x]=n:delete e[x]),o}(e):function(e){return T.call(e)}(e)}function oe(e){return Pe(e)&&re(e)==a}function ae(e,t,n,r,o){e!==t&&function(e,t,n){for(var r=-1,o=Object(e),a=n(e),i=a.length;i--;){var s=a[++r];if(!1===t(o[s],s,o))break}}(t,(function(a,i){if(o||(o=new X),me(a))!function(e,t,n,r,o,a,i){var c=de(e,n),u=de(t,n),d=i.get(u);if(d)Q(e,n,d);else{var l,p,f,g,h,w=a?a(c,u,n+"",e,t,i):void 0,y=void 0===w;if(y){var v=ge(u),m=!v&&we(u),P=!v&&!m&&Se(u);w=u,v||m||P?ge(c)?w=c:Pe(h=c)&&he(h)?w=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(c):m?(y=!1,w=function(e,t){return e.slice()}(u)):P?(y=!1,g=new(f=(l=u).buffer).constructor(f.byteLength),new j(g).set(new j(f)),p=g,w=new l.constructor(p,l.byteOffset,l.length)):w=[]:function(e){if(!Pe(e)||re(e)!=s)return!1;var t=$(e);if(null===t)return!0;var n=E.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&R.call(n)==k}(u)||fe(u)?(w=c,fe(c)?w=function(e){return function(e,t,n,r){var o=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var s=t[a],c=void 0;void 0===c&&(c=e[s]),o?ne(n,s,c):ee(n,s,c)}return n}(e,be(e))}(c):me(c)&&!ye(c)||(w=function(e){return"function"!=typeof e.constructor||ue(e)?{}:Y($(e))}(u))):y=!1}y&&(i.set(u,w),o(w,u,r,a,i),i.delete(u)),Q(e,n,w)}}(e,t,i,n,ae,r,o);else{var c=r?r(de(e,i),a,i+"",e,t,o):void 0;void 0===c&&(c=a),Q(e,i,c)}}),be)}function ie(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function se(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return function(e){return!(!me(e)||function(e){return!!C&&C in e}(e))&&(ye(e)?F:c).test(function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}(n)?n:void 0}function ce(e,t){var n=typeof e;return!!(t=null==t?o:t)&&("number"==n||"symbol"!=n&&u.test(e))&&e>-1&&e%1==0&&e<t}function ue(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||O)}function de(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var le=function(e){var t=0,n=0;return function(){var r=V(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(G?function(e,t){return G(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:Ae);function pe(e,t){return e===t||e!=e&&t!=t}var fe=oe(function(){return arguments}())?oe:function(e){return Pe(e)&&E.call(e,"callee")&&!D.call(e,"callee")},ge=Array.isArray;function he(e){return null!=e&&ve(e.length)&&!ye(e)}var we=N||function(){return!1};function ye(e){if(!me(e))return!1;var t=re(e);return t==i||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ve(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function me(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Pe(e){return null!=e&&"object"==typeof e}var Se=m?function(e){return function(t){return e(t)}}(m):function(e){return Pe(e)&&ve(e.length)&&!!d[re(e)]};function be(e){return he(e)?function(e,t){var n=ge(e),r=!n&&fe(e),o=!n&&!r&&we(e),a=!n&&!r&&!o&&Se(e),i=n||r||o||a,s=i?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],c=s.length;for(var u in e)!t&&!E.call(e,u)||i&&("length"==u||o&&("offset"==u||"parent"==u)||a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ce(u,c))||s.push(u);return s}(e,!0):function(e){if(!me(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=ue(e),n=[];for(var r in e)("constructor"!=r||!t&&E.call(e,r))&&n.push(r);return n}(e)}var _e,Ie=(_e=function(e,t,n,r){ae(e,t,n,r)},function(e,t){return le(function(e,t,n){return t=z(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,a=z(r.length-t,0),i=Array(a);++o<a;)i[o]=r[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=r[o];return s[t]=n(i),P(e,this,s)}}(e,t,Ae),e+"")}((function(e,t){var n=-1,r=t.length,o=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(o=_e.length>3&&"function"==typeof o?(r--,o):void 0,a&&function(e,t,n){if(!me(n))return!1;var r=typeof t;return!!("number"==r?he(n)&&ce(t,n.length):"string"==r&&t in n)&&pe(n[t],e)}(t[0],t[1],a)&&(o=r<3?void 0:o,r=1),e=Object(e);++n<r;){var i=t[n];i&&_e(e,i,n,o)}return e})));function Ae(e){return e}e.exports=Ie},485:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},a=void 0===r.replacement?"-":r.replacement,i=n.normalize().split("").reduce((function(t,n){return t+(o[n]||e[n]||(n===a?" ":n)).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return r.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),i=i.trim().replace(/\s+/g,a),r.lower&&(i=i.toLowerCase()),i}return n.extend=function(t){Object.assign(e,t)},n},e.exports=t(),e.exports.default=t()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r={};(()=>{"use strict";n.r(r),n.d(r,{AppManifestType:()=>vn,getCurrentSync:()=>Jn,init:()=>Yn,wrapSync:()=>Kn});var e={};n.r(e),n.d(e,{subscribe:()=>Ft});var t,o,a={};n.r(a),n.d(a,{create:()=>pn}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const i="undefined"!=typeof window&&"undefined"!=typeof fin,s=("undefined"==typeof process||null===(t=process.env)||void 0===t||t.JEST_WORKER_ID,"undefined"!=typeof window),c=s&&"undefined"!=typeof indexedDB,u=s?window.origin:o.Local,d=i&&fin.me.uuid,l=i&&fin.me.name,p=i&&fin.me.entityType,f="undefined"!=typeof ENV?ENV:o.Local,g=(o.Local,o.Dev,o.Staging,o.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:u+e),h=("undefined"!=typeof WORKSPACE_APPS_URL&&g(WORKSPACE_APPS_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_FOOTER_URL&&g(WORKSPACE_STOREFRONT_FOOTER_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_LANDING_PAGE_URL&&g(WORKSPACE_STOREFRONT_LANDING_PAGE_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_NAVIGATION_URL&&g(WORKSPACE_STOREFRONT_NAVIGATION_URL),"undefined"!=typeof WORKSPACE_SHARE_URL&&g(WORKSPACE_SHARE_URL),g("https://cdn.openfin.co/workspace/staging"),g("https://cdn.openfin.co/workspace/staging"));var w,y;(y=w||(w={})).LaunchApp="launchApp",y.SavePage="savePage",y.GetSavedPage="getSavedPage",y.CreateSavedPage="createSavedPage",y.UpdateSavedPage="updateSavedPage",y.DeleteSavedPage="deleteSavedPage",y.GetSavedPages="getSavedPages",y.CreateSavedPageInternal="createSavedPageInternal",y.UpdateSavedPageInternal="updateSavedPageInternal",y.DeleteSavedPageInternal="deleteSavedPageInternal",y.SharePage="sharePage",y.LaunchPage="launchPage",y.UpdatePageForWindow="updatePageForWindow",y.AttachPagesToWindow="attachPagesToWindow",y.DetachPagesFromWindow="detachPagesFromWindow",y.ReorderPagesForWindow="reorderPagesForWindow",y.SetActivePage="setActivePage",y.GetAllAttachedPages="getAllAttachedPages",y.GetActivePageIdForWindow="getActivePageIdForWindow",y.GetPagesForWindow="getPagesForWindow",y.GetPageForWindow="getPageForWindow",y.GetSavedPageMetadata="getSavedPageMetadata",y.GetUniquePageTitle="getUniquePageTitle",y.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",y.GetThemes="getThemes";const v=async e=>{const t=fin.Platform.wrapSync(e),n=await t.getClient(),r="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";try{if(!0===await n.dispatch("isWorkspacePlatform"))return n;throw new Error(r)}catch(e){throw new Error(r)}},m=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),getPages:async()=>(await v(e)).dispatch(w.GetPagesForWindow,e),getPage:async t=>(await v(e)).dispatch(w.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>{const n=await v(e);(null==t?void 0:t.title)||(t.title=await n.dispatch(w.GetUniquePageTitle,void 0));const r=(await n.dispatch(w.GetAllAttachedPages,void 0)).find((e=>e.pageId===t.pageId||e.title===t.title));if(r)throw r.pageId===t.pageId?new Error(`page with id ${t.pageId} is already attached to a browser window ${r.parentIdentity.name}`):new Error(`page with title ${t.title} is already attached to a browser window ${r.parentIdentity.name}`);const o={identity:e,pages:[t]};return n.dispatch(w.AttachPagesToWindow,o)},removePage:async t=>(await v(e)).dispatch(w.DetachPagesFromWindow,{identity:e,pageIds:[t]}),setActivePage:async t=>(await v(e)).dispatch(w.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const n=await v(e);return t.identity=e,n.dispatch(w.UpdatePageForWindow,t)},reorderPages:async t=>{const n=await v(e);return t.identity=e,n.dispatch(w.ReorderPagesForWindow,t)}}),P=e=>{const t=fin.Platform.wrapSync(e),n=async()=>(await t.getClient()).dispatch(w.GetAllAttachedPages,void 0);return{wrapSync:e=>m(e),createWindow:async e=>{const n=await t.createWindow(e);return m(n.identity)},getAllAttachedPages:n,getAllWindows:async()=>(await fin.Application.wrapSync(e).getChildWindows()).filter((e=>e.identity.name.includes("internal-generated-window-"))).map((e=>m(e.identity))),launchPage:async e=>{const r=await t.getClient();await r.dispatch(w.LaunchPage,{page:e,attachToExistingWindow:!0});const o=(await n()).find((t=>t.pageId===e.pageId));return m(o.parentIdentity)},getUniquePageTitle:async t=>(await v(e)).dispatch(w.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await v(e)).dispatch(w.GetLastFocusedBrowserWindow,void 0)}},S=e=>({createPage:async t=>(await v(e)).dispatch(w.CreateSavedPageInternal,t),deletePage:async t=>(await v(e)).dispatch(w.DeleteSavedPageInternal,t),updatePage:async t=>(await v(e)).dispatch(w.UpdateSavedPageInternal,t),getPage:async t=>(await v(e)).dispatch(w.GetSavedPage,t),getPages:async t=>(await v(e)).dispatch(w.GetSavedPages,t),savePage:async t=>(await v(e)).dispatch(w.SavePage,t)}),b=e=>({getThemes:async()=>(await v(e)).dispatch(w.GetThemes,void 0)});let _=[];const I=()=>_;var A,O,W;!function(e){e.Workspace="openfin-browser"}(A||(A={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(O||(O={})),function(e){e.FinProtocol="fin-protocol"}(W||(W={}));const R={uuid:d,name:d},E=(A.Workspace,A.Workspace,e=>{if(!i)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)});var C,T,k;function F(e){if(!i)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(C||(C={})),(k=T||(T={})).Shown="shown",k.BoundsChanged="bounds-changed",k.LayoutReady="layout-ready",k.EndUserBoundsChanging="end-user-bounds-changing",k.Blurred="blurred",k.CloseRequested="close-requested",k.Focused="focused",k.ShowRequested="show-requested",k.ViewCrashed="view-crashed",k.ViewAttached="view-attached",k.ViewDetached="view-detached",k.ViewPageTitleUpdated="view-page-title-updated",k.ViewDestroyed="view-destroyed";const L={name:l,uuid:d};function U(){return F(L)}C.Home,A.Workspace,C.Dock,A.Workspace,C.Storefront,A.Workspace,A.Workspace,A.Workspace;const j=e=>e.startsWith(C.BrowserWindow);async function $(){return(await fin.Application.getCurrentSync().getChildWindows()).filter((e=>j(e.identity.name)))}var B,D;(D=B||(B={})).LastLaunchedWorkspaceId="activeWorkspaceId",D.LastFocusedBrowserWindow="lastFocusedBrowserWindow",D.MachineName="machineName",D.NewTabPageLayout="NewTabPageLayout",D.NewTabPageSort="NewTabPageSort";const M=B,x={trace:!0,debug:"undefined"!=typeof LOG_DEBUG&&LOG_DEBUG,info:!1,warn:!0,error:!0,fatal:!0};function G(e,t){const n=void 0===t?x:{...x,...t},r=e?`${e} : `:"";return{trace:n.trace?(e,...t)=>{console.trace(`%c${r}${e}`,"color:#7795f7",...t)}:(e,...t)=>{},debug:n.debug?(e,...t)=>{console.info(`%c${r}${e}`,"color:#86db94",...t)}:(e,...t)=>{},info:n.info?(e,...t)=>{console.debug(`%c${r}${e}`,"color:#ffffff",...t)}:(e,...t)=>{},warn:n.warn?(e,...t)=>{console.warn(`%c${r}${e}`,"color:#edad68",...t)}:(e,...t)=>{},error:n.error?(e,t,...n)=>{console.error(`%c${r}${e}`,"color:#f55d67",...n,t)}:(e,t,...n)=>{},fatal:n.fatal?(e,t,...n)=>{console.error(`%c${r}${e}`,"color:#f70723",...n,t)}:(e,t,...n)=>{}}}const N=G("api.platform-window-focus");async function z(){if("undefined"!=typeof localStorage)try{const e=localStorage.getItem(M.LastFocusedBrowserWindow),t=JSON.parse(e);if(await(e=>F(e).getOptions().then((()=>!0)).catch((()=>!1)))(t))return t}catch(e){N.error("failed to get last focused browser window: ",e)}}function V(e=fin.me.identity){j(e.name)&&function(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);localStorage.setItem(M.LastFocusedBrowserWindow,t)}catch(e){N.error("failed to save last focused browser window: ",e)}}(e)}var q;G("utils.layout"),function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(q||(q={}));const H=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const n=H(e.content);t.push(...n)})),t};new Map;const Y=G("utils.channels"),K=s&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function J(e){let t;return()=>{if(!i)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(Y.debug(`connecting to channel provider ${e}`),t=(async()=>{await K;const n=await fin.InterApplicationBus.Channel.connect(e);return n.onDisconnection((async()=>{Y.warn(`disconnected from channel provider ${e}`),t=void 0})),n})().then((t=>(Y.debug(`connected to channel provider ${e}`),t))).catch((t=>{Y.error(`failed to connect to channel provider ${e}`,t)}))),t}}var Z,X;!function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(Z||(Z={})),function(e){e.AttachedPagesToWindow="attached-pages-to-window",e.DetachedPagesFromWindow="detached-pages-from-window"}(X||(X={}));const Q=new Map,ee=e=>{const t=(e=>`__running_pages__-${e.uuid}-${e.name}`)(e);return Q.has(t)||Q.set(t,J(t)),Q.get(t)()},te=(new Map,async e=>{const t=await ee(e);return await t.dispatch(Z.GetPages)}),ne=async e=>(await ee(e.identity)).dispatch(Z.UpdatePageForWindow,e),re=async()=>{const e=await $();return(await Promise.all(e.map((async({identity:e})=>te(e))))).reduce(((e,t)=>e.concat(t)),[])},oe=async()=>(await v(L)).dispatch(w.GetSavedPages,void 0),ae=async e=>(await v(L)).dispatch(w.GetSavedPage,e),ie=async(e,t)=>{const n=await(async e=>(await re()).find((t=>t.pageId===e)))(e);return!n||n.title===t.title&&e===t.pageId||await ne({identity:n.parentIdentity,pageId:e,page:{pageId:t.pageId,title:t.title}}),n},se=async({page:e})=>{await ie(e.pageId,e),await(async e=>(await v(L)).dispatch(w.CreateSavedPage,e))({page:e})},ce=async e=>{await ae(e)&&await(async e=>(await v(L)).dispatch(w.DeleteSavedPage,e))(e)},ue=async({pageId:e,page:t})=>(await ie(e,t),await(async e=>(await v(L)).dispatch(w.UpdateSavedPage,e))({pageId:e,page:t})),de=async e=>await ae(e.pageId)?ue({pageId:e.pageId,page:e}):se({page:e}),le=async e=>{await(async e=>(await ee(e.identity)).dispatch(Z.AttachPagesToWindow,e))(e)},pe=async e=>{await ne(e)},fe=async e=>{await(async e=>(await ee(e.identity)).dispatch(Z.DetachPagesFromWindow,e))(e)},ge=async e=>{await(async e=>(await ee(e.identity)).dispatch(Z.SetActivePageForWindow,e))(e)},he=e=>te(e),we=async({identity:e,pageId:t})=>(await he(e)).find((e=>e.pageId===t)),ye=async e=>{await(async e=>(await ee(e.identity)).dispatch(Z.ReorderPagesForWindow,e))(e)},ve=(e,t)=>!t.find((t=>t===e)),me=(e,t)=>`${e} (${t})`;async function Pe(e="Untitled Page"){const[t,n]=await Promise.all([oe(),re()]),r=[...t,...n].map((({title:e})=>e));if(!r.find((t=>t===e)))return e;let o=1;const a=e.replace(/ \(.+\)$/,"");for(;!ve(me(a,o),r);)o+=1;return me(a,o)}const Se=G("api.cleanup"),be=new Map,_e=e=>`${e.uuid}-${e.name}`,Ie=((e,t=0)=>{let n,r,o=!1;const a=async r=>{const i=await e(...r);if(o){await new Promise((e=>setTimeout(e,t)));const e=n;return n=void 0,o=!1,a(e)}return i};return(...e)=>(r?(o=!0,n=e):r=a(e).then((e=>(r=void 0,e))),r)})((async function(){Se.debug("scheduling views to cleanup");const e=await re(),t=new Set;e.forEach((e=>{H(e.layout.content).forEach((e=>{if(e.name){const n=_e(e);t.add(n),Se.debug(`preserving view with id ${n}`)}}))}));const n=U();(await n.getCurrentViews()).forEach((({identity:e})=>{const n=_e(e);if(t.has(n)||be.has(n))return;const r=setTimeout((()=>{Se.debug(`destroying view with id ${n}`),fin.View.wrapSync(e).destroy(),be.delete(n)}),5e3);Se.debug(`scheduled cleanup of view with id ${n}`),be.set(n,r)})),be.forEach(((e,n)=>{t.has(n)&&(clearTimeout(e),be.delete(n),Se.debug(`cancelled scheduled cleanup of view with id ${n}`))}))}),2500),Ae=({name:e})=>{j(e)&&Ie()};function Oe(){return localStorage.getItem(M.MachineName)}let We,Re;async function Ee(){return We||(We=await fin.System.getMachineId()),We}async function Ce(e){var t;const n=e||await fin.Platform.getCurrentSync().getSnapshot();if(null===(t=n.snapshotDetails)||void 0===t?void 0:t.machineId)return n;const r=Oe();return{...n,snapshotDetails:{...e.snapshotDetails,machineId:await Ee(),machineName:r}}}function Te(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function ke(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const r=Te(n);return(e,n)=>r.then((r=>n(r.transaction(t,e).objectStore(t))))}function Fe(){return Re||(Re=ke("keyval-store","keyval")),Re}n(485);const Le=c&&ke("openfin-home-pages","pages");async function Ue(e){const t=await function(e,t=Fe()){return t("readonly",(t=>Te(t.get(e))))}(e,Le);return t?(t.pageId=e.toString(),t.title=t.title||t.pageId,t):null}async function je(e){const t=await function(e=Fe()){const t=[];return function(e,t){return e("readonly",(e=>(e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Te(e.transaction))))}(e,(e=>t.push(e.key))).then((()=>t))}(Le),n=await Promise.all(t.map((e=>Ue(e.toString()))));return e?n.filter((t=>((e,t="")=>e.toLowerCase().includes(t.toLowerCase()))(t.title,e))):n}async function $e({page:e}){await function(e,t,n=Fe()){return n("readwrite",(n=>(n.put(t,e),Te(n.transaction))))}(e.pageId,e,Le)}async function Be(e){await function(e,t=Fe()){return t("readwrite",(t=>(t.delete(e),Te(t.transaction))))}(e,Le)}async function De({pageId:e,page:t}){if(void 0===await Ue(e))throw new Error("page not found");await $e({page:t}),e!==t.pageId&&await Be(e)}var Me;!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(Me||(Me={}));const xe="0",Ge="5",Ne="6",ze=()=>{};function Ve(e,t){return e?`${e}-${t}`:t}function qe(e){return`__search-${e}-topic__`}const He=new Map;function Ye(e,t){He.has(e)||He.set(e,new Set),He.get(e).add(t)}function Ke(e,t){const n=He.get(e);n&&n.delete(t)}const Je=new Map;function Ze(e,t){Je.has(e)||Je.set(e,new Set),Je.get(e).add(t)}function Xe(e,t){const n=Je.get(e);n&&n.delete(t)}const Qe=new Map;function et(e,t){Qe.has(e)||Qe.set(e,new Map),Qe.get(e).set(t.id,t);const n=He.get(e);n&&n.forEach((e=>e()))}function tt(e,t){const n=Qe.get(e);if(!n)return;n.delete(t);const r=Je.get(e);r&&r.forEach((e=>e()))}function nt(e){return Qe.get(e)?[...Qe.get(e).values()]:[]}function rt(e){const t=Qe.get(e);t&&t.clear()}function ot(e,t){const n=Qe.get(e);return n?n.get(t):null}function at(e,t,n){return{...e,action:n||e.actions[0],dispatcherIdentity:t}}function it(e,t,n="ascending"){const r=e||[];if(!(null==t?void 0:t.length))return r;const o=[],a=new Map;t.forEach((e=>{if(e.key)return a.set(e.key,e);o.push(e)}));let i=r.map((e=>{const{key:t}=e;if(t&&a.has(t)){const e=a.get(t);return a.delete(t),e}return e}));return i.push(...a.values(),...o),i="ascending"===n?i.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):i.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),i}function st(e){const t={};let n=[],r=[],o=Me.Initial;t.getStatus=()=>o,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,(null==n?void 0:n.length)&&t.onChange()},t.getRevokedBuffer=()=>r,t.setRevokedBuffer=e=>{r=e,(null==r?void 0:r.length)&&t.onChange()},t.onChange=ze;const a={};return t.res=a,a.close=()=>{o!==Me.Close&&(o=Me.Close,t.onChange())},a.open=()=>{o!==Me.Open&&(o=Me.Open,t.onChange())},a.respond=n=>{const r=it(t.getResultBuffer(),n,e);t.setResultBuffer(r)},a.revoke=(...e)=>{const n=new Set(e),r=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(r),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function ct(e,t,n){const r=new Set;let o=!1;return{close:()=>{o=!0;for(const e of r)e()},req:{id:t,topic:e,...n,context:(null==n?void 0:n.context)||{},onClose:e=>{r.add(e),o&&e()},removeListener:e=>{r.delete(e)}}}}function ut(){return{name:fin.me.name,uuid:fin.me.uuid}}function dt(){let e;try{const t=fin.Platform.getCurrentSync();if(!(null==t?void 0:t.identity))return;e=t.identity.uuid}catch(e){}return e}const lt="deregistered or does not exist",pt=new Error(`provider ${lt}`),ft=new Error("provider with name already exists"),gt=new Error("bad payload"),ht=new Error("subscription rejected"),wt=new Error(`channel ${lt}`),yt=new Map;function vt(e){const t=mt(e);if(t)return t;throw wt}function mt(e){const t=yt.get(e);if(t)return t}function Pt(e,t){yt.set(e,t)}function St(e){console.error("OpenFin Search API: ",e)}const bt=new Map;function _t(e){bt.has(e)||bt.set(e,new Map);const t=bt.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function It(e,t){return(await vt(e)).dispatch(xe,t)}function At({namespacedTopic:e,topic:t}){const n=ot.bind(null,e),r=_t(e),o=It.bind(null,e);return async(e,a)=>{if(!e||!e.id||!e.providerId){const e=gt;return St(e),{error:e.message}}const{id:i,providerId:s}=e,c=n(s);if(!c){const e=pt;return St(e),{error:e.message}}const u=r.getRequestsForIdentity(a);let d=u.get(e.id);d||(d=ct(t,i,e),u.set(e.id,d));const l=st(),p=()=>{const e=l.getResultBuffer();l.setResultBuffer([]);const t=l.getRevokedBuffer();l.setRevokedBuffer([]);const n=l.getStatus();o({id:i,providerId:s,results:e,revoked:t,status:n})};let f=!0,g=!1;l.onChange=()=>{if(f)return f=!1,void p();g||(g=!0,setTimeout((()=>{g=!1,p()}),100))};try{const{results:e,context:t}=await c.onUserInput(d.req,l.res),n=l.getStatus();return{id:i,providerId:s,status:n,results:e,context:t}}catch(e){return St(e),{id:i,providerId:s,error:e.message}}}}async function Ot(e,t,n){const r=n||await vt(e),o=ut(),a={identity:o,...t,onUserInput:void 0,onResultDispatch:void 0};await r.dispatch("2",a),et(e,{identity:o,...t})}async function Wt(e,t){const n=await vt(e);return await n.dispatch("3",t),tt(e,t)}async function Rt(e,t,n,r){const o=at(n,ut(),r),a=ot(e,t);if(a){const{onResultDispatch:e}=a;if(!e)return;return e(o)}const i={providerId:t,result:o};return(await vt(e)).dispatch(Ge,i)}async function Et(e,t){const n={...t,context:(null==t?void 0:t.context)||{}},r={},o=async function*(e,t,{setState:n}){const r=await vt(e);for(;;){const e=await r.dispatch("1",t),o=e.error;if(o)throw new Error(o);const a=e;if(t.id=a.id,n(a.state),a.done)return a.value;yield a.value}}(e,n,{setState:e=>{r.state=e}});let a=await o.next();return r.id=n.id,r.close=()=>{!async function(e,t){(await vt(e)).dispatch(Ne,{id:t})}(e,r.id)},r.next=()=>{if(a){const e=a;return a=void 0,e}return o.next()},r}async function Ct(e){return(await vt(e)).dispatch("4",null)}async function Tt(e){const t=await vt(e);var n;n=e,yt.delete(n),rt(e),await t.disconnect()}async function kt(e){const{namespacedTopic:t}=e,n=qe(t),r=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return r.register(xe,At(e)),r.register(Ne,function(e){const t=_t(e);return(e,n)=>{const r=t.getRequestsForIdentity(n),o=r.get(e.id);o&&(o.close(),r.delete(e.id))}}(t)),r.register(Ge,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return void St(gt);const r=ot(e,t.providerId);if(!r)return void St(pt);const{onResultDispatch:o}=r;return o?(t.result.dispatcherIdentity=n,o(t.result)):void 0}}(t)),r.onDisconnection(function(e){const{namespacedTopic:t}=e,n=_t(t);return async r=>{if(!mt(t))return;const o=n.getRequestsForIdentity(r);for(const{req:e,close:t}of o.values())t(),o.delete(e.id);Pt(t,(async e=>{const{namespacedTopic:t}=e,n=await kt(e);for(const e of nt(t))await Ot(t,e,n);return n})(e))}}(e)),r}async function Ft(e){const t=("string"==typeof e?e:null==e?void 0:e.topic)||"all",n=("string"==typeof e?null:null==e?void 0:e.uuid)||dt(),r=Ve(n,t),o={topic:t,namespace:n,namespacedTopic:r};let a=mt(r);return a||(a=kt(o),Pt(r,a),await a),{getAllProviders:Ct.bind(null,r),register:Ot.bind(null,r),search:Et.bind(null,r),deregister:Wt.bind(null,r),dispatch:Rt.bind(null,r),disconnect:Tt.bind(null,r)}}const Lt=new Map;function Ut(e){const t=jt(e);if(t)return t;throw wt}function jt(e){const t=Lt.get(e);if(t)return t}const $t=new Map;function Bt(e,t){$t.has(e)||$t.set(e,new Set),$t.get(e).add(t)}function Dt(e,t){const n=$t.get(e);n&&n.delete(t)}var Mt,xt;function Gt(e){return[...nt(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}function Nt(e,t){if(ot(e,t.id))throw new Error("provider with name already exists");et(e,{identity:ut(),...t})}function zt(e,t){tt(e,t)}async function Vt(e,t,n,r){const o=ot(e,t);if(!o)throw pt;const{onResultDispatch:a}=o;if(a)return a(at(n,ut(),r))}!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(Mt||(Mt={})),function(e){e.Active="active",e.Default="default"}(xt||(xt={}));let qt=0;function Ht({namespacedTopic:e,topic:t},n){qt+=1;const r=ct(t,qt.toString(),n);let o;return o=async function*(e,t,n){const r=function(e,t){const n=[],r=[],o=[],a=[];for(const i of e){const e=st(i.scoreOrder),s={results:[],provider:{id:i.id,identity:i.identity,title:i.title,scoreOrder:i.scoreOrder,icon:i.icon}};n.push(s),r.push(e);const c=(async()=>{try{const{results:n,context:r}=await i.onUserInput(t,e.res);s.results=it(s.results,n),s.context={...s.context,...r}}catch(e){s.error=e}c.done=!0})();a.push(c),o.push(o.length)}return{providerResponses:n,listenerResponses:r,openListenerResponses:o,initialResponsePromises:a}}(t.targets?t.targets.map((t=>ot(e,t))).filter((e=>!!e)):[...nt(e).filter((e=>!e.hidden))],t),{providerResponses:o,listenerResponses:a}=r;let{openListenerResponses:i,initialResponsePromises:s}=r,c=Mt.Fetching;const u=e=>{c=e,n.setState(c)};let d,l=!1;t.onClose((()=>{l=!0,d&&d()}));do{let e=!1;if(s.length){const t=[];for(const n of s)n.done?e=!0:t.push(n);s=t,s.length||(u(Mt.Fetched),e=!0)}let t,n=!1;const r=()=>{n=!0,t&&t()},p=[];for(const t of i){const n=a[t],i=o[t],s=n.getStatus();(s===Me.Open||c===Mt.Fetching&&s===Me.Initial)&&(p.push(t),n.onChange=r);const u=n.getResultBuffer();u.length&&(n.setResultBuffer([]),i.results=it(i.results,u),e=!0);const d=n.getRevokedBuffer();if(d.length){n.setRevokedBuffer([]);const t=new Set(d);i.results=i.results.filter((({key:e})=>!t.has(e))),e=!0}}if(i=p,e&&(yield o),l)break;n||(i.length||s.length)&&await Promise.race([...s,new Promise((e=>{t=e})),new Promise((e=>{d=e}))])}while(i.length||s.length);return u(Mt.Complete),o}(e,r.req,{setState:e=>{o.state=e}}),o.id=qt.toString(),o.close=r.close,o.state=Mt.Fetching,o}const Yt=new Map;function Kt(e,t){return`${e}:${t}`}function Jt(e,t,n){return Ut(e).dispatch(t,Ne,{id:n})}async function Zt(e,t,{id:n,query:r,context:o,targets:a}){const i=Ut(e),s={id:n,query:r,context:o,targets:a,providerId:t.id},c=await i.dispatch(t.identity,xe,s),u=c.error;if(u)throw new Error(u);return c}const Xt=new Map;function Qt(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const en=new Map;function tn(e,t,n){return`${e}:${t}:${n}`}function nn(e,t){const n=Qt.bind(null,e,t.identity),r=Jt.bind(null,e,t.identity),o=Zt.bind(null,e,t);return async(a,i)=>{const s=n(a.id);if(!Xt.has(s)){const e=()=>{r(a.id),Xt.delete(s)};Xt.set(s,e),a.onClose(e)}const c=tn(e,t.id,a.id),u=()=>{en.delete(c),i.close()};a.onClose(u),en.set(c,(e=>{var t,n;(null===(t=e.results)||void 0===t?void 0:t.length)&&i.respond(e.results),(null===(n=e.revoked)||void 0===n?void 0:n.length)&&i.revoke(...e.revoked),e.status===Me.Open&&i.open(),e.status===Me.Close&&u()}));const d=await o(a);return d.status===Me.Open&&i.open(),d.status!==Me.Close&&d.status!==Me.Initial||u(),d}}function rn(e,t){return async n=>{const r=Ut(e),o={providerId:t.id,result:n};return r.dispatch(t.identity,Ge,o)}}const on=new Map;function an(e,t){return`${e}-${t.name}-${t.uuid}`}const sn=new Map;function cn(e,t){sn.has(e)||sn.set(e,new Set),sn.get(e).add(t)}function un(e,t){const n=sn.get(e);n&&n.delete(t)}async function dn(e){const{namespacedTopic:t}=e,n=qe(e.namespacedTopic),r=await(o=n,fin.InterApplicationBus.Channel.create(o));var o;return r.onConnection(function({namespacedTopic:e}){return async t=>{const n=$t.get(e);if(n)for(const e of n)if(!await e(t))throw ht}}(e)),r.onDisconnection(function(e){return async t=>{!function(e,t){const n=an(e,t),r=on.get(n);if(r){for(const t of r)tt(e,t);on.delete(n)}}(e,t);const n=sn.get(e);n&&n.forEach((e=>e(t)))}}(t)),r.register(Ne,function(e){return t=>function(e,t){const n=Kt(e,t),r=Yt.get(n);r&&r.generator.close()}(e,t.id)}(t)),r.register(xe,function(e){return t=>{const n=tn(e,t.providerId,t.id),r=en.get(n);r&&r(t)}}(t)),r.register("2",function(e){return(t,n)=>{if(!t||!t.id)return St(new Error(JSON.stringify(t))),void St(gt);if(ot(e,t.id))throw ft;t.identity=n,function(e,t){const n=an(e,t.identity);on.has(n)||on.set(n,[]),on.get(n).push(t.id),et(e,{...t,onUserInput:nn(e,t),onResultDispatch:rn(e,t)})}(e,t)}}(t)),r.register("3",function(e){return t=>{t?function(e,t){const n=ot(e,t);if(!n)return;const r=an(e,n.identity),o=on.get(r);if(o){const n=o.findIndex((e=>e===t));-1!==n&&(o.splice(n,1),tt(e,t))}}(e,t):St(gt)}}(t)),r.register("4",function(e){return async()=>Gt(e)}(t)),r.register("1",function(e){return async(t,...n)=>{if(!t)return St(gt),{error:gt.message};let r;if(t.id)r=Kt(e.namespacedTopic,t.id);else{const n=Ht(e,t);r=Kt(e.namespacedTopic,n.id),t.id=n.id,Yt.set(r,{generator:n})}const o=Yt.get(r);clearTimeout(o.timeout);const a=await o.generator.next();return o.timeout=function(e){return window.setTimeout((()=>{Yt.delete(e)}),1e4)}(r),{...a,id:t.id,state:o.generator.state}}}(e)),r.register(Ge,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return void St(gt);const r=ot(e,t.providerId);if(!r)throw pt;const{onResultDispatch:o}=r;return o?(t.result.dispatcherIdentity=n,o(t.result)):void 0}}(t)),r}async function ln(e){const t=Ut(e);var n;n=e,Lt.delete(n),await t.destroy(),rt(e)}async function pn(e){const t=("string"==typeof e?e:null==e?void 0:e.topic)||"all",n=dt(),r=Ve(n,t),o={topic:t,namespace:n,namespacedTopic:r};let a=jt(r);a||(a=await dn(o),function(e,t){Lt.set(e,t)}(r,a));const i=Dt.bind(null,r),s=un.bind(null,r),c=Ke.bind(null,r),u=Xe.bind(null,r);return{getAllProviders:Gt.bind(null,r),search:Ht.bind(null,o),register:Nt.bind(null,r),deregister:zt.bind(null,r),onSubscription:Bt.bind(null,r),onDisconnect:cn.bind(null,r),onRegister:Ye.bind(null,r),onDeregister:Ze.bind(null,r),dispatch:Vt.bind(null,o),disconnect:ln.bind(null,r),removeListener:e=>{i(e),s(e),c(e),u(e)}}}const{create:fn}=a,{subscribe:gn}=e,hn={create:fn,subscribe:gn,defaultTopic:"all"},wn=()=>{const e=window;e.search=hn,e.fin&&(e.fin.Search=hn)},yn=e=>{const t=()=>{wn(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){wn();const e="load",t=yn(e);window.addEventListener(e,t);const n="DOMContentLoaded",r=yn(n);window.addEventListener(n,r)}var vn,mn,Pn,Sn,bn,_n;async function In({app:e,target:t}){const n=fin.Platform.getCurrentSync();switch(e.manifestType){case vn.Snapshot:return n.applySnapshot(e.manifest);case vn.View:return async function(e,t){const n=fin.Platform.getCurrentSync();if("view"===t.entityType){const n=fin.View.wrapSync(t),r=await n.getParentLayout();return await r.replaceView(t,{manifestUrl:e.manifest,url:void 0,target:void 0}),n.destroy()}return n.createView({name:void 0,url:void 0,manifestUrl:e.manifest,target:void 0})}(e,t);case vn.External:return fin.System.launchExternalProcess({path:e.manifest,uuid:e.appId});default:return fin.Application.startFromManifest(e.manifest)}}!function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(vn||(vn={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(mn||(mn={})),function(e){e.Suggestion="suggestion"}(Pn||(Pn={})),function(e){e.Contact="Contact",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText"}(Sn||(Sn={})),function(e){e.MultiSelect="MultiSelect"}(bn||(bn={}));var An=new Uint8Array(16);function On(){if(!_n&&!(_n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _n(An)}const Wn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Rn=function(e){return"string"==typeof e&&Wn.test(e)};for(var En=[],Cn=0;Cn<256;++Cn)En.push((Cn+256).toString(16).substr(1));const Tn=function(e,t,n){var r=(e=e||{}).random||(e.rng||On)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(En[e[t+0]]+En[e[t+1]]+En[e[t+2]]+En[e[t+3]]+"-"+En[e[t+4]]+En[e[t+5]]+"-"+En[e[t+6]]+En[e[t+7]]+"-"+En[e[t+8]]+En[e[t+9]]+"-"+En[e[t+10]]+En[e[t+11]]+En[e[t+12]]+En[e[t+13]]+En[e[t+14]]+En[e[t+15]]).toLowerCase();if(!Rn(n))throw TypeError("Stringified UUID is invalid");return n}(r)};var kn;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces"}(kn||(kn={})),J("__of_workspace_protocol__");var Fn,Ln,Un=n(282),jn=n.n(Un);!function(e){e.HomeIndex="/home/",e.HomeSearch="/home/search/",e.HomePagesRename="/home/pages/rename/",e.Dock="/home/dock/",e.BrowserPagesLanding="/browser/pages/landing/",e.HomeIndicator="/home/indicator/",e.Browser="/browser/",e.BrowserPopupMenu="/browser/popup-menu/",e.Provider="/provider/",e.BrowserPopupMenuSharePage="/browser/popup-menu/share-page/",e.BrowserPopupMenuSavePage="/browser/popup-menu/save-page/",e.BrowserPopupMenuLayouts="/browser/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/browser/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/browser/indicator/",e.ResponseModal="/browser/popup-menu/response-modal/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/"}(Fn||(Fn={})),function(e){e.IconOpenFinLogo="/icons/openfinlogo.svg",e.IconFilter="/icons/filter.svg"}(Ln||(Ln={}));const $n=h+{...Ln,...Fn}.Browser,Bn=(e,t)=>{if(Array.isArray(t))return t};function Dn(e,t){const n=jn()({},t,e,Bn);return n.detachOnClose=!0,n}const Mn=e=>{var t,n;const r=e.name===C.Home,o=null===(t=e.name)||void 0===t?void 0:t.startsWith(C.HomeInternal),a=null===(n=e.name)||void 0===n?void 0:n.startsWith(C.BrowserMenu);return!r&&!o&&!a},xn=e=>"workspacePlatform"in e?e:(({workstacks:e,pages:t,...n})=>({...n,workspacePlatform:{pages:t||e||null}}))(e),Gn={contextMenuSettings:{reload:!1},url:$n,contextMenu:!0,waitForPageLoad:!0,cornerRounding:{height:8,width:8},closeOnLastViewRemoved:!1,experimental:{showFavicons:!0,defaultFaviconUrl:`${h}/icons/defaultFavicon.svg`},permissions:{System:{openUrlWithBrowser:{enabled:!0,protocols:["mailto"]}}}},Nn={dimensions:{borderWidth:3,headerHeight:30}},zn=e=>{const t=fin.Window.wrapSync(e);return Promise.all([t.bringToFront(),t.restore(),t.focus()])};const Vn=e=>async t=>{class n extends t{constructor(){super(...arguments),this.isWorkspacePlatform=()=>!0,this.getSavedPage=Ue,this.getSavedPages=je,this.createSavedPage=$e,this.deleteSavedPage=Be,this.updateSavedPage=De,this.attachPagesToWindow=le,this.addPage=le,this.detachPagesFromWindow=fe,this.getAllAttachedPages=re,this.getPagesForWindow=he,this.getPageForWindow=we,this.setActivePage=ge,this.launchApp=In,this.savePage=de,this.createSavedPageInternal=se,this.updateSavedPageInternal=ue,this.deleteSavedPageInternal=ce,this.reorderPagesForWindow=ye,this.getUniquePageTitle=Pe,this.updatePageForWindow=pe,this.getLastFocusedBrowserWindow=z,this.getThemes=I}async getSnapshot(){const e=await async function(e){const t=await $();return await Promise.all(t.map((({identity:e})=>(async e=>(await ee(e)).dispatch(Z.UpdatePagesWindowOptions))(e)))),e?e():Ce()}((async()=>Ce(await super.getSnapshot(void 0,fin.me.identity))));return{...e,windows:e.windows.filter(Mn)}}async applySnapshot({snapshot:e,options:t}){(null==t?void 0:t.closeExistingWindows)&&await async function(){const e=await $();await Promise.all(e.map((e=>e.close(!0).catch((()=>{})))))}();let n=e;return"string"==typeof n&&(n=await super.fetchManifest({manifestUrl:n},fin.me.identity)),async function(e,t){var n;const r=await re(),o=(null===(n=e.snapshotDetails)||void 0===n?void 0:n.monitorInfo)||await fin.System.getMonitorInfo(),a=(e.windows||[]).filter((({layout:e})=>!!e)),i=new Map;r.forEach((e=>i.set(e.pageId,e)));const s=[],c=a.map((async e=>{var t;const n=xn(e),r=[],o=(e=>{let t=!1;const n=(e||[]).map((e=>{const n={pageId:(r=e).pageId||r.id,title:r.title||r.name,isReadOnly:r.isReadOnly,layout:r.layout,isActive:r.isActive};var r;return t&&n.isActive&&(n.isActive=!1),n.isActive&&(t=!0),n}));return!t&&n.length&&(n[0].isActive=!0),n})(null===(t=null==n?void 0:n.workspacePlatform)||void 0===t?void 0:t.pages);if(!(null==o?void 0:o.length)){const e=await Pe();r.push(await(async(e,t)=>{const n=await(async e=>({...e,layoutDetails:{machineId:await Ee(),machineName:Oe()}}))(t);return{pageId:Tn(),title:e,layout:n,isReadOnly:!1,hasUnsavedChanges:!0}})(e,n.layout))}let a;o.forEach((e=>{const t=i.get(e.pageId);t?a=t:r.push(e)})),a&&await Promise.all([ge({identity:a.parentIdentity,pageId:a.pageId}),zn(a.parentIdentity)]),r.length&&s.push({...n,workspacePlatform:{...n.workspacePlatform,pages:r}})}));if(await Promise.all(c),!s.length)return;const u=fin.Platform.getCurrentSync();return(t||u.applySnapshot.bind(u))({...e,snapshotDetails:{...e.snapshotDetails,monitorInfo:o},windows:s})}(n,(e=>super.applySnapshot({snapshot:e,options:{...t,closeExistingWindows:!1}})))}async createWindow(t,n){let r=xn(t);return r=((e,t)=>{var n;let r=e;const o=null===(n=null==r?void 0:r.workspacePlatform)||void 0===n?void 0:n.pages;if(o){const e=o.find((e=>e.isActive));e?r.layout=e.layout:(o[0].isActive=!0,r.layout=o[0].layout)}if(r.layout){r=jn()({},t,r,Gn,Bn),r.layout=jn()(r.layout,Nn,Bn),(r.icon||r.taskbarIcon)&&(r.taskbarIconGroup=r.taskbarIconGroup||fin.me.identity.uuid);const e=r.workspacePlatform.newTabUrl;e&&(r.layout.settings||(r.layout.settings={}),r.layout.settings.newTabButton={url:e})}return r})(r,e.defaultWindowOptions),r=await(async e=>{const t=await fin.System.getMonitorInfo(),n=t.primaryMonitor.availableRect.bottom-t.primaryMonitor.availableRect.top,r=t.primaryMonitor.availableRect.right-t.primaryMonitor.availableRect.left;return e.defaultHeight=e.defaultHeight||"800",e.defaultWidth=e.defaultWidth||"800",n<e.defaultHeight&&(e.defaultHeight=n),r<e.defaultWidth&&(e.defaultWidth=r),e})(r),super.createWindow(r,n)}async createView(t,n){return t.opts=Dn(t.opts,e.defaultViewOptions),super.createView(t,n)}async replaceView(t,n){return t.opts.newView=Dn(t.opts.newView,e.defaultViewOptions),super.replaceView(t,n)}async replaceLayout(e,t){var n;return null===(n=e.opts.layout)||void 0===n||delete n.dimensions,super.replaceLayout(e,t)}async closeView(e,t){const n=fin.View.wrapSync(e.view);await super.closeView(e,t),await n.destroy().catch((e=>e))}}return"function"==typeof(null==e?void 0:e.overrideCallback)?e.overrideCallback(n):new n};async function qn(){(function(){const e=E(R);e.addListener(O.WindowOptionsChanged,Ie),e.addListener(O.WindowClosed,Ae),e.addListener(O.WindowCreated,Ae)})(),async function(){const e=fin.Application.getCurrentSync();await e.addListener("window-focused",V)}(),f!==o.Local&&U().addListener(T.ShowRequested,(()=>async function(e){const t=F(e);await t.blur(),await t.hide()}(L)))}let Hn;const Yn=async e=>{const t="23.96.67.7".split(".").map((e=>parseInt(e))),n=await(async e=>new Promise((async t=>{const n=(await fin.System.getVersion()).split(".").map((e=>parseInt(e)));t(e.every(((t,r)=>!(r<3)||n[r]===e[r])))})))(t),r=null==e?void 0:e.theme;var o;if(r&&((o=r).forEach((e=>{const t=e.palette.backgroundPrimary;if(!t.includes("#")&&!t.includes("rgb")&&!t.includes("hsl"))throw new Error("Background primary color is not the right format.")})),_=o),n)return function(e){if(!i)throw new Error("Cannot be used outside an OpenFin env.");return Hn||(fin.Platform.getCurrentSync().once("platform-api-ready",(()=>qn())),Hn=fin.Platform.init({overrideCallback:Vn(e),interopOverride:null==e?void 0:e.interopOverride})),Hn}(null==e?void 0:e.browser);throw new Error(`Runtime version is not supported.  ${t[0]}.${t[1]}.${t[2]}.* is required`)},Kn=e=>(e=>{const t=fin.Platform.wrapSync(e);return Object.assign(t,{applySnapshot:async t=>{if("string"!=typeof t&&!(null==t?void 0:t.windows))throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),launchApp:async t=>(t.target||(t.target={uuid:d,name:l,entityType:p||"unknown"}),(await v(e)).dispatch(w.LaunchApp,t)),Theme:b(e),Browser:P(e),Storage:S(e)})})(e),Jn=()=>Kn(fin.me.identity)})(),module.exports=r})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@openfin/workspace/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@openfin/workspace/index.js ***!
  \**************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AppManifestType:()=>Pt,CLIAction:()=>Ot,CLIFilterOptionType:()=>Ct,CLITemplate:()=>Et,Home:()=>Mt,Legacy:()=>xt,SearchTagBackground:()=>Be,Storefront:()=>Ft,StorefrontTemplate:()=>bt});var n={};e.r(n),e.d(n,{subscribe:()=>Le});var o={};e.r(o),e.d(o,{create:()=>it});var r={};e.r(r),e.d(r,{deregister:()=>wt,hide:()=>vt,register:()=>gt,show:()=>ht});var i={};e.r(i),e.d(i,{getPages:()=>St,getWorkspaces:()=>Rt});var s,c,a={};e.r(a),e.d(a,{deregister:()=>$t,hide:()=>Wt,register:()=>kt,show:()=>Bt}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(c||(c={}));const d="undefined"!=typeof window&&"undefined"!=typeof fin,u=("undefined"==typeof process||null===(s=process.env)||void 0===s||s.JEST_WORKER_ID,"undefined"!=typeof window),f=u?window.origin:c.Local,l=(d&&fin.me.uuid,d&&fin.me.name,d&&fin.me.entityType,"undefined"!=typeof ENV?ENV:c.Local,c.Local,c.Dev,c.Staging,c.Prod,!0),p=e=>e.startsWith("http://")||e.startsWith("https://")?e:f+e,g=("undefined"!=typeof WORKSPACE_APPS_URL&&p(WORKSPACE_APPS_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_FOOTER_URL&&p(WORKSPACE_STOREFRONT_FOOTER_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_LANDING_PAGE_URL&&p(WORKSPACE_STOREFRONT_LANDING_PAGE_URL),"undefined"!=typeof WORKSPACE_STOREFRONT_NAVIGATION_URL&&p(WORKSPACE_STOREFRONT_NAVIGATION_URL),"undefined"!=typeof WORKSPACE_SHARE_URL&&p(WORKSPACE_SHARE_URL),p("https://cdn.openfin.co/workspace/staging"),p("https://cdn.openfin.co/workspace/staging"),"#7795f7"),w={trace:!0,debug:"undefined"!=typeof LOG_DEBUG&&LOG_DEBUG,info:!1,warn:!0,error:!0,fatal:!0};function h(e,t){const n=void 0===t?w:{...w,...t},o=e?`${e} : `:"",r=`color:${g}`;return{trace:n.trace?(e,...t)=>{console.trace(`%c${o}${e}`,r,...t)}:(e,...t)=>{},debug:n.debug?(e,...t)=>{console.info(`%c${o}${e}`,"color:#86db94",...t)}:(e,...t)=>{},info:n.info?(e,...t)=>{console.debug(`%c${o}${e}`,"color:#ffffff",...t)}:(e,...t)=>{},warn:n.warn?(e,...t)=>{console.warn(`%c${o}${e}`,"color:#edad68",...t)}:(e,...t)=>{},error:n.error?(e,t,...n)=>{console.error(`%c${o}${e}`,"color:#f55d67",...n,t)}:(e,t,...n)=>{},fatal:n.fatal?(e,t,...n)=>{console.error(`%c${o}${e}`,"color:#f70723",...n,t)}:(e,t,...n)=>{}}}const v=h("utils.channels"),y=u&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var m,S,R,P,b;!function(e){e.Workspace="openfin-browser"}(m||(m={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(S||(S={})),function(e){e.FinProtocol="fin-protocol"}(R||(R={})),m.Workspace,m.Workspace,function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(P||(P={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed"}(b||(b={})),P.Home,m.Workspace,P.Dock,m.Workspace,P.Storefront,m.Workspace;const O={name:m.Workspace,uuid:m.Workspace},E=e=>function(e){if(!d)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}(e).getOptions().then((()=>!0)).catch((()=>!1));var C,L;(L=C||(C={})).RegisterStorefrontProvider="register-storefront-provider",L.DeregisterStorefrontProvider="deregister-storefront-provider",L.GetStorefrontProviders="get-storefront-providers",L.HideStorefront="hide-storefront",L.GetStorefrontProviderApps="get-storefront-provider-apps",L.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",L.GetStorefrontProviderFooter="get-storefront-provider-footer",L.GetStorefrontProviderNavigation="get-storefront-provider-navigation",L.LaunchStorefrontProviderApp="launch-storefront-provider-app",L.ShowStorefront="show-storefront",L.CreateStorefrontWindow="create-storefront-window",L.ShowHome="show-home",L.HideHome="hide-home",L.AssignHomeSearchContext="assign-home-search-context",L.GetLegacyPages="get-legacy-pages",L.GetLegacyWorkspaces="get-legacy-workspaces";const I=function(e){let t;return()=>{if(!d)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(v.debug(`connecting to channel provider ${e}`),t=(async()=>{await y;const n=await fin.InterApplicationBus.Channel.connect(e);return n.onDisconnection((async()=>{v.warn(`disconnected from channel provider ${e}`),t=void 0})),n})().then((t=>(v.debug(`connected to channel provider ${e}`),t))).catch((t=>{v.error(`failed to connect to channel provider ${e}`,t)}))),t}}("__of_workspace_protocol__"),T=e=>{const t=new URL(e);return t.searchParams.append("isLaunchedViaLib",l.toString()),t.toString()},A=async()=>{if(!await E(O))return-1===navigator.userAgent.indexOf("Win")&&await fin.Application.startFromManifest(T("https://cdn.openfin.co/workspace/app.json")),fin.System.openUrlWithBrowser(T("fins://system-apps/workspace"))},_=async()=>(await A(),I()),k="home";var $,W;!function(e){e.Commands="home-commands"}($||($={})),function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(W||(W={}));const B="0",F="5",M="6",x=()=>{};function D(e,t){return e?`${e}-${t}`:t}function N(e){return`__search-${e}-topic__`}const G=new Map;function U(e,t){G.has(e)||G.set(e,new Set),G.get(e).add(t)}function q(e,t){const n=G.get(e);n&&n.delete(t)}const H=new Map;function K(e,t){H.has(e)||H.set(e,new Set),H.get(e).add(t)}function V(e,t){const n=H.get(e);n&&n.delete(t)}const j=new Map;function J(e,t){j.has(e)||j.set(e,new Map),j.get(e).set(t.id,t);const n=G.get(e);n&&n.forEach((e=>e()))}function z(e,t){const n=j.get(e);if(!n)return;n.delete(t);const o=H.get(e);o&&o.forEach((e=>e()))}function Q(e){return j.get(e)?[...j.get(e).values()]:[]}function X(e){const t=j.get(e);t&&t.clear()}function Y(e,t){const n=j.get(e);return n?n.get(t):null}function Z(e,t,n){return{...e,action:n||e.actions[0],dispatcherIdentity:t}}function ee(e,t,n="ascending"){const o=e||[];if(!(null==t?void 0:t.length))return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function te(e){const t={};let n=[],o=[],r=W.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,(null==n?void 0:n.length)&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,(null==o?void 0:o.length)&&t.onChange()},t.onChange=x;const i={};return t.res=i,i.close=()=>{r!==W.Close&&(r=W.Close,t.onChange())},i.open=()=>{r!==W.Open&&(r=W.Open,t.onChange())},i.respond=n=>{const o=ee(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function ne(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:(null==n?void 0:n.context)||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function oe(){return{name:fin.me.name,uuid:fin.me.uuid}}function re(){let e;try{const t=fin.Platform.getCurrentSync();if(!(null==t?void 0:t.identity))return;e=t.identity.uuid}catch(e){}return e}const ie="deregistered or does not exist",se=new Error(`provider ${ie}`),ce=new Error("provider with name already exists"),ae=new Error("bad payload"),de=new Error("subscription rejected"),ue=new Error(`channel ${ie}`),fe=new Map;function le(e){const t=pe(e);if(t)return t;throw ue}function pe(e){const t=fe.get(e);if(t)return t}function ge(e,t){fe.set(e,t)}function we(e){console.error("OpenFin Search API: ",e)}const he=new Map;function ve(e){he.has(e)||he.set(e,new Map);const t=he.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function ye(e,t){return(await le(e)).dispatch(B,t)}function me({namespacedTopic:e,topic:t}){const n=Y.bind(null,e),o=ve(e),r=ye.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=ae;return we(e),{error:e.message}}const{id:s,providerId:c}=e,a=n(c);if(!a){const e=se;return we(e),{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=ne(t,s,e),d.set(e.id,u));const f=te(),l=()=>{const e=f.getResultBuffer();f.setResultBuffer([]);const t=f.getRevokedBuffer();f.setRevokedBuffer([]);const n=f.getStatus();r({id:s,providerId:c,results:e,revoked:t,status:n})};let p=!0,g=!1;f.onChange=()=>{if(p)return p=!1,void l();g||(g=!0,setTimeout((()=>{g=!1,l()}),100))};try{const{results:e,context:t}=await a.onUserInput(u.req,f.res),n=f.getStatus();return{id:s,providerId:c,status:n,results:e,context:t}}catch(e){return we(e),{id:s,providerId:c,error:e.message}}}}async function Se(e,t,n){const o=n||await le(e),r=oe(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0};await o.dispatch("2",i),J(e,{identity:r,...t})}async function Re(e,t){const n=await le(e);return await n.dispatch("3",t),z(e,t)}async function Pe(e,t,n,o){const r=Z(n,oe(),o),i=Y(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await le(e)).dispatch(F,s)}async function be(e,t){const n={...t,context:(null==t?void 0:t.context)||{}},o={},r=async function*(e,t,{setState:n}){const o=await le(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await le(e)).dispatch(M,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function Oe(e){return(await le(e)).dispatch("4",null)}async function Ee(e){const t=await le(e);var n;n=e,fe.delete(n),X(e),await t.disconnect()}async function Ce(e){const{namespacedTopic:t}=e,n=N(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(B,me(e)),o.register(M,function(e){const t=ve(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(F,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return void we(ae);const o=Y(e,t.providerId);if(!o)return void we(se);const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(function(e){const{namespacedTopic:t}=e,n=ve(t);return async o=>{if(!pe(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);ge(t,(async e=>{const{namespacedTopic:t}=e,n=await Ce(e);for(const e of Q(t))await Se(t,e,n);return n})(e))}}(e)),o}async function Le(e){const t=("string"==typeof e?e:null==e?void 0:e.topic)||"all",n=("string"==typeof e?null:null==e?void 0:e.uuid)||re(),o=D(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=pe(o);return i||(i=Ce(r),ge(o,i),await i),{getAllProviders:Oe.bind(null,o),register:Se.bind(null,o),search:be.bind(null,o),deregister:Re.bind(null,o),dispatch:Pe.bind(null,o),disconnect:Ee.bind(null,o)}}const Ie=new Map;function Te(e){const t=Ae(e);if(t)return t;throw ue}function Ae(e){const t=Ie.get(e);if(t)return t}const _e=new Map;function ke(e,t){_e.has(e)||_e.set(e,new Set),_e.get(e).add(t)}function $e(e,t){const n=_e.get(e);n&&n.delete(t)}var We,Be;function Fe(e){return[...Q(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}function Me(e,t){if(Y(e,t.id))throw new Error("provider with name already exists");J(e,{identity:oe(),...t})}function xe(e,t){z(e,t)}async function De(e,t,n,o){const r=Y(e,t);if(!r)throw se;const{onResultDispatch:i}=r;if(i)return i(Z(n,oe(),o))}!function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(We||(We={})),function(e){e.Active="active",e.Default="default"}(Be||(Be={}));let Ne=0;function Ge({namespacedTopic:e,topic:t},n){Ne+=1;const o=ne(t,Ne.toString(),n);let r;return r=async function*(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=te(s.scoreOrder),c={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon}};n.push(c),o.push(e);const a=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);c.results=ee(c.results,n),c.context={...c.context,...o}}catch(e){c.error=e}a.done=!0})();i.push(a),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>Y(e,t))).filter((e=>!!e)):[...Q(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:c}=o,a=We.Fetching;const d=e=>{a=e,n.setState(a)};let u,f=!1;t.onClose((()=>{f=!0,u&&u()}));do{let e=!1;if(c.length){const t=[];for(const n of c)n.done?e=!0:t.push(n);c=t,c.length||(d(We.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},l=[];for(const t of s){const n=i[t],s=r[t],c=n.getStatus();(c===W.Open||a===We.Fetching&&c===W.Initial)&&(l.push(t),n.onChange=o);const d=n.getResultBuffer();d.length&&(n.setResultBuffer([]),s.results=ee(s.results,d),e=!0);const u=n.getRevokedBuffer();if(u.length){n.setRevokedBuffer([]);const t=new Set(u);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=l,e&&(yield r),f)break;n||(s.length||c.length)&&await Promise.race([...c,new Promise((e=>{t=e})),new Promise((e=>{u=e}))])}while(s.length||c.length);return d(We.Complete),r}(e,o.req,{setState:e=>{r.state=e}}),r.id=Ne.toString(),r.close=o.close,r.state=We.Fetching,r}const Ue=new Map;function qe(e,t){return`${e}:${t}`}function He(e,t,n){return Te(e).dispatch(t,M,{id:n})}async function Ke(e,t,{id:n,query:o,context:r,targets:i}){const s=Te(e),c={id:n,query:o,context:r,targets:i,providerId:t.id},a=await s.dispatch(t.identity,B,c),d=a.error;if(d)throw new Error(d);return a}const Ve=new Map;function je(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const Je=new Map;function ze(e,t,n){return`${e}:${t}:${n}`}function Qe(e,t){const n=je.bind(null,e,t.identity),o=He.bind(null,e,t.identity),r=Ke.bind(null,e,t);return async(i,s)=>{const c=n(i.id);if(!Ve.has(c)){const e=()=>{o(i.id),Ve.delete(c)};Ve.set(c,e),i.onClose(e)}const a=ze(e,t.id,i.id),d=()=>{Je.delete(a),s.close()};i.onClose(d),Je.set(a,(e=>{var t,n;(null===(t=e.results)||void 0===t?void 0:t.length)&&s.respond(e.results),(null===(n=e.revoked)||void 0===n?void 0:n.length)&&s.revoke(...e.revoked),e.status===W.Open&&s.open(),e.status===W.Close&&d()}));const u=await r(i);return u.status===W.Open&&s.open(),u.status!==W.Close&&u.status!==W.Initial||d(),u}}function Xe(e,t){return async n=>{const o=Te(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,F,r)}}const Ye=new Map;function Ze(e,t){return`${e}-${t.name}-${t.uuid}`}const et=new Map;function tt(e,t){et.has(e)||et.set(e,new Set),et.get(e).add(t)}function nt(e,t){const n=et.get(e);n&&n.delete(t)}async function ot(e){const{namespacedTopic:t}=e,n=N(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=_e.get(e);if(n)for(const e of n)if(!await e(t))throw de}}(e)),o.onDisconnection(function(e){return async t=>{!function(e,t){const n=Ze(e,t),o=Ye.get(n);if(o){for(const t of o)z(e,t);Ye.delete(n)}}(e,t);const n=et.get(e);n&&n.forEach((e=>e(t)))}}(t)),o.register(M,function(e){return t=>function(e,t){const n=qe(e,t),o=Ue.get(n);o&&o.generator.close()}(e,t.id)}(t)),o.register(B,function(e){return t=>{const n=ze(e,t.providerId,t.id),o=Je.get(n);o&&o(t)}}(t)),o.register("2",function(e){return(t,n)=>{if(!t||!t.id)return we(new Error(JSON.stringify(t))),void we(ae);if(Y(e,t.id))throw ce;t.identity=n,function(e,t){const n=Ze(e,t.identity);Ye.has(n)||Ye.set(n,[]),Ye.get(n).push(t.id),J(e,{...t,onUserInput:Qe(e,t),onResultDispatch:Xe(e,t)})}(e,t)}}(t)),o.register("3",function(e){return t=>{t?function(e,t){const n=Y(e,t);if(!n)return;const o=Ze(e,n.identity),r=Ye.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),z(e,t))}}(e,t):we(ae)}}(t)),o.register("4",function(e){return async()=>Fe(e)}(t)),o.register("1",function(e){return async(t,...n)=>{if(!t)return we(ae),{error:ae.message};let o;if(t.id)o=qe(e.namespacedTopic,t.id);else{const n=Ge(e,t);o=qe(e.namespacedTopic,n.id),t.id=n.id,Ue.set(o,{generator:n})}const r=Ue.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{Ue.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}(e)),o.register(F,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return void we(ae);const o=Y(e,t.providerId);if(!o)throw se;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function rt(e){const t=Te(e);var n;n=e,Ie.delete(n),await t.destroy(),X(e)}async function it(e){const t=("string"==typeof e?e:null==e?void 0:e.topic)||"all",n=re(),o=D(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=Ae(o);i||(i=await ot(r),function(e,t){Ie.set(e,t)}(o,i));const s=$e.bind(null,o),c=nt.bind(null,o),a=q.bind(null,o),d=V.bind(null,o);return{getAllProviders:Fe.bind(null,o),search:Ge.bind(null,r),register:Me.bind(null,o),deregister:xe.bind(null,o),onSubscription:ke.bind(null,o),onDisconnect:tt.bind(null,o),onRegister:U.bind(null,o),onDeregister:K.bind(null,o),dispatch:De.bind(null,r),disconnect:rt.bind(null,o),removeListener:e=>{s(e),c(e),a(e),d(e)}}}const{create:st}=o,{subscribe:ct}=n,at={create:st,subscribe:ct,defaultTopic:"all"},dt=()=>{const e=window;e.search=at,e.fin&&(e.fin.Search=at)},ut=e=>{const t=()=>{dt(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){dt();const e="load",t=ut(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=ut(n);window.addEventListener(n,o)}h("api.common.search");const ft=new Map;let lt;async function pt(e){return await async function(){return lt||(lt=async function(){await async function(e){ft.set(e,await ct({topic:e,uuid:m.Workspace}))}(k)}()),lt}(),ft.get(e)}const gt=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);return await A(),(await pt(k)).register(e)},wt=async e=>(await A(),(await pt(k)).deregister(e));async function ht(){return(await _()).dispatch(C.ShowHome,void 0)}async function vt(){return(await _()).dispatch(C.HideHome,void 0)}var yt,mt;(mt=yt||(yt={})).LastLaunchedWorkspaceId="activeWorkspaceId",mt.LastFocusedBrowserWindow="lastFocusedBrowserWindow",mt.MachineName="machineName",mt.NewTabPageLayout="NewTabPageLayout",mt.NewTabPageSort="NewTabPageSort";const St=()=>async function(){return(await I()).dispatch(C.GetLegacyPages,void 0)}(),Rt=()=>(async()=>(await I()).dispatch(C.GetLegacyWorkspaces,void 0))();var Pt,bt,Ot,Et,Ct,Lt;let It;!function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(Pt||(Pt={})),(Lt=bt||(bt={})).LandingPage="landingPage",Lt.AppGrid="appGrid",function(e){e.Suggestion="suggestion"}(Ot||(Ot={})),function(e){e.Contact="Contact",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText"}(Et||(Et={})),function(e){e.MultiSelect="MultiSelect"}(Ct||(Ct={}));const Tt=new Map;let At=!1;const _t=e=>{if(!Tt.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return Tt.get(e)},kt=e=>(It=(async e=>{const t=await _();if(Tt.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return Tt.set(e.id,e),(e=>{At||(At=!0,e.register(C.GetStorefrontProviderApps,(e=>_t(e).getApps())),e.register(C.GetStorefrontProviderFooter,(e=>_t(e).getFooter())),e.register(C.GetStorefrontProviderLandingPage,(e=>_t(e).getLandingPage())),e.register(C.GetStorefrontProviderNavigation,(e=>_t(e).getNavigation())),e.register(C.LaunchStorefrontProviderApp,(({id:e,app:t})=>_t(e).launchApp(t))))})(t),t.dispatch(C.RegisterStorefrontProvider,e)})(e),It),$t=async e=>(await It,Tt.delete(e),(await _()).dispatch(C.DeregisterStorefrontProvider,e)),Wt=async()=>{await It,await A(),await(async()=>(await I()).dispatch(C.HideStorefront,void 0))()},Bt=async()=>{await It,await A(),await(async()=>(await I()).dispatch(C.ShowStorefront,null))()},Ft=a,Mt=r,xt=i;module.exports=t})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/application/Factory.js":
/*!*********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/application/Factory.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/application/Instance.js");
/**
 * @typedef {object} ApplicationOption
 * @summary Application creation options.
 * @desc This is the options object required by {@link Application.start Application.start}.
 *
 * The following options are required:
 * * `uuid` is required in the app manifest as well as by {@link Application.start Application.start}
 * * `name` is optional in the app manifest but required by {@link Application.start Application.start}
 * * `url` is optional in both the app manifest {@link Application.start Application.start} and  but is usually given
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `ApplicationOption` TypeScript interface in `@types/openfin`._
 *
 * **IMPORTANT NOTE:**
 * This object inherits all the properties of the window creation {@link Window~options options} object,
 * which will take priority over those of the same name that may be provided in `mainWindowOptions`.
 *
 * @property {boolean} [disableIabSecureLogging=false]
 * When set to `true` it will disable IAB secure logging for the app.
 *
 * @property {string} [loadErrorMessage="There was an error loading the application."]
 * An error message to display when the application (launched via manifest) fails to load.
 * A dialog box will be launched with the error message just before the runtime exits.
 * Load fails such as failed DNS resolutions or aborted connections as well as cancellations, _e.g.,_ `window.stop()`,
 * will trigger this dialog.
 * Client response codes such as `404 Not Found` are not treated as fails as they are valid server responses.
 *
 * @property {Window~options} [mainWindowOptions]
 * The options of the main window of the application.
 * For a description of these options, click the link (in the Type column).
 *
 * @property {number} [maxViewPoolSize=1000]
 * Platforms Only.  The maximum number of "detached" or "pooled" Views that can exist in the Platform before being closed.
 * If you do not wish for views to be pooled on your platform, set this property to zero.
 *
 * @property {string} [name]
 * The name of the application (and the application's main window).
 *
 * If provided, _must_ match `uuid`.
 *
 * @property {boolean} [nonPersistent=false]
 * A flag to configure the application as non-persistent.
 * Runtime exits when there are no persistent apps running.
 *
 * @property {boolean} [plugins=false]
 * Enable Flash at the application level.
 *
 * @property {boolean} [spellCheck=false]
 * Enable spell check at the application level.
 *
 * @property {string} [url="about:blank"]
 * The url to the application (specifically the application's main window).
 *
 * @property {string} uuid
 * The _Unique Universal Identifier_ (UUID) of the application, unique within the set of all other applications
 *  running in the OpenFin Runtime.
 *
 * Note that `name` and `uuid` must match.
 *
 * @property {boolean} [enableJumpList=false]
 * Enables the use of the Jumplists API and the 'pin to taskbar' functionality.
 * Only relevant in Windows.
 *
 * @property {boolean} [webSecurity=true]
 * When set to `false` it will disable the same-origin policy for the app.
 */
/**
 * @lends Application
 */
class ApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Promise.<Application>}
     * @tutorial Application.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('wrap-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    /**
     * Synchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Application}
     * @tutorial Application.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('wrap-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    async _create(appOptions) {
        // set defaults:
        if (appOptions.waitForPageLoad === undefined) {
            appOptions.waitForPageLoad = false;
        }
        if (appOptions.autoShow === undefined && appOptions.isPlatformController === undefined) {
            appOptions.autoShow = true;
        }
        await this.wire.sendAction('create-application', appOptions);
        return this.wrap({ uuid: appOptions.uuid });
    }
    /**
     * DEPRECATED method to create a new Application. Use {@link Application.start} instead.
     * @param { ApplicationOption } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.create
     * @ignore
     */
    create(appOptions) {
        console.warn('Deprecation Warning: fin.Application.create is deprecated. Please use fin.Application.start');
        this.wire.sendAction('application-create').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._create(appOptions);
    }
    /**
     * Creates and starts a new Application.
     * @param { ApplicationOption } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.start
     * @static
     */
    async start(appOptions) {
        this.wire.sendAction('start-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._create(appOptions);
        await this.wire.sendAction('run-application', { uuid: appOptions.uuid });
        return app;
    }
    /**
     * Asynchronously starts a batch of applications given an array of application identifiers and manifestUrls.
     * Returns once the RVM is finished attempting to launch the applications.
     * @param { Array.<ManifestInfo> } applications
     * @return {Promise.<void>}
     * @static
     * @tutorial Application.startManyManifests
     * @experimental
     */
    async startManyManifests(applications) {
        return this.wire.sendAction('run-applications', { applications }).then(() => undefined);
    }
    /**
     * Asynchronously returns an Application object that represents the current application
     * @return {Promise.<Application>}
     * @tutorial Application.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns an Application object that represents the current application
     * @return {Application}
     * @tutorial Application.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Retrieves application's manifest and returns a running instance of the application.
     * @param {string} manifestUrl - The URL of app's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Application>}
     * @tutorial Application.startFromManifest
     * @static
     */
    async startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('application-start-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._createFromManifest(manifestUrl);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore using private method without warning.
        await app._run(opts); // eslint-disable-line no-underscore-dangle
        return app;
    }
    createFromManifest(manifestUrl) {
        console.warn('Deprecation Warning: fin.Application.createFromManifest is deprecated. Please use fin.Application.startFromManifest');
        this.wire.sendAction('application-create-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._createFromManifest(manifestUrl);
    }
    _createFromManifest(manifestUrl) {
        return this.wire
            .sendAction('get-application-manifest', { manifestUrl })
            .then(({ payload }) => {
            const uuid = payload.data.platform ? payload.data.platform.uuid : payload.data.startup_app.uuid;
            return this.wrap({ uuid });
        })
            .then((app) => {
            app._manifestUrl = manifestUrl; // eslint-disable-line no-underscore-dangle
            return app;
        });
    }
}
exports["default"] = ApplicationModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/application/Instance.js":
/*!**********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/application/Instance.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Application = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const window_1 = __webpack_require__(/*! ../window */ "./node_modules/openfin-adapter/src/api/window/index.js");
const view_1 = __webpack_require__(/*! ../view */ "./node_modules/openfin-adapter/src/api/view/index.js");
/**
 * @classdesc An object representing an application. Allows the developer to create,
 * execute, show/close an application as well as listen to <a href="tutorial-Application.EventEmitter.html">application events</a>.
 * @class
 * @hideconstructor
 */
class Application extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['application', identity.uuid]);
        this.identity = identity;
        this.window = new window_1._Window(this.wire, {
            uuid: this.identity.uuid,
            name: this.identity.uuid
        });
    }
    windowListFromIdentityList(identityList) {
        const windowList = [];
        identityList.forEach((identity) => {
            windowList.push(new window_1._Window(this.wire, {
                uuid: identity.uuid,
                name: identity.name
            }));
        });
        return windowList;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Determines if the application is currently running.
     * @return {Promise.<boolean>}
     * @tutorial Application.isRunning
     */
    /**
     * JumpListCategory interface
     * @typedef { object } JumpListCategory
     * @property { string } name The display title for the category. If omitted, items in this category will be placed into the standard 'Tasks' category. There can be only one such category, and it will always be displayed at the bottom of the JumpList.
     * @property { JumpListItem[] } items Array of JumpListItem objects
     */
    /**
     * JumpListItem interface
     * @typedef { object } JumpListItem
     * @property { string } type One of the following: "task" or "separator". Defaults to task.
     * @property { string } title The text to be displayed for the JumpList Item. Should only be set if type is "task".
     * @property { string } description Description of the task (displayed in a tooltip). Should only be set if type is "task".
     * @property { string } deepLink Deep link to a manifest, i.e: fins://path.to/manifest.json?$$param1=value1. See {@link https://developers.openfin.co/docs/deep-linking deep-linking} for more information.
     * @property { string } iconPath The absolute path to an icon to be displayed for the item, which can be an arbitrary resource file that contains an icon (e.g. .ico, .exe, .dll).
     * @property { number } iconIndex The index of the icon in the resource file. If a resource file contains multiple icons this value can be used to specify the zero-based index of the icon that should be displayed for this task. If a resource file contains only one icon, this property should be set to zero.
     */
    isRunning() {
        return this.wire.sendAction('is-application-running', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application and any child windows created by the application.
     * Cleans the application from state so it is no longer found in getAllApplications.
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<boolean>}
     * @tutorial Application.quit
     */
    async quit(force = false) {
        await this._close(force);
        await this.wire.sendAction('destroy-application', { force, ...this.identity });
    }
    _close(force = false) {
        return this.wire.sendAction('close-application', { force, ...this.identity }).then(() => undefined);
    }
    close(force = false) {
        console.warn('Deprecation Warning: Application.close is deprecated Please use Application.quit');
        this.wire.sendAction('application-close', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._close(force);
    }
    /**
     * Retrieves an array of wrapped fin.Windows for each of the application’s child windows.
     * @return {Promise.Array.<_Window>}
     * @tutorial Application.getChildWindows
     */
    getChildWindows() {
        return this.wire.sendAction('get-child-windows', this.identity).then(({ payload }) => {
            const identityList = [];
            payload.data.forEach((winName) => {
                identityList.push({ uuid: this.identity.uuid, name: winName });
            });
            return this.windowListFromIdentityList(identityList);
        });
    }
    /**
     * Retrieves an array of active window groups for all of the application's windows. Each group is
     * represented as an array of wrapped fin.Windows.
     * @return {Promise.Array.Array.<_Window>}
     * @deprecated All Window Group APIs will be removed by major version 22.
     * @tutorial Application.getGroups
     */
    getGroups() {
        console.warn('Deprecation Warning: All Window Group APIs will be removed by major version 22.');
        const winGroups = [];
        return this.wire
            .sendAction('get-application-groups', {
            crossApp: true,
            ...this.identity
        })
            .then(({ payload }) => {
            payload.data.forEach((windowList, index) => {
                const identityList = [];
                windowList.forEach((winInfo) => {
                    identityList.push({ uuid: winInfo.uuid, name: winInfo.windowName });
                });
                winGroups[index] = this.windowListFromIdentityList(identityList);
            });
            return winGroups;
        });
    }
    /**
     * Retrieves the JSON manifest that was used to create the application. Invokes the error callback
     * if the application was not created from a manifest.
     * @return {Promise.<any>}
     * @tutorial Application.getManifest
     */
    getManifest() {
        return this.wire.sendAction('get-application-manifest', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves UUID of the application that launches this application. Invokes the error callback
     * if the application was created from a manifest.
     * @return {Promise.<string>}
     * @tutorial Application.getParentUuid
     */
    getParentUuid() {
        return this.wire.sendAction('get-parent-application', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's shortcut configuration.
     * @return {Promise.<ShortCutConfig>}
     * @tutorial Application.getShortcuts
     */
    getShortcuts() {
        return this.wire.sendAction('get-shortcuts', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Application.getViews
     */
    async getViews() {
        const { payload } = await this.wire.sendAction('application-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /**
     * Returns the current zoom level of the application.
     * @return {Promise.<number>}
     * @tutorial Application.getZoomLevel
     */
    getZoomLevel() {
        return this.wire.sendAction('get-application-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns an instance of the main Window of the application
     * @return {Promise.<_Window>}
     * @tutorial Application.getWindow
     */
    getWindow() {
        this.wire.sendAction('application-get-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(this.window);
    }
    /**
     * Manually registers a user with the licensing service. The only data sent by this call is userName and appName.
     * @param { string } userName - username to be passed to the RVM.
     * @param { string } appName - app name to be passed to the RVM.
     * @return {Promise.<void>}
     * @tutorial Application.registerUser
     */
    registerUser(userName, appName) {
        return this.wire.sendAction('register-user', { userName, appName, ...this.identity }).then(() => undefined);
    }
    /**
     * Removes the application’s icon from the tray.
     * @return {Promise.<void>}
     * @tutorial Application.removeTrayIcon
     */
    removeTrayIcon() {
        return this.wire.sendAction('remove-tray-icon', this.identity).then(() => undefined);
    }
    /**
     * Restarts the application.
     * @return {Promise.<void>}
     * @tutorial Application.restart
     */
    restart() {
        return this.wire.sendAction('restart-application', this.identity).then(() => undefined);
    }
    /**
     * DEPRECATED method to run the application.
     * Needed when starting application via {@link Application.create}, but NOT needed when starting via {@link Application.start}.
     * @return {Promise.<void>}
     * @tutorial Application.run
     * @ignore
     */
    run() {
        console.warn('Deprecation Warning: Application.run is deprecated Please use fin.Application.start');
        this.wire.sendAction('application-run', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._run();
    }
    _run(opts = {}) {
        return this.wire
            .sendAction('run-application', {
            manifestUrl: this._manifestUrl,
            opts,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Instructs the RVM to schedule one restart of the application.
     * @return {Promise.<void>}
     * @tutorial Application.scheduleRestart
     */
    scheduleRestart() {
        return this.wire.sendAction('relaunch-on-close', this.identity).then(() => undefined);
    }
    /**
     * Sends a message to the RVM to upload the application's logs. On success,
     * an object containing logId is returned.
     * @return {Promise.<LogInfo>}
     * @tutorial Application.sendApplicationLog
     */
    async sendApplicationLog() {
        const { payload } = await this.wire.sendAction('send-application-log', this.identity);
        return payload.data;
    }
    /**
     * Sets or removes a custom JumpList for the application. Only applicable in Windows OS.
     * If categories is null the previously set custom JumpList (if any) will be replaced by the standard JumpList for the app (managed by Windows).
     * Note: If the "name" property is omitted it defaults to "tasks".
     * @param { Array.<JumpListCategory> | null } jumpListCategories An array of JumpList Categories to populate. If null, remove any existing JumpList configuration and set to Windows default.
     * @return { Promise.<void> }
     * @tutorial Application.setJumpList
     */
    async setJumpList(jumpListCategories) {
        await this.wire.sendAction('set-jump-list', { config: jumpListCategories, ...this.identity });
    }
    /**
     * Adds a customizable icon in the system tray.  To listen for a click on the icon use the `tray-icon-clicked` event.
     * @param { string } icon Image URL or base64 encoded string to be used as the icon
     * @return {Promise.<void>}
     * @tutorial Application.setTrayIcon
     */
    setTrayIcon(icon) {
        return this.wire
            .sendAction('set-tray-icon', {
            enabledIcon: icon,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Sets new application's shortcut configuration. Windows only.
     * @param { ShortCutConfig } config New application's shortcut configuration.
     * @param { boolean } [config.desktop] - Enable/disable desktop shortcut.
     * @param { boolean } [config.startMenu] - Enable/disable start menu shortcut.
     * @param { boolean } [config.systemStartup] - Enable/disable system startup shortcut.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcuts
     */
    setShortcuts(config) {
        return this.wire.sendAction('set-shortcuts', { data: config, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets the query string in all shortcuts for this app. Requires RVM 5.5+.
     * @param { string } queryString The new query string for this app's shortcuts.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcutQueryParams
     */
    async setShortcutQueryParams(queryString) {
        await this.wire.sendAction('set-shortcut-query-args', { data: queryString, ...this.identity });
    }
    /**
     * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size, respectively.
     * @param { number } level The zoom level
     * @return {Promise.<void>}
     * @tutorial Application.setZoomLevel
     */
    setZoomLevel(level) {
        return this.wire.sendAction('set-application-zoom-level', { level, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets a username to correlate with App Log Management.
     * @param { string } username Username to correlate with App's Log.
     * @return {Promise.<void>}
     * @tutorial Application.setAppLogUsername
     */
    async setAppLogUsername(username) {
        await this.wire.sendAction('set-app-log-username', { data: username, ...this.identity });
    }
    /**
     * @summary Retrieves information about the system tray.
     * @desc The only information currently returned is the position and dimensions.
     * @return {Promise.<TrayInfo>}
     * @tutorial Application.getTrayIconInfo
     */
    getTrayIconInfo() {
        return this.wire.sendAction('get-tray-icon-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application by terminating its process.
     * @return {Promise.<void>}
     * @tutorial Application.terminate
     */
    terminate() {
        return this.wire.sendAction('terminate-application', this.identity).then(() => undefined);
    }
    /**
     * Waits for a hanging application. This method can be called in response to an application
     * "not-responding" to allow the application to continue and to generate another "not-responding"
     * message after a certain period of time.
     * @return {Promise.<void>}
     * @ignore
     */
    wait() {
        return this.wire.sendAction('wait-for-hung-application', this.identity).then(() => undefined);
    }
    /**
     * Retrieves information about the application.
     * @return {Promise.<ApplicationInfo>}
     * @tutorial Application.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information for entities (windows and views) associated with an application.
     * @return {Promise.<AppProcessInfo>}
     * @tutorial Application.getProcessInfo
     * @experimental
     */
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('application-get-process-info', this.identity);
        return data;
    }
    /**
     * Sets file auto download location.
     * @param { string } downloadLocation file auto download location
     * @return {Promise.<void>}
     * @tutorial Application.setFileDownloadLocation
     */
    async setFileDownloadLocation(downloadLocation) {
        await this.wire.sendAction('set-file-download-location', { downloadLocation, ...this.identity });
    }
}
exports.Application = Application;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/application/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/application/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/application/Factory.js");
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/application/Instance.js"), exports);
exports["default"] = Factory_1.default;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/base.js":
/*!******************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/base.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reply = exports.EmitterBase = exports.Base = void 0;
const promises_1 = __webpack_require__(/*! ../util/promises */ "./node_modules/openfin-adapter/src/util/promises.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "./node_modules/openfin-adapter/src/transport/fin_store.js");
class Base {
    constructor(wire) {
        this.isNodeEnvironment = () => {
            return this.wire.environment.constructor.name === 'NodeEnvironment';
        };
        this.isOpenFinEnvironment = () => {
            return this.wire.environment.constructor.name === 'OpenFinEnvironment';
        };
        this.wire = wire;
    }
    get fin() {
        return fin_store_1.getFin(this.wire);
    }
    get topic() {
        return this._topic || this.constructor.name.replace('_', '').toLowerCase();
    }
    set topic(t) {
        this._topic = t;
    }
    get me() {
        return this.wire.me;
    }
}
exports.Base = Base;
class EmitterBase extends Base {
    constructor(wire, emitterAccessor) {
        super(wire);
        this.emitterAccessor = emitterAccessor;
        this.eventNames = () => (this.hasEmitter() ? this.getOrCreateEmitter().eventNames() : []);
        this.emit = (eventName, payload, ...args) => {
            return this.hasEmitter() ? this.getOrCreateEmitter().emit(eventName, payload, ...args) : false;
        };
        this.hasEmitter = () => this.wire.eventAggregator.has(this.emitterAccessor);
        this.getOrCreateEmitter = () => this.wire.eventAggregator.getOrCreate(this.emitterAccessor);
        this.listeners = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(type) : [];
        this.listenerCount = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listenerCount(type) : 0;
        this.registerEventListener = async (eventType, options = {}, applySubscription, undoSubscription) => {
            const runtimeEvent = {
                ...this.identity,
                timestamp: options.timestamp || Date.now(),
                topic: this.topic,
                type: eventType
            };
            const emitter = this.getOrCreateEmitter();
            // We apply the subscription and then undo if the async call fails to avoid
            // indeterminacy in subscription application order, which can break things elsewhere
            applySubscription(emitter);
            try {
                await this.wire.sendAction('subscribe-to-desktop-event', runtimeEvent);
            }
            catch (e) {
                undoSubscription(emitter);
                this.deleteEmitterIfNothingRegistered(emitter);
                throw e;
            }
        };
        this.deregisterEventListener = async (eventType, options = {}) => {
            if (this.hasEmitter()) {
                const runtimeEvent = {
                    ...this.identity,
                    timestamp: options.timestamp || Date.now(),
                    topic: this.topic,
                    type: eventType
                };
                await this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null);
                const emitter = this.getOrCreateEmitter();
                return emitter;
            }
            // This will only be reached if unsubscribe from event that does not exist but do not want to error here
            return Promise.resolve();
        };
        this.on = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.on(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.addListener = this.on;
        this.once = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.once(eventType, deregister);
                emitter.once(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, deregister);
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependListener = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependListener(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependOnceListener = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependOnceListener(eventType, listener);
                emitter.once(eventType, deregister);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
                emitter.removeListener(eventType, deregister);
            });
            return this;
        };
        this.removeListener = async (eventType, listener, options) => {
            const emitter = await this.deregisterEventListener(eventType, options);
            if (emitter) {
                emitter.removeListener(eventType, listener);
                this.deleteEmitterIfNothingRegistered(emitter);
            }
            return this;
        };
        this.deregisterAllListeners = async (eventType) => {
            const runtimeEvent = { ...this.identity, type: eventType, topic: this.topic };
            if (this.hasEmitter()) {
                const emitter = this.getOrCreateEmitter();
                const refCount = emitter.listenerCount(runtimeEvent.type);
                const unsubscribePromises = [];
                for (let i = 0; i < refCount; i++) {
                    unsubscribePromises.push(this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null));
                }
                await Promise.all(unsubscribePromises);
                return emitter;
            }
            return undefined;
        };
        this.removeAllListeners = async (eventType) => {
            const removeByEvent = async (event) => {
                const emitter = await this.deregisterAllListeners(event);
                if (emitter) {
                    emitter.removeAllListeners(event);
                    this.deleteEmitterIfNothingRegistered(emitter);
                }
            };
            if (eventType) {
                await removeByEvent(eventType);
            }
            else if (this.hasEmitter()) {
                const events = this.getOrCreateEmitter().eventNames();
                await promises_1.promiseMap(events, removeByEvent);
            }
            return this;
        };
        this.listeners = (event) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(event) : [];
    }
    deleteEmitterIfNothingRegistered(emitter) {
        if (emitter.eventNames().length === 0) {
            this.wire.eventAggregator.delete(this.emitterAccessor);
        }
    }
}
exports.EmitterBase = EmitterBase;
class Reply {
}
exports.Reply = Reply;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/clipboard/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/clipboard/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * WriteRequestType interface
 * @typedef { object } WriteRequestType
 * @property { string } data Data to be written
 * @property { string } [type] Clipboard Type
 */
/**
 * The Clipboard API allows reading and writing to the clipboard in multiple formats.
 * @namespace
 */
class Clipboard extends base_1.Base {
    /**
     * Writes data into the clipboard as plain text
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typeof
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeText
     */
    writeText(writeObj) {
        return this.wire.sendAction('clipboard-write-text', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as plain text
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readText
     */
    readText(type) {
        return this.wire.sendAction('clipboard-read-text', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Html
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeHtml
     */
    writeHtml(writeObj) {
        return this.wire.sendAction('clipboard-write-html', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Html
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readHtml
     */
    readHtml(type) {
        return this.wire.sendAction('clipboard-read-html', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Rtf
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeRtf
     */
    writeRtf(writeObj) {
        return this.wire.sendAction('clipboard-write-rtf', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Rtf
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readRtf
     */
    readRtf(type) {
        return this.wire.sendAction('clipboard-read-rtf', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard
     * @param { WriteAnyRequestType } writeObj This object is described in the WriteAnyRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.write
     */
    write(writeObj) {
        return this.wire.sendAction('clipboard-write', writeObj).then(() => undefined);
    }
    /**
     * Reads available formats for the clipboard type
     * @param { string } type Clipboard Type
     * @return {Promise.Array.<string>}
     * @tutorial Clipboard.getAvailableFormats
     */
    getAvailableFormats(type) {
        return this.wire.sendAction('clipboard-read-formats', type).then(({ payload }) => payload.data);
    }
}
exports["default"] = Clipboard;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/events/emitterMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/events/emitterMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterMap = void 0;
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
class EmitterMap {
    constructor() {
        this.storage = new Map();
    }
    // eslint-disable-next-line class-methods-use-this
    hashKeys(keys) {
        const hashed = keys.map(normalizeString);
        return hashed.join('/');
    }
    getOrCreate(keys) {
        const hash = this.hashKeys(keys);
        if (!this.storage.has(hash)) {
            this.storage.set(hash, new events_1.EventEmitter());
        }
        // We set it above
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.storage.get(hash);
    }
    has(keys) {
        return this.storage.has(this.hashKeys(keys));
    }
    delete(keys) {
        const hash = this.hashKeys(keys);
        return this.storage.delete(hash);
    }
}
exports.EmitterMap = EmitterMap;
function normalizeString(s) {
    const b = Buffer.from(s);
    return b.toString('base64');
}


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/events/eventAggregator.js":
/*!************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/events/eventAggregator.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitterMap_1 = __webpack_require__(/*! ./emitterMap */ "./node_modules/openfin-adapter/src/api/events/emitterMap.js");
function isEventMessage(message) {
    return message.action === 'process-desktop-event';
}
function isNotificationMessage(message) {
    return message.action === 'process-notification-event';
}
const buildLocalPayload = (rawPayload) => {
    const { payload: { message }, type } = rawPayload;
    const payload = {};
    switch (type) {
        case 'message':
            payload.message = message;
            break;
        case 'show':
        case 'error':
        case 'click':
        case 'close':
        default:
            break;
    }
    return payload;
};
function mapKeyFromEvent(event) {
    const { topic } = event;
    if (topic === 'frame') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'window') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'application') {
        const { uuid } = event;
        return [topic, uuid];
    }
    if (topic === 'external-window') {
        const { uuid } = event;
        return [topic, uuid];
    }
    if (topic === 'view') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    return [topic];
}
class EventAggregator extends emitterMap_1.EmitterMap {
    constructor() {
        super(...arguments);
        this.dispatchEvent = (message) => {
            if (isEventMessage(message)) {
                const { payload } = message;
                const accessor = mapKeyFromEvent(payload);
                if (this.has(accessor)) {
                    this.getOrCreate(accessor).emit(payload.type, payload);
                    return true;
                }
            }
            else if (isNotificationMessage(message)) {
                const { payload: { notificationId }, type } = message.payload;
                const accessor = ['notification', `${notificationId}`];
                if (this.has(accessor)) {
                    this.getOrCreate(accessor).emit(type, buildLocalPayload(message.payload));
                    return true;
                }
            }
            return false;
        };
    }
}
exports["default"] = EventAggregator;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-application/Factory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-application/Factory.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/external-application/Instance.js");
/**
 * @lends ExternalApplication
 */
class ExternalApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {Promise.<ExternalApplication>}
     * @tutorial ExternalApplication.wrap
     * @static
     */
    wrap(uuid) {
        this.wire.sendAction('external-application-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1.ExternalApplication(this.wire, { uuid }));
    }
    /**
     * Synchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {ExternalApplication}
     * @tutorial ExternalApplication.wrapSync
     * @static
     */
    wrapSync(uuid) {
        this.wire.sendAction('external-application-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1.ExternalApplication(this.wire, { uuid });
    }
}
exports["default"] = ExternalApplicationModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-application/Instance.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-application/Instance.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalApplication = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * @classdesc An ExternalApplication object representing native language adapter connections to the runtime. Allows
 * the developer to listen to <a href="tutorial-ExternalApplication.EventEmitter.html">application events.</a>
 * Discovery of connections is provided by <a href="tutorial-System.getAllExternalApplications.html">getAllExternalApplications.</a>
 *
 * Processes that can be wrapped as `ExternalApplication`s include the following:
 * - Processes which have connected to an OpenFin runtime via an adapter
 * - Processes started via `System.launchExternalApplication`
 * - Processes monitored via `System.monitorExternalProcess`
 * @class
 * @hideconstructor
 */
class ExternalApplication extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['external-application', identity.uuid]);
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Retrieves information about the external application.
     * @return {Promise.<ExternalApplicationInfo>}
     * @tutorial ExternalApplication.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-external-application-info', this.identity).then(({ payload }) => payload.data);
    }
}
exports.ExternalApplication = ExternalApplication;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-application/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-application/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/external-application/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/external-application/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-window/Factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-window/Factory.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/external-window/Instance.js");
/**
 * @lends ExternalWindow
 */
class ExternalWindowModule extends base_1.Base {
    /**
     * Asynchronously returns an external window object that represents
     * an existing external window.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { ExternalWindowIdentity } identity
     * @return {Promise.<ExternalWindow>}
     * @static
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial ExternalWindow.wrap
     */
    async wrap(identity) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const response = await this.wire.sendAction('register-native-external-window', identity);
        // Allow core to provide uuid if none is provided by user,
        // or nativeId when wrapping via a uuid obtained from `launchExternalProcess`
        const identityFromCore = response.payload.data;
        return new Instance_1.ExternalWindow(this.wire, identityFromCore);
    }
}
exports["default"] = ExternalWindowModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-window/Instance.js":
/*!**************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-window/Instance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalWindow = void 0;
/* eslint-disable import/prefer-default-export */
const window_1 = __webpack_require__(/*! ../window */ "./node_modules/openfin-adapter/src/api/window/index.js");
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * @classdesc An ExternalWindow is an OpenFin object representing a window that belongs to a non-openfin application.<br>
 * While External Windows don't have the complete functionality of an OpenFin Window object,
 * they can be used to tap into any application that is currently running in the OS.<br>
 * External Windows are useful for grouping, moving and resizing non-openfin applications
 * as well as listening to events that are dispatched by these applications.<br>
 * They are also compatible with OpenFin's Layouts service to facilitate
 * complete positional control over all running applications.<br>
 * External Windows has the ability to listen for <a href="tutorial-ExternalWindow.EventEmitter.html"> external window-specific events</a>.
 * @class
 * @alias ExternalWindow
 * @hideconstructor
 */
class ExternalWindow extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['external-window', identity.uuid]);
        this.identity = identity;
        this.topic = 'external-window';
    }
    /**
     * Brings the external window to the front of the window stack.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.bringToFront
     */
    async bringToFront() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('bring-external-window-to-front', this.identity);
    }
    /**
     * Closes the external window.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.close
     */
    async close() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('close-external-window', this.identity);
        Object.setPrototypeOf(this, null);
    }
    /**
     * Flashes the external window’s frame and taskbar icon until stopFlashing is called.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.flash
     */
    async flash() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('flash-external-window', this.identity);
    }
    /**
     * Gives focus to the external window.
     * @return {Promise.<void>}
     * @emits ExternalWindow#focused
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.focus
     */
    async focus() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('focus-external-window', this.identity);
    }
    /**
     * Gets the current bounds (top, left, etc.) of the external window.
     * @return {Promise.<Bounds>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.getBounds
     */
    async getBounds() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-external-window-bounds', this.identity);
        return data;
    }
    /**
     * Retrieves an array containing wrapped external windows that are grouped
     * with this external window. If a window is not in a group an empty array
     * is returned.
     * @return {Promise.<Array<ExternalWindow|_Window>>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.getGroup
     */
    async getGroup() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-external-window-group', this.identity);
        if (!data.length) {
            return [];
        }
        return data.map(({ uuid, name, isExternalWindow }) => {
            if (isExternalWindow) {
                return new ExternalWindow(this.wire, { uuid });
            }
            return new window_1._Window(this.wire, { uuid, name });
        });
    }
    /**
     * Gets an information object for the window.
     * @return {Promise.<any>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.getInfo
     */
    async getInfo() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-external-window-info', this.identity);
        return data;
    }
    /**
     * Gets an external window's options.
     * @return {Promise.<any>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.getOptions
     */
    async getOptions() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-external-window-options', this.identity);
        return data;
    }
    /**
     * Gets the current state ("minimized", "maximized", or "restored") of
     * the external window.
     * @return {Promise.<string>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.getState
     */
    async getState() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-external-window-state', this.identity);
        return data;
    }
    /**
     * Hides the external window.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.hide
     */
    async hide() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('hide-external-window', this.identity);
    }
    /**
     * Determines if the external window is currently showing.
     * @return {Promise.<boolean>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.isShowing
     */
    async isShowing() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('is-external-window-showing', this.identity);
        return data;
    }
    /**
     * Joins the same window group as the specified window. Currently unsupported (method will nack).
     * @param { _Window | ExternalWindow } target The window whose group is to be joined
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.joinGroup
     */
    async joinGroup(target) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { identity: { uuid, name } } = target;
        const targetIdentity = { groupingUuid: uuid, groupingWindowName: name };
        const payload = { ...this.identity, ...targetIdentity };
        await this.wire.sendAction('join-external-window-group', payload);
    }
    /**
     * Leaves the current window group so that the window can be moved
     * independently of those in the group.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.leaveGroup
     */
    async leaveGroup() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('leave-external-window-group', this.identity);
    }
    /**
     * Maximizes the external window.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.maximize
     */
    async maximize() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('maximize-external-window', this.identity);
    }
    /**
     * Merges the instance's window group with the same window group as the specified window
     * @param { _Window | ExternalWindow } target The window whose group is to be merged with
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.mergeGroups
     */
    async mergeGroups(target) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const { identity: { uuid, name } } = target;
        const targetIdentity = { groupingUuid: uuid, groupingWindowName: name };
        const payload = { ...this.identity, ...targetIdentity };
        await this.wire.sendAction('merge-external-window-groups', payload);
    }
    /**
     * Minimizes the external window.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.minimize
     */
    async minimize() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('minimize-external-window', this.identity);
    }
    /**
     * Moves the external window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.moveBy
     */
    async moveBy(deltaLeft, deltaTop) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = { ...this.identity, deltaLeft, deltaTop };
        await this.wire.sendAction('move-external-window-by', payload);
    }
    /**
     * Moves the external window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.moveTo
     */
    async moveTo(left, top) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = { ...this.identity, left, top };
        await this.wire.sendAction('move-external-window', payload);
    }
    /**
     * Resizes the external window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left".
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.resizeBy
     */
    async resizeBy(deltaWidth, deltaHeight, anchor) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = {
            ...this.identity,
            anchor,
            deltaHeight: Math.floor(deltaHeight),
            deltaWidth: Math.floor(deltaWidth)
        };
        await this.wire.sendAction('resize-external-window-by', payload);
    }
    /**
     * Resizes the external window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left".
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.resizeTo
     */
    async resizeTo(width, height, anchor) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = {
            ...this.identity,
            anchor,
            height: Math.floor(height),
            width: Math.floor(width)
        };
        await this.wire.sendAction('resize-external-window', payload);
    }
    /**
     * Restores the external window to its normal state (i.e. unminimized, unmaximized).
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.restore
     */
    async restore() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('restore-external-window', this.identity);
    }
    /**
     * Will bring the external window to the front of the entire stack and
     * give it focus.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.setAsForeground
     */
    async setAsForeground() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('set-external-window-as-foreground', this.identity);
    }
    /**
     * Sets the external window's size and position.
     * @property { Bounds } bounds
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.setBounds
     */
    async setBounds(bounds) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = { ...this.identity, ...bounds };
        await this.wire.sendAction('set-external-window-bounds', payload);
    }
    /**
     * Shows the external window if it is hidden.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.show
     */
    async show() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('show-external-window', this.identity);
    }
    /**
     * Shows the external window, if it is hidden, at the specified location.
     * If the toggle parameter is set to true, the external window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.showAt
     */
    async showAt(left, top) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = {
            ...this.identity,
            left: Math.floor(left),
            top: Math.floor(top)
        };
        await this.wire.sendAction('show-external-window-at', payload);
    }
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.stopFlashing
     */
    async stopFlashing() {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        await this.wire.sendAction('stop-external-window-flashing', this.identity);
    }
    /**
     * Updates the external window using the passed options
     * @param {*} options Changes an external window's options
     * @return {Promise.<void>}
     * @experimental
     * @deprecated All External Window APIs will be removed by major version 22.
     * @tutorial Window.updateOptions
     */
    async updateOptions(options) {
        console.warn('Deprecation Warning: All External Window APIs will be removed by major version 22.');
        const payload = { ...this.identity, options };
        await this.wire.sendAction('update-external-window-options', payload);
    }
}
exports.ExternalWindow = ExternalWindow;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/external-window/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/external-window/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/external-window/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/external-window/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/fin.js":
/*!*****************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/fin.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
// Import from the file rather than the directory in case someone consuming types is using module resolution other than "node"
const index_1 = __webpack_require__(/*! ./system/index */ "./node_modules/openfin-adapter/src/api/system/index.js");
const index_2 = __webpack_require__(/*! ./window/index */ "./node_modules/openfin-adapter/src/api/window/index.js");
const index_3 = __webpack_require__(/*! ./application/index */ "./node_modules/openfin-adapter/src/api/application/index.js");
const index_4 = __webpack_require__(/*! ./interappbus/index */ "./node_modules/openfin-adapter/src/api/interappbus/index.js");
const index_5 = __webpack_require__(/*! ./notification/index */ "./node_modules/openfin-adapter/src/api/notification/index.js");
const index_6 = __webpack_require__(/*! ./clipboard/index */ "./node_modules/openfin-adapter/src/api/clipboard/index.js");
const index_7 = __webpack_require__(/*! ./external-application/index */ "./node_modules/openfin-adapter/src/api/external-application/index.js");
const index_8 = __webpack_require__(/*! ./external-window/index */ "./node_modules/openfin-adapter/src/api/external-window/index.js");
const index_9 = __webpack_require__(/*! ./frame/index */ "./node_modules/openfin-adapter/src/api/frame/index.js");
const index_10 = __webpack_require__(/*! ./global-hotkey/index */ "./node_modules/openfin-adapter/src/api/global-hotkey/index.js");
const index_11 = __webpack_require__(/*! ./view/index */ "./node_modules/openfin-adapter/src/api/view/index.js");
const index_12 = __webpack_require__(/*! ./platform/index */ "./node_modules/openfin-adapter/src/api/platform/index.js");
const me_1 = __webpack_require__(/*! ./me */ "./node_modules/openfin-adapter/src/api/me.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "./node_modules/openfin-adapter/src/transport/fin_store.js");
const interop_1 = __webpack_require__(/*! ./interop */ "./node_modules/openfin-adapter/src/api/interop/index.js");
const snapshot_source_1 = __webpack_require__(/*! ./snapshot-source */ "./node_modules/openfin-adapter/src/api/snapshot-source/index.js");
class Fin extends events_1.EventEmitter {
    constructor(wire) {
        super();
        fin_store_1.registerFin(wire, this);
        this.wire = wire;
        this.System = new index_1.default(wire);
        this.Window = new index_2.default(wire);
        this.Application = new index_3.default(wire);
        this.InterApplicationBus = new index_4.default(wire);
        this.Notification = new index_5.default(wire);
        this.Clipboard = new index_6.default(wire);
        this.ExternalApplication = new index_7.default(wire);
        this.ExternalWindow = new index_8.default(wire);
        this.Frame = new index_9.default(wire);
        this.GlobalHotkey = new index_10.default(wire);
        this.Platform = new index_12.default(wire, this.InterApplicationBus.Channel);
        this.View = new index_11.default(wire);
        this.Interop = new interop_1.default(wire);
        this.SnapshotSource = new snapshot_source_1.default(wire);
        this.me = me_1.getMe(wire);
        // Handle disconnect events
        wire.on('disconnected', () => {
            this.emit('disconnected');
        });
    }
}
exports["default"] = Fin;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/frame/Factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/frame/Factory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/frame/Instance.js");
/**
 * @lends Frame
 */
class _FrameModule extends base_1.Base {
    /**
     * Asynchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {Promise.<_Frame>}
     * @tutorial Frame.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('frame-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Synchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {_Frame}
     * @tutorial Frame.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('frame-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Asynchronously returns a reference to the current frame
     * @return {Promise.<_Frame>}
     * @tutorial Frame.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('frame-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity()));
    }
    /**
     * Synchronously returns a reference to the current frame
     * @return {_Frame}
     * @tutorial Frame.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('frame-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity());
    }
}
exports["default"] = _FrameModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/frame/Instance.js":
/*!****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/frame/Instance.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Frame = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * @classdesc
 * An iframe represents an embedded HTML page within a parent HTML page. Because this embedded page
 * has its own DOM and global JS context (which may or may not be linked to that of the parent depending
 * on if it is considered out of the root domain or not), it represents a unique endpoint as an OpenFin
 * connection. Iframes may be generated dynamically, or be present on initial page load and each non-CORS
 * iframe has the OpenFin API injected by default. It is possible to opt into cross-origin iframes having
 * the API by setting api.iframe.crossOriginInjection to true in a window's options. To block all iframes
 * from getting the API injected you can set api.frame.sameOriginInjection
 * to false <a href="Window.html#~options" target="_blank">(see Window~options)</a>.
 *
 * To be able to directly address this context for eventing and messaging purposes, it needs a
 * unique uuid name pairing. For OpenFin applications and windows this is provided via a configuration
 * object in the form of a manifest URL or options object, but there is no configuration object for iframes.
 * Just as a call to window.open outside of our Window API returns a new window with a random GUID assigned
 * for the name, each iframe that has the API injected will be assigned a GUID as its name, the UUID will be
 * the same as the parent window's.
 *
 * The fin.Frame namespace represents a way to interact with `iframes` and facilitates the discovery of current context
 * (iframe or main window) as well as the ability to listen for <a href="tutorial-Frame.EventEmitter.html">frame-specific events</a>.
 * @class
 * @alias Frame
 * @hideconstructor
 */
class _Frame extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['frame', identity.uuid, identity.name]);
        this.identity = identity;
    }
    /**
     * Adds the listener function to the end of the listeners array for the specified event type.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Returns a frame info object for the represented frame
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-frame-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns a frame info object representing the window that the referenced iframe is
     * currently embedded in
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getParentWindow
     */
    getParentWindow() {
        return this.wire.sendAction('get-parent-window', this.identity).then(({ payload }) => payload.data);
    }
}
exports._Frame = _Frame;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/frame/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/frame/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/frame/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/frame/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/global-hotkey/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/global-hotkey/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonHotkeyEvents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
var apiActions;
(function (apiActions) {
    apiActions["REGISTER"] = "global-hotkey-register";
    apiActions["UNREGISTER"] = "global-hotkey-unregister";
    apiActions["UNREGISTER_ALL"] = "global-hotkey-unregister-all";
    apiActions["IS_REGISTERED"] = "global-hotkey-is-registered";
})(apiActions || (apiActions = {}));
var nonHotkeyEvents;
(function (nonHotkeyEvents) {
    nonHotkeyEvents["REGISTERED"] = "registered";
    nonHotkeyEvents["UNREGISTERED"] = "unregistered";
})(nonHotkeyEvents = exports.nonHotkeyEvents || (exports.nonHotkeyEvents = {}));
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
class GlobalHotkey extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['global-hotkey']);
        this.topic = 'global-hotkey';
    }
    /**
     * Registers a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @param { Function } listener called when the registered hotkey is pressed by the user.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.register
     */
    async register(hotkey, listener) {
        await this.on(hotkey, listener);
        await this.wire.sendAction("global-hotkey-register" /* REGISTER */, { hotkey });
        return undefined;
    }
    /**
     * Unregisters a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregister
     */
    async unregister(hotkey) {
        await this.removeAllListeners(hotkey);
        await this.wire.sendAction("global-hotkey-unregister" /* UNREGISTER */, { hotkey });
        return undefined;
    }
    /**
     * Unregisters all global hotkeys for the current application.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregisterAll
     */
    async unregisterAll() {
        await Promise.all(this.eventNames()
            .filter((name) => !(name === "registered" /* REGISTERED */ || name === "unregistered" /* UNREGISTERED */))
            .map((name) => this.removeAllListeners(name)));
        await this.wire.sendAction("global-hotkey-unregister-all" /* UNREGISTER_ALL */, {});
        return undefined;
    }
    /**
     * Checks if a given hotkey has been registered
     * @param { string } hotkey a hotkey string
     * @return {Promise.<boolean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    async isRegistered(hotkey) {
        const { payload: { data } } = await this.wire.sendAction("global-hotkey-is-registered" /* IS_REGISTERED */, { hotkey });
        return data;
    }
}
exports["default"] = GlobalHotkey;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interappbus/channel/channel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interappbus/channel/channel.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelBase = exports.ProtectedItems = void 0;
const idOrResult = (func) => (...args) => {
    const res = func(...args);
    return res === undefined ? args[1] : res;
};
class ProtectedItems {
    constructor(providerIdentity, send) {
        this.providerIdentity = providerIdentity;
        this.sendRaw = send;
        this.send = async (to, action, payload) => {
            const raw = await send('send-channel-message', {
                ...to,
                providerIdentity: this.providerIdentity,
                action,
                payload
            }).catch((reason) => {
                throw new Error(reason.message);
            });
            return raw.payload.data.result;
        };
    }
}
exports.ProtectedItems = ProtectedItems;
class ChannelBase {
    constructor(providerIdentity, send, channelProtectedMap) {
        this.defaultSet = false;
        this.subscriptions = new Map();
        this.defaultAction = (action, payload, id) => {
            throw new Error(`No action registered at target for ${action}`);
        };
        // The items in ProtectedItems are only used by subclass, but not exposed to public.
        // Use this way to avoid a malicious site to access them directly.
        channelProtectedMap.set(this, new ProtectedItems(providerIdentity, send));
    }
    async processAction(action, payload, senderIdentity) {
        try {
            const mainAction = this.subscriptions.has(action)
                ? this.subscriptions.get(action)
                : (currentPayload, id) => this.defaultAction(action, currentPayload, id);
            const preActionProcessed = this.preAction ? await this.preAction(action, payload, senderIdentity) : payload;
            const actionProcessed = await mainAction(preActionProcessed, senderIdentity);
            return this.postAction ? await this.postAction(action, actionProcessed, senderIdentity) : actionProcessed;
        }
        catch (e) {
            if (this.errorMiddleware) {
                return this.errorMiddleware(action, e, senderIdentity);
            }
            throw e;
        }
    }
    beforeAction(func) {
        if (this.preAction) {
            throw new Error('Already registered beforeAction middleware');
        }
        this.preAction = idOrResult(func);
    }
    onError(func) {
        if (this.errorMiddleware) {
            throw new Error('Already registered error middleware');
        }
        this.errorMiddleware = func;
    }
    afterAction(func) {
        if (this.postAction) {
            throw new Error('Already registered afterAction middleware');
        }
        this.postAction = idOrResult(func);
    }
    remove(action) {
        this.subscriptions.delete(action);
    }
    setDefaultAction(func) {
        if (this.defaultSet) {
            throw new Error('default action can only be set once');
        }
        else {
            this.defaultAction = func;
            this.defaultSet = true;
        }
    }
    register(topic, listener) {
        if (this.subscriptions.has(topic)) {
            throw new Error(`Subscription already registered for action: ${topic}. Unsubscribe before adding new subscription`);
        }
        else {
            this.subscriptions.set(topic, listener);
            return true;
        }
    }
}
exports.ChannelBase = ChannelBase;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interappbus/channel/client.js":
/*!****************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interappbus/channel/client.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const channel_1 = __webpack_require__(/*! ./channel */ "./node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const clientProtectedMap = new WeakMap();
class ChannelClient extends channel_1.ChannelBase {
    constructor(routingInfo, send, clientMap) {
        super(routingInfo, send, clientProtectedMap);
        this.disconnectListener = () => undefined;
        this.clientMap = clientMap;
        this.endpointId = routingInfo.endpointId;
    }
    get providerIdentity() {
        const protectedObj = clientProtectedMap.get(this);
        return protectedObj.providerIdentity;
    }
    async dispatch(action, payload) {
        const protectedObj = clientProtectedMap.get(this);
        if (this.clientMap.get(this.endpointId)) {
            return protectedObj.send(protectedObj.providerIdentity, action, payload);
        }
        throw new Error('The client you are trying to dispatch from is disconnected from the target provider.');
    }
    onDisconnection(listener) {
        this.disconnectListener = (payload) => {
            try {
                listener(payload);
            }
            catch (err) {
                throw new Error(`Error while calling the onDisconnection callback: ${err.message}`);
            }
            finally {
                this.disconnectListener = () => undefined;
            }
        };
    }
    async disconnect() {
        const protectedObj = clientProtectedMap.get(this);
        const { channelName, uuid, name, channelId } = protectedObj.providerIdentity;
        await protectedObj.sendRaw('disconnect-from-channel', { channelName, uuid, name, endpointId: this.endpointId });
        this.removeChannel(channelId, this.endpointId);
    }
}
exports["default"] = ChannelClient;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interappbus/channel/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interappbus/channel/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const client_1 = __webpack_require__(/*! ./client */ "./node_modules/openfin-adapter/src/api/interappbus/channel/client.js");
const provider_1 = __webpack_require__(/*! ./provider */ "./node_modules/openfin-adapter/src/api/interappbus/channel/provider.js");
const base_1 = __webpack_require__(/*! ../../base */ "./node_modules/openfin-adapter/src/api/base.js");
class Channel extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['channel']);
        this.onmessage = (msg) => {
            if (msg.action === 'process-channel-message') {
                this.processChannelMessage(msg);
                return true;
            }
            if (msg.action === 'process-channel-connection') {
                this.processChannelConnection(msg);
                return true;
            }
            return false;
        };
        this.topic = 'channel';
        this.providerMap = new Map();
        this.clientMap = new Map();
        this.endpointIdMap = new Map();
        wire.registerMessageHandler(this.onmessage.bind(this));
    }
    async getAllChannels() {
        return this.wire.sendAction('get-all-channels').then(({ payload }) => payload.data);
    }
    async onChannelConnect(listener) {
        await this.on('connected', listener);
    }
    async onChannelDisconnect(listener) {
        await this.on('disconnected', listener);
    }
    async connect(channelName, options) {
        if (!channelName || typeof channelName !== 'string') {
            throw new Error('Please provide a channelName string to connect to a channel.');
        }
        const opts = options || {};
        let resolver;
        let listener;
        const waitResponse = new Promise((resolve) => {
            resolver = resolve;
            listener = (payload) => {
                if (channelName === payload.channelName) {
                    this.removeListener('connected', listener);
                    this.connect(channelName, opts).then((response) => {
                        resolve(response);
                    });
                }
            };
            this.on('connected', listener);
        });
        try {
            const { payload: { data: routingInfo } } = await this.wire.sendAction('connect-to-channel', { channelName, ...opts });
            // Required for backwards compatibility
            if (!routingInfo.endpointId) {
                routingInfo.endpointId = this.wire.environment.getNextMessageId();
                // For New Clients connecting to Old Providers. To prevent multi-dispatching and publishing, we delete previously-connected
                // clients that are in the same context as the newly-connected client.
                this.checkForPreviousClientConnection(routingInfo.channelId);
            }
            const { channelId, endpointId } = routingInfo;
            // If there isn't a matching channel, the above sendAction call will error out and go to catch, skipping the logic below
            if (resolver) {
                resolver();
            }
            this.removeListener('connected', listener);
            const channel = new client_1.default(routingInfo, this.wire.sendAction.bind(this.wire), this.clientMap);
            this.addChannelToClientMaps(channel, channelId, endpointId);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore use of protected property
            channel.removeChannel = this.removeChannelFromClientMaps.bind(this);
            this.on('disconnected', (eventPayload) => {
                if (eventPayload.channelName === channelName) {
                    this.removeChannelFromClientMaps(channelId, endpointId);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of private property
                    channel.disconnectListener(eventPayload);
                }
            });
            return channel;
        }
        catch (e) {
            const shouldWait = { wait: true, ...opts }.wait;
            const internalNackMessage = 'internal-nack';
            if (shouldWait && e.message && e.message.includes(internalNackMessage)) {
                console.warn(`Channel not found for channelName: ${channelName}, waiting for channel connection.`);
                return waitResponse;
            }
            if (e.message === internalNackMessage) {
                throw new Error(`No channel found for channelName: ${channelName}`);
            }
            else {
                throw new Error(e);
            }
        }
    }
    async create(channelName) {
        if (!channelName) {
            throw new Error('Please provide a channelName to create a channel');
        }
        const { payload: { data: providerIdentity } } = await this.wire.sendAction('create-channel', { channelName });
        const channel = new provider_1.ChannelProvider(providerIdentity, this.wire.sendAction.bind(this.wire));
        const key = providerIdentity.channelId;
        this.providerMap.set(key, channel);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore use of protected property
        channel.removeChannel = this.removeChannelFromProviderMap.bind(this);
        this.on('client-disconnected', (eventPayload) => {
            if (eventPayload.channelName === channelName) {
                let remainingConnections = channel.connections.filter((identity) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of non-existed property
                    return identity.endpointId === undefined || identity.endpointId !== eventPayload.endpointId;
                });
                if (remainingConnections.length === channel.connections.length) {
                    remainingConnections = channel.connections.filter((identity) => {
                        return identity.uuid !== eventPayload.uuid || identity.name !== eventPayload.name;
                    });
                }
                channel.connections = remainingConnections;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore use of private property
                channel.disconnectListener(eventPayload);
            }
        });
        return channel;
    }
    addChannelToClientMaps(channel, channelId, endpointId) {
        this.clientMap.set(endpointId, channel);
        this.endpointIdMap.set(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`, endpointId);
    }
    removeChannelFromClientMaps(channelId, endpointId) {
        this.clientMap.delete(endpointId);
        this.endpointIdMap.delete(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
    }
    removeChannelFromProviderMap(channelId) {
        this.providerMap.delete(channelId);
    }
    checkForPreviousClientConnection(channelId) {
        const endpointIdFromPreviousConnection = this.endpointIdMap.get(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
        if (endpointIdFromPreviousConnection) {
            this.removeChannelFromClientMaps(channelId, endpointIdFromPreviousConnection);
            console.warn('You have created a second connection to an older provider. First connection has been removed from the clientMap');
            console.warn('If the provider calls publish(), you may receive multiple messages.');
        }
    }
    async processChannelMessage(msg) {
        const { senderIdentity, providerIdentity, action, ackToSender, payload, intendedTargetIdentity } = msg.payload;
        let key;
        let bus;
        // If the sender is the client
        if (intendedTargetIdentity.channelId) {
            key = intendedTargetIdentity.channelId;
            bus = this.providerMap.get(key);
        }
        else if (intendedTargetIdentity.endpointId) {
            // If the sender is the provider
            key = intendedTargetIdentity.endpointId;
            bus = this.clientMap.get(key);
        }
        else {
            key = this.endpointIdMap.get(`${providerIdentity.channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
            bus = this.clientMap.get(key);
        }
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} no longer connected.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            const res = await bus.processAction(action, payload, senderIdentity);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            ackToSender.payload.payload.result = res;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
    async processChannelConnection(msg) {
        const { clientIdentity, providerIdentity, ackToSender, payload } = msg.payload;
        const key = providerIdentity.channelId;
        const bus = this.providerMap.get(key);
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Channel "${providerIdentity.channelName}" has been destroyed.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            if (!(bus instanceof provider_1.ChannelProvider)) {
                throw Error('Cannot connect to a channel client');
            }
            const res = await bus.processConnection(clientIdentity, payload);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            ackToSender.payload.payload.result = res;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
}
exports.Channel = Channel;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interappbus/channel/provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interappbus/channel/provider.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelProvider = void 0;
const channel_1 = __webpack_require__(/*! ./channel */ "./node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const runtimeVersioning_1 = __webpack_require__(/*! ../../../util/runtimeVersioning */ "./node_modules/openfin-adapter/src/util/runtimeVersioning.js");
const providerProtectedMap = new WeakMap();
class ChannelProvider extends channel_1.ChannelBase {
    constructor(providerIdentity, send) {
        super(providerIdentity, send, providerProtectedMap);
        this.connectListener = () => undefined;
        this.disconnectListener = () => undefined;
        this.connections = [];
    }
    dispatch(to, action, payload) {
        if (!ChannelProvider.clientIdentityIncludesEndpointId(to)) {
            this.checkForMultipleClients(to, action);
        }
        if (this.isClientConnected(to)) {
            return providerProtectedMap.get(this).send(to, action, payload);
        }
        return Promise.reject(new Error(`The client you are trying to dispatch to is disconnected from this provider.
                {uuid: ${to.uuid}, name: ${to.name}}`));
    }
    async processAction(action, payload, senderIdentity) {
        if (ChannelProvider.clientIsMultiRuntime(senderIdentity) &&
            !runtimeVersioning_1.runtimeUuidMeetsMinimumRuntimeVersion(senderIdentity.runtimeUuid, '18.87.56.0')) {
            this.handleMultiRuntimeLegacyClient(senderIdentity);
        }
        else {
            this.checkForClientConnection(senderIdentity);
        }
        return super.processAction(action, payload, senderIdentity);
    }
    async processConnection(senderId, payload) {
        this.connections.push(senderId);
        return this.connectListener(senderId, payload);
    }
    publish(action, payload) {
        return this.connections.map((to) => providerProtectedMap.get(this).send(to, action, payload));
    }
    onConnection(listener) {
        this.connectListener = listener;
    }
    onDisconnection(listener) {
        this.disconnectListener = listener;
    }
    async destroy() {
        const protectedObj = providerProtectedMap.get(this);
        const { channelName, channelId } = protectedObj.providerIdentity;
        this.connections = [];
        await protectedObj.sendRaw('destroy-channel', { channelName });
        this.removeChannel(channelId);
    }
    checkForClientConnection(clientIdentity) {
        if (!this.isClientConnected(clientIdentity)) {
            throw new Error(`This action was sent from a client that is not connected to the provider.
                    Client Identity: {uuid: ${clientIdentity.uuid}, name: ${clientIdentity.name}, endpointId: ${clientIdentity.endpointId}}`);
        }
    }
    isClientConnected(clientIdentity) {
        if (ChannelProvider.clientIdentityIncludesEndpointId(clientIdentity)) {
            return this.connections.some((identity) => {
                return (
                // Might be redundant to check for uuid and name here after we get an endpointId match, but just in case
                identity.endpointId === clientIdentity.endpointId &&
                    identity.uuid === clientIdentity.uuid &&
                    identity.name === clientIdentity.name);
            });
        }
        return this.isLegacyClientConnected(clientIdentity);
    }
    isLegacyClientConnected(clientIdentity) {
        return this.connections.some((identity) => {
            return identity.uuid === clientIdentity.uuid && identity.name === clientIdentity.name;
        });
    }
    handleMultiRuntimeLegacyClient(senderIdentity) {
        if (!this.isLegacyClientConnected(senderIdentity)) {
            throw new Error(`This action was sent from a client that is not connected to the provider. Client Identity:
                    {uuid: ${senderIdentity.uuid}, name: ${senderIdentity.name}, endpointId: ${senderIdentity.endpointId}}`);
        }
    }
    checkForMultipleClients(clientIdentity, action) {
        let count = 0;
        this.connections.forEach((c) => {
            if (c.name === clientIdentity.name && c.uuid === clientIdentity.uuid) {
                count += 1;
            }
        });
        if (count >= 2) {
            const protectedObj = providerProtectedMap.get(this);
            const { uuid, name } = clientIdentity;
            const providerUuid = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.uuid;
            const providerName = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.name;
            // eslint-disable-next-line no-console
            console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the
                "endpointId" parameter. The identity you are dispatching to ({uuid: ${uuid}, name: ${name}})
                has multiple channelClients for this channel. Your dispatched action: (${action}) from the provider:
                ({uuid: ${providerUuid}, name: ${providerName}}) will only be processed by the most recently-created client.`);
        }
    }
    // eslint-disable-next-line class-methods-use-this
    static clientIdentityIncludesEndpointId(subscriptionIdentity) {
        return subscriptionIdentity.endpointId !== undefined;
    }
    // eslint-disable-next-line class-methods-use-this
    static clientIsMultiRuntime(subscriptionIdentity) {
        return subscriptionIdentity.runtimeUuid !== undefined;
    }
}
exports.ChannelProvider = ChannelProvider;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interappbus/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interappbus/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterAppPayload = void 0;
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const ref_counter_1 = __webpack_require__(/*! ../../util/ref-counter */ "./node_modules/openfin-adapter/src/util/ref-counter.js");
const index_1 = __webpack_require__(/*! ./channel/index */ "./node_modules/openfin-adapter/src/api/interappbus/channel/index.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
/**
 * A messaging bus that allows for pub/sub messaging between different applications.
 * @namespace
 */
class InterApplicationBus extends base_1.Base {
    constructor(wire) {
        super(wire);
        this.events = {
            subscriberAdded: 'subscriber-added',
            subscriberRemoved: 'subscriber-removed'
        };
        this.refCounter = new ref_counter_1.default();
        this.Channel = new index_1.Channel(wire);
        this.emitter = new events_1.EventEmitter();
        wire.registerMessageHandler(this.onmessage.bind(this));
        this.on = this.emitter.on.bind(this.emitter);
        this.removeAllListeners = this.emitter.removeAllListeners.bind(this.emitter);
    }
    /**
     * Publishes a message to all applications running on OpenFin Runtime that
     * are subscribed to the specified topic.
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be published. Can be either a primitive
     * data type (string, number, or boolean) or composite data type (object, array)
     * that is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.publish
     */
    publish(topic, message) {
        return this.wire
            .sendAction('publish-message', {
            topic,
            message,
            sourceWindowName: this.me.name
        })
            .then(() => undefined);
    }
    /**
     * Sends a message to a specific application on a specific topic.
     * @param { Identity } destination The identity of the application to which the message is sent
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be sent. Can be either a primitive data
     * type (string, number, or boolean) or composite data type (object, array) that
     * is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.send
     */
    async send(destination, topic, message) {
        const errorMsg = validate_1.validateIdentity(destination);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        await this.wire.sendAction('send-message', {
            destinationUuid: destination.uuid,
            destinationWindowName: destination.name,
            topic,
            message,
            sourceWindowName: this.me.name
        });
    }
    /**
     * Subscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A function that is called when a message has
     * been received. It is passed the message, uuid and name of the sending application.
     * The message can be either a primitive data type (string, number, or boolean) or
     * composite data type (object, array) that is composed of other primitive or composite
     * data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.subscribe
     */
    subscribe(source, topic, listener) {
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendSubscription = () => {
            return this.wire.sendAction('subscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
                topic,
                destinationWindowName: this.me.name
            });
        };
        const alreadySubscribed = () => {
            return Promise.resolve();
        };
        this.emitter.on(subKey, listener);
        return this.refCounter.actOnFirst(subKey, sendSubscription, alreadySubscribed);
    }
    /**
     * Unsubscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A callback previously registered with subscribe()
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.unsubscribe
     */
    unsubscribe(source, topic, listener) {
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendUnsubscription = () => {
            return this.wire.sendAction('unsubscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
                topic,
                destinationWindowName: this.me.name
            });
        };
        const dontSendUnsubscription = () => {
            return new Promise((r) => r).then(() => undefined);
        };
        this.emitter.removeListener(subKey, listener);
        return this.refCounter.actOnLast(subKey, sendUnsubscription, dontSendUnsubscription);
    }
    processMessage(message) {
        const { payload: { message: payloadMessage, sourceWindowName, sourceUuid, topic } } = message;
        const keys = [
            this.createSubscriptionKey(sourceUuid, sourceWindowName, topic),
            this.createSubscriptionKey(sourceUuid, '*', topic),
            this.createSubscriptionKey('*', '*', topic)
        ];
        const idOfSender = { uuid: sourceUuid, name: sourceWindowName };
        keys.forEach((key) => {
            this.emitter.emit(key, payloadMessage, idOfSender);
        });
    }
    emitSubscriverEvent(type, message) {
        const { payload: { targetName: name, uuid, topic } } = message;
        const payload = { name, uuid, topic };
        this.emitter.emit(type, payload);
    }
    // eslint-disable-next-line class-methods-use-this
    createSubscriptionKey(uuid, name, topic) {
        const n = name || '*';
        if (!(uuid && n && topic)) {
            throw new Error('Missing uuid, name, or topic string');
        }
        return createKey(uuid, n, topic);
    }
    onmessage(message) {
        const { action } = message;
        switch (action) {
            case 'process-message':
                this.processMessage(message);
                break;
            case this.events.subscriberAdded:
                this.emitSubscriverEvent(this.events.subscriberAdded, message);
                break;
            case this.events.subscriberRemoved:
                this.emitSubscriverEvent(this.events.subscriberRemoved, message);
                break;
            default:
                break;
        }
        return true;
    }
}
exports["default"] = InterApplicationBus;
class InterAppPayload {
}
exports.InterAppPayload = InterAppPayload;
function createKey(...toHash) {
    return toHash
        .map((item) => {
        return Buffer.from(`${item}`).toString('base64');
    })
        .join('/');
}


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/Factory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/Factory.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const InteropBroker_1 = __webpack_require__(/*! ./InteropBroker */ "./node_modules/openfin-adapter/src/api/interop/InteropBroker.js");
const InteropClient_1 = __webpack_require__(/*! ./InteropClient */ "./node_modules/openfin-adapter/src/api/interop/InteropClient.js");
const defaultOverride = (Class, ...args) => new Class(...args);
/**
 * @typedef { object } InteropConfig
 * @summary Information relevant to the Interop Broker.
 * @property {string} [currentContextGroup] Context Group for the client. (green, yellow, red, etc.)
 * @property {string} [providerId] When provided, automatically connects the client to the specified provider uuid
 */
/**
 * Manages creation of Interop Brokers and Interop Clients. These APIs are called under-the-hood in Platforms.
 * @namespace
 * @alias Interop
 */
class InteropModule extends base_1.Base {
    /**
     * Initializes an Interop Broker. This is called under-the-hood for Platforms.
     * @param { string } name - Name of the Interop Broker.
     * @param { OverrideCallback<InteropBroker> } [override] - A callback function that can be used to extend or replace default Interop Broker behavior.
     * @return {Promise.<InteropBroker>}
     * @tutorial Interop.init
     * @experimental
     * @static
     */
    async init(name, override = defaultOverride) {
        this.wire.sendAction('interop-init').catch((e) => {
            // don't expose, analytics-only call
        });
        const provider = await this.fin.InterApplicationBus.Channel.create(`interop-broker-${name}`);
        // Allows for manifest-level configuration, without having to override. (e.g. specifying custom context groups)
        const options = await this.fin.Application.getCurrentSync().getInfo();
        return override(InteropBroker_1.InteropBroker, this.wire, provider, options.initialOptions.interopBrokerConfiguration || {});
    }
    /**
     * Connects a client to an Interop broker. This is called under-the-hood for Views in a Platform.
     * @param { string } name - The name of the Interop Broker to connect to. For Platforms, this will default to the uuid of the Platform.
     * @param { InteropConfig } [interopConfig] - Information relevant to the Interop Broker. Typically a declaration of
     * what context(s) the entity wants to subscribe to, and the current Context Group of the entity.
     * @return {InteropClient}
     * @tutorial Interop.connectSync
     * @experimental
     * @static
     */
    connectSync(name, interopConfig) {
        this.wire.sendAction('interop-connect-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new InteropClient_1.InteropClient(this.wire, name, interopConfig);
    }
}
exports["default"] = InteropModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/InteropBroker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/InteropBroker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropBroker = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupBroker_1 = __webpack_require__(/*! ./SessionContextGroupBroker */ "./node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/openfin-adapter/src/api/interop/utils.js");
let contextGroups = [
    {
        id: 'green',
        displayMetadata: {
            color: '#00CC88',
            name: 'green'
        }
    },
    {
        id: 'purple',
        displayMetadata: {
            color: '#8C61FF',
            name: 'purple'
        }
    },
    {
        id: 'orange',
        displayMetadata: {
            color: '#FF8C4C',
            name: 'orange'
        }
    },
    {
        id: 'red',
        displayMetadata: {
            color: '#FF5E60',
            name: 'red'
        }
    },
    {
        id: 'pink',
        displayMetadata: {
            color: '#FF8FB8',
            name: 'pink'
        }
    },
    {
        id: 'yellow',
        displayMetadata: {
            color: '#E9FF8F',
            name: 'yellow'
        }
    }
];
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Broker is responsible for keeping track of the Interop state of the Platform, and for directing messages to the proper locations.
 *
 * ---
 *
 * There are 2 ways to inject custom functionality into the Interop Broker:
 *
 * **1. Configuration**
 *
 * At the moment, you can configure the default context groups for the Interop Broker without having to override it. To do so, include the `interopBrokerConfiguration` `contextGroups` option in your `platform` options in your manifest. This is the preferred method.
 * ```js
 * {
 *      "runtime": {
 *          "arguments": "--v=1 --inspect",
 *          "version": "alpha-v19"
 *      },
 *      "platform": {
 *          "uuid": "platform_customization_local",
 *          "applicationIcon": "https://openfin.github.io/golden-prototype/favicon.ico",
 *          "autoShow": false,
 *          "providerUrl": "http://localhost:5555/provider.html",
 *          "interopBrokerConfiguration": {
 *              "contextGroups": [
 *                  {
 *                      "id": "green",
 *                      "displayMetadata": {
 *                          "color": "#00CC88",
 *                          "name": "green"
 *                      }
 *                  },
 *                  {
 *                      "id": "purple",
 *                      "displayMetadata": {
 *                          "color": "#8C61FF",
 *                          "name": "purple"
 *                      }
 *                  },
 *              ]
 *          }
 *      }
 * }
 * ```
 *
 * ---
 * **2. Overriding**
 *
 * Similarly to how [Platform Overriding]{@link https://developers.openfin.co/docs/platform-customization#section-customizing-platform-behavior} works, you can override functions in the Interop Broker in `fin.Platform.init`. An example of that is shown below. Overriding `isConnectionAuthorized` and `isActionAuthorized` will allow you to control allowed connections and allowed actions.
 *
 * However, if there is custom functionality you wish to include in the Interop Broker, please let us know. We would like to provide better configuration options so that you don't have to continually maintain your own override code.
 *
 * ```js
 * fin.Platform.init({
 *     overrideCallback: async (Provider) => {
 *         class Override extends Provider {
 *             async getSnapshot() {
 *                 console.log('before getSnapshot')
 *                 const snapshot = await super.getSnapshot();
 *                 console.log('after getSnapshot')
 *                 return snapshot;
 *             }
 *
 *             async applySnapshot({ snapshot, options }) {
 *                 console.log('before applySnapshot')
 *                 const originalPromise = super.applySnapshot({ snapshot, options });
 *                 console.log('after applySnapshot')
 *
 *                 return originalPromise;
 *             }
 *         };
 *         return new Override();
 *     },
 *     interopOverride: async (InteropBroker, provider, options, ...args) => {
 *         class Override extends InteropBroker {
 *             async joinContextGroup(channelName = 'default', target) {
 *                 console.log('before super joinContextGroup')
 *                 super.joinContextGroup(channelName, target);
 *                 console.log('after super joinContextGroup')
 *             }
 *         }
 *
 *         options.systemChannels = [
 *             {
 *                 id: 'green',
 *                 displayMetadata: {
 *                     color: '#00CC88',
 *                     name: 'green'
 *                 }
 *             },
 *             {
 *                 id: 'purple',
 *                 displayMetadata: {
 *                     color: '#8C61FF',
 *                     name: 'purple'
 *                 }
 *             },
 *             {
 *                 id: 'orange',
 *                 displayMetadata: {
 *                     color: '#FF8C4C',
 *                     name: 'orange'
 *                 }
 *             },
 *             {
 *                 id: 'red',
 *                 displayMetadata: {
 *                     color: '#FF5E60',
 *                     name: 'red'
 *                 }
 *             }
 *         ];
 *       return new Override(provider, options, ...args);
 *   }
 * });
 * ```
 *
 * ---
 *
 * @hideconstructor
 * @class
 */
class InteropBroker extends base_1.Base {
    constructor(wire, channel, options) {
        super(wire);
        this.channel = channel;
        this.interopClients = new Map();
        this.contextGroupsById = new Map();
        if (options.contextGroups) {
            contextGroups = options.contextGroups;
        }
        this.intentClientMap = new Map();
        this.lastContextMap = new Map();
        this.sessionContextGroupMap = new Map();
        this.setContextGroupMap();
        this.wireChannel(channel);
    }
    /*
    Client API
    */
    /**
     * SetContextOptions interface
     * @typedef { object } SetContextOptions
     * @property { Context } {context} - New context to set.
     */
    /**
     * GetContextOptions interface
     * @typedef { object } GetContextOptions
     * @property { string } [contextType] - Context Type
     */
    /**
     * JoinContextGroupOptions interface
     * @typedef { object } JoinContextGroupOptions
     * @property { string } contextGroupId - Id of the context group.
     * @property { Identity | ClientIdentity } [target] - Identity of the entity you wish to join to a context group.
     */
    /**
     * AddClientToContextGroupOptions interface
     * @typedef { object } AddClientToContextGroupOptions
     * @property { string } contextGroupId - Name of the context group.
     */
    /**
     * RemoveFromContextGroupOptions interface
     * @typedef { object } RemoveFromContextGroupOptions
     * @property { Identity | ClientIdentity } target - Identity of the entity you wish to join to a context group.
     */
    /**
     * GetInfoForContextGroupOptions interface
     * @typedef { object } GetInfoForContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * GetAllClientsInContextGroupOptions interface
     * @typedef { object } GetAllClientsInContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * InfoForIntentOptions interface
     * @typedef { object } InfoForIntentOptions
     * @property { string } name Name of the intent to get info for.
     * @property { Context } [context] Optional context.
     */
    /**
     * Sets a context for the context group of the incoming current entity.
     * @param { SetContextOptions } setContextOptions - New context to set.
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { void }
     * @experimental
     */
    setContext({ context }, clientIdentity) {
        this.wire.sendAction('interop-broker-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            if (!this.contextGroupsById.has(contextGroupId)) {
                // Theoretically not possible.
                throw new Error(`Client has a context group that isn't in the context group mapping: ${contextGroupId}.`);
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const contextGroupState = this.contextGroupsById.get(contextGroupId);
            const broadcastedContextType = context.type;
            contextGroupState.set(broadcastedContextType, context);
            this.lastContextMap.set(contextGroupId, broadcastedContextType);
            const clientsInSameContextGroup = Array.from(this.interopClients.values()).filter((connectedClient) => connectedClient.contextGroupId === contextGroupId);
            clientsInSameContextGroup.forEach((client) => {
                for (const [, handlerInfo] of client.contextHandlers) {
                    if (InteropBroker.isContextTypeCompatible(broadcastedContextType, handlerInfo.contextType)) {
                        this.invokeContextHandler(client.clientIdentity, handlerInfo.handlerId, context);
                    }
                }
            });
        }
        else if (clientState) {
            // Client has not joined any context group behavior.
            throw new Error('You must join a context group before you can set context.');
        }
        else {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
    }
    /**
     * Get current context for a client subscribed to a Context Group.
     * @param { GetContextOptions } getContextOptions - Options for getting context
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { Context }
     */
    getCurrentContext(getCurrentContextOptions, clientIdentity) {
        var _a;
        this.wire.sendAction('interop-broker-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (!(clientState === null || clientState === void 0 ? void 0 : clientState.contextGroupId)) {
            throw new Error('You must be a member of a context group to call getCurrentContext');
        }
        const { contextGroupId } = clientState;
        const contextGroupState = this.contextGroupsById.get(contextGroupId);
        const lastContextType = this.lastContextMap.get(contextGroupId);
        const contextType = (_a = getCurrentContextOptions === null || getCurrentContextOptions === void 0 ? void 0 : getCurrentContextOptions.contextType) !== null && _a !== void 0 ? _a : lastContextType;
        return contextGroupState && contextType ? contextGroupState.get(contextType) : undefined;
    }
    /*
    Platform Window APIs
    */
    // joinContextGroup and addClientToContextGroup are separate functions here, for easier overrides and separation of concerns.
    // joinContextGroup checks all connections for matching identities, in case we have multiple connection from an entity.
    /**
     * Join all connections at the given identity (or just one if endpointId provided) to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * joinContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#addClientToContextGroup InteropBroker.addClientToContextGroup} to actually group the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { JoinContextGroupOptions } joinContextGroupOptions - Id of the Context Group and identity of the entity to join to the group.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async joinContextGroup({ contextGroupId, target }, senderIdentity) {
        this.wire.sendAction('interop-broker-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.addClientToContextGroup({ contextGroupId }, target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`Given Identity ${target.uuid} ${target.name} is not connected to the Interop Broker.`);
            }
            if (allConnections.length > 1) {
                // Should figure out how we want to handle this situation. In the meantime, just change context group for all connections.
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.addClientToContextGroup({ contextGroupId }, connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, add the sender to the context group.
            await this.addClientToContextGroup({ contextGroupId }, senderIdentity);
        }
    }
    // addClientToContextGroup does the actual addition of the client to the Context Group
    /**
     * Helper function for {@link InteropBroker#joinContextGroup InteropBroker.joinContextGroup}. Does the work of actually adding the client to the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { AddClientToContextGroupOptions } addClientToContextGroupOptions - Contains the contextGroupId
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async addClientToContextGroup({ contextGroupId }, clientIdentity) {
        this.wire.sendAction('interop-broker-add-client-to-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (!this.getContextGroups().find((contextGroupInfo) => contextGroupInfo.id === contextGroupId)) {
            throw new Error(`Attempting to join a context group that does not exist: ${contextGroupId}. You may only join existing context groups.`);
        }
        const oldContextGroupId = clientSubscriptionState.contextGroupId;
        if (oldContextGroupId !== contextGroupId) {
            clientSubscriptionState.contextGroupId = contextGroupId;
            await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId);
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            for (const [, handlerInfo] of clientSubscriptionState.contextHandlers) {
                const { contextType, handlerId } = handlerInfo;
                if (contextType === undefined) {
                    // Send this single handler all of the context, because it accepts all.
                    contextGroupMap.forEach((context, _) => {
                        this.invokeContextHandler(clientIdentity, handlerId, context);
                    });
                }
                else if (contextGroupMap.has(contextType)) {
                    const contextForType = contextGroupMap.get(contextType);
                    if (contextForType) {
                        this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                    }
                }
            }
        }
    }
    // Removes the target from its context group. Similar structure to joinContextGroup.
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * removeFromContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#removeClientFromContextGroup InteropBroker.removeClientFromContextGroup} to actually ungroup the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { RemoveFromContextGroupOptions } removeFromContextGroupOptions - Contains the target identity to remove.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async removeFromContextGroup({ target }, senderIdentity) {
        this.wire.sendAction('interop-broker-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.removeClientFromContextGroup(target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`No connection found for given Identity ${target.uuid} ${target.name}`);
            }
            if (allConnections.length > 1) {
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.removeClientFromContextGroup(connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, remove the sender from the context group.
            await this.removeClientFromContextGroup(senderIdentity);
        }
    }
    // removeClientFromContextGroup does the actual remove of the client from the Context Group
    /**
     * Helper function for {@link InteropBroker#removeFromContextGroup InteropBroker.removeFromContextGroup}. Does the work of actually removing the client from the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @property { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async removeClientFromContextGroup(clientIdentity) {
        this.wire.sendAction('interop-broker-remove-client-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextGroupId = undefined;
        }
        await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, null);
    }
    // Used by platform windows to know what client groups the provider has declared. Also used internally to access context groups. Overrideable so that the platform developer can modify it.
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join. Because this function is used in the rest of the Interop Broker to fetch the Context Groups, overriding this allows you to customize the Context Groups for the Interop Broker. However, we recommend customizing the context groups through configuration instead.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    getContextGroups() {
        this.wire.sendAction('interop-broker-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        // Create copy for immutability
        return contextGroups.map((contextGroup) => {
            return { ...contextGroup };
        });
    }
    // Used to by platform windows to get display metadata for a context group.
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { GetInfoForContextGroupOptions } getInfoForContextGroupOptions - Contains contextGroupId, the context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @experimental
     */
    getInfoForContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.getContextGroups().find((contextGroup) => contextGroup.id === contextGroupId);
    }
    // Used by platform windows to get all clients for a context group.
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { GetAllClientsInContextGroupOptions } getAllClientsInContextGroupOptions - Contains contextGroupId, the context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @experimental
     */
    getAllClientsInContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientsInContextGroup = Array.from(this.interopClients.values())
            .filter((connectedClient) => connectedClient.contextGroupId === contextGroupId)
            .map((subscriptionState) => {
            return subscriptionState.clientIdentity;
        });
        return clientsInContextGroup;
    }
    /**
     * Responsible for launching of applications that can handle a given intent, and delegation of intents to those applications.
     * Must be overridden.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntent(intent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntent', 'fdc3.raiseIntent', 'InteropBroker.handleFiredIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntent);
    }
    /**
     * Should be called in {@link InteropBroker#handleFiredIntent InteropBroker.handleFiredIntent}.
     * While handleFiredIntent is responsible for launching applications, setIntentTarget is used to tell the InteropBroker which application should receive the intent when it is ready.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { Identity } target - Identity of the target that will handle the intent.
     * @return { Promise<void> }
     * @experimental
     */
    async setIntentTarget(intent, target) {
        this.wire.sendAction('interop-broker-set-intent-target').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const targetInfo = this.intentClientMap.get(target.name);
        const handlerId = `intent-handler-${intent.name}`;
        if (!targetInfo) {
            this.intentClientMap.set(target.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(target.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
        }
        else {
            const handlerInfo = targetInfo.get(handlerId);
            if (!handlerInfo) {
                targetInfo.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
            else {
                handlerInfo.pendingIntents.push(intent);
                if (handlerInfo.clientIdentity && handlerInfo.isReady) {
                    const { clientIdentity, pendingIntents } = handlerInfo;
                    try {
                        const intentToSend = pendingIntents[pendingIntents.length - 1];
                        await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                        handlerInfo.pendingIntents = [];
                    }
                    catch (error) {
                        console.error(`Error invoking intent handler for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
                        handlerInfo.isReady = false;
                    }
                }
            }
        }
    }
    /**
     * Responsible for returning information on a particular Intent.
     * Must be overridden.
     * @param { InfoForIntentOptions } infoForIntentOptions
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntent(options, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntent', 'fdc3.findIntent', 'InteropBroker.handleInfoForIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntent);
    }
    /**
     * Responsible for returning information on which Intents are meant to handle a specific Context.
     * Must be overridden.
     * @param { Context } context Data passed between entities and applications.
     * @param { ClientIdentity } clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntentsByContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntentsByContext(context, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntentsByContext', 'fdc3.findIntentsByContext', 'InteropBroker.handleInfoForIntentsByContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntentsByContext);
    }
    /**
     * Responsible for resolving an Intent based on a specific Context.
     * Must be overridden.
     * @param { ContextForIntent } contextForIntent Data passed between entities and applications.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntentForContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntentForContext(contextForIntent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntentForContext', 'fdc3.raiseIntentForContext', 'InteropBroker.handleFiredIntentForContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntentForContext);
    }
    /*
    Snapshot APIs
    */
    // Used to save interop broker state in snapshots
    decorateSnapshot(snapshot) {
        return { ...snapshot, interopSnapshotDetails: { contextGroupStates: this.getContextGroupStates() } };
    }
    // Used to restore interop broker state in snapshots.
    applySnapshot(snapshot, options) {
        var _a;
        const contextGroupStates = (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.interopSnapshotDetails) === null || _a === void 0 ? void 0 : _a.contextGroupStates;
        if (contextGroupStates) {
            if (!(options === null || options === void 0 ? void 0 : options.closeExistingWindows)) {
                this.updateExistingClients(contextGroupStates);
            }
            this.rehydrateContextGroupStates(contextGroupStates);
        }
    }
    updateExistingClients(contextGroupStates) {
        const clients = this.interopClients;
        clients.forEach((subState) => {
            const { clientIdentity, contextGroupId, contextHandlers } = subState;
            if (contextGroupId) {
                const groupContexts = contextGroupStates[contextGroupId];
                for (const [, context] of Object.entries(groupContexts)) {
                    contextHandlers.forEach((contextHandler) => {
                        const { handlerId, contextType } = contextHandler;
                        if (InteropBroker.isContextTypeCompatible(context.type, contextType)) {
                            this.invokeContextHandler(clientIdentity, handlerId, context);
                        }
                    });
                }
            }
        });
    }
    // Used to store context group state in snapshots
    getContextGroupStates() {
        return InteropBroker.toObject(this.contextGroupsById);
    }
    // Used to rehydrate the context state from a snapshot
    rehydrateContextGroupStates(incomingContextGroupStates) {
        const contextGroupStates = Object.entries(incomingContextGroupStates);
        for (const [contextGroupId, contexts] of contextGroupStates) {
            const contextObjects = Object.entries(contexts);
            for (const [contextType, context] of contextObjects) {
                if (this.contextGroupsById.has(contextGroupId)) {
                    const currentContextGroupState = this.contextGroupsById.get(contextGroupId);
                    currentContextGroupState.set(contextType, context);
                }
                else {
                    // This logic will change when dynamic context group creation comes in.
                    console.warn(`Attempting to set a context group that isn't in the context group mapping. Skipping context group rehydration for: ${contextGroupId}`);
                }
            }
        }
    }
    /*
    Internal Context Handler APIs
    */
    // Used to give context to a client that has registered their context handler
    contextHandlerRegistered({ contextType, handlerId }, clientIdentity) {
        const handlerInfo = { contextType, handlerId };
        const clientState = this.getClientState(clientIdentity);
        clientState === null || clientState === void 0 ? void 0 : clientState.contextHandlers.set(handlerId, handlerInfo);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            if (contextType === undefined) {
                // Send this single handler all of the context, because it accepts all.
                contextGroupMap.forEach((context, _) => {
                    this.invokeContextHandler(clientIdentity, handlerId, context);
                });
            }
            else if (contextGroupMap.has(contextType)) {
                const contextForType = contextGroupMap.get(contextType);
                if (contextForType) {
                    this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                }
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async intentHandlerRegistered(payload, clientIdentity) {
        const { handlerId } = payload;
        const clientIntentInfo = this.intentClientMap.get(clientIdentity.name);
        const handlerInfo = clientIntentInfo === null || clientIntentInfo === void 0 ? void 0 : clientIntentInfo.get(handlerId);
        if (!clientIntentInfo) {
            this.intentClientMap.set(clientIdentity.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(clientIdentity.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
            }
        }
        else if (!handlerInfo) {
            clientIntentInfo.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
        }
        else {
            const { pendingIntents } = handlerInfo;
            handlerInfo.clientIdentity = clientIdentity;
            handlerInfo.isReady = true;
            try {
                if (pendingIntents.length > 0) {
                    const intentToSend = pendingIntents[pendingIntents.length - 1];
                    await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                    handlerInfo.pendingIntents = [];
                }
            }
            catch (error) {
                console.error(`Error invoking intent handler: ${handlerId} for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
            }
        }
    }
    // Used to invoke a client's context handler
    invokeContextHandler(clientIdentity, handlerId, context) {
        this.channel.dispatch(clientIdentity, handlerId, context).catch((e) => {
            console.error(`Error invoking context handler ${handlerId} for context type ${context.type} in client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`, e);
        });
    }
    // Used to remove a context handler for a client
    removeContextHandler({ handlerId }, clientIdentity) {
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextHandlers.delete(handlerId);
        }
    }
    handleJoinSessionContextGroup({ sessionContextGroupId }, clientIdentity) {
        try {
            if (!sessionContextGroupId) {
                throw new Error('Failed to join session context group: must specify group id.');
            }
            const sessionContextGroup = this.sessionContextGroupMap.get(sessionContextGroupId);
            if (sessionContextGroup) {
                sessionContextGroup.registerNewClient(clientIdentity);
            }
            else {
                const newSessionContextGroupBroker = new SessionContextGroupBroker_1.default(this.channel, sessionContextGroupId);
                newSessionContextGroupBroker.registerNewClient(clientIdentity);
                this.sessionContextGroupMap.set(sessionContextGroupId, newSessionContextGroupBroker);
            }
            return { hasConflict: this.contextGroupsById.has(sessionContextGroupId) };
        }
        catch (error) {
            throw new Error(error);
        }
    }
    /*
    Internal Utilties
    */
    // Getter for interop info for a client.
    getClientState(id) {
        return this.interopClients.get(id.endpointId);
    }
    // Util for getContextGroupStates. Serializes the contextGroupStates object so we can store it.
    static toObject(map) {
        const objectFromMap = Object.fromEntries(map);
        const newObject = {};
        Object.entries(objectFromMap).forEach(([contextGroupId, contextMap]) => {
            const newContextObject = Object.fromEntries(contextMap);
            newObject[contextGroupId] = newContextObject;
        });
        return newObject;
    }
    // Util to check a client identity.
    static hasEndpointId(target) {
        return target.endpointId !== undefined;
    }
    // Util to check if we should send a context to a handler.
    static isContextTypeCompatible(contextType, registeredContextType) {
        return typeof registeredContextType === 'undefined' || contextType === registeredContextType;
    }
    // Setup function for state mapping
    setContextGroupMap() {
        // This way, if a user overrides this.getContextGroups, it's reflected in the contextGroupMapping.
        for (const contextGroupInfo of this.getContextGroups()) {
            this.contextGroupsById.set(contextGroupInfo.id, new Map());
        }
    }
    static async setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId) {
        const entityInfo = await fin.System.getEntityInfo(clientIdentity.uuid, clientIdentity.name);
        let entity;
        if (entityInfo.entityType === 'view') {
            entity = await fin.View.wrap(clientIdentity);
        }
        else if (entityInfo.entityType === 'window') {
            entity = await fin.Window.wrap(clientIdentity);
        }
        if (entity) {
            await entity.updateOptions({
                interop: {
                    currentContextGroup: contextGroupId
                }
            });
        }
        else {
            console.warn(`Setting Current Context Group: Entity with identity ${clientIdentity.uuid}, ${clientIdentity.name} is not a window or view. It is a ${entityInfo.entityType} instead.`);
        }
    }
    // Setup Channel Connection Logic
    wireChannel(channel) {
        channel.onConnection((clientIdentity, payload) => {
            if (!this.isConnectionAuthorized(clientIdentity, payload)) {
                throw new Error(`Connection not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            if (!clientIdentity.endpointId) {
                throw new Error('Version too old to be compatible with Interop. Please upgrade your runtime to a more recent version.');
            }
            const clientSubscriptionState = {
                contextGroupId: undefined,
                contextHandlers: new Map(),
                clientIdentity
            };
            // Only allow the client to join a contextGroup that actually exists.
            if ((payload === null || payload === void 0 ? void 0 : payload.currentContextGroup) && this.contextGroupsById.has(payload.currentContextGroup)) {
                clientSubscriptionState.contextGroupId = payload === null || payload === void 0 ? void 0 : payload.currentContextGroup;
            }
            this.interopClients.set(clientIdentity.endpointId, clientSubscriptionState);
        });
        channel.onDisconnection((clientIdentity) => {
            this.interopClients.delete(clientIdentity.endpointId);
            const targetInfo = this.intentClientMap.get(clientIdentity.name);
            if (targetInfo && clientIdentity.uuid === fin.me.identity.uuid) {
                targetInfo.forEach((handler) => {
                    handler.isReady = false;
                });
            }
            this.sessionContextGroupMap.forEach((sessionContextGroup) => {
                sessionContextGroup.onDisconnection(clientIdentity);
            });
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        channel.beforeAction((action, payload, clientIdentity) => {
            if (!this.isActionAuthorized(action, payload, clientIdentity)) {
                throw new Error(`Action (${action}) not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            console.log(action, payload, clientIdentity);
        });
        channel.afterAction(console.log);
        // Client functions
        channel.register('setContext', this.setContext.bind(this));
        channel.register('fireIntent', this.handleFiredIntent.bind(this));
        channel.register('getCurrentContext', this.getCurrentContext.bind(this));
        channel.register('getInfoForIntent', this.handleInfoForIntent.bind(this));
        channel.register('getInfoForIntentsByContext', this.handleInfoForIntentsByContext.bind(this));
        channel.register('fireIntentForContext', this.handleFiredIntentForContext.bind(this));
        // Platform window functions
        channel.register('getContextGroups', this.getContextGroups.bind(this));
        channel.register('joinContextGroup', this.joinContextGroup.bind(this));
        channel.register('removeFromContextGroup', this.removeFromContextGroup.bind(this));
        channel.register('getAllClientsInContextGroup', this.getAllClientsInContextGroup.bind(this));
        channel.register('getInfoForContextGroup', this.getInfoForContextGroup.bind(this));
        // Internal methods
        channel.register('contextHandlerRegistered', this.contextHandlerRegistered.bind(this));
        channel.register('intentHandlerRegistered', this.intentHandlerRegistered.bind(this));
        channel.register('removeContextHandler', this.removeContextHandler.bind(this));
        channel.register('sessionContextGroup:createIfNeeded', this.handleJoinSessionContextGroup.bind(this));
    }
    /**
     * Can be used to completely prevent a connection. Return false to prevent connections. Allows all connections by default.
     * @param _id the identity tryinc to connect
     * @param _connectionPayload optional payload to use in custom implementations, will be undefined by default
     */
    async isConnectionAuthorized(_id, _connectionPayload) {
        this.wire.sendAction('interop-broker-is-connection-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
    /**
     * Called before every action to check if this entity should be allowed to take the action.
     * Return false to prevent the action
     * @param _action the string action to authorize in camel case
     * @param _payload the data being sent for this action
     * @param _identity the connection attempting to dispatch this action
     */
    async isActionAuthorized(_action, _payload, _identity) {
        this.wire.sendAction('interop-broker-is-action-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
}
exports.InteropBroker = InteropBroker;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/InteropClient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/InteropClient.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise, _sessionContextGroups;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropClient = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupClient_1 = __webpack_require__(/*! ./SessionContextGroupClient */ "./node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/openfin-adapter/src/api/interop/utils.js");
/**
 * @typedef { object } Intent
 * @summary The combination of an action and a context that is passed to an application for resolution.
 * @property { string } name Name of the intent.
 * @property { Context } context Data associated with the intent
 */
/**
 * @typedef { object } Subscription
 * @summary Object returned when subscribing a handler.
 * @property { function } unsubscribe Function to unsubscribe the handler.
 */
/**
 * @typedef { function } ContextHandler
 * @summary Subscription function for addContextHandler.
 */
/**
 * @typedef { function } IntentHandler
 * @summary Subscription function for registerIntentHandler
 */
/**
 * @typedef { object } ClientIdentity
 * @summary The Identity for a Channel Client. Includes endpointId to differentiate between different connections for an entity.
 * @property {string} uuid GUID of an application.
 * @property {string} name Name of an entity in an application.
 * @property {string} endpointId Unique differentiator for different Channel connections for an entity.
 */
/**
 * @typedef { object } ContextGroupInfo
 * @summary Information for a Context Group. Contains metadata for displaying the group properly.
 * @property {string} id Name of the context group
 * @property {DisplayMetadata} displayMetadata Metadata for the Context Group. Contains the group's human-readable name, color, and an image, as defined by the Interop Broker.
 */
/**
 * @typedef { object } DisplayMetadata
 * @summary The display data for a Context Group.
 * @property {string} name A user-readable name for this context group, e.g: `"Red"`
 * @property {string} [color] The color that should be associated within this context group when displaying this context group in a UI, e.g: `0xFF0000`.
 * @property {string} [glyph] A URL of an image that can be used to display this context group
 */
/**
 * @typedef { object } Context
 * @summary Data passed between entities and applications.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 */
/**
 * @typedef { object } ContextForIntent
 * @summary Data passed between entities and applications, including an optional metadata.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 * @property {any} [metadata]
 */
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Client API is broken up into two groups:
 *
 * **Content Facing APIs** - For Application Developers putting Views into a Platform Window, who care about Context. These are APIs that send out and receive the Context data that flows between applications. Think of this as the Water in the Interop Pipes.
 *
 * **Context Grouping APIs** - For Platform Developers, to add and remove Views to and from Context Groups. These APIs are utilized under-the-hood in Platforms, so they don't need to be used to participate in Interop. These are the APIs that decide which entities the context data flows between. Think of these as the valves or pipes that control the flow of Context Data for Interop.
 *
 * ---
 *
 * All APIs are available at the `fin.me.interop` namespace.
 *
 * ---
 *
 * **You only need 2 things to participate in Interop Context Grouping:**
 * * A Context Handler for incoming context: {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 * * Call setContext on your context group when you want to share context with other group members: {@link InteropClient#setContext setContext(context)}
 *
 * ---
 *
 * ##### Constructor
 * Returned by {@link Interop.connectSync Interop.connectSync}.
 *
 * ##### Content Facing APIs
 *  * {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 *  * {@link InteropClient#setContext setContext(context)}
 *  * {@link InteropClient#getCurrentContext getCurrentContext(contextType?)}
 *

 * ##### Context Grouping APIs - For Platform Window Use
 *  * {@link InteropClient#getContextGroups getContextGroups()}
 *  * {@link InteropClient#joinContextGroup joinContextGroup(contextGroupId, target?)}
 *  * {@link InteropClient#removeFromContextGroup removeFromContextGroup(target?)}
 *  * {@link InteropClient#getInfoForContextGroup getInfoForContextGroup(contextGroupId)}
 *  * {@link InteropClient#getAllClientsInContextGroup getAllClientsInContextGroup(contextGroupId)}
 *
 * @hideconstructor
 * @class
 */
class InteropClient extends base_1.Base {
    constructor(wire, name, interopConfig) {
        super(wire);
        _clientPromise.set(this, void 0);
        _sessionContextGroups.set(this, void 0);
        __classPrivateFieldSet(this, _sessionContextGroups, new Map());
        __classPrivateFieldSet(this, _clientPromise, this.fin.InterApplicationBus.Channel.connect(`interop-broker-${name}`, {
            payload: interopConfig
        }));
    }
    /*
    Client APIs
    */
    /**
     * Sets a context for the context group of the current entity.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-client-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('setContext', { context });
    }
    /**
     * Add a context handler for incoming context. If an entity is part of a context group, and then sets its context handler, it will receive all of its declared contexts.
     * @param { ContextHandler } handler - Handler for incoming context.
     * @param { string } [contextType] - The type of context you wish to handle.
     * @return { Promise<Subscription> }
     * @tutorial interop.addContextHandler
     */
    async addContextHandler(handler, contextType) {
        this.wire.sendAction('interop-client-add-context-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `invokeContextHandler-${contextType}-${utils_1.generateId()}`;
            console.warn(`Warning: By providing a contextType (${contextType}), you are using the experimental addContextHandler. To avoid issues, make sure you are adding your context handlers at the top level in your application.`);
        }
        else {
            handlerId = 'invokeContextHandler';
        }
        const wrappedHandler = utils_1.wrapContextHandler(handler, handlerId);
        client.register(handlerId, wrappedHandler);
        await client.dispatch('contextHandlerRegistered', { handlerId, contextType });
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
                await client.dispatch('removeContextHandler', { handlerId });
            }
        };
    }
    /*
    Platform Window APIs
    */
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @tutorial interop.getContextGroups
     */
    async getContextGroups() {
        this.wire.sendAction('interop-client-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getContextGroups');
    }
    /**
     * Join all Interop Clients at the given identity to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * Because multiple Channel connections/Interop Clients can potentially exist at a `uuid`/`name` combo, we currently join all Channel connections/Interop Clients at the given identity to the context group.
     * If an `endpointId` is provided (which is unlikely, unless the call is coming from an external adapter), then we only join that single connection to the context group.
     * For all intents and purposes, there will only be 1 connection present in Platform and Browser implmentations, so this point is more-or-less moot.
     * Used by Platform Windows.
     * @param { string } contextGroupId - Id of the context group.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.joinContextGroup
     */
    async joinContextGroup(contextGroupId, target) {
        this.wire.sendAction('interop-client-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for joinContextGroup.');
        }
        return client.dispatch('joinContextGroup', { contextGroupId, target });
    }
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * Used by Platform Windows.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.removeFromContextGroup
     */
    async removeFromContextGroup(target) {
        this.wire.sendAction('interop-client-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('removeFromContextGroup', { target });
    }
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @tutorial interop.getAllClientsInContextGroup
     */
    async getAllClientsInContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getAllClientsInContextGroup.');
        }
        return client.dispatch('getAllClientsInContextGroup', { contextGroupId });
    }
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @tutorial interop.getInfoForContextGroup
     */
    async getInfoForContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getInfoForContextGroup.');
        }
        return client.dispatch('getInfoForContextGroup', { contextGroupId });
    }
    /**
     * Sends an intent to the Interop Broker to resolve.
     * @param { Intent } intent - The combination of an action and a context that is passed to an application for resolution.
     * @return { Promise<unknown>}
     * @tutorial interop.fireIntent
     * @experimental
     */
    async fireIntent(intent) {
        this.wire.sendAction('interop-client-fire-intent').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntent', intent);
    }
    /**
     * Adds an intent handler for incoming intents. The last intent sent of the name subscribed to will be received.
     * @param { IntentHandler } handler - Registered function meant to handle a specific intent type.
     * @param { string } intentName - The name of an intent.
     * @return { Promise<Subscription> }
     * @tutorial interop.registerIntentHandler
     * @experimental
     */
    async registerIntentHandler(handler, intentName) {
        this.wire.sendAction('interop-client-register-intent-handler').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        const handlerId = `intent-handler-${intentName}`;
        const wrappedHandler = this.wrapIntentHandler(handler, handlerId);
        try {
            await client.register(handlerId, wrappedHandler);
            await client.dispatch('intentHandlerRegistered', { handlerId });
        }
        catch (error) {
            throw new Error('Unable to register intent handler');
        }
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
            }
        };
    }
    /**
     * Gets the last context of the Context Group currently subscribed to. It takes an optional Context Type and returns the
     * last context of that type.
     * @param { string } [contextType]
     * @return { Promise<Context> }
     * @tutorial interop.getCurrentContext
     * @experimental
     */
    async getCurrentContext(contextType) {
        this.wire.sendAction('interop-client-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getCurrentContext', { contextType });
    }
    /**
     * Get information for a particular Intent from the Interop Broker.
     * @param { InfoForIntentOptions } options
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntent
     * @experimental
     */
    async getInfoForIntent(options) {
        this.wire.sendAction('interop-client-get-info-for-intent').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntent', options);
    }
    /**
     * Get information from the Interop Broker on all Intents that are meant to handle a particular context.
     * @param { Context } context
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntentsByContext
     * @experimental
     */
    async getInfoForIntentsByContext(context) {
        this.wire.sendAction('interop-client-get-info-for-intents-by-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntentsByContext', context);
    }
    /**
     * Sends a Context that will be resolved to an Intent by the Interop Broker.
     * This context accepts a metadata property.
     * @param { ContextForIntent } contextForIntent
     * @param { any } metadata Any additional metadata that is useful for the Interop Broker.
     * @return { Promise<unknown> }
     * @tutorial interop.fireIntentForContext
     */
    async fireIntentForContext(context) {
        this.wire.sendAction('interop-client-fire-intent-for-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntentForContext', context);
    }
    /*
    Internal Utilties
    */
    // eslint-disable-next-line class-methods-use-this
    wrapIntentHandler(handler, handlerId) {
        return async (intent) => {
            try {
                await handler(intent);
            }
            catch (error) {
                console.error(`Error thrown by handler ${handlerId}: ${error}`);
                throw error;
            }
        };
    }
    /**
     * Join the current client to context group `contextGroupId` and return a sessionContextGroup instance.
     * If the sessionContextGroup doesn't exist, one will get created.
     * Session Context Groups do not persist between runs and aren't present on snapshots.
     * @param { string } contextGroupId - Id of the context group.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.joinContextGroup
     */
    async joinSessionContextGroup(sessionContextGroupId) {
        try {
            const currentSessionContextGroup = __classPrivateFieldGet(this, _sessionContextGroups).get(sessionContextGroupId);
            if (currentSessionContextGroup) {
                return currentSessionContextGroup.getUserInstance();
            }
            const client = await __classPrivateFieldGet(this, _clientPromise);
            const { hasConflict } = await client.dispatch('sessionContextGroup:createIfNeeded', {
                sessionContextGroupId
            });
            if (hasConflict) {
                console.warn(`A (non-session) context group with the name "${sessionContextGroupId}" already exists. If you are trying to join a Context Group, call joinContextGroup instead.`);
            }
            const newSessionContextGroup = new SessionContextGroupClient_1.default(this.wire, __classPrivateFieldGet(this, _clientPromise), sessionContextGroupId);
            __classPrivateFieldGet(this, _sessionContextGroups).set(sessionContextGroupId, newSessionContextGroup);
            return newSessionContextGroup.getUserInstance();
        }
        catch (error) {
            console.error(`Error thrown trying to create Session Context Group with id "${sessionContextGroupId}": ${error}`);
            throw error;
        }
    }
}
exports.InteropClient = InteropClient;
_clientPromise = new WeakMap(), _sessionContextGroups = new WeakMap();


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class SessionContextGroupBroker {
    constructor(provider, id) {
        this.provider = provider;
        this.id = id;
        this.lastContext = undefined;
        this.contextGroupMap = new Map();
        this.clients = new Map();
        this.registerListeners();
    }
    registerListeners() {
        this.provider.register(`sessionContextGroup:getContext-${this.id}`, this.getCurrentContext.bind(this));
        this.provider.register(`sessionContextGroup:setContext-${this.id}`, this.setContext.bind(this));
        this.provider.register(`sessionContextGroup:handlerAdded-${this.id}`, this.handlerAdded.bind(this));
        this.provider.register(`sessionContextGroup:handlerRemoved-${this.id}`, this.handlerRemoved.bind(this));
    }
    getCurrentContext(payload) {
        return payload.type ? this.contextGroupMap.get(payload.type) : this.lastContext;
    }
    setContext(payload, clientIdentity) {
        const { context } = payload;
        if (!context.type) {
            throw new Error(`Failed to set Context - bad Context. Reason: no context type.`);
        }
        const clientState = this.getClientState(clientIdentity);
        if (!clientState) {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Session Client State Map`);
        }
        // set the context
        this.contextGroupMap.set(context.type, context);
        this.lastContext = context;
        const clientSubscriptionStates = Array.from(this.clients.values());
        clientSubscriptionStates.forEach((client) => {
            var _a;
            // eslint-disable-next-line no-unused-expressions
            (_a = client.contextHandlers.get(context.type)) === null || _a === void 0 ? void 0 : _a.forEach((handlerId) => {
                this.provider.dispatch(client.clientIdentity, handlerId, context);
            });
            if (client.globalHandler) {
                this.provider.dispatch(client.clientIdentity, client.globalHandler, context);
            }
        });
    }
    getClientState(id) {
        return this.clients.get(id.endpointId);
    }
    handlerAdded(payload, clientIdentity) {
        const { handlerId, contextType } = payload;
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (contextType) {
            const currentHandlerList = clientSubscriptionState.contextHandlers.get(contextType) || [];
            clientSubscriptionState.contextHandlers.set(contextType, [...currentHandlerList, handlerId]);
            const currentContext = this.contextGroupMap.get(contextType);
            if (currentContext) {
                this.provider.dispatch(clientIdentity, handlerId, currentContext);
            }
        }
        else {
            clientSubscriptionState.globalHandler = handlerId;
            [...this.contextGroupMap.keys()].forEach((currentContextType) => {
                const currentContext = this.contextGroupMap.get(currentContextType);
                if (currentContext) {
                    this.provider.dispatch(clientIdentity, handlerId, currentContext);
                }
            });
        }
    }
    handlerRemoved(payload, clientIdentity) {
        const { handlerId } = payload;
        const client = this.clients.get(clientIdentity.endpointId);
        if (client) {
            Array.from(client.contextHandlers).forEach(([, handlers]) => {
                const index = handlers.indexOf(handlerId);
                if (index > -1) {
                    handlers.splice(index, 1);
                }
            });
            if (client.globalHandler === handlerId) {
                client.globalHandler = undefined;
            }
        }
        else {
            console.warn(`Trying to remove a handler from a client that isn't mapped. handlerId: ${handlerId}. clientIdentity: ${clientIdentity}`);
        }
    }
    registerNewClient(clientIdentity) {
        if (!this.clients.has(clientIdentity.endpointId)) {
            const clientSubscriptionState = {
                contextHandlers: new Map(),
                clientIdentity,
                globalHandler: undefined
            };
            this.clients.set(clientIdentity.endpointId, clientSubscriptionState);
        }
    }
    onDisconnection(clientIdentity) {
        this.clients.delete(clientIdentity.endpointId);
    }
}
exports["default"] = SessionContextGroupBroker;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/openfin-adapter/src/api/interop/utils.js");
class SessionContextGroupClient extends base_1.Base {
    constructor(wire, client, id) {
        super(wire);
        _clientPromise.set(this, void 0);
        this.id = id;
        __classPrivateFieldSet(this, _clientPromise, client);
    }
    /**
     * Sets a context for the session context group.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-session-context-group-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:setContext-${this.id}`, {
            sessionContextGroupId: this.id,
            context
        });
    }
    async getCurrentContext(type) {
        this.wire.sendAction('interop-session-context-group-get-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:getContext-${this.id}`, {
            sessionContextGroupId: this.id,
            type
        });
    }
    async addContextHandler(contextHandler, contextType) {
        this.wire.sendAction('interop-session-context-group-add-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `sessionContextHandler:invoke-${this.id}-${contextType}-${utils_1.generateId()}`;
        }
        else {
            handlerId = `sessionContextHandler:invoke-${this.id}`;
        }
        client.register(handlerId, utils_1.wrapContextHandler(contextHandler, handlerId));
        client.dispatch(`sessionContextGroup:handlerAdded-${this.id}`, { handlerId, contextType });
        return { unsubscribe: await this.createUnsubscribeCb(handlerId) };
    }
    async createUnsubscribeCb(handlerId) {
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return async () => {
            client.remove(handlerId);
            await client.dispatch(`sessionContextGroup:handlerRemoved-${this.id}`, { handlerId });
        };
    }
    getUserInstance() {
        return {
            id: this.id,
            setContext: utils_1.wrapInTryCatch(this.setContext.bind(this), 'Failed to set context: '),
            getCurrentContext: utils_1.wrapInTryCatch(this.getCurrentContext.bind(this), 'Failed to get context: '),
            addContextHandler: utils_1.wrapInTryCatch(this.addContextHandler.bind(this), 'Failed to add context handler: ')
        };
    }
}
exports["default"] = SessionContextGroupClient;
_clientPromise = new WeakMap();


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/interop/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./InteropClient */ "./node_modules/openfin-adapter/src/api/interop/InteropClient.js"), exports);
__exportStar(__webpack_require__(/*! ./InteropBroker */ "./node_modules/openfin-adapter/src/api/interop/InteropBroker.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/interop/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/interop/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BROKER_ERRORS = exports.generateOverrideWarning = exports.generateOverrideError = exports.wrapContextHandler = exports.wrapInTryCatch = exports.generateId = void 0;
exports.generateId = () => `${Math.random()}${Date.now()}`;
exports.wrapInTryCatch = (f, prefix) => (...args) => {
    try {
        return f(...args);
    }
    catch (e) {
        throw new Error((prefix || '') + e);
    }
};
exports.wrapContextHandler = (handler, handlerId) => {
    return async (context) => {
        try {
            await handler(context);
        }
        catch (error) {
            console.error(`Error thrown by handler ${handlerId} for context type ${context.type}: ${error}`);
            throw error;
        }
    };
};
exports.generateOverrideError = (clientApi, brokerApi) => {
    return `You have tried to to use ${clientApi} but ${brokerApi} has not been overridden in the Interop Broker. Please override this function. Refer to our documentation for more info.`;
};
exports.generateOverrideWarning = (interopClientApi, fdc3ClientApi, brokerApi, identity) => {
    const { uuid, name } = identity;
    return `Entity with identity: ${uuid}/${name} has called ${interopClientApi} or ${fdc3ClientApi} but ${brokerApi} has not been overridden.`;
};
exports.BROKER_ERRORS = {
    fireIntent: exports.generateOverrideError('fireIntent', 'handleFiredIntent'),
    fireIntentForContext: exports.generateOverrideError('fireIntentForContext', 'handleFiredIntentForContext'),
    getInfoForIntent: exports.generateOverrideError('getInfoForIntent', 'handleInfoForIntent'),
    getInfoForIntentsByContext: exports.generateOverrideError('getInfoForIntentsByContext', 'handleInfoForIntentsByContext')
};


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/me.js":
/*!****************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/me.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMe = exports.getBaseMe = void 0;
const EntityType_1 = __webpack_require__(/*! ../shapes/EntityType */ "./node_modules/openfin-adapter/src/shapes/EntityType.js");
const view_1 = __webpack_require__(/*! ./view */ "./node_modules/openfin-adapter/src/api/view/index.js");
const frame_1 = __webpack_require__(/*! ./frame */ "./node_modules/openfin-adapter/src/api/frame/index.js");
const window_1 = __webpack_require__(/*! ./window */ "./node_modules/openfin-adapter/src/api/window/index.js");
function getBaseMe(entityType, uuid, name) {
    const entityTypeHelpers = {
        isView: entityType === 'view',
        isWindow: entityType === 'window',
        isFrame: entityType === 'iframe',
        isExternal: entityType === 'external connection'
    };
    return { ...entityTypeHelpers, uuid, name, entityType };
}
exports.getBaseMe = getBaseMe;
// We need to do a lot of casting as unknown here because the compiler get's confused about matching types. What matters is that it works on the outside
function getMe(wire) {
    const { uuid, name, entityType } = wire.me;
    const interopObject = {
        setContext() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        addContextHandler() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getContextGroups() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        joinContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        removeFromContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getAllClientsInContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getInfoForContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        }
    };
    switch (entityType) {
        case EntityType_1.default.VIEW:
            return Object.assign(new view_1.View(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.WINDOW:
            return Object.assign(new window_1._Window(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.IFRAME:
            return Object.assign(new frame_1._Frame(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        default:
            return { ...getBaseMe(entityType, uuid, name) };
    }
}
exports.getMe = getMe;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/notification/Factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/notification/Factory.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const shapes_1 = __webpack_require__(/*! ./shapes */ "./node_modules/openfin-adapter/src/api/notification/shapes.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/notification/Instance.js");
/**
 * @lends Notification
 */
class _NotificationModule extends base_1.Base {
    constructor() {
        super(...arguments);
        this.nextNoteId = 0;
        this.events = shapes_1.events;
    }
    genNoteId() {
        this.nextNoteId += 1;
        return this.nextNoteId;
    }
    /**
     * Creates a new Notification.
     * @deprecated fin.Notification has been deprecated and will be removed by major version 22.
     * Please migrate to the [Notification Center API]{@link https://developers.openfin.co/docs/notifications-api}.
     * @param { object } options
     * @return {_Notification}
     * @tutorial Notification.create
     * @static
     */
    create(options) {
        // eslint-disable-next-line no-console
        console.warn('fin.Notification has been deprecated and will be removed by major version 22. Please migrate to the Notification Center API: https://developers.openfin.co/docs/notifications-api.');
        const noteOptions = new shapes_1.NotificationOptions(options, this.me, this.genNoteId());
        return new Instance_1._Notification(this.wire, noteOptions);
    }
}
exports["default"] = _NotificationModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/notification/Instance.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/notification/Instance.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Notification = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * @deprecated fin.Notification has been deprecated and will be removed by major version 22.
 * Please migrate to the [Notification Center API]{@link https://developers.openfin.co/docs/notifications-api}.
 * @classdesc A Notification object represents a window on OpenFin Runtime which
 * is shown briefly to the user on the bottom-right corner of the primary monitor.
 * A notification is typically used to alert the user of some important event which
 * requires his or her attention. Notifications are a child or your application that
 * are controlled by the runtime.
 * @class
 * @alias Notification
 * @hideconstructor
 */
class _Notification extends base_1.EmitterBase {
    constructor(wire, options) {
        super(wire, ['notification', `${options.notificationId}`]);
        this.listenerList = ['newListener'];
        this.unhookAllListeners = () => {
            this.listenerList.forEach((event) => {
                this.removeAllListeners(event);
            });
            this.listenerList.length = 0;
        };
        this.options = options;
        this.url = options.url;
        this.timeout = options.timeout;
        this.message = options.message;
        this.notificationId = options.notificationId;
        this.on('newListener', (event) => {
            this.listenerList.push(event);
        });
        // give any user added listeners a chance to run then unhook
        this.on('close', () => {
            setTimeout(this.unhookAllListeners, 1);
        });
    }
    /**
     * Invoked when the notification is shown
     * @deprecated fin.Notification has been deprecated and will be removed by major version 22.
     * Please migrate to the [Notification Center API]{@link https://developers.openfin.co/docs/notifications-api}.
     * @return {Promise.<void>}
     * @tutorial Notification.show
     */
    async show() {
        // eslint-disable-next-line no-console
        console.warn('fin.Notification has been deprecated and will be removed by major version 22. Please migrate to the Notification Center API: https://developers.openfin.co/docs/notifications-api.');
        if (!this.url) {
            throw new Error('Notifications require a url');
        }
        await this.wire.sendAction('send-action-to-notifications-center', {
            action: 'create-notification',
            payload: {
                url: this.url,
                notificationId: this.options.notificationId,
                message: {
                    message: this.message
                },
                timeout: this.timeout
            }
        });
    }
    /**
     * Sends a message to the notification.
     * @deprecated fin.Notification has been deprecated and will be removed by major version 22.
     * Please migrate to the [Notification Center API]{@link https://developers.openfin.co/docs/notifications-api}.
     * @param { any } message The message to be sent to the notification.
     * Can be either a primitive data type (string, number, or boolean)
     * or composite data type (object, array) that is composed of other
     * primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial Notification.sendMessage
     */
    async sendMessage(message) {
        // eslint-disable-next-line no-console
        console.warn('fin.Notification has been deprecated and will be removed by major version 22. Please migrate to the Notification Center API: https://developers.openfin.co/docs/notifications-api.');
        await this.wire.sendAction('send-action-to-notifications-center', {
            action: 'send-notification-message',
            payload: {
                notificationId: this.options.notificationId,
                message: {
                    message
                }
            }
        });
    }
    /**
     * Closes the notification
     * @deprecated fin.Notification has been deprecated and will be removed by major version 22.
     * Please migrate to the [Notification Center API]{@link https://developers.openfin.co/docs/notifications-api}.
     * @return {Promise.<void>}
     * @tutorial Notification.close
     */
    async close() {
        // eslint-disable-next-line no-console
        console.warn('fin.Notification has been deprecated and will be removed by major version 22. Please migrate to the Notification Center API: https://developers.openfin.co/docs/notifications-api.');
        await this.wire.sendAction('send-action-to-notifications-center', {
            action: 'close-notification',
            payload: {
                notificationId: this.options.notificationId
            }
        });
    }
}
exports._Notification = _Notification;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/notification/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/notification/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/notification/Factory.js");
__exportStar(__webpack_require__(/*! ./shapes */ "./node_modules/openfin-adapter/src/api/notification/shapes.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/notification/Instance.js"), exports);
exports["default"] = Factory_1.default;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/notification/shapes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/notification/shapes.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationOptions = exports.events = void 0;
exports.events = {
    show: 'show',
    close: 'close',
    error: 'error',
    click: 'click',
    message: 'message'
};
class NotificationOptions {
    constructor(options = {}, identity, notificationId) {
        const { url, message, timeout, ignoreMouseOver } = options;
        this.url = url;
        this.message = message || null;
        this.timeout = timeout;
        this.notificationId = notificationId;
        this.uuidOfProxiedApp = identity.uuid;
        this.ignoreMouseOver = ignoreMouseOver;
    }
}
exports.NotificationOptions = NotificationOptions;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/Factory.js":
/*!******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/Factory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-undef, no-underscore-dangle */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const index_1 = __webpack_require__(/*! ./layout/index */ "./node_modules/openfin-adapter/src/api/platform/layout/index.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/platform/Instance.js");
/**
 * InitPlatformOptions interface
 * @typedef { object } InitPlatformOptions
 * @property { OverrideCallback } [overrideCallback] a callback function that can be used to extend or replace default Provider behavior.
 */
/**
 * @typedef { same | different } ProcessAffinityStrategy
 * @summary Strategy to place views that share a domain into different process affinities or the same process affinity.
 * @property { string } same views in the same domain will have the same process affinity.
 * @property { string } different views in the same domain will have different process affinities.
 */
/**
 * @typedef { object } PlatformOptions
 * @summary The options object required by {@link Platform#start Platform.start}
 * Any {@link ApplicationOption Application option} is also a valid platform option
 * @property {Array.<Object>} [commands] Configuration for keyboard commands.
 * For details and usage, see [Using Keyboard Commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}.
 * @property {DefaultWindowOptions} [defaultWindowOptions] Default window options apply to all platform windows.
 * @property {View~options} [defaultViewOptions] Default view options apply to all platform views.
 * @property {ProcessAffinityStrategy} [viewProcessAffinityStrategy] 'same' | 'different'.
 */
/**
 * @typedef { object } DefaultWindowOptions
 * @summary Default window options apply to all platform windows.
 * Any {@link Window~options Window option} is also a valid Default Window option
 * used by default in any window that is created in the current platform's scope.
 * Individual window options will override these defaults.
 * @property {string} [stylesheetUrl]
 * Specify a path of a custom CSS file to be injected to all of the platform's windows.
 * _note_: this option is only applied to windows that use the Default OpenFin Window.
 * Windows with a specified url (Custom Windows) will not be affected by this option.
 */
/**
 * Snapshot interface
 * @typedef { object } Snapshot
 * @property { WindowOption[] } windows The array of window options objects
 */
/**
 * @lends Platform
 */
class PlatformModule extends base_1.Base {
    constructor(wire, channel) {
        super(wire);
        this._channel = channel;
        this._initializer = (...args) => this.wire.environment
            .getProviderInitializer()
            .then((initConstructor) => initConstructor(this.wire.environment)(...args));
        /**
         * @namespace
         * @desc Layouts give app providers the ability to embed multiple views in a single window.  The Layout namespace
         * enables the initialization and manipulation of a window's Layout.  A Layout will
         * <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         */
        this.Layout = new index_1.LayoutModule(this.wire);
    }
    /**
     * Initializes a Platform. Must be called from the Provider when using a custom provider.
     * @param { InitPlatformOptions } [options] - platform options including a callback function that can be used to extend or replace
     * default Provider behavior.
     * @return {Promise.<void>}
     * @tutorial Platform.init
     * @experimental
     * @static
     */
    async init(options) {
        const overrideCallback = options === null || options === void 0 ? void 0 : options.overrideCallback;
        const interopBroker = await this.fin.Interop.init(this.fin.me.uuid, options === null || options === void 0 ? void 0 : options.interopOverride);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore debugging purposes
        window.interopBroker = interopBroker;
        return this._initializer(overrideCallback, interopBroker);
    }
    /**
     * Asynchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Promise.<Platform>}
     * @tutorial Platform.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('platform-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Synchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Platform}
     * @tutorial Platform.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('platform-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Asynchronously returns a Platform object that represents the current platform.
     * @return {Promise.<Platform>}
     * @tutorial Platform.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('platform-get-current').catch((e) => {
            // don't expose
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns a Platform object that represents the current platform.
     * @return {Platform}
     * @tutorial Platform.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('platform-get-current-sync').catch((e) => {
            // don't expose
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Creates and starts a Platform and returns a wrapped and running Platform instance. The wrapped Platform methods can
     * be used to launch content into the platform.  Promise will reject if the platform is already running.
     * @param { PlatformOptions } platformOptions
     * @return {Promise.<Platform>}
     * @tutorial Platform.start
     * @static
     */
    start(platformOptions) {
        this.wire.sendAction('platform-start').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const { uuid } = platformOptions;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._create({ ...platformOptions, isPlatformController: true });
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                app._run({ uuid });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Retrieves platforms's manifest and returns a wrapped and running Platform.  If there is a snapshot in the manifest,
     * it will be launched into the platform.
     * @param {string} manifestUrl - The URL of platform's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Platform>}
     * @tutorial Platform.startFromManifest
     * @static
     */
    startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('platform-start-from-manifest').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._createFromManifest(manifestUrl);
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid: app.identity.uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private method without warning.
                app._run(opts);
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports["default"] = PlatformModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/Instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/Instance.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _connectToProvider;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Platform = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const Platform_1 = __webpack_require__(/*! ../../shapes/Platform */ "./node_modules/openfin-adapter/src/shapes/Platform.js");
// Reuse clients to avoid overwriting already-registered client in provider
const clientMap = new Map();
/** Manages the life cycle of windows and views in the application.
 *
 * Enables taking snapshots of itself and applying them to restore a previous configuration
 * as well as listen to <a href="tutorial-Platform.EventEmitter.html">platform events</a>.
 * @namespace
 */
class Platform extends base_1.EmitterBase {
    // eslint-disable-next-line no-shadow
    constructor(identity, channel) {
        // we piggyback off of application event emitter because from the core's perspective platform is just an app.
        super(channel.wire, ['application', identity.uuid]);
        this.getClient = (identity) => {
            this.wire.sendAction('platform-get-client', this.identity).catch((e) => {
                // don't expose
            });
            const target = identity || this.identity;
            const { uuid } = target;
            if (!clientMap.has(uuid)) {
                const clientPromise = __classPrivateFieldGet(this, _connectToProvider).call(this, uuid);
                clientMap.set(uuid, clientPromise);
            }
            // we set it above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return clientMap.get(uuid);
        };
        _connectToProvider.set(this, async (uuid) => {
            try {
                const channelName = `custom-frame-${uuid}`;
                const client = await this._channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    clientMap.delete(uuid);
                });
                return client;
            }
            catch (e) {
                clientMap.delete(uuid);
                throw new Error('The targeted Platform is not currently running. Listen for application-started event for the given Uuid.');
            }
        });
        // Deprecated (renamed)
        this.launchLegacyManifest = this.launchContentManifest;
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this._channel = channel;
        this.identity = { uuid: identity.uuid };
        this.topic = 'application';
        this.Layout = this.fin.Platform.Layout;
        this.Application = this.fin.Application.wrapSync(this.identity);
    }
    /**
     * Creates a new view and attaches it to a specified target window.
     * @param { View~options } viewOptions View creation options
     * @param { Identity } [target] The window to which the new view is to be attached. If no target, create a view in a new window.
     * @param { Identity } [targetView] If provided, the new view will be added to the same tabstrip as targetView.
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async createView(viewOptions, target, targetView) {
        this.wire.sendAction('platform-create-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const response = await client.dispatch('create-view', {
            target,
            opts: viewOptions,
            targetView
        });
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createView call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        return this.fin.View.wrapSync(response.identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options Window creation options
     * @return { Promise<_Window> }
     * @tutorial Platform.createWindow
     */
    async createWindow(options) {
        this.wire.sendAction('platform-create-window', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        if (!options.reason) {
            options.reason = Platform_1.WindowCreationReason.APICall;
        }
        const response = await client.dispatch('create-view-container', options);
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createWindow call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        const { identity } = response;
        const res = this.fin.Window.wrapSync(identity);
        // we add the identity at the top level for backwards compatibility.
        res.name = identity.name;
        res.uuid = identity.uuid;
        return res;
    }
    /**
     * Closes current platform, all its windows, and their views.
     * @return { Promise<void> }
     * @tutorial Platform.quit
     */
    async quit() {
        this.wire.sendAction('platform-quit', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('quit');
    }
    /**
     * Closes a specified view in a target window.
     * @param { Identity } viewIdentity View identity
     * @return { Promise<void> }
     * @tutorial Platform.closeView
     */
    async closeView(viewIdentity) {
        this.wire.sendAction('platform-close-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        await client.dispatch('close-view', {
            view: viewIdentity
        });
    }
    /**
     * ***DEPRECATED - please use Platform.createView.***
     * Reparents a specified view in a new target window.
     * @param { Identity } viewIdentity View identity
     * @param { Identity } target new owner window identity
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async reparentView(viewIdentity, target) {
        var _a;
        // eslint-disable-next-line no-console
        console.warn('Platform.reparentView has been deprecated, please use Platform.createView');
        this.wire.sendAction('platform-reparent-view', this.identity).catch((e) => {
            // don't expose
        });
        const normalizedViewIdentity = {
            ...viewIdentity,
            uuid: (_a = viewIdentity.uuid) !== null && _a !== void 0 ? _a : this.identity.uuid
        };
        const view = await this.fin.View.wrap(normalizedViewIdentity);
        const viewOptions = await view.getOptions();
        return this.createView(viewOptions, target);
    }
    /**
     * Returns a snapshot of the platform in its current state.
     *
     * Can be used to restore an application to a previous state.
     * @return { Promise<Snapshot> }
     * @tutorial Platform.getSnapshot
     */
    async getSnapshot() {
        this.wire.sendAction('platform-get-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('get-snapshot');
    }
    /**
     * Adds a snapshot to a running Platform.
     * Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.
     *
     * Can optionally close existing windows and overwrite current platform state with that of a snapshot.
     *
     * The function accepts either a snapshot taken using {@link Platform#getSnapshot getSnapshot},
     * or a url or filepath to a snapshot JSON object.
     * @param { Snapshot | string } requestedSnapshot Snapshot to apply, or a url or filepath.
     * @param { ApplySnapshotOptions } [options] Optional parameters to specify whether existing windows should be closed.
     * @return { Promise<Platform> }
     * @tutorial Platform.applySnapshot
     */
    async applySnapshot(requestedSnapshot, options) {
        this.wire.sendAction('platform-apply-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const errMsg = 'Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.';
        let snapshot;
        if (typeof requestedSnapshot === 'string') {
            // Fetch and parse snapshot
            try {
                const response = await this._channel.wire.sendAction('get-application-manifest', {
                    manifestUrl: requestedSnapshot
                });
                snapshot = response.payload.data;
            }
            catch (err) {
                throw new Error(`${errMsg}: ${err}`);
            }
        }
        else {
            snapshot = requestedSnapshot;
        }
        if (!snapshot.windows) {
            throw new Error(errMsg);
        }
        const client = await this.getClient();
        await client.dispatch('apply-snapshot', {
            snapshot,
            options
        });
        return this;
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * Can be overwritten using {@link Platform#init Platform.init}.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return { Promise<any> }
     * @tutorial Platform.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const client = await this.getClient();
        return client.dispatch('platform-fetch-manifest', { manifestUrl });
    }
    /**
     * Retrieves a manifest by url and launches a legacy application manifest or snapshot into the platform.  Returns a promise that
     * resolves to the wrapped Platform.
     * @param {string} manifestUrl - The URL of the manifest that will be launched into the platform.  If this app manifest
     * contains a snapshot, that will be launched into the platform.  If not, the application described in startup_app options
     * will be launched into the platform. The applicable startup_app options will become {@link View~options View Options}.
     * @return {Promise<Platform>}
     * @tutorial Platform.launchContentManifest
     * @experimental
     */
    async launchContentManifest(manifestUrl) {
        this.wire.sendAction('platform-launch-content-manifest', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const manifest = await this.fetchManifest(manifestUrl);
        client.dispatch('launch-into-platform', { manifest });
        return this;
    }
    /**
     * Set the context of a host window. The context will be available to the window itself, and to its child Views. It will be saved in any platform snapshots.
     * It can be retrieved using {@link Platform#getWindowContext getWindowContext}.
     * @param {any} context - A field where serializable context data can be stored to be saved in platform snapshots.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, the update will be applied
     * to the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<void>}
     * @tutorial Platform.setWindowContext
     * @experimental
     */
    async setWindowContext(context = {}, target) {
        this.wire.sendAction('platform-set-window-context', this.identity).catch((e) => {
            // don't expose
        });
        if (!context) {
            throw new Error('Please provide a serializable object or string to set the context.');
        }
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        await client.dispatch('set-window-context', {
            context,
            entityType,
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name }
        });
    }
    /**
     * Get the context context of a host window that was previously set using {@link Platform#setWindowContext setWindowContext}.
     * The context will be saved in any platform snapshots.  Returns a promise that resolves to the context.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, target will be
     * the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<any>}
     * @tutorial Platform.getWindowContext
     * @experimental
     */
    async getWindowContext(target) {
        this.wire.sendAction('platform-get-window-context', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        return client.dispatch('get-window-context', {
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name },
            entityType
        });
    }
}
exports.Platform = Platform;
_connectToProvider = new WeakMap();


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/common-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/common-utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidPresetType = void 0;
function isValidPresetType(type) {
    switch (type) {
        case "columns" /* columns */:
        case "grid" /* grid */:
        case "rows" /* rows */:
        case "tabs" /* tabs */:
            return true;
        default:
            return false;
    }
}
exports.isValidPresetType = isValidPresetType;
exports["default"] = { isValidPresetType };


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/platform/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/platform/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/layout/Factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/layout/Factory.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _layoutManager;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutModule = void 0;
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/platform/layout/Instance.js");
const base_1 = __webpack_require__(/*! ../../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * InitLayoutOptions interface
 * @typedef { object } InitLayoutOptions
 * @property { string } [containerId] The id attribute of the container where the window's Layout should be initialized.  If not provided
 * then an element with id `layout-container` is used. We recommend using a div element.
 */
/**
 * PresetLayoutOptions interface
 * @typedef { object } PresetLayoutOptions
 * @property { LayoutPresetTypes } presetType Which preset layout arrangement to use.
 * The preset options are `columns`, `grid`, `rows`, and `tabs`.
 */
/**
 * LayoutConfig interface
 * @typedef { object } LayoutConfig
 * @property { Array<LayoutItem> } content Content of the layout.  There can only be one top-level LayoutItem in the content array.
 * We do not recommend trying to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot}
 * or our {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { LayoutSettings } settings Configuration for certain Layout behaviors. See the LayoutSettings interface.
 */
/**
 * LayoutItem Interface
 * @typedef { object } LayoutItem Represents the arrangement of Views within a Platform window's Layout.  We do not recommend trying
 * to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot} or our
 * {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { string } type The type of the item. Possible values are 'row', 'column', 'stack', and 'component'.
 * @property { Array<LayoutItem> } [content] An array of configurations for items that will be created as children of this item.
 * @property { string } [componentName] Only a `component` type will have this property and it should be set to `view`.
 * @property { View~options } [componentState] Only a `component` type will have this property and it represents the view
 * options of a given component.
 */
/**
 * LayoutSettings Interface
 * @typedef { object } LayoutSettings Represents a potential ways to customize behavior of your Layout
 * @property { boolean } [constrainDragToHeaders=false] Limits the area to which tabs can be dragged.
 * If true, stack headers are the only areas where tabs can be dropped.
 * @property { boolean } [hasHeaders=true] Turns tab headers on or off.
 * If false, the layout will be displayed with splitters only.
 * @property {object} [newTabButton]
 * Configuration of the Plus button that appears on each tabstrip. Upon pressing, a new tab
 * will be added to the tabstrip with the specified url.
 * @property {string} [newTabButton.url] Specifies the url that opens in the tab created upon pressing the button.
 * @property { boolean } [popoutWholeStack=false] Whether the popout button will only act on the entire stack,
 * as opposed to only the active tab.
 * @property { boolean } [preventDragIn=false] If true, tabs can't be dragged into the window.
 * @property { boolean } [preventDragOut=false] If true, tabs can't be dragged out of the window.
 * @property { boolean } [reorderEnabled=true] If true, the user can re-arrange the layout by
 * dragging items by their tabs to the desired location.
 * @property { boolean } [showCloseIcon=false] Whether to show the close button on stack header
 * (not to be confused with close button on every tab).
 * @property { boolean } [showMaximiseIcon=false] Whether to show the maximize button on stack header.
 * The button will maximize the current tab to fill the entire window.
 * @property { boolean } [showPopoutIcon=false] Whether to show the popout button on stack header.
 * The button will create a new window with current tab as its content.
 * In case `popoutWholeStack` is set to true, all tabs in the stack will be in the new window.
 */
/**
 * @lends Platform#Layout
 */
class LayoutModule extends base_1.Base {
    constructor() {
        super(...arguments);
        _layoutManager.set(this, void 0);
        /**
         * Initialize the window's Layout.  Must be called from a custom window that has a 'layout' option set upon creation of that window.
         * If a containerId is not provided, this method attempts to find an element with the id `layout-container`.
         * A Layout will <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         * In order to capture the relevant events during Layout initiation, set up the listeners on the DOM element prior to calling `init`.
         * @param { InitLayoutOptions } [options] - Layout init options.
         * @return { Promise<Layout> }
         * @static
         * @experimental
         * @tutorial Layout.init
         */
        this.init = async (options = {}) => {
            this.wire.sendAction('layout-init').catch((e) => {
                // don't expose
            });
            if (!this.fin.me.isWindow) {
                throw new Error('Layout.init can only be called from a Window context.');
            }
            else if (__classPrivateFieldGet(this, _layoutManager)) {
                throw new Error('Layout for this window already initialized, please use Layout.replace call to replace the layout.');
            }
            // We need to go through environment to make sure it is only imported/bundled in OpenFin.
            const ManagerConstructor = await this.wire.environment.getManagerConstructor();
            __classPrivateFieldSet(this, _layoutManager, new ManagerConstructor());
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore - layout warning here for backwards compatibility, can remove layout check in .52
            let { layout, containerId } = options;
            if (layout) {
                console.warn(`We recommend using a layout in window options.
                This layout has not been sanitized and unexpected behavior can occur.`);
            }
            layout = layout || (await this.fin.Window.getCurrentSync().getOptions()).layout;
            containerId = containerId || 'layout-container';
            const container = document.getElementById(containerId);
            // Should we error here if there is no container? Getting a typescript complaint on createLayout
            // override here
            // pull createChannelConnection out of LayoutManager and setup channel connections here using layoutmanager instance methods?
            await __classPrivateFieldGet(this, _layoutManager).initManager();
            await __classPrivateFieldGet(this, _layoutManager).createLayout(layout, container);
            // Adding this to the returned instance undocumented/typed for Browser.
            return Object.assign(this.getCurrentSync(), { layoutManager: __classPrivateFieldGet(this, _layoutManager) });
        };
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Promise.<Layout>}
     * @tutorial Layout.wrap
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    async wrap(identity) {
        this.wire.sendAction('layout-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Layout}
     * @tutorial Layout.wrapSync
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    wrapSync(identity) {
        this.wire.sendAction('layout-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @return {Promise.<Layout>}
     * @tutorial Layout.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('layout-get-current').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @return {Layout}
     * @tutorial Layout.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('layout-get-current-sync').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrapSync({ uuid, name });
    }
}
exports.LayoutModule = LayoutModule;
_layoutManager = new WeakMap();


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/layout/Instance.js":
/*!**************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/layout/Instance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-undef, import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
const validate_1 = __webpack_require__(/*! ../../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const common_utils_1 = __webpack_require__(/*! ../common-utils */ "./node_modules/openfin-adapter/src/api/platform/common-utils.js");
const base_1 = __webpack_require__(/*! ../../base */ "./node_modules/openfin-adapter/src/api/base.js");
/**
 * @lends Platform#Layout
 */
class Layout extends base_1.Base {
    // eslint-disable-next-line no-shadow
    constructor(identity, wire) {
        super(wire);
        /**
         * Replaces a Platform window's layout with a new layout.  Any views that were in the old layout but not the new layout
         * will be destroyed.
         * @param { LayoutConfig } layout New layout to implement in the target window.
         * Please see explanation of a layout {@link https://developers.openfin.co/docs/platform-api#section-layout here}.
         * @return { Promise<void> }
         * @tutorial Layout.replace
         */
        this.replace = async (layout) => {
            this.wire.sendAction('layout-replace').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-layout', {
                target: this.identity,
                opts: { layout }
            });
        };
        /**
         * Replaces the specified view with a view with the provided configuration.
         * The old view is stripped of its listeners and either closed or attached to the provider window
         * depending on `detachOnClose` view option.
         * @param { Identity } viewToReplace Identity of the view to be replaced
         * @param { View~options } newView Creation options of the new view.
         * @return { Promise<void> }
         * @tutorial Layout.replaceView
         */
        this.replaceView = async (viewToReplace, newView) => {
            this.wire.sendAction('layout-replace-view').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-view', {
                target: this.identity,
                opts: { viewToReplace, newView }
            });
        };
        /**
         * Replaces a Platform window's layout with a preset layout arrangement using the existing Views attached to the window.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @param { PresetLayoutOptions } options Mandatory object with `presetType` property that sets which preset layout arrangement to use.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @return { Promise<void> }
         * @tutorial Layout.applyPreset
         */
        this.applyPreset = async (options) => {
            this.wire.sendAction('layout-apply-preset').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            const { presetType } = options;
            if (!presetType || !common_utils_1.isValidPresetType(presetType)) {
                throw new Error('Cannot apply preset layout, please include an applicable presetType property in the PresetLayoutOptions.');
            }
            await client.dispatch('apply-preset-layout', {
                target: this.identity,
                opts: { presetType }
            });
        };
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this.identity = identity;
        this.platform = this.fin.Platform.wrapSync({ uuid: identity.uuid });
        if (identity.uuid === this.fin.me.uuid && identity.name === this.fin.me.name) {
            this.init = this.fin.Platform.Layout.init;
        }
    }
    /**
     * Returns the configuration of the window's layout.  Returns the same information that is returned for all windows in getSnapshot.
     * @return { Promise<LayoutConfig> }
     * @tutorial Layout.getConfig
     */
    async getConfig() {
        this.wire.sendAction('layout-get-config').catch((e) => {
            // don't expose
        });
        const client = await this.platform.getClient();
        return client.dispatch('get-frame-snapshot', {
            target: this.identity
        });
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/layout/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/layout/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/platform/layout/Factory.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/platform/layout/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./shapes */ "./node_modules/openfin-adapter/src/api/platform/layout/shapes.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/platform/layout/shapes.js":
/*!************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/platform/layout/shapes.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/snapshot-source/Factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/snapshot-source/Factory.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/snapshot-source/Instance.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
/**
 * @typedef { object } SnapshotProvider
 * @property {getSnapshot} [getSnapshot]
 * @property {applySnapshot} [applySnapshot]
 */
/**
 * @lends SnapshotSource
 */
class SnapshotSourceModule extends base_1.Base {
    /**
     * Initializes a SnapshotSource with the getSnapshot and applySnapshot methods defined.
     * @param { SnapshotProvider } provider
     * @return { Promise<void> }
     * @tutorial SnapshotSource.init
     * @static
     */
    async init(provider) {
        this.wire.sendAction('snapshot-source-init').catch((e) => {
            // don't expose, analytics-only call
        });
        if (typeof provider !== 'object' ||
            typeof provider.getSnapshot !== 'function' ||
            typeof provider.applySnapshot !== 'function') {
            throw new Error('you must pass in a valid SnapshotProvider');
        }
        const channel = await this.fin.InterApplicationBus.Channel.create(utils_1.getSnapshotSourceChannelName(fin.me.identity));
        channel.register("get-snapshot" /* GET_SNAPSHOT */, async () => {
            const snapshot = await provider.getSnapshot();
            return { snapshot };
        });
        channel.register("apply-snapshot" /* APPLY_SNAPSHOT */, ({ snapshot }) => provider.applySnapshot(snapshot));
    }
    /**
     * Synchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { SnapshotSource }
     * @tutorial SnapshotSource.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('snapshot-source-wrap-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new Instance_1.SnapshotSource(this.wire, identity);
    }
    /**
     * Asynchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { Promise.<SnapshotSource> }
     * @tutorial SnapshotSource.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('snapshot-source-wrap').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.wrapSync(identity);
    }
}
exports["default"] = SnapshotSourceModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/snapshot-source/Instance.js":
/*!**************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/snapshot-source/Instance.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _identity, _getConnection, _getClient, _startConnection, _setUpConnectionListener;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSource = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
const connectionMap = new Map();
/**
 * Enables configuring a SnapshotSource with custom getSnapshot and applySnapshot methods.
 * @namespace
 */
class SnapshotSource extends base_1.Base {
    constructor(wire, id) {
        super(wire);
        _identity.set(this, void 0);
        _getConnection.set(this, () => {
            if (!connectionMap.has(this.identity.uuid)) {
                connectionMap.set(this.identity.uuid, { eventFired: null, clientPromise: null });
            }
            return connectionMap.get(this.identity.uuid);
        });
        _getClient.set(this, () => {
            if (!__classPrivateFieldGet(this, _getConnection).call(this).clientPromise) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = __classPrivateFieldGet(this, _startConnection).call(this);
            }
            return __classPrivateFieldGet(this, _getConnection).call(this).clientPromise;
        });
        _startConnection.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            try {
                if (!__classPrivateFieldGet(this, _getConnection).call(this).eventFired) {
                    await __classPrivateFieldGet(this, _setUpConnectionListener).call(this);
                }
                const client = await this.fin.InterApplicationBus.Channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                    __classPrivateFieldGet(this, _getConnection).call(this).eventFired = null;
                });
                return client;
            }
            catch (e) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                throw new Error("The targeted SnapshotSource is not currently initialized. Await this object's ready() method.");
            }
        });
        _setUpConnectionListener.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            let resolve;
            let reject;
            const eventFired = new Promise((y, n) => {
                resolve = y;
                reject = n;
            });
            __classPrivateFieldGet(this, _getConnection).call(this).eventFired = eventFired;
            const listener = async (e) => {
                try {
                    if (e.channelName === channelName) {
                        resolve();
                        await this.fin.InterApplicationBus.Channel.removeListener('connected', listener);
                    }
                }
                catch (err) {
                    reject(err);
                }
            };
            await this.fin.InterApplicationBus.Channel.on('connected', listener);
        });
        __classPrivateFieldSet(this, _identity, id);
    }
    get identity() {
        return __classPrivateFieldGet(this, _identity);
    }
    /**
     * Method to determine if the SnapshotSource has been initialized.
     *
     * Use when the parent application is starting up to ensure the SnapshotSource is able to accept and
     * apply a snapshot using the {@link SnapshotSource#applySnapshot applySnapshot} method.
     * @return { Promise<void> }
     * @tutorial SnapshotSource.ready
     */
    async ready() {
        this.wire.sendAction('snapshot-source-ready').catch((e) => {
            // don't expose, analytics-only call
        });
        // eslint-disable-next-line no-async-promise-executor
        try {
            // If getClient was already called before this, do we have a timing issue where the channel might have been created but we missed the event but this still fails?
            await __classPrivateFieldGet(this, _getClient).call(this);
        }
        catch (e) {
            // it was not running.
            await __classPrivateFieldGet(this, _getConnection).call(this).eventFired;
        }
    }
    /**
     * Call the SnapshotSource's getSnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<any> }
     */
    async getSnapshot() {
        this.wire.sendAction('snapshot-source-get-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        const response = (await client.dispatch("get-snapshot" /* GET_SNAPSHOT */));
        return (await response).snapshot;
    }
    /**
     * Call the SnapshotSource's applySnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<void> }
     */
    async applySnapshot(snapshot) {
        this.wire.sendAction('snapshot-source-apply-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        return client.dispatch("apply-snapshot" /* APPLY_SNAPSHOT */, { snapshot });
    }
}
exports.SnapshotSource = SnapshotSource;
_identity = new WeakMap(), _getConnection = new WeakMap(), _getClient = new WeakMap(), _startConnection = new WeakMap(), _setUpConnectionListener = new WeakMap();


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/snapshot-source/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/snapshot-source/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/snapshot-source/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/snapshot-source/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/snapshot-source/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/snapshot-source/utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSourceActions = exports.getSnapshotSourceChannelName = void 0;
const channelPrefix = 'snapshot-source-provider-';
exports.getSnapshotSourceChannelName = (id) => `${channelPrefix}${id.uuid}`;
var SnapshotSourceActions;
(function (SnapshotSourceActions) {
    SnapshotSourceActions["GET_SNAPSHOT"] = "get-snapshot";
    SnapshotSourceActions["APPLY_SNAPSHOT"] = "apply-snapshot";
})(SnapshotSourceActions = exports.SnapshotSourceActions || (exports.SnapshotSourceActions = {}));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/system/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/system/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const transport_errors_1 = __webpack_require__(/*! ../../transport/transport-errors */ "./node_modules/openfin-adapter/src/transport/transport-errors.js");
const window_1 = __webpack_require__(/*! ../window */ "./node_modules/openfin-adapter/src/api/window/index.js");
/**
 * AppAssetInfo interface
 * @typedef { object } AppAssetInfo
 * @property { string } src  The URL to a zip file containing the package files (executables, dlls, etc…)
 * @property { string } alias The name of the asset
 * @property { string } version The version of the package
 * @property { string } target Specify default executable to launch. This option can be overridden in launchExternalProcess
 * @property { string } args The default command line arguments for the aforementioned target.
 * @property { boolean } mandatory When set to true, the app will fail to load if the asset cannot be downloaded.
 * When set to false, the app will continue to load if the asset cannot be downloaded. (Default: true)
 */
/**
 * AppAssetRequest interface
 * @typedef { object } AppAssetRequest
 * @property { string } alias The name of the asset
 */
/**
 * ApplicationInfo interface
 * @typedef { object } ApplicationInfo
 * @property { boolean } isPlatform true when the application is a Platform controller
 * @property { boolean } isRunning  true when the application is running
 * @property { string } uuid uuid of the application
 * @property { string } parentUuid uuid of the application that launches this application
 */
/**
 * @typedef { object } ClearCacheOption
 * @summary Clear cache options.
 * @desc These are the options required by the clearCache function.
 *
 * @property {boolean} appcache html5 application cache
 * @property {boolean} cache browser data cache for html files and images
 * @property {boolean} cookies browser cookies
 * @property {boolean} localStorage browser data that can be used across sessions
 */
/**
 * CookieInfo interface
 * @typedef { object } CookieInfo
 * @property { string } name  The name of the cookie
 * @property { string } domain The domain of the cookie
 * @property { string } path The path of the cookie
 */
/**
 * CookieOption interface
 * @typedef { object } CookieOption
 * @property { string } name The name of the cookie
 */
/**
 * CpuInfo interface
 * @typedef { object } CpuInfo
 * @property { string } model The model of the cpu
 * @property { number } speed The number in MHz
 * @property { Time } times The numbers of milliseconds the CPU has spent in different modes.
 */
/**
 * CrashReporterOption interface
 * @typedef { object } CrashReporterOption
 * @property { boolean } diagnosticMode In diagnostic mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 * @property { boolean } isRunning check if it's running
 */
/**
 * DipRect interface
 * @typedef { object } DipRect
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DipScaleRects interface
 * @typedef { object } DipScaleRects
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DownloadPreloadInfo interface
 * @typedef { object } DownloadPreloadInfo
 * @desc downloadPreloadScripts function return value
 * @property { string } url url to the preload script
 * @property { string } error error during preload script acquisition
 * @property { boolean } succeess download operation success
 */
/**
 * DownloadPreloadOption interface
 * @typedef { object } DownloadPreloadOption
 * @desc These are the options object required by the downloadPreloadScripts function
 * @property { string } url url to the preload script
 */
/**
 * Entity interface
 * @typedef { object } Entity
 * @property { string } type The type of the entity
 * @property { string } uuid The uuid of the entity
 */
/**
 * EntityInfo interface
 * @typedef { object } EntityInfo
 * @property { string } name The name of the entity
 * @property { string } uuid The uuid of the entity
 * @property { Identity } parent The parent of the entity
 * @property { string } entityType The type of the entity
 */
/**
 * ExternalApplicationInfo interface
 * @typedef { object } ExternalApplicationInfo
 * @property { Identity } parent The parent identity
 */
/**
 * ExternalConnection interface
 * @typedef { object } ExternalConnection
 * @property { string } token The token to broker an external connection
 * @property { string } uuid The uuid of the external connection
 */
/**
 * ExternalProcessRequestType interface
 * @typedef { object } ExternalProcessRequestType
 * @property { string } path The file path to where the running application resides
 * @property { string } arguments The argument passed to the running application
 * @property { LaunchExternalProcessListener } listener This is described in the {LaunchExternalProcessListner} type definition
 * @property { string } initialWindowState Initial window state after launching: 'normal' (default), 'minimized', 'maximized'
 * @property { string } cwd current working directory
 */
/**
 * FrameInfo interface
 * @typedef { object } FrameInfo
 * @property { string } name The name of the frame
 * @property { string } uuid The uuid of the frame
 * @property { EntityType } entityType The entity type, could be 'window', 'iframe', 'external connection' or 'unknown'
 * @property { Identity } parent The parent identity
 */
/**
 * GetLogRequestType interface
 * @typedef { object } GetLogRequestType
 * @property { string } name The name of the running application
 * @property { number } endFile The file length of the log file
 * @property { number } sizeLimit The set size limit of the log file
 */
/**
 * GpuInfo interface
 * @typedef { object } GpuInfo
 * @property { string } name The graphics card name
 */
/**
 * HostSpecs interface
 * @typedef { object } HostSpecs
 * @property { boolean } aeroGlassEnabled Value to check if Aero Glass theme is supported on Windows platforms
 * @property { string } arch "x86" for 32-bit or "x86_64" for 64-bit
 * @property { Array<CpuInfo> } cpus The same payload as Node's os.cpus()
 * @property { GpuInfo } gpu The graphics card name
 * @property { number } memory The same payload as Node's os.totalmem()
 * @property { string } name The OS name and version/edition
 * @property { boolean } screenSaver Value to check if screensaver is running. Supported on Windows only
 */
/**
 * Identity interface
 * @typedef { object } Identity
 * @property { string } name Optional - the name of the component
 * @property { string } uuid Universally unique identifier of the application
 */
/**
 * LogInfo interface
 * @typedef { object } LogInfo
 * @property { string } name The filename of the log
 * @property { number } size The size of the log in bytes
 * @property { string } date The unix time at which the log was created "Thu Jan 08 2015 14:40:30 GMT-0500 (Eastern Standard Time)"
 */
/**
 * ManifestInfo interface
 * @typedef { object } ManifestInfo
 * @property { string } uuid The uuid of the application
 * @property { string } manifestUrl The runtime manifest URL
 */
/**
 * MonitorDetails interface
 * @typedef { object } MonitorDetails
 * @property { DipScaleRects } available The available DIP scale coordinates
 * @property { Rect } availableRect The available monitor coordinates
 * @property { string } deviceId The device id of the display
 * @property { boolean } displayDeviceActive true if the display is active
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Rect } monitorRect The monitor coordinates
 * @property { string } name The name of the display
 * @property { Point } dpi The dots per inch
 * @property { DipScaleRects } monitor The monitor coordinates
 */
/**
 * MonitorInfo interface
 * @typedef { object } MonitorInfo
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Point } dpi The dots per inch
 * @property { Array<MonitorDetails> } nonPrimaryMonitors The array of monitor details
 * @property { MonitorDetails } primaryMonitor The monitor details
 * @property { string } reason always "api-query"
 * @property { TaskBar } taskBar The taskbar on monitor
 * @property { DipRect } virtualScreen The virtual display screen coordinates
 */
/**
 * @typedef { verbose | info | warning | error | fatal } LogLevel
 * @summary Log verbosity levels.
 * @desc Describes the minimum level (inclusive) above which logs will be written
 *
 * @property { string } verbose all logs written
 * @property { string } info info and above
 * @property { string } warning warning and above
 * @property { string } error error and above
 * @property { string } fatal fatal only, indicates a crash is imminent
 */
/**
 * PointTopLeft interface
 * @typedef { object } PointTopLeft
 * @property { number } top The mouse top position in virtual screen coordinates
 * @property { number } left The mouse left position in virtual screen coordinates
 */
/**
 * Point interface
 * @typedef { object } Point
 * @property { number } x The mouse x position
 * @property { number } y The mouse y position
 */
/**
 * ProcessInfo interface
 * @typedef { object } ProcessInfo
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { string } name The application name
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } processId The native process identifier
 * @property { string } uuid The application UUID
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 */
/**
 * SystemProcessInfo interface
 * @typedef { object } SystemProcessInfo
 * @property { ProcessDetails } browserProcess Info on browser process
 * @property { Array<AppProcessInfo> } apps Array of apps and their process info
 */
/**
 * AppProcessInfo interface
 * @typedef { object } AppProcessInfo
 * @property { string } uuid The uuid of the application
 * @property { Array<EntityProcessDetails> } entities  Array of process info for each window and view for the application
 */
/**
 * EntityProcessDetails interface
 * @typedef { object } EntityProcessDetails
 * @property { string } uuid The uuid for the entity
 * @property { string } name The name for the entity
 * @property { string } url URL associated with the entity
 * @property { string } entityType Type for the entity: window or view
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 * @property { Array<FrameProcessDetails> } frames Array of process info for each iframe corresponeding to the entity
 */
/**
 * FrameProcessDetails interface
 * @typedef { object } FrameProcessDetails
 * @property { string } url Current URL associated with the process
 * @property { string } entityType Type for the frame
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProcessDetails interface
 * @typedef { object } ProcessDetails
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProxyConfig interface
 * @typedef { object } ProxyConfig
 * @property { string } proxyAddress The configured proxy address
 * @property { number } proxyPort The configured proxy port
 * @property { string } type The proxy Type
 */
/**
 * ProxyInfo interface
 * @typedef { object } ProxyInfo
 * @property { ProxyConfig } config The proxy config
 * @property { ProxySystemInfo } system The proxy system info
 */
/**
 * QueryPermissionResult interface
 * @typedef { object } QueryPermissionResult
 * @property { string } permission The full name of a secured API
 * @property { string } state 'granted' | 'denied' | 'unavailable'
 * @property { boolean } granted true if permission is granted
 * @property { object } [rawValue] The value of permission
 */
/**
 * ProxySystemInfo interface
 * @typedef { object } ProxySystemInfo
 * @property { string } autoConfigUrl The auto configuration url
 * @property { string } bypass The proxy bypass info
 * @property { boolean } enabled Value to check if a proxy is enabled
 * @property { string } proxy The proxy info
 */
/**
 * Rect interface
 * @typedef { object } Rect
 * @property { number } bottom The bottom-most coordinate
 * @property { number } left The left-most coordinate
 * @property { number } right The right-most coordinate
 * @property { number } top The top-most coordinate
 */
/**
 * RegistryInfo interface
 * @typedef { object } RegistryInfo
 * @property { any } data The registry data
 * @property { string } rootKey The registry root key
 * @property { string } subkey The registry key
 * @property { string } type The registry type
 * @property { string } value The registry value name
 */
/**
 * RuntimeDownloadOptions interface
 * @typedef { object } RuntimeDownloadOptions
 * @desc These are the options object required by the downloadRuntime function.
 * @property { string } version The given version to download
 */
/**
 * RuntimeInfo interface
 * @typedef { object } RuntimeInfo
 * @property { string } architecture The runtime build architecture
 * @property { string } manifestUrl The runtime manifest URL
 * @property { number } port The runtime websocket port
 * @property { string } securityRealm The runtime security realm
 * @property { string } version The runtime version
 * @property { object } args the command line argument used to start the Runtime
 * @property { string } chromeVersion The chrome version
 * @property { string } electronVersion The electron version
 */
/**
 * RVMInfo interface
 * @typedef { object } RVMInfo
 * @property { string } action The name of action: "get-rvm-info"
 * @property { string } appLogDirectory The app log directory
 * @property { string } path The path of OpenfinRVM.exe
 * @property { string } 'start-time' The start time of RVM
 * @property { string } version The version of RVM
 * @property { string } 'working-dir' The working directory
 */
/**
 * RvmLaunchOptions interface
 * @typedef { object } RvmLaunchOptions
 * @property { boolean } [noUi] true if no UI when launching
 * @property { object } [userAppConfigArgs] The user app configuration args
 */
/**
 * ServiceIdentifier interface
 * @typedef { object } ServiceIdentifier
 * @property { string } name The name of the service
 */
/**
 * ServiceConfiguration interface
 * @typedef { object } ServiceConfiguration
 * @property { object } config The service configuration
 * @property { string } name The name of the service
 */
/**
 * ShortCutConfig interface
 * @typedef { object } ShortCutConfig
 * @property { boolean } desktop true if application has a shortcut on the desktop
 * @property { boolean } startMenu true if application has shortcut in the start menu
 * @property { boolean } systemStartup true if application will be launched on system startup
 */
/**
 * SubOptions interface
 * @typedef { Object } SubOptions
 * @property { number } timestamp The event timestamp
 */
/**
 * TaskBar interface
 * @typedef { object } TaskBar
 * @property { string } edge which edge of a monitor the taskbar is on
 * @property { Rect } rect The taskbar coordinates
 */
/**
 * TerminateExternalRequestType interface
 * @typedef { object } TerminateExternalRequestType
 * @property { string } uuid The uuid of the running application
 * @property { number } timeout Time out period before the running application terminates
 * @property { boolean } killtree Value to terminate the running application
 */
/**
 * Time interface
 * @typedef { object } Time
 * @property { number } user The number of milliseconds the CPU has spent in user mode
 * @property { number } nice The number of milliseconds the CPU has spent in nice mode
 * @property { number } sys The number of milliseconds the CPU has spent in sys mode
 * @property { number } idle The number of milliseconds the CPU has spent in idle mode
 * @property { number } irq The number of milliseconds the CPU has spent in irq mode
 */
/**
 * TrayInfo interface
 * @typedef { object } TrayInfo
 * @property { Bounds } bounds The bound of tray icon in virtual screen pixels
 * @property { MonitorInfo } monitorInfo Please see fin.System.getMonitorInfo for more information
 * @property { number } x copy of bounds.x
 * @property { number } y copy of bounds.y
 */
/**
 * WindowDetail interface
 * @typedef { object } WindowDetail
 * @property { number } bottom The bottom-most coordinate of the window
 * @property { number } height The height of the window
 * @property { boolean } isShowing Value to check if the window is showing
 * @property { number } left The left-most coordinate of the window
 * @property { string } name The name of the window
 * @property { number } right The right-most coordinate of the window
 * @property { string } state The window state
 * @property { number } top The top-most coordinate of the window
 * @property { number } width The width of the window
 */
/**
 * WindowInfo interface
 * @typedef { object } WindowInfo
 * @property { Array<WindowDetail> } childWindows The array of child windows details
 * @property { WindowDetail } mainWindow The main window detail
 * @property { string } uuid The uuid of the application
 */
/**
 * CertifiedAppInfo interface
 * @typedef { object } CertifiedAppInfo
 * @property { boolean } isRunning true if the app is running
 * @property { boolean } [isOptedIntoCertfiedApp] true if the app has opted into certification
 * @property { boolean } [isCertified] true if the app is certified
 * @property { boolean } [isSSLCertified] true if the app manifest's SSL certificate is valid
 * @property { boolean } [isPresentInAppDirectory] true if the app is present in the OpenFin app directory
 */
/**
 * An object representing the core of OpenFin Runtime. Allows the developer
 * to perform system-level actions, such as accessing logs, viewing processes,
 * clearing the cache and exiting the runtime as well as listen to <a href="tutorial-System.EventEmitter.html">system events</a>.
 * @namespace
 */
class System extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['system']);
    }
    sendExternalProcessRequest(action, options) {
        return new Promise((resolve, reject) => {
            const exitEventKey = 'external-process-exited';
            let processUuid;
            let exitPayload;
            let externalProcessExitHandler;
            let ofWindow;
            if (typeof options.listener === 'function') {
                externalProcessExitHandler = (payload) => {
                    const data = payload || {};
                    exitPayload = {
                        topic: 'exited',
                        uuid: data.processUuid || '',
                        exitCode: data.exitCode || 0
                    };
                    if (processUuid === payload.processUuid) {
                        options.listener(exitPayload);
                        ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                    }
                };
                // window constructor expects the name is not undefined
                if (!this.wire.me.name) {
                    this.wire.me.name = this.wire.me.uuid;
                }
                ofWindow = new window_1._Window(this.wire, this.wire.me);
                ofWindow.on(exitEventKey, externalProcessExitHandler);
            }
            this.wire
                .sendAction(action, options)
                .then(({ payload }) => {
                processUuid = payload.data.uuid;
                resolve(payload.data);
                if (exitPayload && processUuid === exitPayload.uuid) {
                    options.listener(exitPayload);
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
            })
                .catch((err) => {
                if (ofWindow) {
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
                reject(err);
            });
        });
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Returns the version of the runtime. The version contains the major, minor,
     * build and revision numbers.
     * @return {Promise.<string>}
     * @tutorial System.getVersion
     */
    getVersion() {
        return this.wire.sendAction('get-version').then(({ payload }) => payload.data);
    }
    /**
     * Clears cached data containing application resource
     * files (images, HTML, JavaScript files), cookies, and items stored in the
     * Local Storage.
     * @param { ClearCacheOption } options - See tutorial for more details.
     * @return {Promise.<void>}
     * @tutorial System.clearCache
     */
    clearCache(options) {
        return this.wire.sendAction('clear-cache', options).then(() => undefined);
    }
    /**
     * Clears all cached data when OpenFin Runtime exits.
     * @return {Promise.<void>}
     * @tutorial System.deleteCacheOnExit
     */
    deleteCacheOnExit() {
        return this.wire.sendAction('delete-cache-request').then(() => undefined);
    }
    /**
     * Exits the Runtime.
     * @return {Promise.<void>}
     * @tutorial System.exit
     */
    exit() {
        return this.wire.sendAction('exit-desktop').then(() => undefined);
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return {Promise.<any>}
     * @tutorial System.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const { payload: { data } } = await this.wire.sendAction('fetch-manifest', { manifestUrl });
        return data;
    }
    /**
     * Writes any unwritten cookies data to disk.
     * @return {Promise.<void>}
     * @tutorial System.flushCookieStore
     */
    flushCookieStore() {
        return this.wire.sendAction('flush-cookie-store').then(() => undefined);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<WindowInfo>}
     * @tutorial System.getAllWindows
     */
    getAllWindows() {
        return this.wire.sendAction('get-all-windows').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationInfo>}
     * @tutorial System.getAllApplications
     */
    getAllApplications() {
        return this.wire.sendAction('get-all-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the command line argument string that started OpenFin Runtime.
     * @return {Promise.<string>}
     * @tutorial System.getCommandLineArguments
     */
    getCommandLineArguments() {
        return this.wire.sendAction('get-command-line-arguments').then(({ payload }) => payload.data);
    }
    /**
     * Get the current state of the crash reporter.
     * @return {Promise.<CrashReporterOption>}
     * @tutorial System.getCrashReporterState
     */
    getCrashReporterState() {
        return this.wire.sendAction('get-crash-reporter-state').then(({ payload }) => payload.data);
    }
    /* <-- Note the one asterisk to hide from jsdoc because we don't want to publish this method anymore.
     * @deprecated Use {@link System.getMachineId} instead.
     */
    getDeviceId() {
        console.warn('Function is deprecated; use getMachineId instead.');
        return this.wire.sendAction('get-device-id').then(({ payload }) => payload.data);
    }
    /**
     * Start the crash reporter for the browser process if not already running.
     * You can optionally specify `diagnosticMode` to have the logs sent to
     * OpenFin on runtime close
     *
     * @param { CrashReporterOption } options - configure crash reporter
     * @return {Promise.<CrashReporterOption>}
     * @tutorial System.startCrashReporter
     */
    startCrashReporter(options) {
        return new Promise((resolve, reject) => {
            if (!options.diagnosticMode) {
                return reject(new Error('diagnosticMode not found in options'));
            }
            return this.wire
                .sendAction('start-crash-reporter', options)
                .then(({ payload }) => resolve(payload.data))
                .catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Returns a hex encoded hash of the mac address and the currently logged in user name
     * @return {Promise.<string>}
     * @tutorial System.getDeviceUserId
     */
    getDeviceUserId() {
        console.warn('Deprecation Warning: getDeviceUserId is deprecated. Please use System.getUniqueUserId');
        return this.wire.sendAction('get-device-user-id').then(({ payload }) => payload.data);
    }
    /**
     * Returns a hex encoded hash of the machine id and the currently logged in user name.
     * This is the recommended way to uniquely identify a user / machine combination.
     * @return {Promise.<string>}
     * @tutorial System.getUniqueUserId
     * @static
     */
    getUniqueUserId() {
        return this.wire.sendAction('get-unique-user-id').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves a frame info object for the uuid and name passed in
     * @param { string } uuid - The UUID of the target.
     * @param { string } name - The name of the target.
     * @return {Promise.<EntityInfo>}
     * @tutorial System.getEntityInfo
     */
    getEntityInfo(uuid, name) {
        return this.wire.sendAction('get-entity-info', { uuid, name }).then(({ payload }) => payload.data);
    }
    /**
     * Gets the value of a given environment variable on the computer on which the runtime is installed
     * @return {Promise.<string>}
     * @tutorial System.getEnvironmentVariable
     */
    getEnvironmentVariable(envName) {
        return this.wire
            .sendAction('get-environment-variable', {
            environmentVariables: envName
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Get current focused window.
     * @return {Promise.<WindowInfo>}
     * @tutorial System.getFocusedWindow
     */
    getFocusedWindow() {
        return this.wire.sendAction('get-focused-window').then(({ payload }) => payload.data);
    }
    /**
     * Get currently focused external window.
     * @return {Promise.<Identity>}
     * @experimental
     * @deprecated System.getFocusedExternalWindow will be removed by major version 22.
     */
    async getFocusedExternalWindow() {
        console.warn('Deprecation Warning: System.getFocusedExternalWindow will be removed by major version 22.');
        const { payload: { data } } = await this.wire.sendAction('get-focused-external-window');
        return data;
    }
    /**
     * Returns information about the given app's certification status
     * @return {Promise.<CertifiedAppInfo>}
     * @tutorial System.isAppCertified
     */
    async isAppCertified(manifestUrl) {
        const { payload: { data: { certifiedInfo } } } = await this.wire.sendAction('is-app-certified', { manifestUrl });
        return certifiedInfo;
    }
    /**
     * Returns an array of all the installed runtime versions in an object.
     * @return {Promise.<string[]>}
     * @tutorial System.getInstalledRuntimes
     */
    // incompatible with standalone node process.
    getInstalledRuntimes() {
        return this.wire.sendAction('get-installed-runtimes').then(({ payload }) => payload.data.runtimes);
    }
    // incompatible with standalone node process.
    async getInstalledApps() {
        const { payload: { data: { installedApps } } } = await this.wire.sendAction('get-installed-apps');
        return installedApps;
    }
    /**
     * Retrieves the contents of the log with the specified filename.
     * @param { GetLogRequestType } options A object that id defined by the GetLogRequestType interface
     * @return {Promise.<string>}
     * @tutorial System.getLog
     */
    getLog(options) {
        return this.wire.sendAction('view-log', options).then(({ payload }) => payload.data);
    }
    /**
     * Returns a unique identifier (UUID) provided by the machine.
     * @return {Promise.<string>}
     * @tutorial System.getMachineId
     */
    getMachineId() {
        return this.wire.sendAction('get-machine-id').then(({ payload }) => payload.data);
    }
    /**
     * Returns the minimum (inclusive) logging level that is currently being written to the log.
     * @return {Promise.<LogLevel>}
     * @tutorial System.getMinLogLevel
     */
    getMinLogLevel() {
        return this.wire.sendAction('get-min-log-level').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array containing information for each log file.
     * @return {Promise.Array<LogInfo>}
     * @tutorial System.getLogList
     */
    getLogList() {
        return this.wire.sendAction('list-logs').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an object that contains data about the monitor setup of the
     * computer that the runtime is running on.
     * @return {Promise.<MonitorInfo>}
     * @tutorial System.getMonitorInfo
     */
    getMonitorInfo() {
        return this.wire.sendAction('get-monitor-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns the mouse in virtual screen coordinates (left, top).
     * @return {Promise.<PointTopLeft>}
     * @tutorial System.getMousePosition
     */
    getMousePosition() {
        return this.wire.sendAction('get-mouse-position').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of all of the runtime processes that are currently
     * running. Each element in the array is an object containing the uuid
     * and the name of the application to which the process belongs.
     * @deprecated Please use our new set of process APIs:
     * [Window.getProcessInfo]{@link Window#getProcessInfo}
     * [View.getProcessInfo]{@link View#getProcessInfo}
     * [Application.getProcessInfo]{@link Application#getProcessInfo}
     * [System.getAllProcessInfo]{@link System#getAllProcessInfo}
     * @return {Promise.Array.<ProcessInfo>}
     * @tutorial System.getProcessList
     */
    getProcessList() {
        // eslint-disable-next-line no-console
        console.warn('System.getProcessList has been deprecated. Please consider using our new process APIs: Window.getProcessInfo, View.getProcessInfo, Application.getProcessInfo, System.getAllProcessInfo');
        return this.wire.sendAction('process-snapshot').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information. This includes the browser process and every process associated to all entities (windows and views).
     * @return {Promise.<SystemProcessInfo>}
     * @tutorial System.getAllProcessInfo
     * @experimental
     */
    async getAllProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-all-process-info', this.identity);
        return data;
    }
    /**
     * Retrieves the Proxy settings.
     * @return {Promise.<ProxyInfo>}
     * @tutorial System.getProxySettings
     */
    getProxySettings() {
        return this.wire.sendAction('get-proxy-settings').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running Runtime in an object.
     * @return {Promise.<RuntimeInfo>}
     * @tutorial System.getRuntimeInfo
     */
    getRuntimeInfo() {
        return this.wire.sendAction('get-runtime-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running RVM in an object.
     * @return {Promise.<RVMInfo>}
     * @tutorial System.getRvmInfo
     */
    // incompatible with standalone node process.
    getRvmInfo() {
        return this.wire.sendAction('get-rvm-info').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves system information.
     * @return {Promise.<HostSpecs>}
     * @tutorial System.getHostSpecs
     */
    getHostSpecs() {
        return this.wire.sendAction('get-host-specs').then(({ payload }) => payload.data);
    }
    /**
     * Runs an executable or batch file. A path to the file must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * <br> Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { ExternalProcessRequestType } options A object that is defined in the ExternalProcessRequestType interface
     * @return {Promise.<Identity>}
     * @tutorial System.launchExternalProcess
     */
    launchExternalProcess(options) {
        return this.sendExternalProcessRequest('launch-external-process', options);
    }
    /**
     * Monitors a running process. A pid for the process must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * @param { ExternalProcessInfo } options See tutorial for more details
     * @return {Promise.<Identity>}
     * @tutorial System.monitorExternalProcess
     */
    monitorExternalProcess(options) {
        return this.sendExternalProcessRequest('monitor-external-process', options);
    }
    /**
     * Writes the passed message into both the log file and the console.
     * @param { string } level The log level for the entry. Can be either "info", "warning" or "error"
     * @param { string } message The log message text
     * @return {Promise.<void>}
     * @tutorial System.log
     */
    log(level, message) {
        return this.wire.sendAction('write-to-log', { level, message }).then(() => undefined);
    }
    /**
     * Opens the passed URL in the default web browser. It only supports http(s) and fin(s) protocols by default.
     * In order to use other custom protocols, they have to be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * File protocol and file path are not supported.
     * @param { string } url The URL to open
     * @return {Promise.<void>}
     * @tutorial System.openUrlWithBrowser
     */
    openUrlWithBrowser(url) {
        return this.wire.sendAction('open-url-with-browser', { url }).then(() => undefined);
    }
    /**
     * Removes the process entry for the passed UUID obtained from a prior call
     * of fin.System.launchExternalProcess().
     * @param { string } uuid The UUID for a process obtained from a prior call to fin.desktop.System.launchExternalProcess()
     * @return {Promise.<void>}
     * @tutorial System.releaseExternalProcess
     */
    releaseExternalProcess(uuid) {
        return this.wire.sendAction('release-external-process', { uuid }).then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools for the specified window
     * @param { Identity } identity This is a object that is defined by the Identity interface
     * @return {Promise.<void>}
     * @tutorial System.showDeveloperTools
     */
    showDeveloperTools(identity) {
        return this.wire.sendAction('show-developer-tools', identity).then(() => undefined);
    }
    /**
     * Attempt to close an external process. The process will be terminated if it
     * has not closed after the elapsed timeout in milliseconds.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { TerminateExternalRequestType } options A object defined in the TerminateExternalRequestType interface
     * @return {Promise.<void>}
     * @tutorial System.terminateExternalProcess
     */
    terminateExternalProcess(options) {
        return this.wire.sendAction('terminate-external-process', options).then(() => undefined);
    }
    /**
     * Update the OpenFin Runtime Proxy settings.
     * @param { ProxyConfig } options A config object defined in the ProxyConfig interface
     * @return {Promise.<void>}
     * @tutorial System.updateProxySettings
     */
    updateProxySettings(options) {
        return this.wire.sendAction('update-proxy', options).then(() => undefined);
    }
    /**
     * Downloads the given application asset<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { AppAssetInfo } appAsset App asset object
     * @return {Promise.<void>}
     * @tutorial System.downloadAsset
     */
    // incompatible with standalone node process.
    downloadAsset(appAsset, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadAsset only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `asset-download-progress-${downloadId}`;
            const dlErrorKey = `asset-download-error-${downloadId}`;
            const dlCompleteKey = `asset-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(appAsset, { downloadId });
            this.wire.sendAction('download-asset', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Downloads a version of the runtime.
     * @param { RuntimeDownloadOptions } options - Download options.
     * @param {Function} [progressListener] - called as the runtime is downloaded with progress information.
     * @return {Promise.<void>}
     * @tutorial System.downloadRuntime
     */
    downloadRuntime(options, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadRuntime only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `runtime-download-progress-${downloadId}`;
            const dlErrorKey = `runtime-download-error-${downloadId}`;
            const dlCompleteKey = `runtime-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(options, { downloadId });
            this.wire.sendAction('download-runtime', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Download preload scripts from given URLs
     * @param {DownloadPreloadOption[]} scripts - URLs of preload scripts. See tutorial for more details.
     * @return {Promise.Array<DownloadPreloadInfo>}
     * @tutorial System.downloadPreloadScripts
     */
    downloadPreloadScripts(scripts) {
        return this.wire.sendAction('download-preload-scripts', { scripts }).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<Identity>}
     * @tutorial System.getAllExternalApplications
     */
    getAllExternalApplications() {
        return this.wire.sendAction('get-all-external-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of objects representing information about currently
     * running user-friendly native windows on the system.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @return {Promise.Array.<Identity>}
     * @experimental
     * @deprecated System.getAllExternalWindows will be removed by major version 22.
     */
    getAllExternalWindows() {
        console.warn('Deprecation Warning: System.getAllExternalWindows will be removed by major version 22.');
        return this.wire.sendAction('get-all-external-windows').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves app asset information.
     * @param { AppAssetRequest } options
     * @return {Promise.<AppAssetInfo>}
     * @tutorial System.getAppAssetInfo
     */
    getAppAssetInfo(options) {
        return this.wire.sendAction('get-app-asset-info', options).then(({ payload }) => payload.data);
    }
    /**
     * Get additional info of cookies.
     * @param { CookieOption } options - See tutorial for more details.
     * @return {Promise.Array.<CookieInfo>}
     * @tutorial System.getCookies
     */
    getCookies(options) {
        const url = this.wire.environment.getUrl();
        const newOptions = Object.assign(options, { url });
        return this.wire.sendAction('get-cookies', newOptions).then(({ payload }) => payload.data);
    }
    /**
     * Set the minimum log level above which logs will be written to the OpenFin log
     * @param { LogLevel } The minimum level (inclusive) above which all calls to log will be written
     * @return {Promise.<void>}
     * @tutorial System.setMinLogLevel
     */
    setMinLogLevel(level) {
        return this.wire.sendAction('set-min-log-level', { level }).then(() => undefined);
    }
    /**
     * Retrieves the UUID of the computer on which the runtime is installed
     * @param { string } uuid The uuid of the running application
     * @return {Promise.<Entity>}
     * @tutorial System.resolveUuid
     */
    resolveUuid(uuid) {
        return this.wire
            .sendAction('resolve-uuid', {
            entityKey: uuid
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all external applications
     * @param { Identity } requestingIdentity This object is described in the Identity typedef
     * @param { any } data Any data type to pass to the method
     * @return {Promise.<any>}
     * @ignore
     */
    executeOnRemote(requestingIdentity, data) {
        data.requestingIdentity = requestingIdentity;
        return this.wire.ferryAction(data);
    }
    /**
     * Reads the specifed value from the registry.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { string } rootKey - The registry root key.
     * @param { string } subkey - The registry key.
     * @param { string } value - The registry value name.
     * @return {Promise.<RegistryInfo>}
     * @tutorial System.readRegistryValue
     */
    readRegistryValue(rootKey, subkey, value) {
        return this.wire
            .sendAction('read-registry-value', {
            rootKey,
            subkey,
            value
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * This function call will register a unique id and produce a token.
     * The token can be used to broker an external connection.
     * @param { string } uuid - A UUID for the remote connection.
     * @return {Promise.<ExternalConnection>}
     * @tutorial System.registerExternalConnection
     */
    registerExternalConnection(uuid) {
        return this.wire.sendAction('register-external-connection', { uuid }).then(({ payload }) => payload.data);
    }
    /**
     * Returns the json blob found in the [desktop owner settings](https://openfin.co/documentation/desktop-owner-settings/)
     * for the specified service.
     * More information about desktop services can be found [here](https://developers.openfin.co/docs/desktop-services).
     * @param { ServiceIdentifier } serviceIdentifier An object containing a name key that identifies the service.
     * @return {Promise.<ServiceConfiguration>}
     * @tutorial System.getServiceConfiguration
     */
    async getServiceConfiguration(serviceIdentifier) {
        if (typeof serviceIdentifier.name !== 'string') {
            throw new Error('Must provide an object with a `name` property having a string value');
        }
        const { name } = serviceIdentifier;
        return this.wire.sendAction('get-service-configuration', { name }).then(({ payload }) => payload.data);
    }
    async getSystemAppConfig(name) {
        if (typeof name !== 'string') {
            throw new Error('Must provide a string value for name of system app');
        }
        return this.wire.sendAction('get-system-app-configuration', { name }).then(({ payload }) => payload.data);
    }
    /**
     * Signals the RVM to perform a health check and returns the results as json.
     * @return {Promise.<string[]>}
     * @tutorial System.runRvmHealthCheck
     */
    runRvmHealthCheck() {
        return this.wire.sendAction('run-rvm-health-check').then(({ payload }) => payload.data);
    }
    /**
     * Launch application using a manifest URL/path. It differs from Application.startFromManifest in that this API can accept a manifest using the fin protocol.
     * @param {string} manifestUrl - The manifest's URL or path.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Manifest>}
     * @experimental
     * @tutorial System.launchManifest
     * @static
     */
    async launchManifest(manifestUrl, opts) {
        const response = await this.wire.sendAction('launch-manifest', {
            manifestUrl,
            opts
        });
        return response.payload.data.manifest;
    }
    /**
     * Query permission of a secured api in current context.
     * @param {string} apiName - The full name of a secured API.
     * @return {Promise.<QueryPermissionResult>}
     * @tutorial System.queryPermissionForCurrentContext
     */
    async queryPermissionForCurrentContext(apiName) {
        const identity = { uuid: this.wire.me.uuid, name: this.wire.me.name };
        const response = await this.wire.sendAction('query-permission-for-current-context', {
            apiName,
            identity
        });
        return response.payload.data;
    }
    // Not documenting, internal use only.
    async enableNativeWindowIntegrationProvider(permissions) {
        const { payload } = await this.wire.sendAction('enable-native-window-integration-provider', { permissions });
        return payload.data;
    }
}
exports["default"] = System;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/view/Factory.js":
/*!**************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/view/Factory.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "./node_modules/openfin-adapter/src/shapes/EntityType.js");
const index_1 = __webpack_require__(/*! ./index */ "./node_modules/openfin-adapter/src/api/view/index.js");
/**
 * @lends View
 */
class ViewModule extends base_1.Base {
    /**
     * Creates a new View.
     * @param { View~options } options - View creation options
     * @return {Promise.<View>}
     * @tutorial View.create
     * @experimental
     * @static
     */
    async create(options) {
        const { uuid } = this.wire.me;
        if (!options.name || typeof options.name !== 'string') {
            throw new Error('Please provide a name property as a string in order to create a View.');
        }
        if (this.wire.environment.childViews) {
            await this.wire.environment.createChildContent({
                entityType: EntityType_1.default.VIEW,
                options: { ...options, uuid }
            });
        }
        else {
            await this.wire.sendAction('create-view', { ...options, uuid });
        }
        return this.wrapSync({ uuid, name: options.name });
    }
    /**
     * Asynchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {Promise.<View>}
     * @tutorial View.wrap
     * @experimental
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('view-wrap');
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Synchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {View}
     * @tutorial View.wrapSync
     * @experimental
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('view-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Asynchronously returns a View object that represents the current view
     * @return {Promise.<View>}
     * @tutorial View.getCurrent
     * @experimental
     * @static
     */
    getCurrent() {
        this.wire.sendAction('view-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a View object that represents the current view
     * @return {View}
     * @tutorial View.getCurrentSync
     * @experimental
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('view-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = ViewModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/view/Instance.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/view/Instance.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
/* eslint-disable import/prefer-default-export */
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "./node_modules/openfin-adapter/src/api/webcontents/index.js");
const window_1 = __webpack_require__(/*! ../window */ "./node_modules/openfin-adapter/src/api/window/index.js");
/**
 * @typedef {object} View~options
 * @summary View creation options.
 * @desc This is the options object required by {@link View.create View.create}.
 *
 * Note that `name` and `target` are the only required properties — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * @property {object} [experimental]
 * Configurations for API injection.
 *
 * @property {boolean} [experimental.childWindows] Configure if the runtime should enable child windows for views.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {object} [autoResize] AutoResize options
 *
 * @property {object} [bounds] initial bounds given relative to the window.
 *
 * @property {string} [backgroundColor="#FFF"] - _Updatable._
 * The view’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a view’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a view.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the view options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the view. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] preventDefault will prevent the page keydown/keyup events from being emitted.
 *
 * @property {boolean} [isClosable=true] **Platforms Only.** If false, the view will be persistent and can't be closed through
 * either UI or `Platform.closeView`. Note that the view will still be closed if the host window is closed or
 * if the view isn't part of the new layout when running `Layout.replace`.
 *
 * @property {string} name
 * The name of the view.
 *
 * @property {boolean} [detachOnClose=false] - _Updatable._
 * Platforms Only.  If true, will hide and detach the View from the window for later use instead of closing,
 * allowing the state of the View to be saved and the View to be immediately shown in a new Layout.
 *
 * @property {string} [manifestUrl] **Platforms Only.** Url to a manifest that contains View Options. Properties other than manifestUrl can still be used
 * but the properties in the manifest will take precedence if there is any collision.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {boolean} [preventDragOut=false] **Platforms Only.** If true, the tab of the view can't be dragged out of its host window.
 *
 * @property {string} [processAffinity=<application uuid>]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {Identity} [target]
 * The identity of the window this view should be attached to.
 *
 * @property {string} [url="about:blank"]
 * The URL of the view.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the view.
 * If given, must match the `uuid` of the application spawning the view.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 */
/**
 * @classdesc a View can be used to embed additional web content into a Window.
 * It is like a child window, except it is positioned relative to its owning window.
 * It has the ability to listen for <a href="tutorial-View.EventEmitter.html">View-specific events</a>.
 *
 * By default, a View will try to share the same renderer process as other Views owned by its parent Application.
 * To change that behavior, see the processAffinity {@link View~options view option}.
 *
 * A View's lifecycle is tied to its owning window and can be re-attached to a different window at any point during its lifecycle.
 * @class
 * @alias View
 * @hideconstructor
 */
class View extends webcontents_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'view');
        this.identity = identity;
        /**
         * Returns the zoom level of the view.
         * @function getZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.getZoomLevel
         */
        /**
         * Sets the zoom level of the view.
         * @param { number } level The zoom level
         * @function setZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.setZoomLevel
         */
        /**
         * Find and highlight text on a page.
         * @param { string } searchTerm Term to find in page
         * @param { FindInPageOptions } options Search options
         * @function findInPage
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.findInPage
         */
        /**
         * Stops any findInPage call with the provided action.
         * @param {string} action
         * Action to execute when stopping a find in page:<br>
         * "clearSelection" - Clear the selection.<br>
         * "keepSelection" - Translate the selection into a normal selection.<br>
         * "activateSelection" - Focus and click the selection node.<br>
         * @function stopFindInPage
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopFindInPage
         */
        /**
         * Navigates the view to a specified URL. The url must contain the protocol prefix such as http:// or https://.
         * @param { string } url - The URL to navigate the view to.
         * @return {Promise.<void>}
         * @function navigate
         * @memberof View
         * @instance
         * @tutorial View.navigate
         * @experimental
         */
        /**
         * Navigates the view back one page.
         * @function navigateBack
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateBack
         */
        /**
         * Navigates the view forward one page.
         * @function navigateForward
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateForward
         */
        /**
         * Stops any current navigation the view is performing.
         * @function stopNavigation
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopNavigation
         */
        /**
         * Reloads the view current page
         * @function reload
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.reload
         */
        /**
         * Prints the view's web page
         * @param { PrintOptions } [options] Printer Options
         * @function print
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.print
         */
        /**
         * Returns an array with all system printers
         * @function getPrinters
         * @memberOf View
         * @instance
         * @return { Promise.Array.<PrinterInfo> }
         * @tutorial View.getPrinters
         */
        /**
         * Shows the Chromium Developer Tools
         * @function showDeveloperTools
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.showDeveloperTools
         */
        /**
         * Retrieves the process information associated with a view.
         * @function getProcessInfo
         * @memberOf View
         * @instance
         * @return {Promise.<EntityProcessDetails>}
         * @tutorial View.getProcessInfo
         */
        /**
         * Retrieves information on all Shared Workers.
         * @function getSharedWorkers
         * @memberOf View
         * @instance
         * @return {Promise.Array.<SharedWorkerInfo>}
         * @tutorial View.getSharedWorkers
         */
        /**
         * Opens the developer tools for the shared worker context.
         * @function inspectSharedWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorker
         */
        /**
         * Inspects the shared worker based on its ID.
         * @param { string } workerId - The id of the shared worker.
         * @function inspectSharedWorkerById
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorkerById
         */
        /**
         * Opens the developer tools for the service worker context.
         * @function inspectServiceWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectServiceWorker
         */
        /**
         * Attaches the current view to a the given window identity.
         * Identity must be the identity of a window in the same application.
         * This detaches the view from its current window, and sets the view to be destroyed when its new window closes.
         * @param target {Identity}
         * @return {Promise.<void>}
         * @tutorial View.attach
         * @experimental
         */
        this.attach = async (target) => {
            await this.wire.sendAction('attach-view', { target, ...this.identity });
        };
        /**
         * Destroys the current view
         * @return {Promise.<void>}
         * @tutorial View.destroy
         * @experimental
         */
        this.destroy = async () => {
            await this.wire.sendAction('destroy-view', { ...this.identity });
        };
        /**
         * Shows the current view if it is currently hidden.
         * @return {Promise.<void>}
         * @tutorial View.show
         * @experimental
         */
        this.show = async () => {
            await this.wire.sendAction('show-view', { ...this.identity });
        };
        /**
         * Hides the current view if it is currently visible.
         * @return {Promise.<void>}
         * @tutorial View.hide
         * @experimental
         */
        this.hide = async () => {
            await this.wire.sendAction('hide-view', { ...this.identity });
        };
        /**
         * Sets the bounds (top, left, width, height) of the view relative to its window.
         * @param bounds {ViewBounds}
         * @return {Promise.<void>}
         * @tutorial View.setBounds
         * @experimental
         */
        this.setBounds = async (bounds) => {
            await this.wire.sendAction('set-view-bounds', { bounds, ...this.identity });
        };
        /**
         * Gets the bounds (top, left, width, height) of the view relative to its window.
         * @return {Promise.<ViewBounds>}
         * @tutorial View.getBounds
         * @experimental
         */
        this.getBounds = async () => {
            const ack = await this.wire.sendAction('get-view-bounds', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Gets the View's info.
         * @return {Promise.<ViewInfo>}
         * @tutorial View.getInfo
         * @experimental
         */
        this.getInfo = async () => {
            const ack = await this.wire.sendAction('get-view-info', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Retrieves the layout for the window the view is attached to.
         * @return {Promise.<Layout>}
         * @tutorial View.getParentLayout
         * @experimental
         */
        this.getParentLayout = async () => {
            this.wire.sendAction('view-get-parent-layout', { ...this.identity }).catch((e) => {
                // don't expose
            });
            const currentWindow = await this.getCurrentWindow();
            return currentWindow.getLayout();
        };
        /**
         * Gets the View's options.
         * @return {Promise<ViewOptions>}
         * @tutorial View.getOptions
         * @experimental
         */
        this.getOptions = async () => {
            return this.wire.sendAction('get-view-options', { ...this.identity }).then(({ payload }) => payload.data);
        };
        /**
         * Updates the view's options.
         * @param { Partial<ViewOptions> } options
         * @return {Promise.<void>}
         * @tutorial View.updateOptions
         * @experimental
         */
        this.updateOptions = async (options) => {
            return this.wire.sendAction('update-view-options', { options, ...this.identity }).then(() => undefined);
        };
        /**
         * Retrieves the window the view is currently attached to.
         * @return {Promise.<_Window>}
         * @experimental
         */
        this.getCurrentWindow = async () => {
            const { payload: { data } } = await this.wire.sendAction('get-view-window', { ...this.identity });
            return new window_1._Window(this.wire, data);
        };
        this.topic = 'view';
    }
    /**
     * Gets a base64 encoded image of the view or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] Options for the capturePage call.
     * @memberOf View
     * @instance
     * @return {Promise.<string>}
     * @tutorial View.capturePage
     */
    /**
     * Executes Javascript on the view, restricted to contents you own or contents owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the view.
     * @function executeJavaScript
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.executeJavaScript
     */
    /**
     * Focuses the view
     * @return {Promise.<void>}
     * @function focus
     * @memberof View
     * @emits focused
     * @instance
     * @tutorial View.focus
     * @experimental
     */
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        const win = await this.getCurrentWindow();
        await win.focusedWebViewWasChanged();
        await super.focus({ emitSynthFocused });
    }
}
exports.View = View;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/view/index.js":
/*!************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/view/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/view/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/view/Instance.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/webcontents/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/webcontents/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebContents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
class WebContents extends base_1.EmitterBase {
    constructor(wire, identity, entityType) {
        super(wire, [entityType, identity.uuid, identity.name]);
        this.entityType = entityType;
    }
    capturePage(options) {
        return this.wire.sendAction('capture-page', { options, ...this.identity }).then(({ payload }) => payload.data);
    }
    executeJavaScript(code) {
        return this.wire
            .sendAction('execute-javascript-in-window', { ...this.identity, code })
            .then(({ payload }) => payload.data);
    }
    getZoomLevel() {
        return this.wire.sendAction('get-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    setZoomLevel(level) {
        return this.wire.sendAction('set-zoom-level', { ...this.identity, level }).then(() => undefined);
    }
    navigate(url) {
        return this.wire.sendAction('navigate-window', { ...this.identity, url }).then(() => undefined);
    }
    navigateBack() {
        return this.wire.sendAction('navigate-window-back', { ...this.identity }).then(() => undefined);
    }
    async navigateForward() {
        await this.wire.sendAction('navigate-window-forward', { ...this.identity });
    }
    stopNavigation() {
        return this.wire.sendAction('stop-window-navigation', { ...this.identity }).then(() => undefined);
    }
    reload(ignoreCache = false) {
        return this.wire
            .sendAction('reload-window', {
            ignoreCache,
            ...this.identity
        })
            .then(() => undefined);
    }
    print(options) {
        return this.wire.sendAction('print', { ...this.identity, options }).then(() => undefined);
    }
    findInPage(searchTerm, options) {
        return this.wire
            .sendAction('find-in-page', { ...this.identity, searchTerm, options })
            .then(({ payload }) => payload.data);
    }
    stopFindInPage(action) {
        return this.wire.sendAction('stop-find-in-page', { ...this.identity, action }).then(() => undefined);
    }
    getPrinters() {
        return this.wire.sendAction('get-printers', { ...this.identity }).then(({ payload }) => payload.data);
    }
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        await this.wire.sendAction('focus-window', { emitSynthFocused, ...this.identity });
    }
    async showDeveloperTools() {
        // Note this hits the system action map in core state for legacy reasons.
        await this.wire.sendAction('show-developer-tools', this.identity);
    }
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-process-info', this.identity);
        return data;
    }
    async getSharedWorkers() {
        return this.wire.sendAction('get-shared-workers', this.identity).then(({ payload }) => payload.data);
    }
    async inspectSharedWorker() {
        await this.wire.sendAction('inspect-shared-worker', { ...this.identity });
    }
    async inspectSharedWorkerById(workerId) {
        await this.wire.sendAction('inspect-shared-worker-by-id', { ...this.identity, workerId });
    }
    async inspectServiceWorker() {
        await this.wire.sendAction('inspect-service-worker', { ...this.identity });
    }
}
exports.WebContents = WebContents;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/window/Factory.js":
/*!****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/window/Factory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "./node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/window/Instance.js");
/**
 * @lends Window
 */
class _WindowModule extends base_1.Base {
    /**
     * Asynchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {Promise.<_Window>}
     * @tutorial Window.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('window-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Synchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {_Window}
     * @tutorial Window.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('window-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options - Window creation options
     * @return {Promise.<_Window>}
     * @tutorial Window.create
     * @static
     */
    create(options) {
        this.wire.sendAction('create-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const win = new Instance_1._Window(this.wire, { uuid: this.me.uuid, name: options.name });
        return win.createWindow(options);
    }
    /**
     * Asynchronously returns a Window object that represents the current window
     * @return {Promise.<_Window>}
     * @tutorial Window.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Window object that represents the current window
     * @return {_Window}
     * @tutorial Window.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-window-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = _WindowModule;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/window/Instance.js":
/*!*****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/window/Instance.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Window = void 0;
const application_1 = __webpack_require__(/*! ../application */ "./node_modules/openfin-adapter/src/api/application/index.js");
const external_window_1 = __webpack_require__(/*! ../external-window */ "./node_modules/openfin-adapter/src/api/external-window/index.js");
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "./node_modules/openfin-adapter/src/api/webcontents/index.js");
const view_1 = __webpack_require__(/*! ../view */ "./node_modules/openfin-adapter/src/api/view/index.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "./node_modules/openfin-adapter/src/shapes/EntityType.js");
/**
 * @typedef { object } Margins
 * @property { string } [marginType]
 * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
 * you will also need to specify `top`, `bottom`, `left`, and `right`.
 *
 * @property { number } [top] The top margin of the printed web page, in pixels.
 * @property { number } [bottom] The bottom margin of the printed web page, in pixels.
 * @property { number } [left] The left margin of the printed web page, in pixels.
 * @property { number } [right] The right margin of the printed web page, in pixels.
 */
/**
 * @typedef { object } Dpi
 * @property { number } [horizontal] The horizontal dpi
 * @property { number } [vertical] The vertical dpi
 */
/**
 * @typedef { object } PrintOptions
 * @property { boolean } [silent=false] Don't ask user for print settings.
 * @property { boolean } [printBackground=false] Prints the background color and image of the web page.
 * @property { string } [deviceName=''] Set the printer device name to use.
 * @property { boolean } [color=true] Set whether the printed web page will be in color or grayscale.
 * @property { Margins } [margins] Set margins for the printed web page
 * @property { boolean } [landscape=false] Whether the web page should be printed in landscape mode.
 * @property { number } [scaleFactor] The scale factor of the web page.
 * @property { number } [pagesPerSheet] The number of pages to print per page sheet.
 * @property { boolean } [collate] Whether the web page should be collated.
 * @property { number } [copies] The number of copies of the web page to print.
 * @property { Record<string, number> } [pageRanges] The page range to print. Should have two keys: from and to.
 * @property { string } [duplexMode] Set the duplex mode of the printed web page. Can be simplex, shortEdge, or longEdge.
 * @property { Dpi } [dpi] Set dpi for the printed web page
 */
/**
 * PrinterInfo interface
 * @typedef { object } PrinterInfo
 * @property { string } name Printer Name
 * @property { string } description Printer Description
 * @property { number } status Printer Status
 * @property { boolean } isDefault Indicates that system's default printer
 */
/**
 * SharedWorkerInfo interface
 * @typedef { object } SharedWorkerInfo
 * @property { string } id The unique id of the shared worker.
 * @property { string } url The url of the shared worker.
 */
/**
 * ContentCreationRule interface
 * @typedef { object } ContentCreationRule
 * @property { string } behavior 'view' | 'window' | 'browser' | 'block'
 * @property { string[] } match List of [match patterns](https://developer.chrome.com/extensions/match_patterns).
 * @property { object } options Window creation options or View creation options.
 */
/**
 * @typedef {object} Window~options
 * @summary Window creation options.
 * @desc This is the options object required by {@link Window.create Window.create}.
 *
 * Note that `name` is the only required property — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `WindowOptions` TypeScript interface in `@types/openfin`._
 *
 * @property {object} [accelerator]
 * Enable keyboard shortcuts for devtools, zoom, reload, and reload ignoring cache.
 *
 * @property {boolean} [accelerator.devtools=false]
 * If `true`, enables the devtools keyboard shortcut:<br>
 * `Ctrl` + `Shift` + `I` _(Toggles Devtools)_
 *
 * @property {boolean} [accelerator.reload=false]
 * If `true`, enables the reload keyboard shortcuts:<br>
 * `Ctrl` + `R` _(Windows)_<br>
 * `F5` _(Windows)_<br>
 * `Command` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.reloadIgnoringCache=false]
 * If `true`, enables the reload-from-source keyboard shortcuts:<br>
 * `Ctrl` + `Shift` + `R` _(Windows)_<br>
 * `Shift` + `F5` _(Windows)_<br>
 * `Command` + `Shift` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.zoom=false]
 * If `true`, enables the zoom keyboard shortcuts:<br>
 * `Ctrl` + `+` _(Zoom In)_<br>
 * `Ctrl` + `Shift` + `+` _(Zoom In)_<br>
 * `Ctrl` + `NumPad+` _(Zoom In)_<br>
 * `Ctrl` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `Shift` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `NumPad-` _(Zoom Out)_<br>
 * `Ctrl` + `Scroll` _(Zoom In & Out)_<br>
 * `Ctrl` + `0` _(Restore to 100%)_
 *
 * @property {object} [alphaMask] - _Experimental._  _Updatable._
 * <br>
 * alphaMask turns anything of matching RGB value transparent.
 * <br>
 * Caveats:
 * * runtime key --disable-gpu is required. Note: Unclear behavior on remote Desktop support
 * * User cannot click-through transparent regions
 * * Not supported on Mac
 * * Windows Aero must be enabled
 * * Won't make visual sense on Pixel-pushed environments such as Citrix
 * * Not supported on rounded corner windows
 * @property {number} [alphaMask.red=-1] 0-255
 * @property {number} [alphaMask.green=-1] 0-255
 * @property {number} [alphaMask.blue=-1] 0-255
 *
 * @property {boolean} [alwaysOnTop=false] - _Updatable._
 * A flag to always position the window at the top of the window stack.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {string} [applicationIcon = ""] - _Deprecated_ - use `icon` instead.
 *
 * @property {number} [aspectRatio=0] - _Updatable._
 * The aspect ratio of width to height to enforce for the window. If this value is equal to or less than zero,
 * an aspect ratio will not be enforced.
 *
 * @property {boolean} [autoShow=true]
 * A flag to automatically show the window when it is created.
 *
 * @property {string} [backgroundColor="#FFF"]
 * The window’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a window’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentCreation]
 * Apply rules that determine how user interaction (`window.open` and links) creates content.
 * @property {ContentCreationRule[]} [contentCreation.rules = []] List of content creation rules.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.

 * @property {boolean} [contextMenu=true] - _Updatable._
 * A flag to show the context menu when right-clicking on a window.
 * Gives access to the devtools for the window.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a window.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {object} [cornerRounding] - _Updatable._
 * Defines and applies rounded corners for a frameless window. **NOTE:** On macOS corner is not ellipse but circle rounded by the
 *  average of _height_ and _width_.
 * @property {number} [cornerRounding.height=0] The height in pixels.
 * @property {number} [cornerRounding.width=0] The width in pixels.
 *
 * @property {any} [customContext=""] - _Updatable._
 * A field that the user can use to attach serializable data that will be saved when {@link Platform#getSnapshot Platform.getSnapshot}
 * is called.  If a window in a Platform is trying to update or retrieve its own context, it can use the
 * {@link Platform#setWindowContext Platform.setWindowContext} and {@link Platform#getWindowContext Platform.getWindowContext} calls.
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the window options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * @property {object[]} [customRequestHeaders]
 * Defines list of custom headers for requests sent by the window.
 * @property {string[]} [customRequestHeaders.urlPatterns=[]] The URL patterns for which the headers will be applied
 * @property {object[]} [customRequestHeaders.headers=[]] Objects representing headers and their values,
 * where the object key is the name of header and value at key is the value of the header
 *
 * @property {boolean} [closeOnLastViewRemoved=true] - _Experimental._  _Updatable._
 * Toggling off would keep the Window alive even if all its Views were closed.
 * This is meant for advanced users and should be used with caution.
 * Limitations - Once a Layout has been emptied out of all views it's not usable anymore, and certain API calls will fail.
 * Use `layout.replace` to create a fresh Layout instance in case you want to populate it with Views again.
 * ** note ** - This option is ignored in non-Platforms apps.
 *
 * @property {boolean} [defaultCentered=false]
 * Centers the window in the primary monitor. This option overrides `defaultLeft` and `defaultTop`. When `saveWindowState` is `true`,
 * this value will be ignored for subsequent launches in favor of the cached value. **NOTE:** On macOS _defaultCenter_ is
 * somewhat above center vertically.
 *
 * @property {number} [defaultHeight=500]
 * The default height of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent launches
 * in favor of the cached value.
 *
 * @property {number} [defaultLeft=100]
 * The default left position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultTop=100]
 * The default top position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultWidth=800]
 * The default width of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {boolean} [includeInSnapshots=true] - _Updatable._
 * When true, the window will be be included in snapshots returned by Platform.getSnapshot(). Turning this off may be desirable when dealing with
 * inherently temporary windows whose state shouldn't be preserved, such as modals, menus, or popups.
 *
 * @property {boolean} [frame=true] - _Updatable._
 * A flag to show the frame.
 *
 * @hidden-property {boolean} [hideOnClose=false] - A flag to allow a window to be hidden when the close button is clicked.
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the window. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] Whether or not to prevent default key handling before emitting the event
 *
 * @property {string} [icon] - _Updatable. Inheritable._
 * A URL for the icon to be shown in the window title bar and the taskbar.
 * _When omitted, inherits from the parent application._
 *  note: Window OS caches taskbar icons, therefore an icon change might only be visible after the cache is removed or the uuid is changed.
 *
 * @property {number} [maxHeight=-1] - _Updatable._
 * The maximum height of a window. Will default to the OS defined value if set to -1.
 *
 * @property {boolean} [maximizable=true] - _Updatable._
 * A flag that lets the window be maximized.
 *
 * @property {number} [maxWidth=-1] - _Updatable._
 * The maximum width of a window. Will default to the OS defined value if set to -1.
 *
 * @property {number} [minHeight=0] - _Updatable._
 * The minimum height of a window.
 *
 * @property {boolean} [minimizable=true] - _Updatable._
 * A flag that lets the window be minimized.
 *
 * @property {number} [minWidth=0] - _Updatable._
 * The minimum width of a window.
 *
 * @property {Identity} [modalParentIdentity]
 * Parent identity of a modal window. It will create a modal child window when this option is set.
 *
 * @property {string} name
 * The name of the window.
 *
 * @property {number} [opacity=1.0] - _Updatable._
 * A flag that specifies how transparent the window will be.
 * Changing opacity doesn't work on Windows 7 without Aero so setting this value will have no effect there.
 * This value is clamped between `0.0` and `1.0`.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {string} [processAffinity]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {boolean} [resizable=true] - _Updatable._
 * A flag to allow the user to resize the window.
 *
 * @property {object} [resizeRegion] - _Updatable._
 * Defines a region in pixels that will respond to user mouse interaction for resizing a frameless window.
 * @property {number} [resizeRegion.bottomRightCorner=9]
 * The size in pixels of an additional square resizable region located at the bottom right corner of a frameless window.
 * @property {number} [resizeRegion.size=7]
 * The size in pixels.
 * @property {object} [resizeRegion.sides={top:true,right:true,bottom:true,left:true}]
 * Sides that a window can be resized from.
 *
 * @property {boolean} [saveWindowState=true]
 * A flag to cache the location of the window.
 * ** note ** - This option is ignored in Platforms as it would cause inconsistent {@link Platform#applySnapshot applySnapshot} behavior.
 *
 * @property {boolean} [shadow=false]
 * A flag to display a shadow on frameless windows.
 * `shadow` and `cornerRounding` are mutually exclusive.
 * On Windows 7, Aero theme is required.
 *
 * @property {boolean} [showBackgroundImages=false] - _Updatable._
 * Platforms Only.  If true, will show background images in the layout when the Views are hidden.
 * This occurs when the window is resizing or a tab is being dragged within the layout.
 *
 * @property {boolean} [showTaskbarIcon=true] - _Updatable._ _Windows_.
 * A flag to show the window's icon in the taskbar.
 *
 * @property {boolean} [smallWindow=false]
 * A flag to specify a frameless window that can be be created and resized to less than 41x36px (width x height).
 * _Note: Caveats of small windows are no Aero Snap and drag to/from maximize._
 *
 * @property {string} [state="normal"]
 * The visible state of the window on creation.
 * One of:
 * * `"maximized"`
 * * `"minimized"`
 * * `"normal"`
 *
 * @property {string} [taskbarIcon=string] - Deprecated - use `icon` instead._Windows_.
 *
 * @property {string} [taskbarIconGroup=<application uuid>] - _Windows_.
 * Specify a taskbar group for the window.
 * _If omitted, defaults to app's uuid (`fin.Application.getCurrentSync().identity.uuid`)._
 *
 * @property {string} [url="about:blank"]
 * The URL of the window.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the window.
 * If given, must match the `uuid` of the  application spawning the window.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 *
 * @property {boolean} [waitForPageLoad=false]
 * When set to `true`, the window will not appear until the `window` object's `load` event fires.
 * When set to `false`, the window will appear immediately without waiting for content to be loaded.
 */
/**
 * @typedef {object} CapturePageOptions
 * @property { Area } [area] The area of the window to be captured.
 * @property { string } [format='png'] The format of the captured image.  Can be 'png', 'jpg', or 'bmp'.
 * @property { number } [quality=100] Number representing quality of JPEG image only. Between 0 - 100.
 */
/**
 * @typedef { object } Area
 * @property { number } height Area's height
 * @property { number } width Area's width
 * @property { number } x X coordinate of area's starting point
 * @property { number } y Y coordinate of area's starting point
 */
/**
 * @typedef { object } WindowMovementOptions
 * @property { boolean } moveIndependently - Move a window independently of its group or along with its group. Defaults to false.
 */
/**
 * @typedef {object} FindInPageOptions
 * @property {boolean} [forward=true] Whether to search forward or backward.
 * @property {boolean} [findNext=false] Whether the operation is first request or a follow up.
 * @property {boolean} [matchCase=false] Whether search should be case-sensitive.
 * @property {boolean} [wordStart=false] Whether to look only at the start of words.
 * @property {boolean} [medialCapitalAsWordStart=false]
 * When combined with wordStart, accepts a match in the middle of a word if the match begins with an uppercase letter followed by a<br>
 * lowercase or non-letter. Accepts several other intra-word matches.
 */
/**
 * @typedef {object} Transition
 * @property {Opacity} opacity - The Opacity transition
 * @property {Position} position - The Position transition
 * @property {Size} size - The Size transition
 */
/**
 * @typedef {object} TransitionOptions
 * @property {boolean} interrupt - This option interrupts the current animation. When false it pushes
this animation onto the end of the animation queue.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 */
/**
 * @typedef {object} Size
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} width - Optional if height is present. Defaults to the window's current width.
 * @property {number} height - Optional if width is present. Defaults to the window's current height.
 */
/**
 * @typedef {object} Position
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} left - Defaults to the window's current left position in virtual screen coordinates.
 * @property {number} top - Defaults to the window's current top position in virtual screen coordinates.
 */
/**
 * @typedef {object} Opacity
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} opacity - This value is clamped from 0.0 to 1.0.
 */
/**
 * Bounds is a interface that has the properties of height,
 * width, left, top which are all numbers
 * @typedef { object } Bounds
 * @property { number } height Get the application height bound
 * @property { number } width Get the application width bound
 * @property { number } top Get the application top bound
 * @property { number } left Get the application left bound
 * @property { number } right Get the application right bound
 * @property { number } bottom Get the application bottom bound
 */
/**
 * @classdesc A basic window that wraps a native HTML window. Provides more fine-grained
 * control over the window state such as the ability to minimize, maximize, restore, etc.
 * By default a window does not show upon instantiation; instead the window's show() method
 * must be invoked manually. The new window appears in the same process as the parent window.
 * It has the ability to listen for <a href="tutorial-Window.EventEmitter.html">window specific events</a>.
 * @class
 * @alias Window
 * @hideconstructor
 */
// The window.Window name is taken
class _Window extends webcontents_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'window');
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Gets a base64 encoded image of the window or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] options for capturePage call.
     * @return {Promise.<string>}
     * @memberof Window
     * @instance
     * @tutorial Window.capturePage
     */
    /**
     * Executes Javascript on the window, restricted to windows you own or windows owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the window.
     * @function executeJavaScript
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.executeJavaScript
     */
    /**
     * Gives focus to the window.
     * @return {Promise.<void>}
     * @function focus
     * @emits focused
     * @memberOf Window
     * @instance
     * @tutorial Window.focus
     */
    /**
     * Returns the zoom level of the window.
     * @function getZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.getZoomLevel
     */
    /**
     * Sets the zoom level of the window.
     * @param { number } level The zoom level
     * @function setZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.setZoomLevel
     */
    /**
     * Find and highlight text on a page.
     * @param { string } searchTerm Term to find in page
     * @param { FindInPageOptions } options Search options
     * @function findInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.findInPage
     */
    /**
     * Stops any findInPage call with the provided action.
     * @param {string} action
     * Action to execute when stopping a find in page:<br>
     * "clearSelection" - Clear the selection.<br>
     * "keepSelection" - Translate the selection into a normal selection.<br>
     * "activateSelection" - Focus and click the selection node.<br>
     * @function stopFindInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopFindInPage
     */
    /**
     * Navigates the window to a specified URL. The url must contain the protocol prefix such as http:// or https://.
     * @param {string} url - The URL to navigate the window to.
     * @function navigate
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigate
     */
    /**
     * Navigates the window back one page.
     * @function navigateBack
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateBack
     */
    /**
     * Navigates the window forward one page.
     * @function navigateForward
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateForward
     */
    /**
     * Stops any current navigation the window is performing.
     * @function stopNavigation
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopNavigation
     */
    /**
     * Reloads the window current page
     * @function reload
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.reload
     */
    /**
     * Prints the window's web page
     * @param { PrintOptions } [options] Printer Options
     * @function print
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.print
     */
    /**
     * Returns an array with all system printers
     * @function getPrinters
     * @memberOf Window
     * @instance
     * @return { Promise.Array.<PrinterInfo> }
     * @tutorial Window.getPrinters
     */
    /**
     * Retrieves the process information associated with a window.
     * @function getProcessInfo
     * @memberOf Window
     * @instance
     * @return {Promise.<EntityProcessDetails>}
     * @tutorial Window.getProcessInfo
     */
    /**
     * Retrieves information on all Shared Workers.
     * @function getSharedWorkers
     * @memberOf Window
     * @instance
     * @return {Promise.Array.<SharedWorkerInfo>}
     * @tutorial Window.getSharedWorkers
     */
    /**
     * Opens the developer tools for the shared worker context.
     * @function inspectSharedWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorker
     */
    /**
     * Inspects the shared worker based on its ID.
     * @param { string } workerId - The id of the shared worker.
     * @function inspectSharedWorkerById
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorkerById
     */
    /**
     * Opens the developer tools for the service worker context.
     * @function inspectServiceWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectServiceWorker
     */
    // create a new window
    createWindow(options) {
        this.wire.sendAction('window-create-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Promise((resolve, reject) => {
            const CONSTRUCTOR_CB_TOPIC = 'fire-constructor-callback';
            // need to call pageResponse, otherwise when a child window is created, page is not loaded
            const pageResponse = new Promise((resolve) => {
                this.on(CONSTRUCTOR_CB_TOPIC, function fireConstructor(response) {
                    let cbPayload;
                    const { success } = response;
                    const responseData = response.data;
                    const { message } = responseData;
                    if (success) {
                        cbPayload = {
                            httpResponseCode: responseData.httpResponseCode,
                            apiInjected: responseData.apiInjected
                        };
                    }
                    else {
                        cbPayload = {
                            message: responseData.message,
                            networkErrorCode: responseData.networkErrorCode,
                            stack: responseData.stack
                        };
                    }
                    this.removeListener(CONSTRUCTOR_CB_TOPIC, fireConstructor);
                    resolve({
                        message,
                        cbPayload,
                        success
                    });
                });
            });
            // set defaults:
            if (options.waitForPageLoad === undefined) {
                options.waitForPageLoad = false;
            }
            if (options.autoShow === undefined) {
                options.autoShow = true;
            }
            const windowCreation = this.wire.environment.createChildContent({ entityType: EntityType_1.default.WINDOW, options });
            Promise.all([pageResponse, windowCreation])
                .then((resolvedArr) => {
                const pageResolve = resolvedArr[0];
                if (pageResolve.success) {
                    resolve(this);
                }
                else {
                    reject(pageResolve);
                }
                try {
                    // this is to enforce a 5.0 contract that the child's main function
                    // will not fire before the parent's success callback on creation.
                    // if the child window is not accessible (CORS) this contract does
                    // not hold.
                    const webWindow = this.getWebWindow();
                    webWindow.fin.__internal_.openerSuccessCBCalled();
                }
                catch (e) {
                    // common for main windows, we do not want to expose this error. here just to have a debug target.
                    // console.error(e);
                }
            })
                .catch(reject);
        });
    }
    windowListFromNameList(identityList) {
        return identityList.map(({ uuid, name, isExternalWindow }) => {
            if (isExternalWindow) {
                return new external_window_1.ExternalWindow(this.wire, { uuid });
            }
            return new _Window(this.wire, { uuid, name });
        });
    }
    /**
     * Retrieves an array of frame info objects representing the main frame and any
     * iframes that are currently on the page.
     * @return {Promise.<Array<FrameInfo>>}
     * @tutorial Window.getAllFrames
     */
    getAllFrames() {
        return this.wire.sendAction('get-all-frames', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the current bounds (top, bottom, right, left, width, height) of the window.
     * @return {Promise.<Bounds>}
     * @tutorial Window.getBounds
     */
    getBounds() {
        return this.wire
            .sendAction('get-window-bounds', this.identity)
            .then(({ payload }) => payload.data);
    }
    /**
     * Centers the window on its current screen.
     * @return {Promise.<void>}
     * @tutorial Window.center
     */
    center() {
        return this.wire.sendAction('center-window', this.identity).then(() => undefined);
    }
    /**
     * Removes focus from the window.
     * @return {Promise.<void>}
     * @tutorial Window.blur
     */
    blur() {
        return this.wire.sendAction('blur-window', this.identity).then(() => undefined);
    }
    /**
     * Brings the window to the front of the window stack.
     * @return {Promise.<void>}
     * @tutorial Window.bringToFront
     */
    bringToFront() {
        return this.wire.sendAction('bring-window-to-front', this.identity).then(() => undefined);
    }
    /**
     * Performs the specified window transitions.
     * @param {Transition} transitions - Describes the animations to perform. See the tutorial.
     * @param {TransitionOptions} options - Options for the animation. See the tutorial.
     * @return {Promise.<void>}
     * @tutorial Window.animate
     */
    animate(transitions, options) {
        return this.wire
            .sendAction('animate-window', {
            transitions,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Hides the window.
     * @return {Promise.<void>}
     * @tutorial Window.hide
     */
    hide() {
        return this.wire.sendAction('hide-window', this.identity).then(() => undefined);
    }
    /**
     * closes the window application
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.close
     */
    close(force = false) {
        return this.wire.sendAction('close-window', { force, ...this.identity }).then(() => {
            Object.setPrototypeOf(this, null);
            return undefined;
        });
    }
    focusedWebViewWasChanged() {
        return this.wire.sendAction('focused-webview-changed', this.identity).then(() => undefined);
    }
    /**
     * Returns the native OS level Id.
     * In Windows, it will return the Windows [handle](https://docs.microsoft.com/en-us/windows/desktop/WinProg/windows-data-types#HWND).
     * @return {Promise.<string>}
     * @tutorial Window.getNativeId
     */
    getNativeId() {
        return this.wire.sendAction('get-window-native-id', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves window's attached views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Window.getCurrentViews
     */
    async getCurrentViews() {
        const { payload } = await this.wire.sendAction('window-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /*
     * @deprecated Use {@link Window.disableUserMovement} instead.
     */
    disableFrame() {
        console.warn('Function is deprecated; use disableUserMovement instead.');
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Prevents a user from changing a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.disableUserMovement
     */
    disableUserMovement() {
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /*
     * @deprecated Use {@link Window.enableUserMovement} instead.
     */
    enableFrame() {
        console.warn('Function is deprecated; use enableUserMovement instead.');
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Re-enables user changes to a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.enableUserMovement
     */
    enableUserMovement() {
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Flashes the window’s frame and taskbar icon until stopFlashing is called or until a focus event is fired.
     * @return {Promise.<void>}
     * @tutorial Window.flash
     */
    flash() {
        return this.wire.sendAction('flash-window', this.identity).then(() => undefined);
    }
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @tutorial Window.stopFlashing
     */
    stopFlashing() {
        return this.wire.sendAction('stop-flash-window', this.identity).then(() => undefined);
    }
    /**
     * Retrieves an array containing wrapped fin.Windows that are grouped with this window.
     * If a window is not in a group an empty array is returned. Please note that
     * calling window is included in the result array.
     * @return {Promise.<Array<_Window|ExternalWindow>>}
     * @deprecated All Window Group APIs will be removed by major version 22.
     * @tutorial Window.getGroup
     */
    getGroup() {
        console.warn('Deprecation Warning: All Window Group APIs will be removed by major version 22.');
        return this.wire
            .sendAction('get-window-group', {
            crossApp: true,
            ...this.identity
        })
            .then(({ payload }) => {
            let winGroup = [];
            if (payload.data.length) {
                winGroup = this.windowListFromNameList(payload.data);
            }
            return winGroup;
        });
    }
    /**
     * Gets an information object for the window.
     * @return {Promise.<WindowInfo>}
     * @tutorial Window.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-window-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the window's Layout
     * @return {Promise.<Layout>}
     * @tutorial Window.getLayout
     * @experimental
     */
    async getLayout() {
        this.wire.sendAction('window-get-layout', this.identity).catch((e) => {
            // don't expose
        });
        const opts = await this.getOptions();
        if (!opts.layout) {
            throw new Error('Window does not have a Layout');
        }
        return this.fin.Platform.Layout.wrap(this.identity);
    }
    /**
     * Gets the current settings of the window.
     * @return {Promise.<any>}
     * @tutorial Window.getOptions
     */
    getOptions() {
        return this.wire.sendAction('get-window-options', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the parent application.
     * @return {Promise.<Application>}
     * @tutorial Window.getParentApplication
     */
    getParentApplication() {
        this.wire.sendAction('window-get-parent-application', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity));
    }
    /**
     * Gets the parent window.
     * @return {Promise.<_Window>}
     * @tutorial Window.getParentWindow
     */
    getParentWindow() {
        this.wire.sendAction('window-get-parent-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity)).then((app) => app.getWindow());
    }
    /**
     * ***DEPRECATED - please use Window.capturePage.***
     * Gets a base64 encoded PNG image of the window or just part a of it.
     * @param { Area } [area] The area of the window to be captured.
     * Omitting it will capture the whole visible window.
     * @return {Promise.<string>}
     * @tutorial Window.capturePage
     */
    async getSnapshot(area) {
        const req = { area, ...this.identity };
        console.warn('Window.getSnapshot has been deprecated, please use Window.capturePage');
        const res = await this.wire.sendAction('get-window-snapshot', req);
        return res.payload.data;
    }
    /**
     * Gets the current state ("minimized", "maximized", or "restored") of the window.
     * @return {Promise.<string>}
     * @tutorial Window.getState
     */
    getState() {
        return this.wire.sendAction('get-window-state', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Previously called getNativeWindow.
     * Returns the [Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
     * that represents the web context of the target window. This is the same object that
     * you would get from calling [window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) in a standard web context.
     * The target window needs to be in the same application as the requesting window
     * as well as comply with [same-origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) policy requirements.
     * @return {object}
     * @tutorial Window.getWebWindow
     */
    getWebWindow() {
        this.wire.sendAction('window-get-web-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wire.environment.getWebWindow(this.identity);
    }
    /**
     * Determines if the window is a main window.
     * @return {boolean}
     * @tutorial Window.isMainWindow
     */
    isMainWindow() {
        this.wire.sendAction('window-is-main-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.me.uuid === this.me.name;
    }
    /**
     * Determines if the window is currently showing.
     * @return {Promise.<boolean>}
     * @tutorial Window.isShowing
     */
    isShowing() {
        return this.wire.sendAction('is-window-showing', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Joins the same window group as the specified window.
     * Joining a group with native windows is currently not supported(method will nack).
     * @param { _Window | ExternalWindow } target The window whose group is to be joined
     * @deprecated All Window Group APIs will be removed by major version 22.
     * @return {Promise.<void>}
     * @tutorial Window.joinGroup
     */
    joinGroup(target) {
        console.warn('Deprecation Warning: All Window Group APIs will be removed by major version 22.');
        return this.wire
            .sendAction('join-window-group', {
            groupingUuid: target.identity.uuid,
            groupingWindowName: target.identity.name,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Leaves the current window group so that the window can be move independently of those in the group.
     * @return {Promise.<void>}
     * @deprecated All Window Group APIs will be removed by major version 22.
     * @tutorial Window.leaveGroup
     */
    leaveGroup() {
        console.warn('Deprecation Warning: All Window Group APIs will be removed by major version 22.');
        return this.wire.sendAction('leave-window-group', this.identity).then(() => undefined);
    }
    /**
     * Maximizes the window
     * @return {Promise.<void>}
     * @tutorial Window.maximize
     */
    maximize() {
        return this.wire.sendAction('maximize-window', this.identity).then(() => undefined);
    }
    /**
     * Merges the instance's window group with the same window group as the specified window
     * @param { _Window | ExternalWindow } target The window whose group is to be merged with
     * @deprecated All Window Group APIs will be removed by major version 22.
     * @return {Promise.<void>}
     * @tutorial Window.mergeGroups
     */
    mergeGroups(target) {
        console.warn('Deprecation Warning: All Window Group APIs will be removed by major version 22.');
        return this.wire
            .sendAction('merge-window-groups', {
            groupingUuid: target.identity.uuid,
            groupingWindowName: target.identity.name,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Minimizes the window.
     * @return {Promise.<void>}
     * @tutorial Window.minimize
     */
    minimize() {
        return this.wire.sendAction('minimize-window', this.identity).then(() => undefined);
    }
    /**
     * Moves the window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.moveBy
     */
    moveBy(deltaLeft, deltaTop, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('move-window-by', {
            deltaLeft,
            deltaTop,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Moves the window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.moveTo
     */
    moveTo(left, top, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('move-window', {
            left,
            top,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.resizeBy
     */
    resizeBy(deltaWidth, deltaHeight, anchor, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('resize-window-by', {
            deltaWidth: Math.floor(deltaWidth),
            deltaHeight: Math.floor(deltaHeight),
            anchor,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.resizeTo
     */
    resizeTo(width, height, anchor, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('resize-window', {
            width: Math.floor(width),
            height: Math.floor(height),
            anchor,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Restores the window to its normal state (i.e., unminimized, unmaximized).
     * @return {Promise.<void>}
     * @tutorial Window.restore
     */
    restore() {
        return this.wire.sendAction('restore-window', this.identity).then(() => undefined);
    }
    /**
     * Will bring the window to the front of the entire stack and give it focus.
     * @return {Promise.<void>}
     * @tutorial Window.setAsForeground
     */
    setAsForeground() {
        return this.wire.sendAction('set-foreground-window', this.identity).then(() => undefined);
    }
    /**
     * Sets the window's size and position.
     * @property { Bounds } bounds This is a * @type {string} name - name of the window.object that holds the propertys of
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.setBounds
     */
    setBounds(bounds, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('set-window-bounds', { ...bounds, options, ...this.identity })
            .then(() => undefined);
    }
    /**
     * Shows the window if it is hidden.
     * @param { boolean } [force = false] Show will be prevented from showing when force is false and
     *  ‘show-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.show
     */
    show(force = false) {
        return this.wire.sendAction('show-window', { force, ...this.identity }).then(() => undefined);
    }
    /**
     * Shows the window if it is hidden at the specified location.
     * If the toggle parameter is set to true, the window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The right position of the window
     * @param { boolean } force Show will be prevented from closing when force is false and
     * ‘show-requested’ has been subscribed to for application’s main window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.showAt
     */
    showAt(left, top, force = false, options = { moveIndependently: false }) {
        return this.wire
            .sendAction('show-at-window', {
            force,
            left: Math.floor(left),
            top: Math.floor(top),
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools
     * @return {Promise.<void>}
     * @tutorial Window.showDeveloperTools
     */
    /**
     * Updates the window using the passed options.
     * Values that are objects are deep-merged, overwriting only the values that are provided.
     * @param {*} options Changes a window's options that were defined upon creation. See tutorial
     * @return {Promise.<void>}
     * @tutorial Window.updateOptions
     */
    updateOptions(options) {
        return this.wire.sendAction('update-window-options', { options, ...this.identity }).then(() => undefined);
    }
    /**
     * Provides credentials to authentication requests
     * @param { string } userName userName to provide to the authentication challenge
     * @param { string } password password to provide to the authentication challenge
     * @return {Promise.<void>}
     * @tutorial Window.authenticate
     */
    authenticate(userName, password) {
        return this.wire
            .sendAction('window-authenticate', { userName, password, ...this.identity })
            .then(() => undefined);
    }
    /**
     * @typedef {object} ShowPopupMenuOptions
     * @property {Array<MenuItemTemplate>} template - An array describing the menu to show.
     * @property {number} [x] - The window x coordinate where to show the menu. Defaults to mouse position. If using must also use `y`.
     * @property {number} [y] - The window y coordinate where to show the menu. Defaults to mouse position. If using must also use `x`
     */
    /**
     * @typedef {object} MenuItemTemplate
     * @property {*} data Data to be returned if the user selects the element. Must be serializable. Large objects can have a performance impact.
     * @property {'normal' | 'separator' | 'submenu' | 'checkbox'} [type] - Defaults to 'normal' unless a 'submenu' key exists
     * @property {string} [label] - The text to show on the menu item. Should be left undefined for `type: 'separator'`
     * @property {boolean} [enabled] - If false, the menu item will be greyed out and unclickable.
     * @property {boolean} [visible] - If false, the menu item will be entirely hidden.
     * @property {boolean} [checked] - Should only be specified for `checkbox` type menu items.
     * @property {Array<MenuItemTemplate>} [submenu] Should be specified for `submenu` type menu items. If `submenu` is specified, the `type: 'submenu'` can be omitted.
     */
    /**
     * @typedef {object} MenuResult
     * @property {'clicked' | 'closed'} result - Whether the user clicked on a menu item or the menu was closed (user clicked elsewhere).
     * @property {* | undefined} [data] - The data property of the menu item clicked by the user. Only defined if result was `clicked`.
     */
    /**
     * Shows a menu on the window. Returns a promise that resolves when the user has either selected an item or closed the menu. (This may take longer than other apis).
     * Resolves to an object with `{result: 'clicked', data }` where data is the data field on the menu item clicked, or `{result 'closed'}` when the user doesn't select anything.
     * Calling this method will close previously opened menus.
     * @experimental
     * @param {ShowPopupMenuOptions} options
     * @return {Promise<MenuResult>}
     * @tutorial Window.showPopupMenu
     */
    async showPopupMenu(options) {
        const { payload } = await this.wire.sendAction('show-popup-menu', { options, ...this.identity });
        return payload.data;
    }
    /**
     * Closes the window's popup menu, if one exists.
     * @experimental
     * @return {Promise<void>}
     * @tutorial Window.closePopupMenu
     */
    async closePopupMenu() {
        return this.wire.sendAction('close-popup-menu', { ...this.identity }).then(() => undefined);
    }
}
exports._Window = _Window;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/window/bounds-changed.js":
/*!***********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/window/bounds-changed.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoundsChangeType = void 0;
const base_1 = __webpack_require__(/*! ../base */ "./node_modules/openfin-adapter/src/api/base.js");
class BoundsChangedReply extends base_1.Reply {
}
exports["default"] = BoundsChangedReply;
var BoundsChangeType;
(function (BoundsChangeType) {
    BoundsChangeType[BoundsChangeType["POSITION"] = 0] = "POSITION";
    BoundsChangeType[BoundsChangeType["SIZE"] = 1] = "SIZE";
    BoundsChangeType[BoundsChangeType["POSITION_AND_SIZE"] = 2] = "POSITION_AND_SIZE";
})(BoundsChangeType = exports.BoundsChangeType || (exports.BoundsChangeType = {}));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/window/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/window/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "./node_modules/openfin-adapter/src/api/window/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./shapes */ "./node_modules/openfin-adapter/src/api/window/shapes.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "./node_modules/openfin-adapter/src/api/window/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./bounds-changed */ "./node_modules/openfin-adapter/src/api/window/bounds-changed.js"), exports);


/***/ }),

/***/ "./node_modules/openfin-adapter/src/api/window/shapes.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/api/window/shapes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/mock.js":
/*!**************************************************!*\
  !*** ./node_modules/openfin-adapter/src/mock.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inOpenFin = exports.fin = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
/// <reference path="../OpenFin.d.ts"/>
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const fin_1 = __webpack_require__(/*! ./api/fin */ "./node_modules/openfin-adapter/src/api/fin.js");
const EntityType_1 = __webpack_require__(/*! ./shapes/EntityType */ "./node_modules/openfin-adapter/src/shapes/EntityType.js");
const transport_1 = __webpack_require__(/*! ./transport/transport */ "./node_modules/openfin-adapter/src/transport/transport.js");
class MockWire extends events_1.EventEmitter {
    connect(address) {
        throw new Error('You are not running in OpenFin.');
    }
    connectSync() {
        throw new Error('You are not running in OpenFin.');
    }
    send(data) {
        throw new Error('You are not running in OpenFin.');
    }
    shutdown() {
        throw new Error('You are not running in OpenFin.');
    }
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
}
class MockEnvironment {
    constructor() {
        this.childViews = true;
    }
    getManagerConstructor() {
        throw new Error('Method not implemented.');
    }
    getProviderInitializer() {
        throw new Error('Method not implemented.');
    }
    writeToken(path, token) {
        throw new Error('Method not implemented.');
    }
    retrievePort(config) {
        throw new Error('Method not implemented.');
    }
    getNextMessageId() {
        throw new Error('Method not implemented.');
    }
    getRandomId() {
        throw new Error('Method not implemented.');
    }
    createChildContent(options) {
        throw new Error('Method not implemented.');
    }
    getWebWindow(identity) {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityIdentity() {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityType() {
        return EntityType_1.default.UNKNOWN;
    }
    raiseEvent(eventName, eventArgs) {
        throw new Error('Method not implemented.');
    }
    getUrl() {
        throw new Error('Method not implemented.');
    }
}
exports.fin = ((typeof window !== 'undefined' && ((_a = window) === null || _a === void 0 ? void 0 : _a.fin)) ||
    (() => {
        const environment = new MockEnvironment();
        const transport = new transport_1.default(MockWire, environment, {
            uuid: '',
            name: ''
        });
        return new fin_1.default(transport);
    })());
exports.inOpenFin = typeof window !== 'undefined' && typeof window.fin === 'object';


/***/ }),

/***/ "./node_modules/openfin-adapter/src/shapes/EntityType.js":
/*!***************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/shapes/EntityType.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EntityType;
(function (EntityType) {
    EntityType["WINDOW"] = "window";
    EntityType["IFRAME"] = "iframe";
    EntityType["EXTERNAL"] = "external connection";
    EntityType["VIEW"] = "view";
    EntityType["UNKNOWN"] = "unknown";
})(EntityType || (EntityType = {}));
exports["default"] = EntityType;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/shapes/Platform.js":
/*!*************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/shapes/Platform.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowCreationReason = exports.HostContextChangedReasons = void 0;
var HostContextChangedReasons;
(function (HostContextChangedReasons) {
    HostContextChangedReasons["updated"] = "updated";
    HostContextChangedReasons["reparented"] = "reparented";
})(HostContextChangedReasons = exports.HostContextChangedReasons || (exports.HostContextChangedReasons = {}));
var WindowCreationReason;
(function (WindowCreationReason) {
    WindowCreationReason["Tearout"] = "tearout";
    WindowCreationReason["CreateViewWithoutTarget"] = "create-view-without-target";
    WindowCreationReason["APICall"] = "api-call";
    WindowCreationReason["AppCreation"] = "app-creation";
    WindowCreationReason["Restore"] = "restore";
})(WindowCreationReason = exports.WindowCreationReason || (exports.WindowCreationReason = {}));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/transport/fin_store.js":
/*!*****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/transport/fin_store.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFin = exports.registerFin = void 0;
const finMap = new WeakMap();
function registerFin(wire, fin) {
    finMap.set(wire, fin);
}
exports.registerFin = registerFin;
function getFin(wire) {
    const fin = finMap.get(wire);
    if (!fin) {
        throw new Error('Could not locate fin api for given transport');
    }
    return fin;
}
exports.getFin = getFin;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/transport/transport-errors.js":
/*!************************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/transport/transport-errors.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeError = exports.NotSupportedError = exports.NotImplementedError = exports.NoAckError = exports.DuplicateCorrelationError = exports.UnexpectedActionError = exports.DisconnectedError = void 0;
/* eslint-disable max-classes-per-file */
const wire_1 = __webpack_require__(/*! ./wire */ "./node_modules/openfin-adapter/src/transport/wire.js");
class DisconnectedError extends Error {
    constructor(readyState) {
        super(`Expected websocket state OPEN but found ${wire_1.READY_STATE[readyState]}`);
        this.readyState = readyState;
    }
}
exports.DisconnectedError = DisconnectedError;
class UnexpectedActionError extends Error {
}
exports.UnexpectedActionError = UnexpectedActionError;
class DuplicateCorrelationError extends Error {
}
exports.DuplicateCorrelationError = DuplicateCorrelationError;
class NoAckError extends Error {
}
exports.NoAckError = NoAckError;
class NotImplementedError extends Error {
}
exports.NotImplementedError = NotImplementedError;
class NotSupportedError extends Error {
}
exports.NotSupportedError = NotSupportedError;
class RuntimeError extends Error {
    constructor(data) {
        const payload = data.payload || data;
        const { reason, error } = payload;
        super(reason);
        this.name = 'RuntimeError';
        if (error === null || error === void 0 ? void 0 : error.stack) {
            this.stack = error.stack;
        }
    }
}
exports.RuntimeError = RuntimeError;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/transport/transport.js":
/*!*****************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/transport/transport.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wire;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const wire_1 = __webpack_require__(/*! ./wire */ "./node_modules/openfin-adapter/src/transport/wire.js");
const transport_errors_1 = __webpack_require__(/*! ./transport-errors */ "./node_modules/openfin-adapter/src/transport/transport-errors.js");
const eventAggregator_1 = __webpack_require__(/*! ../api/events/eventAggregator */ "./node_modules/openfin-adapter/src/api/events/eventAggregator.js");
const me_1 = __webpack_require__(/*! ../api/me */ "./node_modules/openfin-adapter/src/api/me.js");
class Transport extends events_1.EventEmitter {
    constructor(WireType, environment, config) {
        super();
        this.wireListeners = new Map();
        this.topicRefMap = new Map();
        this.eventAggregator = new eventAggregator_1.default();
        this.messageHandlers = [this.eventAggregator.dispatchEvent];
        _wire.set(this, void 0);
        this.connectSync = () => {
            const wire = __classPrivateFieldGet(this, _wire);
            wire.connectSync();
        };
        // This function is only used in our tests.
        this.getPort = () => {
            if (this.environment.constructor.name !== 'NodeEnvironment') {
                throw new transport_errors_1.NotImplementedError('Not Implemented');
            }
            const wire = __classPrivateFieldGet(this, _wire);
            return wire.wire.url.split(':').slice(-1)[0];
        };
        /* `READY_STATE` is an instance var set by `constructor` to reference the `WebTransportSocket.READY_STATE` enum.
         * This is syntactic sugar that makes the enum accessible through the `wire` property of the various `fin` singletons.
         * For example, `fin.system.wire.READY_STATE` is a shortcut to `fin.system.wire.wire.constructor.READY_STATE`.
         * However it is accessed, the enum is useful for interrogating the state of the web socket on send failure.
         * The `err.readyState` value is passed to the `reject` handler of the promise returned by either of
         * `sendAction` or `ferryAction`, and hence all the API methods in the various `fin` singletons that call them.
         * The enum can be used in two distinct ways by the `reject` handler (using `fin.System.getVersion` by way of example):
         * 1. State name by state value:
         * fin.system.getVersion().catch(err => { console.log('State:', fin.system.wire.READY_STATE[err.readyState]); });
         * 2. State value by state name:
         * fin.system.getVersion().catch(err => { console.log('Closed:', err.readyState === fin.system.wire.READY_STATE.CLOSED); });
         * Note that `reject` is called when and only when `readyState` is not `OPEN`.
         */
        this.READY_STATE = wire_1.READY_STATE;
        __classPrivateFieldSet(this, _wire, new WireType(this.onmessage.bind(this)));
        this.environment = environment;
        this.sendRaw = __classPrivateFieldGet(this, _wire).send.bind(__classPrivateFieldGet(this, _wire));
        this.registerMessageHandler(this.handleMessage.bind(this));
        __classPrivateFieldGet(this, _wire).on('disconnected', () => {
            for (const [, { reject }] of this.wireListeners) {
                reject('Remote connection has closed');
            }
            this.wireListeners.clear();
            this.emit('disconnected');
        });
        const { uuid, name } = config;
        const entityType = this.environment.getCurrentEntityType();
        this.me = me_1.getBaseMe(entityType, uuid, name);
    }
    shutdown() {
        const wire = __classPrivateFieldGet(this, _wire);
        return wire.shutdown();
    }
    async connect(config) {
        if (wire_1.isExistingConnectConfig(config)) {
            return this.connectByPort(config);
        }
        if (wire_1.isNewConnectConfig(config)) {
            const port = await this.environment.retrievePort(config);
            return this.connectByPort({ ...config, address: `ws://localhost:${port}` });
        }
        return undefined;
    }
    async connectByPort(config) {
        const { address, uuid } = config;
        const reqAuthPayload = { ...config, type: 'file-token' };
        const wire = __classPrivateFieldGet(this, _wire);
        await wire.connect(address);
        const requestExtAuthRet = await this.sendAction('request-external-authorization', {
            uuid,
            type: 'file-token'
        }, true);
        if (requestExtAuthRet.action !== 'external-authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestExtAuthRet.action);
        }
        const { token } = requestExtAuthRet.payload;
        await this.environment.writeToken(requestExtAuthRet.payload.file, requestExtAuthRet.payload.token);
        const requestAuthRet = await this.sendAction('request-authorization', reqAuthPayload, true);
        if (requestAuthRet.action !== 'authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestAuthRet.action);
        }
        else if (requestAuthRet.payload.success !== true) {
            throw new transport_errors_1.RuntimeError(requestAuthRet.payload);
        }
        else {
            return token;
        }
    }
    sendAction(action, payload = {}, uncorrelated = false
    // specialResponse type is only used for 'requestAuthorization'
    ) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            const msg = {
                action,
                payload,
                messageId: id
            };
            const wire = __classPrivateFieldGet(this, _wire);
            this.addWireListener(id, resolve, reject, uncorrelated);
            return wire.send(msg).catch(reject);
        });
    }
    ferryAction(origData) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            origData.messageId = id;
            const resolver = (data) => {
                resolve(data.payload);
            };
            const wire = __classPrivateFieldGet(this, _wire);
            return wire
                .send(origData)
                .then(() => this.addWireListener(id, resolver, reject, false))
                .catch(reject);
        });
    }
    registerMessageHandler(handler) {
        this.messageHandlers.push(handler);
    }
    addWireListener(id, resolve, reject, uncorrelated) {
        if (uncorrelated) {
            this.uncorrelatedListener = resolve;
        }
        else if (this.wireListeners.has(id)) {
            reject(new transport_errors_1.DuplicateCorrelationError(String(id)));
        }
        else {
            this.wireListeners.set(id, { resolve, reject });
        }
        // Timeout and reject()?
    }
    // This method executes message handlers until the _one_ that handles the message (returns truthy) has run
    onmessage(data) {
        for (const h of this.messageHandlers) {
            h.call(null, data);
        }
    }
    handleMessage(data) {
        const id = data.correlationId || NaN;
        if (!('correlationId' in data)) {
            if (this.uncorrelatedListener) {
                this.uncorrelatedListener.call(null, data);
            }
            this.uncorrelatedListener = () => {
                // empty block
            };
        }
        else if (!this.wireListeners.has(id)) {
            return false;
        }
        else {
            // We just checked for existence above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { resolve, reject } = this.wireListeners.get(id);
            if (data.action !== 'ack') {
                reject(new transport_errors_1.NoAckError(data.action));
            }
            else if (!('payload' in data)) {
                reject(new transport_errors_1.RuntimeError(data));
            }
            else if (!data.payload.success) {
                reject(new transport_errors_1.RuntimeError(data.payload));
            }
            else {
                resolve.call(null, data);
            }
            this.wireListeners.delete(id);
        }
        return true;
    }
}
_wire = new WeakMap();
exports["default"] = Transport;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/transport/wire.js":
/*!************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/transport/wire.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.READY_STATE = exports.isInternalConnectConfig = exports.isPortDiscoveryConfig = exports.isNewConnectConfig = exports.isExistingConnectConfig = exports.isExternalConfig = void 0;
function isExternalConfig(config) {
    if (typeof config.manifestUrl === 'string') {
        return true;
    }
    return false;
}
exports.isExternalConfig = isExternalConfig;
function isExistingConnectConfig(config) {
    return hasUuid(config) && typeof config.address === 'string';
}
exports.isExistingConnectConfig = isExistingConnectConfig;
function hasUuid(config) {
    return typeof config.uuid === 'string';
}
function hasRuntimeVersion(config) {
    return config.runtime && typeof config.runtime.version === 'string';
}
function isNewConnectConfig(config) {
    return hasUuid(config) && hasRuntimeVersion(config);
}
exports.isNewConnectConfig = isNewConnectConfig;
function isPortDiscoveryConfig(config) {
    return (isExternalConfig(config) && hasRuntimeVersion(config)) || isNewConnectConfig(config);
}
exports.isPortDiscoveryConfig = isPortDiscoveryConfig;
function isInternalConnectConfig(config) {
    return isExistingConnectConfig(config) || isNewConnectConfig(config);
}
exports.isInternalConnectConfig = isInternalConnectConfig;
var READY_STATE;
(function (READY_STATE) {
    READY_STATE[READY_STATE["CONNECTING"] = 0] = "CONNECTING";
    READY_STATE[READY_STATE["OPEN"] = 1] = "OPEN";
    READY_STATE[READY_STATE["CLOSING"] = 2] = "CLOSING";
    READY_STATE[READY_STATE["CLOSED"] = 3] = "CLOSED"; // The connection is closed.
})(READY_STATE = exports.READY_STATE || (exports.READY_STATE = {}));


/***/ }),

/***/ "./node_modules/openfin-adapter/src/util/promises.js":
/*!***********************************************************!*\
  !*** ./node_modules/openfin-adapter/src/util/promises.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promiseMapSerial = exports.serial = exports.promiseMap = exports.promisify = void 0;
function promisify(func) {
    return (...args) => new Promise((resolve, reject) => {
        func(...args, (err, val) => (err ? reject(err) : resolve(val)));
    });
}
exports.promisify = promisify;
async function promiseMap(arr, asyncF) {
    return Promise.all(arr.map(asyncF));
}
exports.promiseMap = promiseMap;
async function serial(arr) {
    const ret = [];
    for (const func of arr) {
        // eslint-disable-next-line no-await-in-loop
        const next = await func();
        ret.push(next);
    }
    return ret;
}
exports.serial = serial;
async function promiseMapSerial(arr, func) {
    return serial(arr.map((value, index, array) => () => func(value, index, array)));
}
exports.promiseMapSerial = promiseMapSerial;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/util/ref-counter.js":
/*!**************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/util/ref-counter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class RefCoutner {
    constructor() {
        this.topicRefMap = new Map();
    }
    // returns the ref count after incrementing
    incRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (!refCount) {
            this.topicRefMap.set(key, 1);
            returnCount = 1;
        }
        else {
            const newRefCount = refCount + 1;
            returnCount = newRefCount;
            this.topicRefMap.set(key, newRefCount);
        }
        return returnCount;
    }
    // returns the ref count after decrementing, or -1 if the key already had no references
    decRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (refCount) {
            const newRefCount = refCount - 1;
            this.topicRefMap.set(key, newRefCount);
            returnCount = newRefCount;
        }
        else {
            returnCount = -1;
        }
        return returnCount;
    }
    // Execute firstAction if it is the first such ref, else execute nonFirstAction.
    // In either case the return value is that of the action executed
    actOnFirst(key, firstAction, nonFirstAction) {
        const numRefs = this.incRefCount(key);
        const isFirstRef = numRefs === 1;
        return isFirstRef ? firstAction() : nonFirstAction();
    }
    // Execute lastAction if it is the first such ref, else execute nonLastAction.
    // In either case the return value is that of the action executed
    actOnLast(key, lastAction, nonLastAction) {
        const numRefs = this.decRefCount(key);
        const isLastRef = numRefs === 0;
        return isLastRef ? lastAction() : nonLastAction();
    }
}
exports["default"] = RefCoutner;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/util/runtimeVersioning.js":
/*!********************************************************************!*\
  !*** ./node_modules/openfin-adapter/src/util/runtimeVersioning.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runtimeUuidMeetsMinimumRuntimeVersion = exports.parseRuntimeUuid = exports.meetsMinimumRuntimeVersion = void 0;
function vNum(x) {
    return [...x.split('.').reverse().entries()].reduce((p, [i, v]) => p + +v * 10000 ** i, 0);
}
/*
  Compares runtime versions to see if the current runtime meets your desired minimum.
*/
function meetsMinimumRuntimeVersion(currentVersion, minVersion) {
    const currentVersionParsed = vNum(currentVersion);
    const minVersionParsed = vNum(minVersion);
    return currentVersionParsed >= minVersionParsed;
}
exports.meetsMinimumRuntimeVersion = meetsMinimumRuntimeVersion;
// Strips the port info from the runtimeUuid, leaving just the runtime version.
function parseRuntimeUuid(runtimeUuid) {
    return runtimeUuid.split('/')[0];
}
exports.parseRuntimeUuid = parseRuntimeUuid;
function runtimeUuidMeetsMinimumRuntimeVersion(runtimeUuid, minVersion) {
    const runtimeVersion = parseRuntimeUuid(runtimeUuid);
    return meetsMinimumRuntimeVersion(runtimeVersion, minVersion);
}
exports.runtimeUuidMeetsMinimumRuntimeVersion = runtimeUuidMeetsMinimumRuntimeVersion;


/***/ }),

/***/ "./node_modules/openfin-adapter/src/util/validate.js":
/*!***********************************************************!*\
  !*** ./node_modules/openfin-adapter/src/util/validate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateIdentity = void 0;
function validateIdentity(identity) {
    let errorMsg;
    if (typeof identity !== 'object' || typeof identity.uuid !== 'string') {
        errorMsg = 'Not a valid identity object';
    }
    return errorMsg;
}
exports.validateIdentity = validateIdentity;
exports["default"] = { validateIdentity };


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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./client/src/home.ts");
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openfin-adapter/src/mock */ "./node_modules/openfin-adapter/src/mock.js");


async function init() {
    // you can kick off your bootstrapping process here where you may decide to prompt for authentication, 
    // gather reference data etc before starting workspace and interacting with it.
    console.log("Initialising the bootstrapper");
    // only register search logic once workspace is running
    await (0,_home__WEBPACK_IMPORTED_MODULE_0__.register)();
    await (0,_home__WEBPACK_IMPORTED_MODULE_0__.show)();
    const providerWindow = openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_1__.fin.Window.getCurrentSync();
    providerWindow.once("close-requested", async (event) => {
        await (0,_home__WEBPACK_IMPORTED_MODULE_0__.deregister)();
        openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_1__.fin.Platform.getCurrentSync().quit();
    });
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
/* harmony export */   "launchView": () => (/* binding */ launchView)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "./node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);

let windowIdentity;
async function launchView(url) {
    const platform = (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.getCurrentSync)();
    let createWindow = true;
    if (windowIdentity) {
        const window = fin.Window.wrapSync(windowIdentity);
        if (window) {
            createWindow = false;
        }
    }
    if (createWindow) {
        windowIdentity = await platform.createWindow({
            defaultHeight: 700,
            defaultWidth: 1200,
            layout: {
                content: [
                    {
                        type: 'stack',
                        content: [],
                    },
                ],
            },
        });
    }
    await platform.createView({ url, target: null }, windowIdentity);
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
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "deregister": () => (/* binding */ deregister)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "./node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
/* harmony import */ var _salesforce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salesforce */ "./client/src/salesforce.ts");
/* harmony import */ var _openfin_salesforce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @openfin/salesforce */ "./node_modules/@openfin/salesforce/index.js");





const BROWSE_SEARCH_RESULT_KEY = 'browse-salesforce';
const PROVIDER_ID = 'integrate-with-salesforce';
const NOT_CONNECTED_SEARCH_RESULT_KEY = 'not-connected-result';
const OBJECTS_FILTER_ID = 'objects';
async function getSalesforceIconUrl() {
    const { icon } = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
    return icon;
}
function getSearchFilters(objects) {
    if (Array.isArray(objects)) {
        let filters = [];
        let uniqueObjects = [...new Set(objects.sort())];
        let objectFilter = {
            id: OBJECTS_FILTER_ID,
            title: "Objects",
            type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLIFilterOptionType.MultiSelect,
            options: [],
        };
        uniqueObjects.forEach((object) => {
            if (Array.isArray(objectFilter.options)) {
                objectFilter.options.push({
                    value: object,
                    isSelected: false,
                });
            }
        });
        filters.push(objectFilter);
        return filters;
    }
    return [];
}
async function getResults(query, queryMinLength = 3, filters) {
    // Define the default "browse" search result displayed when no query provided
    const salesforceConnection = (0,_salesforce__WEBPACK_IMPORTED_MODULE_3__.getConnection)();
    const { orgUrl } = salesforceConnection;
    const icon = await getSalesforceIconUrl();
    const browseResult = {
        actions: [{ name: 'Browse', hotkey: 'enter' }],
        data: {
            pageUrl: orgUrl,
        },
        icon,
        key: BROWSE_SEARCH_RESULT_KEY,
        template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Plain,
        templateContent: undefined,
        title: 'Browse Salesforce',
    };
    // Return default browse result if query less than minimum char length or starts with /
    const searchQuery = query.trim();
    if (searchQuery.length < queryMinLength || /^\//.test(searchQuery)) {
        return { results: [browseResult] };
    }
    // Retrieve search results from Salesforce
    let searchResults;
    try {
        let selectedObjects = [];
        if (Array.isArray(filters) && filters.length > 0) {
            const objectsFilter = filters.find(x => x.id === OBJECTS_FILTER_ID);
            if (objectsFilter) {
                selectedObjects = (Array.isArray(objectsFilter.options) ? objectsFilter.options : [objectsFilter.options])
                    .filter(x => !!x.isSelected)
                    .map(x => x.value);
            }
        }
        searchResults = await (0,_salesforce__WEBPACK_IMPORTED_MODULE_3__.getSearchResults)(searchQuery, selectedObjects);
    }
    catch (err) {
        if (err instanceof _openfin_salesforce__WEBPACK_IMPORTED_MODULE_4__.ConnectionError) {
            const icon = await getSalesforceIconUrl();
            return {
                results: [
                    {
                        actions: [{ name: 'Reconnect', hotkey: 'enter' }],
                        key: NOT_CONNECTED_SEARCH_RESULT_KEY,
                        icon,
                        title: 'Reconnect to Salesforce',
                    },
                ],
            };
        }
        return { results: [] };
    }
    const results = searchResults.map((searchResult) => {
        const data = {
            pageUrl: (0,_openfin_salesforce__WEBPACK_IMPORTED_MODULE_4__.getObjectUrl)(searchResult, salesforceConnection),
        };
        switch (searchResult.attributes.type) {
            case 'Account': {
                const account = searchResult;
                return {
                    actions: [{ name: 'View', hotkey: 'enter' }],
                    label: searchResult.attributes.type,
                    key: account.Id,
                    title: account.Name,
                    data,
                    template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Contact,
                    templateContent: {
                        name: account.Name,
                        title: account.Industry,
                        details: [
                            [
                                ['Phone', account.Phone],
                                ['Type', account.Type],
                                ['Website', account.Website],
                            ],
                        ],
                    },
                };
            }
            case 'Contact': {
                const contact = searchResult;
                return {
                    actions: [{ name: 'View', hotkey: 'enter' }],
                    label: searchResult.attributes.type,
                    key: contact.Id,
                    title: contact.Name,
                    data,
                    template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Contact,
                    templateContent: {
                        name: contact.Name,
                        title: contact.Title,
                        useInitials: true,
                        details: [
                            [
                                ['Department', contact.Department],
                                ['Email', contact.Email],
                                ['Work #', contact.Phone],
                            ],
                        ],
                    },
                };
            }
            default:
                // in this case we are only searching for accounts and contacts
                return undefined;
        }
    });
    const filteredResults = results.filter(Boolean);
    const objects = searchResults.map(result => result.attributes.type);
    return {
        results: filteredResults,
        context: {
            filters: getSearchFilters(objects),
        },
    };
}
async function register() {
    console.log("Initialising home");
    let settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
    const queryMinLength = settings.queryMinLength || 3;
    let lastResponse;
    let query;
    let filters;
    const onUserInput = async (request, response) => {
        query = request.query.toLowerCase();
        if (query.indexOf("/") === 0) {
            return { results: [] };
        }
        filters = request?.context?.selectedFilters;
        if (lastResponse !== undefined) {
            lastResponse.close();
        }
        lastResponse = response;
        lastResponse.open();
        let results = await getResults(query, queryMinLength, filters);
        return results;
    };
    const onSelection = async (result) => {
        // if the user clicked the reconnect result, reconnect to salesforce and re-run query
        if (result.key === NOT_CONNECTED_SEARCH_RESULT_KEY) {
            await (0,_salesforce__WEBPACK_IMPORTED_MODULE_3__.init)();
            let results = await getResults(query, queryMinLength, filters);
            lastResponse.revoke(NOT_CONNECTED_SEARCH_RESULT_KEY);
            lastResponse.respond(results.results);
            _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.show();
            return;
        }
        // otherwise open the result page url in browser
        const data = result.data;
        if (data !== undefined) {
            (0,_browser__WEBPACK_IMPORTED_MODULE_2__.launchView)(data.pageUrl);
        }
        else {
            console.warn("Unable to execute result without data being passed");
        }
    };
    const cliProvider = {
        title: settings.title,
        id: PROVIDER_ID,
        icon: settings.icon,
        onUserInput: onUserInput,
        onResultDispatch: onSelection,
    };
    await _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.register(cliProvider);
    console.log("Home configured");
}
async function show() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.show();
}
async function hide() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.hide();
}
async function deregister() {
    let settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.deregister(PROVIDER_ID);
}


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
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "./node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _salesforce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesforce */ "./client/src/salesforce.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");



async function init() {
    console.log("Initialising salesforce");
    await (0,_salesforce__WEBPACK_IMPORTED_MODULE_1__.init)();
    console.log("Initialising platform");
    const { icon, title } = await (0,_settings__WEBPACK_IMPORTED_MODULE_2__.getSettings)();
    let browser = {};
    browser.defaultWindowOptions = {
        icon,
        workspacePlatform: {
            favicon: icon,
            pages: null,
            title
        }
    };
    console.log("Specifying following browser options: ", browser);
    await (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.init)({
        browser,
        theme: [
            {
                label: "Salesforce Theme",
                palette: {
                    brandPrimary: "#0070D2",
                    brandSecondary: "#0070D2",
                    backgroundPrimary: "#265A78",
                    background1: "#0C4362",
                    background2: "#105998",
                    background3: "#265A78",
                    background4: "#0070D2",
                    background5: "#0070D2",
                    background6: "#0070D2",
                }
            }
        ]
    });
}


/***/ }),

/***/ "./client/src/salesforce.ts":
/*!**********************************!*\
  !*** ./client/src/salesforce.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConnection": () => (/* binding */ getConnection),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _openfin_salesforce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/salesforce */ "./node_modules/@openfin/salesforce/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");


let sfConn;
function getConnection() {
    return sfConn;
}
async function getSearchResults(query, selectedObjects) {
    const accountFieldSpec = 'Account(Id, Industry, Name, Phone, Type, Website)';
    const contactFieldSpec = 'Contact(Department, Email, Id, Name, Phone, Title)';
    const fieldSpecMap = new Map([
        ['Account', accountFieldSpec], ['Contact', contactFieldSpec]
    ]);
    let fieldSpec = [...fieldSpecMap]
        .filter(x => {
        if (selectedObjects?.length > 0) {
            return selectedObjects.includes(x[0]);
        }
        return true;
    })
        .map(x => x[1])
        .join(', ');
    const salesforceSearchQuery = `FIND {${query}} IN ALL FIELDS RETURNING ${fieldSpec} LIMIT 25`;
    const response = await sfConn.executeApiRequest(`/services/data/vXX.X/search?q=${encodeURIComponent(salesforceSearchQuery)}`);
    return response.data.searchRecords;
}
async function init() {
    (0,_openfin_salesforce__WEBPACK_IMPORTED_MODULE_0__.enableLogging)();
    const { orgUrl, consumerKey, isSandbox } = await (0,_settings__WEBPACK_IMPORTED_MODULE_1__.getSettings)();
    sfConn = await (0,_openfin_salesforce__WEBPACK_IMPORTED_MODULE_0__.connect)(orgUrl, consumerKey, isSandbox);
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
/* harmony export */   "getSettings": () => (/* binding */ getSettings)
/* harmony export */ });
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openfin-adapter/src/mock */ "./node_modules/openfin-adapter/src/mock.js");

let settings;
async function getConfiguredSettings() {
    const app = await openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.Application.getCurrent();
    const { customSettings } = await app.getManifest();
    return customSettings;
}
async function getSettings() {
    if (settings === undefined) {
        settings = await getConfiguredSettings();
    }
    return settings;
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./client/src/platform.ts");
/* harmony import */ var _bootstrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrapper */ "./client/src/bootstrapper.ts");
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openfin-adapter/src/mock */ "./node_modules/openfin-adapter/src/mock.js");



window.addEventListener('DOMContentLoaded', async () => {
    let platform = openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_2__.fin.Platform.getCurrentSync();
    platform.once('platform-api-ready', _bootstrapper__WEBPACK_IMPORTED_MODULE_1__.init.bind(undefined));
    await (0,_platform__WEBPACK_IMPORTED_MODULE_0__.init)();
});

})();

/******/ })()
;