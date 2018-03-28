import Vue from 'vue'
import Vuex from 'vuex'

import audio from './modules/audio'
import playMusic from './modules/playMusic'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        audio,
        playMusic
    }
    
  })