<template>
  <form class='mainform'>
    <div class="login-container">
	<form action="" class="form-login" @submit.prevent="loginProcess">
		<ul class="login-nav">
			<li class="login-nav__item active">
				<a href="#">로그인</a>
			</li>
			<li class="login-nav__item">
				<a href="#" @click="join">회원가입</a>
			</li>
		</ul>
		<label for="login-input-user" class="login__label">
			아이디
		</label>
		<input id="login-input-user" class="login__input" type="text"  v-model="id" name="id" placeholder="Enter id" required />
		<label for="login-input-password" class="login__label">
			비밀번호
		</label>
		<input id="login-input-password" class="login__input" type="password"  v-model="password" name="password" placeholder="Enter password" required/>
		<label for="login-sign-up" class="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" class="login__input--checkbox" v-model="remember" name="remember" />
			Remember me
		</label>
		<button type="submit" class="login__submit">로그인</button>
	</form>
	<a href="#" class="login__forgot" @click="Forgot">비밀번호를 잊으셨나요?</a>
</div>
  </form>
</template>

<script>
import {useRouter} from 'vue-router'
import {ref} from 'vue';
//npm install vue-cookies
import cookies from 'vue-cookies'; //vue에서 쿠키를 사용하기 위한 cookies를 import합니다.
import axios from '../../axios/axiossetting.js';
import { off } from 'process';
export default {
  emits:["parent_getSession"],
  setup(props, context){
    //부모 컴포넌트 App_1.vue에 있는 getSession을 호출합니다.
    //<router-view @parent_getSession="getSession" :parent_id="id" />
    console.log('member_login : setup')
    context.emit("parent_getSession", "");

    const router = useRouter(); //useRouter()는 라우터 인스턴스를 반환합니다.
    const join = () => {
      router.push({
        name:'Join'
      });
    }
	const Forgot = () => {
      router.push({
        name:'Forgot'
      });
    }

    const remember = ref(false);
    const id =ref("");
    const password = ref("");

    const getCookie = () => {
      //이름이 saveid인 쿠키를 가져옵니다.
      const cookie_value = cookies.get("saveid");
      console.log("가져온 쿠키값="+cookie_value);
      if(cookie_value!=null){
        remember.value=true; //체크박스 체크합니다.
        id.value = cookie_value; //쿠키에 저장된 아이디값 input에 나타납니다.
      } else {
        remember.value=false; //체크박스 해제합니다.
      }
    }
    getCookie();

    const loginProcess = async () => {
      try{
              const res = await axios.post("members",{
                id : id.value,
                password: password.value
              });
                  console.log("login.vue:res.data="+res.data);
                  const result = res.data;
                  if(result == -1){
                    alert("아이디가 존재하지 않습니다.");
                  }else if(result == 0){
                    alert("비밀번호가 일치하지 않습니다.");
                  }else if(result == 1){
                    
                    console.log("remember" + remember.value);
                  
                    if(remember.value){ //체크박스 선택한 경우
                      /* 
                          set(name, value, expire) : expire(만료일)을 갖는 name과 value를 가진 쿠키를 설정합니다.
                            1s : 1초
                            1h : 1시간 (60*60)
                            1d : 1일 (24*60*60)
                            1m : 1달
                            new Date(2021,08,30).toUTCString() : 특정 시간
                                      (toUTCString() - 날짜를 UTC(협정 세계시) 형식으로 표현합니다.)
                      */
                    cookies.set("saveid", id.value, "1d"); //1일 동안 유효한 쿠키를 설정합니다.
                    //cookies.set("saveid", id.value, 24*60*60)
                    }else { //체크박스 해제한 경우
                      cookies.remove("saveid"); //쿠키 제거
                    }

                      router.push({
                        name : "Board_List"
                      });
                  }
        }catch(err){
          console.log(err);
        }
      }; // loginProcess end

    return {
		Forgot, join, id, password, loginProcess, remember
    };
},//setup
};
</script>
<style scoped>
.mainform{
  margin-bottom:150px;
}
.login-container {
	display: block;
	position: relative;
	z-index: 0;
	margin: 4rem auto 0;
  padding: 5rem 4rem 0 4rem;
	width: 100%;
	max-width: 525px;
	min-height: 680px;
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/283591/login-background.jpg);
	box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.85);
}

.login-container:after {
	content: '';
	display: inline-block;
	position: absolute;
	z-index: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: radial-gradient(ellipse at left bottom, rgba(22, 24, 47, 1) 0%,rgba(38, 20, 72, .9) 59%, rgba(17, 27, 75, .9) 100%);
	box-shadow: 0 -20px 150px -20px rgba(0, 0, 0, 0.5);
}

.form-login {
	position: relative;
	z-index: 1;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.login-nav {
	position: relative;
	padding: 0;
	margin: 0 0 6em 1rem;
}

.login-nav__item {
	list-style: none;
	display: inline-block;
}

.login-nav__item + .login-nav__item {
	margin-left: 2.25rem;
}

.login-nav__item a {
	position: relative;
	color: rgba(255, 255, 255, 0.5);
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 1.25rem;
	padding-bottom: .5rem;
	transition: .20s all ease;
}

.login-nav__item.active a,
.login-nav__item a:hover{
	color: #ffffff;
	transition: .15s all ease;
}

.login-nav__item a:after {
	content: '';
  display: inline-block;
  height: 10px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 100%;
  bottom: -1px;
  left: 0;
  border-radius: 50%;
  transition: .15s all ease;
}

.login-nav__item a:hover:after,
.login-nav__item.active a:after{
	background-color: rgb(17, 97, 237);
	height: 2px;
	right: 0;
	bottom: 2px;
	border-radius: 0;
	transition: .20s all ease;
}
.login__label {
	display: block;
	padding-left: 1rem;
}

.login__label,
.login__label--checkbox {
	color: rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	font-size: .75rem;
	margin-bottom: 1rem;
}

.login__label--checkbox {
	display: inline-block;
	position: relative;
	padding-left: 1.5rem;
	margin-top: 2rem;
	margin-left: 1rem;
	color: #ffffff;
	font-size: .75rem;
	text-transform: inherit;
}

.login__input {
	color: white;
	font-size: 1.15rem;
	width: 100%;
	padding: .5rem 1rem;
	border: 2px solid transparent;
	outline: none;
	border-radius: 1.5rem;
	background-color: rgba(255, 255, 255, 0.25);
	letter-spacing: 1px;
}

.login__input:hover,
.login__input:focus{
	color: white;
	border: 2px solid rgba(255, 255, 255, 0.5);
	background-color: transparent;
}

.login__input + .login__label {
	margin-top: 1.5rem;
}

.login__input--checkbox {
	position: absolute;
	top: .1rem;
	left: 0;
	margin: 0;
}

.login__submit {
	color: #ffffff;
	font-size: 1rem;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-top: 1rem;
	padding: .75rem;
	border-radius: 2rem;
	display: block;
	width: 100%;
	background-color: rgba(17, 97, 237, .75);
	border: none;
	cursor: pointer;
}

.login__submit:hover {
	background-color: rgba(17, 97, 237, 1);
}

.login__forgot {
	display: block;
	margin-top: 3rem;
	text-align: center;
	color: rgba(255, 255, 255, 0.75);
	font-size: .75rem;
	text-decoration: none;
	position: relative;
	z-index: 1;
}

.login__forgot:hover {
	color: rgb(17, 97, 237);
}
</style>