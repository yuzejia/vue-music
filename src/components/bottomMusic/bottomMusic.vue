<template>
 <div @click="itemBtn" class="bottomMusic">
   <img :src="imgUrl" alt="">
   <span v-text="audioName"></span>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    itemBtn:function(){
      this.$store.commit("playshow")
    }
  },
  computed:{
    imgUrl(){
      return this.$store.getters.getAudio.imgUrl
    },
    audioName(){
     return this.$store.getters.getAudio.songName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.bottomMusic
  position fixed
  bottom 0
  height 50px
  line-height 40px
  width 100%
  padding 5px 20px
  box-sizing border-box
  background-color #7e57c2
  color #ffffff
  span
    float right 
  img
    height 100%
    border-radius 50%
</style>
