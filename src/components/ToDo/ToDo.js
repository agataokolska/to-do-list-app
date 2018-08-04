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
        ]
    }
    render() {
        return (
            <div>
                <Container>
                    <Form />
                </Container>
                <Container>
                    <List
                        tasks={this.state.tasks} />
                </Container>
            </div>
        )
    }
}
export default ToDo