import { Link } from 'react-router-dom';
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
                <Link className='app__menu-item' to='/people'>People</Link>
                <Link className='app__menu-item' to='/starships'>Starships</Link>
                <Link className='app__menu-item' to='/planets '>Planets</Link>
            </nav>
        </header>
    )
}

export default AppHeader;