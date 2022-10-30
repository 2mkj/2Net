<template>

<!-- 
        1. 컴포넌트란
            조합하여 화면을 구성할 수 있는 블록을 의미합니다.
            컴포넌트를 활용하면 화면을 빠르게 구조화하여 일괄적인 패턴으로 개발 할 수 있으며,
            코드를 쉽게 이해하고 재사용할 수 있습니다.

        2. 컴포넌트 사용법
            (1) <script>에서 컴포넌트의 위치와 이름을 import문으로 작성합니다.
            (2) export default { 의 components 속성에 사용할 컴포넌트 이름을 작성합니다.
            (3) <template>에서 컴포넌트를 배치합니다.
        
              3. :parent_id="id"
            자바스크립트에서 구한 id의 값을 parent_id를 통해 자식 컴포넌트에 전달할 수 있습니다.
            즉, './component/navDo.vue'안에서 App_1.vue에서 구한 id값을 사용할 수 있도록 합니다.
          
        4. @parent_getSession="getSession"
            parent_getSession이라는 사용자정의 이벤트 이름입니다.
            자식 컴포넌트에서 parent_getSession을 호출하면 getSession함수가 실행됩니다.
            parent_getSession을 호출 방법은 context.emit('부모 컴포넌트의 이벤트이름')메서드를 호출하면 됩니다.
            예) <router-view @parent_getSession="getSession" :parent_id="id" /> 인 경우
                  이 router-view 컴포넌트에 연결될 컴포넌트에서 아래와 같이 작성하면 됩니다.
                    *    자식 컴포넌트에서 작성하는 코드
                        context.emit("parent_getSession");
 -->

  <Nav :parent_id="id" />
    <router-view
                @parent_getSession="getSession"
                :parent_id="id" />
 <Footer :parent_id="id" />
</template>

<script>
    import {ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from './axios/axiossetting.js';
    import Nav2 from './component/navDo.vue';
    import Footer2 from './component/Footer.vue';
export default {
            components:{  //(2) template에서 사용할 컴포넌트의 정보를 작성하는 속성입니다.(컴포넌트 등록)
                 'Nav':Nav2, // 'template에서 사용할 컴포넌트이름' : 컴포넌트내용
                  'Footer': Footer2
                },
          setup(){
                  const id = ref('');
                  
                  //페이지 이동하기 위해 useRouter()를 사용합니다.
                  const router = useRouter();
                  
                  //member_login.vue에서 context.emit("parent_getSession", ""); 로 보냅니다.
                  ///vue/boards 상태에서 /vue/login으로 직접 주소를 입력한 경우 내부적으로 로그아웃이 되도록 처리합니다.
                  const getSession  = async (received_id) =>{
                        if(received_id==''){
                              try{
                              const res = await axios.post("members/logout");
                              id.value='';
                              console.log(res.data);
                              }catch(error){
                                console.log(error);
                              }
                        }else{
                                try{
                                  const res = await axios.get("getSession");
                                  id.value=res.data;
                                  console.log("여기는 App_1.vue getSession:"+id.value)
                                  if(id.value==''){  //null은 값으로 빈문자열로 리턴
                                      //route의 이름이 'Login' 인 경로로 이동합니다.
                                    router.push({
                                      name:'Login'
                                    });
                                  }
                          }catch(err){
                            console.log(err);
                          }
                        }// else end
                }// get Session end

                return{
                  id, getSession
                }

              }//setup end
            }// export
</script>

<style>

</style>