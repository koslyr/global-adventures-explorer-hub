
import React from 'react';
import DestinationCard from './DestinationCard';
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 'tokyo',
    name: 'Τόκυο',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
    country: 'Ιαπωνία',
    description: 'Μια πόλη που συνδυάζει αρμονικά το παραδοσιακό με το φουτουριστικό, προσφέροντας μοναδικές εμπειρίες και γεύσεις.'
  },
  {
    id: 'rome',
    name: 'Ρώμη',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80',
    country: 'Ιταλία',
    description: 'Η αιώνια πόλη με τα επιβλητικά μνημεία και την πλούσια ιστορία που σας μεταφέρει στο παρελθόν.'
  },
  {
    id: 'santorini',
    name: 'Σαντορίνη',
    image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80',
    country: 'Ελλάδα',
    description: 'Ένας παραδεισένιος προορισμός με λευκά σπίτια, γαλάζιες εκκλησίες και μαγευτικά ηλιοβασιλέματα.'
  },
  {
    id: 'bangkok',
    name: 'Μπανγκόκ',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80',
    country: 'Ταϊλάνδη',
    description: 'Μια πολύβουη μητρόπολη με έντονα χρώματα, μοναδικές γεύσεις και εντυπωσιακούς ναούς.'
  },
  {
    id: 'barcelona',
    name: 'Βαρκελώνη',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'Ισπανία',
    description: 'Μια πόλη γεμάτη τέχνη, αρχιτεκτονική, εξαιρετικό φαγητό και ζωντανή νυχτερινή ζωή.'
  },
  {
    id: 'new-york',
    name: 'Νέα Υόρκη',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'ΗΠΑ',
    description: 'Η πόλη που δεν κοιμάται ποτέ, με τους εμβληματικούς ουρανοξύστες και την πολυπολιτισμική ατμόσφαιρα.'
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Δημοφιλείς Προορισμοί</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ανακαλύψτε μερικούς από τους πιο εντυπωσιακούς προορισμούς παγκοσμίως και εμπνευστείτε για το επόμενο ταξίδι σας.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              image={destination.image}
              country={destination.country}
              description={destination.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="font-medium">
            <a href="/destinations">Εξερευνήστε όλους τους προορισμούς</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
