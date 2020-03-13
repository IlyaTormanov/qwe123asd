<template>
    <div class="company_wrapper">
        <div class="company" :key="company.id">
            <div class="content">
                <div class="description_panel">
                    <div class="description_panel_block">
                        <div class="wrap_descr">
                            <span class="company_name">{{company.name}}</span>
                            <div class="favourites" @click="setFavourites" v-if="!favourites">
                                <div>Добавить в избранное</div>
                                <Plus :size="16"/>

                            </div>
                            <div class="favourites add" @click="setFavourites" v-else>
                                <div>Добавлено</div>

                                <Check :size="16"/>
                            </div>
                        </div>
                    </div>
                    <div class="company_description">{{company.description}}</div>
                    <div class="entity_tags">
                        <Tag :tag="item.name" v-for="item in tagList"/>
                    </div>
                </div>
                <Avatar :mini="false"/>
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
            <div class="feedback">
                <Button class-name="border_thin" @click="showFeedbackPanel">
                    <div>Написать {{company.name}}</div>
                </Button>
                <Button al-self="start" margin="40px 0" class-name="button_full">
                    <div>Вакансии {{company.name}}</div>
                    <Firework :size="20"/>
                </Button>

            </div>
        </div>
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
    import Check from 'vue-material-design-icons/Check.vue';
    import Button from "../../../UtilsComponents/button/Button";
    import Tag from "../../../UtilsComponents/Tag";
    import FeedbackForm from "../../../UtilsComponents/feedbackForm/FeedbackForm";

    export default {
        name: "Company",
        components: {
            FeedbackForm,
            Tag, Button, Avatar, Web, At, CityVariantOutline, CellphoneAndroid, Firework, GreasePencil, Plus, Check
        },
        created() {
            this.$store.dispatch('SET_COMPANY_REQUEST', this.$route.params.id)
        },

        data() {
            return {
                tagList: [
                    {
                        name: 'IT'
                    },
                    {
                        name: 'Менеджмент'
                    },
                    {
                        name: 'Грузоперевозки'
                    },
                ],
                feedBackPanel: false,
                favourites: false
            }
        },

        methods: {
            setFavourites: function () {
                this.favourites = !this.favourites
            },
            showFeedbackPanel: function () {
                this.feedBackPanel = true
                this.$store.commit('SET_FEEDBACK_PANEL', this.feedBackPanel)
            },
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

    .company_wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: white;
        width: 100%;
        height: 100%;

        .company {
            position: relative;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            background: white;
            width: 1000px;

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

                    .entity_tags {
                        padding-top: 10px;
                        display: flex;
                        flex-direction: row;

                        :nth-child(1n+2) {
                            margin-left: 5px;
                        }
                    }

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
                                font-size: 1.5em;
                            }

                            .favourites {
                                width:160px;
                                background: $blue;
                                color: white;
                                border-radius: 4px;
                                padding: 7px;
                                display: flex;
                                font-size: 0.9em;
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                            }

                            .add {
                                background: $bostil !important;
                            }
                        }


                    }


                    .company_description {
                        text-align: start;
                        word-break: break-all;
                        padding-top: 20px;
                        font-size: 1em;
                        overflow-wrap: break-word;

                    }
                }


            }

            .feedback {

                align-content: center;
                margin-top: 30px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

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
                        cursor: pointer;
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
    }
</style>