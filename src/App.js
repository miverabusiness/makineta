import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar variant='dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand><a href='/' className='navbar-logo'>MAKINETA FC</a></Navbar.Brand>
          
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Link hfer='/'>HOME</Nav.Link>
              <Nav.Link hfer='#'>SQUAD</Nav.Link>
              <Nav.Link hfer='#'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>

      <div className="home">
        Texto de prueba
      </div>
    </div>
  );
}

export default App;
