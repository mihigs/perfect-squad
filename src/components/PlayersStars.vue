<template>
  <div class="stars-container">
    <ul class="list">
        <li @click="rate(star)" v-for="star in 5" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
            <svg width="20px" height="20px" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg">
                <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/>
            </svg>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'PlayersStars',
    props: ['player'],
    data() {
        return {
            playerRatings: [],
        }
    },
    methods: {
        rate(star) {
            this.$store.dispatch('addPlayerRating', { rating: star, playerID: this.player.ID });
            this.playerRatings = this.$store.getters.players[this.player.ID].rating;
        }
    },
    computed: {
        stars: function(){
            let rating = this.playerRatings;
            if(rating.length > 0){
                return rating.reduce((a, b) => a + b) / rating.length;
            }
            else
                return 0;
        },
    },
    created(){
        this.playerRatings = this.player.rating;
    },
}
</script>

<style lang='scss'>
.stars-container {
    float: right;
    width: 40%;
    .list {
        float: right;
        padding: 0;
        margin: 0;
        &:hover {
            .star {
                fill: #ffe100;
            }
        }
        .star {
            display: inline-block;
            transition: all .2s ease-in-out;
            fill: gray;
            cursor: pointer;
            &:hover {
                ~ .star:not(.active) {
                    fill: gray;
                }
            }
            &.active {
                fill: #ffe100;
            }
        }
    }
}
</style>