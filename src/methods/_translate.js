IScroll.prototype._translate = function (x, y) {
//	if ( this.options.useTransform ) {
  this.scrollerStyle[IScroll.utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + IScroll.utils.style.translateZ;
//	} else {
//		x = Math.round(x);
//		y = Math.round(y);
//		this.scrollerStyle.left = x + 'px';
//		this.scrollerStyle.top = y + 'px';
//	}

	this.x = x;
	this.y = y;
};
