import { motion } from 'motion/react';
import { CAFE_INFO, HERO_IMAGE } from '../data';
import { Coffee, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-zinc-950/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <img 
          src={HERO_IMAGE} 
          alt="Cafe Interior" 
          className="w-full h-full object-cover object-center grayscale-[20%]" 
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8"
        >
            <div className="w-16 h-16 border border-amber-500 flex items-center justify-center text-amber-500 rotate-45 mx-auto hover:bg-amber-500/10 transition-colors cursor-default">
              <Coffee className="w-8 h-8 -rotate-45" strokeWidth={1} />
            </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-4 italic text-white drop-shadow-lg"
        >
          Elegance in <br/><span className="text-amber-500 not-italic tracking-tight">Every Sip.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto mb-10 pb-6 border-b border-zinc-800"
        >
          A sanctuary for coffee enthusiasts and culinary dreamers. Located in the heart of Gatsu, delivering a world-class cafe experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 border border-amber-500 text-amber-500 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-amber-500 hover:text-zinc-950 transition-colors text-center">
            View Menu
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-zinc-300 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-amber-500 transition-colors flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Find Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="text-xs text-zinc-400 uppercase tracking-widest">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
      </motion.div>
    </section>
  );
}
