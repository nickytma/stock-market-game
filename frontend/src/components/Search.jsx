import React from 'react'

export default function Search() {

    function search(){
        fetch('http://localhost:5000/stock-data')
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
