
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Database, 
  Search, 
  ShieldCheck, 
  BellRing, 
  Server, 
  Zap, 
  BarChart,
  CreditCard,
  Users,
  Rocket,
  Timer,
  Cpu,
  Mail,
  Phone,
  MessageCircle,
  Laptop,
  Cloud,
  Share2,
  LifeBuoy
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import GlobeAnimation from '@/components/GlobeAnimation';
import PricingCard from '@/components/PricingCard';
import ServiceCard from '@/components/ServiceCard';
import FloatingIcon from '@/components/FloatingIcon';
import ChatWidget from '@/components/ChatWidget';
import HolographicScreen from '@/components/HolographicScreen';
import HolographicBrochure from '@/components/HolographicBrochure';
import MediaReel from '@/components/MediaReel';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  useEffect(() => {
    document.title = "NeonDigital - Premium Domain & Hosting Solutions";
  }, []);

  return (
    <div className="bg-neo-dark min-h-screen overflow-hidden neo-grid-bg relative">
      {/* Background gradient orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-neo-blue/10 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neo-purple/10 blur-[100px] pointer-events-none"></div>
      
      <Navigation />
      <ScrollToTopButton />
      
      {/* Hero Section */}
      <motion.div 
        ref={targetRef}
        className="min-h-screen pt-24 flex items-center justify-center relative"
        style={{ opacity, scale, y }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-neo-blue to-neo-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Power Your Digital Presence
              </motion.h1>
              
              <motion.p 
                className="text-lg text-neo-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Premium domain registration, high-performance hosting, and expert SEO/SMO services for your business
              </motion.p>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button 
                  className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-neo-blue to-neo-purple shadow-neo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                
                <motion.button 
                  className="px-6 py-3 rounded-md font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-center">
              <HolographicScreen>
                <div className="p-8">
                  <div className="flex justify-center mb-8 relative h-80">
                    <div className="absolute w-80 h-80">
                      <GlobeAnimation />
                    </div>
                    
                    {/* Orbiting icons */}
                    <div className="absolute w-72 h-72 inset-0 m-auto pointer-events-none">
                      <FloatingIcon icon={Globe} type="blue" orbiting orbitRadius={100} delay={0} orbitDuration={20} />
                      <FloatingIcon icon={Database} type="purple" orbiting orbitRadius={100} delay={5} orbitDuration={20} />
                      <FloatingIcon icon={Search} type="blue" orbiting orbitRadius={100} delay={10} orbitDuration={20} />
                      <FloatingIcon icon={ShieldCheck} type="purple" orbiting orbitRadius={100} delay={15} orbitDuration={20} />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-glow mb-2">Find Your Perfect Domain</h2>
                    <div className="flex max-w-md mx-auto">
                      <input 
                        type="text" 
                        placeholder="Enter your domain name..." 
                        className="flex-1 py-3 px-4 bg-white/5 border border-white/10 rounded-l-md focus:outline-none focus:border-neo-blue"
                      />
                      <button className="py-3 px-6 bg-gradient-to-r from-neo-blue to-neo-purple rounded-r-md font-medium">
                        Search
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-neo-white/70">
                      .com $12.99 • .net $11.99 • .org $10.99 • .io $39.99
                    </p>
                  </div>
                </div>
              </HolographicScreen>
            </div>
          </div>
        </div>
        
        {/* Floating icons */}
        <div className="absolute top-20 left-10">
          <FloatingIcon icon={Server} duration={4} />
        </div>
        <div className="absolute bottom-20 right-10">
          <FloatingIcon icon={Zap} type="purple" duration={5} delay={1} />
        </div>
      </motion.div>
      
      {/* Domains Section */}
      <section id="domains" className="py-20 relative">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Premium Domains</h2>
            <p className="text-neo-white/70 max-w-2xl mx-auto">
              Secure the perfect domain name for your business with our premium domain registration services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="neo-glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-glow">Find Your Perfect Domain</h3>
                <div className="space-y-6">
                  <div className="flex max-w-md">
                    <input 
                      type="text" 
                      placeholder="Enter your domain name..." 
                      className="flex-1 py-3 px-4 bg-white/5 border border-white/10 rounded-l-md focus:outline-none focus:border-neo-blue"
                    />
                    <button className="py-3 px-6 bg-gradient-to-r from-neo-blue to-neo-purple rounded-r-md font-medium">
                      Search
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {[
                      { ext: '.com', price: '$12.99' },
                      { ext: '.net', price: '$11.99' },
                      { ext: '.org', price: '$10.99' },
                      { ext: '.io', price: '$39.99' },
                    ].map((domain, idx) => (
                      <motion.div
                        key={domain.ext}
                        className="p-4 rounded-lg neo-glass border border-white/10"
                        whileHover={{ y: -5, borderColor: 'rgba(0, 212, 255, 0.5)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <div className="text-xl font-bold text-glow mb-2">{domain.ext}</div>
                        <div className="text-neo-white/70">{domain.price}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-glow">Domain Features</h4>
                    <ul className="space-y-2">
                      {[
                        'Free WHOIS Privacy Protection',
                        'Easy Domain Management',
                        'Domain Forwarding',
                        'DNS Management',
                        'Auto-renewal Option'
                      ].map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-neo-white/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                          <span className="text-neo-blue mr-2">✓</span> {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <HolographicScreen>
                <div className="p-8 flex flex-col items-center">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-glow mb-2">Domain Portfolio</h3>
                    <p className="text-neo-white/70">Manage your domains with ease</p>
                  </div>
                  
                  <div className="w-full space-y-4 max-w-md">
                    {[
                      { domain: 'yourbusiness.com', expires: '2026-05-21', status: 'Active' },
                      { domain: 'yourbrand.net', expires: '2026-03-12', status: 'Active' },
                      { domain: 'yourproduct.org', expires: '2025-11-30', status: 'Expiring Soon' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <div>
                          <div className="font-medium text-glow">{item.domain}</div>
                          <div className="text-sm text-neo-white/60">Expires: {item.expires}</div>
                        </div>
                        <div className={`text-sm px-3 py-1 rounded-full ${
                          item.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {item.status}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-neo-blue to-neo-purple"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Manage Domains
                  </motion.button>
                </div>
              </HolographicScreen>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Enhanced for Hosting */}
      <section id="services" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Premium Services</h2>
            <p className="text-neo-white/70 max-w-2xl mx-auto">
              Experience cutting-edge technology and unmatched performance with our comprehensive suite of digital services
            </p>
          </motion.div>
          
          {/* Hosting Packages Section */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center text-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hosting Solutions
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Shared Hosting',
                  icon: Server,
                  features: [
                    'SSD Storage',
                    'Unlimited Bandwidth',
                    'Free SSL Certificate',
                    'Daily Backups',
                    'One-Click Installers'
                  ],
                  type: 'blue'
                },
                {
                  name: 'Cloud Hosting',
                  icon: Cloud,
                  features: [
                    'Auto-Scaling Resources',
                    'Load Balancing',
                    'Dedicated Resources',
                    'Enhanced Security',
                    'High Availability'
                  ],
                  type: 'purple'
                },
                {
                  name: 'VPS Hosting',
                  icon: Database,
                  features: [
                    'Full Root Access',
                    'Dedicated Resources',
                    'Custom Configuration',
                    'Managed Options',
                    'Isolated Environment'
                  ],
                  type: 'blue'
                }
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  className={`neo-glass p-6 rounded-lg border ${plan.type === 'blue' ? 'border-neo-blue/20' : 'border-neo-purple/20'}`}
                  whileHover={{ y: -10, boxShadow: plan.type === 'blue' ? '0 0 25px rgba(0, 212, 255, 0.7)' : '0 0 25px rgba(123, 104, 238, 0.7)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    plan.type === 'blue' 
                      ? 'bg-neo-blue/20 text-neo-blue' 
                      : 'bg-neo-purple/20 text-neo-purple'
                  }`}>
                    <plan.icon size={24} />
                  </div>
                  <h4 className={`text-xl font-bold mb-4 ${plan.type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>{plan.name}</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center text-neo-white/80">
                        <span className={`mr-2 ${plan.type === 'blue' ? 'text-neo-blue' : 'text-neo-purple'}`}>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`mt-6 w-full py-2 rounded-md font-medium ${
                      plan.type === 'blue' 
                        ? 'bg-gradient-to-r from-neo-blue to-neo-blue/70' 
                        : 'bg-gradient-to-r from-neo-purple to-neo-purple/70'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Other Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ServiceCard 
                icon={Globe} 
                title="Domain Registration" 
                description="Secure your online identity with our premium domain registration services. Wide selection of TLDs available."
                type="blue"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCard 
                icon={Search} 
                title="SEO Optimization" 
                description="Boost your search engine rankings with our expert SEO services. Dominate your market."
                type="blue"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ServiceCard 
                icon={Users} 
                title="Social Media Optimization" 
                description="Engage with your audience and build your brand through strategic social media management."
                type="purple"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ServiceCard 
                icon={ShieldCheck} 
                title="SSL Security" 
                description="Protect your visitors' data with enterprise-grade SSL certificates. Build trust with your customers."
                type="blue"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ServiceCard 
                icon={Share2} 
                title="Content Delivery Network" 
                description="Speed up your website globally with our CDN services. Deliver content faster to your visitors."
                type="purple"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ServiceCard 
                icon={BellRing} 
                title="24/7 Support" 
                description="Our expert team is available around the clock to ensure your online presence never skips a beat."
                type="purple"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section id="support" className="py-20 relative">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">24/7 Expert Support</h2>
            <p className="text-neo-white/70 max-w-2xl mx-auto">
              Our dedicated team is here to help you with any questions or issues you may encounter
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="col-span-1 lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <HolographicScreen>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-glow">Contact Our Team</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-neo-white/80 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-neo-blue"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-neo-white/80 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-neo-blue"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-neo-white/80 mb-2">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-neo-blue">
                      <option value="">Select a topic</option>
                      <option value="domain">Domain Support</option>
                      <option value="hosting">Hosting Support</option>
                      <option value="billing">Billing Questions</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-neo-white/80 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-md p-3 focus:outline-none focus:border-neo-blue"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-neo-blue to-neo-purple shadow-neo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Request
                  </motion.button>
                </div>
              </HolographicScreen>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="neo-glass p-8 rounded-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-glow">Support Channels</h3>
                
                <div className="space-y-8 flex-grow">
                  {[
                    {
                      icon: Phone,
                      title: 'Call Us',
                      description: 'Reach our support team directly by phone',
                      action: '+1 (888) 123-4567',
                      type: 'blue'
                    },
                    {
                      icon: Mail,
                      title: 'Email Support',
                      description: 'Send us an email and we\'ll respond ASAP',
                      action: 'support@neondigital.com',
                      type: 'purple'
                    },
                    {
                      icon: MessageCircle,
                      title: 'Live Chat',
                      description: 'Chat with our support team in real-time',
                      action: 'Start Chat',
                      type: 'blue'
                    },
                    {
                      icon: LifeBuoy,
                      title: 'Help Center',
                      description: 'Browse our extensive knowledge base',
                      action: 'Visit Help Center',
                      type: 'purple'
                    }
                  ].map((channel, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        channel.type === 'blue' 
                          ? 'bg-neo-blue/20 text-neo-blue' 
                          : 'bg-neo-purple/20 text-neo-purple'
                      }`}>
                        <channel.icon size={20} />
                      </div>
                      <div>
                        <h4 className={`font-bold ${channel.type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>{channel.title}</h4>
                        <p className="text-neo-white/70 text-sm mb-2">{channel.description}</p>
                        <motion.button
                          className={`text-sm font-medium ${channel.type === 'blue' ? 'text-neo-blue' : 'text-neo-purple'}`}
                          whileHover={{ x: 5 }}
                        >
                          {channel.action} →
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-neo-white/70 text-sm">
                    Our support team is available 24/7/365 to assist you with any questions or issues.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Transparent Pricing</h2>
            <p className="text-neo-white/70 max-w-2xl mx-auto">
              Choose the plan that suits your business needs. No hidden fees, just premium services at competitive prices
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="9.99"
              features={[
                "1 Website",
                "5GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "24/7 Support",
              ]}
              type="blue"
            />
            
            <PricingCard
              title="Business"
              price="19.99"
              features={[
                "Unlimited Websites",
                "25GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "24/7 Priority Support",
                "Free Domain for 1 Year",
              ]}
              type="purple"
              popular
            />
            
            <PricingCard
              title="Enterprise"
              price="39.99"
              features={[
                "Unlimited Websites",
                "100GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "24/7 Priority Support",
                "Free Domain for 1 Year",
                "Daily Backups",
                "CDN Included",
              ]}
              type="blue"
            />
          </div>
        </div>
      </section>
      
      {/* 3D Brochures and Reels Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Resources & Media</h2>
            <p className="text-neo-white/70 max-w-2xl mx-auto">
              Explore our brochures and media content to learn more about our services and solutions
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
            <div className="flex flex-col gap-6">
              <HolographicBrochure 
                title="Domain Registration Guide" 
                subtitle="Everything you need to know about securing your perfect domain name"
                type="blue"
              />
              <HolographicBrochure 
                title="Hosting Solutions" 
                subtitle="Comparing hosting options for businesses of all sizes"
                type="purple"
                delay={0.2}
              />
            </div>
            
            <div className="mt-12 md:mt-16 flex flex-col gap-6">
              <HolographicBrochure 
                title="SEO Best Practices" 
                subtitle="Maximize your search engine visibility and rankings"
                type="blue"
                delay={0.4}
              />
              <HolographicBrochure 
                title="Social Media Strategy" 
                subtitle="Engage your audience and grow your brand online"
                type="purple"
                delay={0.6}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <MediaReel 
                title="Website Speed Optimization"
                type="blue"
              />
              <MediaReel 
                title="SEO Success Stories"
                type="purple"
                delay={0.2}
              />
              <MediaReel 
                title="Customer Testimonials"
                type="blue"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Statistics */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, value: "99.9%", label: "Uptime Guarantee", type: "blue" },
              { icon: Users, value: "10,000+", label: "Happy Clients", type: "purple" },
              { icon: Globe, value: "50,000+", label: "Domains Registered", type: "blue" },
              { icon: CreditCard, value: "24/7", label: "Customer Support", type: "purple" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neo-glass rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: stat.type === 'blue' 
                    ? '0 0 25px rgba(0, 212, 255, 0.7)' 
                    : '0 0 25px rgba(123, 104, 238, 0.7)'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    stat.type === 'blue' 
                      ? 'bg-neo-blue/20 text-neo-blue' 
                      : 'bg-neo-purple/20 text-neo-purple'
                  }`}>
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>
                  {stat.value}
                </div>
                <div className="text-neo-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <HolographicScreen>
              <div className="p-8 md:p-12 text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neo-blue to-neo-purple bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Launch Your Digital Presence?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-neo-white/90 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join thousands of satisfied clients who trust NeonDigital for their online success
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.button 
                    className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-neo-blue to-neo-purple shadow-neo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Now
                  </motion.button>
                  
                  <motion.button 
                    className="px-6 py-3 rounded-md font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Demo
                  </motion.button>
                </motion.div>
              </div>
            </HolographicScreen>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neo-blue to-neo-purple flex items-center justify-center">
                  <span className="text-neo-white font-bold text-xs">ND</span>
                </div>
                <span className="font-bold text-glow">NeonDigital</span>
              </div>
              <p className="text-neo-white/70 text-sm">
                Premium domain registration and hosting services for businesses of all sizes.
              </p>
            </div>
            
            {[
              {
                title: "Services",
                links: ["Domain Registration", "Web Hosting", "SSL Certificates", "SEO Services", "Social Media"]
              },
              {
                title: "Company",
                links: ["About Us", "Contact", "Careers", "Blog", "Terms of Service"]
              },
              {
                title: "Support",
                links: ["Help Center", "Ticket System", "Knowledge Base", "System Status", "Contact Support"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4 text-glow">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-neo-white/70 hover:text-neo-white hover:text-glow transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neo-white/50 text-sm mb-4 md:mb-0">
              © 2025 NeonDigital. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "LinkedIn", "Instagram"].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-neo-white/50 hover:text-neo-blue transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Live Chat Widget */}
      <ChatWidget />
      
      {/* Enhanced Floating Icons with tooltips */}
      <div className="fixed left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-6">
          <FloatingIcon 
            icon={Cpu} 
            delay={0.2} 
            tooltip="Advanced Technology"
            tooltipDescription="Powered by cutting-edge technology for optimal performance"
          />
          <FloatingIcon 
            icon={BarChart} 
            type="purple" 
            delay={0.4} 
            tooltip="Real-time Analytics"
            tooltipDescription="Monitor your website's performance with detailed analytics"
          />
          <FloatingIcon 
            icon={Timer} 
            delay={0.6} 
            tooltip="Time-saving Solutions"
            tooltipDescription="Our optimized workflows save you valuable time"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
