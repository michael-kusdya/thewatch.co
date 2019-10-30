import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer (){
    return(
        // <Container >
            <Row style={{background: '#DDD', paddingTop: '30px'}}>
                <Col lg={4} sm={12} xs={12} style={{paddingLeft: '25px', marginTop: '25px'}}>
                    <div className="footer_link">
                        <a href=''>ABOUT</a>
                    </div>
                    <div className="footer_link"> 
                        <a href=''>SHIPPING INFORMATION</a>
                    </div>
                    <div className="footer_link">
                        <a href=''>TERMS AND CONDITION</a>
                    </div>
                    <div className="footer_link">
                        <a href=''>FAQ</a>
                    </div>
                    <div className="footer_link">
                        <a href=''>WARRANTY AND SERVICE</a>
                    </div>
                    <div className="footer_link">
                        <a href=''>CONTACT</a>
                    </div>
                    <div className="footer_link">
                        <a href=''>STORE LOCATION</a>
                    </div> 
                </Col>
                <Col lg={4} sm={12} xs={12} style={{marginTop: '25px',  textAlign: 'center'}}>
                    <div>IKUTI / DAFTAR NEWSLETTER KAMI</div> 
                    <input class="footer newsletter email email-subscribe margin-email" type="text" name="newsletter" placeholder="Enter your email address"></input>
                    <span class="input-group-addon subscribe-newsletter button-subscribe">SUBSCRIBE</span>
                </Col>
                <Col lg={4} sm={12} xs={12} style={{marginTop: '25px',  textAlign: 'center'}}>
                    <div>METODE PEMBAYARAN</div> 
                </Col>
            </Row>
        // </Container>
    )
}

export default Footer