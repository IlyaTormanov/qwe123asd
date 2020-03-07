<template>
    <div>
        <div class="company_promo" >
            <Avatar/>
            <div class="description">
                <div class="company_name">{{data.name}}</div>
                <div class="company_description">{{data.description}}</div>
            </div>
            <div class="company_contacts">
                <div>{{data.email}}</div>
                <div>{{data.phone}}</div>
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
            data:Object
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";
        .company_promo{
            -webkit-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            -moz-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
            background:white;
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
                    color:#2a5885;
                    font-size:0.9em;
                    letter-spacing: 1.1px;
                }

            }
        }
</style>
