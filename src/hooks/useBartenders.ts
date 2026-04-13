import { useState, useMemo } from 'react';
import { bartenders } from '../data/bartenders';
import type { FilterState } from '../types';

export function useBartenders() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: 'all',
    specialty: 'all',
  });

  const filtered = useMemo(() => {
    return bartenders.filter((b) => {
      const matchesSearch =
        !filters.search ||
        b.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesLocation =
        filters.location === 'all' || b.location === filters.location;
      const matchesSpecialty =
        filters.specialty === 'all' || b.specialty === filters.specialty;
      return matchesSearch && matchesLocation && matchesSpecialty;
    });
  }, [filters]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ search: '', location: 'all', specialty: 'all' });
  };

  return { filters, filtered, updateFilter, clearFilters };
}
