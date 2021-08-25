import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DemoPage from './components/pages/demo.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={DemoPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
