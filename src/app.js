import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Header = () => (
  <div>
    This is the Header
  </div>
);

const ExpenseDashboardComponent = () => (
  <div>
    This is the Expense Dashboard component
  </div>
);

const AddExpenseComponent = () => (
  <div>
    This is the Add Expense component
  </div>
);

const EditExpenseComponent = () =>  (
  <div>
    This is the Edit Expense component
  </div>
);

const HelpComponent =() => (
  <div>
    This is the Help component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardComponent} exact={true}/>
      <Route path="/create" component={AddExpenseComponent} />
      <Route path="/edit" component={EditExpenseComponent} />
      <Route path="/help" component={HelpComponent} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
