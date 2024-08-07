import React, { useRef, useEffect } from 'react'
import { Chart } from 'chart.js/auto'


const Donut1 = ({ height, width }) => {

    const chartRef = useRef(null)
    const chartInstance = useRef(null)
    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                // labels: [
                //     "Burger", "HotWings", "Momos", "cheeseBurger", "ChickenGrrilled"
                // ],
                datasets: [{
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(157, 128, 60)',
                        'rgb(28, 210, 113)',
                        'rgb(221, 226, 88)',

                    ],
                    data: [20, 15, 25, 20, 20],
                    // circumference:[
                    //     2,2,2,2
                    // ]
                }
                ],

            },
            options: {
                radius: height / 2.9,
                height: height
            }
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, [])
    return (
        <div style={{ height: height, width: width }}>
            <canvas ref={chartRef} style={{ width: "30px", height: "20px" }} />
           
        </div>
    )
}

export default Donut1