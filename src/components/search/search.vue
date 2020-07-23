<template>
    <div class="searchContainer"> 
        <div class="search">
            <i class="fa fa-angle-left fa-2x" @click="goback"></i>
            <input type="search" v-model="value" :placeholder="keyWords" @keyup="updataSongs">
        </div>
        <div class="searchList">
            <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="100">
                <li v-for="item in list" :key="item.id" @click="addSongs(item.id, item.name, item.artists[0].name, item.artists[0].img1v1Url)">
                    <p class="name">{{item.name}}</p>
                    <p class="artist">{{item.artists[0].name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            keyWords:'',
            list:[],
            value:''
        }
    },
    created(){
        this.getKeyWords();
    },
    methods:{
        getKeyWords(){
            this.$ajax({
                method:'get',
                url:'/search/default'
            }).then(response =>{
                var data = response.data;
                this.keyWords = data.data.showKeyword;
            })
        },
        getSong(){
            if(this.value == ''){
                this.list = [];
            }else{
                this.$ajax({
                method:'get',
                url:'/search?keywords=' + this.value,
                }).then(response =>{
                var data = response.data;
                this.list = data.result.songs;
                })
            }
        },
        updataSongs(){
            this.getSong();
            console.log(this.value);
        },
        goback(){
            this.$router.go(-1);
        },
        loadMore(){

        },
        addSongs(id,name,art,picUrl){
            console.log('click');
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
    .search{
        height: 40px;
        width: 100%;
        background-color: #ce3230;
        position: fixed;
        top:0;
        i{
            color: white;
            display: block;
            width: 10%;
            height: 37px;
            float: left;
            padding-left: 3%;
            margin-top: 3px;
        }
        input{
            display: block;
            width:86%;
            height: 30px;
            float: left;
            margin-top: 5px;
            border:none;
            color: white;
        }
        input::-webkit-input-placeholder{
            color: rgba(230, 227, 227, 0.514);
            font-size: 14px;
            opacity:1;
            text-align: left;
        }
    }
    .searchList{
        margin-top: 40px;
        ul{
            list-style: none;
            padding: 0;
            li{
                border-bottom:1px solid #aaa;
                height: 50px;
                padding-left: 15px;
                .name{
                    font-size: 14px;
                    color: #333;
                    font-family: '微软雅黑';
                    padding-top: 7px;
                    margin-bottom: 0;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .artist{
                    font-size: 12px;
                    color: #aaa;
                    font-family: '微软雅黑';
                }
            }
        }
    }
</style>