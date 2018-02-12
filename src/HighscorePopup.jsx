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
import * as colors from 'material-ui/colors'
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: colors.grey[50]
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

class HighscorePopup extends React.Component {
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
        <div>
        <Button raised className={classes.button} onClick={this.handleClickOpen}> Bribe! </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Bribe this address"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            1PxQvhgAJrFR4mA2sKXmnCuTyXy1wrQrf8
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles)(HighscorePopup)
