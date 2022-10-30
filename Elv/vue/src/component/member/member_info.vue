
<template>
    <div class="container">
        <table class="table table-bordered">
            <tr>
                <td>아이디</td>
                <td>{{m.id}}</td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td>{{m.password}}</td>
            </tr>
            <tr>
                <td>이름</td>
                <td>{{m.name}}</td>
            </tr>
            <tr>
                <td>나이</td>
                <td>{{m.age}}</td>
            </tr>
            <tr>
                <td>성별</td>
                <td>{{m.gender}}</td>
            </tr>
            <tr>
                <td>이메일 주소</td>
                <td>{{m.email}}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <router-link :to="{name:'Member_List'}">리스트로 돌아가기</router-link>
                </td>
            </tr>
        </table>
        </div>
  </template>
  
  <script>
  import {ref} from 'vue';
  import axios from '../../axios/axiossetting.js';
  import { useRoute } from 'vue-router';
  export default {
      props:{
          parent_id:{
              type:String,
              required:false
          }
      },
      emits:["parent_getSession"],
      setup(props, context){
          context.emit("parent_getSession");
          const m = ref([]);
          const route = useRoute();
          const info = async()=>{
            try{
                console.log("파라미터로 넘어온 값 =" + route.params.id)
                const res = await axios.get(`members/${route.params.id}`);
                console.log(res.data)
                if(res.data!=null){
                    m.value=res.data;
                }
            }catch(err){
                console.log(err)
            }

          }

          info();

          return{m};
      
        }

}
</script>

<style>

</style>
