import {  CoordWrapper } from "./style";
import { Scatter } from '@ant-design/plots';
import { useEffect, useState } from "react";


const Chart = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('http://localhost:8080/api/user/all')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      appendPadding: 10,
      data,
      xField: 'areaX',
      yField: 'areaY',
      shape: 'circle',
      colorField: '_id',
      size: 4,
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa',
          },
        },
      },
      xAxis: {
        min: 0,
        grid: {
          line: {
            style: {
              stroke: '#eee',
            },
          },
        },
        line: {
          style: {
            stroke: '#aaa',
          },
        },
      },
    };
  
    return <Scatter {...config} />;
  };

export default function Coord() {
    return (
        <CoordWrapper>
            <Chart/>
        </CoordWrapper>
    )
}