<template>
<div>
  <input
    id="sliderWithValue"
    class="slider is-fullwidth is-link has-output"
    type="range" 
    
    :step="1" 
    :min="0" 
    :max="range.max" 
    :value="range.value"
    >
  <output for="sliderWithValue">{{range.value}}</output>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['range'])
  },  
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
        slider.addEventListener( 'input', ( event ) => {
          if ( event.target.classList.contains( 'has-output-tooltip' ) ) {
            // Get new output position
            var newPosition = getSliderOutputPosition( event.target );

            // Set output position
            output.style[ 'left' ] = newPosition.position;
          }
          this.$store.commit('setRange', event.target.value)
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
