<template>
  <div>
  <HeaderTop/>
 <HeadNav/> 
   <router-view></router-view>
 <FooterBottom/>
  </div>

</template>

<script>
import HeadNav from './components/HeadNav.vue'
import FooterBottom from './components/FooterBottom.vue'
import HeaderTop from './components/HeaderTop.vue'


export default {
  name: 'App',
  components: {
    HeadNav,
    FooterBottom,
    HeaderTop,
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
/*   background:linear-gradient(#C9E6E4,#ffffff) */
background-color: #fffbf3;
}
</style>



