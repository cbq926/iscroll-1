IScroll.prototype.reset = function (options) {
  var utils = IScroll.utils, events = utils.events;

  if (this.scroller) {
    utils.removeEvent(this.scroller, events.TRANSITIONEND, this);
  }

  this.options = $.extend({}, utils.options, options);

  this.scroller = $(this.options.scroller, this.wrapper).get(0);
  this.scrollerStyle = this.scroller.style;		// cache style for better performance

  // Normalize options
  //if (!this.options.HWCompositing) {
    //utils.style.translateZ = '';
  //}

  // default easing
  if (support.transition) {
    this.scrollerStyle[utils.style.transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';
  }
  this.refresh();
  this.scrollTo(this.options.startX, this.options.startY, 0);

  utils.addEvent(this.scroller, events.TRANSITIONEND, this);
};