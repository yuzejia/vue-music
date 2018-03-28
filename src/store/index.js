import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import audio from './modules/audio'
import playMusic from './modules/playMusic'
import ApiService from './ApiService'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        audio,
        playMusic,
        ApiService
    }
  })