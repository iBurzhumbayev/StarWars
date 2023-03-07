import { AppHeader } from '../components';
import { Outlet, useLocation } from 'react-router-dom'

const GeneralPage = () => {
    const location = useLocation();

    console.log({location});

    return (
        <>
            <AppHeader/>
            <div className='container'>
                <Outlet/>
            </div>
        </>
    )
}

export default GeneralPage