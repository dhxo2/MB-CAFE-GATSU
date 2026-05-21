import { CAFE_INFO } from '../data';
import { MapPin, Clock, Phone, Instagram, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-amber-500 uppercase text-xs tracking-widest mb-4 border-b border-zinc-800 pb-2">Find Us</h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Experience the cozy atmosphere and delicious menu at MB Cafe. Perfect for solo dining, working, or family gatherings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-zinc-800 p-8 md:p-10"
          >
            <h3 className="text-xs uppercase tracking-widest text-[#E0E0E0] mb-8 border-b border-zinc-800 pb-4">Contact & Hours</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest sm:w-1/4">Address</div>
                <div className="text-xs text-zinc-300 leading-relaxed flex-1">{CAFE_INFO.address}</div>
              </div>
              
              <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest sm:w-1/4">Hours</div>
                <div className="text-xs text-zinc-300 flex-1">{CAFE_INFO.hours}</div>
              </div>
              
              <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest sm:w-1/4">Phone</div>
                <div className="text-xs text-zinc-300 flex-1">{CAFE_INFO.phone}</div>
              </div>

              <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest sm:w-1/4">Social</div>
                <div className="text-xs text-amber-500 flex-1">{CAFE_INFO.instagram}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Dine-in & Takeaway
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Free WiFi
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Reservations
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Large Parking
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden border border-zinc-800 h-[400px] lg:h-auto min-h-[400px] relative bg-[#111]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2255743132!2d110.36376857591!3d-6.997576593003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b71446ca917%3A0xd69ef38bbb1a6d67!2sMB%20Cafe%20-%20Gatsu!5e0!3m2!1sen!2sid!4v1716300000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
              title="MB Cafe Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
