import React from 'react'
import "./Goals.css"
const Goals = () => {
    return (
        <div className='goals'>
            <h1>Goals</h1>
            <div className='goalContainer'>
                <div className='tagContainer'>
                    <h2>
                        <b>
                            Customer Experience :-
                        </b>
                        Provide an outstanding patron experience, establish customer loyalty, and create a sense of loyalty among regular customers.
                    </h2>
                </div>
                <div className='tagContainer'>
                    <h2>
                        <b>
                            Innovation and Growth :-
                        </b>
                        Be open to growing and evolving, with goals for implementing new initiatives, such as a gift card sales program, and leveraging digital tools to improve operations.
                    </h2>
                </div>

                <div className='tagContainer'>
                    <h2>

                        <b>
                            Quality and Standards :-
                        </b>
                        Focus on improving food quality and maintaining high standards throughout the restaurant."
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Goals