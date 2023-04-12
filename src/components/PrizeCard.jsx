import { motion } from "framer-motion";
const PrizeCard = (params) => {
  const variants = {
    hidden: {
      opacity: 0,
      y:-10,
      scale:0.9
    },
    visible: {
      opacity: 1,
      scale: 0.9,
      y:0,
      transition: {
        duration: 0.3,
        
      },
    },
    hover: {
      scale: 1,
    },
  };
  return (
    <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    className="flex flex-col justify-center apple items-center box-bg w-80 py-6">
      <img src={params.img} alt="" />
      <h2 className="clash-bold text-xl text-yellow-400">{params.title}</h2>
      <h3 className="text-white mori text-lg">₹ {params.price}</h3>
    </motion.div>
  );
};

export default PrizeCard;
