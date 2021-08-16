import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./style.css";
import "./style-custom.css";
import { Segment, Grid, Button, GridColumn, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input id={props.id} className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea id={props.id} className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};

// And now we can use these
const SignupForm = () => {
    const initialValues = { cellId: "", 
    repitationPeriod:"", 
    lac:"",
    NumberOfBroadcastRequest:"",
    message_status: "", 
    message_generation: "", 
    messageIdentifier: "",
    language: "",
    messageContent: "",
    BSCIpAddress: ""
    }

    const schema = Yup.object({
        cellId: Yup.string().required("Cell Id's required"),
        repitationPeriod: Yup.string().required("Repitation Period's required"),
        lac: Yup.string().required("Lac's required"),
        NumberOfBroadcastRequest:  Yup.string().required("Number Of Broadcast Request's required"),
        messageIdentifier: Yup.string().required("Message identifier's required"),
        language: Yup.string().required("Language's required"),
        messageContent: Yup.string().required("Text Area's required"),
        BSCIpAddress: Yup.string().required("BSC Ip Address's required")
    });
   
    return (

        <>

           
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                <Form className="genContainer" style={{ position: 'absolute', left: '20%', top: '10%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 900, height: 800, background: '#BC4639' }} >
                    <Segment compact style={{ background: "#4267B2", left: '5%', top: '3%' }}>
                        <Button style={{ background: "#4267B2", color: "#FFFFFF" }}>
                            <Icon /> 2G Message Generator
                        </Button>
                    </Segment>

                    <Grid columns={4} stackable>
                        <Grid.Row>
                            <Grid.Column style={{ left: '5%' }}>
                                <MyTextInput
                                    label="cellId"
                                    name="cellId"
                                    type="text"
                                    placeholder="Cell Id"
                                />

                            </Grid.Column>
                            <Grid.Column style={{ left: '25%' }}>
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
                            <Grid.Column style={{ top: '-70%' }}>
                                <NavLink to='/'><Button content='Back' icon='chevron left' labelPosition='left' /></NavLink>
                            </Grid.Column>
                            <GridColumn style={{ left: '46%', top: '-70%'}}>
                                <Button content="Next" icon='chevron right' labelPosition='right' floated="right" type="submit" />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>

                </Form>
            </Formik>
        </>
    );
};

export default SignupForm;