/**
 * @namespace ajsdoc
 */

/**
 * @typedef {function(ajsdoc.Scope,ajsdoc.jqLite,ajsdoc.Attributes)} ajsdoc.Directive.Link
 */

/**
 * @typedef {function(ajsdoc.Scope,ajsdoc.jqLite,ajsdoc.Attributes)} ajsdoc.Directive.Controller
 */

/**
 * @typedef {{
 *  require: (string|string[]),
 *  restrict: string,
 *  controller: ajsdoc.Directive.Controller,
 *  controllerAs: string,
 *  link: ajsdoc.Directive.Link,
 *  templateUrl: (string|function()),
 *  compile: function(ajsdoc.jqLite,ajsdoc.Attributes)
 * }} ajsdoc.Directive
 **/