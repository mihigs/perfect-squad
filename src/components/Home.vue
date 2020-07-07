<template>
    <div class='home-main-container'>
      <div class="home-safe-space"></div>
      <div class="field-container">
          <!-- THE MAIN UI -->
          <div v-if="selectedFormation.formation" class="field-UI-container">
            <!-- CF-ROW -->
            <div class="field-row CF-row">
                <PlayerCircle v-for="(position, index) in selectedFormation.positions.cf" :key="index"
                v-bind:generalPosition="'ATT'"
                v-bind:position="'CF'"
                v-bind:playersInRow="selectedFormation.positions.cf"
                ></PlayerCircle>    
            </div>
            <!-- LW-RW-ROW -->
            <div class="field-row LW-RW-row">
                <PlayerCircle
                v-if="selectedFormation.positions.lw"
                v-bind:generalPosition="'ATT'"
                v-bind:position="'LW'"
                ></PlayerCircle>
                <PlayerCircle
                v-if="selectedFormation.positions.rw"
                v-bind:generalPosition="'ATT'"
                v-bind:position="'RW'"
                ></PlayerCircle>    
            </div>
            <!-- AM-ROW -->
            <div class="field-row AM-row">
                <PlayerCircle
                v-if="selectedFormation.positions.am"
                v-bind:generalPosition="'ATT'"
                v-bind:position="'AM'"
                ></PlayerCircle>
            </div>
            <!-- LM-RM-ROW -->
            <div class="field-row LM-RM-row">
                <PlayerCircle
                v-if="selectedFormation.positions.lm"
                v-bind:generalPosition="'MID'"
                v-bind:position="'LM'"
                ></PlayerCircle>
                <PlayerCircle
                v-if="selectedFormation.positions.rm"
                v-bind:generalPosition="'MID'"
                v-bind:position="'RM'"
                ></PlayerCircle>    
            </div>
            <!-- CM-ROW -->
            <div class="field-row CM-row">
                <PlayerCircle v-for="(position, index) in selectedFormation.positions.cm" :key="index"
                v-bind:generalPosition="'MID'"
                v-bind:position="'CM'"
                v-bind:playersInRow="selectedFormation.positions.cm"
                ></PlayerCircle>    
            </div>
            <!-- DM-ROW -->
            <div class="field-row DM-row">
                <PlayerCircle
                v-if="selectedFormation.positions.dm"
                v-bind:generalPosition="'MID'"
                v-bind:position="'DM'"
                ></PlayerCircle>    
            </div>
            <!-- LB-RB-ROW -->
            <div class="field-row LB-RB-row">
                <PlayerCircle
                v-if="selectedFormation.positions.lb"
                v-bind:generalPosition="'DEF'"
                v-bind:position="'LB'"
                ></PlayerCircle>
                <PlayerCircle
                v-if="selectedFormation.positions.rb"
                v-bind:generalPosition="'DEF'"
                v-bind:position="'RB'"
                ></PlayerCircle>     
            </div>
            <!-- CB-ROW -->
            <div class="field-row CB-row">
                <PlayerCircle v-for="(position, index) in selectedFormation.positions.cb" :key="index"
                v-bind:generalPosition="'DEF'"
                v-bind:position="'CB'"
                v-bind:playersInRow="selectedFormation.positions.cb"
                ></PlayerCircle>    
            </div>
            <!-- GOALKEEPER -->
            <div class="field-row GK-row" >
                <PlayerCircle v-show="showGK" 
                v-bind:generalPosition="'GK'" 
                v-bind:position="'GK'">
                </PlayerCircle>
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
        this.showGK = this.$store.getters.selectedFormation.formation ? true : false;
        //watches for change in formation selection
        this.$store.watch(
            ()=>{ return this.$store.getters.selectedFormation.formation },
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
        height: 10.8%;
        margin: auto;

        display: flex;
        justify-content: space-around;
    }
    .CB-row{
        justify-content: space-evenly;
    }
    .LB-RB-row{
        height: 7%;
        justify-content: space-between;
    }
    .DM-row{
        height: 15%;
    }
    .CM-row{
        height: 13.5%;
    }
    .LM-RM-row{
        height: 7%;
        justify-content: space-between;
    }
    .AM-row{
        height: 6%;
    }
    .CF-row{
        height: 19%;
        justify-content: space-evenly;
    }
    .LW-RW-row{
        height: 6%;
        justify-content: space-between;
    }

    @media only screen and (max-width: 425px){
        .home-safe-space{
            height: 6vh;
        }
        .field-container{
            width: 100%;
        }
    }
    @media only screen and (max-width: 375px){
        .home-safe-space{
            height: 2vh;
        }
        .field-container{
            height: 90%;
        }
    }
    @media only screen and (max-width: 320px){
        .field-container{
            height: 60%;
        }
    }
    @media only screen and (max-height: 690px){
        .home-safe-space{
            height: 1vh;
        }
    }
</style>