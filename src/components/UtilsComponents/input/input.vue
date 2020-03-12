<template>
    <div class="wrapper">
        <input :class="large?'large':'input'" @input="onChange"
               @focus="onFocus"
               :placeholder="placeholder"
               :name="name"
               v-model="model"
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
            name: String,
            rightItem: Boolean,
            placeholder: String,
            model:String,
            large: Boolean,
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

    .wrapper {
        min-width: 40%;
        display: flex;
        flex-direction: row;
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
