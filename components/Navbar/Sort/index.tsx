import { memo, useState } from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useListPosts from '@/store/useListPosts';
import { Post } from "@/types/post";
import TuneIcon from '@mui/icons-material/Tune';
const Sort = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const listPosts = useListPosts((state) => state.value)
    const reverseList = useListPosts((state) => state.reverseList)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Low = () => {
        handleClose()
        let newList: any = listPosts.sort(function (a: Post, b: Post) {
            return a.id > b.id ? 1 : -1;
        })
        reverseList(newList)
    }

    const Much = () => {
        handleClose()
        let newList: any = listPosts.sort(function (a: Post, b: Post) {
            return a.id < b.id ? 1 : -1;
        })
        reverseList(newList)
    }

    return (
        <div className="absolute inline-block right-0">
            <Button
                data-cy="Sort"
                title="Sort List"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <TuneIcon className="text-white" />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem data-cy="Low" onClick={Low}>Low</MenuItem>
                <MenuItem data-cy="Much" onClick={Much}>Much</MenuItem>
            </Menu>
        </div>
    );
}

export default memo(Sort)