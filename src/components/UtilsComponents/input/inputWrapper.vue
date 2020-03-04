<template>
    <div class="input_container" >
        <span class="placeholderTop" >{{placeholderTop}}</span>
        <div   class="input_wrapper">
            <div class="icon" v-if="order"  :style="{order:order}">
                <MenuIcon fillColor="white" />
            </div>
            <Input :placeholder="placeholder" :name="name" :large="large" :is-select="isSelect" :style="styleList"/>

        </div>

    </div>
</template>

<script>
    import Input from "./input";
    export default {
        name: "inputWrapper",
        components: {Input},
        props:{
            placeholder:String,
            name:String,
            large:Boolean,
            isSelect:Boolean,
            styleList:Object
        }
    }
</script>

<style scoped>

</style>