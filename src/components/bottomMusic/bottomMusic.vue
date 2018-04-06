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
  position: fixed;
  bottom: 7px;
  left: 50%;
  height: 50px;
  line-height: 40px;
  transform: translate(-25px);
  width: 50px;
  margin: 0 auto;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #7e57c2;
  color: #fff;
  box-shadow: 1px 1px 30px #9e9a9a;
  span
    float right 
  img
    height 100%
    border-radius 50%
</style>
