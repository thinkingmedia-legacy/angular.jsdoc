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
 * @name ajsdoc.jqLite.Coords
 * @property {number} top
 * @property {number} left
 */

/**
 * @class ajsdoc.jqLite
 */
ajsdoc.jqLite = {
	/**
	 * @param {string,function(number,string)} value
	 * @returns {ajsdoc.jqLite}
	 */
	addClass:    function(value)
	{
	},
	/**
	 *
	 * @param {string|Object} name
	 * @param {string|function(number,string):string=} value
	 * @returns {string}
	 */
	attr:        function(name, value)
	{
	},
	/**
	 * @param {string} name
	 * @returns {boolean}
	 */
	hasClass:    function(name)
	{
	},
	/**
	 * @param {string|function(number,string)=} html
	 * @returns {string}
	 */
	html:        function(html)
	{
	},
	/**
	 * @param {string} name
	 * @param {*=} value
	 * @returns {string}
	 */
	prop:        function(name, value)
	{
	},
	/**
	 * @param {string} name
	 * @returns {ajsdoc.jqLite}
	 */
	removeAttr:  function(name)
	{
	},
	/**
	 * @param {string,function(number,string)} name
	 * @returns {ajsdoc.jqLite}
	 */
	removeClass: function(name)
	{
	},
	/**
	 * @param {string} name
	 * @returns {ajsdoc.jqLite}
	 */
	removeProp:  function(name)
	{
	},
	/**
	 * @param {string|boolean|function(number,string,boolean):string=} name
	 * @param {boolean=} value
	 * @returns {ajsdoc.jqLite}
	 */
	toggleClass: function(name, value)
	{
	},
	/**
	 *
	 * @param {string|Array|function(number,string):string=} value
	 * @return {ajsdoc.jqLite|string|number|Array}
	 */
	val:         function(value)
	{
	},
	/**
	 * @param {string} html
	 * @return {ajsdoc.jqLite}
	 */
	append:      function(html)
	{
		return this;
	},

	/**
	 * @param {Object} opts
	 * @returns {ajsdoc.jqLite}
	 */
	css: function(opts)
	{
		return this;
	},

	/**
	 * @param {boolean=} margin
	 * @returns {number}
	 */
	outerWidth: function(margin)
	{
		return 0;
	},

	/**
	 * @param {boolean=} margin
	 * @returns {number}
	 */
	outerHeight: function(margin)
	{
		return 0;
	},

	/**
	 * @param {number|function()=} value
	 * @returns {number}
	 */
	height:       function(value)
	{
		return 0;
	},
	/**
	 * @param {number|function()=} value
	 * @returns {number}
	 */
	width:        function(value)
	{
		return 0;
	},
	/**
	 * @param {number|function()=} value
	 * @returns {number}
	 */
	innerWidth:   function(value)
	{
		return 0;
	},
	/**
	 * @param {number|function()=} value
	 * @returns {number}
	 */
	innerHeight:  function(value)
	{
		return 0;
	},
	/**
	 *
	 * @param {ajsdoc.jqLite.Coords|function(number,ajsdoc.jqLite.Coords)=} value
	 * @returns {ajsdoc.jqLite.Coords}
	 */
	offset:       function(value)
	{
		return new ajsdoc.jqLite.Coords(0, 0);
	},
	/**
	 * @returns {ajsdoc.jqLite.Coords}
	 */
	position:     function()
	{
		return new ajsdoc.jqLite.Coords(0, 0);
	},
	/**
	 * @param {number=} value
	 * @returns {number}
	 */
	scrollLeft:   function(value)
	{
	},
	/**
	 * @param {number=} value
	 * @returns {number}
	 */
	scrollRight:  function(value)
	{
	},
	/**
	 * @returns {ajsdoc.Scope}
	 */
	scope:        function()
	{
	},
	/**
	 * @returns {ajsdoc.Scope}
	 */
	isolateScope: function()
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	children: function(selector)
	{
	},
	/**
	 * @param {string|ajsdoc.jqLite|HTMLElement} selector
	 * @param {ajsdoc.jqLite|HTMLElement=} context
	 * @returns {ajsdoc.jqLite}
	 */
	closest: function(selector,context)
	{
	},
	/**
	 * @param {string|ajsdoc.jqLite|HTMLElement} selector
	 * @returns {ajsdoc.jqLite}
	 */
	find: function(selector)
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	next: function(selector)
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	nextAll: function(selector)
	{
	},
	/**
	 * @param {string|ajsdoc.jqLite|HTMLElement} selector
	 * @param {string=} filter
	 * @returns {ajsdoc.jqLite}
	 */
	nextUntil: function(selector,filter)
	{
	},
	/**
	 * @returns {ajsdoc.jqLite}
	 */
	offsetParent: function()
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	parent: function(selector)
	{
	},
	/**
	 * @param {string=} selector
	 * @returns {ajsdoc.jqLite}
	 */
	parents: function(selector)
	{
	},
	/**
	 * @param {string|ajsdoc.jqLite|HTMLElement} selector
	 * @param {string=} filter
	 * @returns {ajsdoc.jqLite}
	 */
	parentsUtil: function(selector,filter)
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	prev: function(selector)
	{
	},
	/**
	 * @param {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	prevAll: function(selector)
	{
	},
	/**
	 * @param {string|ajsdoc.jqLite|HTMLElement} selector
	 * @param {string=} filter
	 * @returns {ajsdoc.jqLite}
	 */
	prevUtil: function(selector,filter)
	{
	},
	/**
	 * @params {string} selector
	 * @returns {ajsdoc.jqLite}
	 */
	siblings: function(selector)
	{
	},
	/**
	 * @param {number|string|Object=} duration
	 * @param {string|function()=} easing
	 * @param {function()=} complete
	 * @returns {ajsdoc.jqLite}
	 */
	hide: function(duration,easing,complete)
	{
	},
	/**
	 * @param {number|string|Object=} duration
	 * @param {string|function()=} easing
	 * @param {function()=} complete
	 * @returns {ajsdoc.jqLite}
	 */
	show: function(duration,easing,complete)
	{
	},
	/**
	 * @param {boolean|number|string|Object=} duration
	 * @param {string|function()=} easing
	 * @param {function()=} complete
	 * @returns {ajsdoc.jqLite}
	 */
	toggle: function(duration,easing,complete)
	{
	}
};
