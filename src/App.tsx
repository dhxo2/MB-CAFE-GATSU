/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-zinc-950 border-t border-zinc-800 py-6 px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between shrink-0">
        <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MB CAFE. DESIGNED BY INTERNATIONAL STUDIO.
        </p>
        <div className="flex items-center gap-4 text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> SYSTEM ONLINE</span>
          <span>PRIVACY POLICY</span>
        </div>
      </footer>
    </div>
  );
}
