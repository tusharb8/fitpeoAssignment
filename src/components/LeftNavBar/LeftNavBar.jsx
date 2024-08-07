import React from 'react'
import "./leftNavBar.scss"
const LeftNavBar = () => {
  return (
    <div className="left-container">
      <div className="left-container__upper">



        <span className="left-container__upper__icon">

          <img className="left-container__upper__icon__img" src="https://img.icons8.com/?size=100&id=6AGHyLA8bTw4&format=png&color=000000" alt="home_icon"  />

        </span>

        <span className="left-container__upper__icon">

          <img className="left-container__upper__icon__img" src="https://img.icons8.com/?size=100&id=8302&format=png&color=000000" alt="barChart"  />

        </span>

        <span className="left-container__upper__icon">

          <img  className="left-container__upper__icon__img" src=" https://img.icons8.com/?size=100&id=98229&format=png&color=000000" alt="paste_icon"  />

        </span>

        <span className="left-container__upper__icon">

          <img className="left-container__upper__icon__img" src="https://img.icons8.com/?size=100&id=7991&format=png&color=000000" alt="wallet_icon"  />

        </span>

        <span className="left-container__upper">

          <img className="left-container__upper__icon__img" src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000" alt="shopping_bag"  />

        </span>
      </div>

      <div className="left-container__lower">
        <span className="left-container__lower__icon">
          <img className="left-container__lower__icon__img"  src="https://img.icons8.com/?size=100&id=24338&format=png&color=000000" alt="" />
        </span>
      </div>


    </div>
  )
}

export default LeftNavBar