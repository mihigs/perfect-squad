<template>
  <div class="players-main-container">

    <!-- contains the menu -->
    <div class="players-secondary-container">
      <!-- GK column -->
      <div class="players-category-column">
        <div class="players-category-bar-button" id="category-GK">GK</div>
          <PlayersItem 
          v-for="(player, index) in sortedPlayersIDs.GK" :key="index" 
          v-bind:player="players[player]"
          v-bind:expanded="false"
          v-bind:editFavorite="false"
          v-bind:toggleableDetails="true"
          v-bind:playerPosition="'GK'">
          </PlayersItem>
      </div>
      <!-- DEF column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">DEF</div>
          <PlayersItem
          v-for="(player, index) in sortedPlayersIDs.DEF" :key="index" 
          v-bind:player="players[player]"
          v-bind:expanded="false"
          v-bind:editFavorite="false"
          v-bind:toggleableDetails="true"
          v-bind:playerPosition="'DEF'">
          </PlayersItem>
      </div>
      <!-- MID column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">MID</div>
          <PlayersItem 
          v-for="(player, index) in sortedPlayersIDs.MID" :key="index" 
          v-bind:player="players[player]"
          v-bind:expanded="false"
          v-bind:editFavorite="false"
          v-bind:toggleableDetails="true"
          v-bind:playerPosition="'MID'">
          </PlayersItem>
      </div>
      <!-- ATT column -->
      <div class="players-category-column">
        <div class="players-category-bar-button">ATT</div>
          <PlayersItem 
          v-for="(player, index) in sortedPlayersIDs.ATT" :key="index" 
          v-bind:player="players[player]"
          v-bind:expanded="false"
          v-bind:editFavorite="false"
          v-bind:toggleableDetails="true"
          v-bind:playerPosition="'ATT'">
          </PlayersItem>
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
      sortedPlayersIDs: {},
      players: [],
    }
  },
  created(){
    //gets data from the store
    this.sortedPlayersIDs = this.$store.getters.sortedPlayersIDs;
    this.players = this.$store.getters.players;
  }
}
</script>

<style lang="scss">
  .players-main-container{
    width: 100%;
    height: 95vh;
    background-image: url('../assets/stadium.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
          display: none;
      }
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

  @media only screen and (max-width: 425px){
    .players-category-column{
      float: none;
      width: 100%;
    }
  }
  
</style>