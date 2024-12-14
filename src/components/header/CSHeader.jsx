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
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const CSHeader = () => {
    const isLoggedIn = useAuth();

    return (
        <div className="navbar-wrapper">
            <Navbar className="border-none">
                <NavbarContainer>
                    <NavbarBrand>
                        <Link to="/">
                            <img src={Logo} alt="keep" className="w-[120px] h-[40px]" />
                        </Link>
                    </NavbarBrand>

                    <NavbarList>
                        <NavbarItem><Link to="/product">Shop</Link></NavbarItem>
                        <NavbarItem>Research</NavbarItem>
                        <NavbarItem>Contact</NavbarItem>
                    </NavbarList>


                    {!isLoggedIn && (
                        <NavbarList>
                            <NavbarItem>
                                <Link to="/login">Sign In</Link>
                            </NavbarItem>
                            <NavbarItem active={true}>
                                <Link to="/register">Sign Up</Link>
                            </NavbarItem>
                        </NavbarList>
                    )}


                    {isLoggedIn && (
                        <NavbarList>
                            <Dropdown placement="bottom-end">
                                <DropdownAction asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user} />
                                        <AvatarFallback>KR</AvatarFallback>
                                    </Avatar>
                                </DropdownAction>
                                <DropdownContent align="end" className="border border-metal-100 dark:border-metal-800">
                                    <DropdownItem>Statistics</DropdownItem>
                                    <DropdownItem>Duplicate</DropdownItem>
                                    <DropdownItem>Account</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </NavbarList>
                    )}

                    <NavbarCollapseBtn />

                    <NavbarCollapse>
                        <NavbarItem>Projects</NavbarItem>
                        <NavbarItem>Research</NavbarItem>
                        <NavbarItem>Contact</NavbarItem>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
};

export default CSHeader;