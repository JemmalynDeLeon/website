const Slider = () =>{
    return(
        <div className="flex bg-neutral-100 h-96"></div>
        import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Slider = () =>{  
     
      const [slide, setSlide] = useState(0);

      const slides = [
        {
            src:'b1.jpg',
            text: 'PHIVOLCS commits to training PUP on REDAS'
        },
        {
            src:'b2.jpg'
        },
        {
            src:'b3.jpg'
        },
        {
            src:'b4.jpg'
        },
        {
            src:'b5.jpg'
        },
        {
            src:'b6.jpg'
        },
        {
            src:'b7.jpg'
        },
        {
            src:'b8.jpg'
        },
      ]

      const Prev = () => {
        setSlide((slide - 1 + slides.length) % slides.length);
      };
    
      const Next = () => {
        setSlide((slide + 1) % slides.length);
      };

      const [hovered, setHovered] = useState(false);

      return (
        <div className='show' style={{ position: 'relative' }} onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)}>
        <Carousel showIndicators={hovered} className='' interval={5000} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay selectedItem={slide} onChange={(index) => setSlide(index)} showArrows={false}>
            
            <img src="b1.jpg" alt="Image 1" />
            <img src="b2.jpg" alt="Image 1" />
            <img src="b3.jpg" alt="Image 1" />
            <img src="b4.jpg" alt="Image 1" />
            <img src="b5.jpg" alt="Image 1" />
            <img src="b6.jpg" alt="Image 1" />
            <img src="b7.jpg" alt="Image 1" />
            <img src="b8.jpg" alt="Image 1" />
            
         </Carousel>
            <div className='show2'>
                <button class="btn bg-black/25 hover:bg-black/50 hover:cursor-pointer absolute top-1/2 left-0 w-100 h-100" onClick={Prev} style={{width:'100px', height:'100px'}}>
                    <i class="fa fa-sharp fa-solid fa-chevron-left pr-2 text-white" style={{fontSize:'36px'}}></i>
                </button>
                <button class="btn bg-black/25 hover:bg-black/50  hover:bg-black/50 absolute top-1/2 right-0 w-100 h-100" onClick={Next} style={{width:'100px', height:'100px'}}>
                <   i class="fa fa-sharp fa-solid fa-chevron-right pl-2 text-white " style={{fontSize:'36px'}}></i>
                </button>
            </div>
        </div>

      );
      
}

export default Slider
    )
}

export default Slider