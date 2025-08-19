import React from "react";
import { motion } from "framer-motion";
import award1 from "../../assets/home/ar1.webp?url";
import award2 from "../../assets/home/ar2.webp?url";
import award3 from "../../assets/home/ar3.webp?url";
import award4 from "../../assets/home/ar4.webp?url";
import award5 from "../../assets/home/ar5.webp?url";
import award6 from "../../assets/home/ar6.webp?url";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Awards = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F1EE] to-[#F6F1EE]/70">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Recognitions
          </div>
          <h2 className="text-4xl font-bold text-[#000b30] sm:text-5xl">
            Our Awards
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#D4AF37]">
            Recognized for Excellence
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
            We’re a top choice for companies seeking recruitment partners that
            understand international standards and deliver results.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[award1, award2, award3, award4, award5, award6].map(
            (award, index) => (
              <motion.div
                key={index}
                variants={item}
                className="col-span-1 flex justify-center px-4 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  className="h-32 object-contain"
                  src={award}
                  alt={`Award ${index + 1}`}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
