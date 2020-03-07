<template>
            <input :class="large?'large':'input'" @input="onChange"
                   @focus="onFocus"
                   :placeholder="placeholder"
                   :name="name"
            />

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
            placeholder:String,
            large:Boolean,
            isSelect:Boolean,


        },

        methods:{
            onChange:function(e){
                    this.$emit('input',e.target.value)
            },
            onFocus:function(e){
                this.$emit('focus')
            }
        },


    }
</script>

<style scoped lang="scss">
    @import "src/variables.scss";
    .input{
        border:none !important;
        padding:10px ;

        box-sizing: border-box;
    }
    .large{
        border:none !important;
        padding:8px 20px;
        border-radius:4px;
        box-sizing: border-box;
        width:300px;
        height:45px;
        color:$gray;

        &::placeholder{
            font-size:1.1em;
            letter-spacing:1.6px;
            font-weight: normal;
        }
    }
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




        }
    }
</style>
