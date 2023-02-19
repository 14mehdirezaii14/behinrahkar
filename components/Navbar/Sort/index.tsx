import { memo, useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useReducer } from "react";
import useSearchStore from '@/store/useSearchValue';
import { Post } from "@/types/post";

const Sort = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const listPosts = useSearchStore((state) => state.value)
    const reverseList = useSearchStore((state) => state.reverseList)
    const [testState, setTestState] = useState()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Low = () => {
        let newList: Post[] = listPosts.sort((a: Post, b: Post) => {
            if (a.id > b.id) {
                return -1;
            }
        })
        reverseList(newList)
        handleClose()
    }



    const Much = () => {
        let newList: Post[] = listPosts.sort((a: Post, b: Post) => {
            if (a.id < b.id) {
                return -1;
            }
        })
        reverseList(newList)
        handleClose()
    }

    return (
        <div style={{ display: 'inline-block', position: 'absolute', right: '0px' }}>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Sort
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={Low}>Low</MenuItem>
                <MenuItem onClick={Much}>Much</MenuItem>
            </Menu>
        </div>
    );
}

export default memo(Sort)