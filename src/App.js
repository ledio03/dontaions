import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Kreu from "./pages/Kreu";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DhuroPara from "./pages/DhuroPara";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "Ad1pppOH_iBpIFKmiCz1mXRqoGwhM5rWv56vA7_TDjbcEPfp2e1N829gKEWAvIuXWsefxeEtW2GierCh" }}>

      <Router>
        <Navbar className="fixed-top navStl" style={{ borderBottom: "5px solid #089492" }} collapseOnSelect expand="lg" bg="white">
          <Container>
            <img src='./img/logo.jpg' className="logo" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: "30px" }} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ok">
                <li className="nav-item px-2">
                  <Link className="nav-link nav-font nav-item-border ok1 ok2" aria-current="page" to="/kreu"> Kreu </Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link nav-font nav-item-border ok1" aria-current="page" to="/"> Postime </Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link nav-font nav-item-border ok1" aria-current="page" to="/dhuroPara"> Dhuro para </Link>
                </li>
                <li className="nav-item px-2">{!isAuth ? (
                  <Link className="nav-link nav-font nav-item-border ok1" aria-current="page" to="/login"> Login </Link>
                ) : (
                  <>
                    <div className="ok break">
                      <Link className="nav-link nav-font nav-item-border ok1 ok2" aria-current="page" to="/createpost"> Shto </Link>
                      <button className="ok1" onClick={signUserOut}> Log Out</button>
                    </div>
                  </>
                )}</li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/kreu" element={<Kreu isAuth={isAuth} />} />
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/dhuroPara" element={<DhuroPara isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router >
    </PayPalScriptProvider>
  );
}

export default App;
