<template>
        <div class="company_promo" >
            <Avatar :mini="true"/>
            <div class="description">
                <div class="company_name">{{data.name}}</div>
                <div class="company_description">{{catDescr}}</div>
            </div>
            <div class="company_contacts">
                <div>{{data.email}}</div>
                <div>{{data.phone}}</div>
            </div>
        </div>
</template>
<script>
    import Avatar from "../../../UtilsComponents/images/Avatar";
    export default {
        name: "CompanyLine",
        components: {Avatar},
        props:{
            data:Object,

        },
        computed:{
            catDescr:function () {
                if(this.data.description){
                    return this.data.description.substring(0,70)
                }
            }
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
            padding:25px 30px;
            box-sizing: border-box;
            height:160px;
            border: 1px solid $border;
            border-radius: 4px;
            width:100%;
            .description{
                align-items: baseline;
                display: flex;
                flex-direction: column;

                .company_name{
                    font-size:1.4em;
                    font-weight: bolder;
                    color:$gray;
                }
                .company_description{
                    color:#2a5885;
                    font-size:1em;
                    letter-spacing: 1.1px;
                }

            }
            .company_contacts{
                color:#2a5885
            }
        }
</style>
