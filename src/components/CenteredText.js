import { Typography, makeStyles  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
        container: {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
            padding: '2vw'
        }
    }));

export function CenteredText() {
const classes = useStyles();

    return (
    
    <div className={classes.container}  >

    <Grid 
        container direction="column" 
        justifyContent="space-around" 
        spacing ={1} 
        alignItems="center">
    
        <Grid item xs>
            <Typography align="center" variant="body1"> texto centrado inicial </Typography>
        </Grid>

        <Grid item xs>
            <Typography align="center" variant="body1" gutterBottom='true'><b> texto centrado del medio - texto centrado del medio 
                                                                - texto centrado del medio </b> </Typography>
        </Grid>

        <Grid item xs>             
            <Typography align="center" variant="body1" > texto centrado final texto centrado finaltexto centrado final
                texto centrado final texto centrado final
                texto centrado final texto centrado final texto centrado finaltexto centrado final 
                texto centrado final texto centrado final texto centrado final
                texto centrado final texto centrado final texto centrado finaltexto centrado final
                texto centrado final texto centrado final texto centrado final </Typography>
        </Grid>


    </Grid>

    </div>

    );
    
}
