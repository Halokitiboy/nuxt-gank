<template>
  <div class="wrapper">
    <Header>
      <template slot="header">
        <h2> {{ name }}</h2>
      </template>
    </Header>
    <main>
      <el-card v-if="updated && itemData.length>0">
        <div v-if="name!== '福利'">
          <el-card 
            v-for="(item) in itemData" 
            :key="item.ganhuo_id"
          >
            <p><a 
              :href="item.url" 
              target="_blank" 
              rel="noopener noreferrer">{{ item.desc }}</a></p>
            <p>{{ item.who }} 发布于 {{ _dateTransform(item.publishedAt) }}</p>
          </el-card>
        </div>
        <Pic 
          v-else-if="name==='福利'"
          :list="itemData"
        />
        <div 
          class="pagination text-center">
          <el-pagination
            :current-page.sync="currentPage"
            :page-size="10"
            :total="200"
            layout="prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"/>
        </div>
      </el-card>
      <el-card v-else>
        <No-Data/>
      </el-card>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/header'
import NoData from '~/components/noData'
import Footer from '~/components/footer'
import Pic from '~/components/pic'
import { dateTransform } from '~/assets/js/utils.js'
export default {
  name: '',
  components: {
      Header,
      NoData,
      Pic,
      Footer
  },
  props: {},
  data() {
    return {
        name:'',
        pageIndex:1,
        currentPage:1,
        itemData:[],
        updated:false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
      this.getItemData(this.pageIndex);
  },
  beforeDestory() {},
  methods: {
      async getItemData (pageIndex){
        this.name = this.$route.query.name;
        const data = await this.$axios.$get(`https://gank.io/api/search/query/listview/category/${this.name}/count/10/page/${pageIndex}`);
        // const data = await this.$axios.$get(`https://gank.io/api/data/${this.name}/10/${pageIndex}`);
      if(data){ this.updated = true}
           
        console.log(this.updated)
       
        this.itemData = data.results;
        },
          _dateTransform(str){
              return dateTransform(str)
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
  .wrapper{
      main{
          width: 970px;
          margin: 20px auto;
          a{
              text-decoration: none;
              color: #58a8dd;
          }
          .pagination /deep/ .el-pagination{
                margin: 20px 0;
                display: inline-block;
          } 
      }
  }
</style>