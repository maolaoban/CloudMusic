import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var lsSongs = JSON.parse(localStorage.getItem('songs') || '[]');
var lsLove = JSON.parse(localStorage.getItem('loveSongs') || '[]');
const store = new Vuex.Store({
    state:{
        songs:lsSongs,
        loveSongs:lsLove,
    },
    mutations:{
        addSongs(state,songsInfo){
            state.songs.some((item,index) =>{
                if(songsInfo.id == item.id){
                    state.songs.splice(index,1);
                }
            })
            state.songs.unshift(songsInfo);
            localStorage.setItem('songs',JSON.stringify(state.songs));
        },
        addLoveSongs(state,loveSongsInfo){
            state.loveSongs.unshift(loveSongsInfo);
            localStorage.setItem('loveSongs',JSON.stringify(state.loveSongs));
        },
        removeLoveSongs(state,songsId){
            state.loveSongs = state.loveSongs.filter(item =>{
                return item.id != songsId;
            })
            localStorage.setItem('loveSongs',JSON.stringify(state.loveSongs));
        }
    }
})
export default store;