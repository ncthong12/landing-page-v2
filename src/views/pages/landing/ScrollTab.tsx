import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import user1 from 'assets/images/profile/phuc-profile.jpg';
import user2 from 'assets/images/profile/thong-profile2.png';
import user3 from 'assets/images/profile/khang-profile.png';
import user4 from 'assets/images/profile/269090092_2909308966047632_3270239021612346658_n.jpg';
import MemberItem from './MemberItem';

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
                        '.MuiSvgIcon-root': { fontSize: '2rem' },
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
                <MemberItem url={user1} name="Nguyen Pham Dinh Phuc" position="Backend Developer" />
                <MemberItem url={user2} name="Nguyen Cao Thong" position="Frontend Developer" />
                <MemberItem url={user3} name="Nguyen Bach Phuc Khang" position="Devops Engineer" />
                <MemberItem url={user4} name="..." position="Placeholder" />
            </Tabs>
        </Box>
    );
}
