<template>
        <div id="company_container">
                <Company :data="company" v-for="company in allCompany"/>


        </div>
</template>

<script>
    import Company from "./Company";
    export default {
        name: "Companies",
        components: {Company},
        data(){
            return{
                allCompany:this.$store.getters.GET_ALL_COMPANY
            }
        },
       mounted() {
            this.$store.dispatch('SET_ALL_COMPANY')

       }
    }
</script>

<style scoped lang="scss">
                #company_container{
                        display: grid;
                        grid-row-gap:15px;
                }
</style>
