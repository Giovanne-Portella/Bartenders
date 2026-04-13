import { Search, SlidersHorizontal, X } from 'lucide-react';
import { locations, specialties } from '../data/bartenders';
import type { FilterState } from '../types';

interface Props {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClear: () => void;
  resultCount: number;
}

export function SearchFilters({ filters, onFilterChange, onClear, resultCount }: Props) {
  const hasActiveFilters =
    filters.search !== '' ||
    filters.location !== 'all' ||
    filters.specialty !== 'all';

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-amber-400" />
        <h3 className="text-white font-semibold">Filtros de Busca</h3>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="ml-auto flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
            Limpar
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
          />
        </div>

        {/* Location select */}
        <select
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
        >
          <option value="all" className="bg-slate-900">Todas as Localidades</option>
          {locations.map((loc) => (
            <option key={loc} value={loc} className="bg-slate-900">
              {loc}
            </option>
          ))}
        </select>

        {/* Specialty select */}
        <select
          value={filters.specialty}
          onChange={(e) => onFilterChange('specialty', e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
        >
          <option value="all" className="bg-slate-900">Todas as Especialidades</option>
          {specialties.map((spec) => (
            <option key={spec} value={spec} className="bg-slate-900">
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-slate-400">
        {resultCount} bartender{resultCount !== 1 ? 's' : ''} encontrado{resultCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
