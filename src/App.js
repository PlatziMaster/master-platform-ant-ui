import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DemoPage from './components/pages/demo.page';
import ProfileView from './components/pages/profile.page';
import CalendarPage from './components/pages/calendar.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DemoPage} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/calendar" component={CalendarPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
