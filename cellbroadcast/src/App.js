import './App.css';
import Home from './Forms/Main/home';
import Gen2G from './Forms/2G-message-generator/generator2g'
import Gen3G from './Forms/3G-message-generator/main'
import Gen4G from './Forms/4G-message-generator/generator4g'
import Tes from './Forms/5G-Test/main'
import List from './Forms/Test/list'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <div>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/Generator2G"  exact={true} component={Gen2G}  />
            <Route path="/Generator3G"  exact={true} component={Gen3G}  />
            <Route path="/Generator4G"  exact={true} component={Gen4G}  />
            <Route path="/Generator5G"  exact={true} component={Tes}  />
            <Route path="/List" component={List}  />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
