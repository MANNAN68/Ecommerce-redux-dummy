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
import { useSelector } from 'react-redux';


const CSHeader = () => {
    const isLoggedIn = useAuth();
    const totalCartQty = useSelector(state => state.cart.cartItems.length);


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
                        <NavbarItem><Link to="/product">Products</Link></NavbarItem>
                        <NavbarItem>Computer Accessories</NavbarItem>
                        <NavbarItem>Jewellery</NavbarItem>
                        <NavbarItem><Link to="/cart" className='relative inline-flex items-center text-sm font-medium text-center "'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 dark:border-gray-900">{totalCartQty}</div>

                        </Link> </NavbarItem>
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
                                        <AvatarFallback>Mannan</AvatarFallback>
                                    </Avatar>
                                </DropdownAction>
                                <DropdownContent align="end" className="border border-metal-100 dark:border-metal-800">
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Orders</DropdownItem>
                                    <DropdownItem>Review</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </NavbarList>
                    )}

                    <NavbarCollapseBtn />

                    <NavbarCollapse>
                        <NavbarItem><Link to="/product">Products</Link></NavbarItem>
                        <NavbarItem>Computer Accessories</NavbarItem>
                        <NavbarItem>Jewellery</NavbarItem>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
};

export default CSHeader;