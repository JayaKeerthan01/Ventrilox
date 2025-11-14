// components/Contact.js
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Ready to 10x Your Business?
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none" />
          <input type="email" placeholder="Business Email" className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none" />
          <textarea placeholder="Tell us about your project" rows="4" className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none"></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-white text-black font-bold rounded-lg"
          >
            Send Project Brief
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}