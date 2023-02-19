import { Post } from "@/types/post";

export function searchPost(query: string, posts: Post[]): Post[] | [] {
    let data: any = []
    if (query && posts) {
        new Promise((resolve) => {
            const matchingPosts = posts.filter((post) => {
                if (post.title.includes(query.toLowerCase())) {
                    data.push(post)
                }
            })
            if (data.length === 0) {
                data.push('notFound')
            }
            // Artificial timeout for demonstration purposes
            setTimeout(() => {
                resolve(matchingPosts);
            }, 500);

        });
    }
    else if (!query) {
        data = []
    }
    return data

};