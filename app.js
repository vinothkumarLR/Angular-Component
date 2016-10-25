// create module for the application
var app = angular.module('myapp', []);

// directive shows image tooltip
app.directive('imgLoader',
		function() {
			return {
				restrict : 'E',
				template : '<a href="#" class="tooltip">Click here <span class="tooltip-holder"><span id="cross-icon"><img src="cross.png"></img></span><img class="callout" src="callout.gif"><img src="image.png"></span></a>',
				link : function postLink(scope, elem, attr) {
					
					// to bind click event for component
					elem.bind('click', function(e) {
					   $('.tooltip-holder').css('display', 'block');
					});
					
					// to hide image tooltip when cross icon clicked
					$('#cross-icon').on('click', function (event) {
						event.stopPropagation();
						$('.tooltip-holder').css('display', 'none');
					});
					
				}
			};
		});

