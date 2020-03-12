<template>
    <div class="resumes">
        <div class="resumes_content">
            <FilterDropdown/>
            <div class="resumes_list">
                            <Resume :resume="resume" v-for="resume in this.resumeList.result"/>
            </div>

        </div>
        <Paginate :page-count="this.resumeList.pageresponse.pageSize" v-model="currentPage" :click-handler="setPage"  container-class="pagination"
                  page-class="page-item"/>
    </div>
</template>

<script>
    import Paginate from 'vuejs-paginate'
    import Resume from "./Resume";
    import FilterDropdown from "../filterDropdown/filterDropdown";
    import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
    import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
    export default {
        name: "Resumes",
        components:{FilterDropdown, Resume, Paginate,ChevronLeft,ChevronRight},
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

<style lang="scss">
    @import "src/variables";
        .resumes{
            width:100%;
            background:white;
                .resumes_content{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                        .resumes_list{
                            margin-left:15px;
                            width:100%;
                        }
                }
            .pagination {
                display: flex;
                flex-direction: row;
                height: 120px;
                justify-content: center;
                align-items: center;
                :nth-child(1n+2){
                    margin-left: 5px;
                }
            }
            li{
                list-style-type: none;
                cursor: pointer;
                width:30px;
                border-radius: 4px;
                color:white;
               background: $blue;
                padding: 15px;
            }


            }


</style>