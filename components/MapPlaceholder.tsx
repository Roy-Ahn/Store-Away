
import React, { useState } from 'react';
import { Listing } from '../types';
import { LocationPinIcon } from './icons/Icons';
import { Rating } from './Rating';

interface MapPlaceholderProps {
  listings: Listing[];
}

const MapPin: React.FC<{ listing: Listing; onSelect: (listing: Listing) => void; isSelected: boolean }> = ({ listing, onSelect, isSelected }) => (
    <button
      style={{ top: listing.position.top, left: listing.position.left }}
      className="absolute transform -translate-x-1/2 -translate-y-full focus:outline-none"
      onClick={() => onSelect(listing)}
    >
      <LocationPinIcon className={`w-10 h-10 drop-shadow-lg transition-all duration-300 ${isSelected ? 'text-brand-blue-light scale-125' : 'text-brand-blue'}`} />
    </button>
);

const InfoWindow: React.FC<{ listing: Listing; onClose: () => void }> = ({ listing, onClose }) => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl w-80 z-20 overflow-hidden animate-fade-in">
    <div className="relative">
      <img src={listing.imageUrl} alt={listing.title} className="w-full h-32 object-cover" />
       <button onClick={onClose} className="absolute top-2 right-2 bg-white/70 rounded-full p-1 text-gray-700 hover:bg-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
       </button>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg text-brand-gray-900">{listing.title}</h3>
      <p className="text-sm text-brand-gray-500 mb-2">{listing.address}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-brand-blue text-lg">${listing.pricePerMonth}/mo</span>
        <Rating rating={listing.seller.rating} reviewCount={listing.seller.reviewCount} />
      </div>
    </div>
  </div>
);

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ listings }) => {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <div className="relative h-[75vh] w-full bg-brand-gray-200 rounded-lg shadow-inner overflow-hidden border-4 border-white">
      {/* Fake map background using gradients */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('https://www.maptiler.com/img/maps/streets-v2.png')` }}
        >
      </div>
      <div className="absolute inset-0 bg-blue-100 opacity-20"></div>

      {listings.map((listing) => (
        <MapPin 
          key={listing.id} 
          listing={listing}
          onSelect={setSelectedListing}
          isSelected={selectedListing?.id === listing.id}
        />
      ))}

      {selectedListing && <InfoWindow listing={selectedListing} onClose={() => setSelectedListing(null)} />}
    </div>
  );
};
   