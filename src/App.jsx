import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/navbar/NavBar';
import Hero from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen max-w-[100vw]">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
