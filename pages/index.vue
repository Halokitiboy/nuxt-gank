<template>
  <section class="container">
    <div>
      <logo/>
      <span class="logo-txt">GANK</span>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted () {
      setTimeout(()=>{
        this.$router.push({path:'/home'})
        },4500)
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.logo-txt{
    font-size: 120px;
    display: inline-block;
    padding: 0 0 0 30px;
    position: relative;
    left: 0;
    animation: showTxt .5s linear;
}
@keyframes showTxt{
    0%{
        left: 100px;
        opacity: 0;
    }
    100%{
      left: 0;
      opacity: 1;
    }
}
</style>
