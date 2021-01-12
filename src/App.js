import AppRouter from "./Router.js";
import React , { useEffect } from "react";
import NavBar from "./components/Navbar.js"
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <Router >
      <NavBar />
      <AppRouter />
    </Router>

  )
    ;
}