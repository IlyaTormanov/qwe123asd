<template>
    <div id="content_header">
        <div class="filter_pop_up">
            <div class="filters" >
                <span class="filters_title" @click="updateSidebar">
                    Фильтры
                </span>
                <ChevronUpIcon :size="28" v-if="!this.sidebar"/>
                <ChevronDownIcon :size="28" v-if="this.sidebar"/>
            </div>
        </div>
        <Input v-if="showSearch"
               :large="true" placeholder="Поиск..."
               :model="currentValue" :right-item="true">Найти</Input>
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
        components: {MultiSelect, Select, Dropdown, Input, ChevronUpIcon, MagnifyIcon, ChevronDownIcon},
        data() {
            return {
                showSearch: false,
                currentValue: "",
            }
        },
        watch: {
            currentValue: function (val) {
                console.log('val', typeof val)
                    this.$store.commit('SET_COMPANY_FILTER',val)

            }
        },
        methods: {
            updateSidebar: function () {
                this.$store.commit('SET_FILTER_SIDEBAR', !this.sidebar)
            }
        },
        computed: {
            sidebar: function () {
                return this.$store.getters.GET_FILTER_SIDEBAR
            },
        },
        created() {
            this.$store.dispatch('SET_TECHNOLOGIES_REQUEST')

        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    #content_header {
        margin-top:120px;
        left:400px !important;
        width:100%;
        display:flex;
        background: white;
        flex-direction: row;
        justify-content: space-between;
        padding:15px 40px;
        height:90px;
        border-bottom: 2px solid $border;
        align-items: center;
        box-sizing: border-box;

        .filter_pop_up {
            position:relative;
            width: fit-content;

            .filters {
                color: $gray;
                display: flex;
                flex-direction: row;
                justify-content: center;
                cursor:pointer;
                border: 1px solid #cccccc;
                padding:8px 28px;
                font-size:1em;
                letter-spacing: 1px;
                font-weight: bolder;
                .filters_title {
                    text-align: center;
                    align-self: center;
                    cursor:pointer;
                }

            }
        }
    }
</style>
