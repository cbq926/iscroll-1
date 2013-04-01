IScroll.prototype.handleEvent = function (e) {
  var events = IScroll.utils.events;

  switch (e.type) {
    case events.START:
      this._start(e);
      break;
    case events.MOVE:
      this._move(e);
      break;
    case events.END:
    case events.CANCEL:
      this._end(e);
      break;
    case 'orientationchange':
    case 'resize':
      this._resize();
      break;
    case events.TRANSITIONEND:
      this._transitionEnd(e);
      break;
  }
};