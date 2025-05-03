// src/pages/Cons.jsx
import { motion } from "framer-motion";
import ProsConsCard from "../components/ProsConsCard";

const consData = [
  {
    title: "Высокие первоначальные затраты",
    description:
      "Для перехода на зеленые технологии требуются значительные инвестиции",
    examples: [
      "Строительство ветропарка: $1.3-2.2 млн/МВт",
      "Срок окупаемости солнечных панелей: 5-8 лет",
      "Затраты на инфраструктуру для электромобилей",
    ],
  },
  {
    title: "Проблемы утилизации",
    description: "Не все экотехнологии имеют замкнутый цикл",
    examples: [
      "Переработка только 5% литий-ионных батарей",
      "Солнечные панели содержат токсичные материалы",
      "Лопасти ветрогенераторов не подлежат переработке",
    ],
  },
  {
    title: "Ограниченная эффективность",
    description: "Зависимость от природных условий",
    examples: [
      "КПД солнечных панелей 15-22%",
      "Простой ветрогенераторов при слабом ветре",
      "Необходимость резервных традиционных мощностей",
    ],
  },

  {
    title: "Редкоземельные металлы",
    description: "Ограниченные запасы для зеленых технологий",
    examples: [
      "1 ветрогенератор требует 600 кг редкоземельных металлов",
      "Добыча лития для аккумуляторов загрязняет воду",
      "Китай контролирует 80% рынка редкоземельных элементов",
    ],
  },
  {
    title: "Землепользование",
    description: "ВИЭ требуют больших площадей",
    examples: [
      "Солнечная ферма 1 ГВт требует 25 км² земли",
      "Ветропарки влияют на миграцию птиц",
      "Биотопливо конкурирует с продовольственными культурами",
    ],
  },
];

export default function Cons() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent"
      >
        Проблемы экологических решений
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1, type: "spring" }}
          >
            <ProsConsCard
              title={item.title}
              description={item.description}
              examples={item.examples}
              type="cons"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 p-1 rounded-2xl shadow-lg"
      >
        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-rose-700 mb-4">
            Критический взгляд
          </h3>
          <p className="text-gray-700">
            Многие экологические инициативы требуют тщательного анализа
            жизненного цикла. Например, производство электромобилей генерирует
            на 70% больше выбросов, чем обычных авто, и окупается только через
            3-4 года эксплуатации.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
