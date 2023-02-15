import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function BoxPost() {
    return (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            Box
        </Card>
    )
}

export default BoxPost