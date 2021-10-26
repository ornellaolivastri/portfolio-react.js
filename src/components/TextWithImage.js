import { Grid, makeStyles, Typography } from '@material-ui/core';
//import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        hight: 'auto',
    },
    padding: '2vw',
}));

const Description = (props) => {
    return <Grid item xs><Typography align="center" variant="body1"><i>{props.description}</i></Typography></Grid>
}

const TextToTheRight = (props) => {
    
    return (

        <Grid container direction="row" justifyContent="space-around" spacing={3} alignItems="center">
            
            <Grid item xs={4}>
                <img
                className={props.classes.img} 
                src={props.content.img} 
                alt="this is a test">
                </img>
            </Grid>

            <Grid item xs={4}>
                <Grid container direction="column" 
                    justifyContent="space-around" 
                    spacing ={3} 
                    alignItems="center">
        
                    <Grid item xs >
                        <Typography align="center" variant="body1">{props.content.title}</Typography>
                    </Grid>

                    <Grid item xs >
                        <Typography align="center" variant="body1"><b>{props.content.subtitle}</b></Typography>
                    </Grid>

                    {props.content.descriptions.map((description) => (<Description description={description} /> ))}

                </Grid>
            </Grid>
        </Grid>
    )
}

const TextToTheLeft = (props) => {
    
    return (

        <Grid container direction="row" justifyContent="space-around" spacing={3} alignItems="center">

            <Grid item xs={4}>
                <Grid container direction="column" 
                    justifyContent="space-around" 
                    spacing ={3} 
                    alignItems="center">
        
                    <Grid item xs >
                        <Typography align="center" variant="body1">{props.content.title}</Typography>
                    </Grid>

                    <Grid item xs >
                        <Typography align="center" variant="body1"><b>{props.content.subtitle}</b></Typography>
                    </Grid>

                    {props.content.descriptions.map((description) => (<Description description={description} /> ))}

            </Grid>

            </Grid>

            <Grid item xs={4}>
                <img
                className={props.classes.img} 
                src={props.content.img} 
                alt="this is a test">
                </img>
            </Grid>

        </Grid>
    )
}

export function TextWithImage(props) {

    const classes = useStyles();

    return props.TextToTheRight ? <TextToTheRight classes={classes} content={props.content}/> 
                                : <TextToTheLeft classes={classes} content={props.content} />;
}

