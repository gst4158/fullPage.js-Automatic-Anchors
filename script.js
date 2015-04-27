	//SET UP: get all targeted elements and create an array from their ID's
	// 		  Used in conjunction with fullPage.js
	//-------------------------------------------------------------------//
	// get element ID's
	var ids = $('.section').map(function(){ return this.id; }).get();	// get all elements
	var ids = ids.toString(); 					// convert to string to do stuff to it
	
	// Anchor tag friendly
	var anchors = ids.replace(/-|\s/g,""); 		// remove white spaces and dashes <- fullPage.js doesn't like dashes
	var anchors = anchors.split(','); 			// return ID's to array
	
	// User tooltip friendly
	var toolTip = ids.replace(/-|\s/g," "); 	// change dashes and white space into a space
	var	toolTip = toolTip.toLowerCase().replace(/\b[a-z]/g, function(toolTip) { return toolTip.toUpperCase(); }); // Uppercase the first character of each word in a string ( similar to php's ucwords() )
	var toolTip = toolTip.split(',');			// return ID's to array
	
		//FULL PAGE FUNCTION: activates fullPage.js with options
	//-------------------------------------------------------------------//
	$('#content').fullpage({
		anchors: anchors, // created previously
		menu: '#menu',
		navigation: true,
		navigationTooltips: toolTip, // created previously
		showActiveTooltip: true,
		navigationPosition: 'left',
		animateAnchor: false,
	});
