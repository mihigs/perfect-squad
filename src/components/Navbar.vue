<template>
  <div class="navbar">
      <router-link to="/home" class="logo">
        <p>Perfect Squad</p>
      </router-link>
      <!-- Navbar menu -->
    <div class="hamburger" @click.self="()=>{menuOpen = !menuOpen}" :class="{active: menuOpen}"></div>
        <div class="menu" :class="{active: menuOpen}">
            <!-- Players -->
            <div @click="()=>{menuOpen = !menuOpen}" class="menu-item-container">
                <router-link to="/players" class="menu-item">Players</router-link>
            </div>
            <!-- Favorites -->
            <div @click="()=>{menuOpen = !menuOpen}" class="menu-item-container">
                <router-link to="/favorites" class="menu-item" id="favorites">Favorites</router-link>
            </div>
            <!-- Dropdown -->
            <FormationDropdown class="dropdown" id="dropdown"></FormationDropdown>
        </div>
    </div>
</template>

<script>
import FormationDropdown from './FormationDropdown'

export default {
    name: 'Navbar',
    components:{
        FormationDropdown,
    },
    data(){
        return{
            menuOpen: false,
        }
    },
}
</script>

<style scoped lang="scss">
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width: 100%;
        height: 5vh;
        background-color: #253e02;
        box-shadow: 0px 2px 2px 0
        rgba(0,0,0,0.3);
        color: white;

        position: fixed;
        top: 0;
        z-index: 4;

        .logo{
            font-weight: bold;
            line-height: 50%;
            color: white !important;
            text-decoration: none;
            &:hover{
                color: #f09e00 !important;
            }
        }
        .menu{
            display: flex;
            align-content: flex-end;
            .menu-item{
                margin-left: 25px;
                line-height: 250%;
                color: white;
                text-decoration: none;
                &:hover{
                    color: #f09e00;
                }
            }
            .router-link-active{
                color: #f09e00;
            }
        }
    }

    @media only screen and (max-width: 768px) {
    .navbar{
        height: 7vh;
        justify-content: space-between;
    .logo{
        margin: 1% 0 0 5%;
    }
    .hamburger{
        width: 35px;
        height: 35px;
        margin: 1.5% 8% 0 0;
        background: url('../assets/hamburger_icon.png') no-repeat;
        background-size: contain;
        transition: all .3s;
        &.active{
            transform: rotateX(180deg);
        }
    }
        .menu{
            height: 0;
            width: 100%;
            position: absolute;
            top: 7vh;
            background-color: #213802;
            display: block;
            .menu-item-container{
                transition: all .3s;
                transform: translateX(100%);   
            }
            .menu-item, .dropdown{
                border-bottom: 1px solid rgb(36, 36, 36);
                margin: 0;
                background-color: #213802;
                text-align: center;
                height: 40px;
                display: block;
                transition: all .3s;
                transform: translateX(100%);
            }
            &.active{
                width: 100%;
                .menu-item, .dropdown{
                    transform: translateY(0px);
                }
                .menu-item-container{
                    transform: translateY(0px);   
                }
            }
            #favorites{
                transition-delay: .1s;
            }
            #dropdown{
                transition-delay: .2s;
            }
        }
    }
}
</style>