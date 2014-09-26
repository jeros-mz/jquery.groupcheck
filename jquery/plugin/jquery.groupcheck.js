;
/*	
 *	jQuery groupcheck 0.0.1
 *	
 *	Copyright (c) 2014 MZ jeros
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 * @name : groupcheck
 * @version : 0.5
 * @param : {Function} parent
 * @param : {String} checkboxes selector
 * @return : {jQuery Object} root checkbox
 * @use :
 * $(..).groupcheck({
 * 		parent : function(){...},
 * 		selector : '...'
 * });
 * 
 */
(function ($) {
	$.fn.groupcheck = function (options) {
		var _$this = this;
		if(_$this.length == 0) return;
		var $parent = options.parent.call(this),
			$elements = $parent.find(options.selector),
			checkPermission = options.checkPermission || $elements.length;
		
		//elements click
		$parent.off('click', options.selector).on('click', options.selector, elementsHandler);
		
		function elementsHandler (){
//			$elements = $parent.find(options.selector);
//			checkPermission = options.checkPermission || $elements.length;
			var checkLength = $elements.filter('input:checked').length;

//			log('elements click');
			
			_$this.prop('checked', checkPermission === checkLength);
			if(checkPermission === checkLength){
				$elements.filter('input:not(:checked)').prop('disabled', true);
			} else {
				$elements.filter('input:not(:checked)').prop('disabled', false);
			}
		};
		
		if(checkPermission < $elements.length){
			//_$this.remove();
		} else {
			function groupHandler (){
//				log('group click');
//				$elements = $parent.find(options.selector);
				$elements.filter(':visible').prop('checked', this.checked);
			};
			
			_$this.off('click').prop('checked', false).on('click', groupHandler);
		}
		return this;
	};
})(jQuery);