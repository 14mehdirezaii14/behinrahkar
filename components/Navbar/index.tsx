import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import styles from './style.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import useDebounce from '@/utils/useDebounce';
import { useQuery } from 'react-query';
import fetchPost from '../fetchPosts';
import useSearchStore from '@/store/useSearchValue';

function Navbar() {
    const allPosts = useQuery(['allPosts'], () => fetchPost());
    const search = useSearchStore((state) => state.filter)
    const [searchValue, setSearchValue] = useState("");
    const debounedSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        search(debounedSearchValue, allPosts.data)
    }, [debounedSearchValue])

    return (
        <Typography component='div' className="py-5 my-5 box-shadow">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <Typography variant='h5' component='h1' >View posts</Typography>
                    </Grid>
                    <Grid item xs={4} md={7} className="text-center">
                        <SearchIcon className={styles.iconSearch} />
                        <InputBase value={searchValue} onChange={({ target: { value } }) => setSearchValue(value)} placeholder='search ...' className={`${styles.input} w-100 box-shadow`} />
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    )
}

export default memo(Navbar)