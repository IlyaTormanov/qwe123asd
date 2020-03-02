<template>
    <div id="container">
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Classic"
    }
</script>

<style scoped lang="scss">
    #container{
        width:100vw;
        height:100vh;
        display:flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        .wrapper{
            display:grid;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding:70px;
            box-sizing: border-box;
            height:400px;
            width:450px;
            border-radius: 4px;
            -webkit-box-shadow: 0px 5px 25px 1px rgba(41,41,41,1);
            -moz-box-shadow: 0px 5px 25px 1px rgba(41,41,41,1);
            box-shadow: 0px 5px 25px 1px rgba(41,41,41,1);
        }
    }
</style>