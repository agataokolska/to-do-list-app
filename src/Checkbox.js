import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'

class Checkboxa extends React.Component {

    state = {
        checked: false,
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('to-do-react-app-state'))

        if (lastState === null) return

        this.setState(lastState)
    }

    componentDidUpdate() {
        localStorage.setItem('to-do-react-app-state', JSON.stringify(this.state))
    }
    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }
    render() {
        return (
            <div>
                
                <Checkbox
                    
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
            </div>
        )
    }
}
export default Checkboxa