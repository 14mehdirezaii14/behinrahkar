import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function Navbar() {
    return (
        <div className="py-5 text-shadow">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={2}>
                        <p>مشاهده پست ها</p>
                    </Grid>
                    <Grid item xs={4} md={7} className="text-center">
                        <p>مشاهده پست ها</p>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Navbar