<script></script>
<template>
  <div class="footer">
    <div class="footer_content">
      <div>
        <span>关于我</span>
        <span>法律声明</span>
        <span>合作交流</span>
      </div>
      <div>
        <span>App下载</span>
        <span>联系我</span>
        <span>建议</span>
      </div>
    </div>
    <div class="footer_f">
      <p>
        Copyright © 2022-now • Wrote and built by PengMao
        <a href>蜀ICP备20004855号-1</a>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
.footer_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  div {
    span {
      font-size: 14px;
      display: block;
      margin-top: 6px;
      color: #999999;
      cursor: pointer;
    }
    span:hover {
      text-decoration: underline;
    }
  }
}
.footer_f {
  position: absolute;
  bottom: 0px;
  width: 100%;
  p {
    color: #999999;
    text-align: center;
  }
}
.footer {
  position: relative;
  height: 180px;
  width: 100%;
  overflow: hidden;
}
</style>