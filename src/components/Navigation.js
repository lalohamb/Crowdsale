import Navbar from 'react-bootstrap/Navbar';

import logo from '../logo.png';

const Navigation = () => {
    return (
        <Navbar className='my-3'>
            <img
                alt="logo"
                src={logo}
                width="400"
                height="400"
                className="d-inline-block align-top mx-3"
            />
            <Navbar.Brand href="#">ICO Crowdsale</Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;