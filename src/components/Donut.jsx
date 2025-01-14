import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
// const data = {
//     labels: ["red","yellow","blue"],
//     datasets: [{
//         label: 'Poll',
//         data: [3, 6,7],
//         backgoundColor: ["black", "red","green"],
//         borderColor: ["black", "red","green"],
//     }]
// }
const options = {

}
const Donut = () => {
    return (
        <div>
            <Doughnut>
                data ={data}
                options ={options}
            </Doughnut>
        </div>
    )
}

export default Donut