import { useEffect, useState } from "react";
import { questionsByTopic } from "./data";
import { CheckCircleIcon, XCircleIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

function traduzirTema(topic) {
  const map = {
    routing: "Roteamento",
    switching: "Comutação",
    wireless: "Wireless",
    security: "Segurança",
    automation: "Automação",
  };
  return map[topic] || topic;
}

export default function Quiz() {
  const [language, setLanguage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(() => {
    const saved = localStorage.getItem("quizUserAnswers");
    return saved ? JSON.parse(saved) : [];
  });
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (questions.length > 0) {
      const originalOptions = questions[current].options[language].map((opt, index) => ({
        label: opt,
        isCorrect: index === questions[current].answer,
      }));
      const shuffled = [...originalOptions].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [current, questions, language]);

  const handleAnswer = (selectedIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    const isCorrect = shuffledOptions[selectedIndex].isCorrect;
    if (mode === "normal" && isCorrect) {
      setScore(score + 1);
    }
    if (mode === "normal") {
      setUserAnswers((prev) => [
        ...prev,
        {
          question: questions[current].question[language],
          selected: shuffledOptions[selectedIndex].label,
          correct: shuffledOptions.find((opt) => opt.isCorrect).label,
          explanation: questions[current].explanation[language],
          isCorrect,
          fullQuestion: questions[current],
        },
      ]);
    }
  };

  const handleNext = () => {
    let next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      if (mode === "normal") {
        setShowResult(true);
      } else {
        next = 0;
        setCurrent(next);
      }
    }
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleStartMode = (selectedMode) => {
    setMode(selectedMode);
    setQuestions(questionsByTopic[selectedTopic]);
  };

  if (!language) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-6">Escolhe o idioma</h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setLanguage("pt")}
            >
              Português
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              onClick={() => setLanguage("en")}
            >
              English
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedTopic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-6">
            {language === "pt" ? "Escolhe o tema" : "Choose a topic"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(questionsByTopic).map((topic) => (
              <button
                key={topic}
                className="px-4 py-2 bg-white border border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-shadow shadow-sm hover:shadow-md capitalize"
                onClick={() => setSelectedTopic(topic)}
              >
                {language === "pt" ? traduzirTema(topic) : topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!mode) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-6">
            {language === "pt" ? "Escolhe o modo de estudo" : "Choose the study mode"}
          </h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => handleStartMode("normal")}
            >
              {language === "pt" ? "Modo Normal" : "Normal Mode"}
            </button>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              onClick={() => handleStartMode("practice")}
            >
              {language === "pt" ? "Modo Treino" : "Practice Mode"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">
          {language === "pt" ? `Pergunta ${current + 1} de ${questions.length}` : `Question ${current + 1} of ${questions.length}`}
        </h2>
        <p className="text-lg font-medium mb-4">
          {questions[current].question[language]}
        </p>
        <div className="space-y-2 mb-4">
          {shuffledOptions.map((opt, i) => {
            let style = "";
            if (isAnswered) {
              if (i === selectedAnswer && opt.isCorrect) {
                style = "border-green-400 bg-green-50";
              } else if (i === selectedAnswer && !opt.isCorrect) {
                style = "border-red-400 bg-red-50";
              } else if (opt.isCorrect) {
                style = "border-green-300 bg-green-50";
              } else {
                style = "opacity-50";
              }
            }
            return (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={i}
                disabled={isAnswered}
                onClick={() => handleAnswer(i)}
                className={`w-full px-4 py-2 border rounded text-left transition ${
                  isAnswered ? "cursor-default" : "hover:bg-blue-100"
                } ${style}`}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-start gap-3 p-4 rounded border text-sm font-medium shadow-sm bg-yellow-50 max-w-prose"
          >
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p>
              <strong>{language === "pt" ? "Explicação: " : "Explanation: "}</strong>
              <span className="italic">{questions[current].explanation[language]}</span>
            </p>
          </motion.div>
        )}
        {isAnswered && (
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={() => window.location.reload()}
            >
              {language === "pt" ? "Voltar" : "Back"}
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleNext}
            >
              {language === "pt" ? "Próxima Pergunta" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}