import { ScenarioCard } from '../components/ScenarioCard';
import cafeImg from '../assets/cafe.png';
import trainImg from '../assets/train.png';
import parkImg from '../assets/park.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src="/logo.png" alt="Fluency Logo" className="w-32 mb-8"/>
      <h1 className="text-3xl font-bold mb-2">Your Learning Path</h1>
      <p className="mb-8 text-fluency-green">Choose a scenario to practice</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
        <ScenarioCard title="El Café" img={cafeImg} description="Order at a cafe with Javier." to="/conversation/cafe"/>
        <ScenarioCard title="La Estación de Tren" img={trainImg} description="Buy a train ticket from Carmen." to="/conversation/train"/>
        <ScenarioCard title="El Encuentro" img={parkImg} description="Meet Isabel in the park." to="/conversation/park"/>
      </div>
    </div>
  );
}