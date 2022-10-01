import FadeInWhenVisible from './Animation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';

const MemberItem = ({ url, name, position }: { url: string; name: string; position: string }) => (
    <FadeInWhenVisible>
        <Card sx={{ width: 252, backgroundColor: 'transparent', margin: 'auto', marginLeft: 10 }}>
            <CardActionArea>
                <CardMedia component="img" height="336" image={url} alt="green iguana" sx={{ borderRadius: '15px' }} />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography>{position}</Typography>
            </CardContent>
        </Card>
    </FadeInWhenVisible>
);

export default MemberItem;
