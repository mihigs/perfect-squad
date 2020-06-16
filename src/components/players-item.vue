<template>
  <div class="players-item">
      <div class="players-item-favorite-icon"></div>
      <div class="players-item-name">{{player.name.toUpperCase()}} {{player.lastName.toUpperCase()}}</div>
      <div class="players-item-position">{{player.stats.position}}</div>
  </div>
</template>

<script>
export default {
    name: 'PlayersItem',
    props: ['player'], 
}
</script>

<style>
    .players-item{
    width: 95%;
    margin: auto;
    margin-bottom: 3%;
    background-color: gainsboro;
    text-align: center;
    line-height: 300%;
    font-weight: bold;
    font-size: 80%;
  }
  .players-item-favorite-icon{
      background-image: url('../assets/favorite-heart.png');
      background-repeat: no-repeat;
      float: left;
      height: 30px;
      width: 30px;
  }
  .players-item-name{
      display: inline;
      font-size: 90%;
      color: rgb(37, 48, 48);
  }
  .players-item-position{
      float: right;
      width: 18%;

  }
</style>