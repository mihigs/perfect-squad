<template>
  <div>
    <div class="players-item" @click="showDetails()">
          <div class="players-item-bar">
            <div class="players-item-favorite-icon"></div>
            <div class="players-item-name">{{player.name.toUpperCase()}} {{player.lastName.toUpperCase()}}</div>
            <div class="players-item-position">{{player.stats.position}}</div>
          </div>
          <div :style="{ backgroundImage: `url(${player.playerPicture}`}" class="players-item-image"></div>
          <div class="players-item-bottom">
            <div :style="{ backgroundImage: `url(${player.teamCrest}`}" class="players-item-club-icon"></div>
            <div class="players-item-club-name">{{player.stats.club}}</div>
          </div>
    </div>
    <PlayersDetailsPopup v-bind:detailsOpen="detailsOpen" v-bind:player="player" @closePopup="hideDetails"></PlayersDetailsPopup>
  </div>
</template>

<script>
import PlayersDetailsPopup from './PlayersDetailsPopup'

export default {
    name: 'PlayersItem',
    props: ['player'], 
    components: {
      PlayersDetailsPopup,
    },
    data(){
      return{
        detailsOpen: false,
      }
    },
    methods: {
      showDetails: function() {
        this.detailsOpen = true;
      },
      hideDetails: function(){
        this.detailsOpen = false;
      },
    },
}
</script>

<style>
  .players-item{
    width: 95%;
    height: 50vh;
    margin: auto;
    margin-bottom: 3%;
    background-color: gainsboro;
    text-align: center;
    line-height: 300%;
    font-weight: bold;
    font-size: 80%;
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
  .players-item-added-to-favorites{
      background-image: url('../assets/favorite-heart-filled.svg');
  }
  .players-item-name{
      display: inline;
      font-size: 90%;
      color: rgb(37, 48, 48);
  }
  .players-item-image{
    width: 100%;
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .players-item-position{
      float: right;
      width: 18%;
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