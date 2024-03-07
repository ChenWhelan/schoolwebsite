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
                    <span>计算机科学与技术</span>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutSubject/ComputerTech"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-1">专业简介</el-menu-item>
                    </router-link>
                    <router-link
        active-class="active"
        to="/AboutSubject/ComputerTechVideo"
        style="text-decoration: none"
      >
                    <el-menu-item index="1-2">专业宣传片</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>
  
                <el-submenu index="2">
                  <template slot="title">
                    <span>软件工程</span>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutSubject/SoftWare"
        style="text-decoration: none"
      >
                    <el-menu-item index="2-1">专业简介</el-menu-item>
                    </router-link>
                    <router-link
        active-class="active"
        to="/AboutSubject/SoftwareVideo"
        style="text-decoration: none"
      >
                    <el-menu-item index="2-2">专业宣传片</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>
   
                <el-submenu index="3">
                  <template slot="title">
                    <span>通信工程</span>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutSubject/CommunEngineer"
        style="text-decoration: none"
      >
                    <el-menu-item index="3-1">专业简介</el-menu-item>
                    </router-link>
                    <router-link
        active-class="active"
        to="/AboutSubject/ComEngVideo"
        style="text-decoration: none"
      >
                    <el-menu-item index="3-2">专业宣传片</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <span>智能科学与技术</span>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutSubject/AI"
        style="text-decoration: none"
      >
                    <el-menu-item index="4-1">专业简介</el-menu-item>
                    </router-link>
                    <router-link
        active-class="active"
        to="/AboutSubject/AIVideo"
        style="text-decoration: none"
      >
                    <el-menu-item index="4-2">专业宣传片</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title">
                    <span>电气工程及其自动化</span>
                  </template>
                  <el-menu-item-group>
                    <router-link
        active-class="active"
        to="/AboutSubject/AutoMation"
        style="text-decoration: none"
      >
                    <el-menu-item index="5-1">专业简介</el-menu-item>
                    </router-link>
                    <router-link
        active-class="active"
        to="/AboutSubject/AutoMationVideo"
        style="text-decoration: none"
      >
                    <el-menu-item index="5-2">专业宣传片</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>

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
    name: "AboutSubject",
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

    background-size: 100% 100%;
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
  