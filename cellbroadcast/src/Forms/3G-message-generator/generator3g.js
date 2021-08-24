import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Grid, Segment } from 'semantic-ui-react';
import { Button,  FormGroup } from 'reactstrap';


class Generator3G extends Component {

    emptyItem = {
        sac: '',
        repitationPeriod: '',
        lac: '',
        numberOfBroadcastRequest: '',
        message_identifier: '',
        language: '',
        messageContent: '',
        rncIpAddress: ''
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

        console.log("item: "+JSON.stringify(item));
        await fetch('/api/generators/ThreeG/add', {
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
            <Form onSubmit={this.handleSubmit}
            style={{ position: 'absolute', left: '20%', top: '10%', 
                     border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, 
                     width: 900, height: 700, background: '#F8B195' }}>

                <Segment
                 style={{ 
                     width: '200px', height: '40px',marginTop:'2%' 
                     }} >
                    <p 
                        style={{ 
                            background: '#F67280', color: '#FFFFFF', textAlign: 'center', 
                            height: '100%', marginTop: '3%', marginLeft:'15%', fontFamily: 'Marker Felt, fantasy' 
                        }}
                        >3G Message Generator
                    </p>
                </Segment>

                <Grid columns={3}  
                style={{ top: '25%', marginTop: '3%', marginLeft: '5%' }} 
                        divided>
                    <Grid.Row>
                        <Grid.Column width={8}>

                            <label htmlFor='sac' 
                                    style={{ background: '#F67280', borderRadius: '4px', textAlign: 'center', width: '138%', fontSize:'12px' }} >SAC :
                                <input name='sac' placeholder='SAC...' onChange={this.handleChange} value={this.state.value}
                                    style={{
                                        width: '70%', height: '20%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '15px'
                                    }}>
                                </input>
                            </label>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <label htmlFor='repitationPeriod' 
                                style={{ background: '#F67280', borderRadius: '4px', marginLeft: '51%', width: '140%', fontSize:'12px' }} 
                                >Repitation Period :

                                <input name='repitationPeriod' placeholder='Repitation Period...'  onChange={this.handleChange} value={this.state.value}
                                    style={{
                                        width: '50%', height: '30%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '50px'
                                    }}>

                                </input>
                            </label>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <label htmlFor='lac'  
                                   style={{ background: '#F67280', borderRadius: '4px', textAlign: 'center', width: '135%', fontSize:'12px' }} 
                                   >LAC :
                                <input name='lac' placeholder='LAC...'  onChange={this.handleChange} value={this.state.value}
                                    style={{
                                        width: '70%', height: '20%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '20px'
                                    }}>
                                </input>
                            </label>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <label htmlFor='numberOfBroadcastRequest' 
                            style={{ background: '#F67280', borderRadius: '4px', marginLeft: '45%', width: '125%', fontSize:'12px' }} 
                            >Number Of Broadcast Request :
                                <input name='numberOfBroadcastRequest' placeholder='Number Of Broadcast Request...'  onChange={this.handleChange} value={this.state.value}
                                    style={{
                                        width: '50%', height: '80%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '15px'
                                    }}>
                                </input>
                            </label>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8} >
                            <label htmlFor='message_identifier' 
                            style={{ 
                                background: '#F67280', borderRadius: '4px', textAlign: 'center', 
                                width: '59%',height:'85%', fontSize:'10px', marginLeft:'-41%' 
                                }} 
                                >Message Identifier :
                            <select  name="message_identifier" onChange={this.handleChange} value={this.state.value} autoComplete="message_identifier "  
                            style={{
                                marginTop:'7px', marginLeft:'5px', width:'90%'
                            }}
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
                            </select>
                                
                            </label>
                        </Grid.Column>
                        
                        <Grid.Column width={8}>
                            <label htmlFor='language' 
                            style={{
                                 background: '#F67280', borderRadius: '4px', marginLeft: '-92%', 
                                 marginTop:'13%', width: '340%', height: '84%',
                                 fontSize:'10px'
                                  }} 
                                  >language:
                                <select  name="language" onChange={this.handleChange} value={this.state.value}  style={{marginTop:'7px', width:'95%', }} autoComplete="language">
                                    <option value="">Select language</option>
                                    <option value="88">English</option>
                                    <option value="1">Turkish</option>
                                    <option value="0">Other</option>
                                </select>
                            </label>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column>
                            <label htmlFor="messageContent"  
                                style={{ 
                                    textAlign:'center', background: '#F67280', borderRadius: '4px', 
                                    width: '409%',height:'140%', 
                                    fontSize:'10px', display:'inline-block', marginTop:'15%' }}
                                >Message Content:
                                    <textarea name="messageContent" id='messageContent' placeholder="Message Content"    onChange={this.handleChange} value={this.state.value}
                                              style={{
                                                  marginTop:'2%', marginLeft:'1%', height:'70%', 
                                                  width:'90%'
                                                  }}></textarea>
                            </label>
                        </Grid.Column>  
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <label htmlFor='rncIpAddress' style={{ background: '#F67280', borderRadius: '4px', marginLeft: '0%', marginTop:'40%', width: '143%', fontSize:'10px' }} >RNC IP Address :
                                <input name='rncIpAddress' placeholder='RNC IP Address'  onChange={this.handleChange}
                                    style={{
                                        width: '60%', height: '80%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '15px'
                                    }}>
                                </input>
                            </label>
                            
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <FormGroup>
                            <Button color="warning" tag={Link} to="/" 
                            style={{
                                marginTop:'12%', marginLeft:'-50%'
                                }}
                                >Back
                                </Button>{' '}
                            <Button color="warning" type="submit" style={{marginTop:'-53%', marginLeft:'640%'}}>Next</Button>
                        </FormGroup>
                    </Grid.Row>

                </Grid>
            </Form>
        )

    }
}

export default Generator3G;