import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Form = (props) => (
    <div>
        <TextField
            value={props.newTaskName}
            hintText="New task"
            fullWidth={true}
            onChange={props.onNewTaskChange}
        />
        <RaisedButton
            label="ADD NEW TASK"
            primary={true}
            fullWidth={true}
            onClick={props.addTask}
        />
    </div>
)

export default Form