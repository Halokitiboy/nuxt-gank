<template>
  <div class="wrapper">
    <Header>
      <template slot="header">
        <h2>{{ name }}</h2>
      </template>
    </Header>
    <main>
      <section class="item-box">
        <!-- <el-row :gutter="20">
          <el-col 
            v-for="(item) in xianDu"
            :span="4" 
            :key="item._id"
          ><span 
            class="item-name" 
            @click="getItemData(item.en_name)">{{ item.name }}</span></el-col>
        </el-row> -->
        <el-card style="margin-bottom: 20px;">
          <el-card 
            v-for="item in listData" 
            :key="item._id">
            <p><a 
              :href="item.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="link_url">{{ item.title }}</a></p>
            <span>{{ _dateTransform(item.published_at) }}</span>
          </el-card>
          <div 
            v-show="listData.length>0" 
            class="pagination text-center">
            <el-pagination
              :current-page.sync="currentPage"
              :page-size="10"
              :total="400"
              layout="prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"/>
          </div>
        </el-card>
      </section>
      <section/>
    </main>
    <Footer v-show="listData.length>0" />
  </div>
</template>

<script>
import Footer from '~/components/footer'
import Header from '~/components/header'
import { rejects } from 'assert';
import { dateTransform } from '~/assets/js/utils.js'
export default {
  name: '',
  components: {Footer,Header},
  props: {},
  data() {
    return {
        name:'闲读',
        listData:[],
        num:10
    }
  },
  // async asyncData({app}){
  //   const {results} = await app.$axios.$get('https://gank.io/api/xiandu/categories');
  //   return {xianDu:results};
  // },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getItemData();
  },
  beforeDestory() {},
  methods: {
     async getItemData(index=1){
       const {results} = await this.$axios.$get(`https://gank.io/api/xiandu/data/id/appinn/count/${this.num}/page/${index}`);
       this.listData = results;
       console.log(results)
     },
     _dateTransform(date){
       return dateTransform(date)
     },
      handleSizeChange(){
        },
      handleCurrentChange(val){
          this.getItemData(val);
        }
  },
}
</script>

<style lang="less" scoped>
@height:30px;
  .wrapper{
    main{
      width: 970px;
      margin:auto;
      .item-box{
        padding-top: 20px;
        .item-name{
        display: inline-block;
        border: 1px solid #927373;
        height:@height;
        line-height: @height;
        width: 120px;
        text-align: center;
        // padding: 10px 20px;
        margin-bottom:10px;
       
      }
      .link_url{
        text-decoration: none;
        color: #58a8dd;
      }
      }
       .pagination{
          margin-top: 20px;
        }
    }
  }
</style>