<template>
  <div class="favorites-main-container">
    <div class="menu-container">
          <div class="players-item-container" v-for="player in players" :key="player.ID">
            <PlayersItem 
            v-bind:player="player"
            v-bind:expanded="true"
            v-bind:editFavorite="false"
            v-bind:toggleableDetails="true">
            </PlayersItem>
          </div>
      </div>
    <div v-if="!playersLoaded" class="message">No players</div>
  </div>
</template>

<script>
import PlayersItem from './PlayersItem'

export default {
  name: 'Favorites',
  components: {
    PlayersItem,
  },
  data(){
    return{
      players: {},
      playersLoaded: false,
    }
  },
  created(){
    //gets all the favorites from the store
    this.players = this.$store.getters.favoritePlayers;
    if(this.players.length !== 0) this.playersLoaded = true;
  },
  mounted(){
        //listens for scrolling, used to scroll elements horizontally
        //REMOVE THE EVENT LISTENER
        this.$el.addEventListener('wheel', e => {
            this.$el.lastElementChild.scrollBy(e.deltaY*(0.4), 0);
        })
    },
}
</script>

<style lang="scss">
  .favorites-main-container{
        background-image: url('../assets/stadium.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 95vh;
        width: 100%;

        .message{
          background-color: #253e02;
          text-align: center;
          font-weight: bold;
          color: white;
          width: 13%;
          padding: 5px 0 5px 0;
          position: absolute;
          right: 0;
          bottom: 5%;
        }
        .menu-container{
          max-width: 80%;
          height: 50%;
          padding-top: 10%;
          margin-left: 10%;
          display: flex;
          justify-content: start;
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
</style>