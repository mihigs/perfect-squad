export default {
    //loads data from JSON blob into state
    loadPlayerData(state, data){
        // state.players = data.players;
        state.formations = data.formations;
        state.status = 1;

        //adds meta data and sorts players based on position
        data.players.forEach((player, index) => {
            //adds a unique ID for each player
            player.ID = index;
            state.players.push(player);
            
            //adds the array for future ratings
            player.rating = [];

            //calculates and adds the age to the player data
            let today = new Date();
            today = today.getTime()
            player.stats.age = new Date(today - Date.parse(player.stats.birthDate)).getUTCFullYear() - 1970;

            //saves sorted players' IDs in an array
            //the array is used to easily access players on certain positions
            let tempPosition = player.stats.position;
            switch (tempPosition[1]){
                case 'K': state.sortedPlayersIDs.GK.push(player.ID); break;
                case 'B': state.sortedPlayersIDs.DEF.push(player.ID); break;
                case 'M': state.sortedPlayersIDs.MID.push(player.ID); break;
                case 'W': state.sortedPlayersIDs.ATT.push(player.ID); break;
                case 'F': state.sortedPlayersIDs.ATT.push(player.ID); break;
                default: state.sortedPlayersIDs.NA.push(player.ID);
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

        //we need to parse formation data so it can be displayed by the UI dynamically
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
    savePlayerRating(state, { rating, playerID }){
        state.players[playerID].rating.push(rating);
    },
}