<template>
<!-- Popup -->
  <div class="select-player-popup-container" @click.stop="closePopup()">
      <!-- Popup header, with filters to sort by -->
      <div class="position-name">{{position}}</div>
      <div class="sort-bar">
        <div class="sort-option" v-bind:class="{active: sortedBy === 0}" @click.stop="sortByPopularity()">Popularity</div>
        <div class="sort-option" v-bind:class="{active: sortedBy === 1}" @click.stop="sortByValue()">Value</div>
        <div class="sort-option" v-bind:class="{active: sortedBy === 2}" @click.stop="sortByAge()">Age</div>
      </div>
      <div class="menu-container">
          <!-- Players -->
          <div class="players-item-container" v-for="player in players" :key="player.ID">
            <PlayersItem 
            v-bind:player="player"
            v-bind:expanded="true"
            v-bind:editFavorite="true"
            v-bind:toggleableDetails="false"
            @closePopup="closePopup($event)"
            @removeSelectedPlayer="removeSelectedPlayer()"
            v-bind:playerPosition="generalPosition">
            </PlayersItem>
          </div>
      </div>
  </div>
</template>

<script>
import PlayersItem from './PlayersItem'

export default {
    name: 'SelectPlayerPopup',
    props: [ 'generalPosition', 'position', 'selectedPlayer' ],
    components: {
        PlayersItem,
    },
    data(){
        return {
            players: [],
            sortedBy: 0, //0 - pop, 1 - val, 2 - age
        }
    },
    methods: {
        closePopup: function(event){
            if(event) this.$emit('closePopup', {playerID: event.playerID});
            else this.$emit('closePopup')
        },
        removeSelectedPlayer: function(){
            //sends event to parent component for removal
            this.$emit('removeSelectedPlayer');
        },
        sortByPopularity: function(){
            this.players = this.players = this.players.sort(function(a, b){ return b.rating - a.rating });
            this.sortedBy = 0;
        },
        sortByValue: function(){
            this.players = this.players = this.players.sort(function(a, b){ 
                return parseInt(b.stats.value.slice(1).split('.').join('')) - parseInt(a.stats.value.slice(1).split('.').join('')) 
                });
            this.sortedBy = 1;
        },
        sortByAge: function(){
            this.players = this.players = this.players.sort(function(a, b){ return a.stats.age - b.stats.age });
            this.sortedBy = 2;
        },
        handleScrolling: function(e){
            this.$el.lastElementChild.scrollBy(e.deltaY*(0.4), 0);
        },
    },
    created(){
        //always puts the current favorite player for this position on the beggining
        if(this.selectedPlayer)
            this.players.unshift(this.selectedPlayer);
        //gets all the players for this position from the store
        let playersIDs = this.$store.getters.sortedPlayersIDs[this.generalPosition];
        let players = this.$store.getters.players;
        playersIDs.forEach(playerID => {
            players[playerID].stats.posiblePositions.forEach(possiblePosition => {
                if(this.position === possiblePosition && !players[playerID].favorite) 
                    this.players.push(players[playerID]);
            });
        });
        //sorts the players by popularity by default
        this.sortByPopularity();
    },
    mounted(){
        //listens for scrolling, used to scroll elements horizontally
        this.$el.lastElementChild.addEventListener('wheel', this.handleScrolling);
    },
    beforeDestroy(){
        //removes the on scroll event listener
        this.$el.lastElementChild.removeEventListener('wheel', this.handleScrolling);
    },
}
</script>

<style lang="scss">
    .select-player-popup-container{
        background-image: url('../assets/stadium.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 95vh;
        position: absolute;
        bottom: 0px;
        left: 0px;
        z-index: 2;
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
                cursor: pointer;

                &.active{
                    color: #808080;
                }
                &:hover{
                    color: #8f8f8f;
                }
            }
        }
        .menu-container{
            width: 90%;
            height: 100%;
            margin: 10% 0 0 10%;
            display: flex;
            overflow-y: hidden;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                display: none;
            }
            .players-item-container{
                height: 100%;
                flex: 0 0 23%;
            }
        }
    }

    @media only screen and (max-width: 768px){
        .select-player-popup-container{
            height: 93vh;
            .menu-container{
                margin-top: 0;
                padding-top: 10%;
                overflow: scroll;
                width: 80%;
                height: 100%;
                flex-direction: column;
                .players-item-container{
                    height: 50%;
                    margin-bottom: 10%;
                }
            }
        }
    }
</style>