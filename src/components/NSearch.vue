<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
          <div class="input">
        <el-input class="input"  placeholder="请输入关键字" v-model="inputValue" ></el-input>
          </div>
          
          <div class="sbutton">
        <router-link to="/SearchList"><el-button icon="el-icon-search" circle @click="searchData" ></el-button></router-link>
</div>
</div>
</template>

<script>
export default {
    data () {
      return {
        inputValue: ''
      }
    },
    methods: {
      searchData () {
        this.$emit('searchData', this.inputValue)
      }
    }
}
</script>

<style scoped>
.input{
  float: left;
  padding-left: 20px;
}
  .sbutton{
    float: left;
    margin-left: 20px;
  }
  .el-input{
    width: 300px;
  }
</style>