import { LightBulbIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ExplanationBox({ explanation, language, isCorrect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-4 flex items-start gap-2 p-4 rounded-md border text-sm max-w-xl mx-auto bg-yellow-50 border-yellow-400 text-black`}
    >
      <LightBulbIcon className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-500" />
      <div>
        <strong className="block mb-1 text-yellow-700 drop-shadow-sm">
          {language === "pt" ? "Explicação" : "Explanation"}:
        </strong>
        <span className="block leading-relaxed">{explanation}</span>
      </div>
    </motion.div>
  );
}
