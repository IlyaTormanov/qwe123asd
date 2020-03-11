<template>
    <button :class="!className?'button':`button ${className}`" :style="{alignSelf:alSelf,margin:margin}" @click="click" >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props:{
            alSelf:String,
            margin:String,
            className:String
        },
        methods:{
            click:function(e){
                this.$emit('click',e)
            }
        }
    }
</script>

<style scoped lang="scss">
 @import  "src/variables.scss";
        .button{
            padding:15px;
            border-radius:4px;
            display:flex;
            box-sizing: border-box;
            flex-direction: row;
            color:#2c3e50;
            justify-content: center;
            background: white;
            align-items: center;
            align-content: center;
            width: max-content;
        }
    .border_thin{
            border:1px solid $bostil;
    }
    .button_full{
        border:none;
        color:white;
        background: $bostil;

        &:hover{
            background: $lightOrange;
        }

    }
</style>