<template>
    <div id="content_header">
<!--        <Input placeholder="Поиск"/>-->
        <div class="filter_pop_up">
            <div class="filters" @click="()=>{this.setSidebar=true}">
                <span class="filters_title">
                    Фильтры
                </span>
                <ChevronUpIcon :size="28" v-if="!setSidebar"/>
                <ChevronDownIcon :size="28" v-if="setSidebar"/>
            </div>

        </div>
<!--        <Select v-if="showSearch" background="#e7e8ec" radius="5px" :large="true" placeholder="Поиск..." :data="technologies"/>-->
        <Input v-if="showSearch"  :style="{background:'#e7e8ec'}" :large="true" placeholder="Поиск..."  />
        <MagnifyIcon fill-color="#787878" :size="28" @click="showSearch=!showSearch"/>
    </div>
</template>

<script>


    import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue';
    import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
    import Input from "../../../../UtilsComponents/input/input";
    import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
    import Dropdown from "../../../../UtilsComponents/dropdowns/Dropdown";
    import Select from "../../../../UtilsComponents/select/Select";
    import MultiSelect from "../../../../UtilsComponents/select/MultiSelect";

    export default {
        name: "ContentHeader",
        components: {MultiSelect, Select, Dropdown, Input, ChevronUpIcon,MagnifyIcon,ChevronDownIcon},

        data(){
            return{
                showSearch:false,

                currentValue:"",

            }
        },
        computed:{
          technologies:function(){
              return this.$store.getters.GET_TECHNOLOGIES
          },
            setSidebar:{
                    get:function(){
                        return this.$store.getters.GET_FILTER_SIDEBAR
                    },
                set:function(val){
                        this.$store.getters.GET_FILTER_SIDEBAR=val
                }
            }
        },
        mounted() {
            this.$store.dispatch('SET_TECHNOLOGIES')

        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    #content_header {
        left:400px !important;
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding:15px 40px;
        height:70px;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 2px solid $border;
        .filter_pop_up {
            position:relative;
            width: fit-content;

            .filters {
                font-size: 1.6em;
                font-weight: bolder;
                color: $gray;
                display: flex;
                flex-direction: row;
                justify-content: center;
                cursor:pointer;

                .filters_title {
                    cursor:pointer;
                }

            }
        }
    }
</style>
