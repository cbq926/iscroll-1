
iScroll.prototype._initEvents = function (remove) {
	var eventType = remove ? utils.removeEvent : utils.addEvent,
		target = this.options.bindToWrapper ? this.wrapper : window;

	eventType(window, 'orientationchange', this);
	eventType(window, 'resize', this);

	eventType(this.wrapper, 'mousedown', this);
	eventType(target, 'mousemove', this);
	eventType(target, 'mousecancel', this);
	eventType(target, 'mouseup', this);

	if ( utils.hasPointer ) {
		eventType(this.wrapper, 'MSPointerDown', this);
		eventType(target, 'MSPointerMove', this);
		eventType(target, 'MSPointerCancel', this);
		eventType(target, 'MSPointerUp', this);
	}

	if ( utils.hasTouch ) {
		eventType(this.wrapper, 'touchstart', this);
		eventType(target, 'touchmove', this);
		eventType(target, 'touchcancel', this);
		eventType(target, 'touchend', this);
	}

	eventType(this.scroller, 'transitionend', this);
	eventType(this.scroller, 'webkitTransitionEnd', this);
	eventType(this.scroller, 'oTransitionEnd', this);
	eventType(this.scroller, 'MSTransitionEnd', this);
};
