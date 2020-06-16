<template>
  <div class="players-main-container">

    <!-- contains the menu -->
    <div class="players-secondary-container">
      <!-- GK column -->
      <div class="players-category-column">
        <div class="players-category-bar-button" id="category-GK">GK</div>
        <PlayersItem v-bind:style="{ color: '#54688e'}" v-for="(player, index) in sortedPlayers.GK" :key="index" v-bind:player="player"></PlayersItem>
      </div>
      <!-- DEF column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">DEF</div>
        <PlayersItem v-bind:style="{ color: '#4e202c'}" v-for="(player, index) in sortedPlayers.DEF" :key="index" v-bind:player="player"></PlayersItem>
      </div>
      <!-- MID column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">MID</div>
        <PlayersItem v-bind:style="{ color: '#0b8227'}" v-for="(player, index) in sortedPlayers.MID" :key="index" v-bind:player="player"></PlayersItem>
      </div>
      <!-- ATT column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">ATT</div>
        <PlayersItem v-bind:style="{ color: '#cdcf32'}" v-for="(player, index) in sortedPlayers.ATT" :key="index" v-bind:player="player"></PlayersItem>
      </div>
    </div>
    
  </div>
</template>

<script>
import PlayersItem from './PlayersItem'

export default {
  name: 'Players',
  components: {
    PlayersItem,
  },
  data(){
    return{
      sortedPlayers: {},
    }
  },
  created(){
    //gets sorted players from state
    this.sortedPlayers = this.$store.getters.sortedPlayers;
  }
}
</script>

<style>
  .players-main-container{
    width: 100%;
    height: 95vh;
    background-image: url('../assets/stadium.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: scroll;
    overflow-x: hidden;
  }
  .players-secondary-container{
    width: 90%;
    margin: auto;
  }
  .players-category-column{
    float: left;
    width: 24%;
    height: 100%;
  }
  .players-category-bar-button{
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: 3%;
    color: darkslategray;
    background-color: gainsboro;
    border-left: 1px solid gray;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
  }
  #category-GK{
    border-left: none;
  }
  
</style>