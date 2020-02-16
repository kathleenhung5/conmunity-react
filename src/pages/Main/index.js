import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../../comp/Profile';
import BreadCrumbs from '../../comp/BreadCrumbs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Main({page,company,username, setCurPage}){
    return(
        <div>
            {/* Header */}
            <Container>
                <Row className="align-items-center">
                    <Col md={3}>
                        <Profile 
                        companyName={company} 
                        username={username} />
                    </Col>
                    <Col>
                        <BreadCrumbs page={page} setCurPage={setCurPage}/>
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