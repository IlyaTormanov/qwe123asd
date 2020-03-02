<template>
        <Classic>
            <Avatar/>
            <div class="title">Войти</div>
            <form class="form">
                <Input v-model="registration.username"/>
                <Input v-model="registration.email"/>
                <Input v-model="registration.password"/>
            </form>
            <Button @click="onSubmit">Зарегистрироваться</Button>
        </Classic>
</template>

<script>
    import Classic from "@/components/UtilsComponents/wrappers/Classic";
    import Avatar from "@/components/UtilsComponents/images/Avatar";
    import Button from "@/components/UtilsComponents/button/Button";
    import Input from "@/components/UtilsComponents/input/input";
    export default {
        name: "Registration",
        components: {Input, Button, Avatar, Classic},
        data(){
            return{

                registration:{
                    username:"",
                    email:"",
                    password:""
                }
            }
        },
        methods:{
            onSubmit:function(){
                this.$store.dispatch('SET_SIGN_UP',this.registration)

                console.log(this.registration)
            }
        }

    }
</script>

<style scoped lang="scss">
    .form {
        display: grid;
        grid-row-gap: 15px;
    }
</style>