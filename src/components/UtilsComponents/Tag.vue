<template>
    <div class="tag">
                <div>{{tag.name}}</div>
                <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        props:{tag:Object}
    }
</script>

<style scoped lang="scss">
 @import "src/variables";
    .tag{
        background: #949194;
        padding:5px 20px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 4px;

        font-size:0.9em;
        color:white;
        div{

            padding-right:3px;
        }
    }
</style>