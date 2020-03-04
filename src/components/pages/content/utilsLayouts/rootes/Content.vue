<template>
<div id="content">
    <Header/>

    <router-view/>
</div>
</template>

<script>
    import Header from "../../../Header";
    export default {
        name: "Content",
        components: {Header}
    }
</script>

<style scoped>
        #content{
            width:100%;
            display:flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            align-content: center;
            background:url('../../../../../business.png');

        }
</style>