var React = require('react');
var DropDown = require('./dropdown');

var options = {
	title: 'Choose a desert', // Waht should show up on the burron to open/close the dropdown
	items: [ // List of items to show in the dopdown
		'Apple pie',
		'Peach cobbler',
		'coconut cream pie'
	]
}


var element = React.createElement(DropDown, options);
React.render(element, document.querySelector('.container'));
