
import { User, Listing, UserRole, AmenityType } from './types';

export const DEMO_USERS: { [key in UserRole]: User } = {
  [UserRole.Buyer]: {
    id: 1,
    name: 'Alex Johnson',
    role: UserRole.Buyer,
    avatarUrl: 'https://i.pravatar.cc/150?u=alexjohnson',
  },
  [UserRole.Seller]: {
    id: 2,
    name: 'Maria Garcia',
    role: UserRole.Seller,
    avatarUrl: 'https://i.pravatar.cc/150?u=mariagarcia',
  },
};

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: 'Spacious Suburban Garage',
    address: '123 Maple St, Springfield',
    pricePerMonth: 150,
    imageUrl: 'https://picsum.photos/seed/garage1/600/400',
    seller: {
      name: 'Maria Garcia',
      rating: 4.8,
      reviewCount: 32,
    },
    amenities: [AmenityType.Indoor, AmenityType.Secure],
    position: { top: '25%', left: '20%' },
  },
  {
    id: 2,
    title: 'Secure Downtown Basement',
    address: '456 Oak Ave, Metropolis',
    pricePerMonth: 220,
    imageUrl: 'https://picsum.photos/seed/basement2/600/400',
    seller: {
      name: 'John Doe',
      rating: 4.5,
      reviewCount: 15,
    },
    amenities: [AmenityType.Indoor, AmenityType.ClimateControlled],
    position: { top: '40%', left: '55%' },
  },
  {
    id: 3,
    title: 'Fenced Outdoor Parking Lot',
    address: '789 Pine Ln, Gotham',
    pricePerMonth: 75,
    imageUrl: 'https://picsum.photos/seed/parking3/600/400',
    seller: {
      name: 'Maria Garcia',
      rating: 4.9,
      reviewCount: 45,
    },
    amenities: [AmenityType.Outdoor, AmenityType.Secure],
    position: { top: '65%', left: '30%' },
  },
  {
    id: 4,
    title: 'Private Garden Shed',
    address: '101 Elm Rd, Star City',
    pricePerMonth: 90,
    imageUrl: 'https://picsum.photos/seed/shed4/600/400',
    seller: {
      name: 'Jane Smith',
      rating: 4.2,
      reviewCount: 8,
    },
    amenities: [AmenityType.Outdoor],
    position: { top: '15%', left: '70%' },
  },
  {
    id: 5,
    title: 'Climate-Controlled Attic Space',
    address: '212 Birch Blvd, Central City',
    pricePerMonth: 180,
    imageUrl: 'https://picsum.photos/seed/attic5/600/400',
    seller: {
      name: 'Maria Garcia',
      rating: 5.0,
      reviewCount: 21,
    },
    amenities: [AmenityType.Indoor, AmenityType.ClimateControlled, AmenityType.Secure],
    position: { top: '75%', left: '60%' },
  },
  {
    id: 6,
    title: 'Large Barn for Vehicles',
    address: '333 Cedar Ct, Smallville',
    pricePerMonth: 300,
    imageUrl: 'https://picsum.photos/seed/barn6/600/400',
    seller: {
      name: 'Clark Kent',
      rating: 4.7,
      reviewCount: 19,
    },
    amenities: [AmenityType.Indoor, AmenityType.Outdoor],
    position: { top: '50%', left: '80%' },
  },
];
   