import React from 'react'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'
import Done from 'material-ui/svg-icons/action/done'


const Task = (props) => (
    <ListItem
        primaryText={props.name}
        leftIcon={<Delete onClick={props.deleteTask2} />}
        rightIcon={<Done onClick={props.markCompleteTask2} />}
    />
)

export default Task