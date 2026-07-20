import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Search, Target, Megaphone, MonitorSmartphone, LayoutDashboard, PenTool, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

const serviceData = {
  'seo': { 
    icon: Search, 
    title: 'SEO Optimization', 
    desc: 'Climb the Google rankings and stay there. We build robust, white-hat SEO strategies that drive compounding organic traffic to your most important pages.',
    overview: [
      "Securing a spot on the first page of Google is no longer just an option—it's a necessity for sustainable growth. Our SEO approach goes beyond basic keyword stuffing; we dive deep into technical optimization, high-quality content creation, and authoritative link building.",
      "By aligning your website with search engine algorithms and user intent, we ensure that your brand captures high-value organic traffic, establishes industry authority, and generates leads consistently without relying solely on paid ads."
    ],
    process: [
      { step: '01', title: 'Comprehensive SEO Audit', desc: 'We analyze your website’s technical health, backlink profile, and current keyword rankings.' },
      { step: '02', title: 'Keyword & Competitor Strategy', desc: 'Identifying high-converting search terms and mapping out a strategy to outrank your competitors.' },
      { step: '03', title: 'On-Page & Technical Execution', desc: 'Optimizing site speed, meta tags, architecture, and producing engaging, SEO-rich content.' },
      { step: '04', title: 'Off-Page & Authority Building', desc: 'Acquiring high-quality backlinks and continuously tracking ranking improvements.' }
    ],
    benefits: [
      { title: 'Long-Term ROI', desc: 'Unlike paid ads, organic traffic continues to deliver value long after the initial investment.' },
      { title: 'Higher Trust', desc: 'Users inherently trust organic results more than sponsored placements.' },
      { title: 'Compounding Growth', desc: 'Every piece of content and backlink builds upon the last, multiplying your traffic over time.' }
    ]
  },
  'google-ads': { 
    icon: Target, 
    title: 'Google Ads Management', 
    desc: 'Capture high-intent prospects at the exact moment they search for your services.',
    overview: [
      "In today's hyper-competitive digital landscape, relying on guesswork is a guaranteed path to wasted budgets. Our Google Ads methodology is rooted in rigorous data analysis, intent-driven keyword targeting, and continuous bid optimization.",
      "We don't just set it and forget it. We act as your strategic growth partner, constantly monitoring performance, tweaking ad copy, and optimizing landing pages to lower your Cost Per Acquisition (CPA) and maximize your Return on Ad Spend (ROAS)."
    ],
    process: [
      { step: '01', title: 'Account Audit & Setup', desc: 'We analyze past performance or build a highly structured account from scratch.' },
      { step: '02', title: 'Keyword & Audience Targeting', desc: 'Pinpointing the exact search terms your ideal customers are using to buy.' },
      { step: '03', title: 'Ad Creation & Launch', desc: 'Writing compelling ad copy and setting up tracking to measure every conversion.' },
      { step: '04', title: 'Optimization & Scaling', desc: 'A/B testing ads, refining bids, and scaling the campaigns that drive the best ROI.' }
    ],
    benefits: [
      { title: 'Immediate Visibility', desc: 'Jump straight to the top of search results and start generating leads instantly.' },
      { title: 'High Intent Traffic', desc: 'Only pay for clicks from users who are actively searching for what you offer.' },
      { title: 'Total Cost Control', desc: 'Strict daily budgets and bid caps ensure you never overspend on acquisition.' }
    ]
  },
  'meta-ads': { 
    icon: Megaphone, 
    title: 'Meta Advertising', 
    desc: 'Leverage the immense data of Facebook and Instagram to build awareness and drive direct conversions.',
    overview: [
      "With billions of active users, Facebook and Instagram offer unparalleled opportunities to reach your exact target demographic. Our Meta advertising strategies focus on thumb-stopping creatives and advanced audience segmentation.",
      "Whether your goal is to generate high-quality leads, drive e-commerce sales, or build massive brand awareness, we utilize dynamic retargeting and lookalike audiences to put your brand in front of the people most likely to convert."
    ],
    process: [
      { step: '01', title: 'Audience Research & Strategy', desc: 'Defining your buyer personas and mapping out the perfect campaign structure.' },
      { step: '02', title: 'Creative Development', desc: 'Designing eye-catching image and video ads tailored for social feeds and stories.' },
      { step: '03', title: 'Campaign Launch', desc: 'Deploying the ads with precise targeting and proper pixel tracking in place.' },
      { step: '04', title: 'Testing & Scaling', desc: 'Testing multiple creatives and audiences, pausing the losers, and scaling the winners.' }
    ],
    benefits: [
      { title: 'Hyper-Targeting', desc: 'Pinpoint exact demographics, interests, and behaviors to reach your ideal customer.' },
      { title: 'Visual Engagement', desc: 'Capture attention with stunning image and video creatives in users’ daily feeds.' },
      { title: 'Scalable Growth', desc: 'Rapidly scale winning campaigns to generate a consistent, predictable flow of leads.' }
    ]
  },
  'social-media': { 
    icon: MonitorSmartphone, 
    title: 'Social Media Management', 
    desc: 'Build a loyal community around your brand.',
    overview: [
      "Your social media presence is often the first interaction a potential customer has with your brand. We help you make a lasting impression by curating aesthetically pleasing, engaging, and value-driven content across all major platforms.",
      "Our social media management goes beyond just posting. We focus on active community management, brand voice consistency, and strategic growth tactics that turn casual followers into loyal brand advocates."
    ],
    process: [
      { step: '01', title: 'Brand Voice & Audit', desc: 'Understanding your brand identity and auditing your current social footprint.' },
      { step: '02', title: 'Content Strategy & Calendar', desc: 'Planning a mix of educational, entertaining, and promotional content.' },
      { step: '03', title: 'Content Creation & Publishing', desc: 'Designing high-quality graphics and writing engaging captions for regular posting.' },
      { step: '04', title: 'Community Engagement & Reporting', desc: 'Responding to comments, engaging with followers, and tracking growth metrics.' }
    ],
    benefits: [
      { title: 'Brand Loyalty', desc: 'Build an active community that trusts your brand and advocates for your business.' },
      { title: 'Social Proof', desc: 'A vibrant social presence validates your credibility to potential customers.' },
      { title: 'Direct Engagement', desc: 'Interact directly with your audience to gather feedback and address customer needs.' }
    ]
  },
  'web-development': { 
    icon: LayoutDashboard, 
    title: 'Website Development', 
    desc: 'Your website is your best salesperson. We build lightning-fast, beautifully designed websites.',
    overview: [
      "A beautiful website is useless if it doesn't convert. We design and develop custom websites that perfectly balance stunning aesthetics with seamless user experience (UX) and conversion rate optimization (CRO).",
      "From blazing-fast load speeds to mobile-first responsiveness, our development team ensures that your digital storefront not only looks premium but performs flawlessly, turning your visitors into paying customers."
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Mapping out the site architecture and user journey for maximum conversions.' },
      { step: '02', title: 'UI/UX Design', desc: 'Creating high-fidelity mockups that align with your brand’s visual identity.' },
      { step: '03', title: 'Development & Integration', desc: 'Coding the site with clean, modern tech stacks and integrating necessary tools.' },
      { step: '04', title: 'Testing & Launch', desc: 'Rigorous QA testing across all devices before pushing your new site live.' }
    ],
    benefits: [
      { title: 'Maximized Conversions', desc: 'Strategic UX/UI design ensures visitors are guided smoothly toward making a purchase.' },
      { title: 'Blazing Fast Speeds', desc: 'Optimized code reduces bounce rates and significantly improves user experience.' },
      { title: 'Mobile-First Design', desc: 'Flawless performance across all devices, capturing the massive mobile audience.' }
    ]
  },
  'logo-branding': { 
    icon: PenTool, 
    title: 'Logo & Branding', 
    desc: 'Establish a premium visual identity that builds immediate trust.',
    overview: [
      "Your brand is more than just a logo; it's the feeling people get when they interact with your business. We craft cohesive, memorable brand identities that resonate with your target audience and set you apart from competitors.",
      "From typography and color palettes to comprehensive brand guidelines, we ensure that every visual touchpoint communicates professionalism, credibility, and your unique brand story."
    ],
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'Understanding your core values, mission, and target market positioning.' },
      { step: '02', title: 'Concept Development', desc: 'Sketching and designing initial logo concepts and visual directions.' },
      { step: '03', title: 'Refinement', desc: 'Collaborating with you to perfect the chosen concept into a polished design.' },
      { step: '04', title: 'Final Delivery & Guidelines', desc: 'Providing all necessary file formats and a detailed brand style guide.' }
    ],
    benefits: [
      { title: 'Instant Credibility', desc: 'A premium visual identity positions your brand as an industry leader from day one.' },
      { title: 'Memorable Impact', desc: 'Stand out in a crowded market with a unique and recognizable brand mark.' },
      { title: 'Cohesive Messaging', desc: 'Consistent design across all platforms builds trust and professional coherence.' }
    ]
  },
  'video-editing': { 
    icon: Video, 
    title: 'Video Editing', 
    desc: 'Engage your audience with high-quality video content.',
    overview: [
      "In a world dominated by short attention spans, video is the most powerful medium to capture interest. Our video editing services transform raw footage into captivating, high-retention content tailored for any platform.",
      "Whether it's snappy Reels and TikToks, polished corporate videos, or engaging YouTube content, we utilize dynamic pacing, color grading, and motion graphics to tell your story effectively."
    ],
    process: [
      { step: '01', title: 'Footage Review & Strategy', desc: 'Analyzing your raw content and aligning on the desired tone and style.' },
      { step: '02', title: 'Rough Cut & Assembly', desc: 'Splicing the best takes and structuring the narrative flow of the video.' },
      { step: '03', title: 'Visuals & Sound Design', desc: 'Adding transitions, color grading, text effects, and professional audio mixing.' },
      { step: '04', title: 'Final Review & Export', desc: 'Delivering the finalized video in the optimal formats for your target platforms.' }
    ],
    benefits: [
      { title: 'Higher Retention', desc: 'Dynamic editing keeps viewers engaged longer, satisfying platform algorithms.' },
      { title: 'Emotional Connection', desc: 'Tell your brand story in a powerful way that static images simply cannot match.' },
      { title: 'Multi-Platform Use', desc: 'Repurpose one video into shorts, ads, and website assets for maximum ROI.' }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (serviceId && serviceData[serviceId]) {
      setService(serviceData[serviceId]);
    }
  }, [serviceId]);

  if (!service) {
    return <div className="pt-40 text-center pb-40">Service not found. <Link to="/services" className="text-primary underline">Go back</Link></div>;
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Hero */}
        <section className="bg-navy rounded-3xl p-8 md:p-16 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/3">
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-light font-medium mb-6 hover:text-white transition-colors text-sm">
                <ArrowRight size={16} className="rotate-180" /> Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started
              </Link>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <Icon size={80} className="text-primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Process */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {service.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-xl font-bold text-gray-300 font-heading">{item.step}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-navy">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {service.benefits && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Ibrahim Digital Advantage</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Why partnering with us for {service.title.toLowerCase()} is the best investment for your brand's future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(21,101,242,0.12)] transition-all flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
