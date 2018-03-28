<template>
 <div @click="itemBtn" class="bottomMusic">
   <img src="" alt="">
   <span>名称</span>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.bottomMusic
  position fixed
  bottom 0
  height 40px
  line-height 40px
  width 100%
  padding 0 20px
  box-sizing border-box
  background-color #7e57c2
  span
    float right 
</style>
