export default function LanguageSelector({ onSelect }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-6">Escolhe o idioma</h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => onSelect("pt")}
            >
              Português
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              onClick={() => onSelect("en")}
            >
              English
            </button>
          </div>
        </div>
      </div>
    );
  }
  