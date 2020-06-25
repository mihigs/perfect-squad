<template>
  <div class="player-circle" @click="openPlayerSelectPopup()">
      <SelectPlayerPopup @closePopup="closePlayerSelectPopup()" v-show="popupShown" v-bind:position="position"></SelectPlayerPopup>
  </div>
</template>

<script>
import SelectPlayerPopup from './SelectPlayerPopup'

export default {
    name: 'PlayerCircle',
    props: [ 'position' ],
    components: {
        SelectPlayerPopup,
    },
    data(){
        return {
            selectedPlayer: {},
            popupShown: false,
        }
    },
    methods: {
        openPlayerSelectPopup: function(){
            this.popupShown = true;
        },
        closePlayerSelectPopup: function(){
            this.popupShown = false;
        },
    },
}
</script>

<style>
    .player-circle{
        width: 30px;
        height: 30px;
        background: rgba(151, 151, 151, 0.4);
        border-radius: 50%;
        border: 2px solid rgb(32, 32, 32);
        align-self: flex-end;
        cursor: pointer;
    }
    .player-circle:hover{
        border: 2px solid rgb(56, 56, 56);
    }
</style>