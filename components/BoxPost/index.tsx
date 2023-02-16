import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import { loader } from '../loaderImage';
import { useEffect } from 'react';

function BoxPost() {
    
    return (
        <Card dir='ltr' className='box-shadow'>
            {/* <Image src='/img/download.png' alt='user' loader={loader} blurDataURL="blur" height={350} width={370} /> */}
            <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    id : 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BoxPost