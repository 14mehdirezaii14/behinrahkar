import {Post} from "./post"
export default interface SearchValueState {
    value: Post[] | string[]
    filter: (query: string, post: Post[]) => void
}