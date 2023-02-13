import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Image } from 'react-bootstrap';
import Player from './components/Player.js';

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
          <br />

          <div className="players">
          <Player num="3" name="ANLORIZ" pos="GK"/>
          <Player num="88" name="PANA" pos="GK"/>
          <br />
          <Player num="26" name="AXELRIDER" pos="LI"/>
          <br />
          <Player num="4" name="DESPASIOMAIK" pos="DFC"/>
          <Player num="6" name="JORDIBLAZE" pos="DFC"/>
          <Player num="17" name="PABLITINHO" pos="DFC"/>
          <br />
          <Player num="8" name="ADRIÁN DE BOLSILLO" pos="LD"/>
          <Player num="42" name="OVY" pos="LD"/>
          <br />
          <Player num="21" name="SHARKPEZ" pos="MCD"/>
          <br />
          <Player num="14" name="RUKO" pos="MC"/>
          <br />
          <Player num="11" name="ANDRESSINHO" pos="EI"/>
          <Player num="19" name="HUMOS" pos="EI"/>
          <br />
          <Player num="7" name="RAYPOL" pos="DC"/>
          <Player num="10" name="KAPPANATION" pos="DC"/>
          <br />
          <Player num="9" name="UNAIIBLAZE" pos="ED"/>
          <Player num="24" name="DRAKOR" pos="ED"/>
          </div>

          
        </div>
      </div>



      <div className="footer">
        <p>miverabusiness@gmail.com - ©2023 MakinetaFC</p> 
      </div>
    </div>
  );
}

export default App;
