import React from 'react';
import axios from 'axios';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./style.css";
import "./style-custom.css";
import { Segment, Grid, Button, GridColumn, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import GeneratorService from "../../services/GeneratorService";

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


export default class PostRequest extends React.Component {

    
    state = {
        author: [],
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const values = {
          
            article: this.state.artice

        };

        axios.post('http://localhost:8080/api/generators/show', this.state.article)
        .then(res => {
            console.log(this.state.article);
            console.log(res);
            console.log(res.data);
            console.log(values);
        })
    }
    render(){
        return(
            <Formik >

            <Form style={{ position: 'absolute', left: '20%', top: '10%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 900, height: 800, background: '#557A95' }} onSubmit={this.handleSubmit  }>
                <Segment compact style={{ background: "#0072b1", left: '3%', top: '3%' }}>
                    <Button style={{ background: "#0072b1", color: "#FFFFFF" }}>
                        <Icon /> 4G Message Generator
                    </Button>
                </Segment>

                <Grid columns={4} stackable>
                    <Grid.Row>
                        <Grid.Column style={{ left: '5%' }}>

                           

                        </Grid.Column>
                        <Grid.Column style={{ left: '25%' }}>

                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ left: '5%' }}>
                           
                        </Grid.Column>
                        <Grid.Column style={{ left: '25%' }}>
                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ left: '5%' }}>
                            <label>
                                message identifier:
                            </label>
                            <input type="text" name="article" onChange={this.handleChange}/>
                        </Grid.Column>
                        <Grid.Column style={{ left: '25%' }}>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column style={{ left: '5%', top: '-8%' }}>
                           
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column style={{ left: '5%', top: '-50%' }}>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ top: '-70%' }}>
                            <NavLink to='/'><Button content='Back' icon='chevron left' labelPosition='left' /></NavLink>
                        </Grid.Column>
                        <GridColumn style={{ left: '46%', top: '-70%' }}>
                            <Button content="Next" icon='chevron right' labelPosition='right' floated="right" type="submit" />
                        </GridColumn>
                    </Grid.Row>
                </Grid>

            </Form>
        </Formik>
        )
    }
}