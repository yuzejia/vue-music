<template>
 <div v-show="palyshow">
   <div class="playContent">
     <div @click="set_PlayMusic">关闭</div>
   </div>
   </div>
</template>

<script>
export default {
  name: 'palyMusic',
  data () {
    return {
    }
  },
  methods:{
   set_PlayMusic:function(){
     this.$store.dispatch({
          type: 'set_PlayMusic',
					isShow: false
     })
   }
  },
  mounted(){

  },
  computed:{
    palyshow () {
				return this.$store.getters.getPalyshowl
			},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.playContent
    background: red;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* display: block; */
    z-index: 8;
  
</style>
