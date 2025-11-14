// components/Process.js
import { motion } from 'framer-motion';

const steps = [
  "Discovery Call",
  "Strategy & Wireframe",
  "Design + Animation",
  "Development",
  "Launch & Scale"
];

export default function ToolsWeUse() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          How We Build
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl">
                {i + 1}
              </div>
              <p className="text-lg font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}