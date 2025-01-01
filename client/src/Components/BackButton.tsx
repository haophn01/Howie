import {IconButton, Link} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BackButton() {
    return (
        <IconButton aria-label="Back">
            <Link href= "/"><ArrowBackIosIcon/></Link>
        </IconButton>
    )
}