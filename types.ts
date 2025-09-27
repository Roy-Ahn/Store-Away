
export enum UserRole {
  Buyer = 'BUYER',
  Seller = 'SELLER',
}

export interface User {
  id: number;
  name: string;
  role: UserRole;
  avatarUrl: string;
}

export enum AmenityType {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
  ClimateControlled = 'Climate Controlled',
  Secure = '24/7 Security',
}

export interface Listing {
  id: number;
  title: string;
  address: string;
  pricePerMonth: number;
  imageUrl: string;
  seller: {
    name: string;
    rating: number;
    reviewCount: number;
  };
  amenities: AmenityType[];
  position: {
    top: string;
    left: string;
  };
}
   