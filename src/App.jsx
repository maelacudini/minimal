import React, { Fragment } from "react";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
