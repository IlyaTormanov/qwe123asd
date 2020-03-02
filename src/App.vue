<template>
    <div id="app">
        <PopUp :modal="this.$store.getters.GET_MODAL" v-if="checkModal(this.$store.getters.GET_MODAL)"/>
<!--            <Login/>-->
        <Registration/>
    </div>
</template>

<script>
    import {checkIsEmpty} from '@/functions/utils';
    import HelloWorld from './components/HelloWorld.vue'
    import Login from "@/components/Authorization /login/Login";
    import PopUp from "@/components/UtilsComponents/modal/PopUp";
    import Registration from "@/components/Authorization /registration/Registration";


    export default {
        name: 'App',
        components: {
            Registration,
            PopUp,
            Login,
            HelloWorld
        },

        methods: {
            checkModal: function (arg) {
                return checkIsEmpty(arg)
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Roboto Slab';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 14px;
        position: relative;

        input, textarea {
            box-sizing: border-box;
        }

        button {
            color: white;
            min-width: 60px;
            border: none !important;
            cursor: pointer;
        }

        a {
            cursor: pointer;
        }
    }
</style>
