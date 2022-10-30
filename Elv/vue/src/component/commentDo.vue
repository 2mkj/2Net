
<template>
  <div id="comment">
			<button class="btn btn-info float-left">{{count_message}}</button>
			<button class="btn btn-info float-right" @click="add">{{button_message}}</button>
			<textarea rows=3 
							class="form-control"
					  		@input = "change" 
							v-model.trim="content"
				      		style="resize:none" 
							maxLength="50"></textarea>
			<table class="table table-striped" v-if="listcount>0">
			  <thead>
			    <tr><td>아이디</td><td>내용</td><td>날짜</td></tr>
			  </thead>
			  <tbody>
				<tr v-for="(item,index) in list" :key="index">
					<td>{{item.id}}</td>
					<td>{{item.content}}</td>
					<td v-if="item.id==parent_id">
						{{item.reg_date}}
						<img src="../assets/pencil.png" width="15px" @click="update(item.content,item.num)">
						<img src="../assets/delete.png" width="15px" @click="del(item.num)">
					</td>
					<td v-else>{{item.reg_date}}</td>
				</tr>
		      </tbody>
		    </table>
		<div id="message" @click="more">{{message}}</div>
		</div>
</template>

<script>
import axios from '../axios/axiossetting.js';
import {useRoute} from 'vue-router'
import {ref} from 'vue';
import {useStore} from 'vuex';
export default {
	props:{
		parent_id:{
			type:String,
			required:true
		}
	},
	setup(props){
		//board_list.vue에서 <router-link :to="{name:'Board_Detail'},params:{num:`${item.board_NUM`}}"로
		//이동할 때 사용된 파라미터 num을 가져옵니다.
		const board_num = useRoute().params.num;

		let page=1;
		const listcount = ref(0);
		const list = ref([]);
		const content = ref('');
		const message = ref("등록된 댓글이 없습니다.");
		const button_message = ref("등록");
		const count_message=ref("총 50자까지 가능합니다.");
		let comment_num =0;
		const store = useStore(); //component/board/board_detail.vue에서 사용될 count를 보내기위해 사용합니다.

		const getList = async(page)=>{
			try{
				const res = await axios.get("comments",{params:{board_num : board_num, page:page}})
				listcount.value = res.data.listcount;
				list.value = res.data.list;

				if(listcount.value==0){
					message.value="등록된 댓글이 없습니다."
				}else{
					if(listcount.value > list.value.length){
						message.value="더보기";
					}else{
						message.value="";
					}
				}
				count_message.value="총 50자까지 가능합니다."

				//store에 저장
				store.dispatch('count', listcount.value);
			}catch(err){
				console.log(err);
			}
		}

		getList(1);

		const limit = 50; // 총 50자까지 가능
		const change = (event)=>{
			let value = event.target.value;
			let length = value.length;
			if(length>limit){
				value = value.substring(0, limit);
				length = limit;
			}
			count_message.value=length + "/" +limit;
		}

		const add = async ()=>{
			if(!content.value){
					alert("내용을 입력하세요");
					return;
			}
			let res;
			
			try{
				if(button_message.value=="등록"){
					res = await axios.post("comments/new",
															{board_num:board_num,
															content:content.value,
															id:props.parent_id});
					console.log(res.data);
				}else{
					res = await axios.patch("comments",
															{num:comment_num,content:content.value});
					button_message.value="등록";
					console.log(res.data);
				}
				content.value="";
				if(res.data==1)
						getList(1);

			}catch(err){
				console.log(err);
			}
		}//add end

		const del  = async (num)=>{
			console.log("삭제 num="+num)
			if(!confirm("정말 삭제하시겠습니까?")){
				return;
			}
			try{	
				const res=await axios.delete(`comments/${num}`);
				if(res.data==1)
					getList(1);
			}catch(err){
				console.log(err)
			}
		}//del end

		const update = (con, num)=>{
			button_message.value="수정완료";
			content.value=con;
			comment_num=num;
			count_message.value=con.length+"/"+limit
		}

		const more = ()=>{
			getList(++page);
		}

		return{
			message, listcount, list, content, button_message, count_message,
			add, update, del, more, change
		}
    }

}
</script>

<style scoped>
	img {
		width:15px;
	}
	#comment > table > tbody > tr  td:nth-child(1) {width:20%}
	#comment > table > tbody > tr  td:nth-child(2) {width:50%}
	.float-right {margin-right: 0px;}
	
	</style>
	