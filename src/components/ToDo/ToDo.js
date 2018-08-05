import React from 'react'
import Form from './Form'
import List from './List'
import Container from '../Container'


class ToDo extends React.Component {
    state = {
        tasks: [
            { name: 'naczynia', uid: '1234', isCompleted: false },
            { name: 'śmieci', uid: '2345', isCompleted: false },
            { name: 'pranie', uid: '3456', isCompleted: false }
        ],
        newTaskName: '',
        isCompleted: false
    }


    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('to-do-react-app-state'))

        if (lastState === null) return

        this.setState(lastState)
    }

    componentDidUpdate() {
        localStorage.setItem('to-do-react-app-state', JSON.stringify(this.state))
    }

    onNewTaskChange = (event, value) => {
        this.setState({
            newTaskName: value
        })
    }

    addTask = () => {
        if (this.state.newTaskName === '') return

        const newTask = {
            name: this.state.newTaskName,
            uid: Date.now(),
            isCompleted: this.state.isCompleted
        }
        const newTasks = this.state.tasks.concat(newTask)

        this.setState({
            tasks: newTasks,
            newTaskName: ''
        })
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    markCompleteTask = (index) => {
        const newTasks = this.state.tasks
        newTasks[index].isCompleted = !newTasks[index].isCompleted
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
                        deleteTask={this.deleteTask}
                        markCompleteTask={this.markCompleteTask} />
                </Container>
            </div>
        )
    }
}
export default ToDo