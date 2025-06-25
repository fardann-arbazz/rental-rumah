export interface Property {
  id: number;
  title: string;
  location: string;
  address?: string;
  price: string;
  period: string;
  image: string;
  images?: string[];
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  featured: boolean;
  description?: string;
  amenities?: string[];
  availableFrom?: string;
}
