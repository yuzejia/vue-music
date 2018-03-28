/**
 * Created by sioxa on 2016/12/25 0025.
 */
// 对象 处理字符
 function obj_string(obj){
   console.log(obj)
   if( typeof obj == "object"){
      let o = Object.values(obj)
      return o.join("/")
   }else{
      return obj
   }
    
 }

 const localhost = "http://localhost:3001/api/"
export default {
    // 获取最新歌曲
    new_songs: {
      url: localhost+'new_songs',
      data:()=> {
        return ""
      }
    },
    // 获取 歌曲排行
    new_plist_songs: {
      url: localhost+'plist_songs/',
      data:(obj)=> {
        return obj_string(obj)
        }
    },

    // 获取 招聘信息
    new_job_list: {
      url: localhost+'job_list/',
      data:(obj)=> {
        return obj_string(obj)
        }
    },
    // 获取歌手信息
    new_song_info: {
      url: localhost+'song_info/',
      data:(obj)=> {
        return obj_string(obj)
        }
    },
    // 搜索歌曲
    new_music_search: {
    url: localhost+'music_search/',
      data:(obj)=> {
        return obj_string(obj)
        }
    }

  }
  