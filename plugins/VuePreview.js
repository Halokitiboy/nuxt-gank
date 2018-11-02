import Vue from 'vue'
import VuePreview from 'vue-preview'

// with parameters install

export default ()=>{
    Vue.use(VuePreview, {
        mainClass: 'pswp--minimal--dark',
        barsSize: {top: 0, bottom: 0},
        captionEl: false,
        fullscreenEl: false,
        shareEl: false,
        bgOpacity: 0.85,
        tapToClose: true,
        tapToToggleControls: false
      })
}