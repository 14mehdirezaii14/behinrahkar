import { CircularProgress, Typography } from "@mui/material"

function Loading() {
    return (
        <Typography className='w-full text-center' component='div' ><CircularProgress /> </Typography>
    )
}

export default Loading