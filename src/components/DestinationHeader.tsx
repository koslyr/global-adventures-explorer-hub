
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface DestinationHeaderProps {
  name: string;
  country: string;
  image: string;
  description: string;
}

const DestinationHeader: React.FC<DestinationHeaderProps> = ({
  name,
  country,
  image,
  description
}) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <div className="animate-fade-in">
          <p className="text-white/80 mb-2">{country}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">{name}</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-travel-blue hover:bg-white/90">Δείτε Αξιοθέατα</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              <Heart className="mr-2 h-4 w-4" /> Αποθήκευση
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;
