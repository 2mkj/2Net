<template>
  <Member_List />
  <Paging/>
</template>

<script>
import Member_List from '../../component/member/member_list.vue';
import Paging from '../../component/pageDo.vue';
export default {
    components:{
        Member_List, Paging
    },

    props:{
        parent_id:{
            type:String,
            required:false
        }
    },
    emits:['parent_getSession'],
    setup(props,context){
        context.emit("parent_getSession");
    }

}
</script>

<style>

</style>
