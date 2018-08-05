import React from 'react'
import Form from './Form'
import List from './List'
import Container from '../Container'

class ToDo extends React.Component {
    state = {
        tasks: [
            { name: 'naczynia', uid: '1234' },
            { name: 'śmieci', uid: '2345' },
            { name: 'pranie', uid: '3456' }
        ],
        newTaskName: ' '
    }
    addTask = (taskName) => {
        if(!this.state.newTasksName) return
        const newTask = {
            name: this.state.newTaskName,
            uid: Date.now()
        }
        const newTasks = this.state.tasks.concat(newTask)
        this.setState({
            tasks:newTasks,
            newTaskName: ' '
        })
    }

    onNewTaskChange = (event, value) => this.setState({
        newTaskName: value
    })
    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Form
                        onNewTaskChange={this.onNewTaskChange}
                        newTaskName={this.state.newTaskName}
                        addTask={this.addTask}
                    />
                </Container>
                <Container>
                    <List
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTask} />
                </Container>
            </div>
        )
    }
}
export default ToDo