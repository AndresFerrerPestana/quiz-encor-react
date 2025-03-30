export default function QuizHeader({ current, total, language, mode }) {
  const modeLabel = {
    normal: language === "pt" ? "Modo Normal" : "Normal Mode",
    practice: language === "pt" ? "Modo Treino" : "Practice Mode",
  };

  const modeTooltip = {
    normal:
      language === "pt"
        ? "Modo de avaliação – as perguntas não se repetem."
        : "Evaluation mode – questions do not repeat.",
    practice:
      language === "pt"
        ? "Modo de treino contínuo – as perguntas reiniciam automaticamente."
        : "Continuous practice mode – questions loop automatically.",
  };

  const modeColor = {
    normal: "bg-blue-100 text-blue-800",
    practice: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="mb-6 flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          {language === "pt"
            ? `Pergunta ${current + 1} de ${total}`
            : `Question ${current + 1} of ${total}`}
        </h2>
      </div>

      {mode && (
        <div className="relative group inline-block">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 ${modeColor[mode]}`}
          >
            {mode === "normal" ? "🧭" : "🧪"} {modeLabel[mode]}
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 text-sm text-white bg-black rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {modeTooltip[mode]}
          </span>
        </div>
      )}
    </div>
  );
}
