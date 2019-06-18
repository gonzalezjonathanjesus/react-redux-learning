import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => (
    <Container style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <Row>
            <Col xs={12} sm={12} md={7}>
                <List />
            </Col>
            <Col xs={12} sm={12} md={5}>
                <Form/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12} style={{marginTop: '2rem'}}>
                <Post/>
            </Col>
        </Row>
    </Container>
);

export default App;