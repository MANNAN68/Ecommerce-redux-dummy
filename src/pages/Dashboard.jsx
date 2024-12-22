
import { useSelector } from 'react-redux'
import CMSideBar from '../components/sidebar/CMSideBar'
import { useEffect } from 'react';
import { useLoginMutation } from '../features/auth/authApi';

const Dashboard = () => {
    // const [login, { data, isLoading, error: responseError }] = useLoginMutation();

    return (
        <div className='flex gap-10'>
            <CMSideBar />
            gfgfg
        </div>
    )
}

export default Dashboard