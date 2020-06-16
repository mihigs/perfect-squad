<template>
  <div class='home-main-container'>
      <div class="field-container">

      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeView',
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
    .field-container{
        background-image: url('../assets/field.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 25%;
        height: 90%;
        margin: auto;
        padding-top: 3%;
    }
</style>