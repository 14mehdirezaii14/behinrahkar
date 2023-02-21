import useListPosts from "@/store/useListPosts";
import { searchPost } from "@/utils/searchPost";
import useDebounce from "@/utils/useDebounce";
import { InputBase } from "@mui/material"
import { memo, useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchPost from "../../fetchPosts";
import styles from '../style.module.css';


function Search() {
    const fillterPost = useListPosts((state) => state.fillter)
    const setAllPost = useListPosts((state) => state.setAllPost)
    const [searchInput, setSearchInput] = useState("");
    const debounedSearchValue = useDebounce(searchInput, 500);
    const { data: allPost } = useQuery('allPosts', () => fetchPost());
    useEffect(() => {
        !debounedSearchValue ? setAllPost(allPost) : fillterPost(searchPost(debounedSearchValue, allPost))
    }, [debounedSearchValue])
    return (
        <InputBase value={searchInput} onChange={({ target: { value } }) => setSearchInput(value)} placeholder='search ...' className={`${styles.input}  w-100 box-shadow`} data-cy="searchInput" />
    )
}


export default memo(Search)