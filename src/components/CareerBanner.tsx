import { motion } from "framer-motion";
import { CAREER_BANNER } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

export const CareerBanner = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col items-center">
        {/* Status Banner */}
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          className="w-full bg-tertiary rounded-lg p-8 mb-8"
        >
          <h3 className="text-white text-[24px] font-bold text-center">
            {CAREER_BANNER.current_status}
          </h3>
        </motion.div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {CAREER_BANNER.value_proposition.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-black-200 rounded-xl py-4 px-6 min-h-[120px] flex items-center justify-center hover:bg-tertiary transition-colors duration-200"
            >
              <p className="text-white-100 text-[16px] font-semibold text-center">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}; 