import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table  } from 'reactstrap';
import { Link } from 'react-router-dom';

class GeneratorList extends Component {
    constructor(props) {
        super(props);
        this.state = {generators: []};
    }

    componentDidMount() {
        fetch('/api/generators/getall')
        .then(response => response.json())
        .then(data => this.setState({generators: data.data})); }
    

    render() {
        const {generators} = this.state;
        console.log("generators: ",generators);
        const generatorList = generators.map(generator => {
            return <tr key = {generator.idStamp}>
                <td style={{whiteSpace: 'nowrap'}}>{generator.idStamp}</td>
                <td>{generator.language}</td>
                <td>{generator.sender_id}</td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                  <h3>Generator List</h3>
                  <Table className="mt-4">
                      <thead>
                          <tr>
                              <th width="30%">idStamp</th>
                              <th width="30%">Language</th>
                              <th width="30%">Sender Id</th>
                          </tr>
                      </thead>
                      <tbody>
                          {generatorList}
                      </tbody>
                  </Table>
                </Container>
            </div>
        );
    }


    
}

export default GeneratorList;