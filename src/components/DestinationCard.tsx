
import React from 'react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  country: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  country,
  description
}) => {
  return (
    <Link to={`/destinations/${id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-display text-xl font-medium">{name}</h3>
            <p className="text-sm opacity-90">{country}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-travel-blue font-medium text-sm">Διαβάστε περισσότερα</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-travel-blue transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
