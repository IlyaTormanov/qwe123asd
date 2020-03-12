<template>
    <EntityWrapper>
        <div class="resume" :key="resume.id">
            <div class="resume_description" >
                <Avatar :mini="true"/>
                <div class="resume_exp">
                    <span class="resume_name">
                        {{resume.name}}
                    </span>
                    <span class="resume_data">
                        {{resume.data}}
                    </span>
                   <div class="tag_set">
                       <Tag :tag="tag" v-for="tag in resume.technologies" :key="tag.id"/>
                   </div>
                </div>
            </div>
            <div class="etc">
                <div class="refresh_Date">
                    {{resume.refreshDate}}
                </div>
                <DotsVertical fill-color="#787878"/>
            </div>

        </div>
    </EntityWrapper>

</template>

<script>

    import DotsVertical from 'vue-material-design-icons/DotsVertical.vue';
    import EntityWrapper from "../../../Wrappers/EntityWrapper";
    import Avatar from "../../../UtilsComponents/images/Avatar";
    import Tag from "../../../UtilsComponents/Tag";
    export default {
        name: "Resume",
        components: {Tag, Avatar, EntityWrapper,DotsVertical,},
        props:{resume:Object}
    }
</script>

<style scoped lang="scss">
@import "src/variables";
        .resume{
            width:100%;
            display: flex;
            align-items: start;
            justify-content: space-between;
            padding:25px 0;
            border-bottom: 1px solid $border;
            box-sizing: border-box;
            .resume_description{

                display: flex;
                align-items: center;
                flex-direction: row;
                text-align: start;
                .resume_exp{
                    display: flex;
                    flex-direction:column;
                    :nth-child(1n+2){
                        padding-top:3px;
                    }
                    padding-left: 10px;
                    .resume_name{
                        font-size: 1em;
                        font-weight: bolder;
                        color: #2a5885;
                    }
                    .resume_data{
                        font-size: 0.9em;
                        color: $gray;
                    }
                    .tag_set{
                        display:flex;
                        flex-direction: row;
                                :nth-child(1n+2){
                                    margin-left:5px;
                                }
                    }
                }
            }
            .etc{
                height: fit-content;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                :last-child{
                    margin-left: 15px;
                }
                .refresh_Date{
                    color:$gray;
                    font-size:0.9em;
                }
            }
        }

</style>
