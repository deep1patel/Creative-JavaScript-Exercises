$(document).ready(function generate(){
	var top, left, n, c;
	var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
	n = 100;
	for (var i = 0; i < n; i++) {

  	var newdiv = $("<div class='child_div' style='width: 50px; height: 50px; position: absolute ;'></div>");
  	 top = (Math.random() * 400) + "px";
  	 left = (Math.random() * 400 )+ "px";


	newdiv.css({
	    "top": top,
	    "left": left
	});

	c= Math.floor(Math.random() * colors.length);
	var chosen_c=  colors[c] ;
	$(newdiv).css('background-color', chosen_c ); //getRandomColor);
	$("#container").append(newdiv);

}

	$(".child_div").mouseover(function(){
		if ($(this).is(':only-child')){
			alert("Last One!");
		}
		$(this).remove();
	});

	$("#btn1").click(function(){
    generate();
  	});



});