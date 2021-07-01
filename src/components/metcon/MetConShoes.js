import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import metconShoeData from "./metcon-data";
import MetconShoe from "./MetconShoe";

const useStyles = makeStyles( theme=> ({
    shoesItem: {
        display: 'flex',
        flexFlow: 'row'

    }
}))

const Shoes = () => {
    const { shoesItem } = useStyles();

    return (
        <Grid container>
            <Grid className={shoesItem}>
            {Object.entries(metconShoeData).map(([acc, { name, img, description }]) => (
                <MetconShoe key={acc} acc={acc} name={name} img={img} description={description}/>
            ))}
            </Grid>
        </Grid>
    )
}

export default Shoes;