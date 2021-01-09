import React, { Component } from "react";
import { Provider } from "./context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ContactUs from "./components/layouts/ContactUs";
import PageNotFound from "./components/layouts/PageNotFound";
import About from "./components/layouts/About";

import "./App.css";
import Header from "./components/layouts/Header";
import AddEmployee from "./components/layouts/AddEmployee";
import Profile from "./components/layouts/Profile";
import EmpDashboard from "./components/layouts/EmpDashboard";
import Attendence from "./components/layouts/Employee/Attendence";
import ViewRequests from "./components/layouts/Admin/View Requests/ViewRequests";
import MyRequests from "./components/layouts/Employee/MyRequests";
import OtherRequests from "./components/layouts/Employee/OtherRequests";
import ViewEmployees from "./components/layouts/Admin/ViewEmployees";
import EditEmpProfile from "./components/layouts/Admin/EditEmpProfile";
import MySalDetails from "./components/layouts/Employee/MySalDetails";
import Payroll from "./components/layouts/Admin/Payroll";
import Statistics from "./components/layouts/Admin/Stats/Statistics";
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="HR" />
            <Switch>
              <Route exact path="/" component={Statistics} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/add" component={AddEmployee} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/attendence" component={Attendence} />
              <Route exact path="/empDashboard" component={EmpDashboard} />
              <Route exact path="/viewRequests" component={ViewRequests} />
              <Route exact path="/myRequests" component={MyRequests} />
              <Route exact path="/otherRequest" component={OtherRequests} />
              <Route exact path="/viewEmployees" component={ViewEmployees} />
              <Route exact path="/mySalDetails" component={MySalDetails} />
              <Route exact path="/statistics" component={Statistics} />
              <Route exact path="/payroll" component={Payroll} />
              <Route
                exact
                path="/editEmpProfile/:id"
                component={EditEmpProfile}
              />
              <Route exact path="/about" component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
