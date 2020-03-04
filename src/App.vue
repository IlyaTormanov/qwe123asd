<template>
    <div id="app">
        <PopUp :modal="setModal" v-if="checkModal(setModal)"/>
<!--&lt;!&ndash;            <Login/>&ndash;&gt;-->
<!--&lt;!&ndash;        <Registration/>&ndash;&gt;-->

<!--&lt;!&ndash;            <Select :data="this.$store.getters.GET_TECHNOLOGIES"/>&ndash;&gt;-->
<!--       <div class="test">-->
<!--           <Companies/>-->
<!--       </div>-->

        <router-view/>
    </div>
</template>

<script>
    import {checkIsEmpty} from '@/functions/utils';
    import HelloWorld from './components/HelloWorld.vue'
    import Login from "@/components/Authorization /login/Login";
    import PopUp from "@/components/UtilsComponents/modal/PopUp";
    import Registration from "@/components/Authorization /registration/Registration";
    import Companies from "./components/pages/content/company/Companies";
    import Select from "./components/UtilsComponents/select/Select";
    import ContentHeader from "./components/pages/content/utilsLayouts/contentHeader/ContentHeader";
    import Header from "./components/pages/Header";
    export default {
        name: 'App',
        components: {
            Header,
            Companies,
            ContentHeader,
            Select,



            Registration,
            PopUp,
            Login,
            HelloWorld
        },
        data(){
          return{
              tech:[]
          }
        },
        // mounted() {
        //     this.$store.dispatch('SET_TECHNOLOGIES')
        // },
        computed:{
          setModal:function(){
              return this.$store.getters.GET_MODAL
          }
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
            .test{
                width:100vw;
                height:100%;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
        input, textarea {
            box-sizing: border-box;
            &:hover{
                border-color: inherit;
            }
        }
        .selectInput{
            border:none;
            border-bottom:1px solid #e7e8ec !important ;
            color:#e7e8ec
        }
        .fullWidthInput{
            width:100%;
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
