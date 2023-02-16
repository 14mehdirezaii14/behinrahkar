import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, GetStaticPaths } from "next"


export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["posts", id],
        () => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            return res.json()
        })
    );
    console.log('[id]:13', dehydrate(queryClient))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
};


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: '1' } }],
        fallback: true
    };
};


function Post(props: any) {
    console.log(props)
    return (
        <>
            Post
        </>
    )
}





export default Post