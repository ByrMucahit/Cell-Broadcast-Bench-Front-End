import React, { Component } from 'react';
import '../Main/style.css';
import { Link } from 'react-router-dom'
import {  ButtonGroup, Image, Form } from 'semantic-ui-react';
import { Formik } from "formik";
import srcImage from '../logo/logo_b.png'
import {Button} from 'reactstrap';

class Home extends Component {
    render(){
        return(
            <>

            <Formik
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise(r => setTimeout(r, 500));
                setSubmitting(false);
              }}>
      
              <Form style={{ position: 'absolute', left: '20%', top: '20%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 800, height: 400, background: '#EDF5E1' }}>
                <h1 style={{ marginTop: '10%', color: 'black' }}>Cell Broadcast Test Bench Document</h1>
                <ButtonGroup>
                    <Button  color="primary" tag={Link} to={"/Generator2G"}>2G</Button>{' '}
                    <Button  color="secondary" tag={Link} to={"/Generator3G"}>3G</Button>{' '}
                    <Button  color="info" tag={Link} to={"/Generator4G"}>4G</Button>{' '}
                    <Button  color="success" tag={Link} to={"/List"}>List</Button>{' '}
                </ButtonGroup>
                <Image style={{ marginTop: '5%' }} src={srcImage} size='tiny' centered />
      
              </Form>
            </Formik>
          </>
        )
    }
}

export default Home;