<template>
    <Board_List/>
    <Paging/>
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
    <button type="button" class="btn btn-info" style="float:right" @click="goWrite">글 쓰 기</button>
    </div>
    </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Board_List from '../../component/board/board_list.vue';
import Paging from '../../component/pageDo.vue';
export default {
            components:{
                Board_List, Paging
            },
            props:{
                parent_id:{
                    type:String,
                    required:false
                }
            },
            emits:['parent_getSession'],
            setup(props, context){

                //부모 컴포넌트 App_1.vue에 있는 getSession을 호출합니다.
                //<router-view @parent_getSession="getSession" :parent_id="id" />
                context.emit("parent_getSession");

                const router = useRouter();
                const goWrite=()=>{
                    router.push({
                        name:'Board_Write',
                        params:{id:props.parent_id}
                    });
                }
                return {
                    goWrite
                }
            }
}
</script>

<style>

</style>
