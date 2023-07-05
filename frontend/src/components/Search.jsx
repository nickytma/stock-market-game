import React from 'react'
import StockChartSeriesWidget from './StockChartSeriesWidget';


export default function Search() {
    const [stockData, setStockData] = React.useState();
    const KEVIN_URL = "http://127.0.0.1:5000";
    function search(){
        fetch(`${KEVIN_URL}/stock-data`)
        .then(response => response.json())
        .then(data => {
            data = JSON.parse(data);
            console.log(data);
            setStockData(data.Close);
            // console.log(data.Close);
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
        {stockData ? <StockChartSeriesWidget stockData={stockData}/> : <></>}
    </>
   

  )
}
