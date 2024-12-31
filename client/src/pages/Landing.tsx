import { Avatar, Typography } from '@mui/material';

export default function Landing() {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Avatar src="logo.svg" style={{
                margin: '20px',
                width: '500px',
                height: '500px',
            }}/>
            <Typography variant = "body1">Welcome to my personal webpage</Typography>
        </div>
    )
}