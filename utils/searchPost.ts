import { Post } from "@/types/post";

export function searchPost(query: string, posts: Post[]): any {
    let data: any = []
    if (query && posts) {
        new Promise((resolve) => {
            const matchingPokemons = posts.filter((post) => {
                if (post.title.includes(query.toLowerCase())) {
                    data.push(post)
                }
            })
            // Artificial timeout for demonstration purposes
            setTimeout(() => {
                resolve(matchingPokemons);
            }, 500);
        });
        return data
    }
    return data

};