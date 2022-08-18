<script setup>
// TODO Echarts 组件 需要传递 id 防止 dom 不唯一，isDart 为是否是黑暗模式，options 为配置项。
// TODO 动态监听 options 配置项的变动，实时更新 echarts 图表
import { watch, onMounted, toRefs } from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
  id: {
    type: String,
    default: 'chart',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    required: true,
    default: {},
  },
});
const { id, dark, options } = toRefs(props);

let chart = null;

watch(
  () => options.value,
  (newOptions) => {
    if (newOptions) {
      chart.setOption(options.value, true);
    }
  },
  { deep: true },
);
const resizeHandler = () => {
  chart.value.resize();
};
onMounted(() => {
  const dom = document.getElementById(id.value);
  chart = echarts.init(dom, dark.value ? 'dark' : '');
  chart.setOption(options.value, true);
  window.addEventListener('resize', resizeHandler);
});
</script>

<template>
  <el-row :id="id"> </el-row>
</template>
