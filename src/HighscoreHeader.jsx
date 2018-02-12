import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import * as colors from 'material-ui/colors'
import HighscoreForm from './HighscoreForm';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '40px 50px auto 50px 40px',
    gridTemplateRows: '25% 50% auto',
  },
  root: {
    gridColumnStart: 2,
    gridColumnEnd: 5,
    gridRowStart: 2,
    GridRowEnd: 3,
  },
  table: {
    minWidth: 500,
  },  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: '2.875rem',
    color: colors.lightBlue[400],
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  centerContent:{
    textAlign: 'center',
  },
});

class Highscore extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isLogged: false,
    // }
  }

  render() {
    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.centerContent}>
          <Typography className={classes.title}>BRIBESCORE</Typography>
          <Typography type="headline" component="h2">
          </Typography>
          <Typography className={classes.font} component="p">
            Bribe your way onto the BRIBESCORE!
          </Typography>
          <HighscoreForm />
        </CardContent>
        {/* <CardActions>
        </CardActions> */}
      </Card>
    </div>
    )
  }
}
export default withStyles(styles)(Highscore)
