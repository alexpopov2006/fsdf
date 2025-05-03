// src/components/ProsConsCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProsConsCard({ title, description, examples, type }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const color = type === "pros" ? "emerald" : "rose";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={`rounded-xl shadow-lg overflow-hidden border-t-4 border-${color}-500 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-white p-6">
        <div className="flex items-start gap-4">
          <div className={`text-3xl bg-${color}-100 p-3 rounded-full`}>
            {type === "pros" ? "✓" : "✗"}
          </div>
          <div>
            <h3 className={`text-xl font-bold text-${color}-800`}>{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>

        <motion.div
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-700 mb-2">
              Конкретные примеры:
            </h4>
            <ul className="space-y-2">
              {examples.map((example, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-start before:content-[""] before:block before:w-2 before:h-2 before:rounded-full before:mt-2 before:mr-2 before:bg-${color}-500`}
                >
                  {example}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div
        className={`px-6 py-3 bg-${color}-100 text-${color}-800 flex justify-between items-center`}
      >
        <span className="font-medium">
          {type === "pros" ? "Положительные аспекты" : "Отрицательные аспекты"}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-xl"
        >
          ▼
        </motion.span>
      </div>
    </motion.div>
  );
}
