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

const PublicNavbar = () => {
    return (
        <>
            <div className="navbar-wrapper  ">
                <Navbar className='border-none'>
                    <NavbarContainer>
                        <NavbarBrand>
                            <img src={Logo} alt="keep" className="w-[120px] h-[40px]" />
                        </NavbarBrand>
                        <NavbarList>
                            <NavbarItem>Projects</NavbarItem>
                            <NavbarItem>Research</NavbarItem>
                            <NavbarItem>Contact</NavbarItem>
                        </NavbarList>
                        <NavbarList>
                            <Dropdown placement="bottom-end">
                                <DropdownAction asChild>
                                    <Avatar className='cursor-pointer'>
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
                        <NavbarCollapseBtn />
                        <NavbarCollapse>
                            <NavbarItem>Projects</NavbarItem>
                            <NavbarItem>Research</NavbarItem>
                            <NavbarItem>Contact</NavbarItem>
                            <NavbarItem>Sign In</NavbarItem>
                            <NavbarItem active={true}>Sign Up</NavbarItem>
                        </NavbarCollapse>
                    </NavbarContainer>
                </Navbar>
            </div>
        </>
    )
}

export default PublicNavbar
