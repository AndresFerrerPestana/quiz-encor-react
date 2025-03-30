export default function ModeSelector({ onSelectMode, language }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-6">
          {language === "pt"
            ? "Escolhe o modo de estudo"
            : "Choose the study mode"}
        </h2>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => onSelectMode("normal")}
          >
            {language === "pt" ? "Modo Normal" : "Normal Mode"}
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={() => onSelectMode("practice")}
          >
            {language === "pt" ? "Modo Treino" : "Practice Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
