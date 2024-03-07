<template>
    <div>
      <!-- 新闻列表 -->
      <div>
        <div class="breadcumb" style="text-align:left;padding-left:20px">
<router-link to="/Home">首页</router-link> /培养方案
					</div>
          <router-link
            v-for="(o, index) in tableData"
            :key="index"
            :to="{ path: '/notedetail/' + o.newsid }"
            class="text item"
          >
            <p style="width: 80%;height: 10px; float: lright; text-align: left;padding-left: 100px;">{{ o.title }}</p>
            <p style="width: 20%; float: right; color: #387298">
              {{ o.date }}
            </p>
          </router-link>
       
        <br />

          <!-- 分页 -->
    <div class="pagina">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.currnetPage"
        :page-sizes="this.pageSizes"
        :page-size="this.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total">
      </el-pagination>
    </div>
    </div>
      </div>
    
  </template>
  
  
  <script>
  /* import axios from "axios"; */
  export default {
    name: "TrainPro",
    data() {
      return {
        tableData: [],
      pageSize: 8,
      pageSizes: [4, 8, 12, 16],
      currnetPage: 1,
      total: 0,
      
      };
    },
    methods: {
      // 修改每页数量
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      if (!this.searchChangeSize) {
        this.getnewss()
      } else {
        this.searchFenye()
      }
      // this.currnetPage = 1
    },
    // 修改当前页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currnetPage = val
      if (!this.searchChangeSize) {
        this.getnewss()
      } else {
        this.searchFenye()
      }
    },
    // 获取列表总数量
    async getListCount () {
      try {
        const res = await this.$http.get(`http://localhost:3000/api/news/gettrainproCount`)
        this.total = res.data.data[0].count
      } catch (error) {
        console.log('err！')
        this.$message({
          type: 'error',
          message: '连接失败'
        })
      }
    },

      async getnewss () {
        try {
            const startData = (this.currnetPage - 1) * this.pageSize
        const countData = this.pageSize
        const res = await this.$http.get(`http://localhost:3000/api/news/gettrainprolist?startData=${startData}&countData=${countData}`)
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

    created () {
    this.getListCount();
    this.getnewss();
  }
  };
  </script>
  
  
  <style>
  .news4list {
    width: 100%;
    display: flex;
    flex-flow: column;
    padding-top: 10px;
    justify-content: space-between;
  }

  .text.item {
    width: 100%;
    padding-bottom: 1px;
    display: flex;
    flex-flow: row;
    height: 40px;
  }
  .router-link-active {
    text-decoration: none;
    color: #ad2a2a;
  }
  a {
    text-decoration: none;
    color: black;margin-top:10px;
  }
  .main1 {
    padding-top: 20px;
    width: 980px;
  }
  
  .carousel {
    display: flex;
    flex-flow: row;
  }
  </style>
  