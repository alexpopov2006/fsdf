// src/pages/Pros.jsx
import { motion } from "framer-motion";
import ProsConsCard from "../components/ProsConsCard";

const prosData = [
  {
    title: "Снижение выбросов CO₂",
    description: "Переход на возобновляемую энергию сокращает углеродный след",
    examples: [
      "Германия сократила выбросы на 40% с 1990 года",
      "Solar power avoids 70-90 млн тонн CO₂ ежегодно в США",
      "Ветряные станции Дании обеспечивают 50% потребностей страны",
    ],
  },
  {
    title: "Создание рабочих мест",
    description: "Зеленая экономика создает новые профессии",
    examples: [
      "12 млн рабочих мест в возобновляемой энергетике (2021)",
      "Рост занятости в секторе ВИЭ на 5.4% ежегодно",
      "Солнечная энергетика создает в 5 раз больше рабочих мест, чем угольная",
    ],
  },
  {
    title: "Экономия ресурсов",
    description: "Рециклинг и повторное использование материалов",
    examples: [
      "Переработка алюминия экономит 95% энергии",
      "Швеция перерабатывает 99% бытовых отходов",
      "Компания Patagonia перерабатывает 87% своих изделий",
    ],
  },
  {
    title: "Улучшение здоровья",
    description: "Снижение загрязнения воздуха уменьшает заболевания",
    examples: [
      "В Китае после ввода экостандартов заболеваемость астмой ↓ на 25%",
      "Ежегодно 7 млн смертей связано с загрязнением воздуха (ВОЗ)",
      "В Париже после запрета дизеля уровень NO₂ ↓ на 30%",
    ],
  },
  {
    title: "Энергонезависимость",
    description: "Снижение зависимости от импорта топлива",
    examples: [
      "Польша сократила импорт угля на 40% за 5 лет",
      "Исландия: 100% энергии из возобновляемых источников",
      "США экономят $200 млрд/год на импорте нефти благодаря ВИЭ",
    ],
  },
];

export default function Pros() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
      >
        Аргументы в защиту экологии
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {prosData.map((item, index) => (
          <ProsConsCard
            key={index}
            title={item.title}
            description={item.description}
            examples={item.examples}
            type="pros"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 bg-emerald-50 p-8 rounded-2xl border border-emerald-100"
      >
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">
          Экспертное мнение
        </h3>
        <p className="text-gray-700 mb-4">
          "Зеленые технологии уже сегодня демонстрируют экономическую
          эффективность. Стоимость солнечной энергии упала на 89% за последнее
          десятилетие."
        </p>
        <div className="text-emerald-600 font-medium">— Доктор Эко, ООН</div>
      </motion.div>
    </div>
  );
}
