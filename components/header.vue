<template>
  <header>
    <slot name="header">
      <h2>干货集中营</h2>
    </slot>
  </header>
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
    header{
        height: 100px;
        background: linear-gradient(45deg,#ddd,rgb(146, 115, 115));
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 10px #ddd;
        h2{
            font-size: 30px;
            height: 60px;
            line-height: 60px;
        }
    }
</style>