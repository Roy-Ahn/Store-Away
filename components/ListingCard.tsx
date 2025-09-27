
import React from 'react';
import { Listing, AmenityType } from '../types';
import { Rating } from './Rating';
import { AmenityTag } from './AmenityTag';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={listing.imageUrl} alt={listing.title} />
        <div className="absolute top-0 right-0 bg-brand-blue text-white py-1 px-3 m-2 rounded-full text-sm font-bold">
          ${listing.pricePerMonth}/mo
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-gray-900 mb-2">{listing.title}</h3>
        <p className="text-sm text-brand-gray-500 mb-4">{listing.address}</p>
        
        <div className="flex items-center mb-4">
          <Rating rating={listing.seller.rating} reviewCount={listing.seller.reviewCount} />
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-brand-gray-700 mb-2 text-sm">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {listing.amenities.map(amenity => (
              <AmenityTag key={amenity} amenity={amenity} />
            ))}
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-brand-gray-200">
           <button className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
             View Details
           </button>
        </div>
      </div>
    </div>
  );
};
   