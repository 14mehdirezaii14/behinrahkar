// async function fetchPost(id?: string) {
//     let posts: any = []
//     await fetch(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`).then((res) => {
//         posts = res.json()
//     })
//     return posts
// }
import axios from 'axios'

export const fetchPost = async (id?:string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`);
    console.log(data)
    return data;
}

export default fetchPost