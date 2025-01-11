import {Typography, Box} from '@mui/material';
import BackButton from '../Components/BackButton';
export default function Technical() {
    return (
        <Box style={{
            backgroundColor: '#F7F4DF',
            height: '100vh',
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            {/* Left Box */}
            <Box style={{
                borderColor: "black",
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Typography variant="h4"><BackButton name="" />Technical</Typography>
            </Box>

            {/* Middle Box */}
            <Box style={{
                width: '4px',
                backgroundColor: '#D9D9D9',
                height: "60%",
                margin: '0 1rem',
                borderRadius: '10px',
                border: "solid",
            }}></Box>

            {/* Right Box */}
            <Box style={{
                borderColor: "black",
                width: '70%',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                
                
            </Box>
        </Box>
    )
} 