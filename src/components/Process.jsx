// components/Process.jsx
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FiFileText, FiFileCheck, FiUsers, FiCode, 
  FiCheckCircle, FiGlobe 
} from 'react-icons/fi';

const steps = [
  { icon: FiFileText, title: "Sign NDA", desc: "Secure your idea from day one" },
  { icon: FiFileText, title: "Agreement & Scope", desc: "Clear goals, timeline, and budget" },
  { icon: FiUsers, title: "Team Onboarding", desc: "Meet your dedicated experts" },
  { icon: FiCode, title: "Build & Iterate", desc: "Agile development with live demos" },
  { icon: FiCheckCircle, title: "QA & Final Review", desc: "Pixel-perfect, bug-free delivery" },
  { icon: FiGlobe, title: "Launch & Support", desc: "Go live. We’re with you post-launch" },
];

export default function Process() {
  const { scrollYProgress } = useScroll();
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll to activate steps
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const normalized = (value - 0.3) / (0.8 - 0.3); // Scroll from 30% to 80%
      const clamped = Math.min(Math.max(normalized, 0), 1);
      const stepIndex = Math.floor(clamped * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
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
            const isActive = i <= activeStep;
            const isCurrent = i === activeStep;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.2 : isActive ? 1.1 : 1,
                    boxShadow: isCurrent
                      ? "0 0 40px rgba(139, 92, 246, 0.8)"
                      : isActive
                      ? "0 0 20px rgba(139, 92, 246, 0.4)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  whileHover={{ scale: 1.25, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-xl"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold mb-1 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`text-xs max-w-32 transition-colors ${
                  isActive ? 'text-white/90' : 'text-white/50'
                }`}>
                  {step.desc}
                </p>

                {/* Mobile Connector (optional subtle line) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-12 bg-white/10 mx-auto mt-4" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg shadow-2xl"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}