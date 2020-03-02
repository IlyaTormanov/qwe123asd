<template>
        <div id="vacansy_container">
            <div class="header">
                <Input placeholder="поиск" :order="1"/>

            </div>
            <div class="vacansy_list">

            </div>
        </div>
</template>

<script>
    import Input from "../../../UtilsComponents/input/input";
    export default {
        name: "Vacansy",
        components: {Input}
    }
</script>

<style scoped lang="scss">
#vacansy_container{
    .header{

    }
    .vacansy_list{

    }
}
</style>
