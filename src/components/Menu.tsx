import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <section id="menu" className="py-24 bg-zinc-950 text-[#E0E0E0] relative border-y border-zinc-800">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-amber-500 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 uppercase text-xs tracking-widest mb-4 border-b border-zinc-800 pb-2"
          >
            Explore Our Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-zinc-400 max-w-sm leading-relaxed"
          >
            From rich crafted coffees to hearty Western and Asian dishes. There's something special for every craving.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar justify-start border-b border-zinc-900 gap-6">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pb-2 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 border-b-2 -mb-[18px] ${
                activeCategory === cat.id 
                  ? 'border-amber-500 text-amber-500' 
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {MENU_CATEGORIES.find(c => c.id === activeCategory)?.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group border-b border-zinc-800 pb-4">
                  <div className="flex-1 pr-4">
                    <h4 className="text-sm font-medium text-[#E0E0E0] group-hover:text-amber-500 transition-colors uppercase tracking-wider">{item.name}</h4>
                    {item.desc && (
                      <p className="text-[10px] text-zinc-500 mt-1 italic">{item.desc}</p>
                    )}
                  </div>
                  <span className="text-amber-500 text-sm whitespace-nowrap">Rp {item.price}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
