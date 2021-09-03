import { Typography, makeStyles  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
        container: {
            background: '#99e6ff',
            padding: '4vw'
        }
    }));

export function CenteredText() {
const classes = useStyles();

    return (
    
    <Grid 
        className={classes.container} 
        container direction="column" 
        justifyContent="space-around" 
        spacing ={3} 
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

    )
}
