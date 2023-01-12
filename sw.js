/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"d897c4679502721b94f0eb5743e82b3d","url":"404.html"},{"revision":"23b22b3ac9411a78f984d7ac3f41ec93","url":"A_Comparison_of_Different_Grove_Temperature_Sensors/index.html"},{"revision":"86d5d2aec46d744f27e818d8041b97a5","url":"About/index.html"},{"revision":"8bd02a3052f9315aa3fcbfd3aca4d27a","url":"assets/css/styles.2eda7060.css"},{"revision":"ddd6fc1ac0ff57d7c4a50b50fbac2bee","url":"assets/js/005468fc.07225fa8.js"},{"revision":"cac763c6edb0a78bdd29474ec1ca14aa","url":"assets/js/01444ef5.9ca2de34.js"},{"revision":"c789c73d2ab5b565c00c960695e79491","url":"assets/js/01a85c17.97ec86b3.js"},{"revision":"efca9aaf0e1ef4893d00f059b96aafb6","url":"assets/js/02cd463f.6d44c8c8.js"},{"revision":"013ad4a1e487f9392580100fa287392c","url":"assets/js/03dcabdf.e62aec78.js"},{"revision":"0f688421accd562a0e534b254559379b","url":"assets/js/04122469.25e7de49.js"},{"revision":"de00b6aedf9a3783ebab3c48f4a74dea","url":"assets/js/05dabc20.a67dfbbd.js"},{"revision":"8344ebd5fb5d4fcab7d3878d41e89001","url":"assets/js/0620dccc.05641ed5.js"},{"revision":"0bc1c129bfd70d2c75247f8485441826","url":"assets/js/0726a836.93d6049f.js"},{"revision":"c7191fe62a50d1624b6883b0034bb46f","url":"assets/js/074c28f9.c54d2cad.js"},{"revision":"9a1a5f46a865fd7299e0f74057289013","url":"assets/js/07d3229c.92d08165.js"},{"revision":"b1efe013c2e79541f6e4db860d1b67bd","url":"assets/js/0930a167.becc76cc.js"},{"revision":"e7d6a8c0f95fe58a39ac4e27744de5f1","url":"assets/js/09c11408.210399c6.js"},{"revision":"96946da94861f1985492a5a894cd843e","url":"assets/js/09f63151.65c6469a.js"},{"revision":"cd695f8c1361b42106ca4dc15be4d491","url":"assets/js/0a36879f.7ea6e9c2.js"},{"revision":"d4dac997b45b59e2ec47499d25a6d31c","url":"assets/js/0b9545d5.32850590.js"},{"revision":"4e8a4521cb878a0a6cd6824fe81e876a","url":"assets/js/0cc25c64.f5ea218e.js"},{"revision":"8289dd9d27f8ea9601b25ea3eeccd1f9","url":"assets/js/0e77115e.8b11d28b.js"},{"revision":"77699517fd1f521ee09aae1d16fc1354","url":"assets/js/0ea8e5f8.0120bfde.js"},{"revision":"cf04bbc8e654528b711a0f4fd1b14138","url":"assets/js/110fea83.19ead0db.js"},{"revision":"7e2182e458377eeebba2a43dde1b28ba","url":"assets/js/1221.62f28e65.js"},{"revision":"66a06d8e2f3c21fe032b0751abee803a","url":"assets/js/12cd39c5.c3475635.js"},{"revision":"8dbbc6f264a465e4a13c6dd21d974840","url":"assets/js/138c33b7.75b2b81b.js"},{"revision":"1371932c9b1c9487881ea016fd4635cd","url":"assets/js/140bcbe3.c0376201.js"},{"revision":"be8569f536ac0eb8e1beab018108982d","url":"assets/js/143.54c1ee62.js"},{"revision":"b72e5bd5787a1898760d52e8dabdd0fb","url":"assets/js/14342fa9.1372ad4d.js"},{"revision":"2653e4a33ef049ea0c550b8954842a48","url":"assets/js/145e0b68.a13f20a4.js"},{"revision":"868835e453d528643340530dfafb0d7f","url":"assets/js/146aae86.c183f4c0.js"},{"revision":"0c8035e5e6f1971a8cbdfc3528087006","url":"assets/js/14eed98c.f209f452.js"},{"revision":"def7554f01c6db96835bbd7f1e2a3769","url":"assets/js/151c46fd.af25b6a1.js"},{"revision":"d04796c3e3baf828c7c31c8b4db2e410","url":"assets/js/154017e4.6fca9a47.js"},{"revision":"b145ac95ed5f26a6b552eef1d539698f","url":"assets/js/157a6687.13a93495.js"},{"revision":"5a6a4c7af4b77e945ae1f00999ff67e3","url":"assets/js/164abcd0.f421d349.js"},{"revision":"d43c7dae85351300048be369e50fcbad","url":"assets/js/1671d379.daa6531a.js"},{"revision":"8843b6fc9537279f3ef121604bf34e03","url":"assets/js/171a67e9.522f90f1.js"},{"revision":"f9c699fae7f196cd0a6fcf6cdc273545","url":"assets/js/1726dbd0.58888d3d.js"},{"revision":"0ec7b9b7283070b7b7bb2353d5edd7c4","url":"assets/js/178594d9.4cfe428e.js"},{"revision":"9408cfc2895ec053870df0a618e46472","url":"assets/js/17896441.2991dded.js"},{"revision":"4f13b0581301f3a93f29c5ca1ef65448","url":"assets/js/184f97c9.1d2c5b3f.js"},{"revision":"a97b92e160da5ac41d6411a440b4bd74","url":"assets/js/18aed5bd.ae480009.js"},{"revision":"a001c032f1e5e4217267f6e26b42356b","url":"assets/js/194984cd.37a83cdd.js"},{"revision":"82c4719d66e8004a4b8eee83430a63d6","url":"assets/js/199d7462.01e92eeb.js"},{"revision":"7cf2667035da3720f7e3246c01f5a0c9","url":"assets/js/19bcfa7e.3943ee61.js"},{"revision":"35a635e498857fe80153fac3665ccb1e","url":"assets/js/1a4e3797.c5c4d9a3.js"},{"revision":"9f74434b63f943c99e555cefd4e7579a","url":"assets/js/1b69f82f.d3ec4c38.js"},{"revision":"f78d066b23445d88ab3b4bafd33d17e2","url":"assets/js/1be78505.8fa58127.js"},{"revision":"7d5cd97a5f7feb2cde94d84fe401f14f","url":"assets/js/1cca9871.e606c2ff.js"},{"revision":"f6c951a62b0725c2fd5d2d55ad6a3742","url":"assets/js/1d461b31.76a9f659.js"},{"revision":"13b46b59b57e3313678011c3410cbd79","url":"assets/js/1df93b7f.65ea2c83.js"},{"revision":"e3011e5836e984689f304da57f8d9f2e","url":"assets/js/1e6bebf6.a01a0432.js"},{"revision":"ce1a5bb0e73b01ecd1691311910837d0","url":"assets/js/1eafc2d9.451bdd6c.js"},{"revision":"542c929222a49146902ff2211018866e","url":"assets/js/1edb9b88.b2abe63e.js"},{"revision":"e8119cc1bb17f1e42aa849b064b708af","url":"assets/js/1f326d9e.061fdb34.js"},{"revision":"2a577550fde01136a7484357f295cc34","url":"assets/js/1f391b9e.d7e3e311.js"},{"revision":"da46c030be14fc944c27ab8ba3bc5bcf","url":"assets/js/1f4c1886.05f29d97.js"},{"revision":"c6cd6adc44f853e107da86af5e6bb0d1","url":"assets/js/1ffb633c.e80da6a4.js"},{"revision":"25ef38d23cb72e6ce58ad7528247e20c","url":"assets/js/200d35bb.48b87c34.js"},{"revision":"20cba793d6cad061211b46d3492e43f8","url":"assets/js/2048f185.0943e7ce.js"},{"revision":"b9db04e1cd232e2207f8475a7a7d04e2","url":"assets/js/20c4fb6d.7c94ecec.js"},{"revision":"186764276b9b5186698efe91bbc0d101","url":"assets/js/213f7cc4.3597ad7d.js"},{"revision":"26b53cf25bd03f8ff350a0793d3fee3e","url":"assets/js/230.b54af62d.js"},{"revision":"8c02fb8a8c4ae4af6ce2c56dfb01887a","url":"assets/js/230e8c80.8e5145c6.js"},{"revision":"a295afcf32aa97a0d9e6255e3cfa98e7","url":"assets/js/2396dc9e.886f0b0b.js"},{"revision":"b4f37898129a6830bf941b6c1ac5f0b4","url":"assets/js/243953de.27f12058.js"},{"revision":"3d4e3175d45feb24e4ea0a03e3d6772e","url":"assets/js/24ac6543.d2598e63.js"},{"revision":"5ffabfb1b2099b10058fee1adce20d20","url":"assets/js/2529.ff36fffa.js"},{"revision":"26347b53971f726a1caa06441169cec7","url":"assets/js/2571b16d.d0af6555.js"},{"revision":"4ba560210644bf183976b2b0ba5def20","url":"assets/js/26a7445e.0371fb1b.js"},{"revision":"55c3b55a5b9a3e359bb9b568664b6b69","url":"assets/js/27c00b57.023346af.js"},{"revision":"596a84ce61a770c08bb06418d92ed970","url":"assets/js/28128c6b.fa025e74.js"},{"revision":"30e0cb2a33f31b1bd5f125ca15c39050","url":"assets/js/2904009a.d13ed6f9.js"},{"revision":"15761ef01177fdb82268be43774cddf3","url":"assets/js/29302d38.e87ffd12.js"},{"revision":"1f0c7af7eee2babf02126499bb991d15","url":"assets/js/2bb2992c.0d98f306.js"},{"revision":"42a28418bef5aa11255c680afd30dbd1","url":"assets/js/2c8d3b24.66621f4c.js"},{"revision":"782d24145274c3eec4d94e3b44298d78","url":"assets/js/2c998346.0c89ab74.js"},{"revision":"1116efeaaf6e509f69d48da05025594f","url":"assets/js/2d9148c6.653280ba.js"},{"revision":"1ff420b38a5e7404a2c2af9a4d583b5d","url":"assets/js/2dbb449f.3d75133f.js"},{"revision":"e9c1d347425c70a5038981e8ef47431e","url":"assets/js/2de37846.cdc5fbb3.js"},{"revision":"d6166687d0e86f9b202de57ccc6386a3","url":"assets/js/2f2a08db.7d25f81c.js"},{"revision":"a68520505f6bf0b5a6b161acc3f345fb","url":"assets/js/2ff8693a.532618e7.js"},{"revision":"6fe0614dd5cdd65f8246b5968c157e4d","url":"assets/js/3217a33c.62d0ea9d.js"},{"revision":"6336edbfba25ddf0b9e390d750bb0dde","url":"assets/js/321b43f8.6f514155.js"},{"revision":"b5991d64782a3d6433151a11c8a02278","url":"assets/js/3335a228.d6adff0d.js"},{"revision":"35af505a2be8a400f60f944d916ae924","url":"assets/js/33e3dcc4.e1838510.js"},{"revision":"bb5a0bb150e464ca6c27deaf7ced5e83","url":"assets/js/342bcb03.a9475e63.js"},{"revision":"39e8a79cba7fd1ec4c4f96f1b6aa32af","url":"assets/js/344d8f4d.699c59f9.js"},{"revision":"ae690d1b911b9c7f674ca2e885861b09","url":"assets/js/346869d6.273cc677.js"},{"revision":"f117a8f14224fc54ae17e6d9b7dc1ee1","url":"assets/js/35b3c1bd.4addf68e.js"},{"revision":"1c062dbb9001936f41771da01bbdac91","url":"assets/js/3720c009.9a58b73e.js"},{"revision":"59629b8b25d5220b66fb5ca5daa11bb9","url":"assets/js/37d5ac0c.7a14ea44.js"},{"revision":"c20cbfa29dae27e9676a0abd233186c4","url":"assets/js/392e3820.b239c1db.js"},{"revision":"856fcc1969adf7a5997f734ba9eceabf","url":"assets/js/393be207.d7bb5ebf.js"},{"revision":"d7bcb2031658d37a51acba408401fff1","url":"assets/js/3ba35f78.2460b629.js"},{"revision":"b9f67f1a588615770c98079dd8468064","url":"assets/js/3ca8bcdc.15ffb464.js"},{"revision":"34a8cf07b1ea92f83a61794ac35839b7","url":"assets/js/3e2f9e3e.d340bca1.js"},{"revision":"7edbe5bd9a5ba2fd265eefdd8d13d8f4","url":"assets/js/406a9e18.9d5d516c.js"},{"revision":"165e73afb03ea95fde57714eddff849d","url":"assets/js/40ec3908.0da310be.js"},{"revision":"24866ee0f77b5b63815fe13203094efc","url":"assets/js/42627244.b15de04c.js"},{"revision":"b368b67da32fb15c336f986e958cd2a5","url":"assets/js/43193a5e.7ad313cc.js"},{"revision":"9fdff1a383f9ac5af34f6625b012ccc1","url":"assets/js/4390fd0e.4afbb51d.js"},{"revision":"0ef8d6ab6532e0b6b43244ae1bc0505a","url":"assets/js/4442626c.baca06dd.js"},{"revision":"9a7f967ac6e5c3e238c6e2827f23f2a2","url":"assets/js/4563d7a3.74fb1b3e.js"},{"revision":"42b81662378200fa6dd4ed04f5f0ea86","url":"assets/js/46213b0a.3ef33ab8.js"},{"revision":"4574c72bf6b1bbee459ddf61a45de566","url":"assets/js/47f44979.50de17fc.js"},{"revision":"f30ce920187f1580532a899fa8bd9c8e","url":"assets/js/48bdea80.3d8ccc4d.js"},{"revision":"618cd40e720567e6b837ce8145c7e2d9","url":"assets/js/4972.6f1a8649.js"},{"revision":"2ef30fd95d9a4b4c84b04b1fde11defd","url":"assets/js/49fab347.e0aa731b.js"},{"revision":"18d799b72df95d80f41d54e2fcb5bfe0","url":"assets/js/4b5fa008.5acab1cb.js"},{"revision":"edb5cbb7effcd4174918faea3d46548a","url":"assets/js/4baa3015.2c872ac8.js"},{"revision":"d525b0a536d8d7ec0460110577f3b0a7","url":"assets/js/4c774b6f.e0049aa6.js"},{"revision":"40c2ff359019ccdd5c320531f23f06b5","url":"assets/js/4cfb7e47.785c82cf.js"},{"revision":"b2d2091138c06769d06d735a9bdb1dcb","url":"assets/js/4d2a680f.75e46a1f.js"},{"revision":"faf16ad92ac75a857ed9cdb71acd1a2a","url":"assets/js/4d375250.1ddda2dc.js"},{"revision":"eba4d88528cc6319a0480f349ae91954","url":"assets/js/4e407b53.725f596a.js"},{"revision":"7a07cc0e3f20f262a186cb447f1ac399","url":"assets/js/4ec3603d.2548349f.js"},{"revision":"fe1df268ea681f84876a7c83f2290f93","url":"assets/js/4f891691.33ef44a4.js"},{"revision":"8ddb3ea89611b0392547755aaf734711","url":"assets/js/507f3fe0.0906d6b2.js"},{"revision":"60194e6fe3eeeced59ee893f78902a1c","url":"assets/js/5131.8d61f625.js"},{"revision":"d00f16e77cb6547d6a058eb99e7bd91a","url":"assets/js/5283.9333f6f7.js"},{"revision":"c166119452e66ba01603a51e40265a04","url":"assets/js/52e89a95.523abf1d.js"},{"revision":"4b2f12d79ec1c4e535efb87a707be9c4","url":"assets/js/5394e55f.09aa7258.js"},{"revision":"81bcc5df9ac1d3f408d1029b75522eec","url":"assets/js/5509d17d.14612e39.js"},{"revision":"2eb0d33ea72823fef3563c4fe992c442","url":"assets/js/557afe6f.24c989e8.js"},{"revision":"21fab6df6f7340ee518593dc88f0c4a6","url":"assets/js/55960ee5.77b67204.js"},{"revision":"31fc69bf3ae02c91c8597f06c88bd811","url":"assets/js/5648f487.a0cf1a74.js"},{"revision":"4b391a46b364dbc3adc6ab61444dbd33","url":"assets/js/565fb46c.ab8dfc00.js"},{"revision":"899fb8bb37b09d21a00187b3fec6e595","url":"assets/js/570f2759.26dbc816.js"},{"revision":"d4cc72ad099982bffa766c491d14793c","url":"assets/js/576fb8c2.c7fd3bf7.js"},{"revision":"0ff541b7e5372a5ca72e585f864ecf05","url":"assets/js/577e97cf.13972bf5.js"},{"revision":"7f199a7310d737b1fe19a11a95d88341","url":"assets/js/57999824.9269dc9f.js"},{"revision":"7fb7f856bd44d202c86750057e2af728","url":"assets/js/586ca00f.af860d63.js"},{"revision":"a5b5e8c9a5546812d0d63357bf0f88a0","url":"assets/js/59362658.ab949871.js"},{"revision":"f5166e3c09673d9f729fcd291be7c7e3","url":"assets/js/59b274af.22a7a26d.js"},{"revision":"54dc3434018c1d07805e840772ad45dd","url":"assets/js/5a37b08a.5133a6e2.js"},{"revision":"19ed5c6f3827c50025f4cd650ae45c5e","url":"assets/js/5a4f2c46.5543bdbf.js"},{"revision":"2378f7d9abc4f4a51fe951f921948bd3","url":"assets/js/5a90aabd.89dbe35e.js"},{"revision":"7232b1c06ed001c8bf274461a532e449","url":"assets/js/5ad47f1d.d4f2c518.js"},{"revision":"0cccef405632bf6ba30b2b9df23da69c","url":"assets/js/5c4c349c.0fefcd89.js"},{"revision":"13a42f3774f78f600c67ecd476d4acab","url":"assets/js/5c8df9a5.6c3119d6.js"},{"revision":"fae6e04dff49ed0ca73ecee96685790b","url":"assets/js/5e0b8343.9c79384e.js"},{"revision":"f5eb2159fd2c9f8c38384e5f369d2144","url":"assets/js/5e7fe18c.1afb8c41.js"},{"revision":"d607e499032148037ee61095257d9133","url":"assets/js/60a85657.9a13ee39.js"},{"revision":"3f0a1e620157f36f0427cfed03db2528","url":"assets/js/62b00816.1b4bbfbd.js"},{"revision":"a0a4baeef2f9c2cf7f83f3d3e3cb6bcb","url":"assets/js/62e9d001.b89aae20.js"},{"revision":"25b06353c008d4ce04c36bc432c7f288","url":"assets/js/64c7d5a4.093e9825.js"},{"revision":"531715d223651ac02c65223b1814eefb","url":"assets/js/6780.69f0575e.js"},{"revision":"2d1c69e86afba1cc36d2d3f5d7173172","url":"assets/js/67811993.14905bd3.js"},{"revision":"5361311508f3f3f01dacf6adf96fdbb0","url":"assets/js/67c31312.0743a08d.js"},{"revision":"f6cb2ace48ac2a5f7ab233d31e0f8f58","url":"assets/js/6871e07f.b7215854.js"},{"revision":"5734cd6761ca6cc15123e7d5ae6d9114","url":"assets/js/6875c492.eec57c09.js"},{"revision":"46fab35e77ea81e9f839ebdd3539717d","url":"assets/js/689bf8c1.e2a2c9bf.js"},{"revision":"f30c8961e90e621d4e9202f724d3dac7","url":"assets/js/6945.94f4a660.js"},{"revision":"86c009be058a366ea17ce099a273ce8d","url":"assets/js/699bbc74.ecfdc961.js"},{"revision":"3a603b905d9ef24840aa89b233ca4fc0","url":"assets/js/6aedb1d1.ffbe0120.js"},{"revision":"513b251fc5c14023517993cb0ff4ca1b","url":"assets/js/6b656ee7.1551630b.js"},{"revision":"871856e389f3a0562ef8a6d114bdb715","url":"assets/js/6d0be7b8.ac37d15d.js"},{"revision":"edc6f8c05572f98e0d2db7d2b7ab725e","url":"assets/js/6e8da2b9.11ffe9e5.js"},{"revision":"d628ab0d4c7a8e6e3b01fa136d454527","url":"assets/js/6e9d0949.451f36d0.js"},{"revision":"e82b7526f440c7fc04a48f5c6faf13d1","url":"assets/js/6eeef2b7.b64c4281.js"},{"revision":"b0fdf7ca7f1a60de056fbe9169d766de","url":"assets/js/6fb54c5f.6e8801dc.js"},{"revision":"8af4517d5886d0aebdb5daeeb60f49f3","url":"assets/js/718b953c.0733ad19.js"},{"revision":"b1e65ac3bd0bff75703d692fd39b2435","url":"assets/js/720fd98f.49f53cd5.js"},{"revision":"caa39202c309b1875548d0958db1a222","url":"assets/js/73664a40.ed354705.js"},{"revision":"438d7873a2ac900b50d198f22eeca8a2","url":"assets/js/7394a999.20282ce9.js"},{"revision":"904444839739ff1e931b647828839698","url":"assets/js/739735e6.9db9e119.js"},{"revision":"d36e5420056b4c18a3680775b0254c58","url":"assets/js/74ff212b.9a6a224b.js"},{"revision":"3d1de5c0a26919e0a7c96416ccf234b7","url":"assets/js/75b74b81.7615d474.js"},{"revision":"78cb70f7e4dd9c1355e66acafc7b068c","url":"assets/js/761bc709.f6296d07.js"},{"revision":"2e11abbaa6653d7c098506061c51bf25","url":"assets/js/763bbd3f.8434f89c.js"},{"revision":"221033538bef030efffbefe21633a27d","url":"assets/js/7661071f.5cf713ab.js"},{"revision":"b2722e87847d424bc94e4aff1b4de843","url":"assets/js/76af27fe.59db161f.js"},{"revision":"7aa0e423eb2685610d18f1e17ab506cd","url":"assets/js/78c63c4e.501556ad.js"},{"revision":"8e4d2b8a43fe411d935272b2bd18af05","url":"assets/js/78dbed97.8a0cd333.js"},{"revision":"df23e1e13ce0ba2f88748163555c607b","url":"assets/js/794206e0.d5d70a76.js"},{"revision":"444077e3211cff6a26f62ae9482a5ed6","url":"assets/js/7adbed28.c08b28eb.js"},{"revision":"30fc9bae8496b5aa34e64902cb6f3f99","url":"assets/js/7f0f833c.fcbcda37.js"},{"revision":"5efb90634d7e5ac0c5278d75336f7fc0","url":"assets/js/80a5671f.b7995c68.js"},{"revision":"0055752d04ad5bf8f3a1f972959fadbe","url":"assets/js/814f3328.165b9291.js"},{"revision":"14a6a4b2e2f60d429b2633da5918080d","url":"assets/js/8222f10b.7468e3fe.js"},{"revision":"75b94f82d77d2d55fd8c3e42d9188a5d","url":"assets/js/84f608b8.066f32d4.js"},{"revision":"b8aba37618e494b54c3952416ba794dd","url":"assets/js/8549a19e.c8e25695.js"},{"revision":"8c9e8eb92e346506688abc6f1fad13d9","url":"assets/js/860f6947.c77dc3d7.js"},{"revision":"74160cae53f2e6f4624da6abbd4738a7","url":"assets/js/86ba3757.31e04e6f.js"},{"revision":"9c7410cbc8d2aa0a96c68bb336493f4d","url":"assets/js/8717b14a.bc14cbab.js"},{"revision":"64130e0129d28372af211e970cb6b2be","url":"assets/js/8894.91734414.js"},{"revision":"fca322bbd073638d8dd451d40a7eea18","url":"assets/js/8a4cc359.252a6ac3.js"},{"revision":"abb62701e48ff30401abf93dc026700b","url":"assets/js/8b2f7091.aa335c17.js"},{"revision":"ac56d5c866421f4cda92a8b39cacc762","url":"assets/js/8b647e8e.5881ea45.js"},{"revision":"76a644d812b33abc273c1c8477266859","url":"assets/js/8d2050e2.93b80c58.js"},{"revision":"471655dbd50c407d0eac11a329d847df","url":"assets/js/8f42b0e0.ea36a19b.js"},{"revision":"1d9c83a5cd5b4bad396c6a3d7159a08d","url":"assets/js/8fb86cc7.be7adb8f.js"},{"revision":"f6f5da6d75120711b10f7d255ca38acd","url":"assets/js/901a2fc8.259fda9e.js"},{"revision":"111a93899be0a35340752dc46a93661b","url":"assets/js/90280f56.55287d06.js"},{"revision":"5cf474a341f85b22383a779ddcee3c24","url":"assets/js/904b35ab.955fa4bf.js"},{"revision":"83ba89e150d7e336979608b2ee4052f9","url":"assets/js/90dacec1.b1488253.js"},{"revision":"b103b282ae526bfb38a32dcb03094746","url":"assets/js/910f2c86.edf6903c.js"},{"revision":"dad44f8dbdf2fb2a4551428211cf0dcd","url":"assets/js/9197d159.a06c4109.js"},{"revision":"f5a189912093cb0967d75b4009b8af5a","url":"assets/js/925b3f96.a7ee4186.js"},{"revision":"597faf4a0f549685e948abf844926f1e","url":"assets/js/93115c8b.96420a6b.js"},{"revision":"097f1eaf4c895e997b8408885a5c0a8e","url":"assets/js/935f2afb.c5f7323f.js"},{"revision":"2375167cb4262fd761313e597de68488","url":"assets/js/93aab6dc.0fd8ee55.js"},{"revision":"7389106d7e3c69172cdc5fd7062a30e6","url":"assets/js/941832c6.b463be2f.js"},{"revision":"2ef7bdf7611cf48943ca2a41de2efeb4","url":"assets/js/9441373b.6c0361de.js"},{"revision":"7cadbdc014ace4c646d37adf7ee1f7fe","url":"assets/js/952ad7e5.9a834ff0.js"},{"revision":"76f6f81452cf7a4dd03cb124a93b6f45","url":"assets/js/959e7875.c7ef9d35.js"},{"revision":"c14172be89d2404f86fdca49823b1cb5","url":"assets/js/95a394bd.7f7241ff.js"},{"revision":"c8e37cafe1c1ff76a79cd75557499762","url":"assets/js/96a0ce76.43cae038.js"},{"revision":"540488e1fc5af388ca900dd711681678","url":"assets/js/96b288b4.9ff818d8.js"},{"revision":"952f39b9f55103ea367788e912d221ae","url":"assets/js/96bb7efc.b13af861.js"},{"revision":"d1bdd723ef23d0c94fe54316bcdbf4a3","url":"assets/js/9730ac07.b1decc02.js"},{"revision":"7e2a6f50122dcbbdbdbb8d83f256ccdc","url":"assets/js/97438968.433c4df2.js"},{"revision":"07e6de7928ca633e1f748930e2538188","url":"assets/js/9747880a.09c35e93.js"},{"revision":"7d5ed28e2241b4538d84b481d904e330","url":"assets/js/98fc53a9.f3f7831e.js"},{"revision":"27cb26171e9ec4bc143bc1e9b0be522d","url":"assets/js/9a4b8789.6ff63940.js"},{"revision":"32a07d3403830b0415e62f9e54e4b6b8","url":"assets/js/9d4b240f.c399fcf4.js"},{"revision":"be91161fdda1c413b53125141f68d220","url":"assets/js/9e4087bc.dc541821.js"},{"revision":"35607e8add44eafdab03190bb478e30c","url":"assets/js/9e653338.09c5db2e.js"},{"revision":"ac614e8f967a1e4cd2704b83dc47fc38","url":"assets/js/a0061be5.72e37b80.js"},{"revision":"664648e1b0e3a2dde148274ad37fadf8","url":"assets/js/a319ce37.f3dc7d79.js"},{"revision":"e3f0341a0c86c866b624d4fffd7f04d5","url":"assets/js/a364cad1.a03f9963.js"},{"revision":"d12bfbc91ddf56914158c2ce8ff8eaa8","url":"assets/js/a4910d3a.c314c63d.js"},{"revision":"f510e3971f00c5dcbb32a60227988816","url":"assets/js/a4e0dc1e.f9658779.js"},{"revision":"eb222993eb2c061779af5b825c549ac5","url":"assets/js/a5f0f173.3c0b411e.js"},{"revision":"b036e0ba711f620342bf0294b9ff69a7","url":"assets/js/a6aa9e1f.366b1fd1.js"},{"revision":"93b27deff1a6c011904cf3feb0c435e7","url":"assets/js/a83c0055.07807297.js"},{"revision":"44b7979dec3fd7aac2435c9300146ec0","url":"assets/js/aa06cbc5.2e0b5df9.js"},{"revision":"18fd64069e94475f435fd4909546ae56","url":"assets/js/aae888ad.9dd41290.js"},{"revision":"037df83966e6e910e0a1ddd70aefd708","url":"assets/js/ac6f2286.c7377f63.js"},{"revision":"6224a3c82f9a3a1ad93878a802711fa5","url":"assets/js/ad8e7ccf.9b61b9b6.js"},{"revision":"2dcc8ccf074bdf9cbaaf4e1c8fe7eb1a","url":"assets/js/ae34eff1.5f9a383b.js"},{"revision":"dd60238a4c92cb27b69df42ce07fe060","url":"assets/js/b0f6e537.9036cdf4.js"},{"revision":"eeccfefa84b0f1298d5abbe45a1e5596","url":"assets/js/b443c0d3.04b8a2ca.js"},{"revision":"e4a59a65242fc8058a8b7da6caed2a21","url":"assets/js/b5918de7.f734cab4.js"},{"revision":"7f1859cb1694ce60e6431b6c2dc66221","url":"assets/js/b9293531.aeb192ee.js"},{"revision":"fc6e48de514361c7d034b2dca69c944b","url":"assets/js/b9e8a4ea.92c12c81.js"},{"revision":"20c281221eee43b58c2152c1aa880eb3","url":"assets/js/bc71e736.2829c1a0.js"},{"revision":"beec443f284ae15c1c021c805fa6369f","url":"assets/js/bcebc2dd.ebfb89f0.js"},{"revision":"37f6c5461faad35e79e874ed6b3f1702","url":"assets/js/be7175ef.6264be3f.js"},{"revision":"63184c2634295a326afbb78304e38635","url":"assets/js/be97ab6b.af3ce639.js"},{"revision":"727b90b0d96674ea5b5c2fa46161a20e","url":"assets/js/bfa5a40f.61560cef.js"},{"revision":"01b0ae76c75104136728bb4424582c55","url":"assets/js/bfaec730.c8ec2e69.js"},{"revision":"8050e13386a33bb9ccdb1523bbdb5134","url":"assets/js/bfb2c45f.8ea6fc62.js"},{"revision":"5ea1a47d8e7d4f9d1819527b9a3bac13","url":"assets/js/bfd35d72.dd939904.js"},{"revision":"fe0c7171f431b492dd169ce218a7c5d7","url":"assets/js/bfdb07b2.fb4d974e.js"},{"revision":"54edbb321d3798cd219d082e95dcef8d","url":"assets/js/c008718d.bc29146c.js"},{"revision":"c0e66843fd37a3cbba00e903f9cdcaf6","url":"assets/js/c26a2f16.a9b1bcff.js"},{"revision":"333f35f8d49f3aaa74ca0385dbafc765","url":"assets/js/c3c663cb.4314d1ab.js"},{"revision":"76ef63bf565464a46934ce88fe40b727","url":"assets/js/c432ecfc.d96d0420.js"},{"revision":"5a7e1bb8abee3535d8eab71f38801ab5","url":"assets/js/c4adf32a.b92a3888.js"},{"revision":"68c85de2c438bdbaf85df5e1b88413ff","url":"assets/js/c4fd5735.e34cad33.js"},{"revision":"94cfbefaff2f157eeafbb5e9b72bf308","url":"assets/js/c62c7e0c.9ae4751e.js"},{"revision":"d069f3721eb3fd671b22df7ec23824ab","url":"assets/js/c7e95033.b102bb70.js"},{"revision":"779fe5b0f400dcba477d466df72c94e6","url":"assets/js/c8cde573.15f16e55.js"},{"revision":"294e269ff61428432e78069547be2a10","url":"assets/js/c95930b2.5fbc5e4c.js"},{"revision":"46ae5a82aa4e0fe42e922b84e147157b","url":"assets/js/c9e92949.67a7cbfc.js"},{"revision":"de71baf0a00eb7c2ab110115bb289ba7","url":"assets/js/caa4e761.6600118f.js"},{"revision":"e391d6710e2361d83772cf483d1512d4","url":"assets/js/ccc49370.8ec36f76.js"},{"revision":"2531839636813600b835d9db63bdb7c8","url":"assets/js/cd6b2e5a.6e5f3fdf.js"},{"revision":"bc2938b64faf1db1286b7eae8d11cc84","url":"assets/js/cd7be7ea.629d643e.js"},{"revision":"507dd906ff814c4445b71822982fc607","url":"assets/js/cd83b52f.7b37b86e.js"},{"revision":"724f7a3531dd0254a7c3aa063d8418e5","url":"assets/js/ceee7f3e.831d2903.js"},{"revision":"a8107628274fc1a94199133cc69cbb91","url":"assets/js/d0bd4a50.e67514ad.js"},{"revision":"532454e34baab8e8c989d31cb2ab86e6","url":"assets/js/d198be59.17b34ae1.js"},{"revision":"920b7e8548e99bb69924f7e030c6911f","url":"assets/js/d2be02f6.d1d80e7b.js"},{"revision":"b3bc34f9b76223c860ca41c26edcbb59","url":"assets/js/d385032c.d904cd66.js"},{"revision":"c4ee038c6d81041415d8afa390830ed5","url":"assets/js/d60d2078.418a1318.js"},{"revision":"45f1f824f956d920a830dd9c74b0c918","url":"assets/js/d805fb17.b2899be4.js"},{"revision":"e224d9cf710b2228906d9cd03607e624","url":"assets/js/d80e83a7.fe1e02e3.js"},{"revision":"d284777fedd4a2b160ca8034b73f969a","url":"assets/js/d852c3f6.c9c738f5.js"},{"revision":"9c3014c77748f3903a1aeaa0d6831506","url":"assets/js/d9f32620.fe2a2713.js"},{"revision":"9983450ad97e9bcbc6d042621b3b52f5","url":"assets/js/da694bf0.c7f6f23b.js"},{"revision":"136a8ef80e772ee8d0ededb9f9637517","url":"assets/js/dbb851cc.b0219588.js"},{"revision":"58111d79394b9618e405a049b9d7c7b8","url":"assets/js/dbbed665.922a9f42.js"},{"revision":"9a236c651c7ff9015437eddb566cd4c7","url":"assets/js/dd0f7a99.35d10ecd.js"},{"revision":"cb0dd51e0de29628e04a6bf2dac550c4","url":"assets/js/dd4d6576.a8b7406e.js"},{"revision":"a576425960b2f878b3301fc32e2c335f","url":"assets/js/ddb1113f.fb8bb238.js"},{"revision":"05a0dcbce40a26ee41bead67b50f3131","url":"assets/js/de442936.dddb0ba5.js"},{"revision":"e196450985d2b9e5e1eaae48304df025","url":"assets/js/deb574bd.aa6da13d.js"},{"revision":"f2e256f344c99dca801e03e8022f5d02","url":"assets/js/df203c0f.e4f37724.js"},{"revision":"4dc1378dde36535076f6f514ac5b882c","url":"assets/js/df9d58d7.21c60a3f.js"},{"revision":"c4a913d39f58e5719dad36e6f4bfc559","url":"assets/js/e01d27f8.8ef5b6b6.js"},{"revision":"bea9c2fbec9e9331b3cd029c53140428","url":"assets/js/e212cd55.bea1ecd9.js"},{"revision":"c1f64129db132484137e68a823c8ee01","url":"assets/js/e221ca32.cfe96932.js"},{"revision":"4a6b93d3d11cebb039022413457dad12","url":"assets/js/e273c56f.c8f84e62.js"},{"revision":"3d9cf90e352c2d5890d5afa8b21775bd","url":"assets/js/e274bb98.fa8988db.js"},{"revision":"397befa245ef79416248f8a6a2c4a25b","url":"assets/js/e4455dc0.db47c1e1.js"},{"revision":"bea89859d3e51e240ee2838023ca2d86","url":"assets/js/e4b9243e.cf1fe6af.js"},{"revision":"7653c84804552820331d032f92c1a080","url":"assets/js/e52d8f61.63751f8e.js"},{"revision":"cbf175b4c0dca613b94313091a90023f","url":"assets/js/e5c87e16.5212d375.js"},{"revision":"239fc3f250ad8dc2f01ab2987b70e30e","url":"assets/js/e6c12416.f9d57e06.js"},{"revision":"c620e387d88650d68c1a7abec27dbcad","url":"assets/js/e901c80f.883a56f6.js"},{"revision":"426f16289e84c39e6f3861ec037314c6","url":"assets/js/e92a6b90.10739a8c.js"},{"revision":"4079e7d82b53f9bccd0978f8edf218af","url":"assets/js/e9394cf6.2f24e2a3.js"},{"revision":"a950f553e0f5e58bb3c7ebd48347bda6","url":"assets/js/e9549acf.dfd1898d.js"},{"revision":"99de534b3e469f915d474a123f7a495e","url":"assets/js/e9fe7d72.35b99865.js"},{"revision":"f189d5cfa05ea6b9496bdaafe224d810","url":"assets/js/ea29030b.cd502962.js"},{"revision":"a9da40db19b5c62dfd3148e065133bbe","url":"assets/js/eabb74e4.2c0dfcc0.js"},{"revision":"9165db0c38e54306744152fbea3e9337","url":"assets/js/ec9fcab8.7cd70346.js"},{"revision":"4765311c57c6be8d7fbc81a05db85bd4","url":"assets/js/eccfd7c9.8c590c4d.js"},{"revision":"0af8ad3cccce1e8200bd6495cc4098a0","url":"assets/js/ecf03ebb.1c00fa6f.js"},{"revision":"3c40ffc7905c78d69ca8266df385e7ec","url":"assets/js/ee879e18.86feb4a1.js"},{"revision":"870af4638c4fc3736be8c5861abe80ec","url":"assets/js/eeabf334.b467afa7.js"},{"revision":"0797d69f4fd2e6dea39669b67b0671b7","url":"assets/js/ef86a560.38a6312d.js"},{"revision":"1250ab34fa1fe777f4cb909319340961","url":"assets/js/ef91bdd5.9b4a05c7.js"},{"revision":"60e8e60a0aa318501bfbac6d010aae3d","url":"assets/js/ef96047b.78389d45.js"},{"revision":"150de57a0ede2a7b21dca0e3f3594993","url":"assets/js/efc78770.7f76cd65.js"},{"revision":"761172fd8d7ad7b7e2c4ebcb79ee0e3e","url":"assets/js/efd2f8ac.19420f49.js"},{"revision":"d58d353424df44569d84d42ffb72b4c6","url":"assets/js/f044737d.c100ebcd.js"},{"revision":"c4ef5f201cdd8789a47f9578728d42bf","url":"assets/js/f0766123.e744a796.js"},{"revision":"8b4ee365ea948fcba4892e7c98b4a565","url":"assets/js/f35e5616.c1430981.js"},{"revision":"32c8143993649490d49a515ffa6485ad","url":"assets/js/f3ac5f45.b84f951d.js"},{"revision":"aef577a11dff05a6f999793cb14961ad","url":"assets/js/f4ef6418.59d2d6bc.js"},{"revision":"fa70945ac811bffe6aeb2f8ad3051af9","url":"assets/js/f4f34a3a.b378a313.js"},{"revision":"77920be4d6789b934eab10e5ecb75b0c","url":"assets/js/f61c784c.e7f02b34.js"},{"revision":"8a1866ab57c94900d4d9df96701dbd48","url":"assets/js/f76db7cf.ab2ee7a9.js"},{"revision":"6bfa933b77e8665d65a8f1c769ac26d7","url":"assets/js/f7db2a0d.91076fc0.js"},{"revision":"8f17e9250d1b143efa32f171b89efb10","url":"assets/js/f7e00a96.1f468ebd.js"},{"revision":"693dc59a4b854a4ab2acbc0123fcf424","url":"assets/js/f8a5f1b6.fa4e4bc6.js"},{"revision":"991da28997712b5e0153fda989c4a870","url":"assets/js/f984ecb6.45a2b870.js"},{"revision":"e693e6ce6a29391e6b358248c86e2cf2","url":"assets/js/fa36dafe.abf79183.js"},{"revision":"bf5beccf7f4b6dfa56905c11ac95904a","url":"assets/js/fa85a088.ad99863d.js"},{"revision":"324e5db0f7a13818d77833142fc76f29","url":"assets/js/fbccd0e7.e88f4e7a.js"},{"revision":"1b8bb020fba6bfdb90c706625e24cbbc","url":"assets/js/fbd61b7a.b299cde5.js"},{"revision":"1340f41fad9f565acdde02a2faea01ea","url":"assets/js/fc68635f.34e52874.js"},{"revision":"f4a9bf66fb3e021567028ed26233c46b","url":"assets/js/fc938491.38279058.js"},{"revision":"4090d43bd22074845299905c3ae2a2a4","url":"assets/js/fd7554b9.28b4a112.js"},{"revision":"136aa2ea9b43df7a8ebead663e322f89","url":"assets/js/fef7f73c.aff4e847.js"},{"revision":"f413f6ae905052e03b5246306ce93303","url":"assets/js/main.5214ea59.js"},{"revision":"08405b5a841d98a4d0e269295a18d304","url":"assets/js/runtime~main.53668c86.js"},{"revision":"173685bd6dda3df4ac3673034d606043","url":"blog/archive/index.html"},{"revision":"91b3c6229c46c9040953a59fd6f48288","url":"blog/first-blog-post/index.html"},{"revision":"7de2a626e58f05ac01201f7490bdc62b","url":"blog/index.html"},{"revision":"071b9a9db1595a25af31ff36e8736afd","url":"blog/long-blog-post/index.html"},{"revision":"3efa5a7d1c8b0eaf5703f9a80c52d62d","url":"blog/mdx-blog-post/index.html"},{"revision":"65d8cf4790ec1704eb09f3b80644630d","url":"blog/tags/docusaurus/index.html"},{"revision":"be1b85567ee0632e5116c59cfe6f97ae","url":"blog/tags/facebook/index.html"},{"revision":"99877e9cb6942eb4c99354ae1ddca32c","url":"blog/tags/hello/index.html"},{"revision":"387d35efc82550caa20870bfb9ee4d82","url":"blog/tags/hola/index.html"},{"revision":"f2b1ac406d9da2d1d4ca6fa38f25c1d3","url":"blog/tags/index.html"},{"revision":"4b31db92008a946907cfff91b83330b3","url":"blog/welcome/index.html"},{"revision":"da13ea66ac13f4d72b2b90612c02ff2c","url":"Cloud_Chain/SenseCAP_Cloud/wiki/index.html"},{"revision":"792b1a9f4a9b42c83a80dd003b893169","url":"Cloud_Chain/SenseCAP_M4/wiki/index.html"},{"revision":"37ef401baa0bafcc76a0f2ef88db59e8","url":"CloudnChain/index.html"},{"revision":"125c0f895d07dc555a250d1f568fcf51","url":"Edge_Computing/index.html"},{"revision":"27c9e3471ed7271237881068c1a45282","url":"Edge/Beagle_Bone/BeagleBone_Blue/index.html"},{"revision":"2cdd8571aa58e2f7285bed293ecc7a3b","url":"Edge/Beagle_Bone/Beaglebone_Case/index.html"},{"revision":"5e9135eae830ae84072d7f69bc074725","url":"Edge/Beagle_Bone/BeagleBone_Green_HDMI_Cape/index.html"},{"revision":"8d187b1b34477be7d89639417b186300","url":"Edge/Beagle_Bone/BeagleBone_Green_Wireless/index.html"},{"revision":"bbbde166cc053044e50811d298d92ef7","url":"Edge/Beagle_Bone/BeagleBone_Green/index.html"},{"revision":"7d01255132d588e9ef71f39fb285b4b6","url":"Edge/Beagle_Bone/BeagleBone_Solutions/index.html"},{"revision":"5ff20ee0fa81a1c66b10e34e45dfd063","url":"Edge/Beagle_Bone/BeagleBone-Green-Gateway/index.html"},{"revision":"558c0d790183131be970c1fea102d035","url":"Edge/Beagle_Bone/BeagleBone/index.html"},{"revision":"3a0621e50e6afcb367164b72fcaec2f8","url":"Edge/Beagle_Bone/Grove_Cape_for_BeagleBone_Series/index.html"},{"revision":"fcff2e54f9e938672581082458dc54a4","url":"Edge/Beagle_Bone/Motor_Bridge_Cape_v1.0/index.html"},{"revision":"698bee49c8452f24c54141e462a0e1c0","url":"Edge/Beagle_Bone/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch/index.html"},{"revision":"b1240253602ee7c4fb32afd5951f193b","url":"Edge/Beagle_Bone/Skeleton_box_for_Beaglebone/index.html"},{"revision":"9a32a20cf65cba8c10b86f4c84e807af","url":"Edge/Edge_Series/wiki/index.html"},{"revision":"c62ad45173cd63858ba134a84465adf9","url":"Edge/ODYSSEY/ODYSSEY_Getting_Started/index.html"},{"revision":"72babd75de20620fbb140f6d89bd9d7b","url":"Edge/ODYSSEY/ODYSSEY_STM32MP157C/ODYSSEY-STM32MP157C/index.html"},{"revision":"b621bde14af8327ed7dc4eb71a3e7b26","url":"Edge/ODYSSEY/ODYSSEY_STM32MP157C/SEEED-SOM-STM32MP157C/index.html"},{"revision":"6e29187c6725cd1d25726fffbfc9b556","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105/index.html"},{"revision":"f5ad618ae372a609daba0cb98b2bb21d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Connect-Grove-to-Home-Assistant-ESPHome/index.html"},{"revision":"f4c9404d25d86fb416f88155271c6a76","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Home-Assistant-Customize/index.html"},{"revision":"b4811232ad9da7824e48af93972e8bf9","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/ODYSSEY-X86-Home-Assistant/index.html"},{"revision":"8255c234650527c5a14677d5bd663c16","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Jellyfin-on-Docker-Ubuntu-X86/index.html"},{"revision":"ac8fd0f8b11294f8fc69fb0b516c6b7f","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-OPNsense/index.html"},{"revision":"2613ae4d3bf43b4d1ac10865a803dea0","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-TrueNAS/index.html"},{"revision":"fe0b1a08f5145fd69726e2d443a036cf","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories/index.html"},{"revision":"c44060a0077a61591a9772213a326dd7","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT/index.html"},{"revision":"4ae22879e41a2d19a94552ed2aba906d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-GPIO/index.html"},{"revision":"cc776d72c3306d89526259699b73dff1","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-Android/index.html"},{"revision":"21a66965219ece490125260aa480d152","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-FreeNAS/index.html"},{"revision":"6578721a72819340ff9dddefe9f39c6d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-openwrt/index.html"},{"revision":"1b25f25938d2173e8a9eb9dc2db786d0","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-OS/index.html"},{"revision":"5fff2aa885e7529317d56ec16df5ae5a","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Intel-OpenVINO/index.html"},{"revision":"04e0406a2b3c406e5515ef3b77597d28","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module/index.html"},{"revision":"b61e88ab59bf4dfe65ccf154c4d62110","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-NCS2/index.html"},{"revision":"1cc558c8a9fd1c28b5325638d913a2b5","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-pfSense/index.html"},{"revision":"9a06f2eee0a9e26780674a258c04c60b","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Updating-Firmware/index.html"},{"revision":"887f934bee01c8ae00c4de291af1ed8c","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105/index.html"},{"revision":"c813db05784dcb9b7a986ba151756e67","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Projects/ODYSSEY-X86J4105-Frigate/index.html"},{"revision":"7571e904926dba31bd5cb48eb77a9832","url":"Edge/Quantum_Development_Board/wiki/index.html"},{"revision":"bebf9cd64b197f6e4ab40d5ad1e09ee1","url":"Edge/reComputer/wiki/index.html"},{"revision":"351bdcbdca7caf6413ef60173ed0daec","url":"Edge/reServer/reServer_Getting_Started/index.html"},{"revision":"c7f0d670782836632d5a90f719cbb7b6","url":"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack/index.html"},{"revision":"f030ed73e24060b79034a1c7396eba10","url":"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Getting_Started/index.html"},{"revision":"4a7004e1a6a4e9ac6146c8924023b5bf","url":"Edge/reServer/reServer_X86/reServer-Getting-Started/index.html"},{"revision":"6cb060e703d62e874b33966c36ae7f84","url":"Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers/index.html"},{"revision":"79084a17d4fa8b2f6f1c3157c0bb6ba8","url":"Edge/reTerminal/Home_Assistant/reTerminal_Home_Assistant/index.html"},{"revision":"d0bc0552eddef2eb2901e8b67c03d545","url":"Edge/reTerminal/index.html"},{"revision":"83fb7c8d04e56dc5d5c46897ec4d0c1b","url":"Edge/reTerminal/reTerminal_Getting_Started/index.html"},{"revision":"5197e89597b74fd9965146d043e8c8c9","url":"Edge/reTerminal/reTerminal-FAQ/index.html"},{"revision":"f32b4042695705c6f4e19ac7c3a2e563","url":"feature/index.html"},{"revision":"4bba7d09559bfada949a047c990b251f","url":"Getting_Started/index.html"},{"revision":"b110d1ed1912a23c67752d1ed12b0308","url":"index.html"},{"revision":"4c2bd1ed057d305c7e12cd4f4ff876c9","url":"indexIAG/index.html"},{"revision":"f6b235baf350597fa88342570259b7cb","url":"License/index.html"},{"revision":"10a154bab8f37e407bffa1b2beb5c375","url":"markdown-page/index.html"},{"revision":"686790a30a2a44b9b231cc78e40fcbab","url":"Network/LinkStar/Linkstar_Datasheet/index.html"},{"revision":"a08bdf3a4afa5ce29ed9f0553b56eb1f","url":"Network/LinkStar/linkstar-install-system/index.html"},{"revision":"4bf1ec0e1f84cee4abd3c6b5ecc79a1a","url":"Network/reRouter/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/index.html"},{"revision":"ce10d9e145d5a21bdf5efb92a07f42cc","url":"Network/reRouter/Raspberry-OpenWrt-Getting-Started/index.html"},{"revision":"d298e4fcf665341aecf7e609560f779a","url":"Network/SenseCAP/wiki/index.html"},{"revision":"b137f66c893c820101fb5ff403f74ed6","url":"reComputer_Jetson_Series_Hardware_Layout/index.html"},{"revision":"d47d96c4de0e19ed15cfc7584b841c21","url":"search/index.html"},{"revision":"cb85fa117b5af0df8f16195bac998037","url":"Seeed_Elderly/Others_Product/index.html"},{"revision":"97b51092215f3f73baa3c4f71c80ae14","url":"SenseCAP_Gateway/1/index.html"},{"revision":"0012f4f0c1f73b81e87c955b28551183","url":"SenseCAP_Probe_Accessories/Liquid_level_sensor/index.html"},{"revision":"a0749dc6da3ece1ac1114ea12e91c348","url":"SenseCAP_The_Sensor_Prototype_Kit/Contents/index.html"},{"revision":"de369ae7bc2127578110d1b65a8c0c56","url":"SenseCAP/SenseCAP_Getting_Started/index.html"},{"revision":"f191a14efaf4149d1a33048209abb9f6","url":"SenseCAP/SenseCAP_Introdution/index.html"},{"revision":"abd60c5870b9cd446c2c67ef4194eed0","url":"SenseCAP/SenseCAP_LoRaWAN/index.html"},{"revision":"e91df4eea695895653ba630a43094df7","url":"Sensor_Network/index.html"},{"revision":"ad14b9c7f826ee3703ec3054334fd557","url":"Sensor/Arch/wiki/index.html"},{"revision":"3ba845f0d6c9010bcc6949577b6c201d","url":"Sensor/Azure_Sphere_MT3620_Development_Kit/wiki/index.html"},{"revision":"de81660eb1c867ac6fdb4a1299b2e06a","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-16-Channel_PWM_Driver-PCA9685/index.html"},{"revision":"e54cf074ab18cb685693ab15dfff341f","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_Solid_State_Relay/index.html"},{"revision":"a052ef86480a9e7d6c6618664acf93f3","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_SPDT_Relay/index.html"},{"revision":"344bbf35d54d6a0e53af79659f12246d","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_Solid_State_Relay/index.html"},{"revision":"65c95c043cd5f503683fca9739f6846b","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_SPDT_Relay/index.html"},{"revision":"eb8c9080a184505fbe289f730784a837","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-8-Channel_Solid_State_Relay/index.html"},{"revision":"4bc54befaed076354e869bf5740b0a4c","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-EL_Driver/index.html"},{"revision":"b513e7555a67fe05ec8e10a654b263a9","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor/index.html"},{"revision":"fc7e0395251e9c9bae89d7a8b45d9e25","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.3/index.html"},{"revision":"3a68e42df916d6e1d42f9aed0a6ee1c1","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG/index.html"},{"revision":"3492493847b8a0ce979607cd8434f7bd","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P/index.html"},{"revision":"356f93210a1f504afe0596d378421cd3","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter/index.html"},{"revision":"0b4ffad5f86d796f8eb19a14f48edc84","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0/index.html"},{"revision":"ab23ecfd07de40d25d264e0a7d911dca","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0/index.html"},{"revision":"608dd5f7b0aeb438c4bbf406fa89b699","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3-v3/index.html"},{"revision":"7b79d0a218c8206eaf4656eed2d83c5f","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Optocoupler_Relay-M281/index.html"},{"revision":"66f177f5f63b21ec2701813548efd1ee","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer/index.html"},{"revision":"16021a4474a8a6309251194e15b085c6","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0/index.html"},{"revision":"87aebe035321961dbb75e856b793490a","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player/index.html"},{"revision":"5d194c5b87d0b1c5eb0a5261d7f0eaa9","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Servo/index.html"},{"revision":"d0117f8df1cefac9eaa685acc7f541f3","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay_V2/index.html"},{"revision":"157542c7178229736ec921209269234e","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay/index.html"},{"revision":"0535b2cc5caa444452e1bd5da9c2b654","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker-Plus/index.html"},{"revision":"e64f10cb04ec78645dbeae17c993f794","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker/index.html"},{"revision":"f46bd21ccff18bb7527a85b25c3a3209","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Vibration_Motor/index.html"},{"revision":"c05d1a90ad6311b95e3b7082b2e1cc2b","url":"Sensor/Grove/Grove_Accessories/Current/Grove-10A_DC_Current_Sensor-ACS725/index.html"},{"revision":"a0873323e3212d4b83751558a593abc6","url":"Sensor/Grove/Grove_Accessories/Current/Grove-2.5A-DC-Current-Sensor-ACS70331/index.html"},{"revision":"74db6ecfc31f128a0a9ed1f1e5fcbdf6","url":"Sensor/Grove/Grove_Accessories/Current/Grove-5A_DC_AC_Current_Sensor-ACS70331/index.html"},{"revision":"8c12e95590a2f87f249fa9b6e817ed2a","url":"Sensor/Grove/Grove_Accessories/Current/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/index.html"},{"revision":"0ccdd33dcc7401801020ca56f3b7bf97","url":"Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor/index.html"},{"revision":"91255d8a6f79a0b4d803561a8bcd4de3","url":"Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET/index.html"},{"revision":"84611b42c8dd8425220bfe0514adccd6","url":"Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A/index.html"},{"revision":"9d3548c47afb058045d9129cef238011","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/index.html"},{"revision":"b7e08aeba336e8e6e00026342806fe0d","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C_Hub/index.html"},{"revision":"aeac6d0e60c8a25f23000563bc524af7","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C-Hub-6Port/index.html"},{"revision":"2defb7a46aaccd6ba510196c38762e4d","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Mini_Camera/index.html"},{"revision":"8cc0dc29df1528d9bfcec1de759ce7e7","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-PS_2_Adapter/index.html"},{"revision":"e7da5f0561c12841ca7003c1555b0111","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Qwiic-Hub/index.html"},{"revision":"59110f1786373b9d5773781acb425621","url":"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch/index.html"},{"revision":"3ebbe643f721e7f7e8eda147671a9649","url":"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Button/index.html"},{"revision":"d277dff309004aceceee98b3ea37aebe","url":"Sensor/Grove/Grove_Accessories/Time/Grove-RTC/index.html"},{"revision":"1fcf2d7ae26445dfc8d3a87f43a932ef","url":"Sensor/Grove/Grove_Sensors_Network/Communication/GPS-Modules-Selection-Guide/index.html"},{"revision":"614db8fc4ac448fbe502d056b3f651b3","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_High_Precision_RTC/index.html"},{"revision":"cc9178a46ce77d5c104fcbf90c471c82","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_LoRa_Radio/index.html"},{"revision":"c58fbd3a01900a198007429d285a6ebe","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC_Tag/index.html"},{"revision":"806b6ba2cb14a870f15bb43968dff508","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC/index.html"},{"revision":"7f271d30143dfc0b169839c628454bd1","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-125KHz_RFID_Reader/index.html"},{"revision":"26f8bb6d86b0fdd4996915faad5c2ec3","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-BLE_v1/index.html"},{"revision":"dd27e953a4bf5d44062ef9e535605641","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS-Air530/index.html"},{"revision":"575c1d84938e4638996a0182891a3e63","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS/index.html"},{"revision":"ef6f2b2dca441fb848c0d6ef40101f0e","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver_v1.1/index.html"},{"revision":"b0a7c52792c21ad148d6b335682265ef","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver/index.html"},{"revision":"a3e7c047aa8c7d2d40c91341541d9aa0","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Protoshield/index.html"},{"revision":"e4767192321a7e88e8ba5cae47b5712b","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-RJ45_Adapter/index.html"},{"revision":"7df1f2901ce31b7a2e3c40b3d62c1756","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Screw_Terminal/index.html"},{"revision":"91f0799ceee5cfb7bb6b4c45f30b68c2","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Serial_RF_Pro/index.html"},{"revision":"3bc18c40f53fd708049b61361c5fbf67","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi_V2/index.html"},{"revision":"38560f1a7afad5b10dea835e51356243","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi/index.html"},{"revision":"408ffe9734ae6b1af139c1795f8a40ca","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Sensor_communication/index.html"},{"revision":"a78e434fd77e2aba5989fa60a5450930","url":"Sensor/Grove/Grove_Sensors/All_in_one/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/index.html"},{"revision":"dd3d67886b6e8fc77e14b74a16beeb22","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Capacitive-Fingerprint-Sensor/index.html"},{"revision":"7905a7c9fb2cbfaeb4cbe890e8351d37","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor/index.html"},{"revision":"96bd2d65f7990f0e1e13c9dbbd03f927","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Ear-clip_Heart_Rate_Sensor/index.html"},{"revision":"0cad82a4ae2861f15f11913a39b22c2e","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/index.html"},{"revision":"0758e02bf60f3a55974075fd591e363a","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor/index.html"},{"revision":"e9a35a8c331c6271e9bd7ff53136d5d2","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor/index.html"},{"revision":"6fd9f07656057408734a45cd53985eec","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor/index.html"},{"revision":"f605303dc8da9b234d425b3888854131","url":"Sensor/Grove/Grove_Sensors/Biometric/Sensor_biomedicine/index.html"},{"revision":"8c3ab8558c5e7e99c0f3e47fdf86ec4e","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor/index.html"},{"revision":"f07f954e530250b86b2339e8a88d76a6","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor/index.html"},{"revision":"adc07f2d1854d296ecf37a55d1bfc917","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor/index.html"},{"revision":"4eca67fc264eee514afcf4f68a68a9f6","url":"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070/index.html"},{"revision":"84b1ad563ea35e8c4458e28569fd4812","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Receiver/index.html"},{"revision":"5a2b932dec0e4896efb49a4158082032","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Light_Sensor/index.html"},{"revision":"25636646c22ba99afe71aac446510ceb","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/index.html"},{"revision":"8bd61c1700814b7b82ae7ba10163843c","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder/index.html"},{"revision":"0797209a81733e3c62a366dc1d00aa88","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor/index.html"},{"revision":"c19154968c144b78cac4e49a4d86a2e2","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor/index.html"},{"revision":"9819f6505aa3f68150da4b36add28ad1","url":"Sensor/Grove/Grove_Sensors/Light/Grove-UV_Sensor/index.html"},{"revision":"0b9dfb1f780553c087b2528810f31829","url":"Sensor/Grove/Grove_Sensors/Light/Sensor_light/index.html"},{"revision":"7d62eec59dad2c60c13585719f4d699e","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-80cm_Infrared_Proximity_Sensor/index.html"},{"revision":"cffaf9792b18649130f34ee8e40f158c","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Adjustable_PIR_Motion_Sensor/index.html"},{"revision":"c58d335b91528b6df996c750f629b667","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/index.html"},{"revision":"988c9b45459671786cbf37c5aacf0306","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar/index.html"},{"revision":"1d87fef3b003d2c3b192cfca270bab4a","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Gesture_v1.0/index.html"},{"revision":"7ffa20ae4da35a4fdcfd24307834b2d6","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2/index.html"},{"revision":"74f77ef6b6718e3c495a6df689ce609a","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-TF_Mini_LiDAR/index.html"},{"revision":"9c107ce66533536bbd70cd49c0ca04f5","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/index.html"},{"revision":"d1ade1b01a5154c96f4ffb86d1dcb935","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Ranger/index.html"},{"revision":"856b8a14eab3e29a124ececbfa3c5f31","url":"Sensor/Grove/Grove_Sensors/Proximity/Sensor_distance/index.html"},{"revision":"a257e54ce877a46b2a219a32ba43e182","url":"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant/index.html"},{"revision":"d9d306a4c1842429ba4f6ed19fd8c46f","url":"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor/index.html"},{"revision":"b167c0462c4d4da3d03def92843899a1","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone/index.html"},{"revision":"5f5da4fa29b9ffed079742fed06df5b7","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor/index.html"},{"revision":"01fc3f3d7b5e833dd991e240aaa756ae","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder/index.html"},{"revision":"0656db36369b302fcc8ae9318eb4b1d8","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor/index.html"},{"revision":"26b6a31934c95c61b986b4ecb593a04d","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer/index.html"},{"revision":"8b6db35d725cb3a56c6b86d5bfb6ef48","url":"Sensor/Grove/Grove_Sensors/Sound/Sensor_sound/index.html"},{"revision":"e4348fe9285397ca8224e439b7d7ce69","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/index.html"},{"revision":"e79203e7fabde00e47ed7338bc8111c0","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2_Temperature_Humidity_Sensor-SCD30/index.html"},{"revision":"ad417a970b5bf8c5745103cb8700f175","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2&Temperature&HumiditySensor-SCD41/index.html"},{"revision":"93b01cb9f92f5c316f94de70694ad547","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-I2C_High_Accuracy_Temp&Humi_Sensor-SHT35/index.html"},{"revision":"7238bb7d476022a87fe4c815203d83c5","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x/index.html"},{"revision":"47aa5f07e3f44503c9246757df65d083","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31/index.html"},{"revision":"65dbe85ca33966ae5851193e7586f7a9","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature_and_Humidity_Sensor_Pro/index.html"},{"revision":"eba914feee1b54f6145df2c8d7e2ea06","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20/index.html"},{"revision":"d4f7acd6b7c1c0de603e2d433c460485","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000/index.html"},{"revision":"e0c77f113e763a09b1530605c6698260","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor/index.html"},{"revision":"ab494bf10229a9c9548ddc34e0fcfe5c","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/index.html"},{"revision":"1e433ee8ff32c74cd5be56339dfa27d0","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K/index.html"},{"revision":"24bf5709c4fd7f850b6f44fcaba63e18","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor/index.html"},{"revision":"d425919b2715bc28e6f6feb9c5472bb5","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor/index.html"},{"revision":"b0877e5f6f559642e30943dc2d3609ae","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/index.html"},{"revision":"835d56f1418eda9850e490711ced7a7d","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600/index.html"},{"revision":"bc55f60600d845b7bbc368c1421301bd","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833/index.html"},{"revision":"3591e45ffa575d42dc334227385f1678","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor/index.html"},{"revision":"6843a5e9e23517715f7dddf5244b3b90","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2/index.html"},{"revision":"e34d2b11680441c8b3a9d4c3f0f4852e","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Thermal-Imaging-Camera-IR-Array/index.html"},{"revision":"ee7ac6b2c70beacfd9cf8afa7ad28273","url":"Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20/index.html"},{"revision":"b78a869f6ed0e3378d4e5b9ac7fe704b","url":"Sensor/IOT_Button_For_AWS/wiki/index.html"},{"revision":"6e5fc9e0bade1e2a03d15d4318ecea67","url":"Sensor/mmWave_radar_sensor/wiki/index.html"},{"revision":"048ac385d356a43c6f18b2f73e7ea96d","url":"Sensor/Pi_Pico/wiki/index.html"},{"revision":"61980f549602ba2d5e500bb05b57e583","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started/index.html"},{"revision":"7db5f5c574bbe7109060d3b7718d432c","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840/Application/XIAOEI/index.html"},{"revision":"6837636aa8ccb9af871cbb8d02ac7f02","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840/XIAOEI/index.html"},{"revision":"d08a8397c9fd78ff2e20f12167d58e7b","url":"Sensor/Seeeduino_Series/wiki/index.html"},{"revision":"3762af5df48960816e0d29de1c1f65e4","url":"Sensor/SenseCAP_Protocol/SenseCAP_The_Sensor_Prototype_Kit/K1100_Getting_Started/index.html"},{"revision":"e3ae4d8e1fdc95de95bc870e8e15e558","url":"Sensor/Wio_Series/Wio_Tracker/index.html"},{"revision":"5eec9573195213767620f1a103ba70f1","url":"Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT/index.html"},{"revision":"283c50d43a0f0c9d184851b6ddc30311","url":"Sensor/Wio_Series/Wio_Tracker/wio_gps_board/index.html"},{"revision":"f9ea662974dba6c32f6be6333534d33a","url":"Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat_M1_NB-IoT_Tracker/index.html"},{"revision":"4420e202b5e81268ecde8c901c981422","url":"Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat.1/index.html"},{"revision":"c872d8f85e6baa45e49bc4f87e24218f","url":"Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC/index.html"},{"revision":"37d54a497d862074a8af4edaea156f6d","url":"Sensor/Wio_Series/Wio/Grove-Shield-for-Wio-Lite/index.html"},{"revision":"55c6197fcf7c2984933b5ce7cfae3f84","url":"Sensor/Wio_Series/Wio/index.html"},{"revision":"ea1d677acf59619448951d73c40094c8","url":"Sensor/Wio_Series/Wio/LAN_Communications/index.html"},{"revision":"45410b61d12745fda4b6805290a8202b","url":"Sensor/Wio_Series/Wio/Use_MQTT_to_remotely_light_up_LED_lights/index.html"},{"revision":"cba6c1d69128bbfd139fbe9e631900a0","url":"Sensor/Wio_Series/Wio/Use_Socket_to_connect_to_the_forum/index.html"},{"revision":"b035f8c4d0453f05fb394764d64abde8","url":"Sensor/Wio_Series/Wio/Wio_Link/index.html"},{"revision":"6690ea427b0ed093a53e88e15cbd424a","url":"Sensor/Wio_Series/Wio/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/index.html"},{"revision":"3cd6288fe1e0049eb2cc8d5ae6a5bbb3","url":"Sensor/Wio_Series/Wio/Wio_Node/index.html"},{"revision":"34030e19ed601a3e3e6a3800f30c3fca","url":"Sensor/Wio_Series/Wio/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/index.html"},{"revision":"e671cb342bb59e5bf9c5187db94bc1d6","url":"Sensor/Wio_Series/Wio/Wio_RP2040_Module_Build-in_Wireless_2.4G/index.html"},{"revision":"ddb6518e8567ca15ecec6756b01c7082","url":"Sensor/Wio_Series/Wio/Wio-Lite-MG126/index.html"},{"revision":"7165b7af1e6a2af431d64476faacdfb7","url":"Sensor/Wio_Series/Wio/Wio-Lite-W600/index.html"},{"revision":"b71de3ceb5d65af5aa774590208a002a","url":"Sensor/Wio_Series/Wio/Wio-RP2040-with-Arduino-WIFI/index.html"},{"revision":"0da660d35cae7704084fabd1d1ddb4d4","url":"Sensor/Wio_Series/Wio/Wireless-desktop-atmosphere-lamp/index.html"},{"revision":"20fe3e957fee9ae4fef6c5a90c88b6f9","url":"Sensor/Wio_Series/Wio/Wireless-Fall-Detection-Device/index.html"},{"revision":"735a7c3f01ed940e73fcc0cd00b37ba7","url":"Sensor/Wio_Terminal/wiki/index.html"},{"revision":"c0f8d07994a2bbee28938cf1c82f827f","url":"Solutions/index.html"},{"revision":"21980f96fef2caba13267a1d63d212e6","url":"tags/demo/index.html"},{"revision":"e1199524cc7742a4e727d60d9e046a84","url":"tags/docusaurus/index.html"},{"revision":"7f54689e22061c1a5da586a3dfc9bf33","url":"tags/getting-started/index.html"},{"revision":"ff6ab89ba281c3ff6d265396b9b1df80","url":"tags/hola/index.html"},{"revision":"d3252adb660eb67d86635b38cbfa8218","url":"tags/home-assistant/index.html"},{"revision":"5004f29e56d65eb6d10728fcf45917c9","url":"tags/index.html"},{"revision":"771a815ae98890cee4e1dd50a6b3e44b","url":"tags/link-star/index.html"},{"revision":"6995d1445b88458eeb6fca66eb8eb34b","url":"tags/micro-bit/index.html"},{"revision":"913d388ef9194a2b80628f4567794b53","url":"tags/nvidia/index.html"},{"revision":"7d6d8ee09bdf65474cb471d0408d6d82","url":"tags/odyssey/index.html"},{"revision":"cefafbbf3a435eafdda527b837cc11e5","url":"tags/re-computer/index.html"},{"revision":"78fa0db6d5e5e3353795d2c6f628bd92","url":"tags/re-server/index.html"},{"revision":"92c3b0797744dcdc23a26929f0ddfdb2","url":"tags/tutorial/index.html"},{"revision":"3cfe766ac98c1bb8b6cdc00bdc2810fb","url":"TEMPLATE/index.html"},{"revision":"8d6251da01a237d3f570c15548b12949","url":"Top_Brand/Arduino/shield/shield_Getting_Started/index.html"},{"revision":"429460c1fa0ee1561dfc85a782045a07","url":"Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit/index.html"},{"revision":"adf0a64518e742bab9226df34c697cab","url":"Top_Brand/Micro_bit/microbit_wiki_page/index.html"},{"revision":"b91d2db9b53c6053943d25284a2806e6","url":"Top_Brand/NVIDIA/Drivers/J101_Enable_SD_Card/index.html"},{"revision":"6b22fc530f23bdd0ac56b6b637a83b6d","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson_Xavier_AGX_H01_Driver_Installation/index.html"},{"revision":"5ed6a95878c3eff64218cf33d23a56fd","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson-Mate/index.html"},{"revision":"55b2974e155e09836726b6542879038d","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203_Flash_System/index.html"},{"revision":"32c2430bef0ee4a4aa4112fb0eb2c15f","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203E_Flash_System/index.html"},{"revision":"0afdf2dcd51d5e13fba5f421b5a8332c","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205_Flash_System/index.html"},{"revision":"b7605d3270a7403cd7c42f15740e27f2","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205E_Flash_System/index.html"},{"revision":"b7e42432d4cb576d2c98e287f79217c7","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1010_J101_Flash_Jetpack/index.html"},{"revision":"f57b252c0447b2b7071955a03afea2a7","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1020_A206_Flash_JetPack/index.html"},{"revision":"397267aac24a49954b71e02a533dba63","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J2021_J202_Flash_Jetpack/index.html"},{"revision":"48aabab7f11053d1c8030e9d0f597f38","url":"Top_Brand/NVIDIA/Getting_Start_Projects/DashCamNet-with-Jetson-Xavier-NX-Multicamera/index.html"},{"revision":"b048919b2eb13271832e3f30c5cff092","url":"Top_Brand/NVIDIA/Getting_Start_Projects/DeciAI-Getting-Started/index.html"},{"revision":"191d77457402043f15d330b4383f9285","url":"Top_Brand/NVIDIA/Getting_Start_Projects/HardHat/index.html"},{"revision":"e688a0c9ce718664f11af0555f147835","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-AI-developer-tools/index.html"},{"revision":"d77ebe9791a29370c4f0e334f3a401f5","url":"Top_Brand/NVIDIA/Getting_Start_Projects/jetson-docker-getting-started/index.html"},{"revision":"19444db420c54179374c3b3c25aa430e","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-Nano-MaskCam/index.html"},{"revision":"f14b1f6f375b0ecbdaac9dc887adaa48","url":"Top_Brand/NVIDIA/Getting_Start_Projects/No-code-Edge-AI-Tool/index.html"},{"revision":"eab6285585762c776a7660168524d5f6","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Initiation/index.html"},{"revision":"0a2ea47ef0d505876fbb4b48a2629286","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Projects/index.html"},{"revision":"d0307f3154cd957dd1a2d7e332562d13","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Resource/index.html"},{"revision":"2e914d3a08c3920a3e4e75c79c5650a8","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Tutorials_Exercise/index.html"},{"revision":"cb30779f9607b51ebe0431d96319121f","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Security_Scan/index.html"},{"revision":"4ca0e1bb99a7193243bb32285bc62892","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Traffic-Management-DeepStream-SDK/index.html"},{"revision":"8b846aef2fda6645c875c27db3940126","url":"Top_Brand/NVIDIA/Getting_Start_Projects/YOLOv5-Object-Detection-Jetson/index.html"},{"revision":"4b61c147cf71371f8440826a5e956225","url":"Top_Brand/NVIDIA/NVIDIA_Getting_Started/index.html"},{"revision":"04ec75d7a57476eb4070fd93ce197bed","url":"Top_Brand/NVIDIA/NVIDIA_Orin_series/Mini_AI_Computer_T906/index.html"},{"revision":"bc828da4ba4367e76fe57e7f2bf5d2c7","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_GPIO_Grove/index.html"},{"revision":"5a752fab1b609fcad2996c2fbe236cd9","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_Hardware_Layout/index.html"},{"revision":"b8d84869f2262c0c8aef9615fd92b034","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_Introduction/index.html"},{"revision":"eda47513ff980dba8129cffe495e9880","url":"Top_Brand/NVIDIA/Usefull_Tools/J1010_Boot_From_SD_Card/index.html"},{"revision":"b9918833b8bad7234a7622b3713d4a1f","url":"Top_Brand/NVIDIA/Usefull_Tools/reComputer_Jetson_Memory_Expansion/index.html"},{"revision":"3c3fe1d48e2a71408b14429155dd926c","url":"Top_Brand/Raspberry_Pi/index.html"},{"revision":"6cd0e7e5a50bb57435970b9fc602a614","url":"Top_Brand/Raspberry_Pi/Pi_HAT/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/index.html"},{"revision":"330a9a1f4443b6bc6c4f85aff5623da6","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi_Zero/index.html"},{"revision":"af587705097fe0114deb2e063a3cc8e7","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi/index.html"},{"revision":"64fc92e23221324341288ef8c019ea04","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_HAT/index.html"},{"revision":"5552b8ff13df5e7fa55fd0b7dad83d38","url":"Top_Brand/Raspberry_Pi/Pi_HAT/GrovePi_Plus/index.html"},{"revision":"cb040625e6a7a60cac967891ab19b1f6","url":"weekly_wiki/index.html"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"assets/files/docusaurus-e8e4adf44ac06f25e961f7a71a6d0f90.png"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map