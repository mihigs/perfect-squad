<template>
  <div class="player-circle" @click="openPlayerSelectPopup()">
      <div class="formation-picture-background" v-show="selectedPlayer">
        <div class="formation-picture" :style="{ backgroundImage: `url(${selectedPlayer.formationPicture}`}"></div>
      </div>
      <div class="player-last-name">{{selectedPlayer.lastName ? selectedPlayer.lastName : selectedPlayer.name}}</div>
      <SelectPlayerPopup @closePopup="closePlayerSelectPopup($event)" 
      v-if="popupShown" 
      v-bind:generalPosition="generalPosition" 
      v-bind:exactPosition="exactPlayerPosition"
      v-bind:selectedPlayer="selectedPlayer"
      @removeSelectedPlayer="removeSelectedPlayer()">
      </SelectPlayerPopup>
  </div>
</template>

<script>
import SelectPlayerPopup from './SelectPlayerPopup'

export default {
    name: 'PlayerCircle',
    props: [ 'generalPosition', 'playerWing', 'playersInRow', 'position' ],
    components: {
        SelectPlayerPopup,
    },
    data(){
        return {
            selectedPlayer: false,
            popupShown: false,
        }
    },
    methods: {
        openPlayerSelectPopup: function(){
            this.popupShown = true;          
        },
        closePlayerSelectPopup: function(event){
            this.popupShown = false;
            //if the user has selected a player for the formation, save it as selected
            if(event){
                //remove the current selected player from favorites
                if(this.selectedPlayer)
                    this.$store.dispatch('toggleFavorite', {playerID: this.selectedPlayer.ID})
                //put the new one
                this.selectedPlayer = this.$store.getters.players[event.playerID];
            }
        },
        removeSelectedPlayer: function(){
            this.selectedPlayer = false;
        },
    },
    mounted(){
        document.addEventListener('keydown', e => {
            if(e.key === "Escape") this.closePlayerSelectPopup();
        });
    },
    computed: {
        //calculates the exact position for which the user picks the player for
        //the output is shown on top of the popup
        exactPlayerPosition: function() {
            if(this.generalPosition === 'GK') return 'GK';
            else if(this.generalPosition === 'DEF'){
                if(this.playersInRow === 1 || (this.playersInRow === 3 && this.playerWing === 2)) return 'CB';
                else if(this.playersInRow >= 2 && this.playerWing === 1) return 'LB';
                else return 'RB'; 
            }else if(this.position === 'R-MID'){
                if(this.playersInRow === 1 || (this.playersInRow === 3 && this.playerWing === 2)) return 'CM';
                else if(this.playersInRow >= 2 && this.playerWing === 1) return 'LM';
                else return 'RM';
            }else if(this.position === 'F-MID'){
                return 'AM';
            }else if(this.generalPosition === 'ATT'){
                if(this.playersInRow === 1 || (this.playersInRow === 3 && this.playerWing === 2)) return 'CF';
                else if(this.playersInRow >= 2 && this.playerWing === 1) return 'LW';
                else return 'RW';
            }
            return 'n/a';
        }
    },
}
</script>

<style lang="scss">
    .player-circle{
        width: 30px;
        height: 30px;
        background: rgba(151, 151, 151, 0.4);
        border-radius: 50%;
        border: 2px solid rgb(32, 32, 32);
        align-self: flex-end;
        cursor: pointer;
        box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);

        .formation-picture-background{
            position: relative;
            right: 70%;
            bottom: 80%;
            border-radius: 50%;
            width: 250%;
            height: 250%;
            background-color: white;

            .formation-picture{
                width: 100%;
                height: 100%;
                background-size: 100%;
                border-radius: 50%;
                background-position: center;
            }
        }
        .player-last-name{
            position: relative;
            width: 200%;
            right: 40%;
            bottom: 80%;
            text-align: center;
            background-color: white;
        }
    }
    .player-circle:hover{
        border: 2px solid rgb(56, 56, 56);
    }
</style>