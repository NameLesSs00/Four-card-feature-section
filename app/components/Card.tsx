import Image from "next/image";
import { motion } from "framer-motion";

interface reqData {
  title: string;
  color: string;
  text: string;
  icon: string;
}

function Card({ title, color, text, icon }: reqData) {
  return (
    <div
      style={{
        boxShadow: `2px 10px 10px rgba(0,0,0,.1)`,
        borderTop: `8px solid ${color}`,
      }}
      className="flex flex-col rounded-lg p-5 mb-5 max-w-sm min-h-[300px] w-full mx-auto"
    >
      {/* Text Section */}
      <div>
        <p className="font-semibold text-lg text-gray-500 mb-2 md:text-xl">
          {title}
        </p>
        <p className="text-gray-400 md:text-lg">{text}</p>
      </div>

      {/* Image Section */}
      <div className="my-4 flex justify-end mt-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ rotate: 360 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image src={icon} alt="a nice icon omg" width={80} height={80} />
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
