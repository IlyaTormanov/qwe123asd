<template>
<div id="content">
        <FeedbackForm v-if="getFeedbackState"/>
    <Header/>
    <ContentHeader/>
    <router-view />
</div>
</template>

<script>
    import Header from "../../../Header";
    import ContentHeader from "../contentHeader/ContentHeader";
    import FeedbackForm from "../../../../UtilsComponents/feedbackForm/FeedbackForm";
    export default {
        name: "Content",
        components: {FeedbackForm, ContentHeader, Header},
        computed:{
            getFeedbackState:function(){
                return this.$store.getters.GET_FEEDBACK_PANEL
            }
        },

    }
</script>

<style scoped>
        #content{
        position: relative;
            width:100%;
            display:flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            align-content: center;
            background:url('../../../../../business.png');

        }
</style>