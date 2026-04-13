import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wine } from 'lucide-react';
import { AboutModal } from './AboutModal';
import { ContactModal } from './ContactModal';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Wine className="w-7 h-7 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Bartender's Choice
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#bartenders"
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                Bartenders
              </a>
              <button
                onClick={() => setAboutOpen(true)}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium cursor-pointer"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium cursor-pointer"
              >
                Contato
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <a
                  href="#bartenders"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
                >
                  Bartenders
                </a>
                <button
                  onClick={() => {
                    setAboutOpen(true);
                    setMobileOpen(false);
                  }}
                  className="text-left text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  Sobre Nós
                </button>
                <button
                  onClick={() => {
                    setContactOpen(true);
                    setMobileOpen(false);
                  }}
                  className="text-left text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  Contato
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
