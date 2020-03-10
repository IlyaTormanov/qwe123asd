<template>
    <img alt="Vue logo" src="../../../assets/logo.png" :class="this.mini?'logo':'large'">
</template>

<script>
    export default {
        name: "Avatar",
        props:{
            mini:Boolean
        }
    }
</script>

<style scoped>
    .logo{
        width:70px;
        height:70px;
    }
    .large{
        width:200px;
        height:200px;
    }
</style>