// components/Navbar.js
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-8 z-50"
    >
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-white"></span>
        <span className="text-white font-inria">V E N T R I L O X</span>
      </h1>
    </motion.div>
  );
}