<template>
    <div class="wrapper">
        <div class="modal">
            <div class="modal_title" >
                Ошибка
            </div>
            <div class="modal_content">
                {{modal.text}}
            </div>
            <Button @click="clearPopUp">Хорошо</Button>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/UtilsComponents/button/Button";

    export default {
        name: "PopUp",
        components: {Button},
        props: {
            modal: {
                status: Number,
                text: String
            }
        },
        methods:{
            clearPopUp:function(){
                this.$store.commit('SET_MODAL',{})
            }
        }
    }
</script>

<style scoped lang="scss">
        .wrapper{
        width:100%;
            z-index:10000;
        height:100%;
            position:absolute;
            background: rgba(0,0,0,.5);
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        .modal{
            border-radius:3px;
            background:white;
            padding:40px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width:300px;
            height:130px;
        .modal_title{
                font-size:1.3em;
            letter-spacing: 1.1px;
        }
        .modal_content{

        }
        }
        }
</style>