import React from 'react'
import sampleData from '../sampleData'
const CustomerFeedback = () => {
    return (
        <div>

            <div className="feedback__main">
                <div className="feedback__main__title">
                    <h5>Customer's Feedback</h5>
                    <div className="feedback__main__title__content">
                        {sampleData.Sheet1.map(e => {
                            return (<div key={e.date}>

                                <h4> Customer Name:- {e.customer}</h4>
                                <h5>Feedback :- {e.comments}</h5>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomerFeedback