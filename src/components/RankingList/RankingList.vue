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
          console.log(id)
      }
  },
  mounted(){
      this.$nextTick(function () {
          setTimeout(()=>{
            var mySwiper = new Swiper('.swiper-container', {
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : false
                },
            })
          },500)

      }),
    

       this.$store.dispatch('get_rank_list')
    .then((res) => {
        console.log(res)
        let listS = res.data.data.list
            var subStr=new RegExp('{size}');//创建正则表达式对象
            for(let i in listS){
                console.log(listS[i])
                let result=listS[i].imgurl.replace(subStr,"150");//把'is'替换为空字符串
      		    listS[i].imgurl = result
            }
      		
        this.datas = res.data.data.list
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
    margin-top: 56px
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 1
    background-color: #e2d8f1
    box-shadow: 0px 0px 45px #7e57c2
    .swiper-container
        height 150px
       
</style>
