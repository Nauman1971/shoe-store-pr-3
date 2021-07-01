import { useEffect, useState } from 'react';
import { AppBar, Box, Container, Link,
    makeStyles, Toolbar, Typography, IconButton, Drawer, MenuItem } from "@material-ui/core";
import { Menu } from '@material-ui/icons';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10)
        },
        color: 'white',
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    menuIcon: {
        color: 'white'
    },
    siteTitle: {
        fontWeight: 'bold',
        letterSpacing: 1.5
    },
    routerClass: {
        textDecoration: 'none'
    }
}))
const NavigationBar = () => {
    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    });
    const { toggleMenu, toggleMenuOpen, routerClass } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
            ? setState((prevState) => ({...prevState, toggleMenu: true}))
            : setState((prevState) => ({...prevState, toggleMenu: false}))
        }
        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

    }, [])

    const displayToggleMenu = () => {
        const handleToggleMenuOpen = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: true
        }))

        const handleToggleMenuClose = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: false
        }))

        return (
            <Toolbar>
                <IconButton onClick={handleToggleMenuOpen}>
                <Menu className={classes.menuIcon}/>
                </IconButton>
                <Drawer anchor="left"
                open={toggleMenuOpen}
                onClose={handleToggleMenuClose}
                >
                    <div>{getToggleMenuOptions()}</div>

                </Drawer>
            </Toolbar>
        );
    }
        const getToggleMenuOptions = () => {
            return (
                <Box>
                {[ 'men', 'women', 'kids'].map((menuOption) => (
                    <RouterLink key={menuOption} className={routerClass} to={menuOption}>
                    <MenuItem >
                    {menuOption.toUpperCase()}
                    </MenuItem>
                    </RouterLink>
                ))}
                </Box>
            )
        }

    const displayLargeMenu = () => {
        return (
        <Toolbar className={classes.toolbar}>
                <Typography 
                component="h1"
                variant="h6" 
                className={classes.siteTitle}>
                    Shoes Store
                </Typography>
                <Box className={classes.menuBox}>
                    {['men', 'women', 'kids'].map((menuOption) => (
                        <RouterLink className={routerClass} key={menuOption} to={menuOption}>
                        <Link
                        component='button'
                        variant='body1'
                        className={classes.menuOption}
                        >

                        {menuOption.toUpperCase()}
                        </Link>
                            </RouterLink>
                    ))}
                </Box>
            </Toolbar>
        )
    }

    const classes = useStyles();
    return (
        <Container>
            <AppBar>
            { toggleMenu ? displayToggleMenu() : displayLargeMenu() }
            </AppBar>
        </Container>
    )
}

export default NavigationBar;