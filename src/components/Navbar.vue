<template>
  <div class="navbar">
      <div class="navbar-logo">
          <p>Perfect Squad</p>
      </div>
      <div class="navbar-menu">

      </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>
    .navbar{
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 5vh;
        background-color: olivedrab;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        color: white;
    }
</style>