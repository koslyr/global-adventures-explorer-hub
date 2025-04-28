
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const blogs = [
  {
    id: 1,
    title: 'Τα 10 καλύτερα street food της Μπανγκόκ',
    excerpt: 'Ανακαλύψτε τις αυθεντικές γεύσεις της Ταϊλανδέζικης κουζίνας από τα καλύτερα street food της Μπανγκόκ.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    author: 'Μαρία Παπαδοπούλου',
    date: '10 Απριλίου 2023',
    category: 'Γαστρονομία'
  },
  {
    id: 2,
    title: 'Οδηγός επιβίωσης για το πρώτο σας ταξίδι στην Ιαπωνία',
    excerpt: 'Πρακτικές συμβουλές και πληροφορίες για να κάνετε το πρώτο σας ταξίδι στην Ιαπωνία αξέχαστο.',
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    author: 'Γιώργος Αντωνίου',
    date: '25 Μαρτίου 2023',
    category: 'Ταξιδιωτικός Οδηγός'
  },
  {
    id: 3,
    title: 'Πώς να ταξιδέψετε με μικρό προϋπολογισμό στην Ευρώπη',
    excerpt: 'Έξυπνες συμβουλές για να εξοικονομήσετε χρήματα στα ταξίδια σας στην Ευρώπη χωρίς να χάσετε τις σημαντικές εμπειρίες.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    author: 'Ελένη Δημητρίου',
    date: '5 Μαρτίου 2023',
    category: 'Budget Travel'
  }
];

const FeaturedBlogs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ταξιδιωτικοί Οδηγοί & Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Διαβάστε τα τελευταία άρθρα με ταξιδιωτικές συμβουλές, προτάσεις και εμπειρίες από όλο τον κόσμο.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-travel-blue text-white text-xs font-medium px-2 py-1 rounded">
                    {blog.category}
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <Link to={`/blog/${blog.id}`} className="block">
                  <h3 className="font-display font-bold text-xl mb-2 hover:text-travel-blue transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{blog.author}</span>
                  <span className="text-gray-500">{blog.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="font-medium">
            <a href="/blog">Διαβάστε περισσότερα άρθρα</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
