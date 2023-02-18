import { Post } from '@/types/post'
import { searchPost } from '@/utils/searchPost'
import { create } from 'zustand'
import SearchValueState from '@/types/SearchValueState'

const useSearchStore = create<SearchValueState>((set) => ({
    value: [],
    filter: (query, posts) => {
        set((state) => ({ value: searchPost(query, posts) }))
    },
}))

export default useSearchStore;