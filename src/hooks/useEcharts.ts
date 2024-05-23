import * as echarts from 'echarts' // 引入 echarts
import 'echarts-liquidfill' // 引入水球图
import json from '@/views/screen/components/Map/china.json'

echarts.registerMap('china', json as any) // 注册地图

export default function (chartsRef: Ref<HTMLDivElement>, options: any): void {
  onMounted(() => {
    nextTick(() => {
      // 获取 echarts 类的实例
      const myChart = echarts.init(chartsRef.value)

      // 设置实例配置项
      myChart.setOption(options)
    })
  })
}
