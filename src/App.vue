<template>
  <div id="app">
    <alert></alert>
    <!-- 搜索 -->
    <search></search>
    <!-- 列表 -->
    <ranking-list></ranking-list>
    <list-music></list-music>
    <!-- 音乐播放页面 -->
    <play-music></play-music>
    <!-- 底部状态组件 -->
    <bottom-music></bottom-music>
    <audio ref="audio" :src="audioSrc"></audio>
  </div>
</template>

<script>
import bottomMusic from "./components/bottomMusic/bottomMusic.vue"
import playMusic from "./components/playMusic/playMusic.vue"
import search from "./components/search/search.vue"
import listMusic from "./components/listMusic/listMusic.vue"
import rankingList from "./components/RankingList/RankingList.vue"
import alert from "./components/alert/alert.vue"
export default {
  name: 'App',
  components:{
    bottomMusic,
    playMusic,
    search,
    listMusic,
    rankingList,
    alert
  },
  mounted(){
  console.log(this.$refs.audio)
   this.$store.dispatch('set_AudioElement', this.$refs.audio)
      
  },
  computed:{
    audioSrc(){
      return this.$store.getters.getAudio.url
    }
  },
  created(){
   
  }

 
}
</script>
  
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
