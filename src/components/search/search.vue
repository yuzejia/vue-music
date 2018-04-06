<template>
<div class="search">
  <div class="search_A">
    <input v-model='inputName' value="请输入歌曲" type="text">
    <span @click="searchBtn">搜索</span>
  </div>
  <!-- <mu-appbar title="">
    <mu-text-field  class="appbar-search-field" v-model='inputName'  slot="right" hintText="请输入歌手"/>
    <mu-flat-button @click="searchBtn" color="white" label="搜索" slot="right"/>
</mu-appbar> -->
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
       this.$store.dispatch('set_datas', [])
       this.$store.dispatch('set_alertMess',"正在加载...")
       this.$store.dispatch('set_alertShow',true)
       
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
  background-color #fff
  position fixed
  top 0
  left 0
  width 100%
  z-index 2
 
}
.search_A{
   width: 90%;
  background-color: #7e57c2;
  margin: 5px auto;
  height: 35px;
  border-radius: 10px;
}
.search input{
      border: none;
    background: none;
    height: 34px;
    margin-left: 18px;
    width: 75%;
    outline: none;
    color: #fff;
    text-align: center;
}
.search span{
      float: right;
    margin-right: 20px;
    margin-top: 5px;
    color: #fff;
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
