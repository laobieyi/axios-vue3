<template>
  <div id="nav">
    <el-button type="primary">中文间隔</el-button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about"> About </router-link>
    <div></div>
  </div>
  <el-config-provider size="default" :locale="zhCn" :button="{ autoInsertSpace: true }" :message="{ max: 3 }">
    <router-view />
  </el-config-provider>
  <!-- <div style="width: 400px; height: 400px">
    <Echarts></Echarts>
  </div> -->
</template>
<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'; // 需要新加的代码
import { onMounted } from 'vue';

import { useCounterStore } from '@/stores/counter';

import { mockList, mockLists } from './api/mock';
const store = useCounterStore();
// 1. 可以直接修改
console.log(store.counter++);
// 2. 通过内置api修改
store.$patch({ count: store.counter + 1 });
console.log(store.counter);
// 3. 使用自定义方法修改
store.increment();
console.log(store.counter);
onMounted(async () => {
  let res = await mockList();
  let result = await mockLists();
  console.log(res, result);
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
