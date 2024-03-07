<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <router-link
                active-class="active"
                to="/AboutSchool/DeanSpeech"
                style="text-decoration: none"
              >
                <el-menu-item index="1">
                  <span slot="title">院长致辞</span>
                </el-menu-item>
              </router-link>

              <el-submenu index="2">
                <template slot="title">
                  <span>学院简介</span>
                </template>
                <el-menu-item-group>
                  <router-link
                    active-class="active"
                    to="/AboutSchool/CollegeIntro"
                    style="text-decoration: none"
                  >
                    <el-menu-item index="1-1">学院概况</el-menu-item>
                  </router-link>
                  <router-link
                    active-class="active"
                    to="/AboutSchool/HistoricalDevelop"
                    style="text-decoration: none"
                  >
                    <el-menu-item index="1-2">历史沿革</el-menu-item>
                  </router-link>
                  <router-link
                    active-class="active"
                    to="/AboutSchool/PromotionVideo"
                    style="text-decoration: none"
                  >
                    <el-menu-item index="1-3">学院宣传片</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <router-link
                active-class="active"
                to="/AboutSchool/CollegeLeader"
                style="text-decoration: none"
              >
                <el-menu-item index="3">
                  <span slot="title">学院领导</span>
                </el-menu-item></router-link
              >

              <router-link
                active-class="active"
                to="/AboutSchool/InstitutionSet"
                style="text-decoration: none"
              >
                <el-menu-item index="4">
                  <span slot="title">机构设置</span>
                </el-menu-item>
              </router-link>
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
  name: "AboutSchool",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.el-aside {
  background-color: rgba(255, 255, 255, 0);
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-left: 80px;
  margin-top: 100px;
}

.el-main {
  background-color: #ffffff;
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

  background-color: #c9e6e4;
  background-size: 100% 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo {
  width: 200px;
}

</style>
