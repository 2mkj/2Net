<template>
  <div>
    <form @submit.prevent="reply">
        <h1>MVC 게시판 - reply 페이지</h1>
        <div class="form-group">
            <label for="board_name">글쓴이</label>
            <input readonly :value="parent_id" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="board_subject">제목</label>
            <input type="text" v-model.lazy="board.board_SUBJECT"
                    maxlength="100" required class="form-control" placeholder="Enter board_subject">
        </div>
        <div class="form-group">
            <label for="board_content">내용</label>
            <textarea v-model.lazy="board.board_CONTENT" required
                    rows="10" class="form-control"></textarea>
        </div>

        <div class="form-group">
            <label for="board_pass">비밀번호</label>
            <input type="password" v-model.lazy="board.board_PASS"
                   maxlength="30" required class="form-control" placeholder="Enter board_pass">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">답변</button>
            <button type="reset" class="btn btn-danger" @click="goDetail" >취소</button>
        </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "../../axios/axiossetting.js";
import {useRoute, useRouter} from "vue-router";
export default {
    props:{
        parent_id:{
            type:String,
            required:true
        }
    },
    emits:['parent_getSession'],
    setup(props, context){
        context.emit("parent_getSession");

        const board=ref({});
        const router = useRouter();
        const num = useRoute().params.num;

        const getDetail = async ()=>{
            try{
                    console.log("num"+num);
                    //const res = await axios.get(`board/${num}`);
                    const res = await axios.get('boards/'+num);
                    console.log(res.data);
                    if(board.value == null){
                        console.log('null입니다.');
                        router.push("{name:'404'}")
                        return;
                    }else{
                        board.value = res.data.board;
                        board.value.board_PASS="";
                        board.value.board_CONTENT='';
                        board.value.board_SUBJECT='Re:'+board.value.board_SUBJECT;
                    }
            }catch(err){
                console.log(err)
            }
        }

        getDetail();

        const reply = async()=>{
            let frm=new FormData();
            frm.append("BOARD_SUBJECT",board.value.board_SUBJECT);
            frm.append("BOARD_CONTENT",board.value.board_CONTENT);
            frm.append("BOARD_PASS",board.value.board_PASS);
            frm.append("BOARD_NAME",props.parent_id);
            frm.append("BOARD_NUM",num);
            frm.append("BOARD_RE_REF",board.value.board_RE_REF)
            frm.append("BOARD_RE_LEV",board.value.board_RE_LEV)
            frm.append("BOARD_RE_SEQ",board.value.board_RE_SEQ)

            try{
                    const res = await axios.post('boards/reply/new', frm)
                    if(res.data=="fail"){
                        console.log('답변 달기 실패입니다.');
                    }else if(res.data=="success"){
                        router.push({name : 'Board_List'});
                    }
           }catch(err){
            console.log("여기는 오류");
            console.log(err);
           }
        }//reply

        const goDetail=()=>{
            router.push({name:'Board_Detail'})
        }

        return{
                goDetail, reply, board
        }
    }

}
</script>

<style scoped>

    textarea{
      resize: none;
    }
    
    </style>
    
