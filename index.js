'use strict';

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
	$element.classList.remove(areWeTouchy ? 'no-touch' : 'touch');
	$element.classList.add(areWeTouchy ? 'touch' : 'no-touch');
}
