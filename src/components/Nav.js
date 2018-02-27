import React from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col } from 'react-flexbox-grid';

const Nav = () => (
    <nav className="row justify-content-around">
        <div className="col" id="art" className="item">
            <Link to="/art" className="nav">Art</Link>
        </div>
        <div className="col-2" id="about" className="item" >
            <Link to="/about" className="nav">Yee Wai</Link>
        </div>
        <div className="col" id="code" className="item"  >
            <Link to="/code"className="nav">Code</Link>
        </div>
    </nav>
)

export default Nav;
