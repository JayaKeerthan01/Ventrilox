// components/Services.js
import { motion } from 'framer-motion';
import { FaCloud, FaLaptopCode } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { FiCode, FiServer, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    title: "Web and Mobile Application",
    desc: "We build lightning-fast, responsive web and mobile apps that look stunning on every device. From sleek landing pages to powerful native apps designed to engage users and drive results.",
    icon: FaLaptopCode,
  },
  
{
  title: "API Development",
  desc: "Seamless integrations start here. We design and build secure, scalable APIs that connect your apps, services, and data — enabling smooth communication and future-ready architecture.",
  icon: FiServer, // You can use an appropriate icon like FiServer or FiCloud
},

  {
    title: "Cloud Engineering",
    desc: "Your app deserves a bulletproof backend. We architect, deploy, and optimize cloud systems (AWS, Azure) that scale seamlessly, cut costs, and never sleep.",
    icon: FaCloud,
  },
  {
    title: "AI & Automation",
    desc: "Automate repetitive tasks, predict user behavior, and boost efficiency with custom AI. Chatbots, predictive analytics, workflow automation — we make your business run itself.",
    icon: RiRobot3Fill,
  },
  
// {
//   title: "Digital Marketing",
//   desc: "Boost your brand’s visibility and engagement. From SEO and social media to targeted campaigns, we craft strategies that drive traffic, conversions, and measurable growth.",
//   icon: FiTrendingUp, // Use an icon like FiTrendingUp or FiBarChart
// },
];

// Stagger container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Each card animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-12 px-6 bg-black">
      {/* WIDER CONTAINER */}
      <div className="max-w-7xl mx-auto"> {/* Changed from max-w-6xl to max-w-7xl */}
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-left mb-12 text-white"
        >
          What We Do.
          <p className="text-2xl mt-2 font-light text-white/80">Our core offerings include.</p>
        </motion.h2>

        {/* WIDER GRID + BETTER GAP */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" // Increased gap-6 → gap-8
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  borderColor: "#ffffff",
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.25)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="group relative p-7 bg-black border border-white/20 rounded-xl cursor-pointer overflow-hidden"
              >
                {/* Icon with hover scale */}
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
