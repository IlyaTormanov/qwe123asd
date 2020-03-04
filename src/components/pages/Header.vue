<template>
    <div id="header">
        <div class="links">
            <router-link to='/specialists' class="nav-link">Вакансии</router-link>
            <router-link to='/specialists' class="nav-link">Резюме</router-link>
            <router-link to='/specialists' class="nav-link">Компания</router-link>
            <router-link to='/specialists' class="nav-link">Профиль</router-link>
        </div>
        <div class="close-link">
            Выйти <ExitToApp/>
        </div>
    </div>
</template>

<script>

    import ExitToApp from 'vue-material-design-icons/ExitToApp.vue';
    export default {
        name: "Header",
        components:{
            ExitToApp
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    #header {
        display:flex;
        justify-content: space-between;
        width: 100%;
        background: white;
        height: 60px;
        .close-link{
            color: $gray;
            font-weight: bolder;
            font-size: 1.3em;
            padding: 0 20px;
            display:flex;
            flex-direction: row;
            align-items: center;
        }
       .links{

           display: flex;

           justify-content: center;
           align-items: center;
           padding: 15px 20%;
           box-sizing: border-box;

           .nav-link {
               color: $gray;
               font-weight: bolder;
               font-size: 1.3em;
               padding: 0 20px;
           }
       }


    }
</style>