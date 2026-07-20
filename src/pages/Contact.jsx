import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Let's discuss your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">growth targets</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're looking to scale your current campaigns or build a digital presence from scratch, our team is ready to help.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:ibrahimshaikh120203@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                    <p className="font-semibold text-navy group-hover:text-primary transition-colors">ibrahimshaikh120203@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+918850021328" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Call Us</p>
                    <p className="font-semibold text-navy group-hover:text-primary transition-colors">+91 88500 21328</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Visit us</p>
                    <p className="font-semibold text-navy">Khar west, Mumbai - 400052</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-xl font-bold text-navy">WhatsApp Us</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm">Need a quick response? Message us directly on WhatsApp for immediate support.</p>
              <a href="https://wa.me/918850021328" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Start Chat <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-3xl font-bold mb-2">Send us a message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. A member of our team will contact you shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-primary font-medium hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-navy">First Name</label>
                      <input id="firstName" required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-navy">Last Name</label>
                      <input id="lastName" required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-navy">Email Address</label>
                      <input id="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-navy">Phone Number</label>
                      <input id="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="+91 88500 21328" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-navy">Service of Interest</label>
                    <select id="service" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                      <option value="">Select a service...</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="meta-ads">Meta Ads</option>
                      <option value="web-dev">Web Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy">Project Details</label>
                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="Tell us about your business goals and what you're looking to achieve..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(21,101,242,0.39)] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>Send Message <ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
