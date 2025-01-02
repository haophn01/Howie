import {Typography} from '@mui/material';
import BackButton from '../Components/BackButton';
export default function Home() {
    return (
        <div>
            <BackButton name ="Home"/>
            <Typography variant="body1"> 
                    Welcome to my home page 
            </Typography>
        </div>
    )
} 