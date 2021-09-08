import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./translations/i18n";

import DemoPage from "./components/pages/demo.page";
import CalendarPage from "./components/pages/calendar.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DemoPage} />
        <Route exact path="/calendar" component={CalendarPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
