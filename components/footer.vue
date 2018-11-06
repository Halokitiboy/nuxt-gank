<template>
  <footer class="footer">
    <p>
      <!-- <nuxt-link to="/">首页</nuxt-link> -->
      <nuxt-link to="/xiandu">闲读</nuxt-link>
      <!-- <nuxt-link to="/history">历史</nuxt-link> -->
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestory() {},
  methods: {},
}
</script>

<style lang="less" scoped>
  .footer{
    height: 90px;
    text-align: center;
    background: linear-gradient(45deg,#927373,#ddd );
    p{
        padding-top: 20px;
      a{
        color:#fff;
        font-size: 20px;
        text-decoration:none;
        font-weight: 500;
      }
    }
  }
</style>