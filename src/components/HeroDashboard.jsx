import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, Target, MousePointer2, BarChart3, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const Card = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-4 md:p-5",
      className
    )}
  >
    {children}
  </motion.div>
);

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto md:ml-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-primary-light/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

      {/* Main Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full bg-[#f8fafc]/50 backdrop-blur-2xl border border-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(21,101,242,0.1)] p-4 md:p-6 grid grid-cols-2 gap-4"
      >
        {/* Top left: Revenue Card */}
        <Card className="col-span-1 bg-navy text-white shadow-xl" delay={0.1}>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <DollarSign size={18} className="text-white" />
            </div>
            <span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
              <TrendingUp size={12} className="mr-1" />
              +23.8%
            </span>
          </div>
          <p className="text-white/60 text-xs font-medium mb-1">Total Revenue</p>
          <h4 className="text-xl md:text-2xl font-bold">$245,800</h4>
          <div className="mt-4 h-10 w-full flex items-end gap-1">
            {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t-sm"
              />
            ))}
          </div>
        </Card>

        {/* Top right: Leads Card */}
        <Card className="col-span-1" delay={0.2}>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users size={18} className="text-primary" />
            </div>
            <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight size={12} className="mr-1" />
              18.6%
            </span>
          </div>
          <p className="text-gray-500 text-xs font-medium mb-1">Leads Generated</p>
          <h4 className="text-xl md:text-2xl font-bold text-navy">1,245</h4>
          <svg className="w-full h-10 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
            <motion.path
              d="M0 30 Q 15 5, 30 20 T 60 10 T 100 25"
              fill="none"
              stroke="#1565F2"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <path d="M0 30 Q 15 5, 30 20 T 60 10 T 100 25 L 100 30 L 0 30 Z" fill="url(#gradient)" opacity="0.2" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1565F2" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </Card>

        {/* Middle span: Campaign Performance */}
        <Card className="col-span-2 relative overflow-hidden" delay={0.3}>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-semibold text-navy">Campaign Performance</h4>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-[10px] font-medium text-gray-500">
                <div className="w-2 h-2 rounded-full bg-primary" /> Clicks
              </span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-gray-500">
                <div className="w-2 h-2 rounded-full bg-emerald-400" /> Conversions
              </span>
            </div>
          </div>
          <div className="h-28 w-full flex items-end justify-between gap-2 px-2">
            {[
              { c: 60, v: 30 }, { c: 80, v: 45 }, { c: 40, v: 20 },
              { c: 90, v: 50 }, { c: 70, v: 35 }, { c: 100, v: 60 }, { c: 85, v: 40 }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex gap-1 items-end justify-center h-full group">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.c}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                  className="w-full max-w-[8px] bg-primary rounded-t-sm group-hover:opacity-80 transition-opacity"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.v}%` }}
                  transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                  className="w-full max-w-[8px] bg-emerald-400 rounded-t-sm group-hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
          {/* Floating Tooltip Mock */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-3 border border-gray-100 z-10 pointer-events-none"
          >
            <p className="text-[10px] text-gray-400 mb-2">May 16, 2024</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between gap-4"><span className="text-gray-500">Clicks</span><span className="font-semibold text-navy">6,425</span></div>
              <div className="flex justify-between gap-4"><span className="text-gray-500">Conversions</span><span className="font-semibold text-navy">1,453</span></div>
            </div>
          </motion.div>
        </Card>

        {/* Bottom Left: ROI */}
        <Card className="col-span-1 flex flex-col justify-between" delay={0.4}>
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-semibold text-navy">ROI</h4>
            <div className="p-1.5 bg-purple-100 rounded-md">
              <Target size={14} className="text-purple-600" />
            </div>
          </div>
          <div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-2xl font-bold text-navy">420%</span>
              <span className="text-xs text-emerald-500 font-medium mb-1 flex items-center">
                <ArrowUpRight size={10} /> 24.5%
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
              />
            </div>
          </div>
        </Card>

        {/* Bottom Right: Notification */}
        <Card className="col-span-1 flex flex-col justify-center gap-3" delay={0.5}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-medium">New Lead Received</p>
              <p className="text-xs font-semibold text-navy truncate max-w-[100px]">Sarah Jenkins</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-[10px] text-gray-600 border border-gray-100">
            Requested a quote for SEO optimization.
          </div>
        </Card>
        
        {/* Floating elements outside the main grid to give depth */}
        <motion.div 
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="absolute -top-4 -left-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 z-20"
        >
          <div className="w-8 h-8 rounded-full bg-[#EA4335]/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-gray-500">Google Ads</p>
            <p className="text-xs font-bold text-navy">Top Ranking</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ y: -5 }}
          className="absolute -bottom-6 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-20"
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <BarChart3 size={14} className="text-primary" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500">SEO Score</p>
            <div className="flex items-center gap-1">
              <p className="text-sm font-bold text-navy">98/100</p>
              <ArrowUpRight size={12} className="text-emerald-500" />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
