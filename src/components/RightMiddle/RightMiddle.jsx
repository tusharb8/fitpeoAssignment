import React from 'react'
import './RightMiddle.scss'
import { useNavigate } from 'react-router-dom'
const RightMiddle = () => {
  const navigate = useNavigate()
  return (
    <div className="right-middle__main_container">
      <div className="right-middle__main_container_row">

        <div className="right-middle__main_container_row_tag">
          <img src="https://img.icons8.com/?size=100&id=vzCFrqU96tpa&format=png&color=000000" alt="" className="right-middle__main_container_row_tag_image" />
          <h4>
            Goals
          </h4>
        </div>

        <button className="right-middle__main_container_row_button" onClick={() => navigate("/goals")}>
          <img src="https://img.icons8.com/?size=100&id=vsC4kvMXFrjz&format=png&color=000000" alt="button arrow" className="right-middle__main_container_row_button_image" />
        </button>
      </div>
      <div className="right-middle__main_container_row">
        <div className="right-middle__main_container_row_tag">
          <img src="https://img.icons8.com/?size=100&id=FA5OyCTb6Zs8&format=png&color=000000
" alt="" className="right-middle__main_container_row_tag_image" />
          <h4>
            Popular Dishes
          </h4></div>


        <button className="right-middle__main_container_row_button" onClick={() => navigate("/popular")}>
          <img src="https://img.icons8.com/?size=100&id=vsC4kvMXFrjz&format=png&color=000000" alt="" className="right-middle__main_container_row_button_image" />
        </button>
      </div>
      <div className="right-middle__main_container_row">
        <div className="right-middle__main_container_row_tag">
          <img src="https://img.icons8.com/?size=100&id=O16wTqbLE5B3&format=png&color=000000" alt="" className="right-middle__main_container_row_tag_image" />
          <h4>
            Menus
          </h4></div>


        <button className="right-middle__main_container_row_button" onClick={() => navigate("/menus")}>
          <img src="https://img.icons8.com/?size=100&id=vsC4kvMXFrjz&format=png&color=000000" alt="" className="right-middle__main_container_row_button_image" />
        </button>
      </div>

    </div>
  )
}

export default RightMiddle