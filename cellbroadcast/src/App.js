import './App.css';
import Basic from './Forms/Main/MainForm';
import Bst from './Forms/2G-message-generator/main'
import Ist from './Forms/3G-message-generator/main'
import Prd from './Forms/4G-message-generator/main'
import Tes from './Forms/5G-Test/main'
import List from './Forms/Test/main'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <div>
          <Switch>
            <Route path="/" component={Basic}  exact/>
            <Route path="/Generator2G" component={Bst}  />
            <Route path="/Generator3G" component={Ist}  />
            <Route path="/Generator4G" component={Prd}  />
            <Route path="/Generator5G" component={Tes}  />
            <Route path="/List" component={List}  />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
