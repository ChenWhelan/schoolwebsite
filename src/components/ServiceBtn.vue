<template>
    <div class="ServiceBtn">


     <a1 href="#" @click="jump1">
      <span>广州南方学院官网</span>
      <span>广州南方学院官网</span>
    </a1>
    <a1 href="#" style="margin-left: 30px" @click="jump2">
      <span>计算机等级考试</span>
      <span>计算机等级考试</span>
    </a1>  
    <a1 href="#" style="margin-left: 30px" @click="jump3">
      <span>毕业论文系统</span>
      <span>毕业论文系统</span>
    </a1>  
    <a1 href="#" style="margin-left: 30px" @click="jump4">
      <span>数字校园</span>
      <span>数字校园</span>
    </a1>  
    <a1 href="#" style="margin-left: 30px" @click="jump5">
      <span>教工信息门户</span>
      <span>教工信息门户</span>
    </a1>  
    <a1 href="#" style="margin-left: 30px" @click="jump6">
      <span>教务系统</span>
      <span>教务系统</span>
    </a1>  
    <router-link to="/ServiceD/CallMe">
    <a1 href="#" style="margin-left: 30px">
      <span>联系方式</span>
      <span>联系方式</span>
    </a1>  
    </router-link>

</div>

</template>

<script>
export default {
  data(){
     return {               
        address1:"https://www.nfu.edu.cn/",
        address2:"https://ncre.neea.edu.cn/",
        address3:"http://vgms.cqvip.com/lunwen2019/components/template/login.html",
        address4:"http://ecampus.nfu.edu.cn/door/login",
        address5:"https://auth.nfu.edu.cn/login?service=https%3A%2F%2Fservice.nfu.edu.cn%2Fdefault%2Fbusiness%2FThreeList%2Findex.jsp",
        address6:"http://ecampus.nfu.edu.cn/eca/login",

        } 
  },
  methods: {
    jump1(){
          window.open(this.address1,'_blank') // 在新窗口打开外链接
		},
    jump2(){
          window.open(this.address2,'_blank') // 在新窗口打开外链接
		},
    jump3(){
          window.open(this.address3,'_blank') // 在新窗口打开外链接
		},
    jump4(){
          window.open(this.address4,'_blank') // 在新窗口打开外链接
		},
    jump5(){
          window.open(this.address5,'_blank') // 在新窗口打开外链接
		},
    jump6(){
          window.open(this.address6,'_blank') // 在新窗口打开外链接
		},
  }
}
</script>

<style scoped>
.ServiceBtn{
  flex-flow: row;
  width:100%;
    text-align: center;
}
a1 {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 50px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

a1 span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#6983a5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 18px;
}

a1 span:nth-child(2) {
  color:#6983a5;
  background: #fff;
  overflow: hidden;
  z-index: 2;
  transition: 0.5s;
  clip-path: polygon(59% 1%, 100% 0%, 100% 100%, 60% 100%, 40% 51%);
}

a1 span:nth-child(2):hover {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0 54%);
}

a1 span:nth-child(1):hover ~  span:nth-child(2) {
  clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 52%);
}

</style>