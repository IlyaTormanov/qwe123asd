<template>
    <div id="company_container">
        <ContentHeader :model="this.allCompany" />

        <div>
                        <div class="filter_dropdown" v-if="setSidebar">

                            <div class="filter_dropdown_item">
                                <label>Технологии</label>
                              <MultiSelect/>

                            </div>
                        </div>
            <Company :data="this.allCompany" />
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
            setSidebar:function(){
                return this.$store.getters.GET_FILTER_SIDEBAR
            }
        },
        mounted() {
            this.$store.dispatch('SET_ALL_COMPANY')

        }
    }
</script>

<style scoped lang="scss">
    #company_container {
        margin-top:120px;
        width:1000px;
        display: grid;
        grid-row-gap: 15px;
        background:white;
        .filter_dropdown{
            position:absolute;
            -webkit-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            -moz-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            height:600px;
            width:400px;
            padding:15px;
            box-sizing: border-box;
            background:white;
            z-index: 1000;
            border-radius: 4px;
            .filter_dropdown_item{
                width:100%;
                display:flex;
                flex-direction: column;
                align-items: flex-start;

            }
        }
    }
</style>
