import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

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
          let Icon = null;

          if (isAnswered) {
            if (i === selectedAnswer && opt.isCorrect) {
              style = "border-green-400 bg-green-50";
              Icon = CheckCircleIcon;
            } else if (i === selectedAnswer && !opt.isCorrect) {
              style = "border-red-400 bg-red-50";
              Icon = XCircleIcon;
            } else if (opt.isCorrect) {
              style = "border-green-300 bg-green-50";
              Icon = CheckCircleIcon;
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
              className={`w-full px-4 py-2 border rounded text-left transition flex items-center gap-2 ${
                isAnswered ? "cursor-default" : "hover:bg-blue-100"
              } ${style}`}
            >
              {isAnswered && Icon && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      opt.isCorrect ? "text-green-500" : "text-red-500"
                    }`}
                  />
                </motion.span>
              )}
              <span>{opt.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
