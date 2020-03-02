<template>
    <div class="input_container" >
     <span class="placeholderTop" >{{placeholderTop}}</span>
        <div   class="input_wrapper">
            <div class="icon" v-if="order"  :style="{order:order}">
                <MenuIcon fillColor="white" />
            </div>
            <input class="input" @input="onChange"
                   :placeholder="placeholder"
                   :style="{borderRadius:isRadius}"
                   :name="name"
            />
        </div>

    </div>

</template>

<script>
    import MenuIcon from 'vue-material-design-icons/Menu.vue';
    export default {
        name: "input",
        components:{
            MenuIcon
        },
        props:{
            name:String,
            order:1||2||undefined,
            placeholder:String||undefined,
            placeholderTop:String||undefined,

        },
        data(){
           return{
              isRadius:''
           }
        },
        methods:{
            onChange:function(e){
                    this.$emit('input',e.target.value)
            }
        },
        watch:{
           isRadius:function(val){
               if(this.order===1){
                   val='0 5px 5px 0'
               }
               if(this.order===2){
                   val='5px 0 0 5px'
               }

               else{
                   val='5px'
               }

            },

        }

    }
</script>

<style scoped lang="scss">
    @import "src/variables.scss";
    .input_container{
        width: fit-content;
        position:relative;
        .placeholderTop{
            top:-6px;
            left:25%;
            font-size:0.9em;
            font-weight: bolder;
            background: white;
            padding:0 3px;
            box-sizing: border-box;
            position:absolute;
        }
        .input_wrapper{
            display:flex;
            flex-direction: row;
            .icon{
                padding:5px;
                box-sizing: border-box;
                height:100% !important;
                width:30px;
                background: $orange;
            }
            .input{
                padding:5px;
                border: 2px solid $orange;
            }

        }
    }
</style>