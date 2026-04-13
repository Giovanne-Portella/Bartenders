export interface Bartender {
  id: number;
  name: string;
  location: string;
  specialty: string;
  availability: string;
  description: string;
  contact: string;
  rating: number;
  experience: string;
  image: string;
}

export interface FilterState {
  search: string;
  location: string;
  specialty: string;
}
