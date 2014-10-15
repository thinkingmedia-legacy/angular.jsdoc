/**
 * @typedef {function(string,string,ajsdoc.Scope)} ajsdoc.Scope.watchCollectionListener
 */

/**
 * @class ajsdoc.Scope
 * @alias ajsdoc.rootScope
 * @alias ajsdoc.$rootScope
 * @alias ajsdoc.$scope
 *
 * @see $rootScope.Scope
 * @constructor
 */
ajsdoc.Scope = function()
{
	/**
	 * @param {boolean} isolate
	 * @returns {ajsdoc.Scope}
	 * @see $rootScope.Scope#$new
	 */
	this.$new = function(isolate)
	{
	};

	/**
	 * @param {(function()|string)} watchExp
	 * @param {(function()|string)=} listener
	 * @param {boolean=} objectEquality
	 * @returns {function()}
     * @see $rootScope.Scope#$watch
	 */
	this.$watch = function(watchExp, listener, objectEquality)
	{
	};

    /**
     * @param {string|function(ajsdoc.Scope)} obj
     * @param {ajsdoc.Scope.watchCollectionListener} listener
     * @returns {function()}
     * @see $rootScope.Scope#$watchCollection
     */
    this.$watchCollection = function(obj, listener)
    {
    };

    /**
     * @see $rootScope.Scope#$digest
     */
    this.$digest = function() {};

    /**
     *
     * @see $rootScope.Scope#$destroy
     */
    this.$destroy = function() {};

    /**
     * @param {(string|function())=} expr
     * @param {(object)=} locals
     * @returns {*}
     * @see $rootScope.Scope#$eval
     */
    this.$eval = function(expr, locals)
    {
    };

    /**
     * @param {(string|function())=} expr
     * @see $rootScope.Scope#$evalAsync
     */
    this.$evalAsync = function(expr)
    {
    };

    /**
     * @param {(string|function())=} expr
     * @returns {*}
     * @see $rootScope.Scope#$apply
     */
    this.$apply = function(expr)
    {
    };

    /**
     *
     * @param {string} name
     * @param {function(ajsdoc.event, ...args)} listener
     * @returns {function()}
     * @see $rootScope.Scope#$on
     */
    this.$on = function(name, listener)
    {
    };

    /**
     * @param {string} name
     * @param {...*} args
     * @returns {ajsdoc.event}
     * @see $rootScope.Scope#$emit
     */
    this.$emit = function(name, args)
    {
    };

    /**
     * @param {string} name
     * @param {...*} args
     * @returns {ajsdoc.event}
     * @see $rootScope.Scope#$broadcast
     */
    this.$broadcast = function(name, args)
    {
    };
};