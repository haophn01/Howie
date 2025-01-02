import { IconButton, Link } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export interface BackButtonProps {
    name: string
}

export default function BackButton({ name }: BackButtonProps) {
    return (
        <IconButton aria-label="Back">
            <Link href="/"><ArrowBackIosIcon /> {name}</Link>
        </IconButton>
    )
}