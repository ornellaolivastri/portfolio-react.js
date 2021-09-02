import { Grid, makeStyles, Typography } from '@material-ui/core';
//import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({}));


const TextToTheRight = (props) => {
    const classes = useStyles();

    return (

        <Grid
            container direction="row" justifyContent="space-around" spacing={3} alignItems="center">
            
            <Grid item xs={4}>
            <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/187/462/products/img_20200428_172407_936-1graptopetalum1-c8cd30c025d074977516054950159547-1024-1024.jpg' alt="this is a test"></img>
            </Grid>

            <Grid item xs={4}>
                <Grid className={classes.container} 
                    container direction="colum" 
                    justifyContent="space-around" 
                    spacing ={3} 
                    alignItems="center">
        
                    <Grid item xs>
                        <Typography align="center" variant="body1"> texto centrado inicial </Typography>

                        <Typography align="center" variant="body1"><b> texto centrado segundo </b></Typography>
                        <Typography align="center" variant="body1"><i> texto centrado final </i></Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

const TextToTheLeft = (props) => {
    const classes = useStyles();
    return (

        <Grid
            container direction="row" justifyContent="space-around" spacing={3} alignItems="center">
            
            <Grid item xs={4}>
                <Grid className={classes.container} 
                    container direction="colum" 
                    justifyContent="space-around" 
                    spacing ={3} 
                    alignItems="center">
        
                    <Grid item xs={7}>
                        <Typography align="center" variant="body1"> 
                        texto centrado inicial texto centrado inicial texto centrado inicial texto centrado inicial
                        texto centrado inicial texto centrado inicial texto centrado inicial texto centrado inicial
                        texto centrado inicial texto centrado inicial texto centrado inicial texto centrado inicial
                        </Typography>
                        <Typography align="center" variant="body1"><b> texto centrado del medio texto centrado del medio </b></Typography>
                        <Typography align="center" variant="body1"><i> texto centrado final texto centrado final </i></Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={4}>
            <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/187/462/products/img_20200428_172407_936-1graptopetalum1-c8cd30c025d074977516054950159547-1024-1024.jpg' alt="this is a test"></img>
            </Grid>

        </Grid>
    )
}

export function TextWithImage(props) {

    const classes = useStyles();

    return <TextToTheLeft />

}

