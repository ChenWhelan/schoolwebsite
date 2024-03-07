<template>
    <div>
      <div class="breadcumb">
<router-link to="/Home">首页</router-link> /通信工程
					</div>
    <div class="box">
        <el-row><router-link v-for="(v, index) in list" :key="index" :to="{ path: '/Tdetail/' + v.id }"> 
  <el-col :span="6">
    
    <el-card :body-style="{ padding: '0px' }" style="height:350px">
      <div class="photo">  <p style="text-align: center;" v-html="v.photo"></p>
    </div>
      <div style="margin: 0px;">
        <h3>{{v.name}}&nbsp;{{v.job}}</h3>
      </div>
    </el-card>
  </el-col></router-link>
</el-row>
	</div>
    <br/>
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
</template>

<script>
 export default {   
     data() {
      return {
    list: [],
      pageSize: 8,
      pageSizes: [4, 8, 12, 16],
      currnetPage: 1,
      total: 0,
      
      };
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },  // 修改每页数量
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      if (!this.searchChangeSize) {
        this.getteacher()
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
        this.getteacher()
      } else {
        this.searchFenye()
      }
    },
    // 获取列表总数量
    async getListCount () {
      try {
        const res = await this.$http.get(`http://localhost:3000/api/news/getcommunicationCount`)
        this.total = res.data.data[0].count
      } catch (error) {
        console.log('err！')
        this.$message({
          type: 'error',
          message: '连接失败'
        })
      }
    },

      async getteacher () {
        try {
            const startData = (this.currnetPage - 1) * this.pageSize
        const countData = this.pageSize
        const res = await this.$http.get(`http://localhost:3000/api/news/getcommunication?startData=${startData}&countData=${countData}`)
          console.log('success!')
          this.list = res.data.data
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
    this.getteacher();
  }
    
  };

</script>

<style scoped>
.box{
    padding:30px;
}

  .photo{
    height: 200px;
  }
  .el-card{
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .el-card p{
    margin-top: 10px;
  }
</style>





