import { create } from 'zustand'
import SearchValueState from '@/types/SearchValueState'

const useListPosts = create<SearchValueState>((set) => ({
    value: [],
    fillter: (data) => set(() => ({ value: data })),
    setAllPost: (data) => set(() => ({ value: data })),
    reverseList: (data) => set(() => ({ value: [...data] }))
}))

export default useListPosts;