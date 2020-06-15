export default {
    //loads data from JSON blob into state
    loadPlayerData(state, data){
        state.players = data.players;
        state.formations = data.formations;
        state.status = 1;
    },
    //if data fails to load, state data status is 2
    errorLoadingPlayerData(state){
        state.status = 2;
    }
}