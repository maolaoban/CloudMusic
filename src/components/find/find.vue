<template>
    <div class="findContainer">
        <navBar></navBar>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeList" :key="item.bannerId">
            <img :src="item.pic" alt="">
        </mt-swipe-item>
        </mt-swipe>
        <div class="middle">
            <ul>
                <li><img src="../../images/f1.png" alt="">每日推荐</li>
                <li><img src="../../images/f2.png" alt="">歌单</li>
                <router-link to="/find/topList" tag="li"><img src="../../images/f3.png" alt="">排行榜</router-link>
                <li><img src="../../images/f4.png" alt="">电台</li>
                <li><img src="../../images/f5.png" alt="">直播</li>
            </ul>
        </div>
        <div class="songList">
            <p class="title">懂你的精选歌单</p>
            <ul>
                <router-link tag="li" v-for="item in songList" :key="item.id" :to="'/find/songList/'+item.id">
                    <img :src="item.picUrl" alt="">
                    <p>{{item.name}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import navBar from '../bar/navBar.vue';
export default {
    data(){
        return{
            swipeList:[],
            songList:[]
        }
    },
    created(){
        this.getSwipe();
        this.getSongList();
    },
    methods:{
        getSwipe(){
            this.$ajax({
                method:'get',
                url:'/banner?type=1'
            }).then(response =>{
                var data = response.data;
                this.swipeList = data.banners;
            })
        },
        getSongList(){
            this.$ajax({
                method:'get',
                url:'/personalized?limit=12'
            }).then(response =>{
                var data = response.data;
                this.songList = data.result;
            })
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less">
    .findContainer{
        margin-bottom: 50px;
        .mint-swipe{
        height: 166px; 
        width: 100%;
        margin-top:45px;
        padding: 8px 0;
        background: linear-gradient(to bottom, #cd3230 75%, rgba(255, 255, 255, 0) 25%);
        .mint-swipe-indicators {
            .mint-swipe-indicator{
                background-color: #fff;
            }
            .mint-swipe-indicator.is-active{
                opacity: 1;
                background-color: #cd3230;
            }
        }
        .mint-swipe-items-wrap{
            border-radius: 8px;
            width: 92%;
            height: 100%;
            margin: 0 auto;
            .mint-swipe-item{
            // background-color: #369;      
            img{
                width: 100%;
                height: 100%;
                }      
            }
        }
        }
        .middle{
            height: 70px;
            width: 100%;
            ul{
                width: 100%;
                height: 70px;
                margin: 0;
                padding-left: 0;
                padding:5px 15px;
                display: flex;
                justify-content: space-between;
                li{
                    list-style: none;
                    width: 50px;
                    height: 50px;
                    float: left;
                    background-color: #ce3230;
                    padding: 5px;
                    border-radius: 25px;
                    
                    text-align: center;
                    font-size: 10px;
                    font-family: '微软雅黑';
                    color: #333;
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
        .songList{
            .title{
                font-size: 14px;
                font-family: '微软雅黑';
                font-weight: bold;
                color: #333;
                margin-left: 14px;
                margin-top: 10px;
            }
            ul{
                width: 100%;
                height:100%;
                padding: 0 14px;
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    width: 30%;
                    height: 140px;
                    margin-bottom: 8px;
                    img{
                        width: 100%;
                        max-height: 110px;
                        border-radius: 6px;
                    }
                    p{
                        font-size: 10px;
                        font-family: '微软雅黑';
                        color: #333;
                        line-height: 12px;
                        word-wrap: break-word;
                    }
                }
            }
        }
        .mui-off-canvas-left{
            background-color: white;
        }
    }
</style>