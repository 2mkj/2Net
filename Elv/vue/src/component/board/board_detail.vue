<template>
 <div class="container">
    <div class="row">
         <div class="col-lg-12">
		<table class="table">
			<thead>
			<tr>
				<th colspan="2">MVC 게시판-view페이지</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>글쓴이</td>
				<td>
				<div v-if="board.board_SECRET==null">{{board.board_NAME}}</div>
                <div v-if="board.board_SECRET!=null">{{board.board_SECRET}}</div>
				</td>
			</tr>
			<tr>
				<td>제목</td>
				<td>{{board.board_SUBJECT}}</td>
			</tr>
			<tr>
				<td>내용</td>
				<td>{{board.board_CONTENT}}</td>
			</tr>
			<tr>
				<td>첨부파일</td>
				<td v-if="board.board_FILE">
				 <div @click="download">
					<span id="down"><img src="../../assets/attach.png">{{board.board_ORIGINAL}}</span>
				</div>
				</td>
				<td v-else></td>
			</tr>
			<tr>
				<td colspan="2">
					<button class="btn btn-primary start">댓글</button>
					<span id="count">{{count}}</span>

					<div class="group"
						v-if="board.board_NAME == parent_id || parent_id == 'admin'">
						<router-link :to="{name:'Board_Update'}">
							<button class="btn btn-warning">수정</button>
						</router-link>
						<button class="btn btn-danger" @click="showModal">삭제</button>
					</div>	
					<router-link :to="{name:'Board_Reply'}">
							<button class="btn btn-info">답변</button>
					</router-link>
						
					<router-link :to="{name:'Board_List'}">
							<button class="btn btn-success">목록</button>
					</router-link>
				</td>
			</tr>
			</tbody>
		</table>
		</div>
	</div>
</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from '../../axios/axiossetting.js';
export default {
	props:{
		parent_id:{
			type:String,
			required : true
		}
	},
	setup(){
		//board_list.vue <router-link :to="{name:'Board_Detail',params:{num:`${itme.board_NUM}`}}"로
		//이동할때 사용된 파라미터 num을 가져옵니다.
		const num = useRoute().params.num;

		const board=ref({});
		const router=useRouter();
		const getDetail = async ()=>{
			try{
				const res = await axios.get(`boards/${num}`);
				console.log(res.data);
				board.value=res.data.board;
				if(board.value==null){
					console.log('null입니다.');
					router.push("{name:'404'}")
					return;
				}
			}catch(err){
				console.log(err)
			}
		}

		getDetail();

		const store=useStore();
		const count = computed(()=>{
			return store.state.count;
		})

		const download = async() => {
			console.log(board.value.board_FILE);
			console.log(board.value.board_ORIGINAL);
			try{
			
			//Blob(Binary Large Object: Blob객체는 text나 2진 데이터 형태로 읽을 수 있습니다.)
				const res=await axios.get('boards/down',
							{  params: {
								filename: board.value.board_FILE,
								original :board.value.board_ORIGINAL
								},
								responseType: 'blob'
							}
				);											
			
			let bb = new Blob( [res.data]);
			//URL.createObjectURL() 정적 메서드는 주어진 객체를 가리키는 URL을 DOMString으로 반환합니다.
			//DOMString은 UTF-16 문자열입니다. JavaScript의 String도 UTF-16 문자열이기 때문에 DOMString 은 String으로 연결됩니
			// 객체 URL을 해제하려면 revokeObjectURL()을 호출하세요.
			let url=window.URL.createObjectURL (bb);
			
			//<a href="" download="파일오리지널이름">엘리먼트 생성 후 클릭=>다운로드 수행=>엘리먼트 제거
			const a=document.createElement('a'); // <a> 엘리먼트 생성
			let filename = board.value.board_ORIGINAL;
			console.log(`filename=${filename}`); //Lemon.png

			a.href=url;

			a.setAttribute('download', `${filename}`);

			a.style.cssText = 'display:none';

			console.log(a);

			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
			}catch(error){
				console.log(error)
			}
		}

		const showModal = ()=>{
			//store에 값을 변경합니다.
			store.dispatch('display', true);
		}

		return{
			board, download
			,count, showModal
		}
	}

}
</script>

<style  scoped>

	img {
		width:20px;
	}
	
	 table > thead,table > tbody > tr:nth-last-child(1) {
		text-align: center
	}
	
	td:nth-child(1) {
		width: 20%
	}
	
	
	table > tbody >tr:nth-child(5)>td:nth-child(2)>a {
		color: black
	}
	
	
	.btn-primary {
		background-color: #4f97e5
	}
	
	.group{display: inline-block}
	button{
		margin-left:20px;
	}
	
	#comment > table > tbody > tr > td:nth-child(2){
	 width:60%
	}
	#count{
	 position: relative;
		top: -10px;
		left: -10px;
		background: orange;
		color: white;
		border-radius: 30%;
	}
	
	#down{
		cursor:pointer
	}
	
	</style>
	
