import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Evidence</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Evidence</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </div>
    );
  }
}

export default Header;
