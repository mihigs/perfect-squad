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
      players: {}, //all the favorite players
      playersLoaded: false,
    }
  },
  created(){
    //gets all the favorites from the store
    this.players = this.$store.getters.favoritePlayers;
    if(this.players.length !== 0) this.playersLoaded = true;
  },
  methods: {
    handleScrolling: function(e){
      this.$el.lastElementChild.scrollBy(e.deltaY*(0.4), 0);
    }
  },
  mounted(){
    //listens for scrolling, used to scroll elements horizontally
    this.$el.addEventListener('wheel', this.handleScrolling);
  },
  beforeDestroy(){
    //removes the on-scroll event listener
    this.$el.removeEventListener('wheel', this.handleScrolling);
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
          box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
        }
        .menu-container{
          max-width: 80%;
          height: 100%;
          padding-top: 10%;
          margin-left: 10%;
          display: flex;
          justify-content: flex-start;
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
      .favorites-main-container{
        .menu-container{
          flex-direction: column;
          height: 100%;
          overflow-x: none;
          overflow-y: scroll;
          .players-item-container{
            flex: 0 0 70%;
          }
        }
        .message{
          width: 40%;
        }
      }
  }
</style>