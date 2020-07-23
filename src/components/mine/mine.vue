<template>
    <div class="mineContainer">
        <div class="topbar">
            <i class="fa fa-angle-left fa-2x" @click="goback"></i>
            <a @click="isShow">最近播放</a>
            <a @click="isShow">我的♥♥</a>
        </div>
        <ul class="mui-table-view" v-show="appera">
            <li class="mui-table-view-cell" v-for="(item,index) in recordSongs" :key="item.id" @click="addSongs(item.id, item.name, item.art, item.picUrl)">
                <div class="num">{{index+1}}</div>
                    <div class="title">
                        <p class="name">{{item.name}}</p>
                        <p class="arname">{{item.art}}</p>
                </div>
            </li>
        </ul>
        <ul class="mui-table-view" v-show="!appera">
            <li class="mui-table-view-cell" v-for="(item,index) in loveSongs" :key="item.id" @click="addSongs(item.id, item.name, item.art, item.picUrl)">
                <div class="num">{{index+1}}</div>
                    <div class="title">
                        <p class="name">{{item.name}}</p>
                        <p class="arname">{{item.art}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            recordSongs:[],
            loveSongs:[],
            appera:true
        }
    },
    created(){
        this.getRecordSongs();
        this.getLoveSongs();
        console.log(this.recordSongs);
        console.log(this.loveSongs);
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        getRecordSongs(){
            this.recordSongs = JSON.parse(localStorage.getItem('songs') || '[]');
        },
        getLoveSongs(){
            this.loveSongs = JSON.parse(localStorage.getItem('loveSongs') || '[]');
        },
        isShow(){
            this.appera = !this.appera;
        },
        addSongs(id,name,art,url){
            var songsInfo = {
                id:id,
                name:name,
                art:art,
                picUrl:url
            };
            this.$store.commit("addSongs",songsInfo);
        }
    }
}
</script>
<style lang="less">
    .mineContainer{
        height: 45px;
        width: 100%;
        background-color: #ce3230;
        i{
            color: white;
            display: block;
            width: 10%;
            height: 37px;
            float: left;
            padding-left: 3%;
            margin-top: 3px;
        }
        a{
            height: 45px;
            color: white;
            font-size: 16px;
            line-height: 45px;
            font-family: '微软雅黑';
            margin-left: 15%;
        }
        .mui-table-view{
                .mui-table-view-cell{
                    .title{
                        width: 90%;
                        float: left;
                        p{
                        
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .name{
                            font-size: 14px;
                            font-family: '微软雅黑';
                            color: #333;
                        }
                        .arname{
                            font-size: 12px;
                            font-family: '微软雅黑';
                            color: #aaa;
                        }
                    }
                    .num{
                        width:10%;
                        padding-top: 10px;
                        padding-left:5px ;
                        float: left;
                        color: #333;
                        font-family: '微软雅黑';
                    }
                }
            }
    }
</style>