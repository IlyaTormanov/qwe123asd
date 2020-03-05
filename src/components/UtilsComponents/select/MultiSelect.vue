<template>
    <div class="item_relative_wrapper">
        <Input placeholder="Технологии"
               :large="false"
               class="selectInput fullWidthInput" v-model="typingValue"/>
        <div  class="tagList">
<!--            //TODO:'add grid'-->
           <Tag
             :tag="tag"
             v-for="tag in tagList"
             v-if="tagList.length">
            <CloseCircle :size="18"/>
            </Tag>
        </div>

        <div class="select_list" v-if="getModel.length">
            <div class="item"  v-for="item in getModel" @click="pushToTagList(item)">
                <div>{{item.name}}</div>   <Check/>
            </div>
        </div>

    </div>
</template>

<script>

    import CloseCircle from 'vue-material-design-icons/CloseCircle.vue';
    import Tag from "../Tag";
    import Input from '../input/input'
    import Check from 'vue-material-design-icons/Check.vue';
    export default {
        name: "MultiSelect",
        components: {Tag, Input, CloseCircle,Check},
        props: ['model'],
        data() {
            return {
                typingValue: "",
                //TODO:'set limit or scroll'
                tagList:[]
            }
        },
        methods:{
          pushToTagList:function(tag){
              //TODO:'filter'
              this.tagList.filter(item=>item!==tag)
              return this.tagList=[...this.tagList,tag]
          }
        },
        computed: {
            getModel() {
                //TODO:'add includes'
                return this.model.filter(item => item.name.substring(0,2) === this.typingValue)

            }


        }

    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    .item_relative_wrapper {
        position: relative;
        width: 100%;
            .tagList{
                position:absolute;
                top:5px;
                left:30%;
                display:flex;
                flex-direction: row;
                justify-content: flex-start;
            }
        .select_list {
            width:100%;
            z-index: 10000;
            background: white;
            position: absolute;
            border:1px solid $border;
            padding: 5px;
            box-sizing: border-box;
            border-radius: 0 0 4px 4px;
            :last-child{
                border-bottom:none !important;;
            }
            .item {
                cursor:pointer;
                border-bottom: 1px solid $border;
                padding: 7px;
                font-weight: bolder;
                color: $gray;
                text-align: start;
                display:flex;
                align-items: center;
                align-content: center;
                justify-content: space-between;
                &:hover{
                    background:$border !important;
                    border-radius: 4px;
                }
            }
        }
    }
</style>
