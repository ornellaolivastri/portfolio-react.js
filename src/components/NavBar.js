import { Button, AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    }));

export function NavBar(){
  const classes = useStyles(); 
  
  return (
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar>

            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className="title" > lololololo lolo lolololololololo lo lo </Typography>
            
            <Button color="inherit">About me</Button>
            <Button color="inherit">Studies</Button>
            <Button color="inherit">Contact</Button>

          </Toolbar>
        </AppBar>
      </div>
    );
}