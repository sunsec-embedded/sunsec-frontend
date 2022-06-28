<template>
    <div id="login-panel">

        <!-- 로그인 창 상단 설명 -->
        <div id="login-title">Farmsert</div>
        <div id="login-subtitle-box">
            <div id="login-subtitle">당신을 위한</div>
            <div id="login-subtitle">농업 컨설팅 시스템</div>
        </div>
        <div id="login-descripition">Farmsert에 오신걸 환영합니다!</div>

        <!-- 로그인 입력창 -->
        <div id="login-input-panel">
            <div class="login-input-box">
                <div class="login-input-label">이메일 주소</div>
                <input class="login-input" type="text" placeholder="이메일 주소를 입력해주세요">
            </div>
            <div class="login-input-box">
                <div class="login-input-label">비밀번호 입력</div>
                <input class="login-input" type="password" placeholder="비밀번호를 입력해주세요">
            </div>
        </div>

        <div id="password-check">
            <input id="password-checkbox" type="checkbox">
            <label for="password-checkbox"></label>
            <div id="password-msg">
                <div id="password-remember">비밀번호 기억하기</div>
                <div id="password-find">비밀번호 찾기</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#login-title{
    font-family: Kollektif;
    color: #21AB50;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 10px;
}


#login-subtitle-box{
    display: flex;
    flex-direction: column;
}
#login-subtitle{
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
}


#login-descripition{
    font-weight: 600;
    font-size: 20px;
    color: #979797;
    line-height: 40px;
    font-style: normal;
}


#login-input-panel{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.login-input-label{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
}
.login-input{
    width: 120%;
    height: 40px;
    background-color: #F6F6F6;
    padding: 5px 15px 5px 15px;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    border-radius: 15px;

    font-size: 16px;
    font-style: normal;
    line-height: 40px;
    font-weight: 500;
    font-family: 'SUIT', sans-serif;
}

#password-check{
    width: 120%;
    margin-top: 27px;
    display: flex;
}
#password-msg{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
}
#password-remember{
    margin-left: 12px;
    color: #9a9a9a;
    flex: 1 1 auto;
}
input[id="password-checkbox"] + label {
	display: inline-block;
	width: 30px;
	height: 30px;
	border: 1px solid #D1D1D1;
    border-radius: 5px;
	cursor: pointer;
    transition: 0.1s;
}
input[id="password-checkbox"]:checked + label {
	background-color: #21AB50;
}
input[id="password-checkbox"]{
    display: none;
}
</style>