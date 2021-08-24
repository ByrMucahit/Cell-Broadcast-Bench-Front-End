import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom'






class Generator2G extends Component {

    emptyItem = {
        department_id:2,
        language: 0,
        message_identifier: '3453453345',
        sender_id:3,
        msg_status:''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
      
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
        console.log(item);

    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        
        console.log("submit")
        console.log(JSON.stringify(item));
        
        await fetch('/api/generators/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then(response => response.json()).then(data => console.log("data:"+JSON.stringify(data)));
        this.props.history.push('/');
    }


    render() {

        return (
            <>
                <div>
                    <Container>
                        <Label>4G Message Generator</Label>
                        <Form onSubmit={this.handleSubmit}>
                            <label>msg status</label>
                            <input onChange={this.handleChange} value={this.state.value} name="msg_status"></input><br/>
                            <label>sender id</label>
                            <input onChange={this.handleChange} value={this.state.value} name="sender_id"></input><br/>
                            <label>Department id</label>
                            <input onChange={this.handleChange} value={this.state.value} name="department_id"></input>
                            <FormGroup>
                                <select id="messageIdentifier" name="message_identifier" onChange={this.handleChange} value={this.state.value} autoComplete="messageIdentifier">
                                    <option value="">Message Identifier</option>
                                    <option value="4370">Presential Level Alerts</option>
                                    <option value="4371">Extreme Alerts with Severity of Extreme, Urgency of Immediate and Certainty of Observed</option>
                                    <option value="4372">Extreme Alerts with Severity of Extreme, Urgency of Immediate and Certainty of Likely</option>
                                    <option value="4373">Severe Alerts with Severity of Extreme, Urgency of Immediate and Certainty of Observed</option>
                                    <option value="4374">Severe Alerts with Severity of Extreme, Urgency of Immediate and Certainty of Likely</option>
                                    <option value="4375">Severe Alerts with Severity of Severe, Urgency of Immediate and Certainty of Observed</option>
                                    <option value="4376">Severe Alerts with Severity of Severe, Urgency of Immediate and Certainty of Likely</option>
                                    <option value="4377">Severe Alerts with Severity of Severe, Urgency of Expected and Certainty of Observed</option>
                                    <option value="4378">Severe Alerts with Severity of Severe, Urgency of Expected and Certainty of Likely</option>
                                    <option value="4379">Child Abduction Emergency(or Amber Alert)</option>
                                    <option value="4380">Required Montly Test</option>
                                    <option value="4381">CMAS Exercise</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <select id="messageIdentifier" name="language" onChange={this.handleChange} value={this.state.value} autoComplete="language">
                                    <option value="">Select language</option>
                                    <option value="88">English</option>
                                    <option value="1">Turkish</option>
                                    <option value="0">Other</option>

                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Button color="secondary" tag={Link} to="/">Back</Button>{' '}
                                <Button color="primary" type="submit">Next</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            </>
        )
    }
}

export default Generator2G;