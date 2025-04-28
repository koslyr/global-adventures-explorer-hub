
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'beach',
    title: 'Παραλίες',
    icon: '🏖️',
    description: 'Εξωτικές παραλίες και παραθαλάσσιοι προορισμοί'
  },
  {
    id: 'culture',
    title: 'Πολιτισμός',
    icon: '🏛️',
    description: 'Μουσεία, μνημεία και ιστορικά αξιοθέατα'
  },
  {
    id: 'adventure',
    title: 'Περιπέτεια',
    icon: '🧗',
    description: 'Πεζοπορία, trekking και δραστηριότητες στη φύση'
  },
  {
    id: 'gastronomy',
    title: 'Γαστρονομία',
    icon: '🍜',
    description: 'Τοπική κουζίνα και γαστρονομικές εμπειρίες'
  },
  {
    id: 'budget',
    title: 'Budget',
    icon: '💰',
    description: 'Οικονομικοί προορισμοί για κάθε προϋπολογισμό'
  },
  {
    id: 'luxury',
    title: 'Πολυτέλεια',
    icon: '✨',
    description: 'Πολυτελή ταξίδια και premium εμπειρίες'
  },
];

const TravelCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ανακαλύψτε ανά Κατηγορία</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Εξερευνήστε διαφορετικούς τύπους ταξιδιωτικών εμπειριών και βρείτε αυτό που σας ταιριάζει καλύτερα.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id} className="block">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <span className="text-4xl mb-3">{category.icon}</span>
                  <h3 className="font-display font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
