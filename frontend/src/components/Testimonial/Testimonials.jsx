import React from 'react'
import Slider from 'react-slick'; 
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
const Testimonials=() =>{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
    return (
    <Slider { ...settings} className='sd'>
            <div className="testimonial py-4 px-3">
                <p>
                "My recent trip with Travel World far exceeded my expectations. Not only were the destinations breathtaking, but the guides were knowledgeable, friendly, and went above and beyond to ensure that every member of the group had a memorable experience. I've already booked my next adventure with them and can't wait to embark on another unforgettable journey."
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Krish Goyal
                        </h6>
                       <p>Customer</p> 
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                "Thanks to Travel World, I've made memories that will last a lifetime. From exploring ancient ruins to witnessing breathtaking natural wonders, every moment of my journey was filled with awe and wonder. The guides were passionate and knowledgeable, sharing fascinating insights into the history and culture of each destination. I can't wait to travel with Travel World again!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Neena Goyal
                        </h6>
                       <p>Customer</p> 
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                "Traveling with Travel World was truly a journey of a lifetime. From the moment we arrived, we were greeted with warmth and hospitality. The itinerary was perfectly curated, allowing us to immerse ourselves in the culture and beauty of each destination. I returned home with a renewed sense of wonder and gratitude for the world around us. Thank you,Travel World, for an incredible adventure!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Vikas Goyal
                        </h6>
                       <p>Customer</p> 
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                "I've had the pleasure of traveling with Travel World on multiple occasions, and each time has been nothing short of exceptional. Their attention to detail, personalized service, and commitment to customer satisfaction set them apart from other tour companies. Whether you're a seasoned traveler or embarking on your first adventure, I highly recommend Travel World for an unforgettable experience."
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Megha Goyal
                        </h6>
                       <p>Customer</p> 
                    </div>
                </div>
            </div>

        </Slider>
        )
    
}

export default Testimonials