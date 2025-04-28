
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const MapView = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-travel-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Εξερευνήστε τον Κόσμο</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Περιηγηθείτε στον χάρτη και ανακαλύψτε προορισμούς, αξιοθέατα και χρήσιμες πληροφορίες.
            </p>
          </div>
        </div>
        
        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row h-[calc(100vh-300px)]">
                {/* Sidebar */}
                <div className="lg:w-1/4 border-r border-gray-200 h-full overflow-y-auto">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-display font-bold">Προορισμοί</h2>
                    <p className="text-gray-500 text-sm">Επιλέξτε μια περιοχή στον χάρτη</p>
                  </div>
                  
                  <div className="p-4">
                    <ul className="space-y-2">
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Ευρώπη
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Ασία
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Βόρεια Αμερική
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Νότια Αμερική
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Αφρική
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Ωκεανία
                        </Button>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-medium mb-2">Δημοφιλείς Προορισμοί</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 text-travel-blue mr-2" />
                          <span className="link-hover">Τόκυο, Ιαπωνία</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 text-travel-blue mr-2" />
                          <span className="link-hover">Ρώμη, Ιταλία</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 text-travel-blue mr-2" />
                          <span className="link-hover">Σαντορίνη, Ελλάδα</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 text-travel-blue mr-2" />
                          <span className="link-hover">Νέα Υόρκη, ΗΠΑ</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="lg:w-3/4 h-full">
                  <div className="relative h-full bg-blue-50">
                    {/* This is a placeholder for the map - in a real app you would integrate with a map API */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-travel-blue mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-700">Διαδραστικός Χάρτης</h3>
                        <p className="text-gray-500 mt-2 max-w-md mx-auto">
                          Σε ένα πραγματικό περιβάλλον, εδώ θα εμφανιζόταν ένας διαδραστικός χάρτης με σημεία ενδιαφέροντος από όλο τον κόσμο.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Legend and info */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Υπόμνημα</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-travel-blue mr-2"></div>
                        <span>Δημοφιλή Αξιοθέατα</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-travel-coral mr-2"></div>
                        <span>Ξενοδοχεία</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-travel-teal mr-2"></div>
                        <span>Εστιατόρια</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-travel-forest mr-2"></div>
                        <span>Πάρκα & Φύση</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 flex space-x-3">
                    <Button variant="outline" size="sm">Βοήθεια</Button>
                    <Button size="sm">Προβολή Λίστας</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MapView;
