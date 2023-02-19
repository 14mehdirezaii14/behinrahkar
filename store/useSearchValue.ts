import { Post } from '@/types/post'
import { searchPost } from '@/utils/searchPost'
import { create } from 'zustand'
import SearchValueState from '@/types/SearchValueState'

const useSearchStore = create<SearchValueState>((set) => ({
    value: [],
    fillter: (data) => {
        console.log('filtter run setter',data)
        set(() => ({ value: data }))
    },
    setAllPost: (data) => {
        console.log('setAllPost run setter',data)
        set(() => ({ value: data }))
    },
    reverseList:(data) => {

        set((state) => {
            return({value: [...data]})
        })
    }
}))

export default useSearchStore;