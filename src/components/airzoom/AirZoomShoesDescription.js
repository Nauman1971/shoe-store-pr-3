import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import airZoomData from "./air-zoom-data";

const useStyles = makeStyles(theme => ({
    images: {
        width: '100%',
        height: '500px',
    },
    descriptionContainer: {
        display: 'flex',
        flexFlow: 'row-wrap',
    },
    imgContainer: {
        margin: 20
    }
}))
const AirZoomShoesDescription = () => {
    const { shoe } = useParams();
    console.log(shoe);
    const { images, descriptionContainer, imgContainer } = useStyles();

    const shoeData = airZoomData[shoe]
    if (!shoeData) {
        return (
            <h2>Shoe Not Found</h2>
        )
    }
    return (
        <Grid container justify="center" className={descriptionContainer} >
            {shoeData.images?.map(img => (
            <Grid className={imgContainer} item lg={3} md={3} sm={12} xs={12}>
                    <img className={images} src={img} alt={shoeData.name}/>
                    </Grid>
                ))}
        </Grid>
    )
}

export default AirZoomShoesDescription;