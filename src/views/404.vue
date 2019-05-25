<template>
  <div>
    <div class="app-container">
      <el-col :span="12">
        <img :src="img_404" alt="404" class="img-style">
      </el-col>
      <el-col :span="12">
        <div style="margin-left: 100px;margin-top: 60px">
          <h1 class="color-main">404 not found!</h1>
          <div style="color:#909399;font-size: 14px">Please check the correctness of the url </div>
          <el-button style="margin-top: 20px" type="primary" round @click="handleGoMain">return to home page</el-button>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import img_404 from '@/assets/images/404.png';

  export default {
    name: 'wrongPage',
    data() {
      return {
        img_404
      }
    },
    methods: {
      handleGoMain() {
        this.$router.push({path: '/'})
      }
    },
  }
</script>

<style scoped>
  .app-container {
    width: 80%;
    margin: 120px auto;
  }

  .img-style {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
