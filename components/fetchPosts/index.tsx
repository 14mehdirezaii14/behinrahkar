async function fetchPost(id?: string) {
    let total:any = []
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`).then((res) => {
        total =  res.json()
    })
    return total
}

export default fetchPost