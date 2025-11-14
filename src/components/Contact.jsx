// components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { Phone, Mail, MapPin } from 'lucide-react'; // Lightweight icons

// === CONFIG ===
const SERVICE_ID = 'service_b71xnpk';
const TEMPLATE_ID_OWNER = 'template_60yavf5';
const TEMPLATE_ID_CUSTOMER = 'template_duv34oo';
const USER_ID = 'jCsPY1iCavPBMM-6q';

// Initialize EmailJS
emailjs.init(USER_ID);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_OWNER,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.description,
          to_email: 'mohammednajeem.555@gmail.com',
        },
        USER_ID
      );

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_CUSTOMER,
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'VentriloX',
        },
        USER_ID
      );

      toast.success('Message sent! We\'ll get back to you soon.', { id: toastId });
      setFormData({ name: '', phone: '', email: '', description: '' });
    } catch (error) {
      console.error('EmailJS Failed:', error);
      toast.error(
        `Failed: ${error.text || error.message || 'Please try again.'}`,
        { id: toastId }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* === LEFT: Contact Info === */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-10 text-white"
            >
              {/* Brand */}
              <div>
                <h1 className="text-5xl font-inria md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  V E N T R I L O X
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mt-2">
                  Let's Build the Future
                </h2>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
              
                <motion.a
                  href="tel:9941437386"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-lg group"
                >
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="font-medium group-hover:text-white transition">+91 99414 37386</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:team.humanal@gmail.com"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-lg group"
                >
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="font-medium group-hover:text-white transition">team.humanal@gmail.com</p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 text-lg group cursor-default"
                >
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit Us</p>
                    <p className="font-medium max-w-xs">
                      Chennai, TamilNadu, India
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Tagline */}
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Ready to 10x your business? Drop us a message — let’s turn your vision into reality.
              </p>
            </motion.div>

            {/* === RIGHT: Contact Form === */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-800"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to 10x your business???
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:border-white focus:ring-2 focus:ring-white/20 outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:border-white focus:ring-2 focus:ring-white/20 outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:border-white focus:ring-2 focus:ring-white/20 outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
                <textarea
                  name="description"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:border-white focus:ring-2 focus:ring-white/20 outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-white to-gray-200 text-black font-bold rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Brief'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}