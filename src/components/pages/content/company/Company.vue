<template>
    <div>
        <div class="company_promo" v-for="company in data">
            <Avatar/>
            <div class="description">
                <div class="company_name">{{company.name}}</div>
                <div class="company_description">{{company.description}}</div>
            </div>
            <div class="company_contacts">
                <div>{{company.email}}</div>
                <div>{{company.phone}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "../../../UtilsComponents/images/Avatar";
    export default {
        name: "Company",
        components: {Avatar},
        props:{
            data:Array
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";
        .company_promo{
            display:grid;
            grid-template-columns: 13% 67% 20%;
            align-items: center;
            padding:25px 15px;
            box-sizing: border-box;
            height:90px;
            border: 1px solid $border;
            border-radius: 4px;
            width:700px;
            .description{
                align-items: baseline;
                display: flex;
                flex-direction: column;
                .company_name{
                    font-size:1.2em;
                    font-weight: bolder;
                    color:$gray;
                }
                .company_description{
                    color:$gray;
                }

            }
        }
</style>
