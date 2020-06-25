export default {
    status: 0,
    players: [],
    formations: {},

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
        //default id is -1, when no formation is selected
        id: -1,
        formation: {},
        //parsed formation data, to be used for display on the homepage
        parsedFormation: [],
    },
}