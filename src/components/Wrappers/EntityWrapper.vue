<template>
    <div class="company_promo" >
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "EntityWrapper"
    }
</script>

<style scoped lang="scss">
    @import "src/variables";
    .company_promo{
        display: flex;
        align-items: center;
        justify-content: center;
        height:160px;
        border: 1px solid $border;
        border-radius: 4px;
        width:100%;
        -webkit-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
        -moz-box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
        box-shadow: 0px 1px 12px 1px rgba(189,189,189,1);
        background:white;
    }
</style>