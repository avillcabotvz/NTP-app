import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

const HeaderNav = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">NTP Projekt</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/test">Test</Nav.Link>
    </Nav>
  </Navbar>
</>
  )
}

export default HeaderNav
