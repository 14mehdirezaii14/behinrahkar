import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styles from './style.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { memo } from 'react';
import Sort from './Sort';
import Search from './Search';

function Navbar() {
    return (
        <Typography component='div' className="py-5 my-5 box-shadow">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={2}>
                        <Typography variant='h5' component='h1' >View posts</Typography>
                    </Grid>
                    <Grid item xs={12} md={7} style={{ position: 'relative' }} className="text-center">
                        <SearchIcon className={styles.iconSearch} />
                        <Search />
                        <Sort />
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    )
}

export default memo(Navbar)