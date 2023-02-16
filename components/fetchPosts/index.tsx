import { useQuery } from "react-query"
export const fetchPosts:any = useQuery('posts',
    () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
        return res.json()
    })
)