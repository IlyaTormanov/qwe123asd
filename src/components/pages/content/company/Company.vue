<template>

    <div class="company">
        <div class="content">
            <div class="description_panel">
                <div class="company_name">{{company.name}}</div>
                <div class="company_description">{{company.description}}</div>
            </div>
            <Avatar :mini="false"/>
        </div>
        <div class="contacts_block">
            <div class="item">
                <span class="item_key">Веб-сайт</span>
                <span class="item_value">{{company.webSite}}</span>
            </div>
            <div class="item">
                <span class="item_key">Электронная почта</span>
                <span class="item_value">{{company.email}}</span>
            </div>
            <div class="item">
                <span class="item_key">Город</span>
                <span class="item_value">{{company.city}}</span>
            </div>
            <div class="item">
                <span class="item_key">Телефонный номер</span>
                <span class="item_value">{{company.phone}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Web from 'vue-material-design-icons/Web.vue';
    import Avatar from "../../../UtilsComponents/images/Avatar";

    export default {
        name: "Company",
        components: {Avatar,Web},
        created() {
            this.$store.dispatch('SET_COMPANY_REQUEST', this.$route.params.id)
        },
        computed: {
            company: function () {
                return this.$store.getters.GET_COMPANY
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables";

    .company {
        padding: 50px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: white;
        width: 70%;
        height: 100%;

        .content {
            display: flex;
            padding: 15px;
            box-sizing: border-box;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;

            .description_panel {
                padding-left: 50px;

                box-sizing: border-box;
                order: 2;

                .company_name {
                    font-size: 2em;
                }

                .company_description {
                    text-align: start;
                    word-break: break-all;
                    padding-top: 20px;
                    font-size: 1.3em;
                    overflow-wrap: break-word;
                    letter-spacing: 1.2px;
                }
            }


        }
        .contacts_block {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            .item{
                margin-top: 30px;
                width:600px;
                display: flex;
                flex-direction: column;

                box-sizing: border-box;
                .item_key{
                    text-align: start;
                    font-size: 1.3em;
                    padding-bottom: 5px;
                    border-bottom: 1px solid $border;


                }
                .item_value{
                    margin-top: 10px;
                    width: max-content;
                    font-size: 1.1em;
                    padding:5px 10px;
                    cursor: pointer;
                    border: 1px solid $border;
                    border-radius: 6px;

                }
            }
        }

    }
</style>