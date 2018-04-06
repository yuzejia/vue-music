<template>
 <div class="content">
     <div class="swiper-container">
    <div class="swiper-wrapper">
         <div class="swiper-slide item" @click="openItem(item.rankid)"  v-for="item in datas">
         <img :src="item.imgurl" alt="" srcset="">
    </div>
    <!-- <div> -->
         <list-music></list-music>
    <!-- </div> -->

   
  </div>
</div>
    
 </div>
</template>

<script>
import listMusic from "../listMusic/listMusic.vue"
export default {
  name: 'RankingList',
  components:{
      listMusic
  },
  data () {
    return {
        datas:[]
    }
  },
  methods:{
      openItem:function(id){
          this.$store.commit("alertType",{mess:"正在搜索相关歌曲...",show:true, time:1000,})
        this.$store.dispatch('get_rank_list_info',id)   // 获取歌曲
        .then((res)=>{
            console.log(res)
            this.$store.dispatch('set_datas', res.data.data.songs.list)
        })
        .catch((err)=>{
            this.$store.commit("alertType",{mess:"网络错误，加载失败...",show:false, time:2500,})
        })
      },
        Swiper:function (){
            var mySwiper = new Swiper('.swiper-container', {
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: false,
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows : false
                },
            })
        }
  },
  mounted(){
       this.$store.dispatch('get_rank_list')
    .then((res) => {
        let that = this
        let listS = res.data.data.list
            var subStr=new RegExp('{size}');//创建正则表达式对象
            for(let i in listS){
                let result=listS[i].imgurl.replace(subStr,"150");//把'is'替换为空字符串
      		    listS[i].imgurl = result
            }
        this.datas = res.data.data.list
        setTimeout(()=>{
        that.Swiper()
        },0)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
    margin-top:45 px
    background-color #fff

    width: 100%
    z-index: 1
    box-shadow: 0px 5px 10px #e9e6ec;
    .swiper-container
        height 150px
       
</style>
