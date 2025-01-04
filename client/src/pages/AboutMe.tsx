import { Typography, Box, Grid } from '@mui/material';
import BackButton from '../Components/BackButton';
import { FormatAlignJustify, FullscreenExit } from '@mui/icons-material';
import { flattenDiagnosticMessageText } from 'typescript';

export default function AboutMe() {
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

                <Typography variant="h4"><BackButton name="" />About Me</Typography>
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
                <Typography variant="body1" style={{
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                }}>
                    Hi, I am Hao Phan. A little you can know about me is I am a first-gen immigrant and also a first-gen college student.
                    I first came to the U.S when I was 14 years old.
                    <br />
                    <br />
                    Originally, I never thought I would love myself so much in technology. Fast forward, I am now a new grad at Cal State
                    University of Long Beach, class of 2024, who is on his own journey looking to become a software engineer.
                    <br />
                    <br />
                    This is the book about me. Feel free to look around.
                </Typography>
            </Box>
        </Box>
    );
}


