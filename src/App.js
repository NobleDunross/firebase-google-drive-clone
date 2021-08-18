import React from "react"
import Signup from "./components/authentication/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Profile from "./pages/Profile/Profile"
import Home from "./pages/Home/Home"

import Login from "./components/authentication/Login"
import PrivateRoute from "./components/authentication/PrivateRoute"
import ForgotPassword from "./components/authentication/ForgotPassword"
import UpdateProfile from "./components/authentication/UpdateProfile"
import Dashboard from "./components/google-drive/Dashboard"


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/folder/:folderId" component={Dashboard} /> */}

          {/* Profile */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
