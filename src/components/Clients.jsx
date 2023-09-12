import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import style from "../css/app.module.css";

const Clients = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scaleX = useSpring(scrollYProgress, { damping: 100 });

  const x = useTransform(scaleX, [0, 1], ["-100%", "100%"]);
  return (
    <div ref={targetRef} className={style.clients}>
      <h3 className={style.sectionTitle}>Clients</h3>
      <motion.div style={{ x }} className={style.clientList}>
        <h2>CLIENT ONE</h2>
        <h2>CLIENT TWO</h2>
        <h2>CLIENT THREE</h2>
        <h2>CLIENT FOUR</h2>
        <h2>CLIENT FIVE</h2>
        <h2>CLIENT SIX</h2>
        <h2>CLIENT SEVEN</h2>
      </motion.div>
    </div>
  );
};

export default Clients;
