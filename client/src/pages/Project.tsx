import { Typography, Box } from '@mui/material';
import HTMLFlipBook from 'react-pageflip';
import BackButton from '../Components/BackButton';
import PageCover from '../Components/PageCover';
export default function Project() {
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

                <Typography variant="h4"><BackButton name="" />Project</Typography>
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
                <HTMLFlipBook 
                width={600} 
                height={500} 
                className="demoPage"  
                maxWidth={1000} 
                minWidth={700} 
                maxHeight={1000} 
                minHeight={500}
                size="stretch"
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                useMouseEvents={true}
                swipeDistance={50}
                showCover={true}
                mobileScrollSupport={false}
                clickEventForward={true}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.5}
                showPageCorners={true}
                disableFlipByClick={true}
                style={{
                    background: 'white',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                }}
            >
                <div><PageCover name="Book Title" image='client/public/logo512.png' /></div>
                <div className="demoPage">Page 1</div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook>
                
            </Box>
        </Box>
    )
}
