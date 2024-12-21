import {
    ChartPie,
    CheckSquare,
    Gear,
    HouseLine,
    Lifebuoy,
    MagnifyingGlass,
    PresentationChart,
    Stack,
    Users,
} from 'phosphor-react'
import {
    Avatar,
    AvatarImage,
    Input,
    InputIcon,
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarItem,
    SidebarList,
    AvatarFallback
} from 'keep-react'
import { Link } from 'react-router-dom'

const CMSideBar = () => {
    return (
        <Sidebar>
            <SidebarBody>
                <Link href="/" className="inline-flex items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 dark:bg-metal-800 text-heading-6 font-semibold text-white">
                        M.
                    </span>
                </Link>

                <SidebarList>

                    <SidebarItem>
                        <PresentationChart size={20} />
                        Dashboard
                    </SidebarItem>
                    <SidebarItem>
                        <Stack size={20} />
                        Orders
                    </SidebarItem>
                    <SidebarItem>
                        <CheckSquare size={20} />
                        Review
                    </SidebarItem>
                    <SidebarItem>
                        <ChartPie size={20} />
                        Cancel
                    </SidebarItem>
                    <SidebarItem>
                        <Lifebuoy size={20} />
                        Support
                    </SidebarItem>
                    <SidebarItem>
                        <Gear size={20} />
                        Settings
                    </SidebarItem>
                </SidebarList>
            </SidebarBody>

        </Sidebar>
    )
}

export default CMSideBar