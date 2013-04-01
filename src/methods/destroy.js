// IScroll.prototype.delete = function () {
IScroll.prototype.destory = function () {
  var utils = IScroll.utils, events = utils.events;

  utils.removeEvent(window, 'orientationchange', this);
  utils.removeEvent(window, 'resize', this);
  utils.removeEvent(this.wrapper, events.START, this);
  utils.removeEvent(window, events.MOVE, this);
  utils.removeEvent(window, events.END, this);
  utils.removeEvent(window, events.CANCEL, this);
  utils.removeEvent(this.scroller, events.TRANSITIONEND, this);

};
