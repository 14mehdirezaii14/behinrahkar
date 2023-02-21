import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Post } from '@/types/post';
import styles from './boxPost.module.css'

function BoxPost({ id, body, title,userId }: Post) {
    return (
        <Card dir='ltr' className={`box-shadow ${styles.cardBoxPost}`}>
            {/* <Image src='/img/download.png' alt='user' loader={loader} blurDataURL="blur" height={350} width={370} /> */}
            <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="h1">
                    {title}
                </Typography>
                <Typography className='text-left' gutterBottom component="p">
                    id : {id}
                </Typography>
                <Typography className='text-left' gutterBottom component="p">
                    userId : {userId}
                </Typography>
                <Typography className='text-white' variant="body2" >
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BoxPost