import type { Bartender } from '../types';

export const bartenders: Bartender[] = [
  {
    id: 1,
    name: 'Juliana Silva',
    location: 'Porto Alegre',
    specialty: 'Mixologia Molecular',
    availability: 'Flexível',
    description:
      'Possui técnicas e ingredientes inovadores para criar coquetéis únicos. Especialista em espumas, esferificações e apresentações surpreendentes que encantam qualquer evento.',
    contact: '(51) 99521-3215',
    rating: 4.9,
    experience: '8 anos',
    image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Gabriela Soares',
    location: 'Porto Alegre',
    specialty: 'Coquetéis Clássicos',
    availability: 'Finais de Semana',
    description:
      'Amplo conhecimento e habilidade em preparar bebidas tradicionais com perfeição. Especialista em Old Fashioned, Negroni, Martini e outros clássicos atemporais.',
    contact: '(51) 99741-3518',
    rating: 4.8,
    experience: '6 anos',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Caio Ribeiro',
    location: 'Canoas',
    specialty: 'Coquetelaria Autoral',
    availability: 'Flexível',
    description:
      'Cria coquetéis exclusivos e personalizados para cada evento. Combina ingredientes locais e sazonais para experiências gustativas memoráveis.',
    contact: '(51) 98555-4215',
    rating: 4.7,
    experience: '5 anos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Eduardo Alves',
    location: 'Novo Hamburgo',
    specialty: 'Coquetéis Tropicais',
    availability: 'Finais de Semana',
    description:
      'Especialista em coquetéis tropicais e drinks refrescantes. Transforma qualquer evento em uma experiência praiana com sabores exóticos e frutas frescas.',
    contact: '(51) 99321-8524',
    rating: 4.6,
    experience: '4 anos',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Marina Costa',
    location: 'São Leopoldo',
    specialty: 'Coquetelaria Clássica',
    availability: 'Flexível',
    description:
      'Profissional dedicada com domínio técnico impecável. Oferece um serviço elegante e sofisticado, ideal para eventos corporativos e casamentos.',
    contact: '(51) 99887-6543',
    rating: 4.9,
    experience: '10 anos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 6,
    name: 'Rafael Mendes',
    location: 'Esteio',
    specialty: 'Mixologia Molecular',
    availability: 'Sob Consulta',
    description:
      'Combina ciência e arte na coquetelaria. Cria experiências sensoriais únicas usando técnicas de vanguarda e ingredientes surpreendentes.',
    contact: '(51) 99234-1122',
    rating: 4.8,
    experience: '7 anos',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 7,
    name: 'Camila Ferreira',
    location: 'Nova Santa Rita',
    specialty: 'Coquetéis Tropicais',
    availability: 'Flexível',
    description:
      'Apaixonada por sabores tropicais e drinks autorais. Traz energia e criatividade para festas, casamentos e eventos corporativos.',
    contact: '(51) 99456-7890',
    rating: 4.5,
    experience: '3 anos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 8,
    name: 'Lucas Oliveira',
    location: 'Porto Alegre',
    specialty: 'Coquetelaria Autoral',
    availability: 'Flexível',
    description:
      'Bartender premiado com foco em drinks autorais inspirados na cultura gaúcha. Utiliza ervas e frutas nativas para criar combinações exclusivas.',
    contact: '(51) 99112-3344',
    rating: 4.9,
    experience: '9 anos',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
];

export const locations = [
  'Canoas',
  'Porto Alegre',
  'São Leopoldo',
  'Novo Hamburgo',
  'Esteio',
  'Nova Santa Rita',
];

export const specialties = [
  'Coquetéis Clássicos',
  'Coquetéis Tropicais',
  'Mixologia Molecular',
  'Coquetelaria Autoral',
  'Coquetelaria Clássica',
];
