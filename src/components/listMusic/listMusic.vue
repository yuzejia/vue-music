<template>
   <mu-list>
    <mu-list-item @click="itemBtn(item.hash)"  v-for="item in listData" :title="item.filename">
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
      listData:null,
      obj:{
        city : "深圳",
        positionName:"前端开发",
        pageNo:1
      }
    }
  },
  methods:{
    itemBtn:function(hash){
        console.log(hash)
        this.$store.commit("playshow")
    }
  },
  mounted(){
    console.log(this.$store.state.audio.palyshow)
      this.$store.dispatch('get_songs')
    .then((res) => {
        this.listData = res.data.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.mu-list
  margin 55px 0
  div
    border-bottom 1px solid #eee
  .mu-item-content
    width inherit
  .p_item
    margin 0
</style>
