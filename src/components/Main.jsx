import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

const containervariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const Main = () => {
  return (
    <motion.div variants={containervariants} initial="hidden" animate="visible">
      <Work />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Main;
