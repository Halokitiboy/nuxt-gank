<template>
  <div class="wrapper">
    <slot name="empty">
      <h1>啊哦！什么也米有</h1>
      <nuxt-link to="/home">回首页</nuxt-link>
    </slot>
  </div>
</template>

<script>
export default {
  name: '',
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
  .wrapper{
      height: 400px;
      display: flex;
      justify-content:center;
      align-items: center;
  }
</style>