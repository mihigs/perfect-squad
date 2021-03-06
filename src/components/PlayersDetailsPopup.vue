<template>
<div>
    <!-- Darker background when popup is active -->
    <div class="popup-background-fade" @click="closePopup" v-show="detailsOpen">
    </div>
    <!-- Popup container -->
    <transition name="pop">
    <div class="details-popup-container" v-show="detailsOpen">

        <!-- Left side -->
        <div class="details-basic-info">
            <div class="details-basic-info-header">
                <div class="details-player-name">{{player.name}} {{player.lastName}}</div>
                <div class="details-player-position"><div class="details-player-position-text">{{player.stats.position}}</div></div>
                <StarRating class="star-rating"
                    @rating-selected="updatePlayerRating"
                    :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                    :active-color="'#EABA08'" 
                    :inactive-color='"#b7b7b7"'
                    :border-width="-1"
                    :star-size="30" 
                    :max-rating="5" 
                    :show-rating="false" 
                    :increment="0.01" 
                    v-model="player.rating">
                </StarRating>
            </div>
            <div class="details-player-picture" :style="{ backgroundImage: `url(${player.formationPicture}`}"></div>
            <!-- Nationality -->
            <div class="details-bar">{{capitaliseString(player.nationality)}}
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
            <!-- Popularity -->
            <div class="details-bar">Popularity<div class="details-data">{{playerRating}}</div></div>
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
        <div class="details-stats-info">
            <div class="stats-bar" v-for="(playerSkill, index) in player.playerSkills" :key="index">
                <div class="stats-name">{{capitaliseString(playerSkill.name)}}</div>
                    <div class="skill-progress-container" v-for="(specificSkill, index) in playerSkill.skills" :key="index">
                        <div class="progress-name"> {{capitaliseString(specificSkill.name)}}</div>
                            <div class="progress-bar-container">
                                <div class="progress-bar" :style="{width: `${specificSkill.value ? specificSkill.value : 100}%`}"></div>
                            </div>  
                            <div class="progress-amount">{{specificSkill.value}}</div>           
                    </div>     
            </div>
        </div>
    </div>
    </transition>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'PlayersDetailsPopup',
    props: ['player', 'detailsOpen'],
    components: {
        StarRating,
    },
    data(){
        return{
            playerRating: Math.round((this.player.rating + Number.EPSILON) * 100) / 100,
        }
    },
    methods: {
        //emits the closePopup event to the parent
        closePopup: function() {
            this.$emit('closePopup');
        },
        //capitalises strings (for names and nationalities)
        capitaliseString: function(string){
            let tempString = string.slice(1)
            return string[0].toUpperCase() + tempString;
        },
        //updates player rating when rated
        updatePlayerRating: function(event){
            this.$store.dispatch('addPlayerRating', { rating: event, playerID: this.player.ID });
            let rating = this.$store.getters.players[this.player.ID].rating;
            this.playerRating = Math.round((rating + Number.EPSILON) * 100) / 100;
        }
    },
    computed: {
        //only prefered foot is in the data, so we just switch to get the weak foot
        playerWeakFoot: function(){
            if(this.player.stats.preferredFoot === 'right') return 'left';
            else return 'right';
        },
        //puts all the possible positions from the array into a single string
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

<style lang="scss">
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
        left: 10%;
        background-color: gainsboro;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        padding: 2%;
        color: rgb(37, 48, 48);
    }
    //transition classes
    .pop-leave{
        transform: translateY(0px);
    }
    .pop-leave-to, .pop-enter{
        transform: translateY(700px);
    }
    .pop-leave-active{
        transition: all 300ms;
    }
    .pop-enter-active{
        transition: all 500ms;
    }

    .details-basic-info{
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        float: left;
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
    .star-rating{
        float: right;
    }
    .details-player-picture{
        width: 30%;
        height: 30%;
        border-radius: 50%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .details-bar{
        width: 95%;
        margin: auto;
        height: 6%;
        margin-top: 1%;
        line-height: 200%;
        display: flex;
        justify-content: space-between;
    }
    .details-player-icon{
        height: 100%;
        width: 10%;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .details-stats-info{
        box-sizing: border-box;
        width: 49%;
        height: 100%;
        border-left: 2px solid gray;
        float: right;
        padding: 1%;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 3px;
        }
        &::-webkit-scrollbar-track {
            background: gray;
        }
        &::-webkit-scrollbar-thumb {
            background: rgb(49, 49, 49);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgb(68, 68, 68);
        }
        .stats-bar{
            width: 100%;
            margin-bottom: 5px;
            padding: 2%;
            // padding-bottom: 3%;
            box-sizing: border-box;
            .stats-name{
                background-color: white;
                padding: 5px;
                font-weight: bold;
            }
            .skill-progress-container{
                margin: 4% 0 4% 2%;
                font-size: 80%;
                display: flex;
                .progress-name{
                    width: 20%;
                }
                .progress-bar-container{
                    width: 73%;
                    height: 4px;
                    background-color: gray;
                    margin: auto;
                }
                .progress-bar{
                    height: 4px;
                    width: 0px;
                    transition: all 2s ease-in-out;
                    background-color: #21723a;
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        .details-popup-container{
            width: 100%;
            height: 100vh;
            top: 0vh;
            left: 0px;
            padding: 2% 0 0 0;
            overflow: scroll;
            box-shadow: none;
            z-index: 4;
        }
        .details-basic-info{
            width: 100%;
            float: none;
            padding-right: 3%;
        }
        .details-stats-info{
            width: 100%;
            float: none;
            background-color: gainsboro;
            border: none;
            margin: 0;
            height: fit-content;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>