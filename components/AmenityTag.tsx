
import React from 'react';
import { AmenityType } from '../types';
import { HomeIcon, SunIcon, ThermometerIcon, ShieldCheckIcon } from './icons/Icons';

interface AmenityTagProps {
  amenity: AmenityType;
}

const amenityConfig = {
    [AmenityType.Indoor]: { icon: HomeIcon, color: 'text-blue-700 bg-blue-100' },
    [AmenityType.Outdoor]: { icon: SunIcon, color: 'text-yellow-700 bg-yellow-100' },
    [AmenityType.ClimateControlled]: { icon: ThermometerIcon, color: 'text-green-700 bg-green-100' },
    [AmenityType.Secure]: { icon: ShieldCheckIcon, color: 'text-indigo-700 bg-indigo-100' },
};


export const AmenityTag: React.FC<AmenityTagProps> = ({ amenity }) => {
    const config = amenityConfig[amenity];
    const Icon = config.icon;
    
    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.color}`}>
            <Icon className="w-4 h-4 mr-1.5" />
            {amenity}
        </span>
    );
}
   