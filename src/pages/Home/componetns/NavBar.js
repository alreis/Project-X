import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2),
  },
  button: {
    width: '100%',
  }
}));

const tags = [
  { id: 1, name: 'Dofus'},
  { id: 2, name: 'Guild Wars 2'},
  { id: 3, name: 'The Division 2'},
  { id: 4, name: 'Doom Eternal'},
  { id: 5, name: 'The Last of Us part:2'},
  { id: 6, name: 'The Legend of Zelda: Ocarina of time'}
]

function NavBar() {
  const classes = useStyles(); 

  return (
    <Paper className={classes.root}>
      <Button variant="contained" color="secondary" className={classes.button}>Create Account</Button>
      <ListSubheader>{`Top of the day Tags`}</ListSubheader>
      {
        tags.map((item) =>(
          <ListItem dense button key={`item=${item.id}-${item.name}`}>
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        ))
      }
      <ListItem button>
        More Tags
      </ListItem>
    </Paper>
  )
}

export default NavBar;
