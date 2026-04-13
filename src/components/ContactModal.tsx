import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-slate-900 border border-white/10 rounded-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Contato</h2>

            <div className="space-y-5">
              <a
                href="tel:+555512345678"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Telefone</p>
                  <p className="text-white font-medium group-hover:text-amber-300 transition-colors">
                    (51) 3123-4567
                  </p>
                </div>
              </a>

              <a
                href="mailto:contato@bartenderschoice.com.br"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-white font-medium group-hover:text-amber-300 transition-colors">
                    contato@bartenderschoice.com.br
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Endereço</p>
                  <p className="text-white font-medium">
                    Porto Alegre, RS — Brasil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
