<template>
  <div class="wrapper">
    <Header>
      <template slot="header">
        <h2 class="text-center">{{ msg }}</h2>
      </template>
    </Header>
    <main>
      <div 
        v-for="(item, key) in category" 
        :key="`${item}_${key}`"
        style="margin:20px 0;">
        <el-card 
          class="box-card"
          shadow="hover">
          <div 
            slot="header" 
            class="clearfix">
            <h1 :id="`jump_${key}`">{{ item }} <span @click="more(item)">更多<i class="el-icon-d-arrow-right"/></span></h1>
          </div>
          <div 
            v-for="i in toDayData[item]" 
            :key="`${i._id}`" 
            class="text item">
            <div/>
            <el-card :body-style="{ padding: '0px'}">
              <div v-if="i.images">
                <vue-preview 
                  :slides="picPreviewConfig(i.images)" 
                  class="preview"
                  @close="handleClose"/>
              </div>
              <div 
                v-if="item === '福利'" 
                class="wellbeing">
                <img 
                  :src="i.url" 
                  :alt="i.type">
              </div>
              <div 
                v-else 
                style="padding: 14px;text-align:left;">
                <span>{{ i.desc }}</span>
                <el-button 
                  type="text" 
                  class="button"><a 
                    :href="i.url" 
                    target="_blank" 
                    rel="noopener noreferrer">查看详情</a></el-button>
                <div class="bottom">
                  <span>{{ i.who }}</span> 发布于 <time class="time">{{ _dateTransform( i.publishedAt) }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </el-card>
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {dateTransform} from '~/assets/js/utils.js';
import menu from '~/assets/config';
import Header from '~/components/header';
import Footer from '~/components/footer';
import jump from 'jump.js';
export default {
  name: '',
  components: {Header,Footer},
  props: {},
  data() {
    return {
        menu: menu,
        activeIndex:'1',
        msg:'今日份干货'
    }
  },
  async asyncData({ app }) {
     let data  = await app.$axios.$get('https://gank.io/api/today');
    return { toDayData:data.results,category:data.category }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
 
  },
  beforeDestory() {},
  methods: {
        _scrollTo(el ='#jump_1'){
          this.$router.push({path:'more'})
        },
        _dateTransform(str){
              return dateTransform(str)
        },
        handleClose () {
        },
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
                obj.src=val;
                obj.msrc=val;
                preview.push(obj);
            })
             return preview
        },
        more(name){
            this.$router.push({path:'/more',query:{name:name}})
        }
  }
}
</script>

<style lang="less" scoped>
    main{
        width: 970px;
        margin:10px auto 0;
        box-sizing: border-box;
        .image{
          display:inline-block;
          margin:20px;
          width: 20%;
          border: 1px solid #ddd;
        }
        .float-btn{
          position: fixed;
          bottom: 200px;
          right: 50px;
        }
        .button{
             a{
               color: rgb(88, 168, 221);
               text-decoration: none;
             }
        }
        .preview /deep/ img:not(.pswp__img){
            width: 120px!important;
            display: inline-block;
            margin: 10px;
            border: 1px solid #ddd;
          }
        .preview /deep/ figure{
            display: inline-block;
          }
          .wellbeing{
             img{
               width:80%;
               margin: 10px auto;
               display: block;
             }
          }
          .clearfix{
            position: relative;
            span{
              font-size: 14px;
              position: absolute;
              right: 0;
              bottom: 6.5px;
              color: rgb(88, 168, 221);
            }
          }
        
    }
</style>