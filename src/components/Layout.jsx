import React from 'react'
import "./Layout.scss"
import NavbBar from './navbar/NavbBar'
import LeftNavBar from './LeftNavBar/LeftNavBar'
import KPIs from './KPI/KPIs'
import Donut1 from './Donut1'
import SampleBarChart from "./SampleBarChart"
import RightMiddle from "./RightMiddle/RightMiddle"
import Table from './Table/Table'
import CustomerFeedback from './feedback/CustomerFeedback'

const Layout = () => {

    return (
        <div className='Layout-main-container'>
            <div className='Layout-main-container__navbar-cont'>
                <NavbBar />
            </div>

            <div className='Layout-main-container__content-cont'>
                <div className='Layout-main-container__content-cont__leftNavbar-cont'>
                    <LeftNavBar/>
                </div>
                <div className='Layout-main-container__content-cont__right-content'>
                    <div className='Layout-main-container__content-cont__right-content__title'>
                            <span>
                            Dashboard
                            </span>
                    </div>
                    <div className='Layout-main-container__content-cont__right-content__article-cont'>
                        <div className='Layout-main-container__content-cont__right-content__article-cont__left-cont'>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__left-cont__summary'>
                                <KPIs/>
                            </div>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__left-cont__activity'>
                          <SampleBarChart height={"100%"} width={"100%"}/>
                            </div>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__left-cont__table'>
                             <Table/>
                            </div>
                        </div>

                        <div className='Layout-main-container__content-cont__right-content__article-cont__right-cont'>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__right-cont__summary'>
                                <Donut1 height={100}/>
                            </div>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__right-cont__activity'>
                                <RightMiddle/>
                            </div>
                            <div className='Layout-main-container__content-cont__right-content__article-cont__right-cont__table'>
                                <CustomerFeedback/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout