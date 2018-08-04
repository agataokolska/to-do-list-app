import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {props.tasks.map(task => (
        <Task 
        name={task.name} 
        deleteTask2={()=>props.deleteTask(task.uid)}/>
        )
    )}
    </div>
)

export default List