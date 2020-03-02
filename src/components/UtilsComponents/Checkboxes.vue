<template>
        <input type="checkbox" @input="onChecked"/>
</template>

<script>
    export default {
        name: "Checkboxes",
        props:{

        },
        methods:{
            onChecked:function(e){
                this.$emit('input',e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
