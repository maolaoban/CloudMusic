<template>
    <div class="songListContainer">
        <header id="header" class="mui-bar mui-bar-transparent">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
			<h1 class="mui-title">官方动态歌单</h1>
		</header>
        <div class="info">
            <img :src="playImg" alt="">
        </div>
        <div class="list">
            <p class="play">
                <i class="fa fa-play-circle fa-lg" aria-hidden="true"></i>
                播放全部
            </p>
            <ul class="mui-table-view">
				 <li class="mui-table-view-cell" v-for="(item,index) in playList" :key="item.id" @click="addSongs(item.id, item.name, item.ar[0].name, item.al.picUrl)">
                     <div class="num">{{index+1}}</div>
                     <div class="title">
                         <p class="name">{{item.name}}</p>
                         <p class="arname">{{item.ar[0].name}}-{{item.al.name}}</p>
                     </div>
                 </li>
			</ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            playList:[],
            playImg:'',
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            console.log(this.id);
            this.$ajax({
                method:'get',
                url:'/playlist/detail?id='+this.id
            }).then(response =>{
                var data = response.data;
                if(data.code == 200){
                    this.playList = data.playlist.tracks;
                    this.playImg = data.playlist.backgroundCoverUrl || data.playlist.coverImgUrl;
                }
            })
        },
        goback(){
            this.$router.go(-1);
        },
        addSongs(id,name,art,picUrl){
            var songsInfo = {
                id:id,
                name:name,
                art:art,
                picUrl:picUrl
            };
            this.$store.commit("addSongs",songsInfo);
        }
    }
}
</script>
<style lang="less">
    .songListContainer{
        .info{
            width: 100%;
            img{
            width: 100%;
            }
        }
        .mui-bar{
            .mui-action-back{
                color: white;
            }
            .mui-title{
                font-size: 14px;
                color: white;
                font-family: '微软雅黑';
                position: relative;
                left: 0;
            }
        }
        .list{
             position: relative;
             top:-60px;
            // padding-top: 50px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-color: white;
            .play{
                font-size: 15px;
                font-family: '微软雅黑';
                color: #333;
                margin-left: 15px;
                display: block;
                padding-top: 10px;
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
    }
</style>