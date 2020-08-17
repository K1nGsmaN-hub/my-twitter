import React from "react";
import './app-header.css'

const AppHead = ({liked, elemsCount}) => {
  return (
    <div className="app-header d-flex">
      <h1>Ilya Rydinskiy</h1>
      <h2>{elemsCount} записей, из них понравилось {liked}</h2>
    </div>
  )
}

export default AppHead
