import { useState } from "react";
import { useParams } from "react-router-dom";

// For demo purposes. Replace with AI & Speech hooks later!
const scenarioPersonas: any = {
  cafe: {
    name: "Javier",
    intro: "¡Hola! Bienvenido al café. ¿Qué te gustaría pedir?",
  },
  train: {
    name: "Carmen",
    intro: "Buenos días. ¿A dónde viajas hoy?",
  },
  park: {
    name: "Isabel",
    intro: "¡Hola! ¿Te gustaría sentarte aquí?",
  }
};

export default function Conversation() {
  const { scenario } = useParams();
  const [messages, setMessages] = useState([
    { from: "ai", text: scenarioPersonas[scenario || "cafe"].intro }
  ]);
  const [input, setInput] = useState("");

  // Placeholder: type in messages
  const sendMessage = () => {
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Next: Call OpenAI API here and push AI response.
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto p-6">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-4 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-xl px-4 py-2 ${msg.from === "user" ? "bg-fluency-green text-fluency-dark" : "bg-fluency-teal text-fluency-light"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex gap-2 bg-fluency-dark">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-fluency-light text-fluency-dark outline-none"
          placeholder="Speak or type your Spanish..."
        />
        <button className="px-4 py-2 rounded-lg bg-fluency-green text-fluency-dark font-bold" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}