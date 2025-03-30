import { motion } from "framer-motion";

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  isAnswered,
  onAnswer,
  language,
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        {language === "pt"
          ? `Pergunta: ${question.question.pt}`
          : `Question: ${question.question.en}`}
      </h2>
      <div className="space-y-2 mb-4">
        {options.map((opt, i) => {
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
              onClick={() => onAnswer(i)}
              className={`w-full px-4 py-2 border rounded text-left transition ${
                isAnswered ? "cursor-default" : "hover:bg-blue-100"
              } ${style}`}
            >
              {opt.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
