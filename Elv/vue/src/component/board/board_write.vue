<template>
 <div class="container">
    <div class="row">
         <div class="col-lg-8" style="margin:0 auto">
 <form @submit.prevent="add">
  <h3>사내 게시판 - 글쓰기</h3>
  <hr>
  <div class="form-group">
   <label for="board_name">글쓴이</label>
   <!-- input 태그는 type="reset"을 선택하면 모두 클리어되어 input이 아닌 태그를 사용해 값을 유지합니다. -->
   <div readonly class="form-control">{{parent_id}}</div>
  </div>
  <div class="form-group">
    <label for="board_pass">비밀번호</label>
    <input type="password" v-model.lazy="board.pass" maxlength="30"
		   class="form-control" placeholder="Enter board_pass" required>
  </div>
  <div class="form-group">
	<label for="board_subject">제목</label>
	<input type="text" v-model.lazy="board.subject" maxlength="100"
		   class="form-control" placeholder="Enter board_subject">
  </div>
  <div class="form-group">
	<label for="board_content">내용</label>
	<textarea v-model.lazy="board.content"
			  rows="10" class="form-control"></textarea>
  </div>
  <div class="form-group">
 	<label>파일 첨부</label>
	<label>
	<img src="../../assets/attach.png" alt="파일첨부">
    <input type="file" v-show="false" @change="change">
	</label>
	<span>{{board.fileName}}</span>
  </div>
  <div style="position:relative">
    <label class="switch" for="checkbox">
    <input type="checkbox" id="checkbox" v-model="secret" />
    <div class="slider round"></div>
    </label>
    <div style="float:left">익명글</div>
    </div>
  <div class="form-group">
  	<button type="submit" class="btn btn-primary">등록</button>
  	<button type="button" class="btn btn-danger" >취소</button>
  </div>
  </form>
 </div>
</div>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from '../../axios/axiossetting.js';
import { useRouter } from 'vue-router';
export default {
    props:{
        parent_id:{
            type: String,
            required: true
        }
    },
    emits:['parent_getSession'],

    setup(props, context){

      const secret=ref(false);

        //부모 컴포넌트 App.vue 의 getSession 호출합니다
        context.emit("parent_getSession");
        const board = ref({
            name:'',
            pass: '',
            content: '',
            subject : '',
            fileName: ''
        })
        let file = '';
        const router = useRouter();

        const change = event => {
            file=event.target.files[0];
            board.value.fileName = file.name;
        }

        const add = async()=>{
            console.log('하하');
            let frm = new FormData();
            if(file!=''){ //let file=''; 초기값 상태가 아닌지 확인합니다. 즉, 파일을 선택하면 선택한 파일 업로드합니다.
                    frm.append("uploadfile",file);
            }
                    frm.append("BOARD_SUBJECT",board.value.subject);
                    frm.append("BOARD_CONTENT",board.value.content);
                    frm.append("BOARD_PASS",board.value.pass);
                    frm.append("BOARD_NAME",props.parent_id);
                    if(secret.value == true){
                      frm.append("BOARD_SECRET",'익명');
                    }
                    try{
                            const res = await axios.post('boards/new',
                                    frm
                                    ,
                                    { headers :
                                        {'Content-Type' : 'multipart/form-data;charset=UTF-8' }
                                    }
                            )
                            console.log(res.data);

                            router.push({
                                         name : 'Board_List'
                            });

                    }catch(err){
                        console.log('여기는 오류')
                        console.log(err)
                    }
        }


        return{
            board, add, change, secret
        }
    }

}
</script>

<style scoped>
    .form-group{
        margin:15px 0;
    }
    #app > div > div > div > form > div:nth-child(9){
        margin-bottom:150px;
    }

    img {
      width: 20px;
    }
    .btn-primary{
        margin-right: 1.5em;
    }
    button {
      padding:10px 60px;
      font-size:20px;
    }
    .switch {
  display: inline-block;
  height: 28px;
  position: relative;
  width: 54px;
}

.switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 20px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 20px;
}

input:checked + .slider {
  background-color: #6667bb;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* general styling */
html, body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f1f2f3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container {
  margin: 0 auto;
}
    
    </style>
    
