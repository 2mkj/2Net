<template>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <div class="hero__slider">
            <div class="hero__item set-bg"           
                 :style="{
                'background-image': 'url(' + require(`../../assets/img/hero/hero-1.jpg`) + ')'
                    }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero__text">
                            <h5>“Second group & Network”</h5>
                                <h2>IT 혁신을 이끌어가는 기업<br /> (주)이조네트워크 입니다.</h2>
                                <span style='cursor:pointer' class="primary-btn"  @click="About">기업 소개 </span>
                            </div>   
                        </div>
                        <div class="col-lg-6">
                            <div class="hero__img">
                                <img src="../../assets/img/hero/hero-right.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

<!-- Choose Plan Section Begin -->
<section class="choose-plan-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <img src="../../assets/img/choose-plan.png" alt="">
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="plan__text">
                        <h3 style="margin-top:50px">배우고 경험하고 성장하는 기업</h3>
                        <ul style="margin-top:60px">
                            <li><span class="fa fa-check"></span> 고객 만족 지향의 사고</li>
                            <li><span class="fa fa-check"></span> 개방적 사고</li>
                            <li><span class="fa fa-check"></span> 창조적 사고</li>
                            <li><span class="fa fa-check"></span> 거대한 변화를 일으키는 조직</li>
                            <li><span class="fa fa-check"></span> 끊임없이 연구하고 배우는 조직</li>
                            <li><span class="fa fa-check"></span> 지식과 정보가 자유롭게 공유되고 활용되는 조직</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Choose Plan Section End -->


    <!-- Services Section Begin -->
    <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3>사이트 안내</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h4><i class="fa fa-database" aria-hidden="true"></i>&ensp;기업소개</h4>
						<span>&nbsp;</span>
                        <p>(주)이조네트워크의 기업소개란입니다.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h4><i class="fa fa-bell" aria-hidden="true"></i>&ensp;기업소식</h4>
						<span>&nbsp;</span>
						<p>(주)이조네트워크의 최신소식을 전해드립니다.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h4><i class="fa fa-map-marker" aria-hidden="true"></i>&ensp;CONTACT</h4>
						<span>&nbsp;</span>
                        <p>(주)이조네트워크의 연락처 / 오시는 길</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Services Section End -->

    <!-- Achievement Section Begin -->
    <section class="achievement-section set-bg spad"
    :style="{
      'background-image': 'url(' + require(`../../assets/img/achievement-bg.jpg`) + ')'
 	 }">
    </section>
    <!-- Achievement Section End -->

    <!-- Work Section Begin -->
    <section class="work-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3>기업 소식</h3>
                    </div>
                    <div class="work__text">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <h3>공지사항</h3>
                                    <p>게시판 프리뷰</p>
                                    <a href="#" class="primary-btn" style="text-decoration:none">더보기</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <h3>NEWS</h3>
                                    <p>게시판 프리뷰</p>
                                    <a href="#" class="primary-btn" style="text-decoration:none">더보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Work Section End -->
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup(){
        const router = useRouter();
            const About = () => {
            router.push({
                name:'About'
            });
            }
        return{
           About
        }
    }
}
</script>

<style>

/* Template default CSS
/*----------------------------------------*/

html,
body {
	height: 100%;
	font-family: "Pretendard-Regular","Montserrat", sans-serif;
	-webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	color: #111111;
	font-weight: 400;
}

h1 {
	font-size: 70px;
}

h2 {
	font-size: 36px;
}

h3 {
	font-size: 30px;
}

h4 {
	font-size: 24px;
}

h5 {
	font-size: 18px;
}

h6 {
	font-size: 16px;
}

p {
	font-size: 14px;
	color: #444444;
	font-weight: 400;
	line-height: 26px;
	margin: 0 0 15px 0;
}

img {
	max-width: 100%;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
	outline: none;
}

a:hover,
a:focus {
	text-decoration: none;
	outline: none;
	color: #fff;
}

ul,
ol {
	padding: 0;
	margin: 0;
}

/*---------------------
  Helper CSS
-----------------------*/

.section-title {
	margin-bottom: 70px;
	text-align: center;
}

.section-title.normal-title {
	text-align: left;
}

.section-title.normal-title h3:after {
	margin: 0;
}

.section-title h3 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	position: relative;
}

.section-title h3:after {
	position: absolute;
	left: 0;
	bottom: -30px;
	right: 0;
	height: 13px;
	width: 83px;
	background-image: url(../../assets/img/line.png);
	content: "";
	margin: 0 auto;
}

.set-bg {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
}

.spad {
	padding-top: 100px;
	padding-bottom: 100px;
}

.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white p,
.text-white span,
.text-white li,
.text-white a {
	color: #fff;
}

/* buttons */

.primary-btn {
	display: inline-block;
	font-size: 15px;
	padding: 14px 30px 12px;
	color: #ffffff;
	background: #4c57d6;
	text-transform: uppercase;
	font-weight: 700;
	border-radius: 50px;
}

.primary-btn2 {
	display: inline-block;
	font-size: 15px;
	padding: 14px 30px 12px;
	color: #ffffff;
	background: #7a84ec;
	text-transform: uppercase;
	font-weight: 700;
	border-radius: 50px;
    margin-right:20px;
}
.primary-btn3 {
	display: inline-block;
	font-size: 15px;
	padding: 14px 30px 12px;
	color: #ffffff;
	background: #6b7aec;
	text-transform: uppercase;
	font-weight: 700;
	border-radius: 50px;
    margin-right:20px;
}
.primary-btn4 {
	display: inline-block;
	font-size: 15px;
	padding: 14px 30px 12px;
	color: #ffffff;
	background: #5c7aec;
	text-transform: uppercase;
	font-weight: 700;
	border-radius: 50px;
}
.site-btn {
	font-size: 14px;
	color: #ffffff;
	font-weight: 700;
	text-transform: uppercase;
	display: inline-block;
	padding: 13px 30px 12px;
	background: #4c57d6;
	border: none;
	border-radius: 50px;
}

/* Preloder */

#preloder {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 999999;
	background: #000;
}

.loader {
	width: 40px;
	height: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -13px;
	margin-left: -13px;
	border-radius: 60px;
	animation: loader 0.8s linear infinite;
	-webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
	50% {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		border: 4px solid #673ab7;
		border-left-color: transparent;
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
}

@-webkit-keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
	50% {
		-webkit-transform: rotate(180deg);
		border: 4px solid #673ab7;
		border-left-color: transparent;
	}
	100% {
		-webkit-transform: rotate(360deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
}

/*---------------------
  Header
-----------------------*/

.header-section {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 9;
}

.header-section.header-normal {
	position: relative;
	background: #120851;
}

.header-section.header-normal .header__logo {
	padding-bottom: 30px;
}

.header-section.header-normal .header__menu {
	padding-bottom: 30px;
}

.header__info {
	padding: 10px 0;
	border-bottom: 1px solid #252163;
}

.header__info-left ul li {
	font-size: 14px;
	color: #ffffff;
	list-style: none;
	display: inline-block;
	margin-right: 25px;
}

.header__info-left ul li:last-child {
	margin-right: 0;
}

.header__info-left ul li span {
	height: 30px;
	width: 30px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	display: inline-block;
	margin-right: 5px;
}

.header__info-right {
	text-align: right;
}

.header__info-right ul li {
	list-style: none;
	display: inline-block;
	margin-right: 30px;
}

.header__info-right ul li:last-child {
	margin-right: 0;
}

.header__info-right ul li a {
	font-size: 15px;
	color: #ffffff;
	display: block;
    text-decoration: none;
}

.header__info-right ul li a span {
	height: 30px;
	width: 30px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	display: inline-block;
	margin-right: 5px;
}

.header__logo {
	padding-top: 30px;
}

.header__logo a {
	display: inline-block;
}

.header__menu {
	text-align: right;
	padding-top: 32px;
}

.header__menu ul li {
	list-style: none;
	display: inline-block;
	margin-right: 40px;
	position: relative;
}

.header__menu ul li .dropdown {
	position: absolute;
	left: 0;
	top: 40px;
	width: 140px;
	background: #ffffff;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	-webkit-box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
}

.header__menu ul li .dropdown li {
	display: block;
	text-align: left;
}

.header__menu ul li .dropdown li a {
	color: #111111;
	padding: 10px 15px;
	text-transform: capitalize;
	font-weight: 500;
}

.header__menu ul li .dropdown li a:after {
	display: none;
}

.header__menu ul li:last-child {
	margin-right: 0;
}

.header__menu ul li.active a:after {
	opacity: 1;
	height: 50%;
}

.header__menu ul li:hover .dropdown {
	opacity: 1;
	visibility: visible;
	top: 20px;
}

.header__menu ul li:hover a:after {
	opacity: 1;
	height: 50%;
}

.header__menu ul li a {
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	display: block;
	padding: 0 3px;
	position: relative;
	z-index: 1;
}

/*---------------------
  Hero
-----------------------*/

.hero__slider.owl-carousel .owl-item.active .hero__item .hero__text h5 {
	top: 0;
	opacity: 1;
}

.hero__slider.owl-carousel .owl-item.active .hero__item .hero__text h2 {
	top: 0;
	opacity: 1;
}

.hero__slider.owl-carousel .owl-item.active .hero__item .hero__text .primary-btn {
	top: 0;
	opacity: 1;
}

.hero__slider.owl-carousel .owl-dots {
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 118px;
	text-align: center;
}

.hero__slider.owl-carousel .owl-dots button {
	height: 5px;
	width: 25px;
	background: #433b76;
	border-radius: 50px;
	margin-right: 10px;
}

.hero__slider.owl-carousel .owl-dots button.active {
	background: #4c57d6;
}

.hero__slider.owl-carousel .owl-dots button:last-child {
	margin-right: 0;
}

.hero__item {
	height: 730px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.hero__item .hero__text {
	padding-top: 100px;
}

.hero__item .hero__text h5 {
	color: #ffffff;
	opacity: 0.7;
	font-weight: 500;
	margin-bottom: 15px;
	position: relative;
	-webkit-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
}

.hero__item .hero__text h2 {
	color: #ffffff;
	font-weight: 700;
	line-height: 47px;
	text-transform: uppercase;
	margin-bottom: 28px;
	position: relative;
	-webkit-transition: all 0.6s ease-out;
	-o-transition: all 0.6s ease-out;
	transition: all 0.6s ease-out;
}

.hero__item .hero__text .primary-btn {
	position: relative;
	-webkit-transition: all 0.9s ease-out;
	-o-transition: all 0.9s ease-out;
	transition: all 0.9s ease-out;
}

/*---------------------
  Register Domain
-----------------------*/

.register__text .register__form {
	margin-bottom: 34px;
}

.register__text .register__form form {
	position: relative;
}

.register__text .register__form form input {
	width: 100%;
	height: 54px;
	border: 2px solid #4c57d6;
	border-radius: 50px;
	font-size: 14px;
	color: #111111;
	padding-left: 20px;
}

.register__text .register__form form input::-webkit-input-placeholder {
	color: #111111;
}

.register__text .register__form form input::-moz-placeholder {
	color: #111111;
}

.register__text .register__form form input:-ms-input-placeholder {
	color: #111111;
}

.register__text .register__form form input::-ms-input-placeholder {
	color: #111111;
}

.register__text .register__form form input::placeholder {
	color: #111111;
}

.register__text .register__form form .change__extension {
	font-size: 14px;
	color: #111111;
	position: absolute;
	top: 15px;
	right: 170px;
	cursor: pointer;
}

.register__text .register__form form .change__extension:hover ul {
	opacity: 1;
	top: 18px;
	visibility: visible;
}

.register__text .register__form form .change__extension ul {
	width: 60px;
	background: #ffffff;
	position: absolute;
	left: 0;
	top: 38px;
	-webkit-box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	padding-left: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	z-index: 9;
}

.register__text .register__form form .change__extension ul li {
	list-style: none;
	cursor: pointer;
	font-weight: 500;
	font-size: 14px;
}

.register__text .register__form form .change__extension:before {
	position: absolute;
	left: -30px;
	top: 3px;
	height: 18px;
	width: 1px;
	background: #d7d7d7;
	content: "";
}

.register__text .register__form form .change__extension:after {
	position: absolute;
	right: -20px;
	top: 0;
	content: "3";
	font-family: "ElegantIcons";
}

.register__text .register__form form .site-btn {
	position: absolute;
	right: 4px;
	top: 4px;
}

.register__text .register__result {
	margin-bottom: 24px;
}

.register__text .register__result ul li {
	display: inline-block;
	list-style: none;
	color: #4c57d6;
	font-weight: 700;
	margin-right: 62px;
	font-size: 20px;
}

.register__text .register__result ul li:last-child {
	margin-right: 0;
}

.register__text .register__result ul li span {
	color: #111111;
}

.register__text p {
	margin-bottom: 0;
}

/*---------------------
  Services Section
-----------------------*/

.services-section {
	background: #eeeffb;
	padding-bottom: 120px;
}

.services__item {
	background: #ffffff;
	padding-left: 40px;
	padding-top: 40px;
	padding-right: 45px;
	padding-bottom: 20px;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	margin-bottom: 40px;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	cursor:pointer;
}

.services__item:hover {
	-webkit-box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
	box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
}

.services__item h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 8px;
}

.services__item span {
	font-size: 15px;
	color: #4c57d6;
	font-weight: 500;
	display: block;
	margin-bottom: 10px;
}
.services__item i, .services__item h4{
	color: #4c57d6;
	font-weight: 600;
}
.services__item p {
	color: #111111;
}

/*---------------------
  Pricing Section
-----------------------*/

.pricing-section {
	padding-bottom: 60px;
}

.pricing__swipe-btn {
	border: 1px solid #4c57d6;
	border-radius: 50px;
	height: 52px;
	width: 266px;
	float: right;
}

.pricing__swipe-btn label {
	font-size: 15px;
	color: #444444;
	font-weight: 700;
	text-transform: uppercase;
	display: inline-block;
	padding: 12px 30px 12px;
	border-radius: 50px;
	margin-right: -4px;
	position: relative;
	top: 2px;
	left: 2px;
	cursor: pointer;
}

.pricing__swipe-btn label.active {
	background: #4c57d6;
	color: #ffffff;
}

.pricing__swipe-btn label input {
	position: absolute;
	visibility: hidden;
}

.monthly__plans,
.yearly__plans {
	display: none;
}

.monthly__plans.active,
.yearly__plans.active {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

.pricing__item {
	text-align: center;
	padding-bottom: 20px;
	padding-top: 22px;
	background: #ffffff;
	padding-left: 20px;
	padding-right: 20px;
	-webkit-box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.1);
	box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.1);
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	margin-bottom: 40px;
}

.pricing__item:hover {
	-webkit-box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
	box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
}

.pricing__item:hover h3 {
	background: #4c57d6;
}

.pricing__item:hover .primary-btn {
	background: #4c57d6;
	color: #ffffff;
}

.pricing__item h4 {
	color: #111111;
	font-weight: 700;
	margin-bottom: 20px;
}

.pricing__item h3 {
	background: #120851;
	font-weight: 700;
	color: #ffffff;
	padding: 24px 0 20px;
	margin-bottom: 26px;
	margin-left: -30px;
	border-radius: 10px;
	margin-right: -30px;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

.pricing__item h3 span {
	font-size: 16px;
	font-weight: 400;
}

.pricing__item ul {
	margin-bottom: 26px;
}

.pricing__item ul li {
	font-size: 14px;
	color: #444444;
	line-height: 40px;
	list-style: none;
}

.pricing__item .primary-btn {
	color: #111111;
	background: #f2f2f2;
	display: block;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	padding: 14px 0 12px;
}

/*---------------------
  Achievement Section
-----------------------*/

.achievement-section {
	padding-bottom: 450px;
}

.achievement__item {
	text-align: center;
	margin-bottom: 30px;
}

.achievement__item span {
	font-size: 40px;
	color: #4c57d6;
}

.achievement__item h2 {
	color: #ffffff;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 5px;
}

.achievement__item p {
	font-size: 16px;
	color: #ffffff;
	text-transform: uppercase;
	margin-bottom: 0;
}

/*---------------------
  Work Section
-----------------------*/

.work-section {
	margin-top: -405px;
	position: relative;
	z-index: 9;
	padding-bottom: 150px;
}

.work-section .section-title {
	margin-bottom: 82px;
}

.work-section .section-title h3 {
	color: #ffffff;
}

.work__text {
	-webkit-box-shadow: 0px 5px 10px rgba(18, 8, 81, 0.1);
	box-shadow: 0px 5px 10px rgba(18, 8, 81, 0.1);
	padding: 70px;
	background: #ffffff;
	position: relative;
}

.work__text:after {
	position: absolute;
	left: 0;
	right: 0;
	top: -6px;
	margin: 0 auto;
	height: 15px;
	width: 15px;
	background: #ffffff;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
	content: "";
}

.work__item {
	text-align: center;
}

.work__item i {
	font-size: 53px;
	color: #4c57d6;
}

.work__item span {
	display: block;
	font-size: 14px;
	color: #4c57d6;
	margin-bottom: 6px;
	margin-top: 32px;
}

.work__item h3 {
	color: #111111;
	font-weight: 700;
	margin-bottom: 20px;
}

.work__item p {
	margin-bottom: 32px;
}

/*---------------------
  Choose Plan
-----------------------*/

.choose-plan-section.pricing-page {
	background: #f5f5f5;
}

.plan__text {
	padding-left: 20px;
}

.plan__text h3 {
	color: #111111;
	font-weight: 700;
	line-height: 39px;
	margin-bottom: 18px;
}

.plan__text ul {
	margin-bottom: 35px;
}

.plan__text ul li {
	list-style: none;
	font-size: 16px;
	font-weight: 500;
	color: #111111;
	line-height: 40px;
}

.plan__text ul li span {
	margin-right: 5px;
	color: #4c57d6;
}

/*---------------------
  Footer
-----------------------*/

.footer__top {
	position: relative;
	z-index: 1;
	padding-top: 50px;
	padding-bottom: 265px;
}

.footer__top::before {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 50%;
	background: #0B052F;
	content: "";
	z-index: -1;
}

.footer__top::after {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 50%;
	background: #0E0739;
	content: "";
	z-index: -1;
}

.footer__top-call h5 {
	font-size: 20px;
	color: #ffffff;
	font-weight: 700;
	margin-bottom: 18px;
}

.footer__top-call h2 {
	font-weight: 700;
	color: #4c57d6;
}

.footer__top-auth {
	padding-left: 25px;
}

.footer__top-auth h5 {
	font-size: 20px;
	color: #ffffff;
	font-weight: 700;
	margin-bottom: 20px;
}

.footer__top-auth .sign-up {
	margin-left: 6px;
	background: transparent;
	border: 2px solid #4c57d6;
	padding: 12px 30px 10px;
}

.footer__text {
	position: relative;
	z-index: 99;
	padding-top: 140px;
	margin-top: -225px;
}

.footer__text-about {
	margin-bottom: 30px;
}

.footer__text-about .footer__logo {
	margin-bottom: 24px;
}

.footer__text-about .footer__logo a {
	display: inline-block;
}

.footer__text-about p {
	color: #c4c4c4;
	line-height: 24px;
	margin-bottom: 20px;
}

.footer__text-about .footer__social a {
	display: inline-block;
	font-size: 18px;
	color: #c4c4c4;
	margin-right: 26px;
}

.footer__text-about .footer__social a:last-child {
	margin-right: 0;
}

.footer__text-widget {
	margin-bottom: 30px;
}

.footer__text-widget h5 {
	font-size: 20px;
	color: #ffffff;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 25px;
}

.footer__text-widget ul li {
	list-style: none;
}

.footer__text-widget ul li a {
	font-size: 14px;
	color: #c4c4c4;
	line-height: 30px;
}

.footer__text-widget .footer__widget-info li {
	list-style: none;
	font-size: 14px;
	color: #c4c4c4;
	line-height: 42px;
	position: relative;
	padding-left: 35px;
}

.footer__text-widget .footer__widget-info li span {
	color: #4c57d6;
	position: absolute;
	left: 0;
	top: 14px;
}

.footer__text-copyright {
	font-size: 14px;
	color: #c4c4c4;
	text-align: center;
	padding: 25px 0;
	border-top: 1px solid #2a2163;
	margin-top: 20px;
}

/* ----------------------------------- Other Pages Styles ----------------------------------- */

/*---------------------
  Breadcrumb
-----------------------*/

.breadcrumb__option {
	border-bottom: 1px solid #ebebeb;
	padding: 15px 0;
}

.breadcrumb__option a {
	font-size: 15px;
	color: #111111;
	font-weight: 500;
	margin-right: 20px;
	display: inline-block;
	position: relative;
}

.breadcrumb__option a:after {
	position: absolute;
	right: -18px;
	top: 0;
	content: "5";
	font-family: "ElegantIcons";
}

.breadcrumb__option a span {
	color: #111111;
	margin-right: 5px;
}

.breadcrumb__option span {
	font-size: 15px;
	color: #888888;
	font-weight: 500;
	display: inline-block;
}

/*---------------------
  About
-----------------------*/

.about__text {
	padding-top: 20px;
}

.about__text h2 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 15px;
}

.about__text p {
	color: #111111;
	margin-bottom: 26px;
}

.about__text .about__achievement .about__achieve__item {
	display: inline-block;
	margin-right: 95px;
	margin-bottom: 30px;
}

.about__text .about__achievement .about__achieve__item:last-child {
	margin-right: 0;
}

.about__text .about__achievement .about__achieve__item span {
	font-size: 30px;
	color: #4c57d6;
}

.about__text .about__achievement .about__achieve__item h4 {
	color: #111111;
	font-weight: 700;
	margin-top: 12px;
}

.about__text .about__achievement .about__achieve__item p {
	font-size: 13px;
	text-transform: uppercase;
	color: #444444;
	margin-bottom: 0;
}

/*---------------------
  About
-----------------------*/

.feature-section {
	background: #f5f5f5;
	padding-bottom: 70px;
}

.feature__item {
	background: #ffffff;
	-webkit-box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	box-shadow: 0px 0px 10px rgba(18, 8, 81, 0.15);
	padding: 30px 35px 32px 35px;
	text-align: center;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	margin-bottom: 30px;
}

.feature__item:hover {
	-webkit-box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
	box-shadow: 0px 8px 30px rgba(18, 8, 81, 0.2);
}

.feature__item span {
	font-size: 42px;
	color: #4c57d6;
}

.feature__item h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-top: 18px;
	margin-bottom: 10px;
}

.feature__item p {
	color: #111111;
	margin-bottom: 0;
}

/*---------------------
  Team
-----------------------*/

.team-section {
	padding-bottom: 70px;
}

.team__btn {
	text-align: right;
}

.team__item {
	border: 1px solid #d7d7d7;
	padding: 30px 20px 20px 30px;
	margin-bottom: 30px;
}

.team__item .team__pic {
	float: left;
	margin-right: 30px;
}

.team__item .team__pic img {
	height: 120px;
	width: 120px;
	border-radius: 50%;
}

.team__item .team__text {
	overflow: hidden;
}

.team__item .team__text h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 5px;
}

.team__item .team__text span {
	font-size: 14px;
	display: block;
	color: #4c57d6;
	margin-bottom: 6px;
}

.team__item .team__text .team__social a {
	display: inline-block;
	font-size: 16px;
	margin-right: 20px;
}

.team__item .team__text .team__social a.facebook {
	color: #3263af;
}

.team__item .team__text .team__social a.twitter {
	color: #40c4ff;
}

.team__item .team__text .team__social a.youtube {
	color: #ff0000;
}

.team__item .team__text .team__social a.instagram {
	color: #b309d7;
}

.team__item .team__text .team__social a:last-child {
	margin-right: 0;
}

/*---------------------
  Testimonial
-----------------------*/

.testimonial-section {
	background: #f5f5f5;
}

.testimonial__item {
	text-align: center;
	position: relative;
	-webkit-box-shadow: 0px 2px 10px rgba(18, 8, 81, 0.15);
	box-shadow: 0px 2px 10px rgba(18, 8, 81, 0.15);
	padding: 85px 30px 20px 30px;
	border-radius: 10px;
	background: #ffffff;
}

.testimonial__item img {
	height: 120px;
	width: 120px;
	border-radius: 50%;
	position: absolute;
	left: 0;
	right: 0;
	top: -50px;
	margin: 0 auto;
}

.testimonial__item h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 600;
	margin-bottom: 5px;
}

.testimonial__item span {
	font-size: 13px;
	color: #4c57d6;
	text-transform: uppercase;
	display: block;
	margin-bottom: 12px;
}

.testimonial__item p {
	margin-bottom: 0;
}

.testimonial__item .testimonial__rating i {
	font-size: 12px;
	color: #e9bb3f;
	margin-right: -4px;
}

.testimonial__slider .col-lg-4 {
	max-width: 100%;
}

.testimonial__slider.owl-carousel .owl-item img {
	width: auto;
}

.testimonial__slider.owl-carousel .owl-stage-outer {
	padding-bottom: 30px;
	padding-top: 50px;
}

.testimonial__slider.owl-carousel .owl-dots {
	text-align: center;
}

.testimonial__slider.owl-carousel .owl-dots button {
	height: 5px;
	width: 25px;
	background: #b7bcef;
	border-radius: 50px;
	margin-right: 10px;
}

.testimonial__slider.owl-carousel .owl-dots button.active {
	background: #4c57d6;
}

.testimonial__slider.owl-carousel .owl-dots button:last-child {
	margin-right: 0;
}

/*---------------------
  Hosting Section
-----------------------*/

.hosting-section {
	padding-bottom: 0;
}

.hosting__text .nav-tabs {
	border-bottom: none;
	margin-bottom: 10px;
}

.hosting__text .nav-tabs .nav-item {
	margin-bottom: 0;
	width: 20%;
}

.hosting__text .nav-tabs .nav-item .nav-link {
	border: navajowhite;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	background: #f5f5f5;
	text-align: center;
	padding: 20px 0;
	position: relative;
}

.hosting__text .nav-tabs .nav-item .nav-link:after {
	position: absolute;
	left: 0;
	right: 0;
	bottom: -4px;
	height: 10px;
	width: 10px;
	background: #4c57d6;
	content: "";
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
	margin: 0 auto;
	opacity: 0;
	z-index: 9;
}

.hosting__text .nav-tabs .nav-item .nav-link span {
	font-size: 24px;
	color: #4c57d6;
}

.hosting__text .nav-tabs .nav-item .nav-link span::before {
	font-size: 40px;
}

.hosting__text .nav-tabs .nav-item .nav-link h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
}

.hosting__text .nav-tabs .nav-item .nav-link.active {
	background: #4c57d6;
}

.hosting__text .nav-tabs .nav-item .nav-link.active span {
	color: #ffffff;
}

.hosting__text .nav-tabs .nav-item .nav-link.active h5 {
	color: #ffffff;
}

.hosting__text .nav-tabs .nav-item .nav-link.active:after {
	opacity: 1;
}

.hosting__feature__table table {
	width: 100%;
	border: 1px solid #e1e1e1;
	text-align: center;
}

.hosting__feature__table table thead {
	border-bottom: 1px solid #e1e1e1;
}

.hosting__feature__table table thead th {
	border-right: 1px solid #e1e1e1;
}

.hosting__feature__table table thead th .hosting__feature__plan--choose {
	text-align: left;
	padding-left: 40px;
	padding-right: 10px;
}

.hosting__feature__table table tbody tr {
	border-bottom: 1px solid #e1e1e1;
}

.hosting__feature__table table tbody tr:nth-child(odd) {
	background: #fafafa;
}

.hosting__feature__table table tbody tr td {
	border-right: 1px solid #e1e1e1;
	padding: 24px 0 22px;
	width: 232px;
}

.hosting__feature__table table tbody tr td.hosting__feature--item {
	text-align: left;
	padding-left: 40px;
}

.hosting__feature__table table .hosting__feature__plan--choose span {
	font-size: 16px;
	font-weight: 500;
	color: #4c57d6;
}

.hosting__feature__table table .hosting__feature__plan--choose .chose__title {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-top: 6px;
	font-size: 24px;
}

.hosting__feature__table table .hosting__feature--plan {
	padding: 40px 10px;
}

.hosting__feature__table table .hosting__feature--plan .plan__title {
	color: #111111;
	font-weight: 700;
	margin-bottom: 16px;
	font-size: 24px;
}

.hosting__feature__table table .hosting__feature--plan .hosting__feature--price {
	margin-bottom: 20px;
}

.hosting__feature__table table .hosting__feature--plan .hosting__feature--price .plan__price {
	font-size: 40px;
	color: #4c57d6;
	font-weight: 700;
}

.hosting__feature__table table .hosting__feature--plan .hosting__feature--price span {
	font-size: 16px;
	color: #444444;
}

.hosting__feature__table table .hosting__feature--plan .primary-btn {
	background: #f2f2f2;
	color: #111111;
}

.hosting__feature__table table .hosting__feature--item {
	font-size: 16px;
	color: #111111;
	font-weight: 700;
	width: 470px;
}

.hosting__feature__table table .hosting__feature--info {
	font-size: 14px;
	color: #111111;
	font-weight: 500;
}

.hosting__feature__table table .hosting__feature--check {
	font-size: 16px;
	color: #4c57d6;
}

.hosting__feature__table table .hosting__feature--close {
	font-size: 16px;
	color: #d6002d;
}

/*---------------------
  Question
-----------------------*/

.question__accordin .card {
	border: none;
	border-radius: 0;
}

.question__accordin .card .card-heading a {
	margin-bottom: 16px;
	position: relative;
	padding-left: 25px;
	cursor: pointer;
	display: block;
	font-weight: 700;
}

.question__accordin .card .card-body {
	padding: 0;
}

.question__accordin .card-heading a:after {
	position: absolute;
	left: 0;
	top: 4px;
}

.question__accordin .card-heading a:after,
.question__accordin .card-heading>a.active[aria-expanded=false]:after {
	content: "L";
	font-family: "ELegantIcons";
	font-size: 14px;
	height: 15px;
	width: 15px;
	background: #4c57d6;
	line-height: 15px;
	text-align: center;
	color: #ffffff;
}

.question__accordin .card-heading a[aria-expanded=true]:after,
.question__accordin .card-heading>a.active:after {
	content: "K";
	font-family: "ELegantIcons";
	font-size: 14px;
	height: 15px;
	width: 15px;
	background: #4c57d6;
	line-height: 15px;
	text-align: center;
	color: #ffffff;
}

.question-form input {
	font-size: 14px;
	color: #444444;
	width: 100%;
	height: 50px;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	margin-bottom: 20px;
	border-radius: 10px;
}

.question-form input::-webkit-input-placeholder {
	color: #444444;
}

.question-form input::-moz-placeholder {
	color: #444444;
}

.question-form input:-ms-input-placeholder {
	color: #444444;
}

.question-form input::-ms-input-placeholder {
	color: #444444;
}

.question-form input::placeholder {
	color: #444444;
}

.question-form textarea {
	font-size: 14px;
	color: #444444;
	width: 100%;
	height: 100px;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	margin-bottom: 14px;
	border-radius: 10px;
	resize: none;
	padding-top: 12px;
}

.question-form textarea::-webkit-input-placeholder {
	color: #444444;
}

.question-form textarea::-moz-placeholder {
	color: #444444;
}

.question-form textarea:-ms-input-placeholder {
	color: #444444;
}

.question-form textarea::-ms-input-placeholder {
	color: #444444;
}

.question-form textarea::placeholder {
	color: #444444;
}

/*---------------------
  Blog
-----------------------*/

.blog__item {
	margin-bottom: 40px;
}

.blog__item .blog__pic {
	height: 253px;
	position: relative;
}

.blog__item .blog__pic .label {
	font-size: 12px;
	color: #ffffff;
	text-transform: uppercase;
	background: #4c57d6;
	padding: 2px 10px;
	display: inline-block;
	border-radius: 5px;
	position: absolute;
	left: 30px;
	bottom: -11px;
}

.blog__item .blog__text {
	padding-left: 30px;
	padding-top: 25px;
}

.blog__item .blog__text h5 {
	margin-bottom: 5px;
}

.blog__item .blog__text h5 a {
	font-size: 20px;
	font-weight: 700;
	color: #111111;
	line-height: 27px;
}

.blog__item .blog__text ul li {
	list-style: none;
	display: inline-block;
	color: #666666;
	font-size: 13px;
	margin-right: 20px;
}

.blog__item .blog__text ul li:last-child {
	margin-right: 0;
}

.blog__item .blog__text ul li i {
	height: 30px;
	width: 30px;
	background: #f2f2f2;
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	margin-right: 5px;
}

.load-more {
	text-align: center;
}

.load-more .primary-btn {
	padding: 14px 75px 12px;
	background: #f2f2f2;
	color: #111111;
}

.blog__sidebar .blog__sidebar__item {
	margin-bottom: 70px;
}

.blog__sidebar .blog__sidebar__item:last-child {
	margin-bottom: 0;
}

.blog__sidebar .blog__sidebar__item .sidebar__title {
	margin-bottom: 30px;
}

.blog__sidebar .blog__sidebar__item .sidebar__title h6 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	position: relative;
	display: inline-block;
	padding: 0 5px;
	z-index: 1;
}

.blog__sidebar .blog__sidebar__item .sidebar__title h6:after {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50%;
	background: #4c57d6;
	content: "";
	z-index: -1;
	opacity: 0.3;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a {
	display: inline-block;
	font-size: 14px;
	color: #ffffff;
	height: 46px;
	width: 46px;
	line-height: 46px;
	text-align: center;
	margin-right: 10px;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a:last-child {
	margin-right: 0;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a.facebook {
	background: #3263af;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a.twitter {
	background: #40c4ff;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a.youtube {
	background: #ff0000;
}

.blog__sidebar .blog__sidebar__item .sidebar__social a.instagram {
	background: -o-linear-gradient(45deg, #af00e1, #ff9e35);
	background: linear-gradient(45deg, #af00e1, #ff9e35);
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item {
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: 1px solid #ebebeb;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item:last-child {
	border-bottom: none;
	padding-bottom: 0;
	margin-bottom: 0;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item .label {
	font-size: 12px;
	color: #ffffff;
	text-transform: uppercase;
	background: #4c57d6;
	padding: 2px 10px;
	display: inline-block;
	border-radius: 5px;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item h6 {
	margin-top: 20px;
	margin-bottom: 5px;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item h6 a {
	color: #111111;
	font-weight: 700;
	line-height: 27px;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item ul li {
	list-style: none;
	color: #666666;
	font-size: 13px;
}

.blog__sidebar .blog__sidebar__item .sidebar__feature__post .sidebar__feature__item ul li i {
	height: 30px;
	width: 30px;
	background: #f2f2f2;
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	margin-right: 5px;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe {
	background: #f5f5f5;
	padding: 30px;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe .sidebar__title {
	margin-bottom: 20px;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input {
	height: 46px;
	border: 1px solid #ebebeb;
	background: transparent;
	border-radius: 10px;
	padding-left: 20px;
	font-size: 14px;
	color: #444444;
	width: 100%;
	margin-bottom: 20px;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input::-webkit-input-placeholder {
	color: #444444;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input::-moz-placeholder {
	color: #444444;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input:-ms-input-placeholder {
	color: #444444;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input::-ms-input-placeholder {
	color: #444444;
}

.blog__sidebar .blog__sidebar__item .sidebar__subscribe form input::placeholder {
	color: #444444;
}

/*---------------------
  Blog Hero
-----------------------*/

.blog-hero-section {
	background: #f2f2f2;
	height: 640px;
	position: relative;
}

.blog-hero-section .blog__hero__pic {
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	height: 640px;
}

.blog__hero__text {
	padding-top: 218px;
}

.blog__hero__text .label {
	font-size: 12px;
	color: #ffffff;
	text-transform: uppercase;
	background: #4c57d6;
	padding: 2px 10px;
	display: inline-block;
	border-radius: 5px;
}

.blog__hero__text h3 {
	color: #111111;
	font-weight: 700;
	line-height: 39px;
	margin-bottom: 12px;
	margin-top: 10px;
}

.blog__hero__text ul li {
	list-style: none;
	color: #666666;
	font-size: 13px;
	display: inline-block;
	margin-right: 20px;
}

.blog__hero__text ul li:last-child {
	margin-right: 0;
}

.blog__hero__text ul li i {
	height: 30px;
	width: 30px;
	background: #ffffff;
	border-radius: 50%;
	line-height: 30px;
	text-align: center;
	margin-right: 5px;
}

/*---------------------
  Blog Details
-----------------------*/

.blog-details-section {
	padding-top: 60px;
}

.blog__details__text {
	position: relative;
}

.blog__details__social {
	position: absolute;
	left: -90px;
	top: 0;
}

.blog__details__social span {
	font-size: 15px;
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 25px;
	display: block;
}

.blog__details__social ul li {
	list-style: none;
	margin-bottom: 15px;
}

.blog__details__social ul li a {
	display: block;
	font-size: 14px;
	color: #ffffff;
	height: 46px;
	width: 46px;
	line-height: 46px;
	text-align: center;
	margin-right: 10px;
}

.blog__details__social ul li a:last-child {
	margin-right: 0;
}

.blog__details__social ul li a.facebook {
	background: #3263af;
}

.blog__details__social ul li a.twitter {
	background: #40c4ff;
}

.blog__details__social ul li a.youtube {
	background: #ff0000;
}

.blog__details__social ul li a.instagram {
	background: -o-linear-gradient(45deg, #af00e1, #ff9e35);
	background: linear-gradient(45deg, #af00e1, #ff9e35);
}

.blog__details__title {
	margin-bottom: 25px;
}

.blog__details__title p {
	line-height: 27px;
	font-size: 15px;
}

.blog__details__quote {
	background: #f5f5f5;
	padding: 30px 50px;
	margin-bottom: 35px;
	position: relative;
}

.blog__details__quote:after {
	position: absolute;
	left: 50px;
	top: -5px;
	font-family: "FontAwesome";
	content: "";
	font-size: 60px;
	color: #4c57d6;
	opacity: 0.3;
}

.blog__details__quote p {
	font-size: 16px;
	color: #111111;
	font-weight: 700;
	line-height: 30px;
	margin-bottom: 0;
	position: relative;
	z-index: 9;
}

.blog__details__title__more {
	margin-bottom: 30px;
}

.blog__details__title__more p {
	font-size: 15px;
	line-height: 27px;
	margin-bottom: 0;
}

.blog__details__item {
	overflow: hidden;
	margin-bottom: 15px;
}

.blog__details__item .blog__details__item__pic {
	float: left;
	margin-right: 30px;
}

.blog__details__item .blog__details__item__text {
	overflow: hidden;
}

.blog__details__item .blog__details__item__text p {
	font-size: 15px;
	line-height: 27px;
}

.blog__details__desc {
	margin-bottom: 30px;
}

.blog__details__desc p {
	font-size: 15px;
	line-height: 27px;
}

.blog__details__tags {
	margin-bottom: 60px;
}

.blog__details__tags a {
	display: inline-block;
	font-size: 13px;
	color: #444444;
	background: #f2f2f2;
	padding: 10px 16px;
	margin-right: 6px;
}

.blog__details__tags a:last-child {
	margin-right: 0;
}

.blog__details__profile {
	background: #f5f5f5;
	padding: 50px;
	margin-bottom: 55px;
}

.blog__details__profile .blog__details__profile__pic {
	float: left;
	margin-right: 30px;
}

.blog__details__profile .blog__details__profile__pic img {
	height: 120px;
	width: 120px;
	border-radius: 50%;
}

.blog__details__profile .blog__details__profile__text {
	overflow: hidden;
}

.blog__details__profile .blog__details__profile__text h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
}

.blog__details__profile .blog__details__profile__text p {
	line-height: 27px;
}

.blog__details__profile .blog__details__profile__text .blog__details__profile__social a {
	font-size: 14px;
	color: #444444;
	display: inline-block;
	margin-right: 14px;
}

.blog__details__profile .blog__details__profile__text .blog__details__profile__social a:last-child {
	margin-right: 0;
}

.blog__details__option {
	margin-bottom: 55px;
}

.blog__details__option .blog__details__option__item {
	display: block;
}

.blog__details__option .blog__details__option__item.blog__details__option__item--next {
	text-align: right;
}

.blog__details__option .blog__details__option__item.blog__details__option__item--next h5 i {
	margin-right: 0;
	margin-left: 5px;
}

.blog__details__option .blog__details__option__item h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 20px;
}

.blog__details__option .blog__details__option__item h5 i {
	margin-right: 5px;
}

.blog__details__option .blog__details__option__item .label {
	font-size: 12px;
	color: #ffffff;
	text-transform: uppercase;
	background: #4c57d6;
	padding: 2px 10px;
	display: inline-block;
	border-radius: 5px;
}

.blog__details__option .blog__details__option__item h6 {
	color: #111111;
	font-weight: 700;
	line-height: 27px;
	margin-top: 10px;
}

.blog__details__comment {
	border: 1px solid #ebebeb;
	padding-left: 40px;
	padding-bottom: 50px;
	padding-right: 50px;
	padding-top: 30px;
}

.blog__details__comment h4 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	position: relative;
	display: inline-block;
	padding: 0 5px;
	z-index: 1;
	margin-bottom: 55px;
}

.blog__details__comment h4:after {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50%;
	background: #4c57d6;
	content: "";
	z-index: -1;
	opacity: 0.3;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item {
	padding-bottom: 5px;
	border-bottom: 1px solid #f2f2f2;
	margin-bottom: 40px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item.blog__details__comment__reply {
	margin-left: 115px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item:last-child {
	padding-bottom: 0;
	border-bottom: none;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__pic {
	float: left;
	margin-right: 25px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__pic img {
	height: 90px;
	width: 90px;
	border-radius: 50%;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text {
	position: relative;
	overflow: hidden;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 15px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text p {
	font-size: 15px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text ul {
	position: absolute;
	right: 0;
	top: 0;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text ul li {
	list-style: none;
	display: inline-block;
	font-size: 12px;
	color: #444444;
	margin-right: 24px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text ul li i {
	font-size: 14px;
	color: #4c57d6;
	margin-right: 5px;
}

.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text ul li:last-child {
	margin-right: 0;
}

.blog__details__comment .comment__btn {
	text-align: center;
}

/*---------------------
  Contact
-----------------------*/

.contact-section {
	padding-bottom: 0;
}

.contact__text h3 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 22px;
}

.contact__text p {
	color: #111111;
	font-size: 15px;
	margin-bottom: 30px;
}

.contact__text ul li {
	list-style: none;
	position: relative;
	padding-left: 65px;
	margin-bottom: 30px;
}

.contact__text ul li span {
	height: 46px;
	width: 46px;
	background: #4c57d6;
	line-height: 46px;
	text-align: center;
	border-radius: 10px;
	font-size: 20px;
	color: #ffffff;
	position: absolute;
	left: 0;
	top: 0;
}

.contact__text ul li h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 5px;
}

.contact__text ul li p {
	font-size: 15px;
	color: #111111;
	margin-bottom: 0;
}

.contact__text .contact__social a {
	display: inline-block;
	font-size: 30px;
	color: #c4c4c4;
	margin-right: 26px;
}

.contact__text .contact__social a:last-child {
	margin-right: 0;
}

.contact__text .contact__social a.facebook {
	color: #3263af;
}

.contact__text .contact__social a.twitter {
	color: #40c4ff;
}

.contact__text .contact__social a.youtube {
	color: #ff0000;
}

.contact__text .contact__social a.instagram {
	color: #b309d7;
}

.map {
	height: 515px;
}

.map iframe {
	width: 100%;
}

.contact-form h3 {
	color: #111111;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 45px;
}

.contact-form form .input-list {
	margin-right: -20px;
	overflow: hidden;
}

.contact-form form .input-list input {
	font-size: 14px;
	color: #444444;
	width: calc(33.33% - 23px);
	height: 50px;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	margin-bottom: 23px;
	border-radius: 10px;
	margin-right: 20px;
}

.contact-form form .input-list input::-webkit-input-placeholder {
	color: #444444;
}

.contact-form form .input-list input::-moz-placeholder {
	color: #444444;
}

.contact-form form .input-list input:-ms-input-placeholder {
	color: #444444;
}

.contact-form form .input-list input::-ms-input-placeholder {
	color: #444444;
}

.contact-form form .input-list input::placeholder {
	color: #444444;
}

.contact-form form textarea {
	font-size: 14px;
	color: #444444;
	width: 100%;
	height: 130px;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	margin-bottom: 17px;
	border-radius: 10px;
	resize: none;
	padding-top: 12px;
}

.contact-form form textarea::-webkit-input-placeholder {
	color: #444444;
}

.contact-form form textarea::-moz-placeholder {
	color: #444444;
}

.contact-form form textarea:-ms-input-placeholder {
	color: #444444;
}

.contact-form form textarea::-ms-input-placeholder {
	color: #444444;
}

.contact-form form textarea::placeholder {
	color: #444444;
}

/*---------------------
  404
-----------------------*/

.text__404 {
	text-align: center;
}

.text__404 h3 {
	color: #111111;
	font-weight: 700;
	margin-top: 45px;
	margin-bottom: 13px;
}

.text__404 p {
	font-weight: 500;
	margin-bottom: 35px;
}

.text__404 form {
	width: 500px;
	position: relative;
	margin: 0 auto;
}

.text__404 form input {
	width: 100%;
	font-size: 14px;
	font-weight: 700;
	padding-left: 30px;
	height: 50px;
	border: none;
	background: #4c57d6;
	color: #ffffff;
	border-radius: 50px;
}

.text__404 form input::-webkit-input-placeholder {
	color: #ffffff;
}

.text__404 form input::-moz-placeholder {
	color: #ffffff;
}

.text__404 form input:-ms-input-placeholder {
	color: #ffffff;
}

.text__404 form input::-ms-input-placeholder {
	color: #ffffff;
}

.text__404 form input::placeholder {
	color: #ffffff;
}

.text__404 form button {
	font-size: 16px;
	color: #ffffff;
	background: transparent;
	border: none;
	position: absolute;
	right: 30px;
	top: 0;
	height: 50px;
}

/*--------------------------------- Responsive Media Quaries -----------------------------*/

@media only screen and (min-width: 1200px) {
	.container {
		max-width: 1170px;
	}
}

/* Medium Device = 1200px */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.register__text .register__result ul li {
		margin-right: 30px;
	}
	.about__text .about__achievement .about__achieve__item {
		margin-right: 60px;
	}
	.blog__details__comment .blog__details__comment__list .blog__details__comment__item.blog__details__comment__reply {
		margin-left: 0;
	}
	.blog__item .blog__text ul li {
		margin-right: 5px;
	}
}

/* Tablet Device = 768px */

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.register__text .register__result ul li {
		margin-right: 50px;
	}
	.work__item {
		margin-bottom: 30px;
	}
	.plan__text {
		padding-top: 40px;
	}
	.footer__text {
		padding-top: 240px;
	}
	.about__text {
		padding-top: 40px;
	}
	.footer__top-call {
		margin-bottom: 30px;
	}
	.footer__top-auth {
		padding-left: 0;
	}
	.question__accordin {
		margin-bottom: 20px;
	}
	.hero__item {
		height: auto;
		padding-bottom: 100px;
		padding-top: 100px;
	}
	.header__menu ul li {
		margin-right: 20px;
	}
	.header__info-left ul li {
		margin-right: 5px;
	}
	.header__info-right ul li {
		margin-right: 10px;
	}
	.team__item {
		text-align: center;
	}
	.team__item .team__pic {
		float: none;
		margin-bottom: 15px;
		margin-right: 0;
	}
	.blog__hero__text {
		padding-top: 90px;
	}
	.blog__details__comment .blog__details__comment__list .blog__details__comment__item.blog__details__comment__reply {
		margin-left: 50px;
	}
	.blog-hero-section {
		height: 640px;
	}
	.contact__text {
		margin-bottom: 30px;
	}
	.blog__sidebar {
		padding-top: 50px;
	}
	.blog-hero-section {
		height: auto;
	}
	.blog-hero-section .blog__hero__pic {
		position: relative;
		width: 100%;
		height: 640px;
	}
	.blog__hero__text {
		padding-bottom: 40px;
	}
}

/* Wide Mobile = 480px */

@media only screen and (max-width: 767px) {
	.header-section .container {
		position: relative;
	}
	.canvas__open {
		display: block;
		font-size: 20px;
		color: #ffffff;
		height: 30px;
		width: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid #ffffff;
		cursor: pointer;
		position: absolute;
		right: 15px;
		top: 30px;
	}
	.hero__item {
		height: auto;
		padding-bottom: 100px;
	}
	.register__text .register__result ul li {
		margin-right: 10px;
	}
	.pricing__swipe-btn {
		float: none;
		margin-bottom: 40px;
	}
	.work__item {
		margin-bottom: 30px;
	}
	.plan__text {
		padding-top: 40px;
	}
	.footer__top-auth {
		padding-left: 0;
	}
	.footer__top-call {
		margin-bottom: 30px;
	}
	.about__text {
		padding-top: 40px;
	}
	.about__text .about__achievement .about__achieve__item {
		margin-right: 45px;
	}
	.team__btn {
		text-align: left;
		margin-bottom: 40px;
	}
	.team__item {
		text-align: center;
	}
	.team__item .team__pic {
		float: none;
		margin-bottom: 15px;
		margin-right: 0;
	}
	.blog__hero__text {
		padding-top: 90px;
	}
	.hosting__text .nav-tabs .nav-item {
		width: 33.33%;
	}
	.hosting__feature__table {
		overflow-x: auto;
	}
	.question__accordin {
		margin-bottom: 20px;
	}
	.blog__sidebar {
		padding-top: 50px;
	}
	.blog__details__item .blog__details__item__pic {
		float: none;
		margin-right: 0;
		margin-bottom: 30px;
	}
	.blog__details__comment .blog__details__comment__list .blog__details__comment__item.blog__details__comment__reply {
		margin-left: 0;
	}
	.blog__details__comment .blog__details__comment__list .blog__details__comment__item .blog__details__comment__text ul {
		position: relative;
		margin-bottom: 20px;
	}
	.footer__text {
		padding-top: 210px;
	}
	.blog-hero-section {
		height: auto;
	}
	.blog-hero-section .blog__hero__pic {
		position: relative;
		width: 100%;
		height: 640px;
	}
	.blog__hero__text {
		padding-bottom: 40px;
	}
	.blog__details__option .blog__details__option__item.blog__details__option__item--next {
		padding-top: 40px;
	}
	.text__404 form {
		width: 100%;
	}
	.contact__text {
		margin-bottom: 30px;
	}
	.contact-form form .input-list {
		margin-right: 0;
		overflow: visible;
	}
	.contact-form form .input-list input {
		width: 100%;
		margin-right: 0;
	}
}

/* silknav */
.slicknav_btn,.slicknav_nav .slicknav_item{cursor:pointer}.slicknav_menu,.slicknav_menu *{box-sizing:border-box}.slicknav_btn{position:relative;display:block;vertical-align:middle;float:right;padding:.438em .625em;line-height:1.125em}.slicknav_btn .slicknav_icon-bar+.slicknav_icon-bar{margin-top:.188em}.slicknav_menu .slicknav_menutxt{display:block;line-height:1.188em;float:left;color:#fff;font-weight:700;text-shadow:0 1px 3px #000}.slicknav_menu .slicknav_icon{float:left;width:1.125em;height:.875em;margin:.188em 0 0 .438em}.slicknav_menu .slicknav_icon:before{background:0 0;width:1.125em;height:.875em;display:block;content:"";position:absolute}.slicknav_menu .slicknav_no-text{margin:0}.slicknav_menu .slicknav_icon-bar{display:block;width:1.125em;height:.125em;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.25);-moz-box-shadow:0 1px 0 rgba(0,0,0,.25);box-shadow:0 1px 0 rgba(0,0,0,.25)}.slicknav_menu:after,.slicknav_menu:before{content:" ";display:table}.slicknav_menu:after{clear:both}.slicknav_nav li,.slicknav_nav ul{display:block}.slicknav_nav .slicknav_arrow{font-size:.8em;margin:0 0 0 .4em}.slicknav_nav .slicknav_item a{display:inline}.slicknav_nav .slicknav_row,.slicknav_nav a{display:block}.slicknav_nav .slicknav_parent-link a{display:inline}.slicknav_menu{*zoom:1;font-size:16px;background:#4c4c4c;padding:5px}.slicknav_nav,.slicknav_nav ul{list-style:none;overflow:hidden;padding:0}.slicknav_menu .slicknav_icon-bar{background-color:#fff}.slicknav_btn{margin:5px 5px 6px;text-decoration:none;text-shadow:0 1px 1px rgba(255,255,255,.75);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#222}.slicknav_nav{clear:both;color:#fff;margin:0;font-size:.875em}.slicknav_nav ul{margin:0 0 0 20px}.slicknav_nav .slicknav_row,.slicknav_nav a{padding:5px 10px;margin:2px 5px}.slicknav_nav .slicknav_row:hover{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background:#ccc;color:#fff}.slicknav_nav a{text-decoration:none;color:#fff}.slicknav_nav a:hover{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background:#ccc;color:#222}.slicknav_nav .slicknav_txtnode{margin-left:15px}.slicknav_nav .slicknav_item a,.slicknav_nav .slicknav_parent-link a{padding:0;margin:0}.slicknav_brand{float:left;color:#fff;font-size:18px;line-height:30px;padding:7px 12px;height:44px}

</style>