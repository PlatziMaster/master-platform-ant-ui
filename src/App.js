import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/login.page';
import ProfileView from './components/pages/profile.page';
import CalendarPage from './components/pages/calendar.page';
import ButtonsPage from './components/pages/buttons.page';
import InputsPage from './components/pages/inputs.page';
import AppLayout from './components/containers/layout.container';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <AppLayout>
          <Route exact path="/profile" component={ProfileView} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/buttons" component={ButtonsPage} />
          <Route exact path="/inputs" component={InputsPage} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
