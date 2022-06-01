import { UserWrapper } from "./style";
import ReactECharts from 'echarts-for-react';

const Chart = () => {
    const option = {
        title: {
          text: '用户 & 信件'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['用户','信件']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['2022-4-19','2022-4-24', '2022-4-25','2022-5-1','2022-5-2','2022-5-3','','2022-5-7','2022-5-29']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'用户',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[4, 2, 0, 1, 0, 3, 4, 0, 2]
          },
          {
            name:'信件',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 1, 0, 5, 16, 3, 5, 7, 4]
          }
        ]
      };
    
      return <ReactECharts
        option={option}
        style={{ height: 400 }}
      />;
}



export default function User() {
    return (
        <UserWrapper>
            <Chart/>
        </UserWrapper>
    )
}