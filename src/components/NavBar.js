import { Button, AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    container: {
      background: theme.palette.primary.main
    }
    }));

export function NavBar(){
  const classes = useStyles(); 
  
  return (
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar>

            <IconButton edge="start" className="menuButton" color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="primary" className={classes.title} > lololololo lolo lolololololololo lo lo </Typography>
            
            <Button color="primary">About me</Button>
            <Button color="primary">Studies</Button>
            <Button color="primary">Contact</Button>

          </Toolbar>
        </AppBar>
      </div>
    );
}