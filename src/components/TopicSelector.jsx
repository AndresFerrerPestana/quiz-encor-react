export default function TopicSelector({ onSelect, language }) {
  const temas = {
    routing: "Roteamento",
    switching: "Comutação",
    wireless: "Wireless",
    security: "Segurança",
    automation: "Automação",
    architecture: "Arquitetura",
    virtualization: "Virtualização",
    connectivity: "Conectividade IP",
    infrastructure: "Infraestrutura",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-6">
          {language === "pt" ? "Escolhe o tema" : "Choose a topic"}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(temas).map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-white border border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-shadow shadow-sm hover:shadow-md capitalize"
              onClick={() => onSelect(topic)}
            >
              {language === "pt" ? temas[topic] : topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
