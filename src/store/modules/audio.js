import API from '../../Api/api'
// 测面滑动菜单效果
const audioInfo = {
	state: {
		// 当前歌曲坐标
		index:null,
		datas:[],
		song_lrc:[],
		// audio元素
		audioelement: '',
		hash:"",
		// audio信息
		audio: {
			url:"",
			imgUrl:""
			
		},
		// 搜索 词
		inputName:"",
		// 播放页面显示
		palyshow:false,
		// alert提示
		alertShow:false,
		alertMess:""
    },
    //可以认为是 store 的计算属性
	getters:{
		// 获取audio元素
		getAudioElement: state => state.audioelement,
		// 获取audio元素
		getIndex: state => state.index,
		// 获取歌曲页显示状态
		getPalyshowl: state => state.palyshow,

		gethsah: state => state.hash,
		// 获取 歌曲信息
		getAudio: state => state.audio,
		// 获取 歌曲信息
		getInputName: state => state.inputName,
		// 获取 歌曲列表
		getDatas: state => state.datas,
		// 获取 歌曲歌词
		getSongLrc: state => state.song_lrc,
		// 获取 alert 状态
		getAlertShow: state => state.alertShow,
		// 获取 alert 信息
		getAlertMess: state => state.alertMess,
		
	},
    /*
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    Vuex 中的 mutation 非常类似于事件：
    每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
	*/


	mutations: {
		//alertShow
			alertShow (state,type) {
			state.alertShow = type
		  },
		  //alertShow
		  alertMess (state,type) {
			  console.log(type)
			state.alertMess = type
		  },
		// 播放设置
		play (state) {
			console.log(34546456547)
			state.playing = true
			state.audioelement.play()
		},
		// 暂停设置
		pause (state) {
			state.playing = false
			state.audioelement.pause()
		},
		// 切换播放页面
		playshow (state) {
			state.palyshow = !state.palyshow
		  },
		  // 关闭播放页面
		  setPlayMusic (state, type) {
			state.palyshow = type.isShow
		},
		// 设置 hash
		setPlayhash(state, type){
			state.hash = type.hash
		},
		setIndex(state, index){
			console.log(index)
			state.index = index
		},
		setIndexCom(state, type){
			console.log(type)
			if(type){
				state.index == state.datas.length-1? [console.log("最后一首") ]: state.index++ ;
				
			}else{
				state.index<=0? [ console.log("第一首")]: state.index-- ;
			}
		},
		// 设置歌曲信息
		setPlayaudio(state, type){
			state.audio = type.audio

			let subStr=new RegExp('{size}');//创建正则表达式对象
      		let result=type.audio.imgUrl.replace(subStr,"200");//把'is'替换为空字符串
      		state.audio.imgUrl = result
		
		},
		// 设置 Audio Dom
		setAudioElement (state, ele) {
			state.audioelement = ele
			console.log(ele)
		},
		// 设置 搜索信息
		setInputName (state, name) {
			state.inputName = name
		},
		// 设置 datas
		setDatas (state, data) {
			console.log(data)
			state.datas = data
		},
		// 设置 歌词
		setSong_Lrc (state, data) {
			let lrcS = []
			let LyricN = data.lrc.split(/\n/)
				for(let i in LyricN){
				var str = LyricN[i];
				let re = /\d{2}:\d{2}\.\d{2}/g;  //00:00:00
				let re2 = /\[\d{2}:\d{2}\.\d{2}\]/g;  //[00:00:00]
				let strA = str.match(re)
				if(strA instanceof Array){
					 var arr = strA[0].split(':') 
					 strA[0] = (parseFloat(arr[0]*60)+parseFloat(arr[1])).toFixed(2)
					 strA.text =  str.replace(re2,'')
					 lrcS.push(strA)
				}
				}
				state.song_lrc = lrcS
		},

		getHttp (state) {
			console.log(state.inputName)
			this.dispatch('get_music_search',state.inputName)
			.then((res) => {
				console.log(res)
			  })
		},
    },
    /*
        Action 提交的是 mutation，而不是直接变更状态。
        Action 可以包含任意异步操作。
    */
	actions: {
		set_Http ({commit}) {
			commit('getHttp')
		},
		set_AudioElement ({commit}, ele) {
			commit('setAudioElement', ele)
		},
		set_PlayMusic  ({commit}, obj) {
			commit('setPlayMusic', obj)
		},
		set_Playhash  ({commit}, obj) {
			commit('setPlayhash', obj)
		},
		set_Playhash  ({commit}, obj) {
			commit('setPlayaudio', obj)
		},
		set_inputName ({commit}, ele) {
			commit('setInputName', ele)
		},
		set_datas ({commit}, ele) {
			commit('setDatas', ele)
		},
		set_song_Lrc ({commit}, ele) {
			commit('setSong_Lrc', ele)
		},
		set_alertShow ({commit}, ele) {
			commit('alertShow', ele)
		},
		set_alertMess ({commit}, ele) {
			commit('alertMess', ele)
		},
	}
	
}
export default audioInfo
