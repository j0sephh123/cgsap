<template>
<div>
  <input
    id="sliderWithValue"
    class="slider is-fullwidth is-link has-output"
    type="range" 
    
    :step="1" 
    :min="0" 
    :max="100" 
    :value="50"
    >
  <output for="sliderWithValue">50</output>
</div>
</template>

<script>
export default {
  mounted() {
    var sliders = document.querySelectorAll( 'input[type="range"].slider' );
    
    [].forEach.call( sliders, ( slider ) => {
      var output = this.findOutputForSlider( slider );
      if ( output ) {
        if ( slider.classList.contains( 'has-output-tooltip' ) ) {
          // Get new output position
          var newPosition = this.getSliderOutputPosition( slider );

          // Set output position
          output.style[ 'left' ] = newPosition.position;
        }

        // Add event listener to update output when slider value change
        slider.addEventListener( 'input', function( event ) {
          if ( event.target.classList.contains( 'has-output-tooltip' ) ) {
            // Get new output position
            var newPosition = getSliderOutputPosition( event.target );

            // Set output position
            output.style[ 'left' ] = newPosition.position;
          }
          // console.log(event.target.value);
          // Update output with slider value
          output.value = event.target.value;
        } );
      }
    } );
  },
  methods: {
    findOutputForSlider( element ) {
      var idVal = element.id;
      var outputs = document.getElementsByTagName( 'output' );
      for( var i = 0; i < outputs.length; i++ ) {
        if ( outputs[ i ].htmlFor == idVal )
          return outputs[ i ];
      }
    },

    getSliderOutputPosition( slider ) {
      // Update output position
      var newPlace,
          minValue;

      var style = window.getComputedStyle( slider, null );
      // Measure width of range input
      sliderWidth = parseInt( style.getPropertyValue( 'width' ), 10 );

      // Figure out placement percentage between left and right of input
      if ( !slider.getAttribute( 'min' ) ) {
        minValue = 0;
      } else {
        minValue = slider.getAttribute( 'min' );
      }
      var newPoint = ( slider.value - minValue ) / ( slider.getAttribute( 'max' ) - minValue );

      // Prevent bubble from going beyond left or right (unsupported browsers)
      if ( newPoint < 0 ) {
        newPlace = 0;
      } else if ( newPoint > 1 ) {
        newPlace = sliderWidth;
      } else {
        newPlace = sliderWidth * newPoint;
      }

      return {
        'position': newPlace + 'px'
      }
    }, 
  }
}
</script>
