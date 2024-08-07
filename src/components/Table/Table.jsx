import React from 'react'
import "./Table.css"
import sampleData from '../sampleData'
const Table = () => {
    return (
        <div className="table__main__container">

            <div className="table__main__container__title">
                <h3>Recent Orders</h3>
            </div>
            <div className="table__main__container__tableData">
                <table>
                    <thead>
                        <tr>
                            <th><b>Customer</b></th>
                            <th>Order No.</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{sampleData.Sheet1.map(e => <tr key={e.date}><td> {e.customer}</td>
       
                        <td>{e.orderNo}</td>
                     
                        <td>{e.cost}</td>
                    
                        <td>{e.dilivered}</td>
                    </tr>)}
                    
                   </tbody>
                </table>

            </div>
        </div>
    )
}

export default Table