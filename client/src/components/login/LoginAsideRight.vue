<template>
    <div class= "rectangle2">
        <LoginOptions @loginFormChange="onClickChild" />
        <UserLogin v-if="loginFormType == 'USER'"/>
        <GuestLogin v-if="loginFormType == 'GUEST'" />
    </div>
</template>

<script>

import LoginOptions from './LoginOptions.vue'
import UserLogin from './UserLogin.vue'
import GuestLogin from './GuestLogin.vue'

export default {
    name: "LoginAsideRight",
    components: {
        LoginOptions,
        UserLogin,
        GuestLogin  
    },
    data(){
        return {
            loginFormType: null
        }
    },
    methods: {
        onClickChild (loginFormType) {
            this.loginFormType = loginFormType;
        }
    }

}
</script>

<style scoped>
    .rectangle2 {
      width: 140%;
      background-color: #2DD298;
      border-left: 3px solid white;
      border-top: 0;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }
</style>