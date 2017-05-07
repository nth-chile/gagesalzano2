;(function(window) {

	'use strict';

	/**
	 * StackFx: The parent class.
	 */
	function StackFx(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.stack = this.DOM.el.querySelector('.stack');
		this.DOM.stackItems = [].slice.call(this.DOM.stack.children);
		this.totalItems = this.DOM.stackItems.length;
		this.DOM.img = this.DOM.stack.querySelector('.stack__figure > .stack__img');
		this.DOM.wrap = this.DOM.el.closest('.grid__item__wrap');
	}

	StackFx.prototype._removeAnimeTargets = function() {
		anime.remove(this.DOM.stackItems);
		anime.remove(this.DOM.img);
	};

	/************************************************************************
	 * VegaFx.
	 ************************************************************************/
	function VegaFx(el) {
		StackFx.call(this, el);
		this._initEvents();
	}

	VegaFx.prototype = Object.create(StackFx.prototype);
	VegaFx.prototype.constructor = VegaFx;

	VegaFx.prototype._initEvents = function() {
		var self = this;
		this._mouseenterFn = function() {
			self._removeAnimeTargets();
			self._in();
		};
		this._mouseleaveFn = function() {
			self._removeAnimeTargets();
			self._out();
		};
		this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
		this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
	};

	VegaFx.prototype._in = function() {
		var self = this;

		// this.DOM.stackItems.map(function(e, i) {
		// 	e.style.opacity = i !== self.totalItems - 1 ? 0.2*i+0.2 : 1
		// });

		anime({
			targets: this.DOM.stackItems,
			translateZ: [
				{
					value: function(target, index) {
						return index*2 + 2;
					},
					duration: 200,
					easing: [0.42,0,1,1]
				},
				{ 
					value: function(target, index) {
						return index*5 + 5;
					},
					duration: 700,
					easing: [0.2,1,0.3,1]
				}
			],
		});

		anime({
			targets: this.DOM.img,
			duration: 900,
			easing: [0.2,1,0.3,1],
			scale: 1.001
		});

	};

	VegaFx.prototype._out = function() {
		var self = this;

		anime({
			targets: this.DOM.stackItems,
			translateZ: [
				{ 
					value: function(target, index) {
						return index * 5 + 5 - 2;
					},
					duration: 200 ,
					easing: [0.42,0,1,1]
				},
				{ 
					value: 0,
					duration: 900,
					easing: [0.2,1,0.3,1]
				}
			],
			// opacity: {
			// 	value: function(target, index, cnt) {
			// 		return index !== cnt - 1 ? 0 : 1
			// 	},
			// 	duration: 900,
			// 	delay: 200,
			// 	easing: [0.2,1,0.3,1]
			// }
		});

		anime({
			targets: this.DOM.img,
			duration: 900,
			easing: [0.2,1,0.3,1],
			scale: 1
		});
	};

	window.VegaFx = VegaFx;

})(window);