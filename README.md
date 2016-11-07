# iotUI.js

It's a grand sounding name for just four controls, but that's all there is currently, just four controls - a Thermometer, a Tank, a Switch and, a Controller.

This is totally a "work-in-progress".

## What does it do

iotUI.js is (or hopefully will be) a suite of SVG elements for use with IoT applications. It uses Riot.js, although all the include files have been combined for ease of deployment. Using Riot.js gives us components, in summary a really simple way to setup controls in HTML, and the footprint is tiny - which is just the thing if you are serving your webpage from say an ESP8266 running Espruino, which I am. 

The components' supporting code ```iotUI.js``` can be offloaded to another server or CDN, since it runs client-side in the browser.

## So what have we got today

So far only a Thermometer, Tank, a Switch and, a Controller -  my first foray into the world of SVG (any suggestions on how to improve it are always welcome) - but I have plans to build these components also. 

(clicking the link will take you to a demo)

- [Thermometer](https://rawgit.com/olliephillips/iotUI.js/master/examples/thermometer.html)
- [Tank](https://rawgit.com/olliephillips/iotUI.js/master/examples/tank.html)
- [Switch](https://rawgit.com/olliephillips/iotUI.js/master/examples/switch.html)
- [Controller](https://rawgit.com/olliephillips/iotUI.js/master/examples/controller.html)
- Dial
- Knob
- Slider
- [F1wheel](https://rawgit.com/olliephillips/iotUI.js/master/examples/f1wheel.html)


## Using

1) Download, and add ```iotUI.js``` to your HTML page, being sure to amend the path to the file if yours is different

```
<script src="js/iotUI.js"></script>
```

2) Add the component to the page, and set the default values.

```
// Thermometer
<iotui-thermometer id="temp" height="500" width="500" val="40" max="100" min="20"></iotui-thermometer>

// Tank
<iotui-tank id="tank" height="350" width="350" color="#D4AA00" val="35" max="40" min="20"></iotui-tank>
// 'color' attribute is optional

// Switch
<iotui-switch id="switch" height="250" width="350" state="on"></iotui-switch>

// Controller
<iotui-controller id="controller" height="250" width="350" val="90" min="80" max="100" step="5"></iotui-controller>
// 'step' attribute is optional, omitting will increment/decrement the controller by 1

// F1Wheel
<iotui-f1wheel id="f1wheel" wheellabel="iotUI.js" startbuttonlabel="START/STOP" primarybuttonlabel="TOOT" secondarybuttonlabel="HONK" height="300"></iotui-f1wheel>

```
3) Plan is that some components will take user input, 'setters' if you like, and other components (like the thermometer) will be 'getters', they'll do data display only. Each control will have its own 'set' or 'get' API method, depending on it's function, it may have both.

So, let's look at the thermometer component, maybe you have Websocket, MQTT or just vanilla AJAX polling going on. How do you update the component's value?

With just a single line of code.

```
<script>
iotUI.thermometer.set('temp', val);
</script>
```

In the line above 'temp' is the id of Thermometer component (look back at the code in step 2) and 'val' is a variable containing the data we want to set, maybe this is better an object so all components attributes can be updated.. I'll think about that... but basically, every time you receive data, pass it to your component using the above method.

A contrived example, using dummy data generated at 2 second intervals would look like this:

```
<script>
// Simulated new data event, creat values between 20 and 100
setInterval(function(){
	var val = Math.floor(Math.random() * ((100 - 20) + 1) + 20);
	iotUI.thermometer.set('temp', val)
},2000)
</script>
```

To read the a value of the component you can use the following API method:

```
<script>	
console.log(iotUI.thermometer.get('temp', 'val'));
</script>
```
The above will return the current val property from the component with the id of 'temp'. You could also obtain 'max' and 'min' by substituting them in place of 'val'

## Setters, e.g Switch component
The Switch responds to user input, either mouseclick, or touch events. Both events will toggle its state between on and off. It also has API methods to switch it on and off, should you wish to do this programmatically, and most importantly it triggers a change event. You can add a listener for this event, and set a callback function so you can respond to the state change. For example you might want to start/stop publishing over MQTT, websocket or http POST.

This is from the Switch component's example page [here](https://rawgit.com/olliephillips/iotUI.js/master/examples/switch.html). 

```
<script>
function changeEventHandler(){
	clearTimeout(tO)
	document.getElementById('event').innerHTML= '"change" event  fired. State: ' + this.state;
	var tO = setTimeout(function(){document.getElementById('event').innerHTML = 'Click the switch!'},5000);
}

window.onload = function(){	
	// Set up our listener
	iotUI.addListener('switch', 'change', changeEventHandler);
}
</script>
``` 
Here, 'switch' is the id of the component, 'change' is the event to listen for, and 'changeEventHandler' is the callback function.

As mentioned should you wish to control the Switch component programatically, use these API methods.

```
// Get components state, 'on' or 'off'
iotUI.switch.get('switch');

// Switch it on
iotUI.switch.set.on('switch');

// Switch it off
iotUI.switch.set.off('switch');
```

The Controller component is also a setter and works in a very similar way. You can use 'get' and 'set' to use it programatically and it also fires a 'change' event which you can listen for and pass to a callback function in the same way as the Switch component. Check out the [Controller component examples source](https://rawgit.com/olliephillips/iotUI.js/master/examples/controller.html) for more information.

## Contributions

Contributions are welcome. If you can build SVG controls, or can improve what's here, please do contribute.  Please fork and create a new development branch. Please take the thermometer component as representative of the style I am aiming for. Maybe there should be more flexibilty with say colors, but the main thing is that the components should look like a set. When all used on the same page none, should look out of place.

## Credits

`f1-wheel.svg` is based on an image by [Pitlane02](https://commons.wikimedia.org/wiki/User:Pitlane02) which can be found in original form [here](https://commons.wikimedia.org/wiki/File:Formula_one_steering_wheel_back.svg).
The remixed version of this image, which is also licensed under [creative commons](https://en.wikipedia.org/wiki/Creative_Commons) can be found [here](https://rawgit.com/olliephillips/iotUI.js/master/svg_files/f1-wheel.svg).

