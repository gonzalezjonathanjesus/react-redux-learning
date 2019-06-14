import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    
    <Card>
        <Card.Header>Articles</Card.Header>
        <ListGroup variant="flush">
            {articles.map(el => (
                <ListGroup.Item key={el.id}>{el.title}</ListGroup.Item>
            ))}
        </ListGroup>
    </Card>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;