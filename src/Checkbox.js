import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'

class Checkboxa extends React.Component {

    state = {
        checkboxes:[
            
        ],
        checked: false
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('to-do-react-app-state-checkbox'))

        if (lastState === null) return

        this.setState(lastState)
    }

    componentDidUpdate() {
        localStorage.setItem('to-do-react-app-state-checkbox', JSON.stringify(this.state))
    }
    updateCheck = ()=> {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }
    // updateCheck() {
    //     const isChecked = this.state.checkboxes
    //     isChecked.checked = !isChecked.checked
    //     this.setState({
    //             checked: isChecked})
          
    // }
    render() {
        return (
            <div>
                
                <Checkbox
                    
                    checked={this.state.checked}
                    onCheck={this.updateCheck}
                />
            </div>
        )
    }
}
export default Checkboxa