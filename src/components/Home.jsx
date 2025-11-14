// components/Home.jsx (BACKGROUND REMOVED – ORIGINAL)
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground'; // ← You can delete this line if you don't use it

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">

      {/* ORIGINAL 3D BACKGROUND (or delete this line) */}
      <ThreeBackground />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* YOUR TEXT CONTENT – 100% UNCHANGED */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {"WE BUILD MONEY-MAKING WEBSITES".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: "easeOut"
              }}
              className="inline-block text-5xl md:text-7xl font-black text-white tracking-tight"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 text-lg md:text-xl text-white font-light tracking-widest"
          >
            FAST • ANIMATED • CONVERSION-FOCUSED
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.2)",
                  "0 0 40px rgba(255,255,255,0.4)",
                  "0 0 20px rgba(255,255,255,0.2)"
                ]
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
              className="inline-block px-12 py-6 bg-white text-black font-bold text-xl rounded-full uppercase tracking-wider"
            >
              Start Your Project
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 text-xs tracking-widest text-white uppercase font-light"
          >
            Black. White. Business.
          </motion.p>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-10 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}