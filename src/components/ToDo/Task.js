import React from 'react'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'
import { Checkbox } from 'material-ui';


const Task = (props) => (
    <ListItem
        primaryText={props.name}
        leftIcon={<Delete onClick={props.deleteTask2} />}
        rightIcon={<Checkbox
            onCheck={props.updateCheck.bind(this)} 
            onClick={props.markCompleteTask2} />}
    />
)

export default Task