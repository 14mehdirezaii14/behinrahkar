import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import styles from './style.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import useDebounce from '@/utils/useDebounce';
import { searchPost } from '@/utils/searchPost';
import { useQuery } from 'react-query';
import fetchPost from '../fetchPosts';



function Navbar() {
    const allPosts = useQuery(['allPosts'], () => fetchPost());

    const [searchValue, setSearchValue] = useState("");
    const debounedSearchValue = useDebounce(searchValue, 3000);

    const searchPostQuery: any = useQuery(
        ["searchPost", debounedSearchValue],
        () => searchPost(debounedSearchValue, allPosts.data),
        {
            enabled: debounedSearchValue.length > 0
        },
    );

    useEffect(() => {
        console.log(searchPostQuery.status)
        if(searchPostQuery.status === 'success'){
            console.log(searchPostQuery.data)
        }
    }, [searchPostQuery])
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