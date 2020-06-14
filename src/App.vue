<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

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
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
