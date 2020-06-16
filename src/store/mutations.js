export default {
    //loads data from JSON blob into state
    loadPlayerData(state, data){
        state.players = data.players;
        state.formations = data.formations;
        state.status = 1;

        //sorting players based on position
        state.players.forEach(player => {
            let tempPosition = player.stats.position;
            if(tempPosition === 'GK'){
                state.sortedPlayers.GK.push(player);
            }else if(tempPosition[1] === 'B'){
                state.sortedPlayers.DEF.push(player);
            }else if(tempPosition[1] === 'M'){
                state.sortedPlayers.MID.push(player);
            }else if(tempPosition[1] === 'W' || tempPosition === 'CF'){
                state.sortedPlayers.ATT.push(player);
            }else{
                //if a player doesnt have their position listed
                state.sortedPlayers.NA.push(player);
            }
        });
    },
    //in case data fails to load, state data status is 2
    errorLoadingPlayerData(state){
        state.status = 2;
    }
}