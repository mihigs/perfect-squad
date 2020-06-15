<template>
  <div class='main-container'>
      <div class="field-container">

      </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style>
    .main-container{
        padding-top: 5vh;
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
        width: 40%;
        height: 90%;
        margin: auto;
    }
</style>