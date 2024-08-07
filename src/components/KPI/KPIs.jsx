import React from 'react'
import sampleData from '../sampleData'
import "./KPIs.scss"
import Donut1 from '../Donut1'
const KPIs = () => {
    const TotalOrders = sampleData.Sheet1.length
    const TotalCost = sampleData.Sheet1.map((e, sum) => sum = sum + e.cost).reduce((sum, i) => sum + i)
    const TotalDiliveredYes = sampleData.Sheet1.filter((e) => e.dilivered == "yes")

    const TotalDiliveredNo = sampleData.Sheet1.filter((e) => e.dilivered == "no")

    const TotalNotDiviverd = TotalDiliveredNo.map((e, sum) => sum = e.cost).reduce((sum, i) => sum + i)

    const TotalDilivered = TotalDiliveredYes.map((e, sum) => sum = e.cost).reduce((sum, i) => sum + i)

    const TotalProfit = (((parseInt(TotalCost) - parseInt(TotalNotDiviverd)) / parseInt(TotalCost)) * 100)

    return (
        <div className="main-kpi-content-container">
            <div className="main-kpi-content-container__mini-container">
                <div className="main-kpi-content-container__mini-container__icon">
                    <img src=" https://img.icons8.com/?size=100&id=VDKuEs5C0vXa&format=png&color=000000" alt="Total Orders" className="main-kpi-content-container__mini-container__icon__img" /><br />
                </div>
                <div className="main-kpi-content-container__mini-container__name"><b>Total Orders</b></div>
                <div className="main-kpi-content-container__mini-container__digit">
                   <b> {TotalOrders}</b>
                </div>
            </div>
            <div className="main-kpi-content-container__mini-container">
                <div className="main-kpi-content-container__mini-container__icon">
                    <img src="  https://img.icons8.com/?size=100&id=13525&format=png&color=000000" alt="Total Orders" className="main-kpi-content-container__mini-container__icon__img" /><br />
                </div>
                <div className="main-kpi-content-container__mini-container__name"><b>Total deliveries</b></div>
                <div className="main-kpi-content-container__mini-container__digit">
                   <b> {TotalDiliveredYes.length}</b>
                </div>
            </div>
            <div className="main-kpi-content-container__mini-container">
                <div className="main-kpi-content-container__mini-container__icon">
                    <img src=" https://img.icons8.com/?size=100&id=63688&format=png&color=000000" alt="Total Orders" className="main-kpi-content-container__mini-container__icon__img" /><br />
                </div>
                <div className="main-kpi-content-container__mini-container__name"><b>Total Cancelled</b></div>
                <div className="main-kpi-content-container__mini-container__digit">
                   <b> {TotalOrders}</b>
                </div>
            </div>
            <div className="main-kpi-content-container__mini-container">
                <div className="main-kpi-content-container__mini-container__icon">
                    <img src=" https://img.icons8.com/?size=100&id=104073&format=png&color=000000" alt="Total Orders" className="main-kpi-content-container__mini-container__icon__img" /><br />
                </div>
                <div className="main-kpi-content-container__mini-container__name"><b>Total Revenue</b></div>
                <div className="main-kpi-content-container__mini-container__digit">
                <b> {(TotalProfit).toFixed(2)} %</b>
                </div>
            </div>


        </div>
    )
}

export default KPIs