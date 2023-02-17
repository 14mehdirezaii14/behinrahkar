import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, GetStaticPaths } from "next"
// import { Post } from "@/types/post";
import fetchPost from "@/components/fetchPosts";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
    if (isLoading) return "Loading ..."
    return (
        <>
            <div>
                <Link shallow={true} href='/'>Back</Link>
                <p>title : {data.title}</p>
                <p>id : {data.id}</p>
                <p>body : {data.body}</p>
                <p>userId : {data.userId}</p>
            </div>
        </>
    )

}





export default Post