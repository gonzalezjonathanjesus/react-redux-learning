import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "./../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedFrom extends Component {
    constructor() {
        super();

        this.state = {
            title: ""
        };

        this.handeChange = this.handeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handeChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }

    render() {
        const { title } = this.state;
        return(
            <Card>
                <Card.Header>Add a new article</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label style={{fontSize: '14px', color: "#787878"}}>Title:</Form.Label>
                            <Form.Control type="text" id="title" value={title} onChange={this.handeChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SAVE
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
};

const ArticleForm = connect(null, mapDispatchToProps) (ConnectedFrom);

export default ArticleForm;