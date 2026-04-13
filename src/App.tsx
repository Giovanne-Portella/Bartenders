import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BartenderList } from './components/BartenderList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-[Inter,system-ui,sans-serif]">
      <Header />
      <main>
        <Hero />
        <BartenderList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
