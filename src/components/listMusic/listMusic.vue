<template>
   <mu-list>
    <mu-list-item @click="itemBtn(item.hash,index)"  v-for="(item,index) in listData" :title="item.filename">
       <mu-icon slot="right" value=""/>
    </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  name: 'listMusic',
  data () {
    return {
      num:"125032",
     
      obj:{
        city : "深圳",
        positionName:"前端开发",
        pageNo:1
      }
    }
  },
  methods:{
    itemBtn:function(hash,index){
      let that = this
         this.$store.dispatch('get_song_info',hash)   // 获取歌曲
         .then((res)=>{
           that.$store.dispatch({
             type:"set_Playhash",
             audio:res.data.data
           })
         }),

          this.$store.dispatch('get_song_lrc',hash)   // 获取歌曲
         .then((res)=>{
         that.$store.dispatch({
             type:"set_song_Lrc",
             lrc:res.data.data
           })
         })
        this.$store.commit("playshow")
        this.$store.commit("setIndex",index)
    }
  },
  computed:{
    listData(){
           return this.$store.getters.getDatas
    }
    
  },
  watch:{
    listData:function(e){
      console.log(e.length)
      var that = this
      if(e.length == 0){
         this.$store.commit("alertType",{mess:"未搜索到内容...",show:false, time:2000,})
        }else{
        setTimeout(()=>{
           that.$store.dispatch('set_alertShow',false)
           },2000)
       
        }
    }
  },
  mounted(){
    let that = this
    console.log(this.$store.getters.getDatas)
      this.$store.dispatch('get_songs')
    .then((res) => {
        this.$store.dispatch('set_datas', res.data.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.mu-list
  div
    border-bottom 1px solid #eee
  .mu-item-content
    width inherit
  .p_item
    margin 0
</style>
