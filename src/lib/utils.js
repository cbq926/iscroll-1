IScroll.utils = (function () {
  //var _dummyStyle = document.createElement('div').style;

  var getTime = Date.now; //|| function () { return new Date().getTime(); };

  //var rAF = window.requestAnimationFrame  ||
  //  window.webkitRequestAnimationFrame  ||
  //  window.mozRequestAnimationFrame   ||
  //  window.oRequestAnimationFrame   ||
  //  window.msRequestAnimationFrame    ||
  //  function (callback) { window.setTimeout(callback, 1000 / 60); };

  var prefix = support.prefix;

  function prefixStyle(style) {
    return prefix.style ? (prefix.style + style.charAt(0).toUpperCase() + style.slice(1)) : style;
  }

  function addEvent(el, type, fn, capture) {
    el.addEventListener(type, fn, !!capture);
  }

  function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, !!capture);
  }

  function getComputedPosition(el/*, useTransform*/) {
    var matrix = getComputedStyle(el, null),
      x, y;

    //if ( useTransform ) {
    matrix = matrix[style.transform].split(')')[0].split(', ');
    x = +(matrix[12] || matrix[4]);
    y = +(matrix[13] || matrix[5]);
    //} else {
    //  x = +matrix.left.replace(/[^-\d]/g, '');
    //  y = +matrix.top.replace(/[^-\d]/g, '');
    //}

    return { x: x, y: y };
  }

  function momentum(current, start, time, lowerMargin, maxOvershot) {
    var distance = current - start,
      speed = Math.abs(distance) / time,
      destination,
      duration,
      deceleration = 0.0009;

    destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
    duration = speed / deceleration;

    if (destination < lowerMargin) {
      destination = maxOvershot ? lowerMargin - ( maxOvershot / 2 * ( speed / 10 ) ) : lowerMargin;
      distance = Math.abs(destination - current);
      duration = distance / speed;
    } else if (destination > 0) {
      destination = maxOvershot ? maxOvershot / 2 * ( speed / 10 ) : 0;
      distance = Math.abs(current) + destination;
      duration = distance / speed;
    }

    return {
      destination: Math.round(destination),
      duration: duration
    };
  }

  var _transform = prefixStyle('Transform');

  var has = {
    transform: support.transform,
    trans3d: support.trans3d,
    touch: support.touch,
    pointer: support.pointer,
    transition: support.transition
  };

  var style = {
    transform: _transform,
    transitionTimingFunction: prefixStyle('TransitionTimingFunction'),
    transitionDuration: prefixStyle('TransitionDuration'),
    translateZ: has.trans3d ? ' translateZ(0)' : ''
  };

  var options = {
    startX: 0,
    startY: 0,
    scrollX: true,
    scrollY: true,
    lockDirection: true,
    overshoot: true,
    momentum: true
    //eventPassthrough: false,	TODO: preserve native vertical scroll on horizontal JS scroll (and vice versa)

    //HWCompositing: true,		// set to false to skip the hardware compositing
    //useTransition: true,
    //useTransform: true
  };

  var events = {};
  if (has.touch) {
    events = {
      START: 'touchstart',
      MOVE: 'touchmove',
      END: 'touchend',
      CANCEL: 'touchcancel'
    };
  } else if (has.pointer) {
    events = {
      START: 'MSPointerDown',
      MOVE: 'MSPointerMove',
      END: 'MSPointerUp',
      CANCEL: 'MSPointerCancel'
    };
  } else {
    events = {
      START: 'mousedown',
      MOVE: 'mousemove',
      END: 'mouseup',
      CANCEL: 'mousecancel'
    };
  }
  events.TRANSITIONEND = (function () {
    switch (prefix.style) {
      case 'webkit':
        return 'webkitTransitionEnd';
      case 'O':
        return 'oTransitionEnd';
      default :
        return 'transitionend';
    }
  })();

  return {
    events: events,
    options: options,
    getTime: getTime,
    //rAF: rAF,
    has: has,
    style: style,
    addEvent: addEvent,
    removeEvent: removeEvent,
    getComputedPosition: getComputedPosition,
    momentum: momentum
  };
})();
