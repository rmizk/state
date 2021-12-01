import React from 'react'

const Todocard = ({task,del,comp}) => {
    return (
        <div>
            <h2 id={task.isdone?"completed":""}>{task.action}</h2>
            <button onClick={()=>del(task.id)} >delete</button>
            <button onClick={()=>comp(task.id)}>complete</button>


            
        </div>
    )
}

export default Todocard
