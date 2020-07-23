<template>
    <div class="videoContainer">
        <navBar></navBar>
        <ul class="video">
            <li v-for="(item, index) in videoList" :key="item.id">
                <img src="../../images/play.png" alt="" @click.stop="getVideoUrl(item.id,index)" v-show="control == index?false:true">
                <video :src="videoUrl" :poster="item.cover" :controls="control == index" :autoplay="control == index"></video>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import navBar from '../bar/navBar.vue';
export default {
    data(){
        return{
            videoList:[],
            videoUrl:'',
            control:-1,
        }
    },
    created(){
        this.getVideo();
    },
    methods:{
        getVideo(){
            this.$ajax({
                method:'get',
                url:'/top/mv'
            }).then(response =>{
                var data = response.data;
                this.videoList = data.data;
            })
        },
        getVideoUrl(id,index){
            this.$ajax({
                method:'get',
                url:'/mv/url?id=' + id
            }).then(response =>{
                var data = response.data;
                this.videoUrl = data.data.url;
            });
            this.control = index;
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less">
    .videoContainer{
        margin-bottom: 50px;
        .video{
            width: 100%;
            list-style: none;
            padding: 0;
            margin-top: 45px;
            li{
                width: 100%;
                margin-bottom: 10px;
                padding: 10px 0;
                background-color: white;
                position: relative;
                 img{
                     position: absolute;
                     top:25%;
                     left: 40%;
                    z-index: 99;
                 }
                 video{
                     width: 90%;
                     border-radius: 10px;
                     display:block;
                     margin: 10px auto;
                 }
                 p{
                     font-size: 14px;
                     color: #333;
                     padding-left: 20px;
                     font-family: '微软雅黑';
                 }
            }
        }
    }
</style>