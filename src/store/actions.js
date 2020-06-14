import axios from 'axios'

export default {
    //gets data from JSON blob
    getPlayerData({commit}, url){
        axios.get(url)
        .then(res => {
            commit('loadPlayerData', res.data);
        });
    },
}