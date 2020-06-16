<template>
  <div class="player-circle"></div>
</template>

<script>
export default {
    name: 'PlayerCircle',
}
</script>

<style>
    .player-circle{
        width: 30px;
        height: 30px;
        background: rgba(151, 151, 151, 0.4);
        border-radius: 50%;
        border: 2px solid rgb(32, 32, 32);
        align-self: flex-end;
    }
    .player-circle:hover{
        border: 2px solid rgb(56, 56, 56);
    }
</style>