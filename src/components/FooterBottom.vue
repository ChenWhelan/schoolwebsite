<template>
    <div>
      <div class="footwai">
        <div class="commonbox">
          <div class="foot">
            <div :class="[cleintW >= 768 ? 'foot1' : 'foot1 mobile_foot']">
              <div class="foot1n">
<!--                 <h3 class="title">快速连接</h3>
                <ul>
                  <li class="left">
                    <a style="line-height: 20px;">学校校历</a>
                    <a style="line-height: 40px;">校车时刻表</a>
                    <a style="line-height: 60px;">校园导航</a>
                  </li>
                  <li class="right">
                    <a style="line-height: 20px;">校园GIS</a>
                    <a style="line-height: 40px;">校园航拍全景</a>
                    <a style="line-height: 60px;">广海大新闻网</a>
                  </li>
                </ul> -->
  <img src="../images/badge.png" style="height: 120px;">
              </div>
            </div>              
            <div :class="[cleintW >= 768 ? 'foot2' : 'foot2 mobile_foot']">
              <div class="foot2n">
                <h3 class="title">联系我们</h3>
                <p>广州南方学院 电气与计算机工程学院</p>
                <p>地址：中华人民共和国 广东省 广州市 从化区 温泉镇 广州南方学院2号教学楼104B室</p>
                <p>电话：020-61787104(行政办)   020-61787504(学工办)）</p>
              </div>
            </div>
            <div :class="[cleintW >= 768 ? 'foot3' : 'foot3 mobile_foot']">
              <div class="foot3n">
                <div class="foot3n_1">
                  <img alt="" src="../images/4.jpg" />
                  <p>电气学院微信平台</p>
                </div>

              </div> 
              <div class="foot3n_3">
                <p>Copyright ©版权所有：广州南方学院 电气与计算机工程学院</p>

              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </template>
  <script>
 /*  import Util from "../../utils"; */
  export default {
    data() {
      return {
        cleintW: 769,
      };
    },
    methods: {
/*       setSise: Util.throttle(function () {
        this.cleintW = document.body.clientWidth;
      }, 200), */
    },
    mounted() {
/*       this.setSise();
      window.addEventListener("resize", this.setSise); */
    },
    destroyed() {
/*       window.removeEventListener("resize", this.setSise); */
    },
  };
  </script>
  <style lang="less">
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .footwai {
    background-color:  #ea5455;
    .foot {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 8% 0px;
      color: #fff;
      .foot1 {
        width: 15%;
        float: left;
        font-size: 12px;
        line-height: 28px;
        margin-top:-70px;
        .foot1n {
          width: 95%;
          max-width: 220px;
          .title {
            /* font-size: @font14; */
            line-height: 32px;
          padding-bottom: 8px;
          margin-bottom: 8px;
          color: #fff;
          border-bottom: 1px solid #fff;
          }
          ul {
            margin: 0px;
            padding: 0px;
            text-decoration: none;
            list-style: none;
            font-family: 黑体;
            border: 0px;
            .left {
              width: 55%;
              float: left;
              a {
                color: #fff;
                display: block;
                
              }
            }
            .right {
              width: 40%;
              float: right;
              a {
                color: #fff;
                display: block;
              }
            }
          }
        }
      }
      .foot2 {
        width: 27.8%;
        float: left;
        font-size: 12px;
        line-height: 15px;
        margin-top:-70px;
        .title {
          /* font-size: @font14; */
          line-height: 32px;
          padding-bottom: 8px;
          margin-bottom: 8px;
          color: #fff;
          border-bottom: 1px solid #fff;
        }
      }
  
      .foot3 {
        width: 32%;
        float: right;
        .foot3n {
          width: 100%;
          max-width: 182px;
          .foot3n_1 {
            width: 60%;
            float: left;
            line-height: 32px;
            font-size: 10px;
            text-align: center;
            margin-right: 3px;
            margin-top: -70px;
            img {
              display: block;
              text-align: center;
              border: 0px;
              width: 100%;
            }
          }
          .foot3n_2 {
            background: #fff;
            select {
              width: 100%;
              height: 26px;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
              background: #fff url(../images/4.jpg) right
                center no-repeat;
              color: #5d5d5d;
              font-size: 12px;
              padding-left: 10px;
              background-size: 24px auto;
              -webkit-background-size: 24px auto;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none; /*去掉下拉箭头*/
            }
          }
        }
        .foot3n_3 {
          float: left;
          line-height: 24px;
          font-size: 12px;
          margin-top: 0px;
        }
      }
  
      .mobile_foot {
        overflow: hidden;
        width: 100%;
        float: right;
        font-size: 12px;
        line-height: 28px;
        margin-bottom: 16px;
        .foot1n{
            overflow: hidden;
            max-width: 100%;
        }
      }
    }
  }
  </style>