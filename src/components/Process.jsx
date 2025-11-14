// components/Process.jsx
import { motion } from 'framer-motion';
import { 
  FiFileText, FiUsers, FiCode, 
  FiCheckCircle, FiGlobe 
} from 'react-icons/fi';
import { MdDriveFileRenameOutline } from "react-icons/md";

const steps = [
  { icon: MdDriveFileRenameOutline, title: "Sign NDA", desc: "Secure your idea from day one" },
  { icon: FiFileText, title: "Agreement & Scope", desc: "Clear goals, timeline, and budget" },
  { icon: FiUsers, title: "Team Onboarding", desc: "Meet your dedicated experts" },
  { icon: FiCode, title: "Build & Iterate", desc: "Agile development with live demos" },
  { icon: FiCheckCircle, title: "QA & Final Review", desc: "Pixel-perfect, bug-free delivery" },
  { icon: FiGlobe, title: "Launch & Support", desc: "Go live. We’re with you post-launch" },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-white">
            Our Process:
          </h2>
          <p className="text-2xl font-light text-white/80">
            From Signing to Releasing — Every Step, Covered.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Neon Purple-Blue Icon Circle */}
                <motion.div
                  whileHover={{ 
                    scale: 1.3,
                    boxShadow: `
                      0 0 30px rgba(168, 85, 247, 0.9),
                      0 0 60px rgba(59, 130, 246, 0.7),
                      0 0 90px rgba(168, 85, 247, 0.5)
                    `
                  }}
                  className="relative w-16 h-16 mb-4 rounded-full bg-black border-2 border-purple-500/30 flex items-center justify-center"
                >
                  {/* Base Gradient Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  {/* Pulsing Neon Ring */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)",
                        "0 0 40px rgba(168, 85, 247, 0.9), 0 0 70px rgba(59, 130, 246, 0.7)",
                        "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full"
                  />

                  {/* Icon */}
                  <Icon className="relative z-10 w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold mb-1 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs max-w-32 text-white/70">
                  {step.desc}
                </p>

                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-12 bg-gradient-to-b from-purple-500/20 to-blue-500/20 mx-auto mt-4" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}