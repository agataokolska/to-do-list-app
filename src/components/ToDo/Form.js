import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    width: '80vw',
    marginRight: '30px'
}
const Form = (props) => (
    <div>
        <TextField
            placeholder={'write new task here'}
            value={props.newTaskName}
            style={styles}
            onChange={props.onNewTaskChange}
        />
        <RaisedButton
            label="ADD NEW TASK"
            primary={true}

            onClick={props.addTask}
        />
    </div>
)

export default Form