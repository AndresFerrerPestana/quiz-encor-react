export default function ResultSummary({
  score,
  total,
  language,
  onRestart,
  onRepeatWrong,
  onExportJSON,
  onExportPDF,
}) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">
        {language === "pt" ? "Resultado Final" : "Final Result"}
      </h2>
      <p className="text-lg">
        {language === "pt"
          ? `Acertaste ${score} em ${total} perguntas.`
          : `You got ${score} out of ${total} questions correct.`}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          {language === "pt" ? "Recomeçar" : "Restart"}
        </button>
        <button
          onClick={onRepeatWrong}
          className="px-4 py-2 bg-orange-100 text-orange-800 rounded hover:bg-orange-200"
        >
          {language === "pt" ? "Repetir erradas" : "Repeat wrong"}
        </button>
        <button
          onClick={onExportJSON}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
        >
          {language === "pt" ? "Exportar JSON" : "Export JSON"}
        </button>
        <button
          onClick={onExportPDF}
          className="px-4 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200"
        >
          {language === "pt" ? "Exportar PDF" : "Export PDF"}
        </button>
      </div>
    </div>
  );
}
