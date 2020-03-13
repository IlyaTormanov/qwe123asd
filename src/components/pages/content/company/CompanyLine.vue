<template>
    <EntityWrapper>
        <div class="entity" >
            <div class="description">
                <Avatar :mini="true"/>
               <div class="description_col">
                   <div class="entity_name">{{data.name}}</div>
                   <div class="entity_description">{{catDescr}}</div>
                   <div class="entity_description">
                       {{data.webSite}}
                   </div>
               </div>
            </div>
            <div class="entity_tags">
                <Tag :tag="item.name" v-for="item in tagList"/>
            </div>
        </div>
    </EntityWrapper>
</template>
<script>
    import Avatar from "../../../UtilsComponents/images/Avatar";
    import EntityWrapper from "../../../Wrappers/EntityWrapper";
    import Tag from "../../../UtilsComponents/Tag";
    export default {
        name: "CompanyLine",
        components: {Tag, EntityWrapper, Avatar},
        data(){
          return{
              tagList:[
                  {
                      name:'IT'
                  },
                  {
                      name:'Менеджмент'
                  },
                  {
                      name:'Грузоперевозки'
                  },


              ]
          }
        },
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:25px 0px;
            border-bottom: 1px solid $border;
            box-sizing: border-box;
            .description{

                display: flex;
                align-items: center;
                flex-direction: row;
                text-align: start;
                .description_col{
                    padding-left: 10px;
                    .entity_name{
                        font-size:1em;
                        font-weight: bolder;
                        color:#2a5885;
                    }
                    .entity_description{

                        font-size:0.9em;
                        color:$gray;
                    }
                }


            }
            .entity_tags{
                display: flex;
                flex-direction: row;
                :nth-child(1n+2){
                    margin-left: 5px;
                }
            }
        }
</style>
