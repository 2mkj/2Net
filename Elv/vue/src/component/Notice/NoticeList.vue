<template>
 <h1>NoticeList.vue 입니다</h1><hr>
 <div class="container">
  <div class="row">
    <!-- 공지사항이 있을때-->
    <div v-show="listcount>0">
    
      <form @submit.prevent="search">
        <div class="input-group">
            <select id="viewcount" v-model.lazy="search_field" @change="change_placeholder()">
                <option v-for="(item, index) in option_data" :key="index" :value="item.value">
                  {{item.label}}
                </option>
            </select>
            <input type="text" class="form-control" :placeholder="placeholder_message" v-model.lazy="search_word" ref="f2">
            <button class="btn btn-primary" type="submit">검색</button>
        </div>
    </form>


    <table class="table table-striped">
     <thead>
      <tr>
        <th colspan="3">
          공지사항 정보
        </th>
        <th colspan="2">
          <span>공지사항 개수 : {{listcount}}</span>
        </th>
      </tr> 

      <tr>
        <th><div>번호</div></th>
    	  <th><div>제목</div></th>
    	  <th><div>글쓴이</div></th>
        <th><div>작성일</div></th>
    	  <th><div>삭제</div></th>
      </tr>
    </thead>


    <tbody>
     <tr v-for="(item, index) in list" :key="index">
	     <td> <!--번호-->
        {{startnum-index}}
       </td>


	     <td> <!--제목-->
        <router-link :to="{name:'Notice_Info',params:{notice_id:`${item.notice_ID}`}}">
          {{item.notice_SUBJECT}}
        </router-link>
       </td>
	 
       <td> <!--글쓴이-->
        {{item.notice_WRITER}}
       </td>

       <td> <!--작성일-->
        {{item.notice_DATE}}
       </td>
      
        <td> <!--삭제버튼-->
          <button class="btn btn-danger btn-sm" @click="member_delete(item.notice_ID)">
            삭제
          </button>
        </td>

	   </tr>

    </tbody>

   </table>
    </div>

    <!--공지사항이 없을때-->
  <div v-show="listcount==0" class="center">

    <div style="min-height: 500px">
      <h4>공지사항이 없습니다.</h4>
    </div>
  </div>

  </div>
 </div>
</template>

<script>
import {ref,watch} from 'vue';
import axios from '../../axios/axiossetting.js';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        let option_data = ref([]);
        option_data.value=[
            {value:'I', label:'아이디'},
            {value: 'S', label:'제목'}
        ];
        const limit= ref(10);
        let currentpage=1;
        let maxpage = 1;
        const list = ref([]);
        const startnum = ref(0);
        const listcount = ref(0);
        const search_field=ref('S');
        const placeholder_message=ref('제목을 입력하세요');
        console.log("search_field2="+search_field.value)
        const search_word=ref('');
        const f2=ref(null);
        const search=()=>{
            console.log("search하러 가요");
            if(search_word.value==''){
                alert('검색어를 입력하세요');
                f2.value.focus();
                return;
            }
            getList(currentpage);
        }

        const change_placeholder=()=>{
            option_data.value.filter(item=>{
                if(item.value===search_field.value){
                    placeholder_message.value=item.label+'(를)을 입력하세요';
                    return;
                }
            });
        }


        const member_delete = async (id)=>{
            const answer = confirm("정말 삭제하시겠습니까?");
            if(answer){
                try{
                    const res = await axios.delete(`members/${id}`)
                    console.log(res.data)
                    if(res.data==0){
                        alert('삭제 실패 입니다.')
                    }else{
                        alert('삭제 성공');
                        getList(1);
                    }
                }catch(err){
                    console.log(err);
                }
            }
        }

        const getList = async (page)=>{
            try{
                const res = await axios.get(`notices?page=${page}&limit=${limit.value}&search_field=${search_field.value}&search_word=${search_word.value}`);
                console.log("noticelist : "+res.data)
                list.value=res.data.noticelist;
                listcount.value=res.data.listcount;
                maxpage = res.data.maxpage;
                currentpage=res.data.page;
                search_field.value=res.data.search_field;
                search_word.value=res.data.search_word;
                startnum.value=listcount.value-(currentpage-1)*limit.value;

                const pagelist = ref([]);
                for(let i=res.data.startpage; i<=res.data.endpage;i++){
                    pagelist.value.push(i);
                }

                const obj = {maxpage, currentpage, pagelist};
                store.dispatch('store_obj',obj);
            }catch(err){
                console.log(err);
            }
        }

        getList(1);

        watch(limit, ()=>{
            store.dispatch('store_limit',limit.value);
            console.log("(limit)member_list_vue - store.state.page] "+store.state.page)
            getList(store.state.page);
        })

        //페이지 네이션에서 페이지 번호를 클릭한 경우 store.state.page의 값이 변경됩니다.
        //store.state.page에 해당하는 목록을 가져옵니다.

        watch(()=>store.state.page, ()=>{
            getList(store.state.page);
        })

        return{
            limit, search, search_field, search_word, listcount, list, startnum,
            placeholder_message, change_placeholder, member_delete, option_data,
        }
    }
}
</script>

<style scoped>

</style>