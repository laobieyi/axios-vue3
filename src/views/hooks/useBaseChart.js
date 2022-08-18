// 这是将关于 echarts 图表所需的所变动的数据和操作，拆分

import { computed,ref } from 'vue';

import { baseChart } from '../data/baseChart';
// TODO 如果数据变动逻辑不复杂可以不拆分

export const useBaseChart = () => {
  // TODO 假如获取数据
  const xData = ref([]);
  setTimeout(() => {
    xData.value = ['111', '2', '3', '4', '5', '6'];
  }, 2000);
  setTimeout(() => {
    xData.value = ['444', '2', '3', '4', '5', '6'];
  }, 4000);
  const options = computed(() => baseChart(xData.value));
  return {
    xData,
    options,
  };
};
export const useBaseChart2 = () => {
  // TODO 假如获取数据
  const xData = ref([3, 4, 5, 6, 7, 8]);
  const options2 = computed(() => baseChart(xData.value));
  return {
    xData,
    options2,
  };
};
