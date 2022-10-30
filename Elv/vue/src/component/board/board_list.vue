<template>
     <!-- Breadcrumb Begin -->
 <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div style="padding:15px 10px">
                        <a style='text-decoration:none; color:#404040' href="/vue/main">HOME</a>&ensp;&gt;&ensp;<span>게시판</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

 <div class="container">
    <div class="row">
         <div class="col-lg-12">
    <!-- 게시글이 있는 경우 -->
  <div v-if="listcount>0">
            <div class="rows">
            <span>줄보기</span>
        <select class="form-control" v-model="limit">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10" selected>10</option>
        </select>
        </div>
        <table class="table table-striped">
       <!-- 테이블 간격 -->
        <colgroup>
        <col width="10%" />
        <col width="50%" />
        <col width="15%" />
        <col width="15%" />
        <col width="10%" />
        </colgroup>
        <thead>
        <tr>
            <th colspan="4" style="text-align:left"><h3>사내 게시판</h3></th>
            <th colspan="1">
                    <span>글 개수 : {{listcount}}</span>
            </th>
            </tr> 
            <tr>
                <th><div>번호</div></th>
                <th style="text-align:left"><div>제목</div></th>
                <th><div>작성자</div></th>
                <th><div>날짜</div></th>
                <th><div>조회수</div></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in list" :key="index">
            <td>{{startnum-index}}</td>
            <td style="text-align:left"><router-link :to="{name:'Board_Detail', params:{num:`${item.board_NUM}`}}">
                        <span v-for="num in item.board_RE_LEV*2" :key="num">&nbsp;&nbsp;</span>
                        <img v-if="item.board_RE_LEV>0" src="../../assets/line.gif">
                        <span class="b_subject">{{item.board_SUBJECT}}</span>
                    </router-link><span class="gray small">&ensp;[{{item.cnt}}]</span>
            </td>
            <td><div v-if="item.board_SECRET==null">{{item.board_NAME}}</div>
                <div v-if="item.board_SECRET!=null">{{item.board_SECRET}}</div></td>
            <td><div>{{item.board_DATE}}</div></td>
            <td><div>{{item.board_READCOUNT}}</div></td>
            </tr>
            </tbody>
            </table>
        </div> 
        <!--게시글이 없는 경우 -->
        <div v-else class="center">
                등록된 글이 없습니다.
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import { ref,watch} from 'vue';
import { useStore } from 'vuex';
import axios from '../../axios/axiossetting.js';
export default {

        setup(){
            const store = useStore();
            const limit = ref(10);
            let currentpage = 1;
            let maxpage = 1;
            const listcount = ref(0);
            const list = ref([]);
            const startnum = ref(0)

            //줄보기가 바뀌는 경우 getList() 호출합니다.
            watch(limit, ()=>{
                console.log("[board_list.vue : store.state.page] " + store.state.page)
                getList(store.state.page);
            })

            //페이지 네이션의 페이지 번호를 클릭한 경우 pageDo.vue에서 store.page값을 선택한 페이지
            //그 때 getList() 호출합니다.
            watch(()=>store.state.page, ()=>{
                console.log("[board_list.vue : store.state.page] " + store.state.page)
                getList(store.state.page);
            })

            const getList = async (page) => {

                try{
                    const res = await axios.get(`boards?page=${page}&limit=${limit.value}`);

                    list.value = res.data.boardlist;
                    listcount.value=res.data.listcount;
                    maxpage= res.data.maxpage;
                    currentpage=res.data.page;
                    startnum.value=listcount.value-(currentpage-1)*limit.value;
                    console.log("page의 startnum.value = "+ startnum.value);

                    const pagelist = ref([]);
                    for (let i=res.data.startpage; i<= res.data.endpage; i++){
                        pagelist.value.push(i);
                    }

                    //pageDo.vue에서 사용하기 위해 store에 저장합니다.
                    const obj = {maxpage, currentpage, pagelist};
                    store.dispatch('store_obj', obj);
                }catch(err){
                    console.log(err);
                }
            };
            
            getList(1);

            return{
                limit, listcount, list, startnum, 
            }
    } //setup
}
</script>

<style scoped>
    select.form-control{
      width:auto;margin-bottom:2em;display:inline-block;
    }
    .rows{text-align:right;}
    .center{text-align:center}
    table{
        text-align:center;
    }
    #app > div:nth-child(3) > div > div > div > table > tbody > tr > td > a{
        text-decoration: none;
        color:rgb(48, 48, 48)
    }
    #app > div:nth-child(3) > div > div > div > table > tbody > tr > td > a:hover{
        color:mediumslateblue
    }

    </style>
    