<script setup>
import { ref } from 'vue';

const flag = ref(false)
const mouse = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 200) {
    flag.value = true
  } else if (scrollTop < 200) {
    flag.value = false
  }
}
window.addEventListener('scroll', mouse)
</script>

<template>
  <div class="content">
    <div class="content_header">
      <h2>Title</h2>
      <p>
        discription,discription,discription,discription,discription
        discription
      </p>
      <p>
        discription,discription,discription,discription,discription
        discription
      </p>
      <p>
        discription,discription,discription,discription,discription
        discription
      </p>
    </div>
    <div class="list">
      <div class="list_img" :class="[flag ? 'show' : 'hindImg']">
        <img src="./images/two.jpg" alt srcset />
        <div>Running</div>
      </div>
      <div class="list_content" :class="[flag ? 'show' : 'hind']">
        <h2>Title</h2>
        <P>
          discription,discription,discription,discription,discription
          discription
        </P>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.hindImg {
  transform: translateX(-150%);
}
.show {
  transform: translateX(0%);
}
.hind {
  transform: translateX(150%);
}
.list_content {
  width: 44%;
  height: 100%;
  transition: all 0.5s;
  font-size: 16px;
}
.content_header {
  width: 80%;
  margin: 0 auto;
  padding: 12px 0;
}
.list_img {
  width: 44%;
  max-width: 800px;
  height: 400px;
  border-radius: 4px;
  transition: all 0.5s;
  position: relative;
  div {
    position: absolute;
    right: -10%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
  }
}
img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.list {
  width: 80%;
  height: auto;
  padding: 40px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  overflow: hidden;
}
</style>