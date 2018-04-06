# vue-music
vue 实现音乐播放器

后台接口 借用于 GitHub 上 node-spliderApi数据爬虫 地址：https://github.com/ecitlm/Node-SpliderApi。

服务器搭建为本地服务器：
    node-spliderApi 文件中 utils/axios_render.js  中 axios.defaults.baseURL = 'http://192.168.0.110:3001' 为本地域名 如果为 默认为localhost  在手机端打开 将无法进行http 请求

    const localhost = "http://192.168.0.110:3001/api/"   // 个人例子需要改为自己的ip  src/Api/api.js


    