/**
 * @function
 * @param {string} selector
 * @returns {ajsdoc.jqLite}
 */
ajsdoc.element = function(selector)
{
 return angular.element(selector);
};

/**
 * @class ajsdoc.jqLite
 */
ajsdoc.jqLite = {
 /**
  * @param {string} html
  * @return {ajsdoc.jqLite}
  */
 append: function(html) {}
};
