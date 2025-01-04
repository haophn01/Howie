import { Typography } from '@mui/material';
import HTMLFlipBook from 'react-pageflip';
import BackButton from '../Components/BackButton';
export default function Project() {
    return (
        <div>
            <BackButton name="About Me" />
            <Typography variant="body1">
                Welcome to my project page
            </Typography>
            <HTMLFlipBook 
                width={300} 
                height={500} 
                className="" 
                style={{}} 
                maxWidth={300} 
                minWidth={300} 
                maxHeight={500} 
                minHeight={500}
                size="fixed"
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                useMouseEvents={true}
                swipeDistance={30}
                showCover={true}
                mobileScrollSupport={true}
                clickEventForward={true}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.5}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                <div className="demoPage">Page 1</div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook>
        </div>
    )
}
