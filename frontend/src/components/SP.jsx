import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SP = ({ stockData }) => {
    const spData = Object.entries(stockData[0].Close).map(([key, value]) => [parseInt(key), value]);
    let n = Object.keys(spData).length;
    let [key1, [time1, curVal]] = Object.entries(spData)[n - 1];
    let [key2, [time2, prevVal]] = Object.entries(spData)[n - 2];
    let flat = curVal - prevVal;
    let percent = (curVal - prevVal) / prevVal * 100;
    console.log(curVal, flat, percent);

    const options = {
        title: {
            text: "",
        },
        xAxis: {
            visible: false,
        },
        yAxis: {
            visible: false,
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        series: [
          {
            data: spData,
          },
        ],
        };
    
      return <div style={{ width: '500px', height: '600px' }}>
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
};

export default SP;
