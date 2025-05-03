// src/pages/Examples.jsx
import { motion } from "framer-motion";
import TimeLine from "../components/TimeLine";

const TimeLineData = [
  {
    period: "1970-е",
    title: "Начало экодвижения",
    description: "Первые законы о чистом воздухе и воде в США и Европе",
    type: "pros",
  },
  {
    period: "1986",
    title: "Чернобыльская катастрофа",
    description:
      "Крупнейшая ядерная авария изменила отношение к атомной энергетике",
    type: "cons",
  },
  {
    period: "1997",
    title: "Киотский протокол",
    description: "Первое международное соглашение по сокращению выбросов",
    type: "pros",
  },
  {
    period: "2015",
    title: "Парижское соглашение",
    description: "195 стран договорились о мерах против изменения климата",
    type: "pros",
  },
  {
    period: "2020",
    title: "Пандемия COVID-19",
    description:
      "Временное снижение выбросов на 7%, но рост медицинских отходов",
    type: "cons",
  },
  {
    period: "2007",
    title: "iPhone и электронные отходы",
    description: "Рост e-waste до 50 млн тонн ежегодно",
    type: "cons",
  },
  {
    period: "2019",
    title: "Экоактивизм Греты Тунберг",
    description: "Глобальные климатические забастовки",
    type: "pros",
  },
  {
    period: "2022",
    title: "Зеленый курс ЕС",
    description: "€1 трлн инвестиций до 2030 года",
    type: "pros",
  },
];

export default function Examples() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
      >
        Исторические вехи экологии
      </motion.h1>

      <TimeLine items={TimeLineData} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-100"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-4">
          Динамика изменений
        </h3>
        <p className="text-gray-700">
          За последние 50 лет экологическое сознание прошло путь от маргинальных
          идей до глобальной политической повестки. Современные технологии
          позволяют совмещать экономический рост с заботой об окружающей среде.
        </p>
      </motion.div>
    </div>
  );
}
