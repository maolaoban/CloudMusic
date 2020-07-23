<template>
    <div class="topListContainer">
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
			<h1 class="mui-title">排行榜</h1>
		</header>
        <ul class="mui-table-view">
				<router-link :to="'/find/songList/' + item.id" tag="li" class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.coverImgUrl">
						<div class="mui-media-body">
                            {{item.name}}
                            <p class='mui-ellipsis'>更新时间：{{item.updateFrequency}} <br>
                            播放量：{{Math.round((item.playCount)/10000)}}万</p>
						</div>
					</a>
				</router-link>
		</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getTopList();
    },
    methods:{
        getTopList(){
            this.$ajax({
                method:'get',
                url:'/toplist/detail'
            }).then(response =>{
                var data = response.data;
                this.list = data.list;
            })
        },
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less">
    .topListContainer{
        .mui-bar{
            background-color: #ce3230;
            .mui-action-back{
                color: white;
            }
            h1{
                font-size: 15px;
                color: white;
                font-family: '微软雅黑';
                position: relative;
                left: 0;
            }
        }
        .mui-table-view{
            margin-top: 45px;
            .mui-table-view-cell{
                height: 110px;
                a{
                    display: block;
                    width: 100%;
                    height: 110px;
                    img{
                        max-width: 110px;
                        height: 100%;
                        border-radius: 5px;
                    }
                    .mui-media-body{
                        margin-top: 10px;
                        font-family: '幼圆';
                        font-size: 16px;
                        font-weight: bold;
                        color:#333;
                        p{
                        color: #aaa;
                        font-size: 12px;
                        line-height: 14px;
                        margin-top: 20px;
                        }
                    }
                }
            }
        }
    }
</style>