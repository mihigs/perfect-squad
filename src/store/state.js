export default {
    status: 0,
    players: [],
    formations: {},
    sortedPlayers: {
        GK: [],
        DEF: [],
        MID: [],
        ATT: [],
        NA: [],
    },
    selectedFormation: {
        //default id is -1, when no formation is selected
        id: -1,
        formation: {},
        //parsed formation data, to be used for display on the homepage
        parsedFormation: [],
    },
}