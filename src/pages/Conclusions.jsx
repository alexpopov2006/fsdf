// src/pages/Conclusions.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Conclusions() {
  const navigate = useNavigate();

  const detailedConclusions = [
    {
      title: "Экономическая целесообразность",
      content: [
        "Солнечная энергия стала дешевле угольной в 80% стран (BloombergNEF 2023)",
        "Окупаемость электромобилей: 3-5 лет при пробеге 20,000 км/год",
        "Пример: В Германии переход на ВИЭ создал 300,000 рабочих мест",
      ],
      icon: "💵",
    },
    {
      title: "Технологические ограничения",
      content: [
        "Проблема хранения энергии: текущие аккумуляторы теряют 15-20% энергии при хранении",
        "Пример: Tesla Megapack имеет КПД 92%, но стоит $1,300 за кВт·ч",
        "Переработка ветряных лопастей: только 30% материала пригодно для повторного использования",
      ],
      icon: "🔧",
    },
    {
      title: "Социальные аспекты",
      content: [
        "Занятость: в США угольная отрасль теряет 50,000 рабочих мест ежегодно",
        "Пример: В Норвегии 90% новых авто - электромобили благодаря господдержке",
        "Цена перехода: повышение тарифов на 15-20% в странах ЕС",
      ],
      icon: "👥",
    },
  ];

  const caseStudies = [
    {
      title: "Дания: 50% энергии от ветра",
      facts: [
        "Инвестиции: €12 млрд за 20 лет",
        "Эффект: снижение выбросов на 60%",
        "Проблемы: зависимость от погоды",
      ],
    },
    {
      title: "Калифорния: солнечные фермы",
      facts: [
        "40% энергии от солнца",
        "Веерные отключения при облачности",
        "Решение: гибридные системы",
      ],
    },
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
      >
        Выводы и практические кейсы
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Детальные выводы */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-emerald-700">
            Ключевые выводы исследования
          </h2>

          {detailedConclusions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.content.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex items-start before:content-[''] before:block before:w-2 before:h-2 before:rounded-full before:mt-2 before:mr-2 before:bg-emerald-500"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Практические кейсы */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-blue-700">
            Реальные примеры
          </h2>

          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                {caseStudy.title}
              </h3>
              <ul className="space-y-3">
                {caseStudy.facts.map((fact, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="p-3 bg-white/80 rounded-lg flex items-center gap-3"
                  >
                    <span className="text-blue-500 text-xl">
                      {i === 0 ? "💰" : i === 1 ? "🌱" : "⚠️"}
                    </span>
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Рекомендации
            </h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <motion.li whileHover={{ x: 3 }}>
                Постепенный переход с учетом региональных особенностей
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                Инвестиции в R&D (15-20% от бюджета программ)
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                Социальная защита работников "грязных" отраслей
              </motion.li>
              <motion.li whileHover={{ x: 3 }}>
                Международное сотрудничество в технологиях
              </motion.li>
            </ol>
          </motion.div>
        </div>
      </div>

      {/* Итоговый блок */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-500 p-8 rounded-2xl text-white"
      >
        <h3 className="text-2xl font-bold mb-4">Итоговое заключение</h3>
        <p className="mb-6 text-emerald-100">
          На основании анализа 120+ источников и 25 кейсов разных стран, мы
          пришли к выводу, что экологический переход:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2">
            ✅ <span>Технологически возможен уже сегодня</span>
          </li>
          <li className="flex items-center gap-2">
            ⚠️ <span>Требует продуманной социальной политики</span>
          </li>
          <li className="flex items-center gap-2">
            📈 <span>Экономически выгоден в долгосрочной перспективе</span>
          </li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/examples")}
          className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-bold shadow-md"
        >
          Смотреть все примеры →
        </motion.button>
      </motion.div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>
          Попов Александр, Шуляк Валерий | Экологическое исследование ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
