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
              <Nav.Link hfer='#'>SOCIAL MEDIA</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>

      <div className="home">
        <h1>MAKINETA FC</h1>
        <h2 className="subtitle">PRO CLUBS FIFA 23</h2>
        <a href="https://twitch.tv/makinetafc" className="btn btn-danger home-btn" target="_blank" rel="noreferrer">Watch Now</a>
        <div className="paragraph">
          <p>The official website of <i>Makineta FC</i>, the e-sports club focused on <i>FIFA 23 PRO CLUBS</i> in which several Inazuma Eleven content creators in Spanish embody the players in the VFO 1st division.</p>
          <p>All of our matches can be enjoyed in our official Twitch Channel </p>
        </div>

        <div className="squad">
        <h2>SQUAD</h2>

      </div>
      </div>



      <div className="footer">
        <p>miverabusiness@gmail.com - ©2023 MakinetaFC</p> 
      </div>
    </div>
  );
}

export default App;
