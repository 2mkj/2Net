<template>
  <NoticeList />
  <Paging/>
</template>

<script>
import NoticeList from '../../component/Notice/NoticeList.vue';
import Paging from '../../component/pageDo.vue';
export default {
    components: { NoticeList, Paging },

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