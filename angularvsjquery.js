<div rotate-on-click="45"></div>

//jQuery


function rotate(deg, elem) {
  $(elem).css({
    webkitTransform: 'rotate('+deg+'deg)', 
    mozTransform: 'rotate('+deg+'deg)', 
    msTransform: 'rotate('+deg+'deg)', 
    oTransform: 'rotate('+deg+'deg)', 
    transform: 'rotate('+deg+'deg)'    
  });
}

function addRotateOnClick($elems) {
  $elems.each(function(i, elem) {
    var deg = 0;
    $(elem).click(function() {
      deg+= parseInt($(this).attr('rotate-on-click'), 10);
      rotate(deg, this);
    });
  });
}

addRotateOnClick($('[rotate-on-click]'));


//Angular

app.directive('rotateOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var deg = 0;
      element.bind('click', function() {
        deg+= parseInt(attrs.rotateOnClick, 10);
        element.css({
          webkitTransform: 'rotate('+deg+'deg)', 
          mozTransform: 'rotate('+deg+'deg)', 
          msTransform: 'rotate('+deg+'deg)', 
          oTransform: 'rotate('+deg+'deg)', 
          transform: 'rotate('+deg+'deg)'    
        });
      });
    }
  };
});