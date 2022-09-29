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
            <MuiAppBar sx={{ backgroundColor: '#6f24da !important' }}>
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
                            <Button
                                color="inherit"
                                component={Link}
                                href="#intro"
                                onClick={(e: any) => {
                                    let hero = document.getElementById('intro');
                                    e.preventDefault(); // Stop Page Reloading
                                    e.stopPropagation();
                                    hero && hero.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Introduction
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                href="#achievement"
                                onClick={(e: any) => {
                                    let hero = document.getElementById('achievement');
                                    e.preventDefault(); // Stop Page Reloading
                                    e.stopPropagation();
                                    hero && hero.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Achievement
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                href="#team"
                                onClick={(e: any) => {
                                    let hero = document.getElementById('team');
                                    e.preventDefault(); // Stop Page Reloading
                                    e.stopPropagation();
                                    hero && hero.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Team
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                href="#partners"
                                onClick={(e: any) => {
                                    let hero = document.getElementById('partners');
                                    e.preventDefault(); // Stop Page Reloading
                                    e.stopPropagation();
                                    hero && hero.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Partners
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/utils/util-animation"
                                target="_blank"
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
                                            <Link style={{ textDecoration: 'none' }} href="#intro" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Introduction" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#achievement" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Achievement" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#team" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Team" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#partners" target="_self">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partners" />
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
