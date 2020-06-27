<template>
  <div class="navbar">
      <router-link to="/home" class="navbar-logo">
        <p>Perfect Squad</p>
      </router-link>
      <div class="navbar-menu">
        <router-link to="/players" class="navbar-menu-item">Players</router-link>
        <router-link to="/favorites" class="navbar-menu-item">Favorites</router-link>
        <FormationDropdown></FormationDropdown>
      </div>
  </div>
</template>

<script>
import FormationDropdown from './FormationDropdown'

export default {
    name: 'Navbar',
    components:{
        FormationDropdown,
    },
    data(){
        return{

        }
    },
}
</script>

<style scoped>
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width: 100%;
        height: 5vh;
        background-color: #253e02;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        color: white;

        position: fixed;
        top: 0;
        z-index: 4;
    }
    .navbar-logo{
        font-weight: bold;
        line-height: 50%;
        color: white !important;
        text-decoration: none;
    }
    .navbar-menu{
        display: flex;
        align-content: flex-end;
    }
    .navbar-menu-item{
        margin-left: 25px;
        line-height: 250%;
        color: white;
        text-decoration: none;
        /* cekirat marginu ovdje */
    }
    .navbar-menu-item:hover{
        color: #f09e00;
    }
    .router-link-active{
        color: #f09e00;
    }
</style>