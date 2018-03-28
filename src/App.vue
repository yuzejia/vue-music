<template>
  <div id="app">
    <router-view/>

    <!-- 音乐播放页面 -->
    <play-music></play-music>
    <!-- 底部状态组件 -->
    <buttom-music></buttom-music>
  </div>
</template>

<script>
import buttomMusic from "./components/buttomMusic/buttomMusic.vue"
import playMusic from "./components/playMusic/playMusic.vue"
export default {
  name: 'App',
  components:{
    buttomMusic,
    playMusic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
