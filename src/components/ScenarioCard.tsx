import { Link } from 'react-router-dom';

export function ScenarioCard({ title, img, description, to }: any) {
  return (
    <Link to={to} className="bg-fluency-teal rounded-2xl p-6 shadow-lg flex flex-col items-center transition hover:scale-105">
      <img src={img} className="w-16 h-16 mb-3" alt={title}/>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-fluency-light text-center">{description}</p>
    </Link>
  );
}