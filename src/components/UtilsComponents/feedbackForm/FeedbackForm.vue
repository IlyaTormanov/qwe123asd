<template>
    <div class="feedback_from_wrapper">
        <div class="feedback_content">
            <div class="feedback_content_wrapper">
                <label>Ваше имя</label>
                <Input class-name="classic"/>
            </div>
            <div class="feedback_content_wrapper">
                <label>Номер телефона</label>
                <Input class-name="classic"/>
            </div>
            <div class="feedback_content_wrapper">
                <label>Электронная почта</label>
                <Input class-name="classic"/>
            </div>
            <div class="feedback_content_wrapper">
                <label>Telegram,Viber,WhatsApp</label>
                <Input class-name="classic"/>
            </div>
            <div class="feedback_content_wrapper">
                <label>Описание заявки</label>
                <Input class-name="classic"/>
            </div>

            <div class="buttonWrapper">
                <Button @click="removeFeedbackPanel" al-self="start" class-name="button_full">Отправить</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from "../input/input";
    import Button from "../button/Button";
    export default {
        name: "FeedbackForm",
        components: {Button, Input},
        methods:{
            removeFeedbackPanel:function(){
                this.$store.commit('SET_FEEDBACK_PANEL',false)
            }
        }
    }
</script>

<style scoped lang="scss">
        .feedback_from_wrapper{
            width:100vw;
            top:0;
            height:100%;
            z-index: 10000;
            position:absolute;
            display:flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            .feedback_content{
                padding: 20px 30px;
                border-radius: 6px;
                background: white;
                width:30%;
                    display:flex;
                align-items: center;
                justify-content: center;
                        flex-direction: column;
                .buttonWrapper{
                    width:100%;
                        margin-top:30px;
                }
                .feedback_content_wrapper{
                    width:100%;
                    display:flex;
                    flex-direction: column;
                    align-items: start;
                    margin-top: 15px;
                    label{
                        padding-bottom: 5px;
                    }
                }
            }
        }
</style>