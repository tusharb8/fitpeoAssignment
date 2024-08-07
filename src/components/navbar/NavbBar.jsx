import React from 'react'
import "./NavBar.scss"
const NavbBar = () => {
    return (
        <div className='navBar_main_container'>
            <div className="navBar_main_container__navbar_windows">
                <img className="navBar_main_container__navbar_windows__img"
                    src='https://img.icons8.com/?size=100&id=6zuiVonj6yhz&format=png&color=000000'
                    alt='windows_icon' />
            </div>
            <div className="navBar_main_container__navbar_searchBar">
                <input className="navBar_main_container__navbar_searchBar__input"
                    placeholder="search">
                </input>
            </div>
            <div className="navBar_main_container__navbar_combined">
                <span className="navBar_main_container__navbar_combined__icon">
                    <img className="navBar_main_container__navbar_combined__icon__img" src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000"
                        alt="mail" />
                </span>
                <span className="navBar_main_container__navbar_combined__icon">
                    <img className="navBar_main_container__navbar_combined__icon__img" 
                        src="https://img.icons8.com/?size=100&id=fcG5IOptfh58&format=png&color=000000"
                        alt="notification_bell"
                    />
                </span>
                <span className="navBar_main_container__navbar_combined__icon">
                    <img className="navBar_main_container__navbar_combined__icon__img" 
                        src="https://img.icons8.com/?size=100&id=83190&format=png&color=000000"
                        alt="user_icon"
                    />
                </span>
            </div>
        </div>
    )
}

export default NavbBar