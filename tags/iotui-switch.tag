<iotui-switch> 
	<div style="width:{opts.width}px;height:{opts.height}px;">
	<svg style="width:100%;height:100%;"  viewBox="-100 -50 500 350" id="tank">
	  <g
	     id="layer1">
	    <g
	       transform="translate(157.5838,0)"
	       id="g4250">
	      <ellipse
	         style="fill:#d42e00;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	         id="path4228"
	         cx="-69.124046"
	         cy="86.58773"
	         rx="72.14286"
	         ry="70.714287" />
	      <ellipse
	         ry="70.714287"
	         rx="72.14286"
	         cy="86.58773"
	         cx="70.875954"
	         id="ellipse4230"
	         style="fill:#30b100;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
	      <rect
	         style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:29.18169594;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	         id="rect4232"
	         width="147.96118"
	         height="171.15004"
	         x="-71.390335"
	         y="1.0357149" />
	      <rect
	         style="fill:#d42e00;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	         id="rect4234"
	         width="72.050041"
	         height="111.42857"
	         x="-72.390335"
	         y="30.87344" />
	      <rect
	         y="31.125977"
	         x="0.65025854"
	         height="110.9235"
	         width="76.090652"
	         id="rect4236"
	         style="fill:#30b100;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
	      <circle
	         style="fill:#483737;fill-opacity:1;stroke:#483737;stroke-width:39.70330048;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	         class="button"
	         cx="52.0" <!-- On -50.0  Off 52.0 -->
	         cy="85.296188"
	         r="56.14835" />
	      <text
	         xml:space="preserve"
	         style="font-style:normal;font-weight:normal;font-size:40px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#999999;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0"
	         x="30.0" <!-- On -82.0 Off 30.0 -->
	         y="94.615761"
	         class="label">{labelText}</text>
	    </g>
	  </g>
	</svg>
	
	</div>
	
	<script>
		
	this.state = opts.state || 'off'
	if(this.state == 'off') {
		this.labelText = 'Off'
	} else {
		this.labelText = 'On'
	}	
	
	var self = this
	var button, label	

	function setSwitch() {
		var buttonPosition = {on: -52.0, off: 53}
		var labelPosition = {on: -82.0, off: 30}
		var curPosition = button.getAttribute('cx')
		var tarPosition
		var newLabel
		
		if(self.state == 'on') {
			tarPosition = buttonPosition.on
			tarLabelPosition = labelPosition.on
			self.labelText = 'On'
		} else {
			tarPosition = buttonPosition.off
			tarLabelPosition = labelPosition.off
			self.labelText = 'Off'
		}	
		label.style.display = 'none'
		var animate = setInterval(frame, 5);
		function frame() {
			if(curPosition == tarPosition){
				clearInterval(animate)
				label.setAttribute('x', tarLabelPosition)
				label.style.display = 'inline'
			}	
			
			if(curPosition > tarPosition) {
				curPosition--
			} else if (curPosition < tarPosition){
				curPosition++
			}	
			
			if(curPosition != tarPosition) {
				button.setAttribute('cx', curPosition)
			}		
	    }	 
	}
	
	this.on('set', function(state) {
		self.state = state
		self.update()
	})

	function buttonPush(){
		if(self.state == 'on') {
			self.state = 'off'
		} else {
			self.state = 'on'
		}
		self.update()
	}

	this.on('mount', function(){
		
		button = self.root.querySelector('.button')
		label = self.root.querySelector('.label')
		self.state = opts.state
		setSwitch()
	
		button.addEventListener('mousedown', function(){
			event.preventDefault()
			buttonPush()	
		})
		
		button.addEventListener('touchstart', function(){
			event.preventDefault()
			buttonPush()	
		})
		
		label.addEventListener('mousedown', function(){
			event.preventDefault()
			buttonPush()	
		})
		
		label.addEventListener('touchstart', function(){
			event.preventDefault()
			buttonPush()	
		})
			 
		this.on('update', function(){
			setSwitch()
			this.trigger('change', self.state)
		})

	})
	</script>		
</iotui-switch>