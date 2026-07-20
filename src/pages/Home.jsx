import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart, MonitorSmartphone, Target, Search, Megaphone, PenTool, LayoutDashboard, Rocket } from 'lucide-react';
import HeroDashboard from '../components/HeroDashboard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted Digital Growth Partner
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-navy mb-6 text-balance"
          >
            Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Result-Driven</span> Digital Marketing
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed text-justify md:text-left text-pretty"
          >
            Welcome to Ibrahim Digital, your trusted digital marketing partner. We help startups, small businesses, and established brands grow online through creative, affordable, and results-driven marketing solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(21,101,242,0.39)] hover:shadow-[0_6px_20px_rgba(21,101,242,0.23)] hover:-translate-y-0.5 text-center flex justify-center items-center gap-2 group">
              Get Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full bg-white border-2 border-gray-100 text-navy font-medium hover:border-gray-200 hover:bg-gray-50 transition-all text-center flex justify-center items-center gap-2">
              Explore Services
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 w-full pt-8 border-t border-gray-100"
          >
            <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Trusted by 50+ Businesses for</p>
            <div className="flex flex-wrap gap-3">
              {['Google Ads', 'SEO', 'Meta Ads', 'Social Media', 'Web Dev'].map((tag) => (
                <div key={tag} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white bg-gray-100" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white text-xs font-bold flex items-center justify-center">+50</div>
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm mb-1">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-xs font-medium text-gray-500">5.0 Based on 45+ Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Dashboard */}
        <div className="w-full lg:w-1/2 relative z-10 mt-12 lg:mt-0">
          <HeroDashboard />
        </div>
      </section>


      {/* PREMIUM SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Digital Services</h2>
          <p className="text-gray-600">Comprehensive digital marketing solutions designed to elevate your brand and drive measurable growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Search, title: 'SEO Optimization', desc: 'Rank higher on Google and drive organic, high-intent traffic to your website.', path: '/services/seo' },
            { icon: Target, title: 'Google Ads', desc: 'High-converting search and display campaigns to capture leads instantly.', path: '/services/google-ads' },
            { icon: Megaphone, title: 'Meta Ads', desc: 'Data-driven Facebook & Instagram advertising to scale your audience.', path: '/services/meta-ads' },
            { icon: MonitorSmartphone, title: 'Social Media', desc: 'Engaging content and community management to build brand loyalty.', path: '/services/social-media' },
            { icon: LayoutDashboard, title: 'Web Development', desc: 'Fast, responsive, and conversion-optimized websites built for performance.', path: '/services/web-development' },
            { icon: PenTool, title: 'Brand Identity', desc: 'Memorable logos and visual guidelines that set you apart from competitors.', path: '/services/logo-branding' },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <Link to={service.path} className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-primary transition-colors">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Why Ambitious Brands Choose Ibrahim Digital</h2>
            <p className="text-gray-400 mb-8 text-lg">We don't just execute tasks; we act as your strategic growth partner, focusing entirely on ROI and measurable outcomes.</p>
            
            <div className="space-y-6">
              {[
                { title: 'Data-Driven Strategies', desc: 'Every decision is backed by analytics and market research.' },
                { title: 'Transparent Reporting', desc: 'Clear, jargon-free dashboards showing exactly how your budget is performing.' },
                { title: 'Dedicated Experts', desc: 'A team of certified professionals committed to your success.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium">
              More about us
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-primary-light mb-2">350%</h4>
                <p className="text-sm text-gray-400">Average ROI for our paid advertising clients in year one.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-emerald-400 mb-2">45+</h4>
                <p className="text-sm text-gray-400">Five-star reviews from satisfied partners across industries.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-purple-400 mb-2">Top 3</h4>
                <p className="text-sm text-gray-400">Consistent page 1 rankings achieved for targeted client keywords.</p>
              </div>
              <div className="bg-primary border border-primary-light/50 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2">Ready to scale?</h4>
                <p className="text-sm text-white/80 mb-4">Let's discuss your growth targets.</p>
                <Link to="/contact" className="text-sm font-bold bg-white text-primary px-4 py-2 rounded-lg inline-block">
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10 rounded-3xl" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to dominate your market?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Get a free, no-obligation digital marketing audit and discover exactly how much growth you're leaving on the table.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg">
          Claim Your Free Audit
          <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}
