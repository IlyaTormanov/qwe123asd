<template>
    <div class="item_relative_wrapper">
        <Input placeholder="Технологии"
               :large="false"
               class="selectInput fullWidthInput" v-model="typingValue"  @focus="showList=!showList"/>
        <div  class="tagList">
           <Tag
             :tag="tag.name"
             v-for="tag in tagList"
             v-if="tagList.length">
            <CloseCircle :size="18" class="icon"  @click="removeFromTagList(tag)" title="Удалить"/>
            </Tag>
        </div>
        <div class="select_list" v-if="showList">
            <div class="item"  v-for="item in getModel" @click="pushToTagList(item)">
                <div>{{item.name}}</div>   <Check :fill-color="tagList.find(i=>i.id===item.id)?'#2196F3':'#787878'" title="Добавить"/>
            </div>
        </div>

    </div>
</template>

<script>

    import CloseCircle from 'vue-material-design-icons/CloseCircle.vue';
    import Tag from "../Tag";
    import Input from '../input/input'
    import Check from 'vue-material-design-icons/Check.vue';
    import {uniq} from 'fp-ts/es6/Array';
    import {fromEquals} from "fp-ts/es6/Eq";

    const tagEq = fromEquals((a, b) => a.name === b.name);

    export default {
        name: "MultiSelect",
        components: {Tag, Input, CloseCircle,Check},
        props: ['model'],
        data() {
            return {
                typingValue: "",
                tagList:[],
                showList:false
            }
        },
            //TODO taglist
        watch:{
          showList:function(val){
              this.showList=val
          }
        },
        methods:{
          pushToTagList:function(tag){
              this.tagList= uniq(tagEq)([...this.tagList,tag])
          },
            removeFromTagList:function(i){
                this.tagList = this.tagList.filter(item=>item.id!==i.id)

            }

        },
        computed: {

            getModel() {
                return this.model.filter(item => item.name.toLowerCase().includes(this.typingValue.toLowerCase()));
            },



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
                display:grid;
                grid-template-columns: auto auto auto;
                grid-column-gap: 5px;
                flex-direction: row;
                justify-content: flex-start;
            }
        .select_list {
            width:100%;
            overflow: auto;
            z-index: 10000;
            position:absolute;
            background: white;
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
