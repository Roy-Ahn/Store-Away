
import React from 'react';
import { Listing } from '../types';
import { ListingCard } from './ListingCard';

interface ListingGridProps {
  listings: Listing[];
}

export const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
   