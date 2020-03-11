<template>
    <EntityWrapper>
        <div class="entity" >
            <Avatar :mini="true"/>
            <div class="description">
                <div class="entity_name">{{data.name}}</div>
                <div class="entity_description">{{catDescr}}</div>
            </div>
            <div class="entity_contacts">
                <div>{{data.email}}</div>
                <div>{{data.phone}}</div>
            </div>
        </div>
    </EntityWrapper>
</template>
<script>
    import Avatar from "../../../UtilsComponents/images/Avatar";
    import EntityWrapper from "../../../Wrappers/EntityWrapper";
    export default {
        name: "CompanyLine",
        components: {EntityWrapper, Avatar},
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

<style  lang="scss">
    @import "src/variables";
        .entity{
            width:100%;
            display:grid;
            grid-template-columns: 13% 67% 20%;
            align-items: center;
            padding:25px 30px;
            box-sizing: border-box;
            .description{
                align-items: baseline;
                display: flex;
                flex-direction: column;

                .entity_name{
                    font-size:1.4em;
                    font-weight: bolder;
                    color:$gray;
                }
                .entity_description{
                    color:#2a5885;
                    font-size:1em;
                    letter-spacing: 1.1px;
                }

            }
            .entity_contacts{
                color:#2a5885
            }
        }
</style>
