import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return (
        <>
            <div className="navbar-wrapper  ">
                <Navbar className='border-none'>
                    <NavbarContainer>
                        <NavbarBrand>
                            <Link to='/'><img src={Logo} alt="keep" className="w-[120px] h-[40px]" /></Link>
                        </NavbarBrand>
                        <NavbarList>
                            <NavbarItem><Link to="/product">Shop</Link></NavbarItem>
                            <NavbarItem>Research</NavbarItem>
                            <NavbarItem>Contact</NavbarItem>
                        </NavbarList>
                        <NavbarList>
                            <NavbarItem > <Link to="/login">Sign In</Link> </NavbarItem>
                            <NavbarItem active={true}><Link to="/register">Sign Up</Link> </NavbarItem>
                        </NavbarList>
                        <NavbarCollapseBtn />
                        <NavbarCollapse>
                            <NavbarItem>Projects</NavbarItem>
                            <NavbarItem>Research</NavbarItem>
                            <NavbarItem>Contact</NavbarItem>
                            <NavbarItem > <Link to="/login">Sign In</Link> </NavbarItem>
                            <NavbarItem active={true}><Link to="/register">Sign Up</Link> </NavbarItem>
                        </NavbarCollapse>
                    </NavbarContainer>
                </Navbar>
            </div>
        </>
    )
}

export default PublicNavbar