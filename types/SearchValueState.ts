import { Post } from "./post"
export default interface SearchValueState {
    value: any
    fillter: (data: Post[]) => void
    setAllPost: (data: Post[]) => void
}