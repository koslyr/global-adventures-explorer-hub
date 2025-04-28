
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Mock data for the map points
const destinations = [
  { id: 'tokyo', name: 'Τόκυο', country: 'Ιαπωνία', lat: 35.6762, lng: 139.6503 },
  { id: 'rome', name: 'Ρώμη', country: 'Ιταλία', lat: 41.9028, lng: 12.4964 },
  { id: 'santorini', name: 'Σαντορίνη', country: 'Ελλάδα', lat: 36.3932, lng: 25.4615 },
  { id: 'bangkok', name: 'Μπανγκόκ', country: 'Ταϊλάνδη', lat: 13.7563, lng: 100.5018 },
  { id: 'barcelona', name: 'Βαρκελώνη', country: 'Ισπανία', lat: 41.3851, lng: 2.1734 },
  { id: 'new-york', name: 'Νέα Υόρκη', country: 'ΗΠΑ', lat: 40.7128, lng: -74.006 },
];

// Placeholder for the map component - In a real application, this would use actual map SDK
const InteractiveMap = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Εξερευνήστε τον Κόσμο</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Περιηγηθείτε στον χάρτη για να ανακαλύψετε τους δημοφιλείς προορισμούς και να εξερευνήσετε τα αξιοθέατα, την κουλτούρα και πολλά άλλα.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4 p-4 border-r border-gray-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Προορισμοί</h3>
                <p className="text-sm text-gray-500">Επιλέξτε έναν προορισμό για να δείτε λεπτομέρειες</p>
              </div>
              <div className="space-y-2">
                {destinations.map((destination) => (
                  <Button
                    key={destination.id}
                    variant={selectedDestination === destination.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedDestination(destination.id)}
                  >
                    {destination.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="relative h-[400px] lg:h-[500px] bg-gray-100">
                {/* This is a placeholder for the map - in a real app you would integrate with a map API */}
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center border border-dashed border-gray-300">
                  <div className="text-center p-6">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-travel-blue mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">Διαδραστικός Χάρτης</h3>
                    <p className="text-gray-500 mt-2">
                      Σε ένα πραγματικό περιβάλλον, εδώ θα εμφανιζόταν ένας διαδραστικός χάρτης με σημεία ενδιαφέροντος από όλο τον κόσμο.
                    </p>
                    <div className="mt-4">
                      <Button>Εξερευνήστε όλον τον κόσμο</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
