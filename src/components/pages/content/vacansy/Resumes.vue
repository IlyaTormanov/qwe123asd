<template>
    <div class="vacansies">
        <Resume :resume="resume" v-for="resume in this.resumeList.result"/>
        <Paginate :page-count="this.resumeList.pageresponse.pageSize" v-model="currentPage" :click-handler="setPage"/>
    </div>
</template>

<script>
    import Paginate from 'vuejs-paginate'
    import Resume from "./Resume";
    export default {
        name: "Resumes",
        components:{Resume, Paginate},
        data(){
          return{
              currentPage:1
          }
        },
        methods:{
          setPage:function(pageNum){
              this.currentPage=pageNum
              this.$store.dispatch('SET_RESUME_LIST_REQUEST',{CurrentPage:this.currentPage,PageSize:20})
          }
        },
        watch:{
          currentPage:{
              handler:'setPage',
              immediate: true,
          }
        },

        computed:{
             resumeList:function(){
                return this.$store.getters.GET_RESUME_LIST
             }
        }

    }
</script>

<style scoped lang="scss">
        .vacansies{
            width:100%;
            background:white;
        }
</style>