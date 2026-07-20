import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Target, Megaphone, MonitorSmartphone, LayoutDashboard, PenTool, ArrowRight, Video } from 'lucide-react';

const services = [
  { 
    id: 'seo',
    icon: Search, 
    title: 'SEO Optimization', 
    desc: 'Climb the Google rankings and stay there. We build robust, white-hat SEO strategies that drive compounding organic traffic to your most important pages.',
    benefits: ['Keyword Strategy', 'Technical SEO', 'Content Optimization', 'Link Building']
  },
  { 
    id: 'google-ads',
    icon: Target, 
    title: 'Google Ads Management', 
    desc: 'Capture high-intent prospects at the exact moment they search for your services. We optimize bids, ad copy, and landing pages for maximum ROI.',
    benefits: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'Retargeting']
  },
  { 
    id: 'meta-ads',
    icon: Megaphone, 
    title: 'Meta Advertising', 
    desc: 'Leverage the immense data of Facebook and Instagram to build awareness and drive direct conversions through highly targeted creative campaigns.',
    benefits: ['Audience Targeting', 'Creative Testing', 'Pixel Integration', 'ROAS Optimization']
  },
  { 
    id: 'social-media',
    icon: MonitorSmartphone, 
    title: 'Social Media Management', 
    desc: 'Build a loyal community around your brand. We handle content creation, scheduling, and community engagement across all major platforms.',
    benefits: ['Content Strategy', 'Brand Voice', 'Community Growth', 'Performance Analytics']
  },
  { 
    id: 'web-development',
    icon: LayoutDashboard, 
    title: 'Website Development', 
    desc: 'Your website is your best salesperson. We build lightning-fast, beautifully designed websites focused entirely on user experience and conversion.',
    benefits: ['Custom Design', 'Mobile Responsive', 'Performance Optimization', 'CMS Integration']
  },
  { 
    id: 'logo-branding',
    icon: PenTool, 
    title: 'Logo & Branding', 
    desc: 'Establish a premium visual identity that builds immediate trust. We design logos, color palettes, and typography guidelines that set you apart.',
    benefits: ['Visual Identity', 'Brand Guidelines', 'Marketing Collateral', 'Typography Selection']
  },
  { 
    id: 'video-editing',
    icon: Video, 
    title: 'Video Editing', 
    desc: 'Engage your audience with high-quality video content for TikTok, Reels, and YouTube. We provide professional editing, motion graphics, and sound design.',
    benefits: ['Short-form Reels/TikToks', 'Corporate Videos', 'Motion Graphics', 'Color Grading']
  }
];

export default function Services() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          A comprehensive suite of digital marketing solutions tailored to your unique business objectives.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <Link to={`/services/${service.id}`} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300" />
                </Link>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">What's included</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="mt-24 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Let's hop on a call. We'll analyze your current digital presence and recommend the exact services that will drive the highest ROI for your budget.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-white font-medium hover:bg-navy/90 transition-all shadow-lg">
          Get a Free Marketing Audit
        </Link>
      </section>
    </div>
  );
}
