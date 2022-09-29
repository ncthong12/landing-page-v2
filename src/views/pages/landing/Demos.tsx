import { Link } from 'react-router-dom';

// material-ui
import { Button, ButtonBase, Container, Grid, Typography, Avatar } from '@mui/material';
import ScrollableTabsButtonVisible from './ScrollTab';

// project imports
import FadeInWhenVisible from './Animation';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// assets
import imgDemo1 from 'assets/images/landing/img-demo-1.jpg';
import imgDemo2 from 'assets/images/landing/img-demo-2.jpg';
import imgDemo3 from 'assets/images/landing/img-demo-3.jpg';
import user1 from 'assets/images/profile/phuc-profile.jpg';
import user2 from 'assets/images/profile/thong-profile1.jpg';
import user3 from 'assets/images/profile/khang-profile.jpg';

const imageStyle = {
    width: '100%',
    borderRadius: '12px',
};

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => (
    <Container maxWidth="xl">
        <Grid container>
            <Grid item xs={8} sm={4}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Typography variant="h5" color="#7267ef">
                                    TEAM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div" color="#d7dcec" fontSize="38px">
                            Meet Our Team
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="#bdc8f0" fontSize="16px">
                            Young and passionate freelance software developers who skillful at making games, Dapps, web
                            applications using blockchain, smart contract and dynamic website technologies.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={8} xs={12} sx={{ textAlign: 'center', justifyContent: { xl: 'right', xs: 'center' } }}>
                <ScrollableTabsButtonVisible />
                {/* <Grid
                    container
                    spacing={{ xl: 12, xs: gridSpacing }}
                    sx={{ textAlign: 'center', justifyContent: { xl: 'right', xs: 'center' } }}
                >
                    <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
                        <FadeInWhenVisible>
                            <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="336"
                                        image={user1}
                                        alt="green iguana"
                                        sx={{ borderRadius: '15px' }}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ color: '#d7dcec' }}>
                                        Nguyen Pham Dinh Phuc
                                    </Typography>
                                    <Typography color="#bdc8f0">Backend Developer</Typography>
                                </CardContent>
                            </Card>
                        </FadeInWhenVisible>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
                        <FadeInWhenVisible>
                            <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="336"
                                        image={user2}
                                        alt="green iguana"
                                        sx={{ borderRadius: '15px' }}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ color: '#d7dcec' }}>
                                        Nguyen Cao Thong
                                    </Typography>
                                    <Typography color="#bdc8f0">Frontend Developer</Typography>
                                </CardContent>
                            </Card>
                        </FadeInWhenVisible>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
                        <FadeInWhenVisible>
                            <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="336"
                                        image={user3}
                                        alt="green iguana"
                                        sx={{ borderRadius: '15px' }}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ color: '#d7dcec' }}>
                                        Nguyen Bach Phuc Khang
                                    </Typography>
                                    <Typography color="#bdc8f0">Devops Engineer</Typography>
                                </CardContent>
                            </Card>
                        </FadeInWhenVisible>
                    </Grid>
                </Grid> */}
            </Grid>

            {/* <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
                <AnimateButton>
                    <Button
                        component={Link}
                        to="/components/autocomplete"
                        target="_blank"
                        variant="outlined"
                        size="large"
                    >
                        Explore Components
                    </Button>
                </AnimateButton>
            </Grid> */}
        </Grid>
    </Container>
);

export default DemosPage;
