import {
  WifiIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  MapIcon,
  ArrowsRightLeftIcon,
  CloudIcon,
  SignalIcon,
  BuildingOfficeIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";

export default function TopicSelector({ onSelect, language }) {
  const temas = {
    routing: language === "pt" ? "Roteamento" : "Routing",
    switching: language === "pt" ? "Comutação" : "Switching",
    wireless: language === "pt" ? "Wireless" : "Wireless",
    security: language === "pt" ? "Segurança" : "Security",
    automation: language === "pt" ? "Automação" : "Automation",
    architecture: language === "pt" ? "Arquitetura" : "Architecture",
    virtualization: language === "pt" ? "Virtualização" : "Virtualization",
    connectivity: language === "pt" ? "Conectividade IP" : "IP Connectivity",
    infrastructure: language === "pt" ? "Infraestrutura" : "Infrastructure",
  };

  const icons = {
    routing: <MapIcon className="h-5 w-5 text-blue-600" />,
    switching: <ArrowsRightLeftIcon className="h-5 w-5 text-purple-600" />,
    wireless: <WifiIcon className="h-5 w-5 text-yellow-500" />,
    security: <ShieldCheckIcon className="h-5 w-5 text-red-600" />,
    automation: <CpuChipIcon className="h-5 w-5 text-green-600" />,
    architecture: <BuildingOfficeIcon className="h-5 w-5 text-gray-600" />,
    virtualization: <CloudIcon className="h-5 w-5 text-indigo-600" />,
    connectivity: <SignalIcon className="h-5 w-5 text-teal-600" />,
    infrastructure: <ServerStackIcon className="h-5 w-5 text-pink-600" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {language === "pt" ? "Escolhe o tema" : "Choose a Topic"}
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {Object.entries(temas).map(([key, label]) => (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="flex items-center gap-3 w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition text-left"
            >
              {icons[key]}
              <span className="font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
