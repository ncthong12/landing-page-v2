import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project imports
// project imports
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import LogoAnimation from './logo-animation';

// styles
// eslint-disable-next-line
const HeaderImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transform: 'scale(1) translateX(100px) rotate(-12deg)',
    transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
    WebkitBackfaceVisibility: 'hidden',
    //imageRendering: 'crisp-edges',
    [theme.breakpoints.down('lg')]: {
        transform: 'scale(1.2)',
    },
}));

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12} md={5}>
                    <Grid
                        container
                        spacing={gridSpacing}
                        sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}
                    >
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                                        fontWeight: 900,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    Build Your Next Project With
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        Perry Digital
                                    </Box>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        fontWeight: 400,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    Perry Digital focuses on developing faster and beautiful web applications (SPA)
                                    using React based template with TypeScript and Material-UI.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sx={{ my: 3.25 }}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.4,
                                }}
                            >
                                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Grid item>
                                        <AnimateButton>
                                            <Button
                                                component={RouterLink}
                                                to="/dashboard/default"
                                                target="_blank"
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Live Preview
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            component={Link}
                                            href="https://material-ui.com/store/items/berry-react-material-admin/"
                                            target="_blank"
                                            size="large"
                                            variant="text"
                                        >
                                            Contact Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.6,
                                }}
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    spacing={2}
                                    sx={{ [theme.breakpoints.down('lg')]: { display: 'inline-flex', width: 'auto' } }}
                                >
                                    <Grid item>
                                        <Avatar
                                            alt="MUI Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background: 'transparent',
                                            }}
                                            variant="rounded"
                                        >
                                            <svg
                                                width="50"
                                                height="50"
                                                viewBox="0 0 500 500"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0)">
                                                    <path
                                                        d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z"
                                                        fill={theme.palette.primary[800]}
                                                    />
                                                    <path
                                                        d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
                                                        fill={theme.palette.primary.main}
                                                    />
                                                    <path
                                                        d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z"
                                                        fill={theme.palette.primary[800]}
                                                    />
                                                    <path
                                                        d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
                                                        fill={theme.palette.primary.main}
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect
                                                            width="300"
                                                            height="238.3"
                                                            fill="white"
                                                            transform="translate(100 131)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            alt="Figma Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background: 'transparent',
                                            }}
                                            variant="rounded"
                                        >
                                            <svg
                                                fill="none"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m11.6399 29c2.392 0 4.3333-1.9413 4.3333-4.3333v-4.3334h-4.3333c-2.39196 0-4.33326 1.9413-4.33326 4.3334 0 2.392 1.9413 4.3333 4.33326 4.3333z"
                                                    fill="#0acf83"
                                                />
                                                <path
                                                    d="m7.30664 15.9998c0-2.392 1.9413-4.3333 4.33326-4.3333h4.3333v8.6665h-4.3333c-2.39196 0-4.33326-1.9413-4.33326-4.3332z"
                                                    fill="#a259ff"
                                                />
                                                <path
                                                    d="m7.30664 7.3333c0-2.39198 1.9413-4.3333 4.33326-4.3333h4.3333v8.6666h-4.3333c-2.39196 0-4.33326-1.94132-4.33326-4.3333z"
                                                    fill="#f24e1e"
                                                />
                                                <path
                                                    d="m15.9734 3h4.3333c2.392 0 4.3334 1.94132 4.3334 4.3333s-1.9414 4.3333-4.3334 4.3333h-4.3333z"
                                                    fill="#ff7262"
                                                />
                                                <path
                                                    d="m24.6401 15.9998c0 2.3919-1.9414 4.3332-4.3334 4.3332s-4.3333-1.9413-4.3333-4.3332c0-2.392 1.9413-4.3333 4.3333-4.3333s4.3334 1.9413 4.3334 4.3333z"
                                                    fill="#1abcfe"
                                                />
                                            </svg>
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            alt="JS Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background: 'transparent',
                                            }}
                                            variant="rounded"
                                        >
                                            <svg
                                                fill="none"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m0 8c0-4.41828 3.58172-8 8-8h16c4.4183 0 8 3.58172 8 8v16c0 4.4183-3.5817 8-8 8h-16c-4.41828 0-8-3.5817-8-8z"
                                                    fill="#f0db4f"
                                                />
                                                <path
                                                    d="m27.1262 22.9014c-.1879-1.1711-.9515-2.1543-3.2131-3.0716-.7856-.3611-1.6615-.6197-1.9226-1.215-.0927-.3465-.1049-.5416-.0463-.7515.1683-.6806.9808-.8929 1.6249-.6977.4147.1391.8075.4587 1.0442.9686 1.1076-.7173 1.1052-.7124 1.8786-1.2052-.283-.4392-.4343-.6417-.6197-.8296-.6661-.7441-1.5737-1.1271-3.0253-1.0978-.2513.0317-.505.0658-.7563.0976-.7246.1829-1.4151.5635-1.8201 1.0734-1.215 1.3785-.8685 3.7914.61 4.7844 1.4565 1.093 3.5961 1.3418 3.8694 2.3641.2659 1.2516-.9198 1.6565-2.0982 1.5126-.8685-.1805-1.3516-.6221-1.8737-1.4248-.9612.5563-.9612.5563-1.9493 1.1247.2342.5124.4806.7441.8734 1.1882 1.8591 1.8859 6.5116 1.7932 7.346-1.0613.0342-.0976.2587-.7515.0781-1.7591zm-9.6126-7.7486h-2.4007c0 2.0738-.0097 4.1329-.0097 6.2067 0 1.3199.0683 2.53-.1464 2.9008-.3513.7295-1.2613.6393-1.6761.4977-.4221-.2074-.6368-.5026-.8856-.9197-.0683-.1196-.1196-.2123-.1367-.2196-.6514.3977-1.3003.7978-1.9518 1.1955.3246.666.8027 1.2442 1.4151 1.6199.9149.549 2.1445.7173 3.4303.4221.8368-.244 1.559-.749 1.9371-1.5175.5465-1.0076.4294-2.2275.4245-3.5766.0122-2.2007 0-4.4013 0-6.6093z"
                                                    fill="#323330"
                                                />
                                            </svg>
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            alt="TS Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background: 'transparent',
                                            }}
                                            variant="rounded"
                                        >
                                            <svg
                                                fill="none"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m0 8c0-4.41828 3.58172-8 8-8h16c4.4183 0 8 3.58172 8 8v16c0 4.4183-3.5817 8-8 8h-16c-4.41828 0-8-3.5817-8-8z"
                                                    fill="#007acc"
                                                />
                                                <path
                                                    d="m9.30664 16.2108v1.0569h3.37166v9.5963h2.3926v-9.5963h3.3717v-1.0375c0-.5835 0-1.0568-.0259-1.0698 0-.0195-2.0554-.026-4.5518-.026l-4.53881.0195v1.0634zm15.15316-1.0828c.6614.1556 1.1671.4538 1.621.9272.2399.2593.5965.7132.6225.8299 0 .0389-1.1218.7976-1.8026 1.219-.0259.0195-.1297-.0907-.2334-.2593-.3372-.4799-.6808-.6873-1.219-.7262-.7781-.0519-1.2968.3566-1.2968 1.0374 0 .2075.0389.3242.1167.4928.1751.3566.4993.5706 1.5043 1.0115 1.8544.7975 2.6584 1.3227 3.1447 2.0749.5512.8429.6744 2.1656.3048 3.1577-.415 1.0828-1.4265 1.8155-2.8724 2.0554-.4539.0778-1.4914.0649-1.9777-.0194-1.0374-.1945-2.0295-.7133-2.639-1.3811-.2399-.2594-.7002-.9532-.6743-.9986l.2464-.1556.9726-.5641.7327-.4279.1686.2269c.214.3372.6938.7911.9726.9467.8429.4344 1.9711.3761 2.5288-.1297.2399-.2205.3436-.4539.3436-.7781 0-.2982-.0454-.4344-.1945-.6614-.2075-.2852-.6225-.5187-1.7896-1.0374-1.3422-.5706-1.9128-.9337-2.4445-1.4913-.3047-.3372-.5835-.8624-.7132-1.2968-.0973-.3761-.1297-1.2968-.0389-1.6664.2788-1.2968 1.2579-2.2046 2.6584-2.4639.4539-.0908 1.5238-.0519 1.9712.0648z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            alt="React Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background: 'transparent',
                                            }}
                                            variant="rounded"
                                        >
                                            <svg
                                                fill="none"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g fill="#61dafb">
                                                    <path d="m16.3304 18.8099c1.3719 0 2.484-1.124 2.484-2.5104 0-1.3865-1.1121-2.5104-2.484-2.5104s-2.484 1.1239-2.484 2.5104c0 1.3864 1.1121 2.5104 2.484 2.5104z" />
                                                    <path
                                                        clip-rule="evenodd"
                                                        d="m29.6667 16.2996c0-1.7853-2.2123-3.4772-5.6041-4.5264.7828-3.49372.4349-6.2733-1.0979-7.16321-.3519-.2079-.7631-.30683-1.2122-.30762v-.00549c-1.4947 0-3.4515 1.07667-5.43 2.94438-1.9786-1.85672-3.9354-2.92241-5.4301-2.92241v.00549c-.4566 0-.8697.09888-1.22845.30762-1.52738.88991-1.86982 3.664-1.08167 7.14674-3.38089 1.0547-5.58228 2.7411-5.58228 4.5209 0 1.7853 2.21226 3.4772 5.60402 4.5265-.78271 3.4937-.43484 6.2732 1.09798 7.1632.3533.2087.7664.3076 1.223.3076 1.4948 0 3.4515-1.0767 5.4301-2.9444 1.9785 1.8567 3.9353 2.9224 5.4301 2.9224.4565 0 .8696-.0989 1.2284-.3076 1.5274-.8899 1.8698-3.664 1.0817-7.1467 3.37-1.0492 5.5714-2.7412 5.5714-4.521zm-12.48-8.2014c1.7692-1.66179 3.4299-2.57341 4.5604-2.57632v.00548c.25 0 .4512.04944.6197.14283.7392.42847 1.0599 2.05996.8099 4.15839-.0598.51632-.1577 1.06022-.2773 1.61502-1.0653-.2637-2.2285-.4669-3.4515-.5988-.7338-1.01622-1.4948-1.93909-2.2612-2.7466zm-6.2943-2.55436c1.1251 0 2.7938.90639 4.5658 2.55986-.761.8075-1.5219 1.72488-2.2449 2.7411-1.2284.1319-2.3916.3351-3.45695.6043-.12501-.5493-.21742-1.0822-.28265-1.59306-.25546-2.09842.0598-3.72991.7936-4.16388.1631-.09888.375-.14282.6251-.14282zm11.6994 7.09066c-.2011.7086-.4511 1.4392-.7338 2.1698-.2228-.4394-.4565-.8789-.712-1.3184-.25-.4394-.5164-.8679-.7827-1.2854.7718.1154 1.5165.2582 2.2285.434zm-3.799 7.9479c.4512-.6537.886-1.3568 1.31-2.0984.4077-.7196.7827-1.4557 1.1251-2.1918-.3424-.7361-.7174-1.4667-1.1305-2.1863-.424-.7361-.8643-1.4338-1.3154-2.0875-.8045-.0659-1.6253-.1043-2.446-.1043-.8262 0-1.647.0384-2.4569.1098-.4511.6537-.886 1.3569-1.3099 2.0984-.4077.7197-.7882 1.4558-1.1252 2.1919.3424.736.7175 1.4667 1.1306 2.1863.424.7361.8642 1.4337 1.3154 2.0874.8045.0659 1.6252.1044 2.446.1044.8262 0 1.6469-.0385 2.4568-.1099zm3.0663-2.809c.2935.7361.5436 1.4722.7501 2.1864-.712.1757-1.4621.3241-2.2394.4394.2663-.423.5327-.8569.7827-1.3019.25-.4394.4838-.8844.7066-1.3239zm-7.0232 4.1016c.5001.6427 1.0056 1.2305 1.5111 1.7578.5001-.5273 1.0056-1.1151 1.4948-1.7578-.4947.0275-1.0002.0385-1.5111.0385-.5055 0-1.0056-.0165-1.4948-.0385zm-2.537-1.4782c-.7719-.1154-1.5165-.2582-2.2286-.434.2011-.7086.4512-1.4392.7338-2.1698.2229.4394.4566.8789.7121 1.3183.2554.4395.5163.868.7827 1.2855zm5.5299-9.6741c-.5001-.6427-1.0056-1.2305-1.5111-1.75786-.5001.52736-1.0056 1.11516-1.4948 1.75786.4946-.0275 1.0002-.0385 1.5111-.0385.5055 0 1.0056.0165 1.4948.0385zm-5.5321 1.4778c-.2663.423-.5327.857-.7827 1.3019-.25.4395-.4838.8789-.7066 1.3184-.2935-.7361-.5436-1.4722-.7501-2.1863.712-.1703 1.4621-.3186 2.2394-.434zm-8.09227 4.1027c0 .8624 1.24473 1.9501 3.16891 2.7795.47289.2033.98382.3901 1.52194.5603.30439-1.0711.70662-2.1863 1.20672-3.3289-.50554-1.1481-.9132-2.2687-1.22303-3.3453-.52724.1702-1.03818.3515-1.50563.5548-1.92418.824-3.16891 1.9171-3.16891 2.7796zm6.09557 10.6226c-.73926-.4285-1.05996-2.06-.80992-4.1584.05979-.5164.15763-1.0602.27721-1.6151 1.06541.2637 2.22861.467 3.45151.5988.7338 1.0163 1.4948 1.9391 2.2612 2.7466-1.772 1.6645-3.4352 2.5764-4.5658 2.5764-.2446-.0055-.4512-.055-.6142-.1483zm12.0967-.0176c.7337-.4339 1.049-2.0654.7935-4.1638-.0598-.5109-.1576-1.0437-.2826-1.5986-1.0654.2692-2.2286.4725-3.457.6043-.7229 1.0162-1.4839 1.9336-2.2449 2.7411 1.772 1.6535 3.4407 2.5599 4.5659 2.5599.25 0 .462-.044.6251-.1429zm2.8892-7.8265c-.4674.2033-.9784.3845-1.5056.5548-.3098-1.0766-.7175-2.1973-1.223-3.3453.5001-1.1426.9023-2.2578 1.2067-3.329.5381.1703 1.049.3571 1.5274.5604 1.9241.8294 3.1689 1.9171 3.1689 2.7795-.0055.8625-1.2502 1.9556-3.1744 2.7796z"
                                                        fill-rule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                        </Avatar>
                                    </Grid>
                                    {/* <Grid item xs zeroMinWidth>
                                        <Typography
                                            variant="h4"
                                            component="div"
                                            color="inherit"
                                            sx={{ fontWeight: 400, lineHeight: 1.4 }}
                                        >
                                            <b>Built with Material-UI &#169;</b> - The most popular React Component
                                            Library.
                                        </Typography>
                                    </Grid> */}
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ position: 'relative', width: '100%', left: '80px' }}>
                        <LogoAnimation />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderPage;
