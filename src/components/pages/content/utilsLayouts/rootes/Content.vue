<template>
<div id="content">
    <Header/>
    <ContentHeader/>
    <router-view />
</div>
</template>

<script>
    import Header from "../../../Header";
    import ContentHeader from "../contentHeader/ContentHeader";
    export default {
        name: "Content",
        components: {ContentHeader, Header}
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