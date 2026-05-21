import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 uppercase text-xs tracking-widest mb-4 border-b border-zinc-800 pb-2"
          >
            The Atmosphere
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-zinc-400 max-w-sm leading-relaxed"
          >
            Step into our spacious, relaxing environment. From woven rattan lighting to plush seating, every detail is designed for comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`overflow-hidden group relative bg-zinc-900 ${
                idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] w-full relative">
                <div className="absolute inset-0 bg-amber-500/10 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-[12px] border-zinc-950 z-20 pointer-events-none"></div>
                <img 
                  src={img} 
                  alt="MB Cafe Atmosphere" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
