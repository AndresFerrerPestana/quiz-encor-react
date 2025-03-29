import { useState } from "react";

const questions = [
  {
    question: "Qual é a função principal do protocolo OSPF?",
    options: [
      "Gerar endereços IP automaticamente",
      "Definir políticas de segurança",
      "Trocar informação de roteamento entre routers",
      "Monitorizar o tráfego de rede"
    ],
    answer: 2
  },
  {
    question: "What is the default administrative distance of OSPF?",
    options: ["90", "110", "120", "100"],
    answer: 1
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Resultado Final</h2>
            <p className="text-lg mb-6">
              Acertaste <span className="font-semibold">{score}</span> de{" "}
              <span className="font-semibold">{questions.length}</span> perguntas.
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setShowResult(false);
              }}
            >
              Recomeçar
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Pergunta {current + 1} de {questions.length}
            </h2>
            <p className="mb-6 text-gray-700 font-medium">{questions[current].question}</p>
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-2 border border-gray-300 rounded hover:bg-blue-100 transition"
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
