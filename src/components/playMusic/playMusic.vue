<template>
    <div v-show="palyshow"  class="playContent animated bounceInUp" :class="{'bounceInUp':palyshow==true,'fadeOutDown':palyshows==false}" >
      <div class="musicDetails">
        <img v-show="!audioImg_lar" class="backImg animated pulse" :src="imgUrl">
        <div @click="set_PlayMusic">关闭</div>
        <h1 class="title">{{datas.songName}}</h1>
        <div @click='audio_img_btn' class="audioCon">
        <div v-show="audioImg_lar" class="animated pulse">
          <div class="audio_img circling" :class="rotate">
              <img style="width:100%;height:100%" :src="imgUrl">
            </div>
                <p class="lyricShow">{{lyricShow}}</p>
            </div>
            <div :style="{'margin-top':marTop + 'px'}" v-show="!audioImg_lar" class="animated pulse">
              <p :class="{ 'class_a': index ==larIndex}" :data='index' v-for='(lar, index) in lrcArray'>{{lar.text}}</p>
            </div>
          </div>
 		      <audio class="audioEl" ref='myAudio' preload="preload"   ></audio>
          <div class="play">
            <span class="playL floatLeft" @click="getMusic(false)">上一曲</span>
              <span @click='ready'>
                <img ref='myImg' :src="play">
              </span>
            <span class="playL floatRight" @click="getMusic(true)">下一曲</span>
          </div>
          <div class="audioSpeed">
            <span class="floatLeft">{{value2}} </span>
            <span class="floatRight">{{audioMEss.duration}} </span>
            <mu-slider @change="audioSpeed" v-model="value1" class="demo-slider"/>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'palyMusic',
  data () {
    return {
      palyshows:true,
      musicObj:null,  // hash 数组
      indexNum:0,
      HttpLocalhost:null,
      elAudio:null,
      rotate:'',                                                                // 旋转
      playType:false,
    	play:'/static/img/play.png',                                              // 播放图片
      playTypeUrl:['/static/img/play.png','/static/img/pause.png'],             // 暂停图片
      audioMEss:{
        duration:'00:00',                                                       // 总时长
        startTime:'',                                                           // 播放的时长
      },
      // 歌曲详情
    	// datas:'',
    	currentSong:{
    		url:''
    	},
      // 歌词
      marTop:0,
      audioImg_lar:true,
      larIndex:null,
      Lyric:[],     //歌词
      lyricShow:'', //显示的歌词
      value1: 0, // //播放进度
      value2:'00:00',
        hour:0 ,
        minute:0 ,
        second:0,         //时 分 秒
        millisecond:0 ,      //毫秒
        int:null,

    }
  },

    methods: {
    set_PlayMusic:function(){
      this.palyshows = false
      setTimeout(()=>{
          this.$store.dispatch({
          type: 'set_PlayMusic',
					isShow: false
      })
    
     },2000)
   },
    // 初始化
    init:function(){
      this.Lyric = [],
      this.audioMEss["duration"] = '00:00',
      this.value1 = 0,
      this.play = this.playTypeUrl[0],
      this.rotate = 'null'
    },
    // 时间转换
    commonTime:function(Time){
      let unixTimestamp = new Date( Time*1000 ) ;
      let commonTime = unixTimestamp.toLocaleString();
          commonTime = commonTime.slice(commonTime.indexOf(":")+1)
          return commonTime
      },
    // 播放暂停 图片
    audio_img_btn:function(){
      this.audioImg_lar = !this.audioImg_lar;
    },
    // 时间进度
    timeupdate:function (e){
       var that = this
       console.log(e);
       that.value1 = (e.currentTime/e.duration)*100

    },
    // 播放 执行操作
    playS:function(){
          console.log('开始播放'),
          this.play = this.playTypeUrl[1],
         this.$store.commit("play"),
          this.rotate = 'rotate'
    },
    // 暂停执行操作
    pauseS:function(){
          console.log('播放暂停'),
          this.play = this.playTypeUrl[0],
          this.$store.commit("pause")
          this.rotate = 'null'
    },
    // 开始播放
  	ready:function(e){
       this.$store.getters.getAudioElement.paused == true?[this.playS()]:[this.pauseS()];
      var that = this
       this.$store.getters.getAudioElement.addEventListener("timeupdate",function(){
        that.value1 = (this.currentTime/this.duration)*100
        that.value2 = that.commonTime(this.currentTime)
        that.audioMEss.duration = that.commonTime(this.duration) //音频总长
        if(this.currentTime == this.duration){
          that.pauseS()
        }
          let currentTime = this.currentTime.toFixed(2)
          that.Lyric.forEach((el,index) =>{
            if(currentTime>parseFloat(el[0])){
              that.larIndex = index
              that.lyricShow = el.text
            }else {
              return
            }
          })
      });
    //  that.elAudio.addEventListener("timeupdate",this.timeupdate(e),false);
     
  	},
    // 滑动时间
    audioSpeed:function(e) {
      let that = this
      that.value1 = e
      this.$store.getters.getAudioElement.currentTime = (e/100)*this.$store.getters.getAudioElement.duration

    },

    // 上下曲切换
    getMusic:function(e){
      this.$store.commit("setIndexCom",e)
      this.gethttpMusic(this.$store.getters.getDatas[this.$store.getters.getIndex].hash)
    
    },
    // 下一曲切换 http 请求
    gethttpMusic:function(hash){
      this.init()
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
    }
  },
  mounted(){

    
  },
  watch:{
    // 监听歌词移动
    larIndex(e){
      console.log(e)
      if(e >4){
          this.marTop = -21*(e-3)
      }

    }


  },
  computed:{
    palyshow () {
        return this.$store.getters.getPalyshowl
      },
    imgUrl(){
      return this.$store.getters.getAudio.imgUrl
    },
    lrcArray(){
      this.Lyric = this.$store.getters.getSongLrc
         return  this.$store.getters.getSongLrc
    },
    datas:{
      get:function () {
       return this.$store.getters.getAudio
      },
      set:function () {
          this.datas = this.$store.getters.getAudio
      }
    }
 
  },
  created:function(){
     
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
.floatLeft{
  float: left;
}
.floatRight{
  float: right;
}
.backImg{
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0.4;
  transform: scale(2,2);
  z-index: -1;
}
.class_a{
  font-size: 20px;
  color: red
}
.musicDetails{
	position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #2f2331;
    z-index: 4
    color #fff
}
.title{
	  text-align: center;
    margin: 0;
    font-size: 20px;
    padding: 10px 0;
}
.audioEl{
  display: none;
}
.audioCon{
  height: 40%;
  text-align: center;
  margin-top: 20%;
  margin-bottom: 10%;
  overflow: hidden;
}
.play{
    text-align: center;
}
.audio_img{
height: 140px;
width: 140px;
margin: 0 auto;
border-radius: 50%;
border: 1px solid #928f8f;
padding: 20px;
margin-top: 30px
}
.audioCon .rotate{
  animation:circling 3s linear 0s infinite;
}
.audio_img img{
  border-radius: 50%
}
.lyricShow{
  margin-top: 20px;
}
.audioSpeed{
  padding: 0 50px;
}

@keyframes circling{
   0%{
     transform:rotate(0deg);
   }
   100%{
     transform:rotate(360deg);
   }
 }
 .play{
   padding:0 80px; 
 }
 .play .playL{
    display: block;
    padding: 15px 0;
 }
</style>
