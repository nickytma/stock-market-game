import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import stockChart from 'highcharts/modules/stock';

stockChart(Highcharts);
const StockChartSeriesWidget = ({ stockData }) => {

  const seriesData = Object.entries(stockData).map(([key, value]) => [parseInt(key), value]);
  console.log(seriesData);

  const options = {
    rangeSelector: {
      selected: 4,
    },
    title: {
      text: 'Stock Prices',
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%b %e', new Date(this.value));
        },
      },
    },
    series: [
      {
        name: 'Stock',
        data: seriesData,
      },
    ],
      tooltip: {
        formatter: function () {
          const date = Highcharts.dateFormat('%b %e, %Y', new Date(this.x));
          return '<b>' + date + '</b><br/>' + "Value: " + Highcharts.numberFormat(this.y, 2);
        },
      },
    };

  return <div style={{ width: '500px', height: '600px' }}>
    <HighchartsReact highcharts={Highcharts} options={options} constructorType={'stockChart'}/>
  </div>
};

export default StockChartSeriesWidget;
