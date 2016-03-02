<iotui-controller> 
	<div style="width:{opts.width}px;height:{opts.height}px;">
	<svg style="width:100%;height:100%;"  viewBox="-40 0 500 250" id="tank">
	  <g
	     transform="translate(212.80291,-2.710865)"
	     id="g3357">
	    <rect
	       style="fill:#eff8fa;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
	       id="rect3351"
	       width="162.39992"
	       height="145.14807"
	       x="-81.077835"
	       y="18.766151" />
	    <g
	       class="increment">
	      <circle class="increment-circle"
	         r="48.880211"
	         cy="93.660683"
	         cx="162.18085"
	         id="path4235"
	         style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" />
	      <rect
	         y="56.050453"
	         x="151.38367"
	         height="75.200325"
	         width="22.669085"
	         id="rect4229"
	         class="increment-rect"  style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" />
	      <rect
	         transform="matrix(0,-1,1,0,0,0)"
	         style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
	         id="rect4231"
	         width="24.064104"
	         height="70.840889"
	         x="-104.68266"
	         y="126.36285" />
	    </g>
	    <g
	       class="decrement">
	      <circle class="decrement-circle"
	         style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
	         id="circle4239"
	         cx="-161.85349"
	         cy="93.660683"
	         r="48.880211" />
	      <rect
	         y="-197.67148"
	         x="-104.59953"
	         height="70.840889"
	         width="24.064104"
	         id="rect4243"
	         class="decrement-rect"  style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
	         transform="matrix(0,-1,1,0,0,0)" />
	    </g>
	    <text text-anchor="middle" xml:space="preserve"  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50px;line-height:125%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
	       x="-2.298431"
	       y="108.29862"
	       id="display">{val}</text>
	  </g>
	</svg>
	
	</div>
	
	<script>
		
	this.val = opts.val
	this.max = opts.max
	this.min = opts.min
	this.step = opts.step || 1
	
	var self = this
	var increment, decrement

	
	function incVal() {
		var newVal,curVal
		curVal = self.val
		increment.setAttribute('transform','translate(0,2)')
		setTimeout(function(){
			increment.setAttribute('transform','translate(0,-2)')
		},100)
		
		newVal = parseInt(self.val) + parseInt(self.step)
		if(newVal > self.max) {
			newVal = self.max
		}
		if(newVal != curVal) {
			self.val = newVal
			self.update()
		}	
	}	
	
	function decVal() {
		var newVal,curVal
		curVal = self.val
		decrement.setAttribute('transform','translate(0,2)')
		setTimeout(function(){
			decrement.setAttribute('transform','translate(0,-2)')
		},100)
		
		newVal = parseInt(self.val) - parseInt(self.step)
		if(newVal < self.min) {
			newVal = self.min
		}
		if(newVal != curVal) {
			self.val = newVal
			self.update()
		}
	}
	
	this.on('set', function(val) {
		if(val > self.val) {
			incVal()
		} else {
			decVal()
		}		
	})	

	this.on('mount', function(){
		
		increment = self.root.querySelector('.increment')
		decrement = self.root.querySelector('.decrement')
		self.state = opts.state
		
		increment.addEventListener('mousedown', function(){
			event.preventDefault()
			incVal()	
		})
		
		increment.addEventListener('touchstart', function(){
			event.preventDefault()
			incVal()	
		})
		
		decrement.addEventListener('mousedown', function(){
			event.preventDefault()
			decVal()	
		})
		
		decrement.addEventListener('touchstart', function(){
			event.preventDefault()
			decVal()	
		})
			 
		this.on('update', function(){
			this.trigger('change', self.state)
		})
	})
	</script>		
</iotui-controller>