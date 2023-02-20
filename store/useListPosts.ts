import { Post } from '@/types/post'
import { searchPost } from '@/utils/searchPost'
import { create } from 'zustand'
import SearchValueState from '@/types/SearchValueState'

const useSearchStore = create<SearchValueState>((set) => ({
    value: [],
    fillter: (data) => set(() => ({ value: data })),
    setAllPost: (data) => set(() => ({ value: data })),
    reverseList: (data) => set(() => ({ value: [...data] }))
}))

export default useSearchStore;