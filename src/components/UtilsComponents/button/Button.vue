<template>
    <button class="button" @click="click" >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props:{

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
        background: $orange;
        padding:15px;
        border-radius:4px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;

        &:hover{
            background: $lightOrange;
        }
    }
</style>