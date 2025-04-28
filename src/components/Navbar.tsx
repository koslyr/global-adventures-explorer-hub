
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-travel-blue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-xl font-display font-bold">Ταξίδια</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-travel-blue transition-colors">Αρχική</Link>
          <Link to="/destinations" className="font-medium text-gray-700 hover:text-travel-blue transition-colors">Προορισμοί</Link>
          <Link to="/guides" className="font-medium text-gray-700 hover:text-travel-blue transition-colors">Οδηγοί</Link>
          <Link to="/map" className="font-medium text-gray-700 hover:text-travel-blue transition-colors">Χάρτης</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex">Σύνδεση</Button>
          <Button className="hidden md:flex">Εγγραφή</Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" 
                  className="font-medium text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
              Αρχική
            </Link>
            <Link to="/destinations" 
                  className="font-medium text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
              Προορισμοί
            </Link>
            <Link to="/guides" 
                  className="font-medium text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
              Οδηγοί
            </Link>
            <Link to="/map" 
                  className="font-medium text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
              Χάρτης
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline">Σύνδεση</Button>
              <Button>Εγγραφή</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
