
<template>
  <form name="joinform" @submit.prevent="update">
    <h1>회원 수정 페이지</h1>
    <hr>
    <b>아이디</b>
    <input type="text" :value="join.id" readonly maxlength="12" placeholder="Enter id">
        
    <b>비밀번호</b>
    <input type="password" v-model.lazy="join.password" required placeholder="Enter password">
        
    <b>이름</b>
    <input type="text" v-model.lazy="join.name" maxlength="15" required placeholder="Enter name">
        
    <b>나이</b>
    <input type="text" maxlength="2" v-model.lazy="join.age" 
                            pattern="[1-9][0-9]" required placeholder="Enter age">
    
    <b>성별</b>
    <div>
        <input type="radio" name="gender" v-model.lazy="join.gender" value="남" checked><span>남자</span>
        <input type="radio" name="gender" v-model.lazy="join.gender" value="여"><span>여자</span>
    </div>
        
    <b>이메일 주소</b>
        <input type="text" v-model="join.email" maxlength="30" required placeholder="Enter email">
        <span :class="email_color">{{email_message}}</span>

    <div class="clearfix">
        <button type="submit" class="submitbtn">수정완료</button>
        <router-link :to="{name:'Board_List'}">
        <button class="cancelbtn">다시작성</button>
        </router-link>
    </div>
  </form>
</template>

<script>
import {ref,watch} from 'vue';
import axios from '../../axios/axiossetting.js';
import { useRouter } from 'vue-router';
export default {
    props:{
        parent_id:{
            type:String,
            required:false
        }
    },
    setup(props, context){
        context.emit("parent_getSession");
        const join= ref({
            id:'',
            password:'',
            name:'',
            age:'',
            gender:'',
            email:''
        });
        const email_message=ref('');
        const email_color=ref('');
        const router = useRouter();
        console.log('watch before='+props.parent_id);
        watch(()=>props.parent_id,()=>{
            console.log('watch='+props.parent_id);
            info();
        })

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

        const info = async () =>{
            try{
                const res = await axios.get(`members/${props.parent_id}`);
                if(res.data != null){
                    join.value=res.data;
                }else{
                    console.log('null입니다.');
                    router.push("{name:'404'}")
                }
            }catch(err){
                console.log(err)
            }
        }

        info();

        const update = async () =>{
            if(email_color.value=="red"){
                alert("email을 확인하세요");
            }else{
                try{
                    const res = await axios.put('members',join.value);
                    if(res.data==1){
                        alert("수정완료되었습니다")
                        router.push({
                            name:'Board_List'
                        })
                    }
                }catch(err){
                    console.log(err);
                }
            }
        }


        return{
                join,email_message,email_color, update
            };
    }
}
</script>

<style scoped>
    .red{color:red}
    .green{color:green}
     input[type=text] + span{   position: relative;
            top: -20px;
     }
    form {font-family: Arial, Helvetica, sans-serif;}
    * {box-sizing: border-box}
    
    
    input{border-radius:3px;border:1px solid lightgray}
    input[type=text], input[type=password] {
        width: 100%;
        padding: 10px;
        margin: 5px 0 22px 0;
        display: inline-block;
       
    }
    
    
    input[type=radio]{
        width: 5%;
        display: inline-block;
        border: none;
    }
    
    
    input[type=text]:focus, input[type=password]:focus {
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        outline: none;
    }
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer; /* 손가락 커서 모양 */
        width: 100%;
        opacity: 0.9;
    }
    
    button:hover {
        opacity:1;
        
    }
    button:focus{
       outline:none;
    }
    
    /* 취소 버튼*/
    .cancelbtn {
        padding: 14px 20px;
        background-color: #f44336;
    }
    
    .cancelbtn, .submitbtn {
      float: left;
      width: 50%;
    }
    form {
        background-color: #fefefe;
        margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
        border: 1px solid lightgray;
        width: 600px; /* Could be more or less, depending on screen size */
        padding: 16px;
    }
    
    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }
     
    b + div{width: 100%;
        padding: 10px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;}
    
    /* Clear floats */
    .clearfix::after {
        content: "";
        clear: both;
        display: table; 
    }
    
    h1{text-align:center}
    
    b {
        width: 100%;
        display: block
    }
    
    span{display:inline-block;margin-top:-20px;font-size:10px}
    
</style>