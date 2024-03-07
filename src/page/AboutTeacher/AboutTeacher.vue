<template>
    <div class="main">
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
  
              <el-submenu index="1">

                  <template slot="title">
                                   <router-link
        active-class="active"
        to="/AboutTeacher/TeachTeam"
        style="text-decoration: none"
      > <span>师资队伍</span>   </router-link>
                  </template>
               
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutTeacher/TComputer"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-1">计算机系</el-menu-item>
                    </router-link>

                    <router-link
        active-class="active"
        to="/AboutTeacher/TAutomation"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-2">电气工程及其自动化</el-menu-item>
</router-link>

<router-link
        active-class="active"
        to="/AboutTeacher/TCommun"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-3">通信工程</el-menu-item>
                    </router-link>

                    <router-link
        active-class="active"
        to="/AboutTeacher/TAI"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-4">智能科学与技术</el-menu-item>
                    </router-link>

                    <router-link
        active-class="active"
        to="/AboutTeacher/BasicSubject"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-5">基础学部</el-menu-item>
                    </router-link>

                  </el-menu-item-group>
                </el-submenu>
  
                <el-submenu index="2">
                  <template slot="title">
                    <router-link
        active-class="active"
        to="/AboutTeacher/ProfessorTeam"
        style="text-decoration: none"
      >
                    <span>特聘教授</span>
                    </router-link>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutTeacher/AcademicAdviser"
        style="text-decoration: none"
      >
                    <el-menu-item index="2-1">学术顾问</el-menu-item>
                    </router-link>

                    <router-link
        active-class="active"
        to="/AboutTeacher/ChairProfessor"
        style="text-decoration: none"
      >
                    <el-menu-item index="2-2">讲座教授</el-menu-item>
                    </router-link>

                    <router-link
        active-class="active"
        to="/AboutTeacher/VisitProfessor"
        style="text-decoration: none"
      >
                    <el-menu-item index="2-3">客座教授</el-menu-item>
                    </router-link>

                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="3">

<span slot="title">                                    <router-link
        active-class="active"
        to="/AboutTeacher/AdminService"
        style="text-decoration: none"
      >行政教辅</router-link></span>
                  
                </el-menu-item>
              </el-menu>
            </el-col>
  
          </el-row>
        </el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutTeacher",
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
  
  };
  
  </script>
  
  <style lang="less">
  .el-aside {
    background-color: rgba(255,255,255,0);
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-left: 80px;
    margin-top: 100px;
  }
  
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    margin-left: 50px;
    margin-right: 80px;
    margin-top: 100px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .main {

    background-size: 100% aut;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
  .el-menu-vertical-demo{
      width:200px;
  }
  
  </style>
  