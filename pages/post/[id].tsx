import { useQuery, QueryClient, dehydrate } from "react-query"
import { GetStaticProps, GetStaticPaths } from "next"
import { Post } from "@/types/post";
import fetchPost from "@/components/fetchPosts";

export const getStaticProps: GetStaticProps = async (context) => {

    const id = context.params?.id as string;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["posts", id],
        () => fetchPost(id).then((res) => res)
    );

    let data = dehydrate(queryClient).queries[0].state.data

    return {
        props: {
            data
        }
    };
};


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
};


function Post(props: { data: Post }) {
    console.log(props.data)
    const { body, id, title, userId } = props.data
    return (
        <>
            <div>
                <p>title : {title}</p>
                <p>id : {id}</p>
                <p>body : {body}</p>
                <p>userId : {userId}</p>
            </div>
        </>
    )
}





export default Post