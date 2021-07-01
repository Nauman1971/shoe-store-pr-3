import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    cardImage: {
        height: 500,
        width: 400
    },
    shoesContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    actions: {
        padding: 25
    }
    
}))
    const Shoe = ({ name, acc, img, description }) => {
    const { cardImage, shoesContainer, actions } = useStyles();
    return (
            <Card className={ shoesContainer }>
            <CardHeader title={name}
            subheader="Training Shoes"
            />
            <CardMedia 
            className={cardImage}
            title={name}
            image={img}
            />
            <CardContent>
                <Typography>
            {description}
                </Typography>
            </CardContent>
            <CardActions className={actions}>
                <IconButton aria-label="Visit page">
                    <Link to={`/metcon/${acc}`}>
                    <ArrowForward />
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Shoe;