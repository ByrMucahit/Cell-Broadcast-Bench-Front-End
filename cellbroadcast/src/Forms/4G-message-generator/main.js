import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./style.css";
import "./style-custom.css";
import { Segment, Grid, TextArea, Button, GridColumn, Icon} from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
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
    return (
        <>
        

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    acceptedTerms: false, // added for our checkbox
                    jobType: "" // added for our select
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email addresss`")
                        .required("Required"),
                    acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf([true], "You must accept the terms and conditions."),
                    jobType: Yup.string()
                        // specify the set of valid values for job type
                        // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                            ["designer", "development", "product", "other"],
                            "Invalid Job Type"
                        )
                        .required("Required")
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await new Promise(r => setTimeout(r, 500));
                    setSubmitting(false);
                }}
            >

                <Form style={{ position: 'absolute', left: '20%', top: '10%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 900, height: 800, background: '#557A95' }}>
                    <Segment compact style={{ background: "#0072b1", left: '3%', top: '3%' }}>
                        <Button style={{ background: "#0072b1", color: "#FFFFFF" }}>
                            <Icon /> 4G Message Generator
                        </Button>
                    </Segment>

                    <Grid columns={4} stackable>
                        <Grid.Row>
                            <Grid.Column style={{ left: '5%' }}>

                                <MyTextInput
                                    label="Cell ID"
                                    name="sac"
                                    type="text"
                                    placeholder="SAC"

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
                                    label="Enodeb ID"
                                    name="EnodebId"
                                    type="text"
                                    placeholder="Enodeb ID"
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
                                    <option value="english">English</option>
                                    <option value="turkish">Turkish</option>
                                    <option value="other">Other</option>

                                </MySelect>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ left: '1%' }}>
                            <Grid.Column>
                                <p>Message Content</p>
                            </Grid.Column>


                            <Grid.Column style={{ left: '-7%' }}>
                                <TextArea
                                    label="Message Content"
                                    placeholder='Message Content'
                                    style={{ minHeight: 150 }}
                                    rows={2}
                                />
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row style={{ left: '5%' }}>
                            <Grid.Column>
                                <MyTextInput
                                    label="MME IP Address"
                                    name="MmmeIpAddress"
                                    type="text"
                                    placeholder="MME IP Address"
                                >
                                </MyTextInput>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <NavLink to='/'><Button content='Back' icon='chevron left' labelPosition='left' /></NavLink>
                            </Grid.Column>
                            <GridColumn style={{ left: '46%' }}>
                                <Button content="Next" icon='chevron right' labelPosition='right' floated="right" />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>

                </Form>
            </Formik>
        </>
    );
};

export default SignupForm;