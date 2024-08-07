import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import sampleData from "./sampleData"
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const values = {
    "Burger": 0, "HotWings": 1, "Momos": 2, "cheeseBurger": 3, "ChickenGrrilled": 4
}




const SampleBarChart = ({height,width}) => {
    console.log("sampleData.Sheet1", sampleData.Sheet1)
    const [chartData, setChartdata] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        const newChartData = {
            labels: ["Burger", "HotWings", "Momos", "cheeseBurger", "ChickenGrrilled"],
            datasets: [{
                label: "cost",
                backgroundColor: 'aqua',
                data: [0, 0, 0, 0, 0]
            }]
        }
        sampleData.Sheet1.forEach((d, i) => {
            // console.log(d,i)
            // newChartData.labels.push(d.menu);
            // const data ={
            //     data:d.cost,
            //     label:"cost"
            // }
            newChartData.datasets[0].data[values[d.menu]] = newChartData.datasets[0].data[values[d.menu]] + d.cost
        });

        setChartdata(newChartData)
        console.log("newChartData", newChartData)
    }, [])

    const data = {
        labels: ["Burger", "HotWings", "Momos", "cheeseBurger", "ChickenGrrilled"],
        datasets: [
            {
                label: 'cost',
                data: [3, 6, 20],
                backgroundColor: 'aqua',
                // borderColor:'blue',
                // borderWidth:1,
                borderRadius: 5
            }
        ]
    }
    const options = {

    }
    return (
        <div style={{width: width, height: height}}>
            <Bar
                data={chartData} >

            </Bar>
        </div>
    )
}

export default SampleBarChart