// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -3 }}>
            <h3 className="text-xl font-bold mb-4">EcoLogic</h3>
            <p className="text-gray-400">
              Исследование экологических инициатив и их влияния на современный
              мир
            </p>
          </motion.div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {["Главная", "За", "Против", "Примеры", "Выводы"].map(
                (item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400 mb-2">Попов Александр</p>
            <p className="text-gray-400">Шуляк Валерий</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} EcoLogic. Все права защищены.</p>
        </div>
      </div>
    </motion.footer>
  );
}
