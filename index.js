'use strict';

var html = require('html-me');

module.exports = test;

test.mark = mark;
test.toggle = toggle;

function test( w /* window */ ){
	return w && (w.ontouchstart || w.DocumentTouch && w.document instanceof DocumentTouch);
}

function mark( w /* window */ ){
	toggle(w.document.documentElement, test(w));
}

function toggle( $element, areWeTouchy ){
	if (areWeTouchy) {
		html.removeClass($element, 'no-touch');
		html.addClass($element, 'touch');
	} else {
		html.addClass($element, 'no-touch');
		html.removeClass($element, 'touch');
	}
}
