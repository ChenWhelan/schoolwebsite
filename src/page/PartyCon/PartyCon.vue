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
              <router-link
                active-class="active"
                to="/PartyCon/DtNotice"
                style="text-decoration: none"
              >
                <el-menu-item index="1">
                  <span slot="title">党团公示</span>
                </el-menu-item>
              </router-link>

              <router-link
                active-class="active"
                to="/PartyCon/DtOrgan"
                style="text-decoration: none"
              >
                <el-menu-item index="2">
                  <span slot="title">党团组织</span>
                </el-menu-item>
              </router-link>

              <router-link
                active-class="active"
                to="/PartyCon/DtNews"
                style="text-decoration: none"
              >
                <el-menu-item index="3">
                  <span slot="title">党团动态</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  <script>
export default {
  name: "PartyCon",
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
background-image: url(../../images/学校风景/2.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
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
  