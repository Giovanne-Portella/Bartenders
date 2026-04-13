import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function AboutModal({ open, onClose }: Props) {
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

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Quem Somos</h2>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-amber-300">Bartender's Choice</strong> é a
                plataforma líder em conectar pessoas a bartenders qualificados
                na região metropolitana de Porto Alegre.
              </p>
              <p>
                Nascemos da necessidade de preencher a lacuna entre a demanda e a
                oferta de bartenders qualificados, fornecendo uma solução
                eficiente e moderna para quem busca profissionais de excelência.
              </p>
              <p>
                Cada bartender em nossa plataforma passa por uma curadoria
                cuidadosa, garantindo perfis com informações detalhadas,
                avaliações reais e experiência comprovada.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
