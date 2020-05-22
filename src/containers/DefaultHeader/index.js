import React from 'react';


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
  DropdownItem } from 'reactstrap';


/***
Default Hearder 1.1.0

***/




export default class DefaultHeader extends React.Component {

 constructor(props){

    super(props);

    this.state={

      isOpen:false

    }

    this.onMove=this.onMove.bind(this);
   }



   onMove=(route)=>{

     const {history}=this.props;

     console.log(this.props);

       history.push(route);

   }


   render(){

      return( 
      <div>
         <Navbar color="light" light expand="md">
          <NavbarBrand onClick={(e)=>{
                  
                  e.preventDefault();

                  this.onMove("dashboard");


                }}>Demo</NavbarBrand>
          <NavbarToggler  />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={(e)=>{
                  
                  e.preventDefault();

                  this.onMove("home");


                }}>Components</NavLink>
              </NavItem>
              
             
            </Nav>
          </Collapse>
        </Navbar>

      	</div>)


     }



  }
