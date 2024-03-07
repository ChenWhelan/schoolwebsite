<template>
  <div>

         <el-carousel :autoplay="true" :interval="2000" :height="carouselH">
      <el-carousel-item v-for="(item, index) in imgSrc" :key="index">
        
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>  
    <br/>
      <div class="servicebtn">
    <h2>—— 公共服务 Public Service ——</h2>
    <br/>
    <br/>
  <ServiceBtn/>
    </div>
    <br/>
<div class="newsbox" style="background: ;">
  <h2>—— 新闻通知 News ——</h2>
  <br/>
          <SchoolNews/>
        <EduNotice/>
        <StuNotice/> 
        <br/>
        <br/>
</div>
<br/>


<div class="subjectcard">
  <h2>—— 专业介绍 Specialty Instruction ——</h2>
  <br/>
<br/>
  <SubjectCard/>
</div>
<div class="Bolang">
  <BoLang/>
</div>



</div>


</template>
 
 <script>
import SchoolNews from '../Index/SchoolNews.vue'
import EduNotice from '../Index/EduNotice.vue'
import StuNotice from '../Index/StuNotice.vue'
import SubjectCard from '@/components/SubjectCard.vue';
import ServiceBtn from '@/components/ServiceBtn.vue'
import BoLang from '@/components/BoLang.vue'
export default {
  name: "HomeIndex",
  components: {
    SchoolNews,
    EduNotice,
    StuNotice,SubjectCard,ServiceBtn,BoLang
},
  props: {
    clientW: {
      type: Number,
      default: 1200,
    },
  },
  data() {
    return {
      activeName: 'first',
      imgSrc: [
        require("../../images/学校风景/001.jpg"),
        require("../../images/1.jpg"),
        require("../../images/学校风景/002.jpg"),
        require("../../images/2.jpg"),

      ],
    };
  },
  computed: {
    carouselH() {
      return this.clientW / 2.6 + "px";
    },
  },
  
};
</script>
  <style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .carousel{

} */
.el-carousel__item {

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
   
  }

}


.newsbox{
  flex-flow: column;
margin:0 auto;
width:100%;
align-items:center;


    
}h2{
  text-align: center;
width:600px;
  height: 40px;
  color: white;  
  margin-bottom: 40px;
  margin: auto;
  background: #2d4059;

}
.servicebtn{
  flex-flow: row;
margin:0 auto;

height:200px;
padding-top:5px

}


.subjectcard{
  height:600px;
  h2{
text-align: center;
  }
}
.body {
    position: relative;
    align-items: center;
    min-height: 35vh;
    background-color: #ea5455;
    overflow: hidden;
 
    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fffbf3;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
 
    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }
 
    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}
 
@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}


</style>
  