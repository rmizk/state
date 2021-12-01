import React from 'react'
import Todocard from './Todocard'

const Todolist = ({list,del,comp}) => {

    return (
        <div>
            {
            list.map((el,i)=> <Todocard key={i} comp={comp} del={del} task={el}  /> )
            }
        </div>
    )
}

export default Todolist
