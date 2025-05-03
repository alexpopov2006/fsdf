import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { value: "72%", label: "Поддержка ВИЭ в ЕС", icon: "🌍" },
    { value: "$2.8T", label: "Инвестиции до 2030", icon: "💸" },
    { value: "+1.5°C", label: "Глобальное потепление", icon: "🔥" },
  ];

  const features = [
    {
      title: "Анализ данных",
      description: "Реальные статистические данные и исследования",
      icon: "📊",
    },
    {
      title: "Мнения экспертов",
      description: "Комментарии экологов и экономистов",
      icon: "👨‍🔬",
    },
    {
      title: "Исторический контекст",
      description: "Как развивалось экологическое движение",
      icon: "🕰️",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero секция с параллакс-эффектом */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-800 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616628188550-687bc96f1f3c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20"
        />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Эко<span className="text-emerald-300">Логика</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
          >
            Комплексный анализ экологических инициатив: преимущества, риски и
            перспективы
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/pros")}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium shadow-lg"
            >
              Аргументы За
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/cons")}
              className="px-8 py-3 bg-white hover:bg-gray-100 text-emerald-800 rounded-lg font-medium shadow-lg"
            >
              Аргументы Против
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl"
        >
          ▼
        </motion.div>
      </motion.section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Экология в цифрах
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Возможности */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Что вы найдете на нашем сайте
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-emerald-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Авторы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">
              Об авторах проекта
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">Попов Александр</h3>
                <p className="text-gray-700">
                  Эксперт в области устойчивого развития с 10-летним опытом
                  работы в международных экологических организациях.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">Шуляк Валерий</h3>
                <p className="text-gray-700">
                  Специалист по экологической политике, автор научных публикаций
                  по вопросам климатических изменений.
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/conclusions")}
              className="block mx-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium"
            >
              Читать выводы исследования
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
