import { Link } from 'react-router-dom';

// material-ui
import { Button, ButtonBase, Container, Grid, Typography, Avatar } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import imgDemo1 from 'assets/images/landing/img-demo-1.jpg';
import imgDemo2 from 'assets/images/landing/img-demo-2.jpg';
import imgDemo3 from 'assets/images/landing/img-demo-3.jpg';
import user1 from 'assets/images/profile/271636800_312925254129892_4609141482705691963_n.jpg';

const imageStyle = {
    width: '100%',
    borderRadius: '12px'
};

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => (
    <Container>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={5} md={10}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Typography variant="h5" color="primary">
                                    Team members
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div">
                            We are one
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Berry has customized pages with Material-UI components, Apps, Forms and lots more to explore.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={4} sm={6}>
                        <FadeInWhenVisible>
                            <Avatar alt="user1" src={user1} sx={{margin:'auto',width: 140, height: 140}} />
                        </FadeInWhenVisible>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <FadeInWhenVisible>
                        <Avatar alt="user1" src={user1} sx={{margin:'auto',width: 140, height: 140}} />
                        </FadeInWhenVisible>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <FadeInWhenVisible>
                        <Avatar alt="user1" src={user1} sx={{margin:'auto',width: 140, height: 140}} />
                        </FadeInWhenVisible>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
                <AnimateButton>
                    <Button component={Link} to="/components/autocomplete" target="_blank" variant="outlined" size="large">
                        Explore Components
                    </Button>
                </AnimateButton>
            </Grid>
        </Grid>
    </Container>
);

export default DemosPage;
