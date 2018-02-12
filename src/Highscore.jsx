import React from 'react';
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    gridColumnStart: 2,
    gridColumnEnd: 5,
    gridRowStart: 3,
    GridRowEnd: 4,
  },
  table: {
  },
});

let id = 0;
function createData(rank, score, name, shoutout) {
  id += 1;
  return { id, rank, score, name, shoutout};
}

const data = [
  createData('1', 0.003834, 'dummytx', 'www.google.com'),
  createData('2', 0.000583, 'dummytx', 'www.google.com'),
  createData('3', 0.000582, 'dummytx', 'www.google.com'),
  createData('4', 0.0002, 'dummytx', 'www.google.com'),
  createData('5', 0.000143, 'dummytx', 'www.google.com'),
];


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
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Name</TableCell>
              <TableCell numeric>Shoutout</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell >{n.rank}</TableCell>
                  <TableCell >{n.score} BTC</TableCell>
                  <TableCell >{n.name}</TableCell>
                  <TableCell numeric>
                    <a href={`http://${n.shoutout}`} target='_blank'>{n.shoutout}</a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(Highscore)
