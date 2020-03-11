<template>
      <div class="vacansy" :key="resume.id">
          <div>{{resume.name}}</div>
          <div>{{resume.city}}</div>
          <div>{{resume.refreshDate}}</div>
          <div></div><div></div>
          <div></div>
          <div></div>

      </div>
</template>

<script>

    export default {
        name: "Resume",
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
