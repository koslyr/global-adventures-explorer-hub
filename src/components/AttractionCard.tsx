
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface AttractionCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
  price?: string;
  duration?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  image,
  description,
  location,
  price,
  duration
}) => {
  return (
    <Card className="overflow-hidden h-full bg-white hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {price && (
          <div className="absolute top-4 right-4 bg-white text-travel-blue text-xs font-medium px-2 py-1 rounded shadow">
            {price}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{name}</h3>
        <div className="flex items-center text-gray-500 mb-3 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          {duration && (
            <span className="text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {duration}
            </span>
          )}
          <Button variant="outline" size="sm" className="ml-auto">Περισσότερα</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttractionCard;
