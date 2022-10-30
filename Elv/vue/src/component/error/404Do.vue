<template>
  <div>
    <img src="../../assets/404.png"><br>
    요청하신 페이지는 존재하지 않습니다.
  </div>
</template>

<script>
export default {
    props:{
        parent_id:{
            type:String,
            required:false
        }
    },
    setup(props,context){
        context.emit("parent_getSession","");
    }

}
</script>

<style  scoped>
    img{width:300px}
    div{text-align: center;}
   </style>
   