import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons"
import { Link, Outlet } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardImage: {
        height: "500px",
        width: '100%'
    },
    actions: {
        padding: 25
    },
    cardMainContainer: {
        margin: '25px, 0px'
    }

}))

const AirZoom = () => {
    const { cardImage, actions, cardMainContainer } = useStyles();
    return(
        <Grid container className={cardMainContainer}>
            <Grid>
        <Card>
            <CardHeader title="Air Zoom"
            subheader="New Arrivals"
            />
            <CardMedia 
            className={cardImage}
            // title={title}
            image='/images/airzoom/air-zoom-pegasus-38-mens/air-zoom-pegasus.png'
            />
            <CardContent>
                <Typography>
                Your workhorse with wings returns.The Nike Air Zoom Pegasus
                38 continues to put a spring in your step,
                same responsive foam as its predecessor.Breathable mesh in the 
                upper combines the comfort and durability.
                </Typography>
            </CardContent>
            <CardActions className={actions}>
                <IconButton aria-label="Visit page">
                    <Link to="/airzoom">
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

export default AirZoom;