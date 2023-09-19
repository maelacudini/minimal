import React, { Fragment } from "react";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <AnimatePresence>
      <Navbar />
      <AnimatePresence>
        <Main />
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default App;
