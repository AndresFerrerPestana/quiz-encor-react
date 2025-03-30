import { useEffect, useState } from "react";
import { questionsByTopic } from "./data";
import {
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

import LanguageSelector from "./components/LanguageSelector";
import QuizHeader from "./components/QuizHeader";
import QuestionCard from "./components/QuestionCard";
import ExplanationBox from "./components/ExplanationBox";
import ResultSummary from "./components/ResultSummary";
import TopicSelector from "./components/TopicSelector";
import ModeSelector from "./components/ModeSelector";

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
  const [userAnswers, setUserAnswers] = useState([]);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (questions.length > 0) {
      console.log("Perguntas carregadas:", questions);
      const originalOptions = questions[current].options[language].map(
        (opt, index) => ({
          label: opt,
          isCorrect: index === questions[current].answer,
        })
      );
      const shuffled = [...originalOptions].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [current, questions, language]);

  useEffect(() => {
    if (showResult) {
      localStorage.setItem("quizUserAnswers", JSON.stringify(userAnswers));
    }
  }, [showResult, userAnswers]);

  const handleStartMode = (selectedMode) => {
    setMode(selectedMode);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setUserAnswers([]);
  };

  const handleAnswer = (selectedIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    const isCorrect = shuffledOptions[selectedIndex].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question[language],
        selected: shuffledOptions[selectedIndex].label,
        correct: shuffledOptions.find((opt) => opt.isCorrect).label,
        explanation: questions[current].explanation?.[language],
        isCorrect,
        fullQuestion: questions[current],
      },
    ]);
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      if (mode === "normal") {
        setShowResult(true);
      } else {
        setCurrent(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
      }
    }
  };

  const handleRestart = () => {
    setQuestions([]);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelectedTopic(null);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShuffledOptions([]);
    setUserAnswers([]);
    setLanguage(null);
    setMode(null);
    localStorage.removeItem("quizUserAnswers");
  };

  const handleRepeatWrong = () => {
    const wrongQuestions = userAnswers
      .filter((res) => !res.isCorrect)
      .map((res) => res.fullQuestion);
    setQuestions(wrongQuestions);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShuffledOptions([]);
    setUserAnswers([]);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setQuestions(questionsByTopic[topic]);
  };

  const exportResults = () => {
    const blob = new Blob([JSON.stringify(userAnswers, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "quiz-resultados.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    let y = 10;
    doc.text(
      `${language === "pt" ? "Resultado do Quiz ENCOR" : "ENCOR Quiz Results"}`,
      10,
      y
    );
    y += 10;
    doc.text(
      `${language === "pt" ? "Pontuação" : "Score"}: ${score}/${
        questions.length
      }`,
      10,
      y
    );
    y += 10;

    userAnswers.forEach((res, i) => {
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
      doc.text(`${i + 1}. ${res.question}`, 10, y);
      y += 7;
      doc.text(
        `✓ ${language === "pt" ? "Tua resposta" : "Your answer"}: ${
          res.selected
        }`,
        10,
        y
      );
      y += 6;
      if (!res.isCorrect) {
        doc.text(
          `✗ ${language === "pt" ? "Correta" : "Correct"}: ${res.correct}`,
          10,
          y
        );
        y += 6;
      }
      if (res.explanation) {
        const lines = doc.splitTextToSize(
          `${language === "pt" ? "Explicação" : "Explanation"}: ${
            res.explanation
          }`,
          180
        );
        doc.text(lines, 10, y);
        y += lines.length * 6;
      }
      y += 4;
    });

    doc.save("quiz-resultados.pdf");
  };

  if (!language) return <LanguageSelector onSelect={setLanguage} />;
  if (!selectedTopic)
    return <TopicSelector language={language} onSelect={handleTopicSelect} />;
  if (!mode)
    return <ModeSelector language={language} onSelectMode={handleStartMode} />;
  if (!questions.length || !questions[current])
    return <div className="p-4 text-red-500">Sem perguntas carregadas.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <QuizHeader
          current={current}
          total={questions.length}
          language={language}
          mode={mode}
        />

        <QuestionCard
          question={questions[current]}
          options={shuffledOptions}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswer={handleAnswer}
          language={language}
        />

        {isAnswered && !showResult && (
          <>
            {questions[current].explanation?.[language] && (
              <ExplanationBox
                explanation={questions[current].explanation[language]}
                language={language}
                isCorrect={shuffledOptions[selectedAnswer]?.isCorrect}
              />
            )}

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {language === "pt" ? "Próxima Pergunta" : "Next Question"}
              </button>
            </div>
          </>
        )}

        {mode === "normal" && showResult && (
          <ResultSummary
            score={score}
            total={questions.length}
            language={language}
            onRestart={handleRestart}
            onRepeatWrong={handleRepeatWrong}
            onExportJSON={exportResults}
            onExportPDF={exportToPDF}
          />
        )}
      </div>
    </div>
  );
}
