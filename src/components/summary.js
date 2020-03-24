import React from 'react'



export default function summary(props) {

     
   const  summary =props.summarydata.map((data)=>{
        return (
            <div className="summaryitems">
                <h3>{data.name}</h3>
            </div>
          );   
        })

    return (
        <div className="summary">
            {summary}
        </div>
    )
}
