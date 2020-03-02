<template>
        <Classic>
            <Avatar/>
            <div class="title">Войти</div>
            <form class="form">
                <Input v-model="registration.username"/>
                <Input v-model="registration.email"/>
                <Input v-model="registration.password"/>
                <Checkboxes  v-model="registration.seeker"/>
                <Checkboxes  v-model="registration.company"/>

            </form>
            <Button @click="onSubmit">Зарегистрироваться</Button>
        </Classic>
</template>

<script>
    import Classic from "@/components/UtilsComponents/wrappers/Classic";
    import Avatar from "@/components/UtilsComponents/images/Avatar";
    import Button from "@/components/UtilsComponents/button/Button";
    import Input from "@/components/UtilsComponents/input/input";
    import Checkboxes from "../../UtilsComponents/Checkboxes";
    export default {
        name: "Registration",
        components: {Checkboxes, Input, Button, Avatar, Classic},
        data(){
            return{

                registration:{
                    username:"",
                    email:"",
                    password:"",
                    company:0,
                    seeker:1
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
