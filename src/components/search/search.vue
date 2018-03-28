<template>
<div class="search">
   <mu-appbar title="">
  <mu-text-field  class="appbar-search-field" v-model='inputName'  slot="right" hintText="请输入歌手"/>
  <mu-flat-button @click="searchBtn" color="white" label="搜索" slot="right"/>
</mu-appbar>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputName:""
    }
  },
  methods:{
    searchBtn:function(){
       this.$store.dispatch('get_music_search',this.inputName)
       .then((res)=>{
           this.$store.dispatch('set_datas', res.data.data.info)
       }) 
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.search{
  position fixed
  top 0
  left 0
  width 100%
  z-index 2
}
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>
