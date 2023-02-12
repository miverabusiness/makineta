import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar variant='dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand>
            <a href='/' className='navbar-logo'>
              <div className="row">
                <div className="col"><Image src='/escudo.png' height='100px'/></div>
                <div className="col logo-text d-none d-md-block">MAKINETA FC</div>
              </div>
            </a>
          </Navbar.Brand>
          
          <Navbar.Toggle size='sm'/>
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
        <h1>MAKINETA FC</h1>
        <h2>CLUBS PRO FIFA 23</h2>
        <br /><br /><br />
        <p><i>Under development . . .</i></p>
      </div>
    </div>
  );
}

export default App;
