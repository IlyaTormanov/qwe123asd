<template>
    <div >
    <div class="select_list"  v-for="item in list" :style="styles">
        <div  class="item" v-if="searchDropdown?item.name.substring(0,2)===current:item" >
            {{item.name}}
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        props:{
            list:Array,
            current:String,
            searchDropdown:Boolean,
            styles:Object
        },

    }
</script>

<style scoped lang="scss">
    @import "src/variables";
    .select_list{
        min-width: 160px;
        z-index: 10000;
        background: white;
        position: absolute;
        padding:5px;
        box-sizing: border-box;
        border-radius: 4px;
    .item{
        border-bottom: 1px solid $border;
        padding:7px;
        font-weight: bolder;
        color:$gray;
        text-align: start;
    }
    }
</style>
