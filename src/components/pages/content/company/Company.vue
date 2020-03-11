<template>

    <div class="company">
        <div class="content">
            <div class="description_panel">
                <div class="description_panel_block">
                    <div class="wrap_descr">
                        <span class="company_name">{{company.name}}</span>
                        <div class="favourites">
                                <div>Добавить в избранное</div>
                                <Plus :size="16"/>
                        </div>
                    </div>
                </div>
                <div class="company_description">{{company.description}}</div>
            </div>
            <Avatar :mini="false"/>
        </div>
        <div class="feedback">
            <Button class-name="border_thin" >
                <div>Написать {{company.name}}</div>
            </Button>

        </div>
        <div class="contacts_block">
            <div class="item" v-if="company.webSite">
                <div class="item_key">
                    <span class="item_key_text">Веб-сайт</span>
                    <Web/>
                </div>
                <span class="item_value">{{company.webSite}}</span>
            </div>
            <div class="item" v-if="company.email">
                <div class="item_key">
                    <span class="item_key_text">Электронная почта</span>
                    <At/>
                </div>
                <span class="item_value">{{company.email}}</span>
            </div>
            <div class="item" v-if="company.city">
                <div class="item_key">
                    <span class="item_key_text">Город</span>
                    <CityVariantOutline/>
                </div>
                <span class="item_value">{{company.city}}</span>
            </div>
            <div class="item" v-if="company.phone">
                <div class="item_key">
                    <span class="item_key_text">Телефонный номер</span>
                    <CellphoneAndroid/>
                </div>
                <span class="item_value">{{company.phone}}</span>
            </div>
        </div>
        <Button al-self="start" margin="40px 0" class-name="button_full">
            <div>Вакансии {{company.name}}</div>
            <Firework :size="20"/>
        </Button>
    </div>
</template>
<script>


    import Avatar from "../../../UtilsComponents/images/Avatar";
    import Web from 'vue-material-design-icons/Web.vue';
    import CityVariantOutline from 'vue-material-design-icons/CityVariantOutline.vue';
    import CellphoneAndroid from 'vue-material-design-icons/CellphoneAndroid.vue';
    import At from 'vue-material-design-icons/At.vue';
    import Firework from 'vue-material-design-icons/Firework.vue';
    import GreasePencil from 'vue-material-design-icons/GreasePencil.vue';
    import Plus from 'vue-material-design-icons/Plus.vue';
    import Button from "../../../UtilsComponents/button/Button";

    export default {
        name: "Company",
        components: {Button, Avatar, Web, At, CityVariantOutline, CellphoneAndroid, Firework, GreasePencil, Plus},
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
        padding: 50px 500px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: white;
        width: 100%;
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

                .description_panel_block {
                    display: flex;
                    justify-content: flex-end;

                    .wrap_descr {
                        width: 100%;
                        display: flex;
                        cursor: pointer;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        .company_name {
                            font-size: 2em;
                        }
                        .favourites{
                            background: $bostil;
                            color:white;
                            border-radius: 4px;
                            padding:7px;
                            display:flex;
                            font-size: 0.9em;
                            flex-direction: row;
                            justify-content: space-between;
                        }
                    }


                }


                .company_description {
                    text-align: start;
                    word-break: break-all;
                    padding-top: 20px;
                    font-size: 1.1em;
                    overflow-wrap: break-word;

                }
            }


        }

        .feedback {

            align-content: center;
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }

        .contacts_block {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;

            .item {
                margin-top: 30px;
                width: 100%;
                display: flex;
                flex-direction: column;

                box-sizing: border-box;

                .item_key {
                    text-align: start;
                    font-size: 1.3em;
                    padding-bottom: 5px;
                    border-bottom: 1px solid $border;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                }

                .item_value {
                    margin-top: 10px;
                    width: max-content;
                    font-size: 1.1em;
                    padding: 5px 10px;
                    cursor: pointer;
                    border: 1px solid $border;
                    border-radius: 6px;

                }
            }
        }

    }
</style>