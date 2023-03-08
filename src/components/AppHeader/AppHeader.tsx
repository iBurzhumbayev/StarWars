import { Link, NavLink } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <Link to='/'>
                <h1 className="app__title">
                    <span>Star Wars</span> information portal
                </h1>
            </Link>
            <nav className="app__menu">
                <NavLink className='app__menu-item' to='/people'>People</NavLink>
                <NavLink className='app__menu-item' to='/starships'>Starships</NavLink>
                <NavLink className='app__menu-item' to='/planets '>Planets</NavLink>
            </nav>
        </header>
    )
}

export default AppHeader;