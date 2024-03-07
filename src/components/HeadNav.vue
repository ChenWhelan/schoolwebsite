<template>
  <div class="HeadNav">
     <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"

  >
      <el-menu-item index="1"> 
        <router-link active-class="active" to="/Home" style="text-decoration: none;color:#ffffff;"> 
          首页 
        </router-link>
      </el-menu-item>
    

    <el-submenu index="2">
      <template slot="title">
        <router-link
          active-class="active"
          to="/AboutSchool"
          style="text-decoration: none; color:#ffffff;"
        >
          学院概况
        </router-link>
      </template>
             <router-link
          active-class="active"
          to="/AboutSchool/DeanSpeech"
          style="text-decoration: none"
        > 
      <el-menu-item index="2-1">
          院长致辞
      </el-menu-item>
 </router-link>
 <router-link
          active-class="active"
          to="/AboutSchool/CollegeIntro"
          style="text-decoration: none"
        > 
      <el-menu-item index="2-2">学院简介</el-menu-item>
 </router-link>
 <router-link
          active-class="active"
          to="/AboutSchool/CollegeLeader"
          style="text-decoration: none"
        > 
      <el-menu-item index="2-3">学院领导</el-menu-item>
</router-link>
<router-link
          active-class="active"
          to="/AboutSchool/InstitutionSet"
          style="text-decoration: none"
        > 
      <el-menu-item index="2-4">机构设置</el-menu-item>
      </router-link>
    </el-submenu>


    <el-submenu index="3">
      <template slot="title">
        <router-link
          active-class="active"
          to="/AboutTeacher"
          style="text-decoration: none;color:#ffffff;"
        >
          师资力量
        </router-link>
      </template>
      <router-link
        active-class="active"
        to="/AboutTeacher/TeachTeam"
        style="text-decoration: none"
      >
      <el-menu-item index="3-1">师资队伍</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutTeacher/ProfessorTeam"
        style="text-decoration: none"
      >
      <el-menu-item index="3-2">特聘教授</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutTeacher/AdminService"
        style="text-decoration: none"
      >
      <el-menu-item index="3-3">行政教辅</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <router-link
          active-class="active"
          to="/AboutSubject"
          style="text-decoration: none;color:#ffffff;"
        >
          学系专业
        </router-link></template
      >
      <router-link
        active-class="active"
        to="/AboutSubject/ComputerTech"
        style="text-decoration: none"
      >
      <el-menu-item index="4-1">计算机科学与技术</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutSubject/SoftWare"
        style="text-decoration: none"
      >
      <el-menu-item index="4-2">软件工程</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutSubject/CommunEngineer"
        style="text-decoration: none"
      >
      <el-menu-item index="4-3">通信工程</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutSubject/AI"
        style="text-decoration: none"
      >
      <el-menu-item index="4-4">智能科学与技术</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/AboutSubject/AutoMation"
        style="text-decoration: none"
      >
      <el-menu-item index="4-5">电气工程及其自动化</el-menu-item>
      </router-link>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <router-link
          active-class="active"
          to="/EduAdm"
          style="text-decoration: none;color:#ffffff;"
        >
          教学教务
        </router-link>
      </template>
      <router-link
        active-class="active"
        to="/EduAdm/TrainPro"
        style="text-decoration: none"
      >
        <el-menu-item index="5-1">培养方案</el-menu-item>
      </router-link>

      <router-link
        active-class="active"
        to="/EduAdm/RuLes"
        style="text-decoration: none"
      >
      <el-menu-item index="5-2">规章制度</el-menu-item>
    </router-link>

    <router-link
        active-class="active"
        to="/EduAdm/EduNews"
        style="text-decoration: none"
      >
      <el-menu-item index="5-3">教务动态</el-menu-item>
    </router-link>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <router-link
          active-class="active"
          to="/PraTeaching"
          style="text-decoration: none;color:#ffffff;"
        >
          实践教学
        </router-link>
      </template>
      <router-link
                    active-class="active"
                    to="/PraTeaching/SpecializedLab"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-1">专业实验室</el-menu-item>
      </router-link>
      <router-link
                    active-class="active"
                    to="/PraTeaching/ChanxueYan"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-2">产学研建设</el-menu-item>
      </router-link>
      <router-link
                    active-class="active"
                    to="/PraTeaching/DisCom"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-3">学科竞赛</el-menu-item>
      </router-link>
      <router-link
                    active-class="active"
                    to="/PraTeaching/AchievementShow"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-1">成果展示</el-menu-item>
      </router-link>

      <router-link
                    active-class="active"
                    to="/PraTeaching/EngineerClass"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-2">卓越工程师班</el-menu-item>
      </router-link>
      <router-link
                    active-class="active"
                    to="/PraTeaching/EduCertification"
                    style="text-decoration: none"
                  >
      <el-menu-item index="6-3">工程教育认证</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <router-link
          active-class="active"
          to="/PartyCon"
          style="text-decoration: none;color:#ffffff;"
        >
          党团建设
        </router-link>
      </template>
      <router-link
        active-class="active"
        to="/PartyCon/DtNotice"
        style="text-decoration: none"
      >
      <el-menu-item index="7-1">党团公示</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/PartyCon/DtOrgan"
        style="text-decoration: none"
      >
      <el-menu-item index="7-2">党团组织</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/PartyCon/DtNews"
        style="text-decoration: none"
      >
      <el-menu-item index="7-3">党团动态</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">
        <router-link
          active-class="active"
          to="/StuWork"
          style="text-decoration: none;color:#ffffff;"
        >
          学生工作
        </router-link>
      </template>
      <router-link
        active-class="active"
        to="/StuWork/ActiviTy"
        style="text-decoration: none"
      >
      <el-menu-item index="8-1">精品活动</el-menu-item>
      </router-link>

      <router-link
        active-class="active"
        to="/StuWork/AluMni"
        style="text-decoration: none"
      >
      <el-menu-item index="8-2">校友之窗</el-menu-item>
      </router-link>

      <router-link
        active-class="active"
        to="/StuWork/StudentWork"
        style="text-decoration: none"
      >
      <el-menu-item index="8-3">学工动态</el-menu-item>
      </router-link>

    </el-submenu>
    <el-submenu index="9">
      <template slot="title">
        <router-link
          active-class="active"
          to="/RecEmp"
          style="text-decoration: none;color:#ffffff;"
        >
          招生就业
        </router-link>
      </template>
      <router-link
        active-class="active"
        to="/RecEmp/EnrollMent"
        style="text-decoration: none"
      >
      <el-menu-item index="9-1">招生工作</el-menu-item>
</router-link>

<router-link
        active-class="active"
        to="/RecEmp/EmployMent"
        style="text-decoration: none"
      >
      <el-menu-item index="9-2">招聘信息</el-menu-item>
</router-link>

<router-link
        active-class="active"
        to="/RecEmp/EmpNotice"
        style="text-decoration: none"
      >
      <el-menu-item index="9-3">就业动态</el-menu-item>
</router-link>

    </el-submenu>

    <el-menu-item index="10">    <router-link
       
        to="/PersonnelRec"
        style="text-decoration: none;color:#ffffff;"
      > 人才招聘 </router-link></el-menu-item> 
   
    <el-submenu index="11">
      <template slot="title">
        <router-link
          active-class="active"
          to="/ServiceD"
          style="text-decoration: none;color:#ffffff;"
        >
          服务指南
        </router-link></template
      >
      <router-link
        active-class="active"
        to="/ServiceD/TranService"
        style="text-decoration: none"
      >
      <el-menu-item index="11-1">交通服务</el-menu-item>
      </router-link>
      <router-link
        active-class="active"
        to="/ServiceD/TDownload"
        style="text-decoration: none"
      >
      
      <el-menu-item index="11-2">资料下载</el-menu-item>
      </router-link>

      <router-link
        active-class="active"
        to="/ServiceD/CommonLink"
        style="text-decoration: none"
      >
      <el-menu-item index="11-3">常用链接</el-menu-item>
      </router-link>

      <router-link
        active-class="active"
        to="/ServiceD/CallMe"
        style="text-decoration: none"
      >
      <el-menu-item index="11-3">联系我们</el-menu-item>
      </router-link>
    </el-submenu>
    <div class="box2">
  <router-link to="/SearchList"><el-button type="primary" round icon="el-icon-search">搜索</el-button></router-link>
</div>
  </el-menu> 
  
  </div>

</template>

<script>
export default {
  name: "HeadNav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.HeadNav{
  align-items: center;
  text-align: center;
}
.el-menu{
    background-color:#f07b3f;
}


/* .el-menu-item:hover {
  background:  #01c6b2 !important;
  color: #fff !important;
}
.el-submenu__title:hover {
  background: #01c6b2 !important;
  color: #fff !important;
} */

.HeadNav >>> .el-menu-item:hover {
  background: #ffd460 !important;

}
.HeadNav >>> .el-submenu__title:hover {
  background: #ffd460 !important;

}
.box2{
    display: flex;
    align-items:right;
      flex-direction: column;
      line-height: 10px;
      margin-bottom: 10px; 
      text-align: right;
      padding-right:20px
  }
  .active {
      color: #ffd460;
      pointer-events: none;
      opacity: 1;
  }
</style>


