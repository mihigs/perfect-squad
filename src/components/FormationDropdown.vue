<template>
    <div>
        <div class="dropdown-container" @click="toggleDropdown()">
            Formation: {{selectedFormation}}
        </div>
        <div v-if="showDropdown">
            <div class="dropdown-item" v-for="formation in formations" :key="formation" @click="selectFormation(formation)">{{formation}}</div>
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
        selectFormation: function(formation){
            this.selectedFormation = formation;
            this.showDropdown = false;
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
    .dropdown-container{
        margin-left: 10px;
        line-height: 250%;
        height: 100%;
        width: 175px;
        text-align: center;
    }
    .dropdown-container:hover{
        color: #f09e00;
    }
    .dropdown-item{
        text-align: center;
        background-color: olivedrab;
        width: 100%;
        height: 50px;
        line-height: 250%;
    }
    .dropdown-container:hover{
        color: #f09e00;
    }
</style>