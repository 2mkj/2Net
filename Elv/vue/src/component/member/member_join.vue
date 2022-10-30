<template>
    <form class='mainform'>
    <div class="login-container">
	<form action="" class="form-login" @submit.prevent="joinProcess">
		<ul class="login-nav">
			<li class="login-nav__item" @click="login">
				<a href="#">로그인</a>
			</li>
			<li class="login-nav__item active">
				<a href="#" @click="join">회원가입</a>
			</li>
		</ul>
		<label for="login-input-user" class="login__label">
			아이디 <span :class="id_color">{{id_message}}</span>
		</label>
         <!-- watch로 데이터 변화 확인합니다. lazy 붙지 않습니다.-->
		<input id="login-input-user" class="login__input" type="text" v-model="join.id" required maxlength="12" placeholder="Enter id" />
        
        <label for="login-input-password" class="login__label">
			비밀번호
		</label>
		<input id="login-input-password" class="login__input" type="password"  v-model="join.password" name="password" placeholder="Enter password" required/>
		
        <label for="login-input-name" class="login__label">
            이름
        </label>
        <input id="login-input-user" class="login__input login__input1" type="text" v-model.lazy="join.name" maxlength="15" required placeholder="Enter name" />

        <label for="login-input-age" class="login__label">
            나이
        </label>
        <input id="login-input-user" class="login__input" type="text"  maxlength="2" v-model.lazy="join.age" 
                            pattern="[1-9][0-9]" required placeholder="Enter age" />
        
        <label for="login-input-gender" class="login__label" style="margin-top:30px;margin-bottom:30px;">
            성별 &emsp;&emsp;
            <input type="radio" name="gender" v-model.lazy="join.gender" value="남" checked><span>&ensp;남자</span>&emsp;
            <input type="radio" name="gender" v-model.lazy="join.gender" value="여"><span>&ensp;여자</span>
        </label>

        <label for="login-input-email" class="login__label">
            이메일 <span :class="email_color">{{email_message}}</span>
        </label>
        <input id="login-input-user" class="login__input" type="text" v-model="join.email" maxlength="30" required placeholder="Enter email" />

        <label for="login-input-code" class="login__label">
            회사코드
        </label>
        <input id="login-input-user" class="login__input" type="text" v-model="code" maxlength="5" required placeholder="Enter code" />

        <button type="submit" class="login__submit">회원가입</button>
	</form>
</div>
  </form>
    </template>
    
    <script>
    import {ref,watch} from 'vue';
    import axios from '../../axios/axiossetting.js';
    import { useRouter } from 'vue-router';
    export default {
        setup(){
            const join = ref({
             id:'', 
             password:'',
            name: '',
             age:'',
            gender:'남',
            email:''
       });
       const id_message = ref("");
       const email_message = ref("");
       const id_color = ref("");
       const email_color = ref("");
       const code=ref("");

       const router = useRouter();

       const login = () => {
            router.push({
                name:'Login'
            });
            }
       const idcheck = async ()=>{
        try{
                console.log("idcheck="+join.value.id);
                //const res = await axios.get(`members/idcheck?id=${join.value.id}`);  <- GET 방식
                const res = await axios.get("/members/idcheck", {params : { id : join.value.id } } );
                console.log("res.data="+res.data);
                if(res.data==1){
                    id_message.value="이미 사용중인 아이디 입니다.";
                    id_color.value='red';
                }else{
                    id_message.value="사용 가능한 아이디 입니다.";
                    id_color.value='green';
                }
        }catch(err){
            console.log("err"+err)
        }
       }//idcheck end

       /* 
                1. 객체를 watch 하는 경우
                watch(join.value, (next, prev)=>{

                })
                2. 객체의 속성 일부분을 watch하는 경우 첫번째 매개변수를 애로우 함수로 작성합니다
                    watch(
                        ()=> join.value.id,
                        (next, prev)=>{
                     })
       */
    
        watch(
            ()=> join.value.id,
            (next, prev)=>{
                        console.log('watch(id) : ' + prev + " => " + next)
           var pattern = /^\w{5,12}$/;
                    if(!pattern.test(join.value.id )){
                                id_message.value="영문자 숫자 _로 5~12자 가능합니다.";
                                id_color.value='red';
                    }else{
                                idcheck();
                    }//else end
        })//watch end

        watch(()=> join.value.email,
            (next, prev)=>{
                  console.log('watch(email) : ' + prev + " => " + next)
                  var pattern = /^\w+@\w+[.]\w{3}$/;
                    if(!pattern.test(join.value.email )){
                        email_message.value="이메일 형식이 맞지않습니다.";
                        email_color.value='red';
                    }else{
                        email_message.value="이메일 형식이 일치합니다.";
                        email_color.value='green';
                    }//else end
        })//watch end
        
        const joinProcess = async () =>{
            if(id_color.value=='red'){
                alert("아이디를 확인하세요");
            }else if(email_color.value=="red"){
                alert("email을 확인하세요");
            }else if(code.value!="tiger"){
                alert("회사 코드를 확인하세요");
            }else{
                try{
                        const res = await axios.post('members/new',join.value);
                        if(res.data==1){
                            alert("회원 가입을 축하합니다.")
                            router.push({
                                        name:'Main'
                            });
                        }
                }catch(error){
                    console.log(error)
                }
            }
        }

            return{
                code,login,join,id_message,email_message,id_color,email_color, joinProcess, idcheck
            };
        }
    };
    
    </script>
    
    <style scoped>
    .green{
        display: inline-block;
        padding-left: 1rem;
        text-transform: uppercase;
        font-size: .75rem;
        color:mediumseagreen
    }
    .red{
        display: inline-block;
        padding-left: 1rem;
        text-transform: uppercase;
        font-size: .75rem;
        color:tomato
    }
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
	margin: 0 0 2.3em 1rem;
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
	margin-top: 1rem;
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
	margin-top: 3rem;
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