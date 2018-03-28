// 测面滑动菜单效果
const audioInfo = {
	state: {
		datas:[],
		// audio元素
		audioelement: '',
		// audio信息
		audio: {
			id: 0,
			name: '',
			singer: '',
			url: '',
			img_url: '',
			type: '',
			lyric: ''
		},
		// 播放页面显示
		palyshow:false
    },
    //可以认为是 store 的计算属性
	getters: { 

    },
    /*
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    Vuex 中的 mutation 非常类似于事件：
    每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
	*/
	getters:{
		getPalyshowl: state => state.palyshow,
	},
	mutations: {
		// 切换播放页面
		playshow (state) {
			state.palyshow = !state.palyshow
		  },
		  // 关闭播放页面
		  setPlayMusic (state, type) {
			state.palyshow = type.isShow
		},
    },
    /*
        Action 提交的是 mutation，而不是直接变更状态。
        Action 可以包含任意异步操作。
    */
	actions: {
		set_PlayMusic  ({commit}, obj) {
			commit('setPlayMusic', obj)
		},
	}
}
export default audioInfo
