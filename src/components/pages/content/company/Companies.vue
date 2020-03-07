<template>
    <div id="company_container">
        <ContentHeader />

        <div class="content">
            <div class="filter_dropdown" v-if="setSidebar">

                <div class="filter_dropdown_item">
                    <label>Технологии</label>
                    <MultiSelect :model="technologies"/>

                </div>
                <div class="filter_dropdown_item">
                    <label>Город</label>
                    <MultiSelect :model="technologies"/>

                </div>
                <div class="filter_dropdown_item">
                    <label>Страна</label>
                    <MultiSelect :model="technologies"/>

                </div>
            </div>
            <div class="company_list" >
                <Company :data="company" v-for="company in this.allCompany"/>
            </div>
        </div>

    </div>
</template>

<script>
    import Company from "./Company";
    import ContentHeader from "../utilsLayouts/contentHeader/ContentHeader";
    import Input from "../../../UtilsComponents/input/input";
    import MultiSelect from "../../../UtilsComponents/select/MultiSelect";

    export default {
        name: "Companies",
        components: {MultiSelect, Input, ContentHeader, Company},

        computed: {
            allCompany: function () {
                return this.$store.getters.GET_ALL_COMPANY
            },
            setSidebar: function () {
                return this.$store.getters.GET_FILTER_SIDEBAR
            },
            technologies: function () {
                return this.$store.getters.GET_TECHNOLOGIES
            }
        },
        mounted() {
            this.$store.dispatch('SET_ALL_COMPANY_REQUEST')
            this.$store.dispatch('SET_TECHNOLOGIES_REQUEST')
        }
    }
</script>

<style scoped lang="scss">
    #company_container {
        margin-top: 120px;
        width: 100%;
        background: white;
        position: relative;
            .content{
                 display:grid;
                width:100%;
                box-sizing: border-box;
                height:min-content;
                background:#edeef0;
                grid-template-columns: auto auto;
                grid-row-gap: 5px;
                .filter_dropdown {
                    @media screen and(max-width:1366px){
                            width:300px;
                    }
                    display: grid;
                    grid-row-gap: 20px;
                    -webkit-box-shadow: 0px 1px 12px 1px rgba(189, 189, 189, 1);
                    -moz-box-shadow: 0px 1px 12px 1px rgba(189, 189, 189, 1);
                    box-shadow: 0px 1px 12px 1px rgba(189, 189, 189, 1);
                    /*height:600px;*/

                    width: 500px;
                    padding: 15px;
                    box-sizing: border-box;
                    background: white;
                    z-index: 1000;
                    border-radius: 4px;

                    .filter_dropdown_item {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                    }
                }

                .company_list {
                    height:100%;
                    overflow:auto;
                    box-sizing: border-box;
                    background: white;
                    padding-top:10px;
                    width:max-content;
                    align-items: flex-start;
                    justify-content: flex-start;
                    align-content: flex-start;
                    display: flex;
                    flex-direction: column;


                }
            }

    }
</style>
