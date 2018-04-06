
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import API from '../Api/api'

function api_get(api) {
    return (id = null) => axios({
        method: 'get',
        url: api.url+api.data(id),
    })
  }
  function api_Post(api) {
    return (parame = null) => axios({
        method: 'post',
        url: api.url,
       data:{

       }
    })
  }
export default{
    actions: {
        // 获取最新歌曲
        get_songs({}){
          return api_get(API.new_songs)()
        },
        // 获取排行榜
        get_rank_list({}){
            return api_get(API.new_rank_list)()
          },

         // 获取 音乐歌单下的音乐列表
         get_plist_songs({}){
            return api_get(API.new_plist_songs)()
        },
        // 获取歌手信息
        get_job_list({}, obj){
            return api_get(API.new_job_list)(obj)
        },
         // 获取音乐详情
         get_song_info({}, obj){
            return api_get(API.new_song_info)(obj)
        },
         // 获取歌词
         get_song_lrc({}, obj){
            return api_get(API.new_song_lrc)(obj)
        },
        // 搜索
        get_music_search({}, obj){
            return api_get(API.new_music_search)(obj)
        },
       
    }
}