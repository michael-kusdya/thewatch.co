import React from 'react';
import Image from 'react-bootstrap/Image'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Content (){
    return (
        <div>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed type="image/svg+xml" src="/assets/Q-Timex_TW2T80700_720_70sec_WEB.mp4" />
            </ResponsiveEmbed>
            <Image src="/assets/Desktop_banner.jpg" fluid />
            <div className="separator"></div>
            <Image src="/assets/Desktop_banner_2.jpg" fluid /> 
            <div className="separator"></div>
            <Container>
                <Row>
                    <Col lg={6} sm={12} xs={12}>
                        <Image src="/assets/Visual_Mobile_Desktop-02.jpg" fluid /> 
                    </Col>
                    <Col lg={6} sm={12} xs={12}>
                        <Image src="/assets/P7.png" fluid /> 
                        <div className="timex_content">
                            <h5>Q TIMEX 1979 REISSUE</h5>
                            <div>Vintage Chronograph Black DLC With Black Buffalo Leather and Red Stitching</div>
                            <h5 style={{paddingTop: '20px'}}>IDR 2.500.000</h5>
                            <div>IDR 162.500 / bulan</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="separator"></div>
            <Image src="/assets/Q-Timex_TW2T80700_Beauty07_RGB_HiRes.jpg" fluid /> 
            <Container className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor ipsum finibus diam ultrices, id imperdiet eros facilisis. Maecenas congue ullamcorper erat, sed vestibulum nunc vehicula vitae. Nunc aliquam leo eget ligula vulputate maximus. Phasellus non placerat metus. In luctus vestibulum rhoncus. </p>
                <p>Terms and Condition:</p>
                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                </ol>
            </Container>
        </div>
    )
}

export default Content