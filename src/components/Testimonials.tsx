import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-zinc-800 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-500 uppercase text-xs tracking-widest mb-4">What Our Guests Say</h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Don't just take our word for it. Here's what our wonderful customers have to say about their experience at MB Cafe.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-zinc-900 p-4 border border-zinc-800"
          >
            <div className="text-4xl font-bold text-amber-500">{CAFE_INFO.rating}</div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(CAFE_INFO.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <div className="text-sm text-zinc-400">Based on {CAFE_INFO.reviewCount} reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0A0A0A] p-8 flex flex-col justify-center"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              
              <blockquote className="font-serif text-lg leading-relaxed mb-6 italic text-zinc-300 flex-grow">
                "{review.text}"
              </blockquote>
              
              <div className="pt-4 border-t border-zinc-800">
                <cite className="text-[10px] uppercase tracking-widest text-amber-500 not-italic block mb-1">
                  — {review.name}
                </cite>
                <div className="text-[9px] uppercase text-zinc-500 tracking-wider">
                  {review.date} {review.badge ? `• ${review.badge}` : ''}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
