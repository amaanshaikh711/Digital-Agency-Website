import { motion } from 'motion/react';
import { Target, Users, Zap, TrendingUp, CheckCircle2, Search, Settings, BarChart, ShieldCheck, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">digital experiences</span><br />
          that drive real growth.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Ibrahim Digital is a premium digital marketing agency dedicated to scaling ambitious brands through data, creativity, and technology.
        </motion.p>
      </section>

      {/* Agency Story */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded on the belief that digital marketing shouldn't be a black box, Ibrahim Digital emerged to provide transparent, ROI-focused solutions for businesses tired of vanity metrics.
              </p>
              <p>
                We started as a small team of passionate marketers and developers. Today, we've grown into a full-service agency partnering with companies globally, helping them navigate the complexities of the digital landscape.
              </p>
              <p>
                Our approach is simple: We combine beautiful, high-converting design with rigorous data analysis and targeted media buying to ensure every dollar you spend delivers a return.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-sm text-gray-500 font-medium">Projects Delivered</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center mt-8">
              <h3 className="text-4xl font-bold text-emerald-500 mb-2">95%</h3>
              <p className="text-sm text-gray-500 font-medium">Client Retention</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center -mt-8">
              <h3 className="text-4xl font-bold text-purple-500 mb-2">$10M+</h3>
              <p className="text-sm text-gray-500 font-medium">Revenue Generated</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">5+</h3>
              <p className="text-sm text-gray-500 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-xl mx-auto">The principles that guide our work, our team, and our partnerships.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Results First', desc: 'We measure success by your bottom line, not just likes or clicks. Everything we do is optimized for conversion.' },
            { icon: Zap, title: 'Proactive Innovation', desc: 'Digital moves fast. We stay ahead of the curve, constantly testing new platforms, algorithms, and strategies.' },
            { icon: Users, title: 'True Partnership', desc: 'We view ourselves as an extension of your team. Transparent communication and shared goals are mandatory.' }
          ].map((val, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <val.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">A proven methodology to take you from where you are to where you want to be.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            
            {[
              { icon: Search, step: '01', title: 'Discovery', desc: 'We dive deep into your business, competitors, and target audience to uncover opportunities.' },
              { icon: Settings, step: '02', title: 'Strategy', desc: 'We develop a custom, multi-channel marketing plan tailored to your specific goals and budget.' },
              { icon: Zap, step: '03', title: 'Execution', desc: 'Our experts implement the campaigns, focusing on high-impact activities first.' },
              { icon: BarChart, step: '04', title: 'Optimization', desc: 'Continuous testing, tracking, and refinement to maximize your return on investment.' }
            ].map((process, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center mb-6 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center border-2 border-white">
                    {process.step}
                  </div>
                  <process.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't just execute marketing campaigns; we build growth engines. Here's why leading brands choose Ibrahim Digital as their strategic partner.
            </p>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Absolute Transparency', desc: 'No hidden fees or vanity metrics. You get clear, honest reporting on what matters.' },
                { icon: PieChart, title: 'Data-Driven Decisions', desc: 'Every move we make is backed by hard data and rigorous testing.' },
                { icon: Users, title: 'Dedicated Experts', desc: 'You work directly with senior specialists, not junior account managers.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Digital marketing analytics" 
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-10">
        <div className="bg-navy rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to meet the team?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">Let's schedule a quick introductory call to see if we're the right fit for your growth goals.</p>
          <Link to="/contact" className="relative z-10 inline-block px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg">
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
