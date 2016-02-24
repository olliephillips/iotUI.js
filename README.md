# iotUI.js

It's a grand sounding name for just one control, but that's all there is currently, just one control - a thermometer.
Totally a work-in-progress.

## What does it do

iotUI.js is (or hopefully will be) a suite of SVG elements for use with IoT applications. It uses Riot.js, although all the include files have been combined for ease of deployment. Using Riot.js gives us components, in summary a really simple way to setup controls in HTML, and the footprint is tiny - which is just the thing if you are serving your webpage from say an ESP8266 running Espruino, which I am. 

The components' supporting code ```iotUI.js``` can be offloaded to another server, since it runs client-side in the browser.

## So what have we got today

So far only a thermometer, my first foray into the world of SVG, so I hope you like (any suggestions on how to improve it are always welcome) , but I have plans to build these components also. 

(clicking the link will take you to a demo)

- [Thermometer](https://rawgit.com/olliephillips/iotUI.js/master/examples/thermometer.html)
- Tank 
- Dial
- Knob,
- Slider
- Switch

## Using

1) Download, and add ```iotUI.js``` to your HTML page, being sure to amend the path to the file if yours is different

```
<script src="js/iotUI.js"></script>
```

2) Add the component to the page, and set the default values. For the thermometer we can set ```val```, ```max``` and ```min``` values as below:

```
<iotui-thermometer id="temp" height="500" width="500" val="40" max="100" min="20"></iotui-thermometer>
```
3) Plan is that some components will take user input, 'setters' if you like, and other components (like the thermometer) will be 'getters', they'll do data display only. Each control will have its own 'set' or 'get' API method, depending on it's function. Maybe it will have both. I implemented both on the thermometer control, just to prove the concept.

So, let's look at the thermometer component, maybe you have Websocket, MQTT or just vanilla AJAX polling going on. How do you update the component's value?

With just a single line of code.

```
<script>
iotUI.thermometer.set('temp', val);
</script>
```

In the line above 'temp' is the id of thermometer component (look back at the code in step 2) and 'val' is a variable containing the data we want to set, maybe this is better an object so all components attributes can be updated.. I'll think about that... but basically, every time you receive data, pass it to your component using the above method.

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


## Contributions

Contributions are welcome. If you can build SVG controls, or can improve what's here, please do contribute.  Please fork and create a new development branch. Please take the thermometer component as representative of the style I am aiming for. Maybe there should be more flexibilty with say colors, but the main thing is that the components should look like a set. When all used on the same page none, should look out of place.

