<template>
  <div class="col-md-10 col-sm-9 main-content">
            <div class="breadcumb" style="text-align:left;padding-left:20px">
      <router-link to="/Home">首页</router-link> /学院宣传片
    </div>
    <div class="title-bar">
      <h2>宣传片</h2>
      <br />

      <div class="title-info">
        2021-04-13 18:17:00 &nbsp;&nbsp;&nbsp;&nbsp; 作者：
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    <hr />
    <article class="article">
      <p style="text-align: center">
        <video
          class="edui-upload-video vjs-default-skin video-js"
          controls=""
          preload="none"
          width="800"
          height="450"
          src="../../images/学院宣传片.mp4"
          data-setup="{}"
          poster="../../images/学院宣传片.jpg"
        >
          <source
            src="../../images/学院宣传片.mp4"
            type="video/mp4"
          />
        </video>
      </p>
    </article>

    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>