import axios from 'axios'

export const fetchPost = async (id?:string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`);
    return data;
}

export default fetchPost