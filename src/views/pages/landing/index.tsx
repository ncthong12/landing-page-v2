// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from './Header';
import Feature from './Feature';
import Demos from './Demos';
import Layouts from './Layouts';
import KeyFeature from './KeyFeature';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
    paddingTop: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    [theme.breakpoints.down('md')]: {
        paddingTop: 42,
    },
}));

const SecondWrapper = styled('div')(({ theme }) => ({
    paddingTop: 160,
    [theme.breakpoints.down('md')]: {
        paddingTop: 60,
    },
}));

const TestWrapper = styled('div')(({ theme }) => ({
    //overflow: 'hidden',
    backgroundImage:
        'linear-gradient(rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)), url(https://zone-assets-api.vercel.app/assets/bg_gradient.jpg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'initial, initial',
    backgroundOrigin: 'initial, initial',
    backgroundClip: 'initial, initial',
    backgroundColor: 'initial',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginTop: 238, // TODO
    paddingTop: 120,
    paddingBottom: 80,
    zIndex: -10000,
    [theme.breakpoints.down('md')]: {
        paddingTop: 60,
    },
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
            <Header />
        </HeaderWrapper>
        <SecondWrapper id="intro">
            <Feature />
        </SecondWrapper>
        <SecondWrapper id="achievement">
            <Layouts />
        </SecondWrapper>
        <TestWrapper id="team">
            <Demos />
        </TestWrapper>
        <SecondWrapper id="partners">
            <KeyFeature />
        </SecondWrapper>
        <SecondWrapper>
            <Subscribe />
        </SecondWrapper>
        <Footer />
        <Customization />
    </>
);

export default Landing;
