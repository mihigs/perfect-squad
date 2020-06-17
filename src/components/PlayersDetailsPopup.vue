<template>
<div>
    <!-- Darker background when popup is active -->
    <div class="popup-background-fade" @click="closePopup" v-show="detailsOpen">
    </div>
    <!-- Popup container -->
    <div class="details-popup-container" v-show="detailsOpen">

        <!-- Left side -->
        <div class="details-basic-info">
            <div class="details-basic-info-header">
                <div class="details-player-name">{{player.name}} {{player.lastName}}</div>
                <div class="details-player-position"><div class="details-player-position-text">{{player.stats.position}}</div></div>
                <div class="details-player-rating"></div>
            </div>
            <div class="details-player-picture" :style="{ backgroundImage: `url(${player.formationPicture}`}"></div>
            <!-- Nationality -->
            <div class="details-bar">{{player.nationality}}
                <div class="details-player-icon details-data" :style="{ backgroundImage: `url(${player.nationalityFlag}`}"></div>
            </div>
            <!-- Club -->
            <div class="details-bar">{{player.stats.club}}
                <div class="details-player-icon details-data" :style="{ backgroundImage: `url(${player.teamCrest}`}"></div>
            </div>
            <!-- Birth date -->
            <div class="details-bar">Birth Date<div class="details-data">{{player.stats.birthDate}}</div></div>
            <!-- Age -->
            <div class="details-bar">Age<div class="details-data">{{player.stats.age}}</div></div>
            <!-- Prefered positions -->
            <div class="details-bar">Prefered Positions<div class="details-data">{{player.stats.position}}</div></div>
            <!-- Available positions -->
            <div class="details-bar">Positions<div class="details-data">{{playerPossiblePositions}}</div></div>
            <!-- Weak foot -->
            <div class="details-bar">Weak Foot<div class="details-data">{{playerWeakFoot}}</div></div>
            <!-- Player Value -->
            <div class="details-bar">Value<div class="details-data">{{player.stats.value}}</div></div>
        </div>

        <!-- Right side -->
        <div class="details-stats-info"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'PlayersDetailsPopup',
    props: ['player', 'detailsOpen'],
    data(){
        return{
        }
    },
    methods: {
        //emits the closePopup event to the parent
        closePopup: function() {
            this.$emit('closePopup');
        },
    },
    computed: {
        //only prefered foot is in the data, so we just switch to get the weak foot
        playerWeakFoot: function(){
            if(this.player.stats.preferredFoot === 'right') return 'left';
            else return 'right';
        },
        //puts all the possible positions from the array into a string
        playerPossiblePositions: function(){
            let possiblePositions = '';
            this.player.stats.posiblePositions.forEach(position => {
                possiblePositions += position + ', '
            });
            return possiblePositions.slice(0, -2);
        },
    },
}
</script>

<style>
    .popup-background-fade{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.534);
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .details-popup-container{
        width: 70%;
        height: 75%;
        position: absolute;
        top: 12%;
        bottom: 13%;
        right: 15%;
        left: 15%;
        background-color: gainsboro;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        padding: 2%;
        color: rgb(37, 48, 48);
    }
    .details-basic-info{
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        float: left;
        padding: 2%;
    }
    .details-stats-info{
        box-sizing: border-box;
        width: 49%;
        height: 100%;
        border-left: 2px solid gray;
        background-color: rgb(177, 175, 175);
        float: right;
        padding: 2%;
    }
    .details-player-name{
        font-size: 130%;
        display: inline-block;
    }
    .details-player-position{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: olivedrab;
        display: inline-block;
        margin-left: 3%;
    }
    .details-player-position-text{
        text-align: center;
        line-height: 250%;
        font-size: 80%;
    }
    .details-player-rating{
        float: right;
    }
    .details-player-picture{
        width: 25%;
        height: 25%;
        border-radius: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 2%;
    }
    .details-bar{
        width: 95%;
        margin: auto;
        height: 6%;
        margin-top: 1%;
        line-height: 200%;
    }
    .details-data{
        float: right;

    }
    .details-player-icon{
        height: 100%;
        width: 10%;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>