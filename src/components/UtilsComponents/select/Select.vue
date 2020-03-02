<template>
    <div class="container">
        <Input :placeholder="placeholder" v-model="currentValue"/>
            <Dropdown :current="currentValue" :list="data"/>

<!--            <div class="select_list"  v-for="item in data" >-->
<!--        <div v-for="i in item" class="item" v-if="i.name.substring(0,2)===currentValue" >-->
<!--            {{i.name}}-->
<!--        </div>-->
    </div>



</template>

<script>
    import Input from "../input/input";
    import Dropdown from "../dropdowns/Dropdown";
    export default {
        name: "Select",
        components: {Dropdown, Input},
        data(){
           return{
            currentValue:""

           }
        },
        props:{
            placeholder:String,
            data:Array
        },



    }
</script>

<style scoped lang="scss">
    @import "src/variables";
    .container{
        width: fit-content;

    }

</style>
