<template>
    <Classic>
        <div class="header">
            <Avatar/>
            <div class="login_title">Войти</div>
        </div>
        <form class="form">
            <Input placeholder="Логин" v-model="loginData.username"/>
            <Input placeholder="Пароль" v-model="loginData.password"/>

        </form>
        <Button @click="setData">
            Войти
        </Button>
    </Classic>
</template>

<script>
    import Button from "@/components/UtilsComponents/button/Button";
    import Input from "../../UtilsComponents/input/input";
    import Avatar from "@/components/UtilsComponents/images/Avatar";
    import Classic from "@/components/UtilsComponents/wrappers/Classic";

    export default {
        name: "Login",
        components: {Classic, Avatar, Input, Button},
        data() {
            return {
                loginData: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            setData: function () {
                this.$store.dispatch('SET_LOGIN_USER', this.loginData)
                console.log(this.loginData)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/variables.scss";

    .header {

        .login_title {
            font-size: 1.4em;
            font-weight: 500;
            letter-spacing: 1.5px;

            color: $black;
        }
    }

    .form {
        display: grid;
        grid-row-gap: 15px;
    }


</style>