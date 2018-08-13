import React from 'react'

import ToDo from './components/ToDo'
import Checkboxa from './Checkbox'

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo />
        <Checkboxa />
      </div>
    )
  }
}

export default App
