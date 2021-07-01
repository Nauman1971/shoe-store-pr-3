import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import airzoomData from "./air-zoom-data";
import AirZoomShoe from "./AirZoomShoe";

const useStyles = makeStyles( theme=> ({
    shoesItem: {
        display: 'flex',
        flexFlow: 'row'
    }
}))
const AirZoomShoes = () => {
    const { shoesItem } = useStyles();
    return (
        <Grid container >
            <Grid className={shoesItem}>
            {Object.entries(airzoomData).map(([acc, { name, img, description }]) => (
                <AirZoomShoe key={acc} acc={acc} name={name} img={img} description={description}/>
            ))}
            </Grid>
        </Grid>
    )
}

export default AirZoomShoes;