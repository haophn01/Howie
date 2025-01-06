import {Box, Typography} from '@mui/material';

export interface PageCoverProps {
    name: string;
    image?: string;
}

export default function PageCover({ name, image}:PageCoverProps) {
    return (
        <Box data-density="hard" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                position: "relative"}}>
            <Box 
                style ={{
                    position: "relative",
                    zIndex: "1", /* Make sure it stays on top */
                    color: "white", /* Make text visible over the image */
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", /* Optional: Add text shadow */
            }}>
                {image && <img src={image} alt={name} style ={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "0",
                }} />}
                <Typography variant="h4">{name}</Typography>
            </Box>
        </Box>
    )
}