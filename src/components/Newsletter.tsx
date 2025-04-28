
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Η εγγραφή σας ήταν επιτυχής!",
        description: "Σας ευχαριστούμε για την εγγραφή σας στο newsletter μας.",
      });
      setEmail('');
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:max-w-lg">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Μείνετε ενημερωμένοι</h2>
            <p className="text-gray-300">
              Εγγραφείτε στο newsletter μας για να λαμβάνετε νέους προορισμούς, ταξιδιωτικές συμβουλές και αποκλειστικές προσφορές.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Εισάγετε το email σας"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-travel-blue hover:bg-travel-blue/90">
                Εγγραφή
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Δεν θα σας στέλνουμε spam. Διαβάστε την <a href="/privacy" className="underline hover:text-white">Πολιτική Απορρήτου</a> μας.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
