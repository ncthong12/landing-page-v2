// material-ui
import { Container, Grid, Typography } from '@mui/material';

// project imports
import ScrollableTabsButtonVisible from './ScrollTab';
import { gridSpacing } from 'store/constant';

// ==============================|| LANDING - Team PAGE ||============================== //

const TeamPage = () => (
    <Container maxWidth="xl">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={8} sm={4}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Typography variant="h5" color="primary">
                                    TEAM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div" fontSize="38px">
                            Meet Our Team
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" fontSize="16px">
                            Young and passionate freelance software developers who skillful at making games, Dapps, web
                            applications using blockchain, smart contract and dynamic website technologies.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={8} xs={12} sx={{ textAlign: 'center', justifyContent: { xl: 'right', xs: 'center' } }}>
                <ScrollableTabsButtonVisible />
            </Grid>
        </Grid>
    </Container>
);

export default TeamPage;
