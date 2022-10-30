<template>
   <!-- Header Section Begin -->
   <header class="header-section header-normal">
        <div class="header__info">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__info-left">
                            <ul>
                                <li><span class="fa fa-phone"></span> +1 123-456-7890</li>
                                <li><span class="fa fa-envelope"></span> SGN@sgnet.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__info-right">
                            <ul>
                                <li><a href="#"><span class="fa fa-comments"></span> 실시간 채팅 </a></li>
                                <li  v-if="!parent_id"><a href="#" @click="login"><span class="fa fa-user"></span> 로그인 / 회원가입</a></li>
                                <!--일반회원 메뉴-->
                                <li  v-else-if="parent_id && parent_id!='admin'" class="dropdown"><a href="#"  class="dropdown-toggle" data-toggle="dropdown"  > 
                                    <span class="fa fa-user"></span> {{ parent_id }}님 환영합니다</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" @click="Member_Update">정보수정</a></li>
                                            <li><a href="#" @click="logout">로그아웃</a></li>
                                        </ul>
                                </li>
                                 <!--admin 메뉴-->
                                <li  v-else-if="parent_id=='admin'" class="dropdown"><a href="#"  class="dropdown-toggle" data-toggle="dropdown"  >
                                    <span class="fa fa-user"></span> 관리자 페이지</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" @click="Member_Update">정보수정</a></li>
                                            <li><a href="#" @click="Member_List">회원정보</a></li>
                                            <li><a href="#" @click="logout">로그아웃</a></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-5">
                    <div class="header__logo">
                        <a href="#"  style='text-decoration: none' @click="main"><img src="../assets/img/logo.png" alt=""><span class="logo-text"> (주)이조네트워크</span></a>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7">
                    <nav class="header__menu">
                        <ul>
                            <li><a href="#" @click="main">Home</a></li>
                            <li><a href="#" @click="About">기업소개</a></li>
                            <li><a href="#">기업소식</a>
                                <ul class="dropdown">
                                    <li><a href="#" @click="NoticeList">공지사항</a></li>
                                    <li><a href="#">NEWS</a></li>
                                </ul>
                            </li>
                            <li v-if="parent_id "><a href="#" @click="Board_List">게시판</a></li>
                            <li><a href="#" @click="Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
</template>

<script>
import axios from '../axios/axiossetting.js';
import { useRouter } from 'vue-router';
export default {
    /*
        1. 부모 컴포넌트인 App_1.vue에서 전달받은 parent_id를 하위 컴포넌트에서 사용하기 위해서는 아래와 같이 props를 사용합니다.
        2. props는 객체이고 전달 받은 속성의 type(String, Number, Object, Boolean, Array, Date, Function),
            required 등의 관한 속성을 작성합니다.
        3. App_1.vue
            <Nav :parent_id="id" />에서 콜론 귀에 있는 parent_id의 이름으로 하위 컴포넌트인 이곳으로 전달됩니다.
        4. 부모에게 전달 받은 parent_id의 값은 변경될 수 없습니다.
    */
   props:{
        parent_id:{
            type:String,
            required:true
        }
    },
    setup(){
        // 페이지 이동하기 위해 useRouter()를 사용합니다.
        const router = useRouter();
        const logout = async () => {
            try{
                const res = await axios.post('members/logout');
                console.log("여기는 logout:" + res.data);

                //route의 이름이 'Login'인 경로로 이동합니다.
                router.push({
                    name:'Login'
                });
            }catch(error){
                console.log(error);
            }
        }

            const login = () => {
            router.push({
                name:'Login'
            });
            }
            const main = () => {
            router.push({
                name:'Main'
            });
            }
            const Member_Update = () => {
            router.push({
                name:'Member_Update'
            });
            }
            const Member_List = () => {
            router.push({
                name:'Member_List'
            });
            }
            const Board_List = () => {
            router.push({
                name:'Board_List'
            });
            }
            const About = () => {
            router.push({
                name:'About'
            });
            }
            const Contact = () => {
            router.push({
                name:'Contact'
            });
            }
            const NoticeList = () =>{
                router.push({
                    name: 'NoticeList'
                });
            }
        return{
            logout, login, main, Member_Update, Member_List, Board_List,About, Contact, NoticeList
        }
    }
}
</script>

<style>
.logo-text{
    display:inline-block;
    font-size:27px;
    padding: 0px 10px;
    font-weight: 600;
    color: #fff;
}
ul li.dropdown:hover ul.dropdown-menu{ 
    display: block; 
}
.dropdown-menu{    
    left:15%;
    --bs-dropdown-min-width: 8.5rem;
    --bs-dropdown-bg: #5351b9;
    text-align: center;
    }
.dropdown-menu li{
    display: block !important;
    padding:3px 20px;
    margin:0!important;
}
</style>