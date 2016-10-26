// create module for the application
var app = angular.module('myapp', []);

// directive shows image tooltip
/*app.directive('imgLoader',
  function() {
    return {
      restrict: 'E',
      template: '<a href="#" class="tooltip1">Click here <span class="tooltip-holder"><span id="cross-icon"><img src="cross.png"></img></span><img class="callout" src="callout.gif"><img src="image.png"></span></a>',
      link: function postLink(scope, elem, attr) {
        console.log('inside post link'); 

        // to bind click event for component
        elem.bind('click', function(e) {
          $('.tooltip-holder').css('display', 'block');
        });

        // to hide image tooltip when cross icon clicked
        $('#cross-icon').on('click', function(event) {
          event.stopPropagation();
         console.log('inside close icon');
          $('.tooltip-holder').css('display', 'none');
        });

      }
    };
  }); */

app.directive('imgLoader',
  function() {
    return {
      restrict: 'E',

      template: '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>',

      link: function postLink(scope, elem, attr) {
        console.log('inside post link'); 
        this.element = elem;
        // append modal
        elem.bind('click', function(e) {
          console.log('inside click');
          var modal= angular.element('<div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the modal.</p></div></div></div></div>');
          elem.append(modal);

          $('.close').on('click',function (e) {
             e.stopPropagation();
             console.log('inside close');
		var ele = angular.element(document.querySelector('.modal'));
                var backdrop = angular.element(document.querySelector('.modal-backdrop'));
		ele.remove();
                backdrop.remove();
          });
        });
      }
    };
  });

