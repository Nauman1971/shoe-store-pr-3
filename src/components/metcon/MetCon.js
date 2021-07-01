import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons"
import { Link, Outlet } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardImage: {
        height: "500px",
        width: '100%',
    },
    actions: {
        padding: 25
    },
    cardMainContainer: {
        margin: '25px, 0px'
    }
}))
const MetCon = () => {
    const { cardImage, actions, cardMainContainer } = useStyles();
    return(
        <Grid container className={cardMainContainer}>
        <Grid>
        <Card>
            <CardHeader title="Nike Metcon"
            subheader="New Arrivals"
            />
            <CardMedia 
            className={cardImage}
            // title={title}
            image="/images/metcon/metcon6/metcon-6.jpg"
            />
            <CardContent>
                <Typography>
                The most breathable version yet, 
                the Nike Metcon helps keep your foot 
                cool when you're going full steam. It stands up 
                to the push and pull of heavily weighted and 
                high-intensity workouts, delivering stability and 
                durability.
                </Typography>
            </CardContent>
            <CardActions className={actions}>
                <IconButton aria-label="Visit page">
                    <Link to="/metcon">
                    <ArrowForward />
                    </Link>
                </IconButton>
            </CardActions>
            <Outlet />            
        </Card>
        </Grid>
        </Grid>
    )
}

export default MetCon;