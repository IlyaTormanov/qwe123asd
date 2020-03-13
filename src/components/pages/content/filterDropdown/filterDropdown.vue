<template>
    <div>
    <div class="filter_dropdown" >

        <div class="filter_dropdown_item" >
            <label>Технологии</label>
            <MultiSelect :model="this.data"/>
        </div>
        <Button class-name="border_thin">Сохранить фильтры</Button>
    </div>
    </div>
</template>

<script>
    import MultiSelect from "../../../UtilsComponents/select/MultiSelect";
    import Button from "../../../UtilsComponents/button/Button";
    export default {
        name: "filterDropdown",
        components: {Button, MultiSelect},
        props:{
            data:Array
        }
    }
</script>

<style scoped lang="scss">
    .filter_dropdown {
        height:100%;
        @media screen and(max-width:1366px){
            width:300px;
        }
        display: flex;
        flex-direction: column;
        -webkit-box-shadow: 1px 8px 12px 0px rgba(156,156,156,1);
        -moz-box-shadow: 1px 8px 12px 0px rgba(156,156,156,1);
        box-shadow: 1px 8px 12px 0px rgba(156,156,156,1);
        /*height:600px;*/

        width: 500px;
        padding: 15px;
        box-sizing: border-box;
        background: white;
        z-index: 1000;
        border-radius: 4px;

        .filter_dropdown_item {
            padding-top: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }
    }
</style>