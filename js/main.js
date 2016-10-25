 function updatePerpective(value)
    {
      document.getElementById('container').style.webkitPerspective = value;
    }

    function setPerspectiveOrigin(event)
    {
      var container = document.getElementById('container');

      var offsetX = event.pageX - container.offsetLeft;
      var offsetY = event.pageY - container.offsetTop;
      
      var originStyle = (100 * offsetX / container.offsetWidth) + '% ' + (100 * offsetY / container.offsetHeight) + '%';
      container.style.webkitPerspectiveOrigin = originStyle;
    }

    window.addEventListener('load', function() {
      var container = document.getElementById('container');
      container.addEventListener('mousemove', setPerspectiveOrigin, false);
      container.addEventListener('mouseout', function() {
        container.style.webkitPerspectiveOrigin = '50% 50%';
      }, false);
      updatePerpective(500)
    }, false);




 /*var setPerspectiveOrigin = function(event){
      var container =$(".scene") ;
      var offsetX = event.pageX - container.offsetLeft;
      var offsetY = event.pageY - container.offsetTop;
       var originStyle = (100 * offsetX / container.offsetWidth) + '% ' + (100 * offsetY / container.offsetHeight) + '%';
       container.style.webkitPerspectiveOrigin = originStyle;
    }


$(document).ready(function() {
	$(".scene").mousemove(setPerspectiveOrigin);	
    $(".scene").mouseout(function(){
      $( this ).addClass("style");
    })	
    updatePerpective(500);	
});
function updatePerpective(value)
    {
    	$(".scene").style.webkitPerspective = value;
    }*/
/*$(document).ready(function() {
	 var i=0;
	$(".scene").mouseover(function(){
	   i += 1;
      $( this ).addClass("style");
    })	
    $(".scene").mouseout(function(){
	   i += 1;
      $( this ).remove("style");
    })		
});*/
