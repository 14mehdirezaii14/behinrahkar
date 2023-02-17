import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import { loader } from '../loaderImage';
import { useEffect } from 'react';
import { Post } from '@/types/post';
import styles from './boxPost.module.css'

function BoxPost({ id, body, title, userId }: Post) {
    return (
        <Card dir='ltr' className={`box-shadow ${styles.cardBoxPost}`}>
            {/* <Image src='/img/download.png' alt='user' loader={loader} blurDataURL="blur" height={350} width={370} /> */}
            <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    id : {id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BoxPost