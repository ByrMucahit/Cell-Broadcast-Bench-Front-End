import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Generator2G from "../2G-message-generator/main";
import Generator3G from "../3G-message-generator/main";
import Generator4G from "../4G-message-generator/main";


export default class Routes extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/Generator2G" component={Generator2G} />
                    <Route path="/Generator3G" component={Generator3G} />
                    <Route path="/Generator4G" component={Generator4G} />
                </Switch>
            </Router>
        )
    }
}