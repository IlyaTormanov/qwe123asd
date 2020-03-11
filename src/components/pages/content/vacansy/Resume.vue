<template>
    <EntityWrapper>
        <div class="vacansy" :key="resume.id">
            <div class="company" >
                <Avatar :mini="true"/>
                <div class="description">
                    <div class="company_name">{{resume.name}}</div>
                    <div class="company_description">{{catDescr}}</div>
                </div>
                <div class="company_contacts">
                    <div>{{resume.city}}</div>
                    <div>{{data.phone}}</div>
                </div>
            </div>


        </div>
    </EntityWrapper>

</template>

<script>

    import EntityWrapper from "../../../Wrappers/EntityWrapper";
    import Avatar from "../../../UtilsComponents/images/Avatar";
    export default {
        name: "Resume",
        components: {Avatar, EntityWrapper},
        props:{resume:Object}
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
