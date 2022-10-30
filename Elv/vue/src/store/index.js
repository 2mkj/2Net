import { createStore } from "vuex";
export default createStore({
    //공통으로 사용할 변수를 정의합니다.
    state:{
        count : 0,
        display : false,
        obj : {},
        page : 1,
        limit :  10
    },
    mutations:{ 
        update_count(state, payload){ 
            state.count = payload; 
        },
        update_display(state, payload){ 
            state.display = payload; 
        },
        update_list(state, payload){ 
            state.obj = payload; 
        },
        update_page(state, payload){ 
            state.page = payload; 
        },
        update_limit(state, payload){ 
            state.limit = payload; 
        }
    },
    actions:{ 
        count(context, count){
            context.commit('update_count', count)
        },
        display(context, display){
            context.commit('update_display', display)
        },
        store_obj(context, obj){
            context.commit('update_list', obj);
        },
        store_page(context, page){
            context.commit('update_page', page);
        },
        store_limit(context, limit){
            context.commit('update_limit', limit);
        },
    }
});