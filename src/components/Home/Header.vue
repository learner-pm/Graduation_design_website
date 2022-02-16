<script></script>
<template>
  <div class="app_header">
    <h2 class="app_header_title">Running</h2>
    <nav class="app_header_nav">
      <span>关于</span>
      <span>实时</span>
      <span>数据</span>
      <span>Sign in/Create Account</span>
    </nav>
  </div>
</template>
<style scoped lang="less">
.app_header_nav {
  position: absolute;
  top: 0;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  height: auto;
  padding: 20px 0;
  span {
    position: relative;
    margin-left: 30px;
    cursor: pointer;
  }
  span::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #e6f7ff;
    top: 100%;
    right: 1%;
    transition: all 0.4s;
  }
  span:hover::after {
    width: 101%;
  }
  span:hover {
    color: #e6f7ff;
  }
  span:last-child {
    font-size: 16px;
    transition: all 0.4s;
  }
  span:last-child:hover {
    transform: scale(1.2);
  }
}
.app_header_title {
  font-size: 60px;
  margin-top: -160px;
}
.app_header {
  height: 832px;
  width: 100%;
  background-image: url("./images/one.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
</style>