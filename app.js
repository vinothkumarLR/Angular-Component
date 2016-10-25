var app = angular.module('myapp', []);

app.directive('donut',
		function() {
			return {
				restrict : 'E',
				template : '<a href="#" style="position:absolute;top:150px"> Click Here </a>',
				controller : function($scope) {
					console.log("inside controller");
				},
				link : function postLink(scope, iElement, iAttrs) {
					console.log("inside post link");
				}
			};
		});
