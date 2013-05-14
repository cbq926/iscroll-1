
iScroll.prototype._initEvents = function (remove) {
	var eventType = remove ? utils.removeEvent : utils.addEvent,
		target = this.options.bindToWrapper ? this.wrapper : window;

	eventType(window, 'orientationchange', this);

	eventType(this.wrapper, 'touchstart', this);
	eventType(target, 'touchmove', this);
	eventType(target, 'touchcancel', this);
	eventType(target, 'touchend', this);

	if ( this.options.debug ) {
		eventType(this.wrapper, 'mousedown', this);
		eventType(target, 'mousemove', this);
		eventType(target, 'mousecancel', this);
		eventType(target, 'mouseup', this);
	}

	eventType(this.scroller, 'transitionend', this);
	eventType(this.scroller, 'webkitTransitionEnd', this);
};
