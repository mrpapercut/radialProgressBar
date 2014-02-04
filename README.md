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
````

```javascript
var element = $('element');

new RadialProgressBar(element[, options]);
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

```javascript
var radialProgress = new RadialProgressBar(element, {
    autoStart: false
});

$('button').addEvent('click', function () {
    radialProgress.start();
});
```

Links
-----

* [Website](http://www.mrpapercut.com)
* [Twitter](http://twitter.com/Mr_Papercut)
* [Github](http://github.com/mrpapercut/radialProgressBar)