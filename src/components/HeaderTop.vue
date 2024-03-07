<template>
  <div>
    
      <div class="header">
          <div class="box1">
                  <img src="../images/logo.png">
                  
          </div>

</div>
      </div>


</template>

<script>
  export default {
      name: "HeaderTop",
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
   
  }
  
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90px;
      background-color: #2d4059;
      color: #ffffff;
      

      /*吸顶效果*/
/*      position: sticky;
      position: -webkit-sticky;    
      top: 0px;                   
 */
  }
  .box1{
      display: flex;
      margin-right:10px;

      align-items:bottom;

  }
   img{
    margin-left:20px;
      width: 270px;
      height: 70px;
      align-items:bottom;
      text-align: bottom;
  }

</style>
