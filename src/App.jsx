import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Work />
        <About />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
