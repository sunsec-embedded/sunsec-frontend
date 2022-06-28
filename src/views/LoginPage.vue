<template>
    <!-- 백그라운드 이미지 -->
    <img src="../assets/Background.svg" alt="BackgroundImg">

    <!-- 로그인 컨포넌트 -->
    <div id="login-box">
        <LoginBox></LoginBox>
    </div>
</template>

<script>
import LoginBox from '@/components/LoginPage/LoginBox.vue'

export default {
    components: {
        LoginBox
    }
}
</script>

<style>
img{
    margin-left: auto;
    display: flex;
    height: 100vh;
}

#login-box{
    position: absolute;
    top: 22%;
    left: 15%;
}
</style>