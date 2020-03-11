<template>
    <div id="company_container">
        <div class="content">
            <FilterDropdown :data="technologies"/>
            <div class="company_list" >
                <router-link v-for="company in this.allCompany" :to="{name:'company',params:{id:company.id}}" :key="company.id" >
                    <CompanyLine :data="company"  />
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import CompanyLine from "./CompanyLine";
    import ContentHeader from "../utilsLayouts/contentHeader/ContentHeader";
    import Input from "../../../UtilsComponents/input/input";
    import MultiSelect from "../../../UtilsComponents/select/MultiSelect";
    import Button from "../../../UtilsComponents/button/Button";
    import FilterDropdown from "../filterDropdown/filterDropdown";

    export default {
        name: "Companies",
        components: {FilterDropdown, Button, CompanyLine, MultiSelect, Input, ContentHeader},

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

        width: 100%;
        background: white;
        position: relative;
            .content{
                 display:grid;
                width:100%;
                height:700px;
                box-sizing: border-box;
                background:#edeef0;
                grid-template-columns: 30% 70%;
                grid-row-gap: 5px;

                .company_list {
                    height:100%;
                    overflow:auto;
                    box-sizing: border-box;
                    background: white;
                    width:100%;
                    align-items: stretch;
                    display: grid;
                    grid-row-gap: 10px;
                    flex-direction: column;
                }
            }

    }
</style>
