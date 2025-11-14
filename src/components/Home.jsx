// components/Home.jsx
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">

      {/* 3D BACKGROUND */}
      <ThreeBackground />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* CONTENT + SCROLLER – CENTERED & LOWERED */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-32 md:pt-40">
        
        {/* TEXT & BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {"V E N T R I L O X".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: "easeOut"
              }}
              className="inline-block font-inria text-5xl md:text-7xl font-black text-white tracking-tight"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 text-lg md:text-xl text-white tracking-widest"
          >
            Innovative digital solutions, Tailored to help companies grow, Automate and Scale.
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
          />
        </motion.div>

        {/* SCROLL INDICATOR – CENTERED & BELOW */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-md"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.2 }}
            className="text-xs tracking-widest uppercase font-light text-white/70"
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}