<template>
 <!-- Footer Section Begin -->
 <footer class="footer-section">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer__top-call">
                            <h5>기업 연락처</h5>
                            <h2>010-1234-5678<br>02-123-4567</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="footer__top-auth" v-if="!parent_id ">
                            <h5>사원 로그인 / 회원가입</h5>
                            <a href="#" style='text-decoration: none;' class="primary-btn" @click="login">로그인</a>
                            <a href="#" style='text-decoration: none;' class="primary-btn sign-up" @click="join">회원가입</a>
                        </div>
                        <div class="footer__top-auth" v-if="parent_id ">
                            <h5>{{parent_id}}님 환영합니다.</h5>
                            <a href="#" style='text-decoration: none;' class="primary-btn" @click="logout">로그아웃</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__text set-bg" 
        :style="{
                'background-image': 'url(' + require(`../assets/img/footer-bg.png`) + ')'
                    }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="footer__text-about">
                            <div class="footer__logo">
                                <a href="./index.html"><img src="../assets/img/logo.png" alt=""><span class="logo-text"> (주)이조네트워크</span></a>
                            </div>
                            <p>(주)이조네트워크는 2022년 10월 설립된  IT 컨설팅 및 웹 표준을 기반으로 하는 소프트웨어 구축 전문 기업입니다.
                        고객을 생각하는 서비스 정신을 최우선으로 삼아 고객의 기업가치를 증대화시키는 IT기업으로 발전하고 있습니다.​​</p>
                            <div class="footer__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 col-sm-6"></div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer__text-widget">
                            <h5>사이트맵</h5>
                            <ul>
                                <li><a href="#" @click="main">HOME</a></li>
                                <li><a href="#" @click="About">기업소개</a></li>
                                <li><a href="#" >기업소식</a></li>
                                <li v-if="parent_id "><a href="#" @click="Board_List">게시판</a></li>
                                <li><a href="#" @click="Contact">CONTACT</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="footer__text-widget">
                            <h5>cONTACT US</h5>
                            <ul class="footer__widget-info">
                                <li><span class="fa fa-map-marker"></span> 서울특별시 종로구 율곡로10길 105 디아망</li>
                                <li><span class="fa fa-mobile"></span> 010-1234-5678 | 02-123-456</li>
                                <li><span class="fa fa-envelope"></span> SGN@sgnet.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer__text-copyright">
                    <p>
  Copyright &copy;All rights reserved by SGN</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->
</template>

<script>
import axios from '../axios/axiossetting.js';
import { useRouter } from 'vue-router';
export default {
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
            const join = () => {
            router.push({
                name:'Join'
            });
            }
            const main = () => {
            router.push({
                name:'Main'
            });
            }
            const About = () => {
            router.push({
                name:'About'
            });
            }
            const Board_List = () => {
            router.push({
                name:'Board_List'
            });
            }
            const Contact = () => {
            router.push({
                name:'Contact'
            });
            }
        return{
           logout, login, join, main, About, Board_List, Contact
        }
    }
}
</script>

<style scoped>
</style>