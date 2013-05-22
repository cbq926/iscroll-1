define("handy/iscroll/5.0.0/iscroll-probe",[],function(){return function(t,i,s){function o(t,s){this.wrapper="string"==typeof t?i.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollX:!1,scrollY:!0,lockDirection:!0,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"circular",preventDefault:!1,eventPassthrough:!1,HWCompositing:!0,useTransition:!0,useTransform:!0,mouseWheel:!1,invertWheelDirection:!1,keyBindings:!1,scrollbars:!1,interactiveScrollbars:!1,resizeIndicator:!0,snap:!1,snapThreshold:10,zoomMin:1,zoomMax:4};for(var e in s)this.options[e]=s[e];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.lockDirection=this.options.lockDirection||this.options.eventPassthrough,this.directionLockThreshold=this.options.eventPassthrough?0:5,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.x=0,this.y=0,this._events={},this.scale=1,this._init(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function n(t,s,e){var o=i.createElement("div"),n=i.createElement("div");return e===!0&&(o.style.cssText="position:absolute;z-index:9999",n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),n.className="iScrollIndicator","h"==t?(e===!0&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",n.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(e===!0&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",n.style.width="100%"),o.className="iScrollVerticalScrollbar"),s||(o.style.pointerEvents="none"),o.appendChild(n),o}function r(s,e){this.wrapper="string"==typeof e.el?i.querySelector(e.el):e.el,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=s,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,speedRatioX:0,speedRatioY:0};for(var o in e)this.options[o]=e[o];this.options.interactive&&(a.addEvent(this.indicator,"touchstart",this),a.addEvent(this.indicator,"MSPointerDown",this),a.addEvent(this.indicator,"mousedown",this),a.addEvent(t,"touchend",this),a.addEvent(t,"MSPointerMove",this),a.addEvent(t,"mouseup",this))}var h=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/60)},a=function(){function o(t){return h===!1?!1:""===h?t:h+t.charAt(0).toUpperCase()+t.substr(1)}var n={},r=i.createElement("div").style,h=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],s=0,e=i.length;e>s;s++)if(t=i[s]+"ransform",t in r)return i[s].substr(0,i[s].length-1);return!1}();n.getTime=Date.now||function(){return(new Date).getTime()},n.extend=function(t,i){for(var s in i)t[s]=i[s]},n.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},n.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},n.momentum=function(t,i,e,o,n){var r,h,a=t-i,l=s.abs(a)/e,c=6e-4;return r=t+l*l/(2*c)*(0>a?-1:1),h=l/c,o>r?(r=n?o-n/2.5*(l/8):o,a=s.abs(r-t),h=a/l):r>0&&(r=n?n/2.5*(l/8):0,a=s.abs(t)+r,h=a/l),{destination:s.round(r),duration:h}};var a=o("transform");return n.extend(n,{hasTransform:a!==!1,hasPerspective:o("perspective")in r,hasTouch:"ontouchstart"in t,hasPointer:navigator.msPointerEnabled,hasTransition:o("transition")in r}),n.extend(n.style={},{transform:a,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transformOrigin:o("transformOrigin")}),n.hasClass=function(t,i){var s=RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},n.addClass=function(t,i){if(!n.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},n.removeClass=function(t,i){if(n.hasClass(t,i)){var s=RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s,"")}},n.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},n.extend(n.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),n.extend(n.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return s.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return 1/2.75>(t/=1)?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return f=.225,e=1,0===t?0:1==t?1:e*s.pow(2,-10*t)*s.sin(2*(t-f/4)*s.PI/f)+1}}}),n}();return o.prototype.destroy=function(){this._initEvents(!0),this._execCustomEvent("destroy")},o.prototype._transitionEnd=function(t){t.target==this.scroller&&(this._transitionTime(0),this.resetPosition(this.options.bounceTime))},o.prototype._start=function(t){if(this.enabled&&(!this.initiated||a.eventType[t.type]===this.initiated)){this.options.preventDefault&&t.preventDefault();var i,e=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.refresh(),this._transitionTime(),this.isAnimating=!1,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY}},o.prototype._end=function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,o=(t.changedTouches?t.changedTouches[0]:t,a.getTime()-this.startTime),n=s.round(this.x),r=s.round(this.y),h=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)&&this.moved){if(this.options.momentum&&300>o&&(i=this.hasHorizontalScroll?a.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:n,duration:0},e=this.hasVerticalScroll?a.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:r,duration:0},n=i.destination,r=e.destination,h=s.max(i.duration,e.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(n,r);this.currentPage=c,n=c.x,r=c.y,h=this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-this.x),1e3),s.min(s.abs(r-this.y),1e3)),300),l=this.options.bounceEasing}return n!=this.x||r!=this.y?((n>0||this.maxScrollX>n||r>0||this.maxScrollY>r)&&(l=a.ease.quadratic),this.scrollTo(n,r,h,l),void 0):(this._execCustomEvent("scrollEnd"),void 0)}}},o.prototype._resize=function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh(),t.resetPosition()},60)},o.prototype.resetPosition=function(t){if(0>=this.x&&this.x>=this.maxScrollX&&0>=this.y&&this.y>=this.maxScrollY)return!1;var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),this.scrollTo(i,s,t,this.options.bounceEasing),!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.enable=function(){this.enabled=!0},o.prototype.refresh=function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=s.round(this.scroller.offsetWidth*this.scale),this.scrollerHeight=s.round(this.scroller.offsetHeight*this.scale),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.maxScrollX>0&&(this.maxScrollX=0),this.maxScrollY>0&&(this.maxScrollY=0),this.hasHorizontalScroll=this.options.scrollX&&0>this.maxScrollX,this.hasVerticalScroll=this.options.scrollY&&0>this.maxScrollY,this.endTime=0,this._execCustomEvent("refresh")},o.prototype.on=function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},o.prototype._execCustomEvent=function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;s>i;i++)this._events[t][i].call(this)}},o.prototype.scrollBy=function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},o.prototype.scrollTo=function(t,i,s,e){e=e||a.ease.circular,!s||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(s),this._translate(t,i)):this._animate(t,i,s,e.fn)},o.prototype._init=function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.snap&&this._initSnap(),this.options.mouseWheel&&this._initWheel(),this.options.keyBindings&&this._initKey(),this.options.zoom&&this._initZoom(),this.options.probeType&&this._initProbe()},o.prototype._initEvents=function(i){var s=i?a.removeEvent:a.addEvent,e=this.options.bindToWrapper?this.wrapper:t;s(t,"orientationchange",this),s(t,"resize",this),s(this.wrapper,"mousedown",this),s(e,"mousemove",this),s(e,"mousecancel",this),s(e,"mouseup",this),a.hasPointer&&(s(this.wrapper,"MSPointerDown",this),s(e,"MSPointerMove",this),s(e,"MSPointerCancel",this),s(e,"MSPointerUp",this)),a.hasTouch&&(s(this.wrapper,"touchstart",this),s(e,"touchmove",this),s(e,"touchcancel",this),s(e,"touchend",this)),s(this.scroller,"transitionend",this),s(this.scroller,"webkitTransitionEnd",this),s(this.scroller,"oTransitionEnd",this),s(this.scroller,"MSTransitionEnd",this)},o.prototype.getComputedPosition=function(){var i,s,e=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=e[a.style.transform].split(")")[0].split(", "),i=+(e[12]||e[4]),s=+(e[13]||e[5])):(i=+e.left.replace(/[^-\d]/g,""),s=+e.top.replace(/[^-\d]/g,"")),{x:i,y:s}},o.prototype._initIndicators=function(){var t,i,s=this.options.interactiveScrollbars;"object"!=typeof this.options.scrollbars,this.options.scrollbars?(this.options.scrollY&&(t={el:n("v",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,resize:this.options.resizeIndicator,listenX:!1},this.wrapper.appendChild(t.el)),this.options.scrollX&&(i={el:n("h",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,resize:this.options.resizeIndicator,listenY:!1},this.wrapper.appendChild(i.el))):(t=this.options.indicators.length?this.options.indicators[0]:this.options.indicators,i=this.options.indicators[1]&&this.options.indicators[1]),t&&(this.indicator1=new r(this,t)),i&&(this.indicator2=new r(this,i)),this.on("refresh",function(){this.indicator1&&this.indicator1.refresh(),this.indicator2&&this.indicator2.refresh()}),this.on("destroy",function(){this.indicator1&&this.indicator1._destroy(),this.indicator2&&this.indicator2._destroy()})},r.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"MSPointerUp":case"mouseup":this._end(t);break;case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},r.prototype._destroy=function(){this.options.interactive&&(a.removeEvent(this.indicator,"touchstart",this),a.removeEvent(this.indicator,"MSPointerDown",this),a.removeEvent(this.indicator,"mousedown",this),a.removeEvent(t,"touchmove",this),a.removeEvent(t,"MSPointerMove",this),a.removeEvent(t,"mousemove",this),a.removeEvent(t,"touchend",this),a.removeEvent(t,"MSPointerMove",this),a.removeEvent(t,"mouseup",this))},r.prototype._start=function(i){var s=i.touches?i.touches[0]:i;i.preventDefault(),i.stopPropagation(),this.transitionTime(0),this.lastPointX=s.pageX,this.lastPointY=s.pageY,this.startTime=a.getTime(),a.addEvent(t,"touchmove",this),a.addEvent(t,"MSPointerMove",this),a.addEvent(t,"mousemove",this)},r.prototype._move=function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;a.getTime(),i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},r.prototype._end=function(i){i.preventDefault(),i.stopPropagation(),a.removeEvent(t,"touchmove",this),a.removeEvent(t,"MSPointerMove",this),a.removeEvent(t,"mousemove",this)},r.prototype.transitionTime=function(t){t=t||0,this.indicatorStyle[a.style.transitionDuration]=t+"ms"},r.prototype.transitionTimingFunction=function(t){this.indicatorStyle[a.style.transitionTimingFunction]=t},r.prototype.refresh=function(){this.transitionTime(0),this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(a.addClass(this.wrapper,"iScrollBothScrollbars"),a.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(a.removeClass(this.wrapper,"iScrollBothScrollbars"),a.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),this.wrapper.offsetHeight,this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=s.max(s.round(this.wrapperWidth*this.wrapperWidth/this.scroller.scrollerWidth),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=s.max(s.round(this.wrapperHeight*this.wrapperHeight/this.scroller.scrollerHeight),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},r.prototype.updatePosition=function(){var t=s.round(this.sizeRatioX*this.scroller.x)||0,i=s.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(0>t?t=0:t>this.maxPosX&&(t=this.maxPosX),0>i?i=0:i>this.maxPosY&&(i=this.maxPosY)),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[a.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},r.prototype._pos=function(t,i){0>t?t=0:t>this.maxPosX&&(t=this.maxPosX),0>i?i=0:i>this.maxPosY&&(i=this.maxPosY),this.scroller.scrollTo(s.round(t/this.sizeRatioX),s.round(i/this.sizeRatioY))},o.prototype._initKey=function(){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];a.addEvent(t,"keydown",this),this.on("destroy",function(){a.removeEvent(t,"keydown",this)})},o.prototype._key=function(t){var i,e=this.options.snap,o=e?this.currentPage.pageX:this.x,n=e?this.currentPage.pageY:this.y,r=a.getTime(),h=this.keyTime||0,l=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this.isInTransition=!1),this.keyAcceleration=200>r-h?s.min(this.keyAcceleration+l,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=e?1:this.wrapperWidth:n+=e?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=e?1:this.wrapperWidth:n-=e?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=e?this.pages.length-1:this.maxScrollX,n=e?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,n=0;break;case this.options.keyBindings.left:o+=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=e?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=e?1:5+this.keyAcceleration>>0}return e?(this.goToPage(o,n),void 0):(o>0?(o=0,this.keyAcceleration=0):this.maxScrollX>o&&(o=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):this.maxScrollY>n&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,n,0),this.keyTime=r,void 0)},o.prototype._initSnap=function(){this.pages=[],this.currentPage={},this.on("refresh",function(){var t,i,e,o,n,r,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.options.snap===!0)for(e=s.round(c/2),o=s.round(p/2);l>=-this.scrollerWidth;){for(this.pages[h]=[],t=0,n=0;n>=-this.scrollerHeight;)this.pages[h][t]={x:s.max(l,this.maxScrollX),y:s.max(n,this.maxScrollY),cx:l-e,cy:n-o},n-=p,t++;l-=c,h++}else for(r=this.options.snap,t=r.length,i=-1;t>h;h++)0===r[h].offsetLeft&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=s.max(-r[h].offsetLeft,this.maxScrollX),n=s.max(-r[h].offsetTop,this.maxScrollY),e=l-s.round(r[h].offsetWidth/2),o=n-s.round(r[h].offsetHeight/2),this.pages[a][i]={x:l,y:n,cx:e,cy:o},a++;this.currentPage={x:this.pages[0][0].x,y:this.pages[0][0].y,pageX:0,pageY:0}})},o.prototype._nearestSnap=function(t,i){var e=0,o=this.pages.length,n=0;if(s.abs(t-this.absStartX)<this.options.snapThreshold&&s.abs(i-this.absStartY)<this.options.snapThreshold)return this.currentPage;for(;o>e;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}for(o=this.pages[e].length;o>n;n++)if(i>=this.pages[0][n].cy){i=this.pages[0][n].y;break}return e==this.currentPage.pageX&&(e+=this.directionX,0>e?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),n==this.currentPage.pageY&&(n+=this.directionY,0>n?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),i=this.pages[0][n].y),{x:t,y:i,pageX:e,pageY:n}},o.prototype.goToPage=function(t,i,e,o){t>=this.pages.length?t=this.pages.length-1:0>t&&(t=0),i>=this.pages[0].length?i=this.pages[0].length-1:0>i&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=e||this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-this.x),1e3),s.min(s.abs(r-this.y),1e3)),300),this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,o)},o.prototype.next=function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s+=this.hasHorizontalScroll?1:0,e+=this.hasVericalScroll?1:0,this.goToPage(s,e,t,i)},o.prototype.prev=function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s-=this.hasHorizontalScroll?1:0,e-=this.hasVericalScroll?1:0,this.goToPage(s,e,t,i)},o.prototype._transitionTime=function(t){t=t||0,this.scrollerStyle[a.style.transitionDuration]=t+"ms",this.indicator1&&this.indicator1.transitionTime(t),this.indicator2&&this.indicator2.transitionTime(t)},o.prototype._transitionTimingFunction=function(t){this.scrollerStyle[a.style.transitionTimingFunction]=t,this.indicator1&&this.indicator1.transitionTimingFunction(t),this.indicator2&&this.indicator2.transitionTimingFunction(t)},o.prototype._initWheel=function(){a.addEvent(this.wrapper,"mousewheel",this),a.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){a.removeEvent(this.wrapper,"mousewheel",this),a.removeEvent(this.wrapper,"DOMMouseScroll",this)})},o.prototype._wheel=function(t){var i,s,e,o,n=this;if(clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n._execCustomEvent("scrollEnd")},400),t.preventDefault(),"wheelDeltaX"in t)i=t.wheelDeltaX/10,s=t.wheelDeltaY/10;else if("wheelDelta"in t)i=s=t.wheelDelta/10;else{if(!("detail"in t))return;i=s=4*-t.detail}this.hasVerticalScroll||0!==i||(i=s),e=this.x+(this.hasHorizontalScroll?i*this.options.invertWheelDirection:0),o=this.y+(this.hasVerticalScroll?s*this.options.invertWheelDirection:0),e>0?e=0:this.maxScrollX>e&&(e=this.maxScrollX),o>0?o=0:this.maxScrollY>o&&(o=this.maxScrollY),this.scrollTo(e,o,0)},o.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t)}},o.prototype._translate=function(t,i){this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=s.round(t),i=s.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicator1&&this.indicator1.updatePosition(),this.indicator2&&this.indicator2.updatePosition()},o.prototype._animate=function(t,i,s,e){function o(){var u,d,m,f=a.getTime();return f>=p?(n.isAnimating=!1,n._translate(t,i),n.resetPosition(n.options.bounceTime)||n._execCustomEvent("scrollEnd"),void 0):(f=(f-c)/s,m=e(f),u=(t-r)*m+r,d=(i-l)*m+l,n._translate(u,d),n.isAnimating&&h(o),3==n.options.probeType&&n._execCustomEvent("scroll"),void 0)}var n=this,r=this.x,l=this.y,c=a.getTime(),p=c+s;this.isAnimating=!0,o()},o.prototype._move=function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,o,n,r=t.touches?t.touches[0]:t,h=r.pageX-this.pointX,l=r.pageY-this.pointY,c=a.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=h,this.distY+=l,o=s.abs(this.distX),n=s.abs(this.distY),!(c-this.endTime>300&&10>o&&10>n)){if(!this.directionLocked&&this.options.lockDirection&&(this.directionLocked=o>n+this.directionLockThreshold?"h":n>=o+this.directionLockThreshold?"v":0),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return this.initiated=!1,void 0;l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return this.initiated=!1,void 0;h=0}i=this.x+(this.hasHorizontalScroll?h:0),e=this.y+(this.hasVerticalScroll?l:0),(i>0||this.maxScrollX>i)&&(i=this.options.bounce?this.x+h/3:i>0?0:this.maxScrollX),(e>0||this.maxScrollY>e)&&(e=this.options.bounce?this.y+l/3:e>0?0:this.maxScrollY),this.directionX=h>0?-1:0>h?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved=!0,this._translate(i,e),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execCustomEvent("scroll")),this.options.probeType>1&&this._execCustomEvent("scroll")}}},o.prototype._initProbe=function(){3==this.options.probeType&&(this.options.useTransition=!1)},o.ease=a.ease,o}(window,document,Math)});