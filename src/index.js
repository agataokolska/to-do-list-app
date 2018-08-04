//imports from npm packages
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//import external resources
import './index.css'

//import my own components (from src folder)
import App from './App'

ReactDOM.render(
<MuiThemeProvider>
    <App />
</MuiThemeProvider>,
document.getElementById('root')
)

