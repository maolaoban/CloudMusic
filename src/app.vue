<template>
    <div class="appContainer">
        <router-view></router-view>
        <musicBar></musicBar>
    </div>
</template>
<script>
import musicBar from './components/bar/musicBar.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        musicBar
    }
}
</script>
<style lang="less">
</style>

