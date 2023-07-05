import React from 'react'

export default function Search() {
    const KEVIN_URL = "http://127.0.0.1:5000";
    function search(){
        fetch(`${KEVIN_URL}/stock-data`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
  });
    }

  return (
    <button
        onClick={search}
    >
        Search
    </button>
  )
}
