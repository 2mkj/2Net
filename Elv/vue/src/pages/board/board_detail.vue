
<template>
  <Board_Detail :parent_id="parent_id" />
  <Modal/>
  <Comment :parent_id="parent_id" />
</template>

<script>
import Board_Detail from '../../component/board/board_detail.vue';
import Modal from '../../component/modalDo.vue';
import Comment from '../../component/commentDo.vue';
export default {
    components:{
        Board_Detail, Modal, Comment
    },
	props:{
		parent_id:{
			type:String,
			required:true
		}
	},
    emits:['parent_getSession'],
    setup(props, context){
        // 아래의 문장이 없으면 http://localhost:8081/vue/boards/8/detail를 새로고침하면 헤더가 사라집니다.
        context.emit("parent_getSession");
        
     }

}
</script>

<style>

</style>
