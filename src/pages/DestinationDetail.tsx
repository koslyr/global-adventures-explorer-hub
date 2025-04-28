
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationHeader from '@/components/DestinationHeader';
import DestinationInfo from '@/components/DestinationInfo';
import AttractionCard from '@/components/AttractionCard';
import { Button } from '@/components/ui/button';

// Mock data for destination
const destinations = {
  'tokyo': {
    name: 'Τόκυο',
    country: 'Ιαπωνία',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
    description: 'Μια πόλη που συνδυάζει αρμονικά το παραδοσιακό με το φουτουριστικό, προσφέροντας μοναδικές εμπειρίες και γεύσεις.',
    language: 'Ιαπωνικά',
    currency: 'Γιεν (JPY)',
    timezone: 'GMT+9',
    bestTime: 'Μάρτιος-Μάιος',
    attractions: [
      {
        name: 'Ναός Σενσό-τζι',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
        description: 'Ο αρχαιότερος βουδιστικός ναός του Τόκυο με εντυπωσιακή αρχιτεκτονική και ιστορική σημασία.',
        location: 'Asakusa, Τόκυο',
        price: '¥500',
        duration: '1-2 ώρες'
      },
      {
        name: 'Πύργος του Τόκυο',
        image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80',
        description: 'Εμβληματικός πύργος επικοινωνιών με εκπληκτική θέα στην πόλη.',
        location: 'Minato, Τόκυο',
        price: '¥1,200',
        duration: '1-2 ώρες'
      },
      {
        name: 'Shibuya Crossing',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        description: 'Η διασημότερη διάβαση πεζών στον κόσμο, όπου χιλιάδες άνθρωποι διασταυρώνονται κάθε μέρα.',
        location: 'Shibuya, Τόκυο',
        price: 'Δωρεάν',
        duration: '30 λεπτά'
      }
    ]
  },
  'rome': {
    name: 'Ρώμη',
    country: 'Ιταλία',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80',
    description: 'Η αιώνια πόλη με τα επιβλητικά μνημεία και την πλούσια ιστορία που σας μεταφέρει στο παρελθόν.',
    language: 'Ιταλικά',
    currency: 'Ευρώ (€)',
    timezone: 'GMT+1',
    bestTime: 'Απρίλιος-Ιούνιος',
    attractions: [
      {
        name: 'Κολοσσαίο',
        image: 'https://images.unsplash.com/photo-1612271598100-5443d4c3c833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
        description: 'Το εμβληματικό αμφιθέατρο της Ρωμαϊκής Αυτοκρατορίας, χωρητικότητας 50.000-80.000 θεατών.',
        location: 'Κέντρο Ρώμης',
        price: '€16',
        duration: '2-3 ώρες'
      },
      {
        name: 'Φοντάνα ντι Τρέβι',
        image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        description: 'Διάσημο μπαρόκ σιντριβάνι όπου οι επισκέπτες ρίχνουν κέρματα για καλή τύχη.',
        location: 'Trevi, Ρώμη',
        price: 'Δωρεάν',
        duration: '30 λεπτά'
      },
      {
        name: 'Βατικανό',
        image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1676&q=80',
        description: 'Το μικρότερο κράτος στον κόσμο που φιλοξενεί τα Μουσεία του Βατικανού και τη Βασιλική του Αγίου Πέτρου.',
        location: 'Πόλη του Βατικανού',
        price: '€17',
        duration: '3-4 ώρες'
      }
    ]
  }
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations[id as keyof typeof destinations] || destinations['tokyo'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DestinationHeader
          name={destination.name}
          country={destination.country}
          image={destination.image}
          description={destination.description}
        />
        
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <DestinationInfo
              language={destination.language}
              currency={destination.currency}
              timezone={destination.timezone}
              bestTime={destination.bestTime}
            />
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="attractions">
              <TabsList className="mb-8">
                <TabsTrigger value="attractions">Αξιοθέατα</TabsTrigger>
                <TabsTrigger value="food">Φαγητό</TabsTrigger>
                <TabsTrigger value="accommodation">Διαμονή</TabsTrigger>
                <TabsTrigger value="transport">Μεταφορές</TabsTrigger>
                <TabsTrigger value="tips">Συμβουλές</TabsTrigger>
              </TabsList>
              
              <TabsContent value="attractions">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.attractions.map((attraction, index) => (
                    <AttractionCard
                      key={index}
                      name={attraction.name}
                      image={attraction.image}
                      description={attraction.description}
                      location={attraction.location}
                      price={attraction.price}
                      duration={attraction.duration}
                    />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline">Προβολή Περισσότερων</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="food">
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Τοπική Κουζίνα</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Πληροφορίες για την τοπική κουζίνα και τα καλύτερα εστιατόρια θα είναι διαθέσιμες σύντομα.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="accommodation">
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Επιλογές Διαμονής</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Πληροφορίες για ξενοδοχεία, Airbnb και άλλες επιλογές διαμονής θα είναι διαθέσιμες σύντομα.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="transport">
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Μεταφορές</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Πληροφορίες για τις μεταφορές στον προορισμό θα είναι διαθέσιμες σύντομα.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="tips">
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Ταξιδιωτικές Συμβουλές</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Χρήσιμες συμβουλές για τον προορισμό θα είναι διαθέσιμες σύντομα.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetail;
