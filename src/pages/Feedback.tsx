export default function Feedback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-fluency-green">¡Excelente!</h1>
      <p className="mb-4">Here's your feedback (feature coming soon):</p>
      <ul className="list-disc text-left">
        <li>Pronunciation Spotlight</li>
        <li>Grammar & Nuance Correction</li>
        <li>Vocabulary Builder</li>
        <li>Cultural Note</li>
      </ul>
      <div className="mt-8 flex gap-4">
        <button className="bg-fluency-teal text-fluency-light px-6 py-2 rounded-full font-bold">Try Again</button>
        <button className="bg-fluency-coral text-fluency-dark px-6 py-2 rounded-full font-bold">Return Home</button>
      </div>
    </div>
  );
}