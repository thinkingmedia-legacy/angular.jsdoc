/**
 * @typedef {function(data, headersGetter)|Array.<function(data, headersGetter)>} ajsdoc.$http.TransformFunc
 */

/**
 * @name ajsdoc.$http.Config
 *
 * @property {string} method
 * @property {string} url
 * @property {Object.<string|Object>} params
 * @property {Object} data
 * @property {Object} headers
 * @property {string} xsrfHeaderName
 * @property {string} xsrfCookieName
 * @property {ajsdoc.$http.TransformFunc} transformRequest
 * @property {ajsdoc.$http.TransformFunc} transformResponse
 * @property {boolean|ajsdoc.$cache} cache
 * @property {number|ajsdoc.Promise} timeout
 * @property {boolean} withCredentials
 * @property {string} responseType
 */

/**
 * @param {ajsdoc.$http.Config} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http = function(config)
{

};

/**
 * @param {string} url
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.get = function(url,config)
{

};

/**
 * @name ajsdoc.$http#delete
 * @param {string} url
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype['delete'] = function(url,config)
{

};

/**
 * @param {string} url
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.head = function(url,config)
{

};

/**
 * @param {string} url
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.jsonp = function(url,config)
{

};

/**
 * @param {string} url
 * @param {Object} data
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.post = function(url,data,config)
{

};

/**
 * @param {string} url
 * @param {Object} data
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.put = function(url,data,config)
{

};

/**
 * @param {string} url
 * @param {Object} data
 * @param {ajsdoc.$http.Config=} config
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$http.prototype.patch = function(url,data,config)
{

};