<template>
    <div>
        <div class="dropdown-button" @click="toggleDropdown()">
            Formation: {{selectedFormation.formation}}
        </div>
        <transition name="dropdown">
            <div class="dropdown-container" v-if="showDropdown">
                <div class="dropdown-item" v-for="(formation, index) in formations" :key="index" @click="selectFormation(formation)">
                    {{formation.formation}}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'FormationDropdown',
    data(){
        return{
            showDropdown: false,
            formations: [],
            selectedFormation: { formation: 'Loading...' },
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
            //saves selected formation to the state
            this.$store.dispatch('selectFormation', { formation: formation });
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
                    this.formations = this.$store.getters.formations;
                    this.selectedFormation.formation = 'not selected';
                //if data fails to load
                }else if(this.stateStatus === 2){
                    this.selectedFormation = 'Error loading data!';
                }
            }
        )
    },
}
</script>

<style lang="scss">
    .dropdown-button{
        margin-left: 10px;
        line-height: 250%;
        height: 100%;
        width: 175px;
        text-align: center;
        cursor: pointer;

        &:hover{
            color: #f09e00;
        }
    }
    .dropdown-container{
        position: relative;
        background-color: #253e02;
        height: 350px;
        overflow: hidden;
        box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
        .dropdown-item{
            text-align: center;
            background-color: #253e02;
            width: 100%;
            height: 50px;
            line-height: 300%;
            cursor: pointer;

            &:hover{
                color: #f09e00;
            }
        }
    }
    
    //transition classes
    .dropdown-leave{
        height: 350px;
    }
    .dropdown-leave-to, .dropdown-enter{
        height: 0px;
    }
    .dropdown-leave-active{
        transition: all 400ms;
    }
    .dropdown-enter-active{
        transition: all 200ms;
    }

    @media only screen and (max-width: 768px){
        .dropdown-button{
            width: 100%;
        }
    }
</style>