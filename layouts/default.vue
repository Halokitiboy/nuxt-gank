<template>
  <el-container>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>
<script>
import {mapActions} from 'vuex'
export default {
   data () {
     return {
       menu:[]
       }
   },
   mounted() {
        //  this.getToday();
        // window.scroll()
        document.addEventListener("scroll",function(position){
          console.log()
        })
   },
   methods: {
     handleOpen(index,url){
       console.log(index,url);
     },
     handleClose(index,url){
       console.log(index,url);
     },

     ...mapActions(['getToday'])
   },
}
</script>


<style lang='less'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.el-main{
  padding: 0;
}
.page-enter,
.page-leave-to{
  opacity: 0;
}
.page-enter-active,
.page-leave-active{
  transition: all  .5s ease;
}
</style>
