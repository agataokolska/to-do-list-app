import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const Task = (props) => (
    <MenuItem
    primaryText={props.name} 
    rightIcon={<Delete onClick={props.deleteTask2} />}
    />
)

export default Task