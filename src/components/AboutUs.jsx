// components/About.js
import { motion } from 'framer-motion';
import { FiZap, FiLayers, FiEye, FiAward } from 'react-icons/fi';

const whyChooseUs = [
  { icon: FiZap, title: "Fast Delivery", desc: "Speedy and efficient project completion" },
  { icon: FiLayers, title: "Scalable Architecture", desc: "Solutions designed for growth" },
  { icon: FiEye, title: "Transparent Communication", desc: "Clear and open client interactions" },
  { icon: FiAward, title: "Enterprise-level Quality", desc: "High standards and reliability" },
];

export default function AboutUs() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* === LEFT: Title - Slide In from Left === */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.1 
          }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-10 py-5 text-white leading-tight">
            We Don’t Design.<br />We Deliver Results.
          </h2>
        </motion.div>

        {/* === RIGHT: Cards - Slide In from Right (Staggered) === */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15, // Delay between each card
              }
            }
          }}
        >
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { 
                    x: 80, 
                    opacity: 0 
                  },
                  visible: { 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 bg-white/5 border border-white/20 rounded-lg flex items-start gap-3 group backdrop-blur-sm"
              >
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}