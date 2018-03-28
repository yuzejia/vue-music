// 测面滑动菜单效果
const audioInfo = {
	state: {
		datas:[],
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
		palyshow:false
    },
    //可以认为是 store 的计算属性
	getters:{
		// 获取audio元素
		getAudioElement: state => state.audioelement,
		// 获取歌曲页显示状态
		getPalyshowl: state => state.palyshow,

		gethsah: state => state.hash,
		// 获取 歌曲信息
		getAudio: state => state.audio,
		// 获取 歌曲信息
		getInputName: state => state.inputName,
		// 获取 歌曲列表
		getDatas: state => state.datas,
	},
    /*
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    Vuex 中的 mutation 非常类似于事件：
    每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
	*/


	mutations: {
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
		// 获取 hash
		setPlayhash(state, type){
			state.hash = type.hash
		},
		// 获取歌曲信息
		setPlayaudio(state, type){
			state.audio = type.audio

			let subStr=new RegExp('{size}');//创建正则表达式对象
      		let result=type.audio.imgUrl.replace(subStr,"200");//把'is'替换为空字符串
      		state.audio.imgUrl = result
		
		},
		// 获取 Audio Dom
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
	}
	
}
export default audioInfo
