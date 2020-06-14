export default {
    //loads data from JSON blob into state
    loadPlayerData(state, data){
        state.players = data.players;
        state.formations = data.formations;
    }
}