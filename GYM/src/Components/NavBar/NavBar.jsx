import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { 
      NavBtn,
      NavBtnLink,
      SortAmountUpAlt      
  } from './ElementsNavBar';

 const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [ listLevel, setListLevel] = useState ([])

  //   useEffect(() => {
  //       getLevel()
  //   }, [])

  //   const getLevel = () => {
  //       const data = new Promise ((res, reject) => res(category))
  //           data.then ((res) => {
  //               setListLevel(res)
  //           })
  //   }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> Jugatela</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to="">
                <NavLink href="/">Jugadas Simples</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="">
                <NavLink href="/">Jugadas Multiples</NavLink>
                </Link>
             </NavItem>
            <UncontrolledDropdown nav inNavbar>
            <Link to="">
              <DropdownToggle nav caret>Niveles<SortAmountUpAlt /></DropdownToggle>            
              <DropdownMenu right>
                {/* {listLevel.map(() => {
                    return <DropdownItem key={  }> {  }</DropdownItem>
                  })
                }                 */}
              </DropdownMenu>
              </Link>
            </UncontrolledDropdown>
            <div class="advertisingNavBar">
              <h5>Aqui va un banner</h5>
            </div>
            
          </Nav>
     
        </Collapse>
               
               {/* <ShoppingCart  /> */}
                <NavBtn>
                    <NavBtnLink to='/Profile/UserRegister'>Registrate</NavBtnLink>
                    <NavBtnLink to='/Profile/UserLogin'>Logueate</NavBtnLink>                    
                </NavBtn>
        
      </Navbar>
    </div>
  );
}

export default NavBar;
