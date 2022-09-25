import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    Grid,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';

// project imports
//import logo from 'assets/images/logo.svg';
import Logo from 'ui-component/Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
interface ElevationScrollProps {
    children: ReactElement;
    window?: Window | Node;
}
function ElevationScroll({ children, window }: ElevationScrollProps) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window!,
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark,
        },
    });
}

//4a19d2
// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open: boolean) => (event: any) => {
        if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar sx={{ backgroundColor: '#4D24DA !important' }}>
                <Container>
                    <Toolbar>
                        <Logo />

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, ml: 1 }}
                            fontSize="large"
                            color="white"
                        >
                            Perry Digital
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2} color="white">
                            <Button color="inherit" component={Link} href="#" target="_blank">
                                Home
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/login" target="_blank">
                                Dashboard
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                href="https://codedthemes.gitbook.io/berry"
                                target="_blank"
                            >
                                Documentation
                            </Button>
                            <Button
                                component={Link}
                                href="/utils/util-animation"
                                disableElevation
                                variant="contained"
                                color="error"
                                size="large"
                            >
                                Dapp
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dashboard" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="https://codedthemes.gitbook.io/berry"
                                                target="_blank"
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Documentation" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="/utils/util-animation"
                                                target="_blank"
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dapp" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
