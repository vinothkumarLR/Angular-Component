var app = angular.module('myapp', []);

app.directive('imgLoader',
		function() {
			return {
				restrict : 'E',
				template : '<a href="#" class="tooltip">Click here <span class="tooltip-holder"><span id="cross-icon"><img src="cross.png"></img></span><img class="callout" src="callout.gif"><img src="image.png"></span></a>',
				controller : function($scope) {
					console.log("inside controller");
				},
				link : function postLink(scope, iElement, iAttrs) {
					console.log("inside post link");
				}
			};
		});
