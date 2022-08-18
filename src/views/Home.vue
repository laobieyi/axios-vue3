<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 提供 echarts 的另一种使用方式 将逻辑完全拆分成单个模块，只需要在使用的时候引入就行，减少逻辑耦合，代码重复 -->
    <Echarts id="chart1" style="width: 400px; height: 400px" :options="options" />
    <Echarts id="chart2" style="width: 400px; height: 400px" :options="options2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import api from '@/api/mock.js'
import Echarts from '@/components/Echarts/Echarts.vue'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { useBaseChart, useBaseChart2 } from './hooks/useBaseChart.js'
const { options } = useBaseChart()
const { options2 } = useBaseChart2()

console.log(options2, 89, options)
</script>
