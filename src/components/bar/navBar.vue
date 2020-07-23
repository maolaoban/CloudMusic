<template>
    <div class="navContainer">
        <header class="header">
            <div class="mine">
                <a><span class="mui-icon mui-icon-bars"></span></a>
            </div>
            <ul>
                <router-link tag="li" to="/mine" class="tab">我的</router-link>
                <router-link tag="li" to="/find" class="tab">发现</router-link>
                <router-link tag="li" to="/video" class="tab">视频</router-link>
            </ul>
            <div class="search">
                <router-link tag="a" to="/search"><span class="mui-icon mui-icon-search"></span></router-link>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .navContainer{
        .header{    
            position: fixed;
            top:0;
            z-index: 100;
            height: 45px;
            width: 100%;
            background-color: #cd3230;
            .mine{
                width: 40px;
                height: 45px;
                float: left;
                padding-left:15px;
                a{
                    color: white;
                    line-height: 45px;
                }
            }
            ul{
                width: 60%;
                height:45px;
                padding: 0;
                margin: 0 auto;
                li{
                    list-style: none;
                    color:white;
                    font-size: 16px;
                    font-family: '微软雅黑';
                    width: 33%;
                    height: 45px;
                    margin: 0;
                    float: left;
                    line-height: 45px;
                    text-align: center;
                }
            }
            .search{
                width: 40px;
                height: 45px;
                position: absolute;
                top:0;
                right:0;
                a{
                    color: white;
                    line-height: 45px;
                }
            }
        }
    }
</style>