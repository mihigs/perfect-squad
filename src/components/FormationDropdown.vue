<template>
    <div>
        <div class="dropdown-button" @click="toggleDropdown()">
            Formation: {{selectedFormation}}
        </div>
        <div class="dropdown-container" v-if="showDropdown">
            <div class="dropdown-item" v-for="(formation, index) in formations" :key="index" @click="selectFormation(formation, index)">
                {{formation}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormationDropdown',
    data(){
        return{
            showDropdown: false,
            formations: {},
            selectedFormation: 'Loading..',
            stateStatus: 0,
        }
    },
    methods:{
        toggleDropdown: function(){
            this.showDropdown = !this.showDropdown;
        },
        selectFormation: function(formation, index){
            this.selectedFormation = formation;
            this.showDropdown = false;
            //saves selected formation to the state
            this.$store.dispatch('selectFormation', { formation: formation, index: index });
        },
    },
    created(){
        //watches for changes in state
        //when the request returns data to the state, it populates the dropdown
        this.$store.watch(
            ()=>{ return this.$store.getters.status },
            ()=>{
                this.stateStatus = this.$store.getters.status;
                //when the data is loaded, the user can select formation
                if(this.stateStatus === 1) {
                    this.formations = Object.keys(this.$store.getters.formations);
                    this.selectedFormation = 'not selected';
                //if data fails to load
                }else if(this.stateStatus === 2){
                    this.selectedFormation = 'Error loading data!';
                }
            }
        )
    },
}
</script>

<style>
    .dropdown-button{
        margin-left: 10px;
        line-height: 250%;
        height: 100%;
        width: 175px;
        text-align: center;
        cursor: pointer;
    }
    .dropdown-button:hover{
        color: #f09e00;
    }
    .dropdown-container{
        /* provjeriti */
        position: relative;
        z-index: -2;
    }
    .dropdown-item{
        text-align: center;
        background-color: olivedrab;
        width: 100%;
        height: 50px;
        line-height: 250%;
        cursor: pointer;
    }
    .dropdown-item:hover{
        color: #f09e00;
    }
</style>