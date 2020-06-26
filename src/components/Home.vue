<template>
    <div class='home-main-container'>
      <div class="home-safe-space"></div>
      <div class="field-container">
          <!-- THE MAIN UI -->
          <div v-show="selectedFormation.id !== -1" class="field-UI-container">
              <!-- ATK ROW -->
            <div class="field-row inner">
                <PlayerCircle v-for="index in selectedFormation.parsedFormation[4]" :key="index" 
                v-bind:generalPosition="'ATT'"
                v-bind:playerWing="index"
                v-bind:playersInRow="selectedFormation.parsedFormation[4]"
                v-bind:position="'F-ATT'">
                </PlayerCircle>
            </div>
            <!-- MID ROWs -->
            <div class="field-row">
                <PlayerCircle v-for="index in selectedFormation.parsedFormation[3]" :key="index" 
                v-bind:generalPosition="'MID'"
                v-bind:playerWing="index"
                v-bind:playersInRow="selectedFormation.parsedFormation[3]"
                v-bind:position="'F-MID'">
                </PlayerCircle>
            </div>
            <div class="field-row">
                <PlayerCircle v-for="index in selectedFormation.parsedFormation[2]" :key="index" 
                v-bind:generalPosition="'MID'"
                v-bind:playerWing="index"
                v-bind:playersInRow="selectedFormation.parsedFormation[2]"
                v-bind:position="'R-MID'">
                </PlayerCircle>
            </div>
            <!-- DEF ROWS -->
            <div class="field-row outer">
                <PlayerCircle v-for="index in selectedFormation.parsedFormation[1]" :key="index" 
                v-bind:generalPosition="'DEF'"
                v-bind:playerWing="index"
                v-bind:playersInRow="selectedFormation.parsedFormation[1]"
                v-bind:position="'F-DEF'">
                </PlayerCircle>
            </div>
            <div class="field-row inner">
                <PlayerCircle v-for="index in selectedFormation.parsedFormation[0]" :key="index" 
                v-bind:generalPosition="'DEF'"
                v-bind:playerWing="index"
                v-bind:playersInRow="selectedFormation.parsedFormation[0]"
                v-bind:position="'R-DEF'">
                </PlayerCircle>
            </div>
            <!-- GOALKEEPER -->
            <div id="GK-row" >
                <PlayerCircle v-show="showGK" v-bind:generalPosition="'GK'"></PlayerCircle>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import PlayerCircle from '../components/PlayerCircle'

export default {
    name: 'Home',
    components: {
        PlayerCircle,
    },
    data(){
        return{
            selectedFormation: this.$store.getters.selectedFormation,
            showGK: false,
        }
    },
    created(){
        //hide or show goalkeeper circle, depending on if a formation was selected
        this.showGK = this.$store.getters.selectedFormation.id !== -1 ? true : false; 
        //watches for change in formation selection
        this.$store.watch(
            ()=>{ return this.$store.getters.selectedFormation.id },
            ()=>{
                this.selectedFormation = this.$store.getters.selectedFormation;
                this.showGK = true;
            }
        )
    },
}
</script>

<style>
    .home-main-container{
        background-image: url('../assets/stadium.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 95vh;
        width: 100%;
    }
    .home-safe-space{
        height: 8%;
    }
    .field-container{
        background-image: url('../assets/field.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 400px;
        height: 600px;
        margin: auto;
        border: 2px solid darkslategray;
    }
    .field-UI-container{
        padding-top: 2%;
        margin: auto;
        width: 100%;
        height: 100%;
    }
    .field-row{
        width: 85%;
        height: 17%;
        margin: auto;

        display: flex;
        justify-content: space-around;
    }
    .inner{
        justify-content: space-evenly;
    }
    .outer{
        justify-content: space-between;
    }
    #GK-row{
        width: 100%;
        height: 10%;
        margin: auto;

        display: flex;
        justify-content: space-around;
    }
</style>