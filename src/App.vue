<template>
  <div class="main-container">
    <NavbarElement></NavbarElement>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarElement from './components/navbar-element.vue'

export default {

  name: 'App',
  components:{
    NavbarElement,
  },
  created(){
    //gets data from JSON blob and saves it to state
    this.$store.dispatch('getPlayerData', 'https://jsonblob.com/api/jsonBlob/50fd5df9-8283-11ea-a9e3-ab457510f846');      
  },
}
</script>

<style>
  body{
      margin: 0;
      overflow: hidden;
  }
  .main-container{
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 5vh;
  }
</style>
