import { Column } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import { ModelWrapper } from './style';

const Chart= () => {
    // const data = [
    //     {
    //       country: 'Asia',
    //       year: '1750',
    //       value: 502,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '1800',
    //       value: 635,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '1850',
    //       value: 809,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '1900',
    //       value: 947,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '1950',
    //       value: 1402,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '1999',
    //       value: 3634,
    //     },
    //     {
    //       country: 'Asia',
    //       year: '2050',
    //       value: 5268,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1750',
    //       value: 106,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1800',
    //       value: 107,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1850',
    //       value: 111,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1900',
    //       value: 133,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1950',
    //       value: 221,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '1999',
    //       value: 767,
    //     },
    //     {
    //       country: 'Africa',
    //       year: '2050',
    //       value: 1766,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1750',
    //       value: 163,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1800',
    //       value: 203,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1850',
    //       value: 276,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1900',
    //       value: 408,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1950',
    //       value: 547,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '1999',
    //       value: 729,
    //     },
    //     {
    //       country: 'Europe',
    //       year: '2050',
    //       value: 628,
    //     },
    //   ];
    
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    useEffect(() => console.log('list  ', data))

    const asyncFetch = () => {
        fetch('http://localhost:8080/api/letter/all')
          .then((response) => {
            return response.json();
        })    
          .then((json) => {
            const res = json
            console.log(res);
            const list = res.map(item => {
                if (item.relativePos) {
                    item.relative = '积极';
                    item.value = item.relativePos
                } else {
                    item.relative = '消极';
                    item.value = item.relativeNav
                }
                return {
                    relative: item.relative,
                    value: Number(item.value),
                    _id: String(item._id).slice(0, 5)
                }
            });
            setData(list)
            })
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };
    
    const config = {
    data,
    xField: '_id',
    yField: 'value',
    seriesField: 'relative',
    isPercent: true,
    isStack: true,
    label: {
        position: 'middle',
        content: (item) => {
        return item.value.toFixed(2);
        },
        style: {
        fill: '#fff',
        },
    },
    slider: {
        start: 0.1,
        end: 0.2,
    }
    };
    return <Column {...config} />;
}


export default function Model() {
    


    return (
        <ModelWrapper>
            <Chart/>
        </ModelWrapper>
    )
}
