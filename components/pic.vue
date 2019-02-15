<template>
  <el-card class="img-box">
    <vue-preview 
      :slides="picPreviewConfig(list)" 
      class="preview"
      @close="handleClose"/>
  </el-card>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
      list:{
          type:Array || Object,
          default:()=>{}
      }
  },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestory() {},
  methods: {
        picPreviewConfig(item){
            let preview = [];
            item.map((val,index)=>{
                let obj = { 
                  src: '',
                  msrc: '',
                  alt: 'picture1',
                  title: 'Image Caption 1',
                  w: 420,
                  h: 700
              }
                obj.src=val.url;
                obj.msrc=val.url;
                preview.push(obj);
            })
            console.log(preview)
             return preview
        },
        handleClose(){}
  },
}
</script>

<style lang="less" scoped>
  .wrapper{
      .img-box{
            width: 100%;
           .preview img{
            width: 100%;
        }
      } 
      .preview /deep/ figure{
          display: inline-block;
          width: 25%;
      }
        .preview /deep/ img:not(.pswp__img){
            width: 100%;
            display: inline-block;
            margin: 10px;
            border: 1px solid #ddd;
          }
     
  }
</style>