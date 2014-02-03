"use strict";

var RadialProgressBar = new Class({
	Implements: [Options],

	options: {
		backgroundColor: '#222',
		borderColor: '#ff6347',
		overlayColor: '#fff',
		fontColor: '#000',
		elementSize: 100,
		borderWidth: 20,
		animate: false,
		animationSpeed: 1000,
		showText: true,
		animateText: false
	},

	initialize: function (element, options) {
		this.setOptions(options);

		this.options.elementSize = parseInt(this.options.elementSize, 10);
		this.options.borderWidth = parseInt(this.options.borderWidth, 10);

		this.prepareElement(element);
	},

	prepareElement: function (el) {
		var progress = el.get('data-progress'),
			overlay,
			elSize = this.options.elementSize - (this.options.borderWidth * 2) + 'px';

		overlay = new Element('div', {
			'class': 'overlay',
			html: this.options.showText && !this.options.animateText ? progress : '&nbsp;',
			styles: {
				'position': 'absolute',
				'width': elSize,
				'height': elSize,
				'background-color': this.options.overlayColor,
				'border-radius': '50%',
				'margin': this.options.borderWidth + 'px 0 0 ' + this.options.borderWidth + 'px',
				'text-align': 'center',
				'line-height': elSize,
				'font-size': '16px',
				'color': this.options.fontColor
			}
		});
		overlay.inject(el);

		el.set({
			styles: {
				'float': 'left',
				'position': 'relative',
				'width': this.options.elementSize + 'px',
				'height': this.options.elementSize + 'px',
				'border-radius': '50%',
				'background-color': this.options.borderColor,
				'border': '2px solid ' + this.options.backgroundColor
			}
		});

		if (!this.options.animate) {
			this.setProgress(el);
		} else {
			this.setAnimation(el);
		}
	},

	setProgress: function (el) {
		var progress = parseInt(el.get('data-progress'), 10),
			deg = progress <= 50 ? parseInt(360 * (progress / 100) + 90, 10) : parseInt(360 * (progress / 100) - 270, 10),
			bg = this.options.backgroundColor,
			bc = this.options.borderColor;

		if (progress <= 50) {
			el.setStyles({
				'background-image': 'linear-gradient(90deg, ' + bg + ' 50%, transparent 50%, transparent), linear-gradient(' + deg + 'deg, ' + bc + ' 50%, ' + bg + ' 50%, ' + bg + ')'
			});
		} else {
			el.setStyles({
				'background-image': 'linear-gradient(' + deg + 'deg, ' + bc + ' 50%, transparent 50%, transparent), linear-gradient(270deg, ' + bc + ' 50%, ' + bg + ' 50%, ' + bg + ')'
			});
		}
	},

	setAnimation: function (el) {
		var progress = parseInt(el.get('data-progress'), 10),
			deg = progress <= 50 ? parseInt(360 * (progress / 100) + 90, 10) : parseInt(360 * (progress / 100) - 270, 10),
			steps = 360 * (progress / 100),
			speedPerStep = this.options.animationSpeed / steps,
			interval,
			bg = this.options.backgroundColor,
			bc = this.options.borderColor,
			animateText = this.options.animateText,
			i = 0,
			j;

		if (progress <= 50) {
			interval = window.setInterval(function () {
				j = i + 90;

				el.setStyles({
					'background-image': 'linear-gradient(90deg, ' + bg + ' 50%, transparent 50%, transparent), linear-gradient(' + j + 'deg, ' + bc + ' 50%, ' + bg + ' 50%, ' + bg + ')'
				});

				if (animateText) {
					el.getElements('.overlay')[0].set('html', Math.ceil(i / 3.6) + '%');
				}

				if (i >= deg - 90) {
					window.clearInterval(interval);
				}

				i++;
			}, speedPerStep);
		} else {
			interval = window.setInterval(function () {
				if (i < 180) {
					j = i + 90;

					el.setStyles({
						'background-image': 'linear-gradient(90deg, ' + bg + ' 50%, transparent 50%, transparent), linear-gradient(' + j + 'deg, ' + bc + ' 50%, ' + bg + ' 50%, ' + bg + ')'
					});
				} else {
					j = i - 270;

					el.setStyles({
						'background-image': 'linear-gradient(' + j + 'deg, ' + bc + ' 50%, transparent 50%, transparent), linear-gradient(270deg, ' + bc + ' 50%, ' + bg + ' 50%, ' + bg + ')'
					});
				}

				if (animateText) {
					el.getElements('.overlay')[0].set('html', Math.ceil(i / 3.6) + '%');
				}

				if (i >= deg + 270) {
					window.clearInterval(interval);
				}

				i++;
			}, speedPerStep);
		}
	}
});