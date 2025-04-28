
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

// Mock data for travel guides
const guides = [
  {
    id: 1,
    title: 'Τα 10 καλύτερα street food της Μπανγκόκ',
    excerpt: 'Ανακαλύψτε τις αυθεντικές γεύσεις της Ταϊλανδέζικης κουζίνας από τα καλύτερα street food της Μπανγκόκ.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    author: 'Μαρία Παπαδοπούλου',
    date: '10 Απριλίου 2023',
    category: 'food',
    categoryLabel: 'Γαστρονομία',
    readTime: '6 λεπτά'
  },
  {
    id: 2,
    title: 'Οδηγός επιβίωσης για το πρώτο σας ταξίδι στην Ιαπωνία',
    excerpt: 'Πρακτικές συμβουλές και πληροφορίες για να κάνετε το πρώτο σας ταξίδι στην Ιαπωνία αξέχαστο.',
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    author: 'Γιώργος Αντωνίου',
    date: '25 Μαρτίου 2023',
    category: 'tips',
    categoryLabel: 'Ταξιδιωτικός Οδηγός',
    readTime: '8 λεπτά'
  },
  {
    id: 3,
    title: 'Πώς να ταξιδέψετε με μικρό προϋπολογισμό στην Ευρώπη',
    excerpt: 'Έξυπνες συμβουλές για να εξοικονομήσετε χρήματα στα ταξίδια σας στην Ευρώπη χωρίς να χάσετε τις σημαντικές εμπειρίες.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    author: 'Ελένη Δημητρίου',
    date: '5 Μαρτίου 2023',
    category: 'budget',
    categoryLabel: 'Budget Travel',
    readTime: '7 λεπτά'
  },
  {
    id: 4,
    title: 'Μια εβδομάδα στο Παρίσι - Πλήρες Itinerary',
    excerpt: 'Αναλυτικό πρόγραμμα για να δείτε τα καλύτερα του Παρισιού σε μια εβδομάδα, με συμβουλές για μουσεία, εστιατόρια και βόλτες.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    author: 'Νίκος Παπαδόπουλος',
    date: '15 Φεβρουαρίου 2023',
    category: 'itinerary',
    categoryLabel: 'Πρόγραμμα Ταξιδιού',
    readTime: '10 λεπτά'
  },
  {
    id: 5,
    title: 'Ταξιδεύοντας solo: Συμβουλές και προορισμοί',
    excerpt: 'Πώς να ταξιδέψετε μόνοι σας με ασφάλεια και άνεση, και ποιοι είναι οι καλύτεροι προορισμοί για solo travelers.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    author: 'Αναστασία Δημητρίου',
    date: '20 Ιανουαρίου 2023',
    category: 'solo',
    categoryLabel: 'Solo Travel',
    readTime: '9 λεπτά'
  },
  {
    id: 6,
    title: 'Τα καλύτερα national parks της Αμερικής',
    excerpt: 'Οδηγός για τα πιο εντυπωσιακά εθνικά πάρκα των ΗΠΑ, με προτάσεις για πεζοπορίες και δραστηριότητες στη φύση.',
    image: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    author: 'Δημήτρης Αντωνίου',
    date: '5 Ιανουαρίου 2023',
    category: 'nature',
    categoryLabel: 'Φύση',
    readTime: '12 λεπτά'
  }
];

const categories = [
  { id: 'all', label: 'Όλα' },
  { id: 'food', label: 'Γαστρονομία' },
  { id: 'tips', label: 'Ταξιδιωτικοί Οδηγοί' },
  { id: 'budget', label: 'Οικονομικά Ταξίδια' },
  { id: 'itinerary', label: 'Προγράμματα Ταξιδιών' },
  { id: 'solo', label: 'Solo Travel' },
  { id: 'nature', label: 'Φύση' }
];

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-travel-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Ταξιδιωτικοί Οδηγοί & Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Ανακαλύψτε χρήσιμες συμβουλές, εμπειρίες και προτάσεις για τα ταξίδια σας.
            </p>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white shadow-md py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="w-full lg:w-auto flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button 
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'} 
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
              
              <div className="w-full lg:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Αναζήτηση άρθρου..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Guides Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.length > 0 ? (
                filteredGuides.map((guide) => (
                  <Link to={`/guides/${guide.id}`} key={guide.id} className="block">
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-white text-travel-blue hover:bg-gray-100">
                          {guide.categoryLabel}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-display font-bold text-xl mb-2 hover:text-travel-blue transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{guide.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{guide.author}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">{guide.date}</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {guide.readTime}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-bold mb-2">Δεν βρέθηκαν άρθρα</h3>
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

export default Guides;
