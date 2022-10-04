// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Typography, Box } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';

import marketing from 'assets/images/landing/marketing_langding_about.jpg';

// =============================|| LANDING - FEATURE PAGE ||============================= //
const FeatureImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    borderRadius: '12px',
    transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
    WebkitBackfaceVisibility: 'hidden',
    //imageRendering: 'crisp-edges',
}));

const FeaturePage = () => {
    const theme = useTheme();
    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} justifyContent="center">
                    <FadeInWhenVisible>
                        <Box sx={{ position: 'relative', mb: '80px', width: '100%', display: 'block' }}>
                            <FeatureImage src={marketing} alt="marketing" />
                        </Box>
                    </FadeInWhenVisible>
                </Grid>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h5" color="primary">
                                        OUR SERVICES
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                We Provide
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Perry Digital team currently working on the following fields.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.primary.light,
                                                    color: theme.palette.primary.main,
                                                }}
                                            >
                                                <SportsEsportsTwoToneIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Gaming</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">Coming soon.</Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main,
                                                }}
                                            >
                                                <AppsTwoToneIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Dapp</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Accessible and flexible decentralized web application that integrates
                                                blockchain.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.success.light,
                                                    color: theme.palette.success.dark,
                                                }}
                                            >
                                                <WebTwoToneIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Web Application</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Beautiful User Interface, Modern Technology Stack and Performance
                                                Centric are the top features that we cover.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturePage;
