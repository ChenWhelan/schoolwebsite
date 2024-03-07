<template>
    <div class="main">
      <el-container>
        <el-container>
          <el-main>
            <div class="col-md-10 col-sm-9 main-content">
              <el-button type="primary" @click="$router.back()" style="float:left">←返回</el-button>
              <div class="title-bar">
                <h2 style="font-size: 24px">{{ notes.name }}&nbsp;{{notes.job}}</h2>
                <br />

              </div>
            
              <hr />  <br/>
              <p style="text-align: center;" v-html="notes.photo"></p>
              <article class="article">
                <p v-html="notes.introduce"></p>
              </article>
  
              <hr />
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
      
      <script>
  import axios from "axios";
  export default {
    name: "NoteDetails",
    data() {
      return {
        id:this.$route.params.id,
        name: "",
        job: "",
        photo: "",
        introduce:"",
        notes: {
          Tdetail: [],
          name: "",
        job: "",
        photo: "",
        introduce:"",
        },
      };
    },
    created() {
      this.getDetail();
    },
    methods: {
      getDetail() {
        //文章获取
        axios.get("http://localhost:3000/api/news/Sdetail/" + this.id).then((res) => {
          let r = res.data;
          console.log(r)
          if (r.flag == true) {
            this.$notify.error({
              title: "错误",
              message: r.msg,
            });
          }
  /*         this.notes.newsid = res.data[0].newsid; */

          this.notes.name = res.data[0].name;
          this.notes.job = res.data[0].job;
          this.notes.photo = res.data[0].photo;
          this.notes.introduce= res.data[0].introduce;
          /*       this.notes.circleUrl =
          "http://localhost:3000/uploads/" + res.data[0].user_no + ".jpg"; */
        });
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
    height: auto;
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

    background-size: 100% 100%;
  }
  .main p{
    text-align: left;
    font-size: 18px;
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
      