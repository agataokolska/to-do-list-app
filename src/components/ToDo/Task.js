import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const Task = (props) => (
    <MenuItem
    primaryText={'Task 1'} 
    rightIcon={<Delete onClick={()=>alert('click')} />}
    />
)

export default Task