import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Checkbox extends React.Component {
  state = {
    checked: false,
  };
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
    );
  }
}

export default Checkbox