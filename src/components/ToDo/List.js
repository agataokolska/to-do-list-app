import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {props.tasks.map((task, index) => (
            <Task
                name={task.name}
                key={task.uid}
                deleteTask2={() => props.deleteTask(task.uid)}
                markCompleteTask2={() => props.markCompleteTask(index)}
                updateCheck={() => props.updateCheck.bind(this)}
            />
        )
        )}
    </div>
)

export default List