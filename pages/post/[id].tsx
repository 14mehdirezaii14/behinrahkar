import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, GetStaticPaths } from "next"
// import { Post } from "@/types/post";
import fetchPost from "@/components/fetchPosts";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
import Loading from "@/components/Loading";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const getStaticProps: GetStaticProps = async (context) => {

    const id = context.params?.id as string;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['singlePost'],
        queryFn: () => fetchPost(id)
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    };
};


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    };
};


function Post() {

    const route: any = useRouter();
    const id = route.query.id
    const { data, isLoading } = useQuery(['singlePost', id], () => fetchPost(id));

    return (
        <Container className='mt-10'>
            {isLoading ? <Loading /> :
                <>
                    <Typography className="my-5" component="div">
                        <Link className="bg-stone-800 shadow my-40 mb-56 p-3 rounded-lg" href='/' title="back"><ArrowBackIcon /></Link>
                    </Typography>
                    <Typography component='p' className="mt-16">title : {data.title}</Typography>
                    <Typography component='p'>id : {data.id}</Typography>
                    <Typography component='p'>body : {data.body}</Typography>
                    <Typography component='p'>userId : {data.userId}</Typography>
                </>}
        </Container>
    )

}





export default Post