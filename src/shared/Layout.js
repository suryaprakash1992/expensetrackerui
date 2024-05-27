

import { NavLink } from 'react-router-dom';

function Layout() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                   
                </ul>
            </nav>
        

        </div>
    );
}

export default Layout;
