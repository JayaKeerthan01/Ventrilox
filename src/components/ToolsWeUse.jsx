// components/ToolsWeUse.jsx
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiExpress, SiAngular, SiMongodb, SiMysql, SiPostgresql,
  SiBootstrap, SiGitlab, SiJenkins, SiDocker,
  SiKubernetes, SiAnsible
} from 'react-icons/si';
import { FaAws,FaPython } from "react-icons/fa";


const tools = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-600" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "Ansible", icon: SiAnsible, color: "text-red-700" },
];

export default function ToolsWeUse() {
  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools We Use
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We leverage industry-leading technologies to build fast, scalable, and modern applications.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="group flex flex-col items-center justify-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                {/* Icon with Neon Glow */}
                <motion.div
                  className={`text-4xl mb-3 ${tool.color} drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300`}
                  style={{
                    filter: "drop-shadow(0 0 8px currentColor)"
                  }}
                  whileHover={{
                    filter: "drop-shadow(0 0 20px currentColor)"
                  }}
                >
                  <Icon />
                </motion.div>

                {/* Tool Name */}
                <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                  {tool.name}
                </p>
              </motion.div>
            );
          })}
        </div>

 
      </div>
    </section>
  );
}