import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import styles from './style.module.css'
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
    return (
        <div className="py-5 box-shadow">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <p>مشاهده پست ها</p>
                    </Grid>
                    <Grid item xs={4} md={7} className="text-center">
                        <SearchIcon className={styles.iconSearch} />
                        <InputBase placeholder='جستجو' className={`${styles.input} w-100 box-shadow`} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Navbar