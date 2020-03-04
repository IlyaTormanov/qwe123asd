<template>
    <div class="item_relative_wrapper">
        <Input placeholder="Технологии"
               :large="false"
               class="selectInput fullWidthInput" />
        <Tag :style="{position:'absolute',top:'5px',left:'30%'}">
            <CloseCircle :size="18"/>
        </Tag>

    </div>
</template>

<script>
    import CloseCircle from 'vue-material-design-icons/CloseCircle.vue';
    import Tag from "../Tag";
    import Input from '../input/input'
    export default {
        name: "MultiSelect",
        components: {Tag,Input,CloseCircle}
    }
</script>

<style scoped lang="scss">
    .item_relative_wrapper{
        position:relative;
        width:100%;
    }
</style>
