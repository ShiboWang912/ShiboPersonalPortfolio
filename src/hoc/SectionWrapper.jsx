import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}                                     // <-- move id here
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 
                    scroll-mt-24 md:scroll-mt-28`}      // <-- offset for fixed navbar
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
