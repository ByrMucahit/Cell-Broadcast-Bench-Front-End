import React from "react";
import { Formik } from "formik";
import "./style.css";
import "../Main/style-custom.css";
import 'semantic-ui-css/semantic.min.css'
import { Button, Image, Form } from 'semantic-ui-react'
import src1 from '../logo/logo_b.png'
import { NavLink } from 'react-router-dom'


// And now we can use these
const SignupForm = () => {

  return (
    <>

      <Formik
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}>

        <Form style={{ position: 'absolute', left: '20%', top: '20%', border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, width: 800, height: 400, background: '#EDF5E1' }}>
          <h1 style={{ marginTop: '10%', color: 'black' }}>Cell Broadcast Test Bench Document</h1>
          <div>
            <NavLink to="/Generator2G"><Button type="submit" circular color='facebook' >2G</Button></NavLink>
            <NavLink to="/Generator3G"><Button type="submit" circular color='twitter'>3G</Button></NavLink>
            <NavLink to="/Generator4G"><Button type="submit" circular color='linkedin'>4G</Button></NavLink>
            <NavLink to="/Generator5G"><Button type="submit" circular color='linkedin'>5G</Button></NavLink>
            <NavLink to="/List"><Button type="submit" circular color='blue'>List</Button></NavLink>

          </div>
          <Image style={{ marginTop: '5%' }} src={src1} size='tiny' centered />

        </Form>
      </Formik>
    </>

  );
};



export default SignupForm;