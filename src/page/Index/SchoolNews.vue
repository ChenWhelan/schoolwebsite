<template>
  <div class="main1">
    <!-- 新闻列表 -->
    
    <div class="news3list">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <i class="el-icon-s-opportunity" style="color:#f07b3f;width:10px;height:10px;"></i>&nbsp;
          <span style="font-weight:bold;font-size:20px;color:#6983a5">学院新闻</span>
             <router-link
                    active-class="active"
                    to="/SchoolnewsMore"
                    style="text-decoration: none"
                  > <el-button style="float: right; padding: 3px 0" type="text">更 多>></el-button>
                  
                </router-link>
        </div>
        <router-link
          v-for="(o, index) in tableData.slice(0, 5)"
          :key="index"
          :to="{ path: '/notedetail/' +  o.newsid }"
          class="text item"
        >
          <p style="width: 80%;height: 10px; float: right">{{ o.title }}</p>
          <p style="width: 20%; float: right; color: #387298">
            {{ o.date }}
          </p>
        </router-link>
      </el-card>
      
      <br />

    </div>
    <div class="imagecard">
      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in 1"
          :key="o"
          :offset="index > 0 ? 1 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="../../images/学校风景/7.jpg"
              class="image"
            />
            <div style="padding: 14px">
              <span>学院美景</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
/* import axios from "axios"; */
export default {
  data() {
    return {
      tableData: [],

    };
  },
  methods: {
/*     to_article_content(newsid) {
  this.$router.push({
  path: `${this.ArticleList_props_Data.current_path}/article_content`,
   //根据路径跳转到文章在详情页并给详情页传递id
  query: { newsid: newsid },
  });
}, */

    async getnewss () {
      try {
    
        const res = await this.$http.get(`http://localhost:3000/api/news/getschoolnewslist`)
        console.log('success!')
        this.tableData = res.data.data
        console.log(res.data.data)

      } catch (error) {
        console.log('err！')
        this.$message({
          type: 'error',
          message: '连接失败'
        })
      }
    },
  },
  mounted() {
    this.getnewss();
  },
};
</script>


<style scoped>

.news3list {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  padding-right: 50px;
}
.box-card {
  width: 100%;
  display: flex;
  flex-flow: column;
}
.clearfix {
  height: 20px;
}
.text.item {
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row;
}
.router-link-active {
  text-decoration: none;
  color: #ad2a2a;
}
a {
  text-decoration: none;
  color: black;
  height: 10px;
}
.main1 {
  padding-top: 20px;
  width: 120%;
  flex-flow: row;
  display: flex;
  margin-left: 150px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.imagecard {
  width: 100%;
}
</style>
