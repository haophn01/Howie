import { Typography, Box, Grid } from '@mui/material';
import BackButton from '../Components/BackButton';

export default function AboutMe() {
    return (
        <Box style={{
            backgroundColor: '#F7F4DF',
            height: '100vh',
        }}>
            {/* Back Button */}
            <BackButton name="" />

            {/* Content Section */}
            <Grid container spacing={2} style={{ marginTop: '20px', height: '100%' }}>
                {/* Left Column: Image and Title */}
                <Grid item xs={12} md={5} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h4" style={{
                        marginBottom: '20px',
                        fontWeight: 'bold',
                    }}>
                        About Me
                    </Typography>
                    <img
                        src="/path-to-your-image.png" // Replace with your image path
                        alt="About Me Illustration"
                        style={{
                            width: '200px',
                            height: 'auto',
                            marginBottom: '20px',
                        }}
                    />
                </Grid>


                {/* Right Column: Text */}
                <Grid item xs={12} md={7} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '20px',
                }}>
                    <Typography variant="body1" style={{
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                    }}>
                        Hi, I am Hao Phan. A little you can know about me is I am a first-gen immigrant and also a first-gen college student.
                        I first came to the U.S. when I was 14 years old.
                        <br />
                        <br />
                        Originally, I never thought I would love myself so much in technology. Fast forward, I am now a new grad at Cal State
                        University of Long Beach, class of 2024, who is on his own journey looking to become a software engineer.
                        <br />
                        <br />
                        This is the book about me. Feel free to look around.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
