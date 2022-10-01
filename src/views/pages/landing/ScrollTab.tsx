import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import FadeInWhenVisible from './Animation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, SvgIcon, Tab, Typography } from '@mui/material';
import user1 from 'assets/images/profile/phuc-profile.jpg';
import user2 from 'assets/images/profile/thong-profile2.jpg';
import user3 from 'assets/images/profile/khang-profile.jpg';
import user4 from 'assets/images/profile/269090092_2909308966047632_3270239021612346658_n.jpg';
import { border, fontSize, width } from '@mui/system';

export default function ScrollableTabsButtonVisible() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: '100%',
                bgcolor: 'transparent',
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="wrapped label tabs example"
                //centered={true}
                TabIndicatorProps={{
                    sx: {
                        display: 'none',
                    },
                }}
                TabScrollButtonProps={{
                    sx: {
                        height: 40,
                        margin: 'auto 0',
                        borderRadius: '50%',
                        color: 'rgb(110, 0, 255)',
                        border: '3px solid rgba(110, 0, 255, 0.24)',
                        ['>.MuiSvgIcon-root']: { fontSize: '2rem' },
                    },
                }}
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.4 },
                    },
                    [`& .${tabsClasses.flexContainer}`]: {
                        borderBottom: 'none',
                    },
                }}
            >
                <FadeInWhenVisible>
                    <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
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
                <FadeInWhenVisible>
                    <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="336"
                                image={user2}
                                alt="green iguana"
                                sx={{ borderRadius: '15px', imageRendering: 'crisp-edges' }}
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
                <FadeInWhenVisible>
                    <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
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
                <FadeInWhenVisible>
                    <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="336"
                                image={user4}
                                alt="green iguana"
                                sx={{ borderRadius: '15px' }}
                            />
                        </CardActionArea>
                    </Card>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="336"
                                image={user4}
                                alt="green iguana"
                                sx={{ borderRadius: '15px' }}
                            />
                        </CardActionArea>
                    </Card>
                </FadeInWhenVisible>
                {/* <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" /> */}
            </Tabs>
        </Box>
    );
}
