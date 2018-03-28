
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

         // 获取 歌曲排行榜
         get_plist_songs({}, obj){
            return api_get(API.new_plist_songs)(obj)
        },
        
        // 获取招聘
        get_job_list({}, obj){
            return api_get(API.new_job_list)(obj)
        },
       
    }
}