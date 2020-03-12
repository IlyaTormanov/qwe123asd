<template>
    <div id="header">
        <div class="logo_block">
            <img :src="bostilava"/>
        </div>
        <div class="links">
            <router-link :to="{name:'Companies'}" class="nav-link">Компании</router-link>
            <router-link :to="{name:'Vacansies'}" class="nav-link">Резюме</router-link>
            <router-link to='/specialists' class="nav-link">Компания</router-link>
            <router-link to='/specialists' class="nav-link">Профиль</router-link>
        </div>
        <div class="close-link">
            <div class="username">{{this.username}}</div>
            <img :src="avatar" class="miniavatar"/>
        </div>
    </div>
</template>

<script>
    import bostilAva from '../../logoBostil.png'
    import ExitToApp from 'vue-material-design-icons/ExitToApp.vue';
    import miniAva from '../../miniava.jpg'
    export default {
        name: "Header",
        components:{
            ExitToApp,
        },
        data(){
            return{
                avatar:miniAva,
                bostilava:bostilAva
            }
        },
        computed:{
            username:function(){
                return this.$store.getters.GET_LOGIN_USER.username
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    #header {
        display:flex;
        justify-content: space-between;
        width: 100%;
        background:#222;
        height: 80px;
        .close-link{
            color: white;
            font-weight: bolder;
            font-size: 1.3em;
            padding: 0 20px;
            display:flex;
            width:100px;
            flex-direction: row;
            align-items: center;
            .miniavatar{
                width:32px;
                height:32px;
                border-radius: 50%;
            }
            .username{
                font-weight: bolder;
                padding-right:10px;
                font-size:0.8em;
            }
        }
        .logo_block{
            padding-left:40px;
            box-sizing: border-box;
            display:flex;
            justify-content: center;
            align-items: center;
        }
       .links{

           display: flex;
           justify-content: center;
           align-items: center;
           padding: 15px 20%;
           box-sizing: border-box;

           .nav-link {
               color: white;

               font-size: 1.3em;
               padding: 0 20px;
           }
       }


    }
</style>