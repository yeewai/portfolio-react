import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ match }) => {
    const whichPage = ["/art", "/about", "/code"].find( p => match.url.match(`^${p}`));

    return (
        <nav className="mainnav row justify-content-around animated slideInDown">
            <div className={`col item ${whichPage === "/art" ? 'selected' : ''}`} id="art" >
                <Link to="/art" className="nav"><h2>Art</h2></Link>
            </div>
            <div className={`col-2 item ${whichPage === "/about" ? 'selected' : ''}`} id="about" >
                <Link to="/about" className="nav"><h2>Yee Wai</h2></Link>
            </div>
            <div className={`col item ${whichPage === "/code" ? 'selected' : ''}`} id="code" >
                <Link to="/code"className="nav"><h2>Code</h2></Link>
            </div>
        </nav>
    )
};

export default Nav;
