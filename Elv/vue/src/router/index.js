import {createRouter, createWebHistory} from 'vue-router';
import Main from '../component/member/main.vue';
import Login from '../component/member/member_login.vue';
import Forgot from '../component/member/member_forgot.vue';
import Join from '../component/member/member_join.vue';
import About from '../component/about/about.vue';
import Contact from '../component/contact/contact.vue';
import Board_List from '../pages/board/board_list.vue';
import Board_Detail from '../pages/board/board_detail.vue';
import Board_Write from '../component/board/board_write.vue';
import Board_Update from '../component/board/board_update.vue';
import Board_Reply from '../component/board/board_reply.vue';
import Member_Update from '../component/member/member_update.vue';
import Member_List from '../pages/member/member_list.vue';
import Member_Info from '../component/member/member_info.vue';
import Error_404 from '../component/error/404Do.vue';
import NoticeList from '../pages/Notice/NoticeList.vue';
import Notice_Info from '../pages/Notice/NoticeList.vue';
const router = createRouter({
	history : createWebHistory(),
	routes : [
		{
			path:'/',
			redirect:'/vue/main'
		},	
	{
		path:'/vue',
		redirect:'/vue/main'
	},	
	{
		path:'/vue/main',
		name : 'Main',
		component : Main
	},	
	{
		path:'/vue/login',
		name : 'Login',
		component : Login
	},
	{
		path:'/vue/forgot',
		name : 'Forgot',
		component : Forgot
	},
	{
		path:'/vue/join',
		name : 'Join',
		component : Join
	},
	{
		path:'/vue/about',
		name : 'About',
		component : About
	},
	{
		path:'/vue/contact',
		name : 'Contact',
		component : Contact
	},
	{
		path:'/vue/board/list',
		name : 'Board_List',
		component : Board_List		
	},
	{
		path:'/vue/board/:num/detail',
		name : 'Board_Detail',
		component : Board_Detail,

	},
	{
		path:'/vue/board/write/:id',
		name : 'Board_Write',
		component : Board_Write
	},
	{
		path:'/vue/board/:num/edit',
		name : 'Board_Update',
		component : Board_Update
	},
	{
		path:'/vue/board/:num/reply',
		name : 'Board_Reply',
		component : Board_Reply
	},
	{
		path:'/vue/users/edit',
		name : 'Member_Update',
		component : Member_Update
	},
	{
		path:'/vue/users/list',
		name : 'Member_List',
		component : Member_List
	},
	{
		path:'/vue/users/:id/info',
		name : 'Member_Info',
		component : Member_Info
	},
	{
		path:'/:pathMatch(.*)*',
		redirect : '/vue/404'
	},
	{
		path:'/vue/404',
		name : '404',
		component : Error_404
	},
	{
		path : '/vue/notice/list',
		name :'NoticeList',
		component : NoticeList
	},
	{
		path:'/vue/notice/:notice_id/info',
		name : 'Notice_Info',
		component : Notice_Info
	},
]
});

export default router;
