<template>
    <div class="wrapper_input">
        <input :class="className" @input="onChange"
               @focus="onFocus"
               :placeholder="placeholder"
               :name="name"

        />
        <div class="side_item" v-if="rightItem">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import MenuIcon from 'vue-material-design-icons/Menu.vue';

    export default {
        name: "input",
        components: {
            MenuIcon
        },
        props: {
            className:String,
            name: String,
            rightItem: Boolean,
            placeholder: String,

            isSelect: Boolean,


        },

        methods: {
            onChange: function (e) {
                this.$emit('input', e.target.value)
            },
            onFocus: function (e) {
                this.$emit('focus')
            }
        },


    }
</script>

<style scoped lang="scss">
    @import "src/variables.scss";
    .wrapper_large{
        width:40%;
    }
    .wrapper_input {
       width:inherit;
        display: flex;
        flex-direction: row;

        .classic{
            box-sizing: border-box;
            display: inline-flex;
            align-items: stretch;
            line-height: 1.42857143;
            height: 30px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.12);
            background: var(--background, white);
            color: var(--color, black);
            width:100%;
        }
        .input {
            border: none !important;
            padding: 10px;
            box-sizing: border-box;
        }

        .large {
            border: none !important;
            padding: 8px 20px;
            border-radius: 4px;
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            color: $gray;
            background: #e7e8ec;

            &::placeholder {
                font-size: 1.1em;
                letter-spacing: 1.6px;
                font-weight: normal;
            }
        }

        .side_item {
            width:120px;
            color:white;
            display:flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            justify-content: center;
            font-weight: normal;
            letter-spacing: 1.3px;
            box-sizing: border-box;
            border-radius: 0 4px 4px 0;
            background: $blue;
        }
    }


</style>
