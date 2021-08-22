import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Input, Table, InputGroupText, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Formik, Form, useField } from "formik";
import { Segment, GridColumn, Icon, Grid } from 'semantic-ui-react'
import MyTextInput from '../../Utilities/MyTextInput';
import MySelect from '../../Utilities/MySelect';
import MyTextArea from '../../Utilities/MyTextArea';




class Generator2G extends Component {

    emptyItem = {
        cellId: '',
        repitationPeriod: '',
        lac: '',
        numberOfBroadcastRequest: '',
        messageIdentifier: '',
        language: '',
        messageContent: '',
        bscIpAddress: ''
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
        this.state({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/Generator2G' + (item.id ? '/' + item.id : ''), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/Generator2G');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id = 'Add Generator'}</h2>

        return (
            <>


                <Formik>
                    <Form className="genContainer" style={{ position: 'absolute', left: '20%', top: '10%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 900, height: 800, background: '#BC4639' }} >
                        <Segment compact style={{ background: "#4267B2", left: '5%', top: '3%' }}>
                            <Button style={{ background: "#4267B2", color: "#FFFFFF" }}>
                                <Icon /> 2G Message Generator
                            </Button>
                        </Segment>
                        <Grid>

                            <Grid.Column style={{ left: '5%' }}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <MyTextInput
                                            label="cellId"
                                            name="cellId"
                                            type="text"
                                            placeholder="Cell Id"
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <MyTextInput
                                            label="Repitation Period"
                                            name="repitationPeriod"
                                            type="text"
                                            placeholder="Repitation Period"
                                        />
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column style={{ left: '5%' }}>
                                        <MyTextInput
                                            label="LAC"
                                            name="lac"
                                            type="text"
                                            placeholder="LAC"
                                        />
                                    </Grid.Column>
                                    <Grid.Column style={{ left: '25%' }}>
                                        <MyTextInput
                                            label="Number of broadcast request"
                                            name="NumberOfBroadcastRequest"
                                            type="text"
                                            placeholder="Number of broadcast request"
                                        />
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column style={{ left: '5%' }}>
                                        <MySelect
                                            label="Message Identifier"
                                            name="messageIdentifier"
                                        >
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
                                        </MySelect>
                                    </Grid.Column>
                                    <Grid.Column style={{ left: '25%' }}>
                                        <MySelect label="Language" name="language">
                                            <option value="">Select language</option>
                                            <option value="88">English</option>
                                            <option value="1">Turkish</option>
                                            <option value="0">Other</option>

                                        </MySelect>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row >
                                    <Grid.Column style={{ left: '5%', top: '-8%' }}>
                                        <MyTextArea
                                            name="messageContent"
                                            label="Message Content"
                                            placeholder='Message Content'
                                            style={{ minHeight: 150 }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                    <Grid.Column style={{ left: '5%', top: '-50%' }}>
                                        <MyTextInput
                                            label="BSC IP Address"
                                            name="BSCIpAddress"
                                            type="text"
                                            placeholder="BSC IP Address"
                                        >
                                        </MyTextInput>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                    <Grid.Column style={{ top: '-70%' }} >
                                        <Button  color="info" tag={Link} to={"/"} style={{floated:'left'}} >Back</Button>{' '}
                                    </Grid.Column>
                                    <GridColumn style={{ left: '46%', top: '-70%' }}  floated='right'>
                                    <Button color="info" tag={Link} to={"/"} style={{floated:'right'}} >Next</Button>{' '}
                                    </GridColumn>
                                </Grid.Row>

                            </Grid.Column>
                        </Grid>
                    </Form>
                </Formik>
            </>
        )


    }
}

export default Generator2G;