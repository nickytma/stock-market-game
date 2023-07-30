import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import stockChart from 'highcharts/modules/stock';

stockChart(Highcharts);
const IndexChart = ({ stockData }) => {

  const series1 = Object.entries(stockData[0].Close).map(([key, value]) => [parseInt(key), value]);
  const series2 = Object.entries(stockData[1].Close).map(([key, value]) => [parseInt(key), value]);
  const series3 = Object.entries(stockData[2].Close).map(([key, value]) => [parseInt(key), value]);

  const options = {
    rangeSelector: {
      selected: 4,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%b %e', new Date(this.value));
        },
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true,
        events: {
          legendItemClick: function(){
            return false;
          }
        }
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },
    series: [{
      name: 'S&P 500',
      data: series1
    }, {
      name: 'Dow 30',
      data: series2
    }, {  
      name: 'Nasdaq',
      data: series3
    }],
    };

  return <div style={{ width: '500px', height: '600px' }}>
    <HighchartsReact highcharts={Highcharts} options={options} constructorType={'stockChart'}/>
  </div>
};

export default IndexChart;
