import React from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col } from 'react-flexbox-grid';

const Landing = () => (
    <section className="landing" style={{"margin-top": `${(window.innerHeight - 600)/2.2}px`}}>
        <nav>
            <div className="row justify-content-around">
                <div className="col" id="art" className="item">
                    <Link to="/art" className="nav animated fadeInUp">Art</Link>
                </div>
                <div className="col-2" id="about" className="item" >
                    <Link to="/about" className="nav animated fadeIn animation-delay-1000">Yee Wai</Link>
                </div>
                <div className="col" id="code" className="item"  >
                    <Link to="/code"className="nav animated fadeInUp">Code</Link>
                </div>
            </div>
        </nav>
    </section>
)

export default Landing;
