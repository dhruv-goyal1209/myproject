import React from 'react'
import './newsletter.css'
import { Container, Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter=() =>{
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>Subscribe now to get useful travelling information.</h2>
                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p className='nl'>
                        


Why Subscribe?
<br/>
1. Exclusive Offers: Get access to special discounts and promotions available only to our newsletter subscribers.<br/>
2. Travel Tips: Receive expert travel advice, packing tips, and destination recommendations to make the most of your next adventure.
<br/>3. Inspiring Stories: Read inspiring travel stories from fellow adventurers and get inspired for your next journey.
<br/>4. Upcoming Tours: Be the first to know about our latest tour offerings and secure your spot before they fill up.


                        </p>

                        
                    </div>
                </Col>
                <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt=""/>
                </div>

                </Col>
            </Row>
        </Container>
    </section>
    
}

export default Newsletter