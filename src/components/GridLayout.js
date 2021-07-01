import { Grid } from "@material-ui/core";
import MainGridItem from "./MainGridItem";
import MetCon from "./metcon/MetCon";
import AirZoom from "./airzoom/AirZoom";
const GridLayout = () => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12} >
            <MainGridItem />
            </Grid>
            
            <Grid item md={6} lg={6} sm={12} xs={12}>
                <MetCon />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <AirZoom />
            </Grid>
        </Grid>
    )  
}

export default GridLayout;