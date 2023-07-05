import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
    series: [
      {
        name: 'Stock',
        data: seriesData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StockChartSeriesWidget;
