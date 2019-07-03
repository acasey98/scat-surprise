/* eslint-disable max-len */
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

// import './MyNavbar.scss';

import PropTypes from 'prop-types';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  state = {
    authed: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/new'>New Scat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.logMeOut}>Logout</NavLink>
              </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// { authed ? (
//   <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={this.logMeOut}>Logout</button>
//   ) : (
//     ''
//   )}

export default MyNavbar;
