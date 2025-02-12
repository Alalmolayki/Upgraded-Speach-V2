import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ApplicationPage from './pages/ApplicationPage';
import Contact from './pages/Contact';
import Announcements from './pages/Announcements';
import Thanks from './pages/Thanks';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'application':
        return <ApplicationPage />;
      case 'contact':
        return <Contact />;
      case 'announcements':
        return <Announcements />;
      case 'thanks':
        return <Thanks />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;