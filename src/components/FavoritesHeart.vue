<template>
  <div class="heart-container" @click.stop="toggleFavorite()">
    <svg class="heart" v-bind:class="{active: isActive}" viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  </div>
</template>

<script>
export default {
    name: 'FavoritesHeart',
    props: ['toggleable', 'toggled'],
    data(){
        return {
            isActive: false, //is the heart red or not
        }
    },
    methods:{
        toggleFavorite: function(){
            if(this.toggleable){
                this.isActive = !this.isActive;
                this.$emit('toggleFavorite', {addedToFavorites: this.isActive});
            }
        },
    },
    created(){
        this.isActive = this.toggled;
    },
}
</script>

<style scoped lang="scss">
    .heart-container{
        float: left;
        margin-left: 4%;
        margin-top: 2%;
    }
    .heart {
        fill: #9E9C9C;
        width: 25px;
        &.active{
            fill: red;
            animation: fillIn 0.2s ease;
        }
    }
    //heart animation
    @keyframes fillIn {
        0% { transform: scale(1); }
        100% { transform: scale(1.5); }
    }

    @media only screen and (max-width: 1152px){
    .heart-container{
        margin-left: 4%;
        margin-top: 1%;
    }
  }
</style>