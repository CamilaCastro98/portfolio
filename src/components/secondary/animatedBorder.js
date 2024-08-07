import { motion } from 'framer-motion';

const AnimatedBorder = () => {
    return (
        <div className="relative p-6 bg-gray-100 border-4 border-transparent border-solid rounded-lg">
            <motion.div
                className="absolute inset-0 border-4 border-blue-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            ></motion.div>
            <div className="relative">
                <h2 className="text-center">Borde Animado</h2>
            </div>
        </div>
    );
};

export default AnimatedBorder;
