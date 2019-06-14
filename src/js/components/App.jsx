import React from "react";
import List from "./List";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => (
    <Container>
        <Row style={{marginTop: '2rem'}}>
            <Col xs={5} sm={4} md={7}>
                <List />
            </Col>
            <Col xs={4} sm={3} md={5} >
                <Form/>
            </Col>
        </Row>
    </Container>
);

export default App;