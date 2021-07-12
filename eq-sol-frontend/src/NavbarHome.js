
//Navbar of our Web Application. contains logo and link for HomeBody.js and About.js visit them
import React,{ useState } from 'react'
import Logo from './images/EQ-Sol Logo Full.svg'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom'

export default function NavbarHome() {

    const [isOpen, setIsOpen] = useState(false);  
    const toggle = () => setIsOpen(!isOpen);
    const [HomeActive,SetActive] = useState(false);
    // Logic for that nav icon active
    var Home,About;
    if(HomeActive){
        Home = <Link to="/" onClick={e => SetActive(false)} className="fas fa-home homenavbar-icon " ></Link>
        About = <Link to="/about" onClick={e => SetActive(true)} className="fas fa-info-circle homenavbar-icon active" ></Link>
    }else{
        Home = <Link to="/" onClick={e => SetActive(false)} className="fas fa-home homenavbar-icon active" ></Link>
        About = <Link to="/about" onClick={e => SetActive(true)} className="fas fa-info-circle homenavbar-icon " ></Link>
    }
    return (
        <div>
             <Navbar className="navbar-home" expand="xs">
                <NavbarBrand>
                    <Link to="/">
                        <img src={Logo} className="navbarhome-logo" />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto ml-auto" navbar>
                        <NavItem>
                            {Home}
                        </NavItem>
                        <NavItem>
                            {About}
                        </NavItem> 
                    </Nav>
                    <NavbarText><i class="fas fa-cog spin"  ></i></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
