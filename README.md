Radial Progress Bar
=============

Mootools plugin to create fancy radial progress bars

![Radial progress bar](http://www.mrpapercut.com/cms/uploads/posts/radial-progress.png)

Example
-------

See http://www.mrpapercut.com/files/RadialProgressBar.html for examples

Initialization
--------------

```html
<div id="element" data-progress="83%"></div>
```

```javascript
var element = $('element');

new RadialProgressBar(element[, options]);
```

It is also possible to initiate the class on an array of elements like so:

```html
<div class="radial-element" data-progress="5%"></div>
<div class="radial-element" data-progress="37%"></div>
```

```javascript
var elements = $$('.radial-element');

new RadialProgressBar(elements[, options]);
```

Options
-------

The following options are available, with their default values shown
```javascript
new RadialProgressBar(element, {

    // Sets the background color. Must match the background of the page for optimal effect
    backgroundColor: '#222',

    // Sets the border color, the progress part of the result
    borderColor: '#ff6347',

    // Sets the overlay color, the center circle with the text inside
    overlayColor: '#fff',

    // Font color for the text in the overlay
    fontColor: '#000',

    // Total width and height of the resulting element, in pixels
    elementSize: 100,

    // Width of the border, the progress part of the result, in pixels
    // Note: this cannot be more than half of the value of elementSize
    borderWidth: 20,

    // Turn animated progress on/off
    animate: false,

    // Duration from start to finish, in ms
    animationSpeed: 1000,

    // Turn text in overlay on/off
    showText: true,

    // Turn text animation on/off. When set to 'true' it counts from 0% to the
    // final percentage. Doesn't work when showText is set to 'false' (obviously)
    animateText: false,

    // Turn automatic start of animation on/off. See below for details
    autoStart: true
});
```

AutoStart
---------

With the option 'autoStart' set to false, the animation will not begin before you trigger it. The function 'start()' becomes available to trigger it on any event.
You need to assign the initialization of the class to a variable, and fire the .start() function on this.

Example:

```html
<div id="element" data-progress="47%"></div>

<button id="button">Start animation</button>
```

```javascript
var radialProgress = new RadialProgressBar(element, {
    autoStart: false
});

$('button').addEvent('click', function () {
    radialProgress.start();
});
```

Or with a group:

```html
<div class="radial-element" data-progress="47%"></div>
<div class="radial-element" data-progress="87%"></div>

<button id="button">Start animation</button>
```

```javascript
var radialProgressGroup = new RadialProgressBar($$('.elements'), {
	autoStart: false
});

$('button').addEvent('click', function () {
	radialProgressGroup.start();
});
```

Watch
-----

If you set the option 'watch' to true, the class will pay attention to changes in the data-progress attribute. This is mostly useful as a real progress bar, counting from 0% to 100%. In the following example we'll be using setInterval to increment the progress, but the data-progress value could be changed by anything.
Please note: going over 100% leads to problems, because it's impossible to use more than 360 degrees in a circle. Also, counting backwards might lead to inconsistent behaviour. The point of this feature is incrementing values up to 100%.

Example:
```html
<div id="radial-element" data-progress="0%"></div>
```

```javascript
var radialProgress = new RadialProgressBar($('radial-element'), {
	watch: true
});

window.setInterval(function () {
	var rpb = $('radial-element');
	rpb.set('data-progress', parseInt(rpb.get('data-progress'), 10) + 1 + '%');
}, 250);
```

Links
-----

* [Website](http://www.mrpapercut.com)
* [Twitter](http://twitter.com/Mr_Papercut)
* [Github](http://github.com/mrpapercut/radialProgressBar)
