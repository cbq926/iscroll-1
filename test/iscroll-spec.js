define(function (require) {

  var IScroll = require('../build/iscroll');
  var eventSimulate = require('event-simulate');

  describe('IScroll', function () {
    var container = document.createElement('div');
    var scroller = document.createElement('div');
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.height = '200px';
    scroller.style.height = '100px';
    scroller.className = 'scroller';
    document.body.appendChild(container);
    container.appendChild(scroller);
    var iscroll = new IScroll(container, {scroller: scroller});

    it('IScroll 实例化成功', function (done) {
      expect(iscroll.reset).to.be.ok();
    });
    it('scroller 比 container 短, 点击在容器上', function (done) {
      eventSimulate.simulate(container, 'touchstart');
      expect(iscroll.initiated).to.not.be.ok();
    });
  });
});