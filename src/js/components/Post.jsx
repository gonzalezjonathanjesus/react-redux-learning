import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./../actions/index";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export class Post extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <Card>
                <Card.Header>API Posts</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        {console.log("render ejecutado")}
                        {
                            this.props.data.loading ?
                                <ListGroup.Item key={'loading'}>Cargando posteos...</ListGroup.Item>  
                            :
                                this.props.data.list.map(el => (
                                    <ListGroup.Item key={el.id}>
                                        {el.title}
                                    </ListGroup.Item>
                                ))
                            }
                    </ListGroup>
                </Card.Body>
            </Card>

        );
    }
}

function mapStateToProps(state) {
    return {
        data: {
            ...state.remoteArticles,
            list: state.remoteArticles.list.slice(0,10),
            loading: state.remoteArticles.loading
        }
    };
}

export default connect(
    mapStateToProps, { fetchData }
  )(Post);