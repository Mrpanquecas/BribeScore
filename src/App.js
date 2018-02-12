import React, { Component } from 'react'
import { MuiThemeProvider, withStyles } from 'material-ui/styles'
import logo from './logo.svg'
import './App.css'
import Highscore from './Highscore'
import HighscoreHeader from './HighscoreHeader'

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '5% 50px auto 50px 5%',
    gridTemplateRows: '35px 25% 50% auto',
  },
})

class App extends Component {
  constructor(props){
    super(props) 
  }

  render() {
    const { classes, theme } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.container}>
          <HighscoreHeader />
          <Highscore />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
