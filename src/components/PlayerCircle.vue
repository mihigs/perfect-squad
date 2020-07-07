<template>
  <div class="player-circle" @click="openPlayerSelectPopup()">
      <div class="formation-picture-background" v-show="selectedPlayer">
        <div class="formation-picture" :style="{ backgroundImage: `url(${selectedPlayer.formationPicture}`}"></div>
      </div>
      <div class="player-last-name">{{selectedPlayer.lastName ? selectedPlayer.lastName : selectedPlayer.name}}</div>
      <!-- Popup for selecting a favorite player -->
      <SelectPlayerPopup @closePopup="closePlayerSelectPopup($event)" 
        v-if="popupShown"
        v-bind:generalPosition="generalPosition"
        v-bind:position="position"
        v-bind:selectedPlayer="selectedPlayer"
        @removeSelectedPlayer="removeSelectedPlayer()">
      </SelectPlayerPopup>
  </div>
</template>

<script>
import SelectPlayerPopup from './SelectPlayerPopup'

export default {
    name: 'PlayerCircle',
    props: [ 'generalPosition', 'playersInRow', 'position' ],
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