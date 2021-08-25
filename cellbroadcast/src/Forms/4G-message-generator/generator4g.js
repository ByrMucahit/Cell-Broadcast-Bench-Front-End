import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Grid, Segment} from 'semantic-ui-react';





class Generator2G extends Component {

    emptyItem = {
        cellId:'',
        repitationPeriod:'',
        enodebId: '',
        numberOfBroadcastRequest: '',
        department_id:null,
        language: null,
        message_identifier: '',
        mmeIpAddress:'',
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
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;
        
        await fetch('api/generators/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        })
        this.props.history.push('/');
    }


    render() {

        return (
            <>
                <Form onSubmit={this.handleSubmit}
            style={{ position: 'absolute', left: '20%', top: '10%', 
                     border: '2px solid AntiqueWhite', borderWidth: 4, borderRadius: 5, 
                     width: 900, height: 700, background: '#f5eec2' }}>

                <Segment style={{ 
                    width: '200px', height: '40px',marginTop:'2%' 
                    }} >
                    <p 
                        style={{ 
                            background: '#416a59', color: '#FFFFFF', textAlign: 'center', 
                            height: '100%', marginTop: '3%', marginLeft:'15%', 
                            fontFamily: 'Marker Felt, fantasy' 
                        }}
                        >4G Message Generator
                    </p>
                </Segment>

                <Grid columns={3}  
                style={{ top: '25%', marginTop: '3%', marginLeft: '5%' }} 
                        divided>
                    <Grid.Row>
                        <Grid.Column width={8}>

                            <label htmlFor='cellId' 
                                    style={{
                                         background: '#416a59', color:'#FFFFFF', borderRadius: '4px', textAlign: 'center', 
                                         width: '130%', fontSize:'12px' 
                                         }} >Cell Id :
                                <input name='cellId' placeholder='Cell Id...' onChange={this.handleChange} value={this.state.value}
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
                                style={{
                                     background: '#416a59', color:'#FFFFFF', borderRadius: '4px', marginLeft: '47%', 
                                     width: '140%', fontSize:'12px' 
                                    }} 
                                >Repitation Period :

                                <input name='repitationPeriod' placeholder='Repitation Period...' onChange={this.handleChange} value={this.state.value}
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
                            <label htmlFor='enodebId' 
                                   style={{ 
                                       background: '#416a59', color:'#FFFFFF', borderRadius: '4px', textAlign: 'center', 
                                       width: '117%', fontSize:'12px' 
                                    }} 
                                   >Enodeb Id :
                                <input name='enodebId' placeholder='Enodeb Id...' onChange={this.handleChange} value={this.state.value}
                                    style={{
                                        width: '65%', height: '20%', padding: '12px 20px', margin: '8px 0',
                                        display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px',
                                        boxSizing: 'border-box', marginLeft: '20px'
                                    }}>
                                </input>
                            </label>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <label htmlFor='numberOfBroadcastRequest' 
                            style={{ 
                                background: '#416a59',color:'#FFFFFF', borderRadius: '4px', 
                                marginLeft: '35%', width: '125%', fontSize:'12px' 
                                     }} 
                            >Number Of Broadcast Request :
                                <input name='numberOfBroadcastRequest' placeholder='Number Of Broadcast Request...' onChange={this.handleChange} value={this.state.value}
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
                            <label htmlFor='lac' 
                            style={{ 
                                background: '#416a59', color:'#FFFFFF', borderRadius: '4px', 
                                textAlign: 'center', width: '59%',height:'85%', 
                                fontSize:'10px', marginLeft:'-41%' 
                                }} 
                                >Message Identifier :
                            <select id="messageIdentifier" name="message_identifier" onChange={this.handleChange} value={this.state.value} autoComplete="messageIdentifier" 
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
                            <label htmlFor='message_identifier' 
                            style={{
                                 background: '#416a59', color:'#FFFFFF', borderRadius: '4px', 
                                 marginLeft: '-92%', marginTop:'13%', width: '340%', 
                                 height: '84%', fontSize:'10px'
                                  }} 
                                  >language:
                                <select id="messageIdentifier" name="language" onChange={this.handleChange} value={this.state.value}  style={{marginTop:'7px', width:'95%', }} autoComplete="language">
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
                                    textAlign:'center', background: '#416a59', color:'#FFFFFF',
                                    borderRadius: '4px', width: '409%',height:'140%', 
                                    fontSize:'10px', display:'inline-block', marginTop:'15%' }}
                                >Message Content:
                                    <textarea name="messageContent" id='messageContent' placeholder="Message Content"   onChange={this.handleChange} value={this.state.value}
                                              style={{
                                                  marginTop:'2%', marginLeft:'1%', height:'70%', 
                                                  width:'90%'
                                                  }}></textarea>
                            </label>
                        </Grid.Column>  
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <label htmlFor='mmeIpAddress' 
                            style={{ 
                                background: '#416a59',color:'#FFFFFF', borderRadius: '4px', 
                                marginLeft: '0%', marginTop:'40%', width: '143%', 
                                fontSize:'10px' 
                                }} 
                                >MME IP Address :
                                <input name='mmeIpAddress' placeholder='MME Ip Address' onChange={this.handleChange} value={this.state.value}
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
                            <Button color="secondary" tag={Link} to="/" 
                            style={{
                                marginTop:'12%', marginLeft:'-50%'
                                }}
                                >Back
                                </Button>{' '}
                                
                            <Button color="secondary" type="submit" 
                            style={{
                                marginTop:'-53%', marginLeft:'640%'
                                }} >Next</Button>
                        </FormGroup>
                    </Grid.Row>

                </Grid>
            </Form>
            </>
        )
    }
}

export default Generator2G;