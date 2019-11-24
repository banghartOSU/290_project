import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ControlledCarousel from './Carousel'
import Articles from './Articles.js';
import MetMuseum  from './MetMuseum.js'
import About from './About.js';
import './App.css';
import Numbers from './numbers';

function App() {
  return (
    <BrowserRouter>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">CS290 Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/metmuseum">The Met</NavDropdown.Item>
                  <NavDropdown.Item href="/article">Postmodern Article</NavDropdown.Item>
                  <NavDropdown.Item href="/numbers">Number API</NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item href={require('./images/Banghart_Resume.pdf')} download>Download Resume</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/banghartOSU">Github</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    </header>
    <div className="App">

          <Route exact path="/" component={ControlledCarousel} />
          <Route path="/article" component={Articles} />
          <Route path="/about" component={About} />
          <Route path="/metmuseum" component={MetMuseum} />
          <Route path="/numbers" component={Numbers} />
    </div>

    </BrowserRouter>


  );
}

export default App;
