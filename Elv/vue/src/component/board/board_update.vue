<template>
  <div>
    <form @submit.prevent="update">
        <h1>MVC 게시판-update 페이지</h1>
        <div class="form-group">
            <label for="board_name">글쓴이</label>
            <input 
                    readonly 
                    :value="board.board_NAME" 
                    type="text"
                    maxlength="30" 
                    class="form-control">
        </div>

        <div class="form-group">
            <label for="board_subject">제목</label>
            <input 
                  type="text" 
                  v-model.lazy="board.board_SUBJECT" 
                  required
                  maxlength="100" 
                  class="form-control" 
                  placeholder="Enter board_subject">
        </div>

        <div class="form-group">
            <label for="board_content">내용</label>
            <textarea 
                    v-model.lazy="board.board_CONTENT"
                    required
                    rows="10" 
                    class="form-control"></textarea>
        </div>

        <div class="form-group" v-if="board.board_RE_LEV==0">
            <label for="board_file">파일 첨부</label>
            <label>
            <img src="../../assets/attach.png" alt="파일첨부">
                <input 
                    type="file"  name="uploadfile"  v-show="false"  @change="change">
            </label>
            <span>{{fileName}}</span>
            <img src="../../assets/remove.png" alt="파일삭제" class="remove"
                    v-if="fileName"
                    @click="remove">
        </div>

        <div class="form-group">
        <label for="board_pass">비밀번호</label>
            <input 
                    type="password"
                    v-model.lazy="board.board_PASS" 
                    maxlength="30" 
                    required
                    placeholder="Enter board_pass"
                    class="form-control">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">수정</button>
            <button type="reset" class="btn btn-danger"  @click="goDetail">취소</button>
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
            required:false
        }
    },
    emits:['parent_getSession'],
    setup(props, context){
        context.emit("parent_getSession");

        const fileName=ref("");
        const board = ref({});
        let file = '';
        const router = useRouter();
        const num = useRoute().params.num;
        let check=0;

        const getDetail = async ()=>{
            try{
                    console.log("num"+num);
                    //const res = await axios.get(`board/${num}`);
                    const res = await axios.get('boards/'+num);
                    console.log(res.data);
                    board.value = res.data.board;
                    if(board.value == null){
                        console.log('null입니다.');
                        router.push("{name:'404'}")
                        return;
                    }
                    //"board_ORIGINAL" :null로 전송된 경우 fileName.value=null입니다.
                    fileName.value=board.value.board_ORIGINAL;
                    console.log("파일이름 = "+fileName.value);

                    board.value.board_PASS="";
            }catch(err){
                console.log(err)
            }
        }

        getDetail();

        const change = event =>{
            file=event.target.files[0];
            fileName.value = file.name;
            check++;
        }

        const update = async()=>{
            let frm=new FormData();
            if(file!=''){//let file=''; 초기값 상태가 아닌지 확인합니다.
                frm.append("uploadfile",file);
            }
            frm.append("BOARD_SUBJECT",board.value.board_SUBJECT);
            frm.append("BOARD_CONTENT",board.value.board_CONTENT);
            frm.append("BOARD_PASS",board.value.board_PASS);
            frm.append("BOARD_NAME",board.value.board_NAME);
            frm.append("BOARD_NUM",num);

            if(check==0 && fileName.value != null){
                frm.append("check", fileName.value);
                frm.append("BOARD_FILE", board.value.board_FILE);
            }

            try{
                    const res = await axios.patch('boards',
                    frm
                        ,
                        { headers : 
                                { 'Content-Type' : 'multipart/form-data;charset=UTF-8' }        
                        }
                    );

                    console.log(`수정 응답 : ${res.data}`);
                    if(res.data=="Nopass"){
                        alert("비밀번호를 확인하세요");
                    }else if(res.data=="success"){
                        router.push({name : 'Board_Detail'});
                    }else if(res.data=="fail"){
                        console.log('수정 실패입니다.');
                    }
           }catch(err){
            console.log("여기는 오류");
            console.log(err);
           }
        }//update
        
        const remove=()=>{
            fileName.value='';
        }
        const goDetail=()=>{
            router.push({name:'Board_Detail'})
        }

        return{
                fileName, board,
                update, change, remove, goDetail
        }
    }

}
</script>

<style scoped>
    .remove{
      width:10px;
      position:relative;
      top:-10px;
    }
    img {
      width: 20px;
    }
    button {
      margin-right: 1em;
    }
    textarea{
      resize: none;
    }
    </style>
    
