import {
  ArrowPathIcon,
  EyeIcon,
  ArrowUturnLeftIcon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

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
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        {language === "pt" ? "Resumo do Resultado" : "Result Summary"}
      </h2>
      <p className="mb-6 text-lg">
        {language === "pt"
          ? `Acertaste ${score} de ${total} perguntas.`
          : `You got ${score} out of ${total} questions right.`}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <ArrowPathIcon className="h-5 w-5" />
          {language === "pt" ? "Recomeçar" : "Restart"}
        </button>

        <button
          onClick={onRepeatWrong}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" />
          {language === "pt" ? "Repetir Erradas" : "Retry Incorrect"}
        </button>

        <button
          onClick={onExportJSON}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          <DocumentArrowDownIcon className="h-5 w-5" />
          {language === "pt" ? "Exportar JSON" : "Export JSON"}
        </button>

        <button
          onClick={onExportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          <DocumentTextIcon className="h-5 w-5" />
          {language === "pt" ? "Exportar PDF" : "Export PDF"}
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
          <EyeIcon className="h-5 w-5" />
          {language === "pt" ? "Ver Revisão" : "Review"}
        </button>
      </div>
    </div>
  );
}
