import React from 'react'
import StockChartSeriesWidget from './StockChartSeriesWidget';
import IndexChart from './IndexChart'
import SP from './SP'


export default function Search() {
    const [stockData, setStockData] = React.useState();
    const KEVIN_URL = "http://127.0.0.1:5000";
    function search(){
        fetch(`${KEVIN_URL}/stock-data`)
        .then(response => response.json())
        .then(data => {
            const data1 = JSON.parse(data.S);
            const data2 = JSON.parse(data.D);
            const data3 = JSON.parse(data.N);
            console.log(data1);
            setStockData([data1, data2, data3]);
        })
        .catch(error => {
            console.error(error);
        });
    }

  return (
    <>
        <button
            onClick={search}
        >
        Search
        </button>
        {stockData ? <SP stockData = {stockData}/> : <></>}
    </>


  )
}
