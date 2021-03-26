
$(document).ready(function boxCreation(){
	
	var numberofBoxes = 100;
	
	var boxColoursAvailable = ['581845', '900c3f', 'c70039', 'ff5733', 'ffc30f'];
	
	
	for (var x = 0; x < numberofBoxes; x ++) {

  		var div2 = $("<div class='child_div' style='height: 40px; width: 40px; position: absolute ;'></div>");
  		var t = (Math.random() * 400) + "px";
  	 	var l = (Math.random() * 400 )+ "px";


		div2.css(
		{
	   		"top": t,
	   		"left": l});

	a = Math.floor(boxColoursAvailable.length * Math.random());
	
	var boxColour =  boxColoursAvailable[a] ;
	
	$(div2).css('background-color', boxColour); 
	
	$("#container").append(div2);

}

	$(".child_div").mouseover(function(){
		
		// When our element (box) does not have any more siblings, meaning that it is the last one, the alert "last child!" will pop up
		if ($(this).is(':only-child')){
			window.alert("last child!");}

		//When the mouse moves over a box, the box ix removed 
		$(this).remove(); });

	
	$("#clickButton").click(function(){
    boxCreation();	});


});