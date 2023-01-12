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
    const precacheManifest = [{"revision":"771a6f89f45434a89eecb5f0ddecfacf","url":"404.html"},{"revision":"b71066f88ff4d1228b9a1c23f95c5f02","url":"A_Comparison_of_Different_Grove_Temperature_Sensors/index.html"},{"revision":"996b643f38261cfac095910dac56d194","url":"About/index.html"},{"revision":"8bd02a3052f9315aa3fcbfd3aca4d27a","url":"assets/css/styles.2eda7060.css"},{"revision":"b0bf5b630434b646328ad11fd1b8e782","url":"assets/js/005468fc.bc57dea5.js"},{"revision":"21db00a23b4c241758eba6854f4a2217","url":"assets/js/01444ef5.a58836f0.js"},{"revision":"c789c73d2ab5b565c00c960695e79491","url":"assets/js/01a85c17.97ec86b3.js"},{"revision":"5009aeaa9b8dc1633cc19d763c447f4f","url":"assets/js/02cd463f.b5e1c5ad.js"},{"revision":"c88fc5ce5f3d93f6f907504b069ab004","url":"assets/js/03dcabdf.84eed456.js"},{"revision":"1a393c5026a33e33173c2e342c4dd831","url":"assets/js/04122469.c22c7976.js"},{"revision":"8dfc22ddd7fb3271b38c1e2c3b82088c","url":"assets/js/0620dccc.4a138bf2.js"},{"revision":"57deccf52427931abddfc1541b163ddd","url":"assets/js/0726a836.03065bb6.js"},{"revision":"d0083c2e29b08da4a73c51380dd11897","url":"assets/js/074c28f9.13c5f9af.js"},{"revision":"b1bbed9e45da16860cb7b0a465dac5be","url":"assets/js/07d3229c.d162d777.js"},{"revision":"8a69d39b49d64b3fefcc4184e11fc094","url":"assets/js/07f5f3e4.1c1a68bf.js"},{"revision":"92f89779e097755e2075727829ffc726","url":"assets/js/0930a167.260f2ac6.js"},{"revision":"0efb02f87df5ebb9bd9f4d348e6ffc86","url":"assets/js/09c11408.8bbba7d5.js"},{"revision":"2ebcf8af2625e4eb619813fb20303b23","url":"assets/js/09f63151.2ad58511.js"},{"revision":"5e2d4f4e4752b0f72d73da2b036edc9d","url":"assets/js/0a36879f.91a041e8.js"},{"revision":"f2db67774b4052d4978d8ad4f2f68187","url":"assets/js/0b9545d5.44b3b355.js"},{"revision":"cfe3142ce6018d850aca517acf853f03","url":"assets/js/0e77115e.32d74686.js"},{"revision":"53031c5faf29062c80f8c549859109f7","url":"assets/js/0ea8e5f8.38c9c94b.js"},{"revision":"d541102e6e2ad9ec65bc63e880210e06","url":"assets/js/110fea83.3b1a2f4d.js"},{"revision":"7e2182e458377eeebba2a43dde1b28ba","url":"assets/js/1221.62f28e65.js"},{"revision":"5a0a3f3bbcc8941c7bcb44e1a7464ef2","url":"assets/js/138c33b7.3838f889.js"},{"revision":"1371932c9b1c9487881ea016fd4635cd","url":"assets/js/140bcbe3.c0376201.js"},{"revision":"be8569f536ac0eb8e1beab018108982d","url":"assets/js/143.54c1ee62.js"},{"revision":"6c75a725ac744a045ffc70957c9c5bb3","url":"assets/js/14342fa9.b567dc24.js"},{"revision":"f70bfec566f434c2db22c2f0ce7faad7","url":"assets/js/145e0b68.3231c72e.js"},{"revision":"fb539320509a52db690b198f8e36d43d","url":"assets/js/14a83f88.0a2396ce.js"},{"revision":"f498d9b9b01d2a330c654910e076bea9","url":"assets/js/14eb96d6.38daa4d8.js"},{"revision":"1c701ebd4aa814a1614fbc203bbf80a6","url":"assets/js/14eed98c.335ff730.js"},{"revision":"d45bc20446bab57bbc7404dd63d6a92c","url":"assets/js/151c46fd.62352d39.js"},{"revision":"d941f548c81c0a9e7edbe9e170db940f","url":"assets/js/157a6687.8f8d76ae.js"},{"revision":"be1c902379eb916e74b35051723f4141","url":"assets/js/164abcd0.bfa06d5c.js"},{"revision":"687157c2e2a2766b26570559c26ef6fc","url":"assets/js/1671d379.39d0c9f0.js"},{"revision":"c56bf926585c28f9127dd8d7ca47dc68","url":"assets/js/171a67e9.744eee43.js"},{"revision":"37c91a69cfeb8c380a480b5122da03e2","url":"assets/js/1726dbd0.701bb61e.js"},{"revision":"6c94679997e10190b3f8e7501b7396de","url":"assets/js/178594d9.c8970f07.js"},{"revision":"9408cfc2895ec053870df0a618e46472","url":"assets/js/17896441.2991dded.js"},{"revision":"e827891b5e4965c79c30d27a07f282d2","url":"assets/js/184f97c9.6562702b.js"},{"revision":"13b1fdd2ec24f00b560a3e3313e38faa","url":"assets/js/18aed5bd.e35f40c2.js"},{"revision":"adc892bf24781e66098952443123ccd8","url":"assets/js/194984cd.f2485548.js"},{"revision":"b3372c8c99f2ddef48816738b3b49750","url":"assets/js/199d7462.66866185.js"},{"revision":"3472e073168258c77ca7ebba06571083","url":"assets/js/19bcfa7e.349a959e.js"},{"revision":"3ae4a00936fa1a430b6bc5a94887c378","url":"assets/js/1a307c66.b10a5583.js"},{"revision":"35a635e498857fe80153fac3665ccb1e","url":"assets/js/1a4e3797.c5c4d9a3.js"},{"revision":"861f632e85e3bdb5c0fbfd88c01e3f0d","url":"assets/js/1b05b70a.6b17fec1.js"},{"revision":"700790359075c24160e89196ab6825f5","url":"assets/js/1b69f82f.33965bc3.js"},{"revision":"f78d066b23445d88ab3b4bafd33d17e2","url":"assets/js/1be78505.8fa58127.js"},{"revision":"1960f55e7b1642ac72394401f0207a64","url":"assets/js/1cca9871.583c2112.js"},{"revision":"27c0ab4cd1ba987e979583ef8348606f","url":"assets/js/1d461b31.62cb7f5a.js"},{"revision":"13b46b59b57e3313678011c3410cbd79","url":"assets/js/1df93b7f.65ea2c83.js"},{"revision":"750d62c8e51ee76c00ff8dba8b3508c0","url":"assets/js/1e6bebf6.3f0a9a34.js"},{"revision":"753136933369628811a51d39be6c7ac4","url":"assets/js/1eafc2d9.7114b1be.js"},{"revision":"2d3cf85bfa8e7417086d126e8fa73881","url":"assets/js/1edb9b88.22f5b269.js"},{"revision":"ad373c51d6e690f35c11bcb5c11c87a3","url":"assets/js/1f326d9e.b44d7c31.js"},{"revision":"2a577550fde01136a7484357f295cc34","url":"assets/js/1f391b9e.d7e3e311.js"},{"revision":"4806e21acaa586d0a713ad6c38ed8497","url":"assets/js/1f4c1886.085c7e30.js"},{"revision":"4ca1d42f00dd28887437d6fa8bfd18ec","url":"assets/js/1ffb633c.4255828b.js"},{"revision":"c28edfacddc4a8a77605b8c5124eb538","url":"assets/js/200d35bb.e1805019.js"},{"revision":"8f41f271aa13074ac2c195e43ca4da23","url":"assets/js/2048f185.589461e1.js"},{"revision":"73c46d8eed2ad713e0c42a8a413f913c","url":"assets/js/20c4fb6d.b3088282.js"},{"revision":"a9ac8dcd88999138cd81777f3e1a0eff","url":"assets/js/213f7cc4.c385dcc7.js"},{"revision":"26b53cf25bd03f8ff350a0793d3fee3e","url":"assets/js/230.b54af62d.js"},{"revision":"c1f592219c59518ea665adab71613eaa","url":"assets/js/230e8c80.bbd3f28e.js"},{"revision":"a9db4dea09557e7ef57b62c87c441542","url":"assets/js/2396dc9e.99e66d6d.js"},{"revision":"e2a789a546134d15d9a2dd5f72cfb059","url":"assets/js/243953de.8a12a60a.js"},{"revision":"99e264dca392060d3a811ec79dcc6104","url":"assets/js/24ac6543.ebb75178.js"},{"revision":"5ffabfb1b2099b10058fee1adce20d20","url":"assets/js/2529.ff36fffa.js"},{"revision":"8fd0d995ccb9727d231ad082d35a4289","url":"assets/js/2571b16d.765b3de6.js"},{"revision":"81ce7ddffa74760e317d664dde93a508","url":"assets/js/26a7445e.d588e860.js"},{"revision":"48748bff76870858d83244fb2ea28ca4","url":"assets/js/27c00b57.dba2cc18.js"},{"revision":"7f20f561c48af27e5d624586ab3506df","url":"assets/js/28128c6b.02e98702.js"},{"revision":"de93d1867307084826dc6dfafeddfff5","url":"assets/js/2904009a.a168ade1.js"},{"revision":"76caa1b274b96dc5236e4dad5dc85e6a","url":"assets/js/29137b5f.1c73956a.js"},{"revision":"192f14fdec112ff563a5d2219bf14707","url":"assets/js/29302d38.efc8cafd.js"},{"revision":"0db9602b1561d845ae7a85e82eea6fff","url":"assets/js/2bb2992c.a076a805.js"},{"revision":"7d56edc50584d7ee7d3676176de93825","url":"assets/js/2c8d3b24.2889f2ff.js"},{"revision":"c92d1b439dc3e4f0d9045c05dc04aae8","url":"assets/js/2d9148c6.0bfae1b9.js"},{"revision":"d9ca22a7813b17be80c96c9f5d838fc7","url":"assets/js/2dbb449f.bdcb64c4.js"},{"revision":"69f89d06ba902501470d904ee10752d6","url":"assets/js/2de37846.e0491237.js"},{"revision":"fe0253bda6f687f7a7bd321b41c8642d","url":"assets/js/2f2a08db.b2c6df03.js"},{"revision":"48d51a43cb088e4ea7abbff72d849e92","url":"assets/js/2ff8693a.0f343669.js"},{"revision":"0a6ba20050f98d8ca89661e6ddb3e626","url":"assets/js/3217a33c.8b997a1b.js"},{"revision":"2b42d35953f42d6395f201fd137fde4e","url":"assets/js/321b43f8.88674319.js"},{"revision":"2eb48f71c25f922c79e4759ce27f80a8","url":"assets/js/3335a228.0403f9c6.js"},{"revision":"b265a7c6e7b2aeb500bfbb8354379b2e","url":"assets/js/33e3dcc4.fceaa6e9.js"},{"revision":"391dd8b2ebbd8623ac019d89b731bebc","url":"assets/js/342bcb03.6b2b12ce.js"},{"revision":"529e8d04c0254575581959f046be9d82","url":"assets/js/344d8f4d.f64f34a9.js"},{"revision":"2aa941cdfec6d502e287128d744c8249","url":"assets/js/346869d6.8457d9e6.js"},{"revision":"2215037275a5a657743a910df2139ffa","url":"assets/js/35b3c1bd.76a6dc66.js"},{"revision":"1c062dbb9001936f41771da01bbdac91","url":"assets/js/3720c009.9a58b73e.js"},{"revision":"ffdc53e1e645999256713a744807998b","url":"assets/js/37d5ac0c.0797933a.js"},{"revision":"ebca420b595b8ee86a7a4ebddd3a22c8","url":"assets/js/392e3820.212bb865.js"},{"revision":"994cfa5d0c1e34a0525f82a25f9fff72","url":"assets/js/393be207.13aa0981.js"},{"revision":"592f5fcfc367303ea71ed370d329df34","url":"assets/js/3ba35f78.8a389676.js"},{"revision":"8fca90fbc3be141059dd99895ff3b95f","url":"assets/js/3d8f5fc3.82ea3b5f.js"},{"revision":"0d5c80b4ed024f612659cb096a16a5f6","url":"assets/js/3e2f9e3e.504d0f64.js"},{"revision":"9d204c38626b1db9f43fa6a5e1ae2be3","url":"assets/js/406a9e18.26678556.js"},{"revision":"6e1ee0392c9bf1d605822e9f53b2b8d7","url":"assets/js/40ec3908.e162cc21.js"},{"revision":"f00ac5ab90e0d90818c6ac52db807cf1","url":"assets/js/42627244.a96a3285.js"},{"revision":"c62af1e542c0e7df607fe6806fb04439","url":"assets/js/43193a5e.1106359d.js"},{"revision":"51665d01238d08f15f0a1be7ca7dad0c","url":"assets/js/4390fd0e.1d1c8242.js"},{"revision":"02b44270690fd25e6ba49b22852be621","url":"assets/js/4442626c.8b2b5868.js"},{"revision":"c811646fc21093145d4a9382d392f535","url":"assets/js/4563d7a3.1f56cbc7.js"},{"revision":"d6776d3dd2eb1e76b80fc6a2c8c0b8f0","url":"assets/js/46213b0a.43cf7482.js"},{"revision":"be616500d25b1dc20e2f2381da176dfd","url":"assets/js/47f44979.50bb6b51.js"},{"revision":"b20eebcaebb67ea326a4c7a8d35026a5","url":"assets/js/48bdea80.83522a7a.js"},{"revision":"618cd40e720567e6b837ce8145c7e2d9","url":"assets/js/4972.6f1a8649.js"},{"revision":"2f8ce0503159b92c8d3833295d2a717d","url":"assets/js/49fab347.08940dfe.js"},{"revision":"c052dd45bd9893bf9109c59d7f44f02e","url":"assets/js/4b5fa008.d4ae6157.js"},{"revision":"006d6f068af96bb571151f3624e2cac2","url":"assets/js/4baa3015.94c74d3c.js"},{"revision":"e5d6a499129b1f848a31606dd70efbec","url":"assets/js/4c774b6f.e6772d8d.js"},{"revision":"a162161194ba7bdde8aff0f55d9e82ba","url":"assets/js/4cfb7e47.98139478.js"},{"revision":"79fdade81261b060692932acee74fa5b","url":"assets/js/4d2a680f.eb11be32.js"},{"revision":"f889b040d6bebe4abfe0185b8adc2210","url":"assets/js/4d375250.82ef4a37.js"},{"revision":"3bfb53619db60f7db27795a8008099e3","url":"assets/js/4e407b53.826c53c3.js"},{"revision":"3720d9840820ad0fc73d6d6b5c8f6da5","url":"assets/js/4e4ab622.27bca00d.js"},{"revision":"2e2d9ec3ec49e2c7a1c075b6f72881e0","url":"assets/js/4ec3603d.4aae05e0.js"},{"revision":"dbf87f2808a477ad365688c054b582cb","url":"assets/js/4f891691.24f40fbe.js"},{"revision":"50b17c26539daed78b9eb6e5a450670e","url":"assets/js/507f3fe0.f0f0464f.js"},{"revision":"60194e6fe3eeeced59ee893f78902a1c","url":"assets/js/5131.8d61f625.js"},{"revision":"d00f16e77cb6547d6a058eb99e7bd91a","url":"assets/js/5283.9333f6f7.js"},{"revision":"aa5640e22351053bb621a4304d4161c7","url":"assets/js/52e89a95.66b2327e.js"},{"revision":"188cf4ec6f01808dfd788d3647b2ecd5","url":"assets/js/5394e55f.573fdf20.js"},{"revision":"b04bef88ec3cc08f8296a8a3ca33a7f9","url":"assets/js/5509d17d.6204c0bd.js"},{"revision":"cd8452d12e5c58525852ddb40ca5c981","url":"assets/js/557afe6f.dcbc6ad8.js"},{"revision":"8c6319e434126e7c5fc72a958912dc12","url":"assets/js/55960ee5.8be8743b.js"},{"revision":"1123398d4bf0c2f37bb5b617a8b71fbc","url":"assets/js/565fb46c.eab41ecb.js"},{"revision":"ac5103744402f1e359044b54a4e58f17","url":"assets/js/570f2759.e2ddce73.js"},{"revision":"4cc745f664d036c78bafdf576c789850","url":"assets/js/576fb8c2.05a7413c.js"},{"revision":"aea32451edd4054db74c320e9c2668b3","url":"assets/js/577e97cf.d7ec0d4a.js"},{"revision":"221ec0bcf1d37ff06b4456e4a690e9bc","url":"assets/js/57999824.bb254914.js"},{"revision":"38304248d34b38f00f9035439b5e8947","url":"assets/js/59362658.53771eb8.js"},{"revision":"00ccbd55dfc62d53ec23c6b3dac1720e","url":"assets/js/59b274af.c1e630a0.js"},{"revision":"95c7cdc9d14f9ce3844e26650970b5c3","url":"assets/js/5a37b08a.44c28482.js"},{"revision":"987e5aab9ec677423e239280afb5a77b","url":"assets/js/5a4f2c46.cb798ae4.js"},{"revision":"d2f3e48741c0bbd6291d416f6a70753f","url":"assets/js/5a90aabd.e56c9b13.js"},{"revision":"1dc964b52a501d56bfdf57fb36d50113","url":"assets/js/5ad47f1d.b96552bf.js"},{"revision":"a72f25600c167357d6c1ccbb41cc4afa","url":"assets/js/5c4c349c.11536685.js"},{"revision":"44f7a74f8b05c91a2efb23d289f4912f","url":"assets/js/5c8df9a5.1b0c5cff.js"},{"revision":"1fbd2a67ae7d1b25ae926b03da599b15","url":"assets/js/5e0b8343.d6502c64.js"},{"revision":"c9edba5067ed77152fe5a06d37f2ceac","url":"assets/js/5e7fe18c.1a59c7b0.js"},{"revision":"c9471bc3d95fd1d146f56226311a3c38","url":"assets/js/60938b5a.3d90bee6.js"},{"revision":"aaf51d916494dcdb48249cd9b487f180","url":"assets/js/60a85657.b1024137.js"},{"revision":"00fb18d43a8991874732b9bd6041258c","url":"assets/js/6277aad6.d74b8861.js"},{"revision":"3f0a1e620157f36f0427cfed03db2528","url":"assets/js/62b00816.1b4bbfbd.js"},{"revision":"96c383d0fc0688281c7c17d4ca2be9dd","url":"assets/js/62e9d001.103b175e.js"},{"revision":"2088a626b448e32be1dc00508106b711","url":"assets/js/64c7d5a4.20493743.js"},{"revision":"531715d223651ac02c65223b1814eefb","url":"assets/js/6780.69f0575e.js"},{"revision":"92e6fa0bdbd18f826af1f2e30e5c1795","url":"assets/js/67811993.00e43afa.js"},{"revision":"d18b84e2e61723bc46448df04449fce5","url":"assets/js/67c31312.99221f17.js"},{"revision":"4382763f9df351589ecfc9da373aef28","url":"assets/js/6871e07f.32281c3b.js"},{"revision":"5734cd6761ca6cc15123e7d5ae6d9114","url":"assets/js/6875c492.eec57c09.js"},{"revision":"3373c0bdfafc8cbb4c910c2fbc878fe0","url":"assets/js/689bf8c1.e412bdff.js"},{"revision":"f30c8961e90e621d4e9202f724d3dac7","url":"assets/js/6945.94f4a660.js"},{"revision":"dcb178966cbb8e844fb4924ed2964741","url":"assets/js/695bd62c.df08dcc6.js"},{"revision":"86c009be058a366ea17ce099a273ce8d","url":"assets/js/699bbc74.ecfdc961.js"},{"revision":"e42cc4bc4b4329670adf00c8809c5132","url":"assets/js/6aedb1d1.9f14ae43.js"},{"revision":"51a29a59d3b7a44a0db7e7bd2e7f07c7","url":"assets/js/6b656ee7.d18c8d90.js"},{"revision":"95fca0f6601784ee0ef56153230973cb","url":"assets/js/6d0be7b8.7afa564b.js"},{"revision":"9dcd0bd5beab4bb6c1663d8782f9b93e","url":"assets/js/6e8da2b9.6588713c.js"},{"revision":"681b87a45be8bba240821c55c261b9ee","url":"assets/js/6e9d0949.b8808a17.js"},{"revision":"3f90f6e3f3b842698454e916d7c15d18","url":"assets/js/6eeef2b7.c715ce33.js"},{"revision":"24966ed054f5355986b1b12600e2613b","url":"assets/js/6fb54c5f.1157d0d1.js"},{"revision":"206eb2a96a00374ba599a90c8b136690","url":"assets/js/715d835b.c6741beb.js"},{"revision":"e6438de2243973fdad638ec48f658b00","url":"assets/js/720fd98f.43d0f387.js"},{"revision":"4b0d4ee18f13147ee9fa21795a64d174","url":"assets/js/73664a40.4efe6e9e.js"},{"revision":"51fe40973828893b9d6f6751bcf6bbf8","url":"assets/js/7394a999.7e9846d0.js"},{"revision":"a88134d0f1e09aa117de3a7521a7972b","url":"assets/js/739735e6.83543352.js"},{"revision":"d97b7846edb1efda98c94a860c3d75ea","url":"assets/js/74ff212b.34fd143d.js"},{"revision":"f28cca2d898b95c07e01c0ec11a56de5","url":"assets/js/75b74b81.3c344b6a.js"},{"revision":"3d0259eb5d09f782d610da9251ddfd74","url":"assets/js/761bc709.5df6b329.js"},{"revision":"ba8ebed8b9d5af3b49a587d54bff12a2","url":"assets/js/763bbd3f.1ab96705.js"},{"revision":"18dfed6c854c31ee9592e2db43c1ecbd","url":"assets/js/7661071f.686afe2d.js"},{"revision":"b650fbae9be9134e4966b5f4c743a190","url":"assets/js/76af27fe.e795c935.js"},{"revision":"65a9ec797717f0f4bee7669f4051de0b","url":"assets/js/78c63c4e.b3896c45.js"},{"revision":"a549d17de1d0840872f4f4763175083a","url":"assets/js/78dbed97.c3451bd9.js"},{"revision":"0e2029d67fd174f03581561d4d15acc3","url":"assets/js/7adbed28.e53efede.js"},{"revision":"3e022398623de709080d67c5f9158ec3","url":"assets/js/7f0f833c.a387f838.js"},{"revision":"083505721475ddca2c64e8f0e88dd720","url":"assets/js/8021d612.590ad153.js"},{"revision":"f320a8d95e005fd21eea02ec16f03fdf","url":"assets/js/80a5671f.1f92fc3b.js"},{"revision":"3cb1d6a8f3cc315e147caf511c2e4210","url":"assets/js/814f3328.b4146754.js"},{"revision":"d0b50db2f72abe6e50dd36d4d9dfc3e6","url":"assets/js/8222f10b.6d6696ab.js"},{"revision":"514b0458653043e335eb5e5d62473d7a","url":"assets/js/84f608b8.0319449c.js"},{"revision":"d6988e1079a7fc4e7733a1f03c3e4522","url":"assets/js/8549a19e.34282b4d.js"},{"revision":"502b72e02fd1f0b550c7b47d1fce9991","url":"assets/js/860f6947.080cc928.js"},{"revision":"1fff58db8bd37335e6c9198d587376c4","url":"assets/js/86ba3757.ea863a97.js"},{"revision":"fe2aabbd8c62eca4f8e26f149b5d6e80","url":"assets/js/8717b14a.5de343a3.js"},{"revision":"64130e0129d28372af211e970cb6b2be","url":"assets/js/8894.91734414.js"},{"revision":"7a528b1c5bb4eb4b4a7744028fd2c6e4","url":"assets/js/8a4cc359.d1424aa0.js"},{"revision":"08a8eb4e11c4645a014f084be325fcc3","url":"assets/js/8b2f7091.957c10e1.js"},{"revision":"e59171d2fcccd4d77b65ae6754ab9e6c","url":"assets/js/8b647e8e.33819eb4.js"},{"revision":"c95135a490db7d27253bcda8abd28784","url":"assets/js/8f42b0e0.e43b184a.js"},{"revision":"525cf4ea39582ed1c3cf055f0e91087a","url":"assets/js/8fb86cc7.015b5a37.js"},{"revision":"3888eabde01eefe30c2aec7f2c8cab80","url":"assets/js/901a2fc8.9ed93640.js"},{"revision":"7bc430c0d4277594b8ec0f77daf8b807","url":"assets/js/90280f56.51cabcc8.js"},{"revision":"5754235a70bd0954eb1950b2ed43dcf6","url":"assets/js/90452d5a.3e1c01cc.js"},{"revision":"083702bc9e7126258419af6f3a0188b8","url":"assets/js/904b35ab.1f98af41.js"},{"revision":"fc77e8260196c3ecb3073da18418ac3f","url":"assets/js/90dacec1.8f46b5d8.js"},{"revision":"b103b282ae526bfb38a32dcb03094746","url":"assets/js/910f2c86.edf6903c.js"},{"revision":"c3e924bb3e9fb55ca35ac49525cfee12","url":"assets/js/925b3f96.15bc0528.js"},{"revision":"801baa36a935ef49fd62b5c7405e4202","url":"assets/js/93115c8b.120922ad.js"},{"revision":"31c4775a4d7ac0abe0cf264ed3e2d957","url":"assets/js/935f2afb.bd80801b.js"},{"revision":"e99c4443636652a9767cc48bd3bb184e","url":"assets/js/93aab6dc.bdbfa2c8.js"},{"revision":"5c6f5edc6c7831d48f26be01ac060d01","url":"assets/js/941832c6.b352457e.js"},{"revision":"a330bc5a34671248cf9ebbc1c9df3ec7","url":"assets/js/9441373b.9a2c69f4.js"},{"revision":"05ac3aa99542aa0abe8e31ee195ca044","url":"assets/js/952ad7e5.14e0e215.js"},{"revision":"5466e464c5463de495484779acd13029","url":"assets/js/959e7875.d6c902cf.js"},{"revision":"8dde09e357725aa7068aedfd0e00bb74","url":"assets/js/95a394bd.71785952.js"},{"revision":"40400f24eadc3e64f77aceb0635096b4","url":"assets/js/96a0ce76.0a7a278b.js"},{"revision":"26c2e95065b666ff1568094704b99f6e","url":"assets/js/96b288b4.f536b664.js"},{"revision":"79cd115f8d0f4baf271485e32f1a07ea","url":"assets/js/96bb7efc.81be38bd.js"},{"revision":"d3e72384d12cd494ee9cf7becd0a4bd0","url":"assets/js/97438968.e5ca3b62.js"},{"revision":"3e1362258a879f1d90ebad41df9475a5","url":"assets/js/9747880a.5dc8f9c3.js"},{"revision":"ae33552a237b605abf58ee1cf46c1b0e","url":"assets/js/98fc53a9.cce4df08.js"},{"revision":"4fd7c97b3302a8b7bf915806552b2738","url":"assets/js/9d4b240f.4eb4f83b.js"},{"revision":"be91161fdda1c413b53125141f68d220","url":"assets/js/9e4087bc.dc541821.js"},{"revision":"39f8b5d9641d5c643c732ab1f8be3929","url":"assets/js/9e653338.7347ac37.js"},{"revision":"a3f7e509b5424a97764a9ad112a19181","url":"assets/js/a0061be5.67c8dc41.js"},{"revision":"ed7b1ac00397fe4b7da1c72b502c4679","url":"assets/js/a319ce37.7f35931d.js"},{"revision":"7fe6c3edc2cfea7fe95307f69961841e","url":"assets/js/a364cad1.51d7377b.js"},{"revision":"991276a2ef21c8fd2c0b857039d59166","url":"assets/js/a4910d3a.c26c5d60.js"},{"revision":"cc944a4266c3538c44b85bd12450bb6d","url":"assets/js/a4e0dc1e.4c4bebef.js"},{"revision":"b036e0ba711f620342bf0294b9ff69a7","url":"assets/js/a6aa9e1f.366b1fd1.js"},{"revision":"bc0bf7ca5cac44ccc34ca044efd677f3","url":"assets/js/a7781dee.acc5f803.js"},{"revision":"bc035bcc5ccdea2bc9a0bc57f10728e6","url":"assets/js/a83c0055.0f8484bb.js"},{"revision":"23074d4731e35914cd5c63e95a4023d1","url":"assets/js/aa06cbc5.c04368df.js"},{"revision":"0626fa3fb4c1f50b7448ba9c13c4a27f","url":"assets/js/aae888ad.7e12bfcd.js"},{"revision":"e736d5cb2636c5b9835928ea5c835e00","url":"assets/js/ac6f2286.002750db.js"},{"revision":"2d235f88f65b7576834c210a2bd776f1","url":"assets/js/ad8e7ccf.34b51847.js"},{"revision":"c1c193b70c21f2e57752d1675bf61af8","url":"assets/js/ae34eff1.9c422f6c.js"},{"revision":"f41e36a9a5b8fb99bd68499c96af7dd0","url":"assets/js/b0f6e537.b7d01934.js"},{"revision":"d437c22dc7e739ce4d2e7b420de9db20","url":"assets/js/b443c0d3.67a4e491.js"},{"revision":"f49cd1de2c36d56d48b1b1b160068641","url":"assets/js/b5918de7.f37e9444.js"},{"revision":"03e5e8d6fe70557ed4d0aaa2677c2323","url":"assets/js/b82a96dc.71172d93.js"},{"revision":"d957d61d136ac8821ffdef4a93086ec1","url":"assets/js/b8d196af.711875fa.js"},{"revision":"6736c899c78a683a0afd9714f22c03da","url":"assets/js/b9293531.d3860346.js"},{"revision":"72713f6c7813a55cd6a4f2d9c4a1b41d","url":"assets/js/b9e8a4ea.f159cd54.js"},{"revision":"ed80f2386418984b929c7ab012dba15b","url":"assets/js/bc71e736.08d084a3.js"},{"revision":"819c413b9ff48c6db666466ec49edfc1","url":"assets/js/be7175ef.fbff75b2.js"},{"revision":"06886391e281b9edf3360c7ec1ce79d2","url":"assets/js/be97ab6b.2b5975a2.js"},{"revision":"4f36ea77d81e364ee006644d9638d809","url":"assets/js/bfa5a40f.4e3377cb.js"},{"revision":"5ddebf62f4cd84b2879ff75684a1acd6","url":"assets/js/bfaec730.17854769.js"},{"revision":"75b604c50b936c914f116b23429de65c","url":"assets/js/bfd35d72.7b501b63.js"},{"revision":"feb6e3cfcf70cdf7ec96ce1c635dbf66","url":"assets/js/c008718d.b0f219ee.js"},{"revision":"6ee798e13ded568c91b1addbf41d183c","url":"assets/js/c26a2f16.94e345b2.js"},{"revision":"d3b9f72378239c8e2e8131f24912780c","url":"assets/js/c3c663cb.4ee04cbf.js"},{"revision":"7f26dcab734813cf1ef4cc812e19583e","url":"assets/js/c432ecfc.02557de8.js"},{"revision":"0231b1271c828228697a5c6a3bedd128","url":"assets/js/c4adf32a.fa9ccca2.js"},{"revision":"5cab46f609c41f5b2cbdd73e13384dc5","url":"assets/js/c4fd5735.6678e791.js"},{"revision":"6afe371bd6beba37088e06160c3c4e7d","url":"assets/js/c7e95033.cdf447b0.js"},{"revision":"4445a132127c483dde953f2008aac209","url":"assets/js/c8cde573.2c3fd744.js"},{"revision":"a931e1c4a10bbec45bfd37a3ac5425fd","url":"assets/js/c95930b2.9d751548.js"},{"revision":"5e874089c8a209de75557b39ee4ae73d","url":"assets/js/c997ffe2.2a896fb8.js"},{"revision":"201d904dfedcea7cb7abad38726da684","url":"assets/js/c9e92949.57e24291.js"},{"revision":"8be645a84f3c461eeed4383d860f7113","url":"assets/js/caa4e761.418a90bf.js"},{"revision":"e391d6710e2361d83772cf483d1512d4","url":"assets/js/ccc49370.8ec36f76.js"},{"revision":"8e115e66d21bc8c8a2f704ece94dd59b","url":"assets/js/cd6b2e5a.4e9cf957.js"},{"revision":"191be696229f803a1401efcf7c9caaed","url":"assets/js/cd7be7ea.e9c90c45.js"},{"revision":"aa51240796de1ad9b807b5370f289bbf","url":"assets/js/cd83b52f.efb6900b.js"},{"revision":"b9f3f911e334f6f1749adc4cc2020928","url":"assets/js/ceee7f3e.3fd625c3.js"},{"revision":"cc098ef88a2606faa1d39a5483647d3a","url":"assets/js/d0bd4a50.22726443.js"},{"revision":"5f26c30b0eac3364da0e48961fc7ba26","url":"assets/js/d198be59.33ff8ba6.js"},{"revision":"1cda53ec88607dd54e7f9e62176756ef","url":"assets/js/d2be02f6.99e3a063.js"},{"revision":"7d83b0dc47da135d2733bf9f9b34f8ea","url":"assets/js/d385032c.4c31c5fe.js"},{"revision":"0f8c7094bfc702b4f942c0b8580d4579","url":"assets/js/d805fb17.dfc62af4.js"},{"revision":"819570ee2f0f38e993a5054dc3037b47","url":"assets/js/d80e83a7.a036714b.js"},{"revision":"d08f29c07c6161d81d474f125b680034","url":"assets/js/d852c3f6.ee556ef4.js"},{"revision":"d5c5ad58e5c24eb3b191f3e718855102","url":"assets/js/d9d8d8b9.ebe611f0.js"},{"revision":"c8c578f24c7b9bd1eecd0713b3aeb170","url":"assets/js/d9f32620.4b14b2bf.js"},{"revision":"13a01a41dd0312489a30f63af5f1a199","url":"assets/js/da694bf0.dd283221.js"},{"revision":"2b386a0ab9d312239dca34bae3fea23d","url":"assets/js/db4b56ed.de9560be.js"},{"revision":"07253b8d745d8172eb0d00b4b714c62d","url":"assets/js/dbb851cc.e1832c1f.js"},{"revision":"c3e01e80c5021850fece123662c9e971","url":"assets/js/dbbed665.339d8405.js"},{"revision":"875e871412f438f30159a1ab58882507","url":"assets/js/dd0f7a99.11fe9ff6.js"},{"revision":"b11e0c47783c9b1b9ca5ce09f77b9d8e","url":"assets/js/dd4d6576.f7c8db72.js"},{"revision":"4199e48c7b4dda483f7c7d54a300942a","url":"assets/js/ddb1113f.90fd5bb9.js"},{"revision":"02f0f3f5f807cd3a673633052118b7a7","url":"assets/js/de442936.91060dc6.js"},{"revision":"10f8e185c73adda9677e576fa004a6f9","url":"assets/js/deb574bd.50800946.js"},{"revision":"f2e256f344c99dca801e03e8022f5d02","url":"assets/js/df203c0f.e4f37724.js"},{"revision":"b4b1c4c45104feb14be363ff1f091d97","url":"assets/js/e01d27f8.8999148d.js"},{"revision":"5b3863d345a2281d598588b9bdcf460c","url":"assets/js/e13c4bcf.efd57c9e.js"},{"revision":"64a7dd46ecc23e3b4e436da29cc85fb0","url":"assets/js/e212cd55.3aec8416.js"},{"revision":"b64ba6e5ec5c72a729caeaf159ffb15f","url":"assets/js/e221ca32.aa97e46a.js"},{"revision":"0cc7a292a8cae43910baf454878e7315","url":"assets/js/e273c56f.e720326b.js"},{"revision":"0bfafe994da321ee596982ec3a33fb8b","url":"assets/js/e274bb98.ead7fadc.js"},{"revision":"39d47c76657cc8fca6106e3ae4e56cf0","url":"assets/js/e4455dc0.5ff6f39f.js"},{"revision":"8fc70bc3ed992814ebb90a50681375f9","url":"assets/js/e4b9243e.62ed638f.js"},{"revision":"900f7cb70d6cd8b9c625158976645d5f","url":"assets/js/e52d8f61.10ba6214.js"},{"revision":"108ef3577bde1808f00a8805dd8e0516","url":"assets/js/e5c87e16.a33fd7a8.js"},{"revision":"0038426f4f6961acdbe47923c56077ea","url":"assets/js/e6c12416.913a6bb8.js"},{"revision":"c97c7325044397e633fabfe5d6370d9d","url":"assets/js/e901c80f.ce52ec66.js"},{"revision":"91cb6f8dc88dbfe1e028e38891286a4e","url":"assets/js/e92a6b90.eaf35b25.js"},{"revision":"73bea3aaf9a2d28f0c0e8971edcbce43","url":"assets/js/e9394cf6.b0d45834.js"},{"revision":"c822e1cef45a3c376d3c72d8a79ce25e","url":"assets/js/e9549acf.065c2322.js"},{"revision":"ed0f44b7ec68972f0519015043d59250","url":"assets/js/e9fe7d72.1413cc5b.js"},{"revision":"69a9e067f88e86d9b27f7cf0c95f6fe4","url":"assets/js/ea29030b.ebc6d0fd.js"},{"revision":"329d4202b287a0db961557f38a7df458","url":"assets/js/eabb74e4.72207bef.js"},{"revision":"20323f2e8a31c0e86fa5540c67bbdd06","url":"assets/js/ec9fcab8.212ba661.js"},{"revision":"09d92b9167d609d24a1476fec16e8aa5","url":"assets/js/eccfd7c9.68bca174.js"},{"revision":"a032c00400967ca8590c131673e93565","url":"assets/js/ecf03ebb.67724923.js"},{"revision":"e34c4f3df32372aa4376645c4be3be60","url":"assets/js/ee879e18.02919086.js"},{"revision":"4fcc3bc88e9670a3f15e0e409b176561","url":"assets/js/eeabf334.e8a6d98f.js"},{"revision":"13c830cb4a9c0a84f1ee57294dc672e4","url":"assets/js/ef86a560.b7ce6849.js"},{"revision":"a7562e36b8c81435fafedb048d1f0d69","url":"assets/js/ef91bdd5.46572773.js"},{"revision":"a0b53e0869eb265948dd33501ab56f03","url":"assets/js/ef96047b.0a91ea0e.js"},{"revision":"20289aa6cc49e21a9b0147bb3d3222b1","url":"assets/js/efc78770.c5cdad06.js"},{"revision":"761172fd8d7ad7b7e2c4ebcb79ee0e3e","url":"assets/js/efd2f8ac.19420f49.js"},{"revision":"c02bfd3fd379b01f7e7db6b9b0a9c87e","url":"assets/js/f044737d.aef1c4f9.js"},{"revision":"8da8f85eed223337c19930028e42681c","url":"assets/js/f0766123.90726d32.js"},{"revision":"24ebb73dcd42a32ceb0bb49a421fc521","url":"assets/js/f35e5616.18537f2b.js"},{"revision":"a73902ea69dab73a7a1643686065aead","url":"assets/js/f3ac5f45.0114dd7f.js"},{"revision":"f52b22893e0fb4c5eab7af653eb5c3b0","url":"assets/js/f4ef6418.a0e9dbe3.js"},{"revision":"71dbd9ff7e9bde3d16a92053b9918309","url":"assets/js/f4f34a3a.93018f01.js"},{"revision":"75ceff242374270bb668fe967b4a3222","url":"assets/js/f61c784c.3fef4355.js"},{"revision":"508397faa2c659a702835398a3b9c64e","url":"assets/js/f7db2a0d.a8f8b3e8.js"},{"revision":"8c6e14e604363c0782a2bdcb78927fd8","url":"assets/js/f7e00a96.8d88e71f.js"},{"revision":"594fdcfa39fb27d74fd32dee6cd31c48","url":"assets/js/f8a5f1b6.3bd27f23.js"},{"revision":"457d78b1d32ab3d240f75e67242e313f","url":"assets/js/f978584c.901d84ff.js"},{"revision":"6d95fc0a6fed2ff07ff4f5dbb16f3a21","url":"assets/js/f984ecb6.2b70a82f.js"},{"revision":"da7a5f5d9f79cbea828f1a1dd13580ff","url":"assets/js/f9f52126.2c190074.js"},{"revision":"cdfdb9e33cb1e49eca8c7dc5c136cbca","url":"assets/js/fa36dafe.7e957d61.js"},{"revision":"f0188f1231db2bd27821762d1b2b7fb3","url":"assets/js/fa85a088.f1cbc701.js"},{"revision":"9f87adfd624659975d0bbf70ee96b707","url":"assets/js/fbccd0e7.8fe1f699.js"},{"revision":"c62f23f10c48387958fca79091c89663","url":"assets/js/fbd61b7a.96e14da7.js"},{"revision":"7df316e811f45c7271e915c5d70f220f","url":"assets/js/fc68635f.eaeeca21.js"},{"revision":"5e9a447c5257fcedb9f38441d0733276","url":"assets/js/fc938491.c7b69a00.js"},{"revision":"71ddcf0d46c0dbdb0624176b8c3a6c3f","url":"assets/js/fd7554b9.ae65df07.js"},{"revision":"883b58b8fb55187de0811433b29dc848","url":"assets/js/fef7f73c.0501b7c4.js"},{"revision":"fdb3f6b6ecfe314919db67913a66a949","url":"assets/js/main.2a6a0e93.js"},{"revision":"039ea6430762cc21ed892fca9da02282","url":"assets/js/runtime~main.cf9dc4f0.js"},{"revision":"8db3020643a146244ff5e782ddc7376b","url":"blog/archive/index.html"},{"revision":"f0c48259ec7fe39556e2bfa8d19fe04f","url":"blog/first-blog-post/index.html"},{"revision":"0f9fda045147e7128a05fab8984b0e6d","url":"blog/index.html"},{"revision":"45f268a81fc773c34b25e9c24e588f8f","url":"blog/long-blog-post/index.html"},{"revision":"4d3959a08cfd7be8537c18dd11dd3d71","url":"blog/mdx-blog-post/index.html"},{"revision":"b600bec34bcb1ef3ac11d4cf6f8cebac","url":"blog/tags/docusaurus/index.html"},{"revision":"ea155620049a7ca1f8f97d4d0ca79093","url":"blog/tags/facebook/index.html"},{"revision":"3f1b9df666e69634eac497cc6695e34e","url":"blog/tags/hello/index.html"},{"revision":"84c25a6e8587d5cd6c23583b2fd80085","url":"blog/tags/hola/index.html"},{"revision":"688ecbcf1cb940cd2001e92f8c9d78dd","url":"blog/tags/index.html"},{"revision":"75926d36ed1a55ae9c87eadd103b5639","url":"blog/welcome/index.html"},{"revision":"025d62d85b69bed74422a1961916d818","url":"Cloud_Chain/SenseCAP_Cloud/wiki/index.html"},{"revision":"ffcec8a3a4cbf3d17cfbd346f3277512","url":"Cloud_Chain/SenseCAP_M4/wiki/index.html"},{"revision":"558cb248037f2147844f5befaf6db79f","url":"CloudnChain/index.html"},{"revision":"b9aa30dd5cafdeb344e4cd9e83a64e5c","url":"Edge_Computing/index.html"},{"revision":"7c547753f99077c4a82cc3459233e947","url":"Edge/Beagle_Bone/BeagleBone_Blue/index.html"},{"revision":"30393bbc74849633541f06f9b0ad2f63","url":"Edge/Beagle_Bone/Beaglebone_Case/index.html"},{"revision":"dced633afb7816250dd7100f2a8bbb68","url":"Edge/Beagle_Bone/BeagleBone_Green_HDMI_Cape/index.html"},{"revision":"dfb2e7956ea1205494cd2abaa3072bc8","url":"Edge/Beagle_Bone/BeagleBone_Green_Wireless/index.html"},{"revision":"c37e9bd49b5d3da3e50267f2c35039e6","url":"Edge/Beagle_Bone/BeagleBone_Green/index.html"},{"revision":"aa406452d3d80f73a71391b035a1e753","url":"Edge/Beagle_Bone/BeagleBone_Solutions/index.html"},{"revision":"eeff5bee89410aed2422120796342187","url":"Edge/Beagle_Bone/BeagleBone-Green-Gateway/index.html"},{"revision":"bae7055f83c776c5c4f2f1324063d59d","url":"Edge/Beagle_Bone/BeagleBone/index.html"},{"revision":"b4067052ff9d4d0fbab6f29116acfea3","url":"Edge/Beagle_Bone/Grove_Cape_for_BeagleBone_Series/index.html"},{"revision":"4ce1a839d6997774cece92840f0e3ed7","url":"Edge/Beagle_Bone/Motor_Bridge_Cape_v1.0/index.html"},{"revision":"414cc3fb96dbac9d47fee4ebf6560b3a","url":"Edge/Beagle_Bone/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch/index.html"},{"revision":"418fbc4e285f396e9c0387323085ed24","url":"Edge/Beagle_Bone/Skeleton_box_for_Beaglebone/index.html"},{"revision":"12159f0e79a0d0c22b5aa3db41cb0860","url":"Edge/Edge_Series/wiki/index.html"},{"revision":"e0ca211e6be096fcbaa1582d0c6e52a5","url":"Edge/ODYSSEY/ODYSSEY_Getting_Started/index.html"},{"revision":"6955c290117fb3f1996f7004b612071d","url":"Edge/ODYSSEY/ODYSSEY_STM32MP157C/ODYSSEY-STM32MP157C/index.html"},{"revision":"3b8b055bdbea7d89508aa709ef2f46cb","url":"Edge/ODYSSEY/ODYSSEY_STM32MP157C/SEEED-SOM-STM32MP157C/index.html"},{"revision":"c01ba84ed2baca7b3be70bbb11c16dbe","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105/index.html"},{"revision":"a47f05ebd4ed7402b3d17b1a6e065253","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Connect-Grove-to-Home-Assistant-ESPHome/index.html"},{"revision":"ef0a4b054f80b89c2462518bf0fb181a","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Home-Assistant-Customize/index.html"},{"revision":"5014433a726f09eb5276fdd2e557f6a3","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/ODYSSEY-X86-Home-Assistant/index.html"},{"revision":"6107ee53df8d58510efc7aa58d2f13eb","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Jellyfin-on-Docker-Ubuntu-X86/index.html"},{"revision":"b48340dfa7b4df9157c40ca260c2d0ef","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-OPNsense/index.html"},{"revision":"0237d5ad60c567a934c2a73c9cc6d6d8","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-TrueNAS/index.html"},{"revision":"3375066004cb0265c2cd2653f2a5627d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories/index.html"},{"revision":"0843ba15eb3d3b2f607e9d9eb9671765","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT/index.html"},{"revision":"66374bc95f59e81a35d0ed72052eaa54","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-GPIO/index.html"},{"revision":"58d86da42530a2a8ecdb1ecdc280dd83","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-Android/index.html"},{"revision":"a2bbb2e3611f3d34827742e7efbfb43a","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-FreeNAS/index.html"},{"revision":"f3ccaa35151cdbadeac9d7c4f6653f4d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-openwrt/index.html"},{"revision":"8199146afeb91272f73395c5f4cbf2c3","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-OS/index.html"},{"revision":"2c11dd25a5fc65b86401c7d7b2c964f1","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Intel-OpenVINO/index.html"},{"revision":"617027ac6fc872a0131796451ec4c09d","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module/index.html"},{"revision":"991b1d6d9878e972452d83075b1f2f77","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-NCS2/index.html"},{"revision":"6d3df3d7a53c180826ed7852ad98cff7","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-pfSense/index.html"},{"revision":"e043ee8e7b60e936d8ca37be0eb4811f","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Updating-Firmware/index.html"},{"revision":"3b49d6206b3dd284c91803716d7dfb91","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105/index.html"},{"revision":"95283a8ddb17a9e08d3fe3e4a62ccfcd","url":"Edge/ODYSSEY/ODYSSEY_X86J4105/Projects/ODYSSEY-X86J4105-Frigate/index.html"},{"revision":"1aa592e80b5a23adb1b7c13350d5d0a0","url":"Edge/Quantum_Development_Board/wiki/index.html"},{"revision":"7aaff41b78035d185f295a33435c46ce","url":"Edge/reComputer/wiki/index.html"},{"revision":"5354385e2cf972fb86e32d03cd2dc504","url":"Edge/reServer/reServer_Getting_Started/index.html"},{"revision":"74b98b4326bdfa030c73d39c6216e9a3","url":"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack/index.html"},{"revision":"ce47518273233250fdd07d088d11f3b6","url":"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Getting_Started/index.html"},{"revision":"3945853ff70f6f017a1075390f34b8bd","url":"Edge/reServer/reServer_X86/reServer-Getting-Started/index.html"},{"revision":"329775d2324d3ab283ae7223cbea2f57","url":"Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers/index.html"},{"revision":"035b5252f18587f47cf521cff69a7fc7","url":"Edge/reTerminal/Home_Assistant/reTerminal_Home_Assistant/index.html"},{"revision":"5e1ef1c5bdb37b903229f7496b0c4736","url":"Edge/reTerminal/index.html"},{"revision":"fdb3bff69119708eaaa0949a5c4d0e94","url":"Edge/reTerminal/reTerminal_Getting_Started/index.html"},{"revision":"57f16f3f88fde7b74a533fdbd8c5cad3","url":"Edge/reTerminal/reTerminal-FAQ/index.html"},{"revision":"e0a3f000d93774ca0a04d526a0799415","url":"feature/index.html"},{"revision":"f7544567a0ac4f53680d6cc124357b50","url":"Getting_Started/index.html"},{"revision":"1c33e5fe3d10ac5ee8f5a4b4d7e5fa1e","url":"index.html"},{"revision":"39fb8122813c2f774b62a3c42a70b61a","url":"indexIAG/index.html"},{"revision":"3ebd295ff39237f9e130cf02a727eb4a","url":"License/index.html"},{"revision":"79f804235ff6deea41d8e64da034bc8d","url":"markdown-page/index.html"},{"revision":"bc5871f5babeba575be04797a684504e","url":"Network/LinkStar/Linkstar_Datasheet/index.html"},{"revision":"87c977b2b4e64d11e1aa0313955dd54b","url":"Network/LinkStar/linkstar-install-system/index.html"},{"revision":"fef7dc32f1448066c712323a4421d008","url":"Network/reRouter/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/index.html"},{"revision":"92bc2ed8d4779a94aafffb4933dc397c","url":"Network/reRouter/Raspberry-OpenWrt-Getting-Started/index.html"},{"revision":"ea1e5630e17a2226c68b0fb148e87112","url":"Network/SenseCAP/wiki/index.html"},{"revision":"bc1c06fb0431d02b19286e560cc5a09d","url":"reComputer_Jetson_Series_Hardware_Layout/index.html"},{"revision":"c475f1edd99efe7e2342571eebeee476","url":"search/index.html"},{"revision":"f669da8a4f497e1422ae8f2f53ee28e7","url":"Seeed_Elderly/Others_Product/index.html"},{"revision":"fbf1d32fd37308b4323c4cd00dc62967","url":"SenseCAP_Gateway/1/index.html"},{"revision":"2e58dd46fc1624bb1c7020c3391ce174","url":"SenseCAP_Probe_Accessories/Liquid_level_sensor/index.html"},{"revision":"b0cc6efb40a58cb6b2330e2ce9225f02","url":"SenseCAP_The_Sensor_Prototype_Kit/Contents/index.html"},{"revision":"510d9e1719ffbdc0ee8588d6a5372de9","url":"SenseCAP/SenseCAP_Getting_Started/index.html"},{"revision":"ddc7cd12113a0dcc799ef85c0370f158","url":"SenseCAP/SenseCAP_Introdution/index.html"},{"revision":"8a898f824ea5612e9ed20593daae783b","url":"SenseCAP/SenseCAP_LoRaWAN/index.html"},{"revision":"e8b0485f33848844837d61927c3551ea","url":"Sensor_Network/index.html"},{"revision":"2635534bbb0ad6d379aa901cb46217e8","url":"Sensor/Arch/wiki/index.html"},{"revision":"290ddc97602fba22e50db20bb11fd70f","url":"Sensor/Azure_Sphere_MT3620_Development_Kit/wiki/index.html"},{"revision":"7f30c8df55a85037f7ffb9356dab55f4","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-16-Channel_PWM_Driver-PCA9685/index.html"},{"revision":"c353d6c84c1850a2b736d70de261674d","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_Solid_State_Relay/index.html"},{"revision":"d6473e47bb7891b1d5b391b74d2caafe","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_SPDT_Relay/index.html"},{"revision":"5444f18ee0040d153f0285b1e67e5dfb","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_Solid_State_Relay/index.html"},{"revision":"316fd6db18113ebd03e4d0f64a9d071e","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_SPDT_Relay/index.html"},{"revision":"acbfb7ba2aa5ba2a1816b5b27e41774c","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-8-Channel_Solid_State_Relay/index.html"},{"revision":"8249cad55f3ff96adbd024a35c95769f","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-EL_Driver/index.html"},{"revision":"a48f89faae6bb97c546145b071d3ecc8","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor/index.html"},{"revision":"0c8c5ef5b166ba6099c746b33183d5fb","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.3/index.html"},{"revision":"e6fbf04ba55e90d6655c4ed300b1d034","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG/index.html"},{"revision":"bc5f6a87cf2bcbbf53bff45afe427989","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P/index.html"},{"revision":"641a8214fb48186ac1d877ab3b603db2","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter/index.html"},{"revision":"31f92c8491b044eadee1958141bd2b77","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0/index.html"},{"revision":"2fe5cb8ee7cc513eab40620d09baf7e5","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0/index.html"},{"revision":"93f13fd8fd7341897ad06b05de44f952","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3-v3/index.html"},{"revision":"9185e981686079a7d72ae0161e639a90","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Optocoupler_Relay-M281/index.html"},{"revision":"b1abc8c6686424efa17c76a41723b977","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer/index.html"},{"revision":"0bee79a36c4c6a5ea855dc8674670194","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0/index.html"},{"revision":"e77159246b6693b0cf386923872dcd5a","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player/index.html"},{"revision":"b613db972cf9cb944181d6aea6d55854","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Servo/index.html"},{"revision":"8abf299020df08e66c275493a3723c19","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay_V2/index.html"},{"revision":"dfac80ed094416f9c6dc8353c4948bfe","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay/index.html"},{"revision":"20ad8a832e515c376937f1afeb91ee3e","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker-Plus/index.html"},{"revision":"222e8b198c4155a64401c6e2af9560b5","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker/index.html"},{"revision":"905642eba23ac84ce5c713e21732398f","url":"Sensor/Grove/Grove_Accessories/Actuator/Grove-Vibration_Motor/index.html"},{"revision":"758db285e54c5614b45b07fe9c7f115d","url":"Sensor/Grove/Grove_Accessories/Current/Grove-10A_DC_Current_Sensor-ACS725/index.html"},{"revision":"fcbc369b807d7e55e54be3387d03d42e","url":"Sensor/Grove/Grove_Accessories/Current/Grove-2.5A-DC-Current-Sensor-ACS70331/index.html"},{"revision":"5417acab058be3ab6a8dd632ef392b43","url":"Sensor/Grove/Grove_Accessories/Current/Grove-5A_DC_AC_Current_Sensor-ACS70331/index.html"},{"revision":"be19a8045f0acd7335095c7d0ec0aaab","url":"Sensor/Grove/Grove_Accessories/Current/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/index.html"},{"revision":"5ca0ca03b73e120dfc3bd56890a9d95f","url":"Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor/index.html"},{"revision":"d96284d0a465e7ecf8584a636ebdd519","url":"Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET/index.html"},{"revision":"7f418d562c051ce4d0a084aa1b08bfad","url":"Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A/index.html"},{"revision":"9ed779b958c16e2b612c15ec4d531f95","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/index.html"},{"revision":"3dac44b9e38dd56edbc12756dc919204","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C_Hub/index.html"},{"revision":"ddfa9546d45166936dbb893a24fd21d8","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C-Hub-6Port/index.html"},{"revision":"3a3e87a43fe1637653a6fd36019f7ca7","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Mini_Camera/index.html"},{"revision":"60f3c74d98d48f87ca3f6b8abf492213","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-PS_2_Adapter/index.html"},{"revision":"885a5640d9908380e8a5b5eaafc04362","url":"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Qwiic-Hub/index.html"},{"revision":"390ffae0cf9f646e3cfefe366e350590","url":"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch/index.html"},{"revision":"2415e14657c9b771e7483ac0531ad063","url":"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Button/index.html"},{"revision":"a37fa0ff9f9d1baf189c2e39d255d0b1","url":"Sensor/Grove/Grove_Accessories/Time/Grove-RTC/index.html"},{"revision":"24b13d484813476e1090f9b8c823826a","url":"Sensor/Grove/Grove_Sensors_Network/Communication/GPS-Modules-Selection-Guide/index.html"},{"revision":"18acd4e068c65b333c4463773856bb3a","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_High_Precision_RTC/index.html"},{"revision":"2371932f68cecdb1b0797a277807a9df","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_LoRa_Radio/index.html"},{"revision":"bec7e92262141c16f2a374d8dddaf544","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC_Tag/index.html"},{"revision":"139ef5c5575e12026aab38fb57d5c6fe","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC/index.html"},{"revision":"a7a286d9edf72626c6c3193913c5416d","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-125KHz_RFID_Reader/index.html"},{"revision":"5b0935ebcf922d6d44991c985d954bc2","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-BLE_v1/index.html"},{"revision":"ad53164af5d3fd5121c72ce6a72a91bc","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS-Air530/index.html"},{"revision":"68b5cfd6d78e3ed1b8f1ab524776ff1b","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS/index.html"},{"revision":"5dc3c28b054aabcc8e6d329123039cf2","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver_v1.1/index.html"},{"revision":"531509d5051ce563ed6bfb39ee9d4afe","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver/index.html"},{"revision":"d1d565078c9d4155ab3b12b825e658e1","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Protoshield/index.html"},{"revision":"0d3f85bf0db4eea7f85fb09a82f9611c","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-RJ45_Adapter/index.html"},{"revision":"6b2bfb6129d170c5c72294c95b73c6ad","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Screw_Terminal/index.html"},{"revision":"faafeacbde689e3cc2b1261a99ce1a08","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Serial_RF_Pro/index.html"},{"revision":"020f1dc0ee2857eb5bbbba35590fbbec","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi_V2/index.html"},{"revision":"c27aeaa50f8c155cee9d4ce99d531953","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi/index.html"},{"revision":"363b3299b7198c3306cb4a1e0afca624","url":"Sensor/Grove/Grove_Sensors_Network/Communication/Sensor_communication/index.html"},{"revision":"ab25a976f9732ee25a3ec065b4fee19e","url":"Sensor/Grove/Grove_Sensors/All_in_one/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/index.html"},{"revision":"bc44f42c2dbd48f3aca978bc35985378","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Capacitive-Fingerprint-Sensor/index.html"},{"revision":"f510293e89be883a9560139243817a20","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor/index.html"},{"revision":"e72f9c66973f8caf35944e49c0266f57","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Ear-clip_Heart_Rate_Sensor/index.html"},{"revision":"8f7d2dfc3e410df05c57c2be0907994a","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/index.html"},{"revision":"95d11031b1cf1c5191768b4137e1df51","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor/index.html"},{"revision":"108c908dfcee5853e4d2ec591e2663ae","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor/index.html"},{"revision":"16f881983a0506b6ad3da2bda041e284","url":"Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor/index.html"},{"revision":"b64324dbde736c9840ee68c8766ce2c4","url":"Sensor/Grove/Grove_Sensors/Biometric/Sensor_biomedicine/index.html"},{"revision":"255f8b838a7f4ebf33300b703ef0ad6b","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor/index.html"},{"revision":"423f8d6cbdf39564b306f452133bfb42","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor/index.html"},{"revision":"6d21125733be5e8283d87199a21c4e32","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor/index.html"},{"revision":"07115ce5c651b7e09e463b817b08a78b","url":"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070/index.html"},{"revision":"2ee7301af8526cbc5a4b2ae1cae9677c","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Receiver/index.html"},{"revision":"ed27857f608e929e86e8317ecf552603","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Light_Sensor/index.html"},{"revision":"14cdcfaed7f3f788f238609930067cdd","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/index.html"},{"revision":"a3185c732a0954ce26f7e5720755201b","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder/index.html"},{"revision":"936652c54d15379dbe7130fd4b55b899","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor/index.html"},{"revision":"9032625b5253773f9a76dfd673b1d39c","url":"Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor/index.html"},{"revision":"af8abab9d1d8634926a4d8818c4c288f","url":"Sensor/Grove/Grove_Sensors/Light/Grove-UV_Sensor/index.html"},{"revision":"81fbd70bad1ce1df24f7d889451efb34","url":"Sensor/Grove/Grove_Sensors/Light/Sensor_light/index.html"},{"revision":"6d595957edbe19c2d9ae24a465e31a90","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-80cm_Infrared_Proximity_Sensor/index.html"},{"revision":"8c558032a172713ff2f6424168e0076f","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Adjustable_PIR_Motion_Sensor/index.html"},{"revision":"1764c8664035e740493a05443abcb0ae","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/index.html"},{"revision":"aae394509146558ab78db38f299c1d04","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar/index.html"},{"revision":"d9cd36e3ae063b4c4ccf6a0531f90208","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Gesture_v1.0/index.html"},{"revision":"9a35e8e6dca2bd2b3bface7172bdffd3","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2/index.html"},{"revision":"17d469fbefe034e4b8cfb88b8a6a5bec","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-TF_Mini_LiDAR/index.html"},{"revision":"cafd2c2e41fc0812d47cc5e2aa1476b9","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/index.html"},{"revision":"c221404aedbcd58e5dc90ac49b655d80","url":"Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Ranger/index.html"},{"revision":"0472ff350b217d1aa5fdcc984753f981","url":"Sensor/Grove/Grove_Sensors/Proximity/Sensor_distance/index.html"},{"revision":"32008198a76e7f443fce003db61d8369","url":"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant/index.html"},{"revision":"3ccb94e1dbbcf357823366d800b61a11","url":"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor/index.html"},{"revision":"290c0f46a7037cd359565eacacaab863","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone/index.html"},{"revision":"deb5749a3a3934bea97df7ad5ebbe76c","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor/index.html"},{"revision":"7dd8b0a63693802170d065b260b59a22","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder/index.html"},{"revision":"bb6bc359ba2e3af20155f4e2d561bdd0","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor/index.html"},{"revision":"4ffeddf1ba3cc9f197164ecfa66ed907","url":"Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer/index.html"},{"revision":"4fe7fd1d9ad87b12657a7c9e0849f010","url":"Sensor/Grove/Grove_Sensors/Sound/Sensor_sound/index.html"},{"revision":"13c6872d523fadc7f94211f5187f056d","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/index.html"},{"revision":"f3f1b08babbbac33fdfefe53bfcc66ef","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2_Temperature_Humidity_Sensor-SCD30/index.html"},{"revision":"74f92ea3d23f42e5bd5f3855042ffdb2","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2&Temperature&HumiditySensor-SCD41/index.html"},{"revision":"8e6df0aa45299b864a8bd0d6cff4dac4","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-I2C_High_Accuracy_Temp&Humi_Sensor-SHT35/index.html"},{"revision":"4333579536d6257e4d79068334d3789e","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x/index.html"},{"revision":"bbc8f3409f3b47b74830112e17f5ea68","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31/index.html"},{"revision":"9ede9ab81f09d461e8aaca938745ac67","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature_and_Humidity_Sensor_Pro/index.html"},{"revision":"f9ef48376bcb9bcd64e9c2c65afa82e8","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20/index.html"},{"revision":"4cffbb4c2fc575600f022a2ab9c9b6c7","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000/index.html"},{"revision":"521cbbf083b1b5e6864dd5581cb110d3","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor/index.html"},{"revision":"9dc7dc545651191dfe5d427565656585","url":"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/index.html"},{"revision":"1a9c5c7b015a90e8ca0c51c76aba42e0","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K/index.html"},{"revision":"98da82805f25f7f6f534b228a68a8b02","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor/index.html"},{"revision":"f1379cc3e40309f28e86adfcdc11aa96","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor/index.html"},{"revision":"41e8d0cbd5d73ac418d0bf373c634279","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/index.html"},{"revision":"43b14ad971ba42fcef7ccdce2cfe5831","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600/index.html"},{"revision":"1dd5a07ef1705c11e65239efecd17653","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833/index.html"},{"revision":"ccaa25fd40d0c18cbb9eb2636a8220c0","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor/index.html"},{"revision":"fa05d008e8cbb62453de88ebf3dd4276","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2/index.html"},{"revision":"66d82b89d6efc0d14efa29f831657ad8","url":"Sensor/Grove/Grove_Sensors/Temperature/Grove-Thermal-Imaging-Camera-IR-Array/index.html"},{"revision":"a7e32125d7a8d16d95d2c16565b89dde","url":"Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20/index.html"},{"revision":"9cf8a26d8b71259c44135293c4b643fb","url":"Sensor/IOT_Button_For_AWS/wiki/index.html"},{"revision":"b1baaf6c2ed82c2b17ec49d8ec222490","url":"Sensor/mmWave_radar_sensor/wiki/index.html"},{"revision":"292814b53f23c358b31b7ad604341feb","url":"Sensor/Pi_Pico/wiki/index.html"},{"revision":"a6b4efceacf101673008903fb5af0955","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started/index.html"},{"revision":"c7cb157555bf2aed01306dd92e17fbf0","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840/Application/XIAOEI/index.html"},{"revision":"34b8124b755a493293bff4ea63eb95f6","url":"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840/XIAOEI/index.html"},{"revision":"4523e357802e0ab0d18c2787c1fc2246","url":"Sensor/Seeeduino_Series/wiki/index.html"},{"revision":"67b08bff247eb34a16c5286e3edf4d2c","url":"Sensor/SenseCAP_Protocol/SenseCAP_The_Sensor_Prototype_Kit/K1100_Getting_Started/index.html"},{"revision":"4a16db85a01fca9bc279b34fcba1fc03","url":"Sensor/Wio_Series/Wio_Tracker/index.html"},{"revision":"99c4a158ac7007cf9889129ae65f7cdb","url":"Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT/index.html"},{"revision":"5eb60685e3f3a20e4c6bea1eb631ea49","url":"Sensor/Wio_Series/Wio_Tracker/wio_gps_board/index.html"},{"revision":"b426a7678f646450bbd59b6bdb5885bb","url":"Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat_M1_NB-IoT_Tracker/index.html"},{"revision":"7a943a9fd2f1636b18b46ac0ddfb634a","url":"Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat.1/index.html"},{"revision":"2623371d2c109ef86ea9b6da93f48376","url":"Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC/index.html"},{"revision":"be4ea03233fce37fc8d78197db2e471e","url":"Sensor/Wio_Series/Wio/Grove-Shield-for-Wio-Lite/index.html"},{"revision":"50425edbc8b4431dcc5091e5c547cc0a","url":"Sensor/Wio_Series/Wio/index.html"},{"revision":"bc9246ac796fdace66fc67a8f1d56eb8","url":"Sensor/Wio_Series/Wio/LAN_Communications/index.html"},{"revision":"4e425724ce30fb52e508b99284d37acd","url":"Sensor/Wio_Series/Wio/Use_MQTT_to_remotely_light_up_LED_lights/index.html"},{"revision":"21f2b4db0c04630d6999f2a0fbf15807","url":"Sensor/Wio_Series/Wio/Use_Socket_to_connect_to_the_forum/index.html"},{"revision":"84db4a73c3f99578ab64c1f262d2358c","url":"Sensor/Wio_Series/Wio/Wio_Link/index.html"},{"revision":"9b060b95ad3ef650e716c041c0651dcf","url":"Sensor/Wio_Series/Wio/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/index.html"},{"revision":"133dc900f2888573242bf03491512dd9","url":"Sensor/Wio_Series/Wio/Wio_Node/index.html"},{"revision":"f2be34916fc7268b99b51bb1fa05b722","url":"Sensor/Wio_Series/Wio/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/index.html"},{"revision":"3f86619d083b80d6b6333046fe61017b","url":"Sensor/Wio_Series/Wio/Wio_RP2040_Module_Build-in_Wireless_2.4G/index.html"},{"revision":"c49a6e4df00f94b95f6690cc9221ed2b","url":"Sensor/Wio_Series/Wio/Wio-Lite-MG126/index.html"},{"revision":"8993538246d56ac199aa0062e94480cb","url":"Sensor/Wio_Series/Wio/Wio-Lite-W600/index.html"},{"revision":"a253812b4564c75529f68844d784fa18","url":"Sensor/Wio_Series/Wio/Wio-RP2040-with-Arduino-WIFI/index.html"},{"revision":"618e780a54057a1e0ce2b91d5df0553e","url":"Sensor/Wio_Series/Wio/Wireless-desktop-atmosphere-lamp/index.html"},{"revision":"9dabf13c20344aa090c824921d3ff07f","url":"Sensor/Wio_Series/Wio/Wireless-Fall-Detection-Device/index.html"},{"revision":"4e7a5fc20f951356b0eb72683a27e2b8","url":"Sensor/Wio_Terminal/wiki/index.html"},{"revision":"81d83dc844ee00a3b01b76e80a329f11","url":"Solutions/index.html"},{"revision":"4831be0a2fc7c9226252b15d751c266b","url":"tags/demo/index.html"},{"revision":"008a8cd30157b1709087a43bfd42b257","url":"tags/docusaurus/index.html"},{"revision":"e486fba7dd94d354ec0173dceeee8807","url":"tags/getting-started/index.html"},{"revision":"de2a6cfef79bf43b47a1fff20577963d","url":"tags/hola/index.html"},{"revision":"5fa71fef14ab3db837aeb78032cd0086","url":"tags/home-assistant/index.html"},{"revision":"5d9ac8cdc011904b992f3e19db93d874","url":"tags/index.html"},{"revision":"e0ccc9fe5a02ce54db9e62aec3920c1d","url":"tags/link-star/index.html"},{"revision":"732cc12b014e712eb909e9264f3fc823","url":"tags/micro-bit/index.html"},{"revision":"5f3595443827cc44a3ffd79ad059f717","url":"tags/nvidia/index.html"},{"revision":"b9c6f84cd8ac079eef178b246e61eeb8","url":"tags/odyssey/index.html"},{"revision":"bce287d9138684d6d569431cdc4bc386","url":"tags/re-computer/index.html"},{"revision":"5e0128867dfcca453d8b28d8bd4f0b27","url":"tags/re-server/index.html"},{"revision":"da32bf8fb276dd6ffdda4fd034e3995b","url":"tags/tutorial/index.html"},{"revision":"ab7e415bedbe1707b8e383d49708fd8f","url":"TEMPLATE/index.html"},{"revision":"25358a599d496cdb397deb94d98975de","url":"Top_Brand/Arduino/shield/shield_Getting_Started/index.html"},{"revision":"6fcdcfa694a0b3f9ff48f6693f51b825","url":"Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit/index.html"},{"revision":"0faf1ff8dc9b738dfec2e04c2e1b6a9d","url":"Top_Brand/Micro_bit/microbit_wiki_page/index.html"},{"revision":"f1296a148d3542accf6fd8ab16a14d1f","url":"Top_Brand/NVIDIA/Drivers/J101_Enable_SD_Card/index.html"},{"revision":"ee109808b09066b9f44205865fc630bb","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson_Xavier_AGX_H01_Driver_Installation/index.html"},{"revision":"8d8cd804fe3148978cba13724dff3c1d","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson-Mate/index.html"},{"revision":"8d33c7e91911ee949971d52640c02df4","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203_Flash_System/index.html"},{"revision":"9e5cffadc3b87a264978f615052f21e8","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203E_Flash_System/index.html"},{"revision":"42c1c9a14eb606dd6b5e1d821b0ea044","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205_Flash_System/index.html"},{"revision":"677a9130ba4aaa0d5e2435c88b4021c2","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205E_Flash_System/index.html"},{"revision":"a4ce23d7b1bcc8b042dd14501c2b0656","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1010_J101_Flash_Jetpack/index.html"},{"revision":"31ffa7825f6bb7040f4beb2296be3723","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1020_A206_Flash_JetPack/index.html"},{"revision":"34bd9936e30732d01451c029fc233be7","url":"Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J2021_J202_Flash_Jetpack/index.html"},{"revision":"6f7b7de68364aef7f9bf49ce7348e6ce","url":"Top_Brand/NVIDIA/Getting_Start_Projects/DashCamNet-with-Jetson-Xavier-NX-Multicamera/index.html"},{"revision":"518d7dacc7bb076838308f20dd348df7","url":"Top_Brand/NVIDIA/Getting_Start_Projects/DeciAI-Getting-Started/index.html"},{"revision":"64a321ef96cbb23bd7f163be462c39be","url":"Top_Brand/NVIDIA/Getting_Start_Projects/HardHat/index.html"},{"revision":"8003cbf9d1903626b2ee610aae0748f3","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-AI-developer-tools/index.html"},{"revision":"22676fee4fc40080ad57a546f2f90643","url":"Top_Brand/NVIDIA/Getting_Start_Projects/jetson-docker-getting-started/index.html"},{"revision":"9ab54932ba763877bc4fed63189b7620","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-Nano-MaskCam/index.html"},{"revision":"2b0357ffe1478b4c5aca09979a5adf24","url":"Top_Brand/NVIDIA/Getting_Start_Projects/No-code-Edge-AI-Tool/index.html"},{"revision":"7e7e05620a6699c5b5c1853b76987de3","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Initiation/index.html"},{"revision":"415f96fc9df30ad0fb29e05d42fc320d","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Projects/index.html"},{"revision":"9f3e4947d9d0064652870381e6ee17cf","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Resource/index.html"},{"revision":"c1718610c3fd377d6c9c3b2be0e31bff","url":"Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Tutorials_Exercise/index.html"},{"revision":"f43334727fd77dbcf374f3340a2515d6","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Security_Scan/index.html"},{"revision":"35a3f1921490d3bfaaa7510faa84f975","url":"Top_Brand/NVIDIA/Getting_Start_Projects/Traffic-Management-DeepStream-SDK/index.html"},{"revision":"7b02e6cb9e69ae553fd21471d316c9a8","url":"Top_Brand/NVIDIA/Getting_Start_Projects/YOLOv5-Object-Detection-Jetson/index.html"},{"revision":"a16a922a2a78f0e91f7b6b3fc82b73e9","url":"Top_Brand/NVIDIA/NVIDIA_Getting_Started/index.html"},{"revision":"04ab6c425b2a11ce81df36de296ad618","url":"Top_Brand/NVIDIA/NVIDIA_Orin_series/Mini_AI_Computer_T906/index.html"},{"revision":"b5884fbcc18889e27a5aea1a5358e020","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_GPIO_Grove/index.html"},{"revision":"7cdf43f39e64a3d15ff88241f822eb66","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_Hardware_Layout/index.html"},{"revision":"4f5650400f5cab63661e753102c30800","url":"Top_Brand/NVIDIA/reComputer_Jetson_Series_Introduction/index.html"},{"revision":"d880a7eb519bfd23a11ca7c5575c525f","url":"Top_Brand/NVIDIA/Usefull_Tools/J1010_Boot_From_SD_Card/index.html"},{"revision":"d22b05bfd71362a56ce1c460871f4973","url":"Top_Brand/NVIDIA/Usefull_Tools/reComputer_Jetson_Memory_Expansion/index.html"},{"revision":"06fa49fb04625020082c1b6662ffbb26","url":"Top_Brand/Raspberry_Pi/index.html"},{"revision":"01e055dcc62073cfe8c8606b87a38499","url":"Top_Brand/Raspberry_Pi/Pi_HAT/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/index.html"},{"revision":"4a0b3260e9b637ee2fb8c5bdfa062f55","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi_Zero/index.html"},{"revision":"d6cafec5ddea9950182538a2336b1647","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi/index.html"},{"revision":"ee7b3c6744bff6a269c9d2c835a80482","url":"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_HAT/index.html"},{"revision":"a19453e8596ee6595591815c21b8fcec","url":"Top_Brand/Raspberry_Pi/Pi_HAT/GrovePi_Plus/index.html"},{"revision":"c511c4c9e4bca7068155b20aeeddc103","url":"weekly_wiki/index.html"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"assets/files/docusaurus-e8e4adf44ac06f25e961f7a71a6d0f90.png"},{"revision":"192a6a160f31b1689a4c6233bdbbb803","url":"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}];
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