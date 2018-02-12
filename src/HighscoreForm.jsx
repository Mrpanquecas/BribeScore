import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import HighscorePopup from './HighscorePopup'

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fullHeight: {
    height: '100%',
  },
});

class HighscoreForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }  

  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
        <br/>
        <HighscorePopup/>
        {function shapeshift_click(a,e){e.preventDefault();var link=a.href;window.open(link,'1418115287605','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0');return false;}} <a onclick="shapeshift_click(this, event);" href="https://shapeshift.io/shifty.html?destination=1PxQvhgAJrFR4mA2sKXmnCuTyXy1wrQrf8&amp;output=BTC"><img src="https://shapeshift.io/images/shifty/xs_dark_altcoins.png" class="ss-button" /></a>
        </div>
    )
  }
}
export default withStyles(styles)(HighscoreForm)
  