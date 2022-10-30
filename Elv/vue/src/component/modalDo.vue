
<template>
  <div class="modal1 bg" v-show="display">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<form @submit.prevent="goDelete">

							 <div class="form-group">
							 	<label for="pwd">비밀번호</label>
							 	<input type="password"
							 			class="form-control" placeholder="Enter password"
							 			v-model.lazy="BOARD_PASS" required>
							 </div>
							 <button type="submit" class="btn btn-primary">전송</button>
							 <button type="button" class="btn btn-danger" 
							 		 data-dismiss="modal" @click="hidden">취소</button>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from '../axios/axiossetting.js';
export default {

	setup(){
		const num = useRoute().params.num;
		console.log(num);
		const BOARD_PASS=ref('');
		const router = useRouter();
		const store = useStore();

		const display = computed(()=>store.state.display);

		const hidden=()=>{
			BOARD_PASS.value=''; //비밀번호 입력 후 취소를 클릭하면 비밀번호가 남아있어 초기화합니다.
			store.dispatch('display',false);
		}

		const goDelete=async()=>{
			const res = await axios.delete(`boards/${num}`,
											{
												params:{password:BOARD_PASS.value}
											}
										)
			if(res.data == 0){
				alert('비번 오류 입니다.');
			}else if(res.data == -1){
				alert('삭제 실패 입니다.')
			}else{
				alert('삭제 성공');
				store.dispatch('display', false);
				router.push({
					name : 'Board_List',
				});
			}
		}

		return{
			hidden, goDelete, BOARD_PASS, display
		}
	}

}
</script>

<style scoped>
	.modal1 {
	   top: 0;
	   left: 0;
	   overflow: hidden;
	   outline: 0;
	}
	.bg{
	   width:100%;
	   height:100%;
	   background:rgba(0,0,0,0.5);
	   position:fixed;padding:20px
	   }
   
   
   </style>
   