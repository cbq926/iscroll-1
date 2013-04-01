var IScroll = function (el, options) {
  var utils = IScroll.utils;

  this.wrapper = $(el).get(0);
  this.enabled = true;
  utils.addEvent(window, 'orientationchange', this);
  utils.addEvent(window, 'resize', this);
  utils.addEvent(this.wrapper, utils.events.START, this);
  this.reset(options);
};