/**
 * @class ajsdoc.Attributes
 * @alias ajsdoc.$attr
 * @see $compile.directive.Attributes
 * @constructor
 */
ajsdoc.Attributes = function()
{
    /**
     * @param {string} classVal The className value that will be added to the element
     */
    this.$addClass  = function(classVal) {
    };

    /**
     * @param {string} classVal The className value that will be removed from the element
     */
    this.$removeClass = function(classVal) {
    };

    /**
     * @param {string} newClasses The current CSS className value
     * @param {string} oldClasses The former CSS className value
     */
    this.$updateClass = function(newClasses, oldClasses)
    {
    };

    /**
     * @param {string} key Normalized key. (ie ngAttribute)
     * @param {string|boolean} value The value to set. If `null` attribute will be deleted.
     * @param {boolean=} writeAttr If false, does not write the value to DOM element attribute.
     * @param {string=} attrName Optional none normalized name. Defaults to key.
     */
    this.$set = function(key, value, writeAttr, attrName)
    {
    };

    /**
     * @param {string} key Normalized key. (ie ngAttribute) .
     * @param {function(*)} fn Function that will be called whenever the interpolated value of the attribute changes.
     * @returns {function()} the `fn` parameter.
     */
    this.$observe = function(key, fn)
    {
    };

    /**
     * @param {string} name
     * @return {string}
     * @see directiveNormalize
     */
    this.$normalize = function(name)
    {
    }
};