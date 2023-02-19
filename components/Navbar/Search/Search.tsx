import useSearchStore from "@/store/useSearchValue";
import { searchPost } from "@/utils/searchPost";
import useDebounce from "@/utils/useDebounce";
import { InputBase } from "@mui/material"
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import fetchPost from "../../fetchPosts";
import styles from '../style.module.css';


function Search() {
    const fillterPost = useSearchStore((state) => state.fillter)
    const setAllPost = useSearchStore((state) => state.setAllPost)
    const [searchInput, setSearchInput] = useState("");
    const debounedSearchValue = useDebounce(searchInput, 500);
    const { data: allPost } = useQuery(['allPosts'], () => fetchPost());
    useMemo(() => {
        if (!debounedSearchValue) {
            setAllPost(allPost)
        } else {
            fillterPost(searchPost(debounedSearchValue, allPost))
        }
    }, [debounedSearchValue])
    return (
        <InputBase value={searchInput} onChange={({ target: { value } }) => setSearchInput(value)} placeholder='search ...' className={`${styles.input} w-100 box-shadow`} />
    )
}


export default Search