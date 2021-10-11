import './App.less'

import { Route, Switch } from 'react-router-dom'

import Container from './components/Container'
import CovidReport from './components/page/covidReport'
import FormLogin from './components/FormLogin'
import HomePage from './components/page/homePage'
import PrivateRoute from './components/routes/privateRoute'
import Profile from './components/page/profile'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Container>
          <FormLogin />
        </Container>
      </Route>
      <PrivateRoute component={HomePage} path="/homepage" />
      <PrivateRoute component={Profile} path="/profile" />
      <PrivateRoute component={CovidReport} path="/covid19"></PrivateRoute>
      <Route path="*">
        Page 404
      </Route>
    </Switch>
  )
}

export default App
