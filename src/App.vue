<template>
  <div class="main-container">
    <Navbar></Navbar>
    <!-- keeps the data from the UI on the homepage -->
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  name: 'App',
  components:{
    Navbar,
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
