<template>
    <div class="musicBar">
        <audio id="audio" :src="url" muted></audio>
        <div class="left">
            <img :src="songsInfo.picUrl" alt="">
            <span>
                <P class="name">{{songsInfo.name}}</P>
                <P class="art">{{songsInfo.art}}</P>
            </span>
        </div>
        <div class="right">
            <i class="fa fa-pause-circle-o fa-2x play" aria-hidden="true" v-show="ispause" @click="musicStop"></i>
            <i class="fa fa-play-circle-o fa-2x play" aria-hidden="true" v-show="isplay" @click="musicPlay"></i>
            <img src="../../images/x1.png" alt="" v-show="isLove" @click="addLove">
            <img src="../../images/x2.png" alt="" v-show="!isLove" @click="removeLove">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           url:'',
           songsInfo:{},
           loveSong:[],
           ispause:false,
           isplay:true,
           isPlaying:false,
           isLove:true
        }
    },
    created(){
        this.getMusic();
    },
    methods:{
        getMusic(){
            this.songsInfo = JSON.parse(localStorage.getItem('songs'))[0];
            this.loveSong = JSON.parse(localStorage.getItem('loveSongs'));
            this.loveSong.some(item =>{
                if(this.songsInfo.id == item.id){
                    this.isLove = false;
                }else{
                    this.isLove = true;
                }
                return true;
            })
            this.$ajax({
                method:'get',
                url:'/song/url?id=' + this.songsInfo.id
            }).then(response =>{
                var data = response.data;
                this.url = data.data[0].url;
            })
        },
        musicStop(){
            var audio = document.querySelector('#audio');
            if(this.isPlaying){
                audio.pause();
                this.ispause = false;
                this.isplay = true;
                this.isPlaying = false;
            }
                
        },
        musicPlay(){
            var audio = document.querySelector('#audio');
            if(!this.isPlaying){
                audio.play();
                this.ispause = true;
                this.isplay = false;
                this.isPlaying = true;
            } 
            console.log('play');      
        },
        addLove(){
            var loveSongsInfo = {
                id:this.songsInfo.id,
                name: this.songsInfo.name,
                art: this.songsInfo.art,
                picUrl:this.songsInfo.picUrl
            };
            this.$store.commit("addLoveSongs",loveSongsInfo);
            this.isLove = false;
        },
        removeLove(){
            this.$store.commit("removeLoveSongs",this.songsInfo.id);
            this.isLove = true;
        }
    },
    watch:{
        '$store.state.songs'(){
            this.getMusic();
            if(this.isPlaying){
                this.musicStop();
            }else{
                this.ispause = false;
                this.isplay = true;
                this.isPlaying = false;
            }
        }
    }
}
</script>
<style lang="less">
    .musicBar{
        width: 100%;
        height: 49px;
        background-color: rgb(245, 245, 245);
        position: fixed;
        bottom: 0;
        .left{
            float: left;
            height: 100%;
            width: 70%;
            img{
                height:40px;
                width: 40px;
                border-radius: 50%;
                float: left;
                margin-left: 5px;
                margin-top: 5px;
            }
            span{
                float: left;
                height:46px;
                width: 80%;
                padding-top: 12px;
                margin-left: 5px;
                p{
                    margin: 0;
                    color: #333;
                    font-size: 14px;
                    line-height: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .art{
                    font-size: 12px;
                    color: #aaa;
                }
            }
        }
        .right{
            float: right;
            width: 25%;
            height: 46px;
            position: relative;
            i{
                line-height: 48px;
                color: #333;
            }
            .play{
                position: absolute;
                left:10px;
            }
            img{
                width: 60px;
                height: 60px;
                position: absolute;
                right: 0px;
                bottom:-10px;
            }
        }
    }
</style>