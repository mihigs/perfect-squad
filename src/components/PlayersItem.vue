<template>
  <div>
    <div class="players-item">
          <div class="players-item-bar" @click.stop="expandPlayer()">
            <FavoritesHeart v-bind:toggleable="editFavorite" v-bind:toggled="player.favorite" @toggleFavorite="toggleFavorite($event)"></FavoritesHeart>
            <div class="players-item-name">{{player.name.toUpperCase()}} {{player.lastName.toUpperCase()}}</div>
            <div class="players-item-position" :style="{ color: `${positionColor}` }">{{player.stats.position}}</div>
          </div>
          <transition>
            <div class="players-expanded" v-show="playerExpanded" @click.stop="showDetails()">
              <div :style="{ backgroundImage: `url(${player.playerPicture}`}" class="players-item-image"></div>
              <div class="players-item-bottom">
                <div :style="{ backgroundImage: `url(${player.teamCrest}`}" class="players-item-club-icon"></div>
                <div class="players-item-club-name">{{player.stats.club}}</div>
              </div>
            </div>
          </transition>
    </div>
      <PlayersDetailsPopup v-if="toggleableDetails" v-bind:detailsOpen="detailsOpen" v-bind:player="player" @closePopup="hideDetails"></PlayersDetailsPopup>
  </div>
</template>

<script>
import PlayersDetailsPopup from './PlayersDetailsPopup'
import FavoritesHeart from './FavoritesHeart'

export default {
    name: 'PlayersItem',
    props: ['player', 'expanded', 'editFavorite', 'toggleableDetails', 'playerPosition'], 
    components: {
      PlayersDetailsPopup,
      FavoritesHeart,
    },
    data(){
      return{
        detailsOpen: false,
        playerExpanded: false,
      }
    },
    methods: {
      showDetails: function() {
        this.detailsOpen = true;
      },
      hideDetails: function(){
        this.detailsOpen = false
      },
      expandPlayer: function(){
        if(this.expanded === false) this.playerExpanded = !this.playerExpanded;
      },
      toggleFavorite: function(event){
        if(this.editFavorite)
          this.$store.dispatch('toggleFavorite', {playerID: this.player.ID});
        //if the user selects a player, close the popup menu
        if(event.addedToFavorites) this.$emit('closePopup', {playerID: this.player.ID});
        else if(!event.addedToFavorites) this.$emit('removeSelectedPlayer');
      },
    },
    created(){
      this.playerExpanded = this.expanded;
    },
    computed: {
      positionColor: function(){
        let color = '';
        switch (this.playerPosition) {
          case 'GK': color = '#54688e'; break;
          case 'DEF': color = '#4e202c'; break;
          case 'MID': color = '#0b8227'; break;
          case 'ATT': color = '#cdcf32'; break;
          default: color = '#00000';
        }
        return color;
      },
    },
}
</script>

<style>
  .players-item{
    width: 95%;
    margin: auto;
    margin-bottom: 3%;
    background-color: gainsboro;
    text-align: center;
    line-height: 300%;
    font-weight: bold;
    font-size: 90%;
    cursor: pointer;
  }
  .players-item:hover{
    background-color: rgb(190, 190, 190);
  }
  .players-item-favorite-icon{
      background-image: url('../assets/favorite-heart-empty.svg');
      background-position: center;
      background-repeat: no-repeat;
      float: left;
      margin-top: 2%;
      height: 25px;
      width: 40px;
  }
  .players-item-bar{
    height: 12%;
  }
  .players-item-name{
      display: inline;
      font-size: 90%;
      color: rgb(37, 48, 48);
  }
  .players-expanded{
    width: 100%;
    height: 88%;
  }
  .players-item-image{
    width: 100%;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .players-item-position{
      float: right;
      width: 18%;
  }
  .players-item-bottom{
    height: 12%;
    padding-top: 1.3%;
    line-height: 250%;
  }
  .players-item-club-icon{
    float: left;
    height: 35px;
    width: 35px;
    margin: 1px 2%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .players-item-club-name{
    text-align: left;
    color: rgb(37, 48, 48);
  }
</style>