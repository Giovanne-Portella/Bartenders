import { motion } from 'framer-motion';
import { UserX } from 'lucide-react';
import { BartenderCard } from './BartenderCard';
import { SearchFilters } from './SearchFilters';
import { useBartenders } from '../hooks/useBartenders';

export function BartenderList() {
  const { filters, filtered, updateFilter, clearFilters } = useBartenders();

  return (
    <section
      id="bartenders"
      className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nossos{' '}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Bartenders
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Profissionais qualificados e apaixonados por coquetelaria,
            prontos para transformar seu evento em uma experiência inesquecível.
          </p>
        </motion.div>

        <SearchFilters
          filters={filters}
          onFilterChange={updateFilter}
          onClear={clearFilters}
          resultCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <div className="grid gap-6">
            {filtered.map((bartender, idx) => (
              <BartenderCard key={bartender.id} bartender={bartender} index={idx} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <UserX className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              Nenhum bartender encontrado
            </h3>
            <p className="text-slate-500">
              Tente ajustar os filtros de busca para encontrar o profissional ideal.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
