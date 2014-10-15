/**
 * @name ajsdoc.Deferred
 * @class
 * @property {function(*)} resolve
 * @property {function(*)} reject
 * @property {function(*)} notify
 * @property {ajsdoc.Promise} promise
 */

/**
 * @name ajsdoc.Promise
 * @class
 * @property {function(function(*),function(*)=,function(*)=)} then
 * @property {function(function(*))} catch
 * @property {function(function())} finally
 */

/**
 * @param {function(function(*),function(*))} resolver
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$q = function(resolver)
{

};

/**
 * @returns {ajsdoc.Deferred}
 */
ajsdoc.$q.prototype.defer = function()
{

};

/**
 * @param {*} reason
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$q.prototype.reject = function(reason)
{

};

/**
 * @param {*} reason
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$q.prototype.when = function(reason)
{

};

/**
 * @param {Array.<ajsdoc.Promise>|Object.<ajsdoc.Promise>} reason
 * @returns {ajsdoc.Promise}
 */
ajsdoc.$q.prototype.all = function(reason)
{

};
