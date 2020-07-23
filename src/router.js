import vuerouter from 'vue-router';
import find from './components/find/find.vue';
import songList from './components/songList/songList.vue';
import videoList from './components/videoComponent/video.vue';
import search from './components/search/search.vue';
import topList from './components/topList/topList.vue';
import mine from './components/mine/mine.vue';
var router = new vuerouter({
    routes:[
        {path:'/',redirect:'/find'},
        {path:'/find',component:find},
        {path:'/find/songList/:id',component:songList},
        {path:'/video',component:videoList},
        {path:'/search',component:search},
        {path:'/find/topList',component:topList},
        {path:'/mine',component:mine}
    ],
    linkActiveClass:'mui-active'
})
export default router;