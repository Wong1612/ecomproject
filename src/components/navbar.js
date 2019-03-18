import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {resetUser} from './../1.actions'
import Cookies from 'universal-cookie'

const objCookie = new Cookies()

class HeaderKu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onBtnLogout = () => {
    objCookie.remove('userData')
    this.props.resetUser()
  }

  cartAmount = () => {
    
  }

  render() {
    if (this.props.username === "") {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/" style = {{fontFamily: 'Montserrat', color: '#EA3135', fontWeight: '500'}}>IM@S.ID</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {/* ======================================================================================= */}
  
              {/* ======================================================================================= */}            
                <NavItem>
                  <NavLink href="">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/product-list">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
      
    } else {
      return (
      <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {/* ======================================================================================= */}
  
              {/* ======================================================================================= */}
                <NavItem>
                    <Link to="/register"><NavLink className="btn btn-default border-secondary mr-5.5"><i class="fas fa-shopping-cart"/> Cart: {this.state.cartAmount}</NavLink></Link>
                </NavItem>          
                <NavItem>
                  <NavLink href="">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/product-list">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            MENU
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem style = {{fontFamily: 'Montserrat', color: '#EA3135', fontWeight: '500'}}>
                            Transaction History
                        </DropdownItem>
                        <DropdownItem style = {{fontFamily: 'Montserrat', color: '#EA3135', fontWeight: '500'}}>
                            Edit Profile
                        </DropdownItem>
                        <DropdownItem>
                            {
                                this.props.role === "admin" ? 
                                <Link to = '/manage-product' style = {{fontFamily: 'Montserrat', color: '#EA3135', fontWeight: '500'}}>Manage Products</Link>
                                : null
                            }
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick = {this.onBtnLogout} style = {{fontFamily: 'Montserrat', color: '#EA3135', fontWeight: '500'}}>
                            LOG OUT
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
      username : state.userstate.username,
      role : state.userstate.role,
      cart : state.userstate.cart
  }

}


export default connect (mapStateToProps,{resetUser})(HeaderKu);