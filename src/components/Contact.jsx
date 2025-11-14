// components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

// === CONFIG ===
const SERVICE_ID = 'service_b71xnpk';
const TEMPLATE_ID_OWNER = 'template_60yavf5';     // To site owner
const TEMPLATE_ID_CUSTOMER = 'template_duv34oo';  // Auto-reply to user
const USER_ID = 'jCsPY1iCavPBMM-6q';               // Your EmailJS User ID (Public Key)

// Initialize EmailJS ONCE at the top
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
      // === 1. Send to Site Owner ===
      const ownerResult = await emailjs.send(
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
      console.log('Owner Email Sent:', ownerResult);

      // === 2. Send Auto-Reply to Customer ===
      const customerResult = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_CUSTOMER,
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Your Company Name', // Change to your brand
        },
        USER_ID
      );
      console.log('Auto-Reply Sent:', customerResult);

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

  // === TEMPORARY TEST BUTTON (Remove after testing) ===
  const testEmailJS = () => {
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_OWNER,
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        phone: '9876543210',
        message: 'This is a test message from EmailJS.',
        to_email: 'mohammednajeem.555@gmail.com',
      },
      USER_ID
    )
    .then((res) => {
      console.log('TEST EMAIL SUCCESS:', res);
      toast.success('Test email sent! Check console.');
    })
    .catch((err) => {
      console.error('TEST EMAIL FAILED:', err);
      toast.error('Test failed. Check console.');
    });
  };

  return (
    <>
      <Toaster position="top-center" />

      {/* === TEMP TEST BUTTON (REMOVE LATER) === */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={testEmailJS}
          className="px-3 py-1.5 bg-red-600 text-white text-xs rounded shadow-lg hover:bg-red-700"
        >
          TEST EMAILJS
        </button>
      </div>

      <section id="contact" className="py-24 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Ready to 10x Your Business?
          </motion.h2>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none text-white placeholder-gray-500 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none text-white placeholder-gray-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none text-white placeholder-gray-500 transition"
            />
            <textarea
              name="description"
              placeholder="Tell us about your project"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-gray-700 rounded-lg focus:border-white outline-none text-white placeholder-gray-500 transition resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-white text-black font-bold rounded-lg disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? 'Sending...' : 'Send Project Brief'}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}