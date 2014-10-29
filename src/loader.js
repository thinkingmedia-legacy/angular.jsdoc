/**
 * @name ajsdoc.Module
 */
ajsdoc.Module = function()
{
    this.module = function(name,requires,configFn)
    {
    };

    this.provide = function(name, providerType)
    {
    };

    this.factory = function(name, providerFunction)
    {
    };

    this.service = function(name, constructor)
    {
    };

    this.value = function(name, obj)
    {
    };

    this.constant = function(name, obj)
    {
    };

    this.animation = function(name, aniFactory)
    {
    };

    this.filter = function(name, filterFactory)
    {
    };

    /**
     * @param {string} name
     * @param {Array|function} constructor
     * @see angular.Module#controller
     */
    this.controller = function(name, constructor)
    {
    };

    this.directive = function(name, dirFactory)
    {
    };

    this.config = function(configFn)
    {
    };

    this.run = function(initFn)
    {
    };

    /**
     * @type {Array.<string>}
     */
    this.requires = [];

    /**
     * @type {string}
     */
    this.name = '';
};