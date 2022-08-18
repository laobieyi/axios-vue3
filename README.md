# vue3-router4-cli

基于vue3.2 + vue-cli4.x + vue-router4.x + + echarts5.x + axios 的前端项目模板

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 前端功能实现只是第一步
### 书写 vue3 建议（具体可参照view 下的 Echarts 组件的使用。）
1. 目录结构

    一个单独的模块目录可以分为以下四个目录结构：

    1. components：组件（命名要大驼峰）
    2. hooks：单独的逻辑提取（目的：提取逻辑，用于拆分代码量。代码复用，减少代码量。hooks是再其他文件定义相关逻辑，可以使用vue生命周期等，使用方法是在使用的页面先导入再调用，可以将 hooks 的状态和方法导出来）
    3. data：单独的数据（比如：JSON，Echarts 配置项，临时数据等）
    4. vue 文件

2. import 导入（只是建议）

    因为按照正常的页面书写和以上目录结构的拆分，vue文件的相关引用文件比较多，可以按照以下规则进行引用顺序，并使用空行隔开

   1. vue 内置API：生命周期，ref 等
   2. 第三方库文件：echarts，element-plus，vuex，pinia，vue-router 等
   3. 组件文件：components
   4. 静态数据：data
   5. 工具方法：（utils下的工具类）
   6. api方法：接口相关）
   7. hooks：页面引用，使用要紧邻具体牵扯到的逻辑部分


3. 代码书写

    一般代码只会包含两种结构：状态（变量）和方法（操作状态的函数）

    首先是状态：
      1. 命名尽可能的见名知意，
      2. 避免数字命名：box，box1，box2（也不方便快速搜索查找）
      3.
    其次是方法：
      1. 命名不脱离变量和实际用途，见名知意
      2. 方法和相关的变量保持位置相邻

    最后：
    逻辑模块之间应标明注释说明模块的用途，并使用空行隔开
    ``` javascript
    // 就类似这样，将逻辑分为一个个逻辑块的概念
    // 弹框相关 逻辑
    const show = ref(false)
    const showChange = () => {
      show.value = !show.value
    }

    // 表单相关 逻辑
    const queryForm = ref({})
    const onEdit = (record) => {
      // 表格点击编辑弹出表单相关内容(场景)
      showChange()
      queryForm.value = { ...record }
      ...
    }
    ```


4. 关于 axios 封装

   可以看到封装 axios 实际上是把相关逻辑进行拆分，方便后续替换和更改。
   1. index：主入口文件，外部调用都通过这个里面 export 出的 API
   2. request：创建 axios 实例， 里面需要更改为每个项目： api 主地址、token 变量、响应体逻辑和错误处理（如果现有的后台不变的话不需要改变）
   3. methods：定义一些常用方法，get、post、post（formdata类型）等
   4. response：响应体定义，通过规范定义统一的响应体结构，确保使用时的返回值一致
   5. interceptors：拦截器，主要拦截器，如果自己定义的在 index 文件中传参使用（参考index 中的 mock 拦截器使用）

5. 通用工具类

    这个项目作为一个模板项目，后续项目从这个项目迁出基础结构，用到的东西就用，用不到的东西就删，不要保留多余的代码，后续有需要再来拷贝，项目中好用的常用的方法反哺到模板项目中。


相同的代码出现三次的时候就该提出代码复用，封装、提取一定是自己察觉这个东西会频繁出现或逻辑相同的东西。

不要害怕写注释，当一个变量或者方法不能直接理解其含义的时候就可以添加注释便于理解。太简单的东西也没必要写注释。

多重构代码，注重代码质量，一天实现的页面或许和三天实现的页面表面看着并无区别，但要考虑后续维护添加新功能的便利以及不是自己来维护的成本。因为公司的项目一般变动偏多，如果不考虑的话，维护只会越来越难，特别是从其他地方来的代码一定要弄清楚弄明白，如果需要重构就重构，功能实现只是第一步。
