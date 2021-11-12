import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="relative">
            <div className='absolute mx-auto w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20 ' />
            <Carousel autoPlay 
            infiniteLoop  
            showArrows={false} 
            showIndicators={false} 
            showThumbs={false} 
            interval={3000}>
                <div>
                    <img loading='lazy' src="https://links.papareact.com/gi1" />
                </div>
                <div>
                    <img src="https://links.papareact.com/6ff" />
                </div>
                <div>
                    <img src="https://links.papareact.com/7ma" />
                </div>
            </Carousel>
            
        </div>
    )
}

export default Banner
