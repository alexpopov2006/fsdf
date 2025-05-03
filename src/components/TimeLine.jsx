// src/components/Timeline.jsx
import { motion } from "framer-motion";

const TimeLineItem = ({ period, title, description, type, index }) => {
  const isEven = index % 2 === 0;
  const color = type === "pros" ? "emerald" : "rose";

  return (
    <div className={`relative mb-12 ${isEven ? "pr-8 pl-16" : "pl-8 pr-16"}`}>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 w-8 h-8 rounded-full bg-${color}-500 border-4 border-white z-10 ${
          isEven ? "left-1/2 -ml-4" : "right-1/2 -mr-4"
        }`}
      />

      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`p-6 rounded-xl shadow-md bg-${color}-50 ${
          isEven ? "text-right" : "text-left"
        }`}
      >
        <div className={`text-sm font-bold text-${color}-600 mb-1`}>
          {period}
        </div>
        <h3 className={`text-xl font-bold text-${color}-800 mb-2`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </div>
  );
};

export default function TimeLine({ items }) {
  return (
    <div className="relative py-8">
      <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2" />

      {items.map((item, index) => (
        <TimelineItem key={index} index={index} {...item} />
      ))}
    </div>
  );
}
