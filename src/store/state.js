export default {
    status: 0,
    players: [],
    formations: [],
    favoritePlayers: [],

    //holds players IDs, sorted by position
    sortedPlayersIDs: {
        GK: [],
        DEF: [],
        MID: [],
        ATT: [],
        NA: [],
    },

    //currently selected formation
    selectedFormation: {
        formation: false,
    },
}