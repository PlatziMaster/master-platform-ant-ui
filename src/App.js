import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './translations/i18n';

import DemoPage from './components/pages/demo.page';
import ProfileView from './components/pages/profile.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DemoPage} />
        <Route exact path="/profile" component={ProfileView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
