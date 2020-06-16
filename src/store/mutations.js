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
    },
    //saves selected formation to state
    saveSelectedFormation(state, data){
        state.selectedFormation.id = data.index;
        state.selectedFormation.formation = data.formation;

        //we need to parse formation data so it can be displayed by the UI
        let tempParsedFormation = [];
        tempParsedFormation = state.selectedFormation.formation.split('-');
        //parses string to numbers
        tempParsedFormation.forEach((position, index) => {
            tempParsedFormation[index] = parseInt(position);
        });
        //if the DEF has more players, we shift some forward
        if(tempParsedFormation[0] > 2){
            tempParsedFormation.unshift(2);
            tempParsedFormation[1] -= 2;
        }
        //sorts DEF players to make it look better
        if(tempParsedFormation[0] > tempParsedFormation[1]){
            let temp = tempParsedFormation[0];
            tempParsedFormation[0] = tempParsedFormation[1];
            tempParsedFormation[1] = temp;
        }
        //if the MID has more players, we shift some forward
        if(tempParsedFormation[2] >= 4){
            tempParsedFormation[2] -= 2;
            tempParsedFormation.splice(3, 0, 2);
        }
        //makes ATK look better
        if(tempParsedFormation.length < 5 && tempParsedFormation[3] > 2){
            tempParsedFormation.push(1);
            tempParsedFormation[3] -= 1;
        }
        //saves the parsed formation to state
        state.selectedFormation.parsedFormation = tempParsedFormation;
    },
}