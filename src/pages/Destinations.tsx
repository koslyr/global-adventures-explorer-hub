
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Mock data
const allDestinations = [
  {
    id: 'tokyo',
    name: 'Τόκυο',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
    country: 'Ιαπωνία',
    description: 'Μια πόλη που συνδυάζει αρμονικά το παραδοσιακό με το φουτουριστικό, προσφέροντας μοναδικές εμπειρίες και γεύσεις.',
    continent: 'asia'
  },
  {
    id: 'rome',
    name: 'Ρώμη',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80',
    country: 'Ιταλία',
    description: 'Η αιώνια πόλη με τα επιβλητικά μνημεία και την πλούσια ιστορία που σας μεταφέρει στο παρελθόν.',
    continent: 'europe'
  },
  {
    id: 'santorini',
    name: 'Σαντορίνη',
    image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80',
    country: 'Ελλάδα',
    description: 'Ένας παραδεισένιος προορισμός με λευκά σπίτια, γαλάζιες εκκλησίες και μαγευτικά ηλιοβασιλέματα.',
    continent: 'europe'
  },
  {
    id: 'bangkok',
    name: 'Μπανγκόκ',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80',
    country: 'Ταϊλάνδη',
    description: 'Μια πολύβουη μητρόπολη με έντονα χρώματα, μοναδικές γεύσεις και εντυπωσιακούς ναούς.',
    continent: 'asia'
  },
  {
    id: 'barcelona',
    name: 'Βαρκελώνη',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'Ισπανία',
    description: 'Μια πόλη γεμάτη τέχνη, αρχιτεκτονική, εξαιρετικό φαγητό και ζωντανή νυχτερινή ζωή.',
    continent: 'europe'
  },
  {
    id: 'new-york',
    name: 'Νέα Υόρκη',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'ΗΠΑ',
    description: 'Η πόλη που δεν κοιμάται ποτέ, με τους εμβληματικούς ουρανοξύστες και την πολυπολιτισμική ατμόσφαιρα.',
    continent: 'north-america'
  },
  {
    id: 'sydney',
    name: 'Σίδνεϊ',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'Αυστραλία',
    description: 'Μια ζωντανή, κοσμοπολίτικη πόλη με την εμβληματική Όπερα και υπέροχες παραλίες.',
    continent: 'australia'
  },
  {
    id: 'cairo',
    name: 'Κάιρο',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'Αίγυπτος',
    description: 'Η πόλη των χιλίων μιναρέδων με τις πυραμίδες της Γκίζας και το αρχαίο ιστορικό μουσείο.',
    continent: 'africa'
  },
  {
    id: 'rio',
    name: 'Ρίο ντε Τζανέιρο',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    country: 'Βραζιλία',
    description: 'Πόλη με υπέροχες παραλίες, το άγαλμα του Χριστού Λυτρωτή και ζωντανή καρναβαλική ατμόσφαιρα.',
    continent: 'south-america'
  }
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');
  
  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = selectedContinent === 'all' || destination.continent === selectedContinent;
    
    return matchesSearch && matchesContinent;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-travel-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Προορισμοί</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Ανακαλύψτε μοναδικούς προορισμούς από όλο τον κόσμο και σχεδιάστε το επόμενο ταξίδι σας.
            </p>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white shadow-md py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="w-full lg:w-auto flex flex-wrap gap-2">
                <Button 
                  variant={selectedContinent === 'all' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('all')}
                >
                  Όλοι
                </Button>
                <Button 
                  variant={selectedContinent === 'europe' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('europe')}
                >
                  Ευρώπη
                </Button>
                <Button 
                  variant={selectedContinent === 'asia' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('asia')}
                >
                  Ασία
                </Button>
                <Button 
                  variant={selectedContinent === 'north-america' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('north-america')}
                >
                  Β. Αμερική
                </Button>
                <Button 
                  variant={selectedContinent === 'south-america' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('south-america')}
                >
                  Ν. Αμερική
                </Button>
                <Button 
                  variant={selectedContinent === 'africa' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('africa')}
                >
                  Αφρική
                </Button>
                <Button 
                  variant={selectedContinent === 'australia' ? 'default' : 'outline'} 
                  onClick={() => setSelectedContinent('australia')}
                >
                  Ωκεανία
                </Button>
              </div>
              
              <div className="w-full lg:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Αναζήτηση προορισμού..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Destinations Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    id={destination.id}
                    name={destination.name}
                    image={destination.image}
                    country={destination.country}
                    description={destination.description}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-bold mb-2">Δεν βρέθηκαν προορισμοί</h3>
                  <p className="text-gray-500">
                    Δοκιμάστε διαφορετικά κριτήρια αναζήτησης
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
