<template>
  <div class="navbar">
      <div class="navbar-logo">
        <p>Perfect Squad</p>
      </div>
      <div class="navbar-menu">
        <p class="navbar-menu-item">Players</p>
        <p class="navbar-menu-item">Favorites</p>
        <p class="navbar-menu-item">Formations: </p>
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
        justify-content: space-around;

        width: 100%;
        height: 5vh;
        background-color: olivedrab;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        color: white;

        position: sticky;
    }
    .navbar-logo{
        font-weight: bold;
        line-height: 50%;
    }
    .navbar-menu{
        display: flex;
        align-content: flex-end;
        line-height: 50%;
    }
    .navbar-menu-item{
        margin-left: 20px;
        /* cekirat marginu ovdje */
    }
</style>