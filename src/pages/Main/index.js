import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main(){
    return(
        <div>
            {/* Header */}
            <Container>
                <Row className="align-items-center">
                    <Col md={3}>
                        <Profile />
                    </Col>
                    <Col>
                        <BreadCrumbs />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

Main.defaultProps = {
    page: 'Projects',
    company: 'Company Ltd',
    username: 'Username'
}

export default Main;