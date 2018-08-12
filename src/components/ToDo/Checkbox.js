// import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';

// class Checkbox extends React.Component {
//   state = {
//     checked: false,
//   };

//   componentDidMount() {
//     const lastState = JSON.parse(localStorage.getItem('to-do-react-app-state-of-checkbox'))

//     if (lastState === null) return

//     this.setState(lastState)
//   }

//   componentDidUpdate() {
//     localStorage.setItem('to-do-react-app-state-state-of-checkbox', JSON.stringify(this.state))
//   }

//   updateCheck() {
//     this.setState((oldState) => {
//       return {
//         checked: !oldState.checked,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Checkbox
//           checked={this.state.checked}
//           onCheck={this.updateCheck.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// export default Checkbox