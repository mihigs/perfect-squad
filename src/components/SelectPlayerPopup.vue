<template>
  <div class="select-player-popup-container">
      <div class="position-name">{{position}}</div>
      <div class="sort-bar">
        <div class="sort-option">Popularity</div>
        <div class="sort-option">Value</div>
        <div class="sort-option">Age</div>
      </div>
      <div class="menu-container">
          <div class="players-item-container" v-for="(playerID, index) in playersIDs" :key="index">
            <PlayersItem 
            v-bind:player="players[playerID]"
            v-bind:expanded="true">
            </PlayersItem>
          </div>
      </div>
  </div>
</template>

<script>
import PlayersItem from './PlayersItem'

export default {
    name: 'SelectPlayerPopup',
    props: [ 'position' ],
    components: {
        PlayersItem,
    },
    data(){
        return {
            playersIDs: [],
            players: [],
        }
    },
    methods: {
        closePopup: function(){
            this.$emit('closePopup');
        },
    },
    created(){
        //gets all the players for this position from the store
        this.playersIDs = this.$store.getters.sortedPlayersIDs[this.position];
        this.players = this.$store.getters.players;
        //listens for esc keypress to close the popup
        document.addEventListener('keydown', (e)=>{
            if(e.keyCode === 27) this.closePopup();
        });
    },
}
</script>

<style lang="scss">
    .select-player-popup-container{
        background-color: darkgray;
        width: 100%;
        height: 95vh;
        position: absolute;
        bottom: 0px;
        left: 0px;
        cursor: default;

        .position-name{
            width: 100%;
            height: 4vh;
            text-align: center;
            font-weight: bold;
            line-height: 200%;
            background-color: #DFDFDF;
        }
        .sort-bar{
            width: 100%;
            height: 4vh;
            text-align: center;
            font-weight: bold;
            line-height: 200%;
            background-color: #CBCBCB;

            .sort-option{
                width: 33%;
                height: 100%;
                display: inline-block;
            }
        }
        .menu-container{
            width: 90%;
            height: 50%;
            margin: 10% 0 0 10%;
            overflow-x: scroll;
            overflow-y: hidden;
            .players-item-container{
                width: 250px;
                display: inline-block;
            }
        }
    }
</style>