import { Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme =>({
    mainContainer: {
        height: 500,
        backgroundImage: `url('/images/main.jpg')`,
        color: '#00d4ff',
        backgroundSize: 'cover',
        marginTop: 65,
    },
    mainItem: {
        padding: theme.spacing(6),
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));

const MainGridItem = () => {
    const { mainContainer, mainItem } = useStyles();

    return (
        <Grid container className={mainContainer}>
            <Grid item className={mainItem} md={6}>
            </Grid>

        </Grid>
    )
}

export default MainGridItem;