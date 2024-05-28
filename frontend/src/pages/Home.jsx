import React from 'react';
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImages-Gallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
const Home=() =>{
    return <>
        
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={worldImg} alt=''/>
                        </div>
                        <h1>Travelling opens the door to create <span className='highlight'>memories</span></h1>
                        <p className='t1'>Travel World represents the travel and tourism sector globally across 185 countries and raised awareness of the importance of the Travel & Tourism sector as one of the world’s largest economic sectors. </p>
                    </div>

                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box'>
                            <img src={heroImg} alt=''/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box hero__video-box mt-4 '>
                            <video src={heroVideo} alt='' controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-5'>
                            <img src={heroImg02} alt=''/>
                        </div>
                    </Col>
                   <SearchBar  /> 
                    
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className='services__subtitle'>What we serve </h5>
                    <h2 className='services__title'>We offer our best services</h2>

                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className='featured__tour-title'>Our featured tours</h2>

                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='experience__content'>
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With our all experience <br/>we will serve you
                            </h2>
                            <p className='t1'>
                           

1. Customized Tours:-
We understand that every traveler is unique, which is why we offer customizable tour packages. From selecting your destinations and accommodations to crafting personalized itineraries, our team will work closely with you to create a journey that reflects your interests and preferences.<br/>

2. Group Tours:-
Embark on an exciting group adventure with like-minded travelers. Our group tours are carefully curated to provide a perfect balance of exploration, comfort, and camaraderie. Join one of our scheduled group departures or let us organize a private group tour for your family, friends, or colleagues.<br/>

3. Luxury Travel:-
Indulge in luxury and sophistication with our exclusive travel experiences. From lavish accommodations and VIP access to curated culinary experiences and private transportation, we'll ensure that every aspect of your journey exudes elegance and refinement.
                            </p>
                        </div>
                        <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className='counter__box'>
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className='counter__box'>
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className='counter__box'>
                            <span>15</span>
                            <h6>Years experience</h6>
                        </div>

                        </div>
                    </Col>
                    <Col lg='6'>
                    <div className='experience__img'>
                        <img src={experienceImg} alt=''/>
                    </div>

                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <row>
                    <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>
                        Visit our customers tour gallery
                    </h2>

                    </Col>
                    <Col lg='12'>
                    <MasonryImagesGallery/>

                    </Col>
                </row>
            </Container>
        </section>
        <section>
            <Container>
                <row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className='testimonial__title'>What our fans say about us </h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </row>
            </Container>
        </section>
        <Newsletter/>

        </>
    
}

export default Home