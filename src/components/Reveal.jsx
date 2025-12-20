import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "100%", delay = 0.1 }) => {
  return (
    <motion.div
      // Estado inicial (como ele fica quando está FORA da tela)
      initial={{ opacity: 0.2, y: 50, filter: "blur(6px)" }}
      
      // Estado quando entra na tela (Sempre que aparecer)
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      
      // Configuração do gatilho
      viewport={{ 
        once: false,      // IMPORTANTE: 'false' faz animar toda vez que entra no scroll
        amount: 0.2,      // Anima quando 20% do elemento estiver visível
        margin: "0px 0px -50px 0px" // Trigger levemente antes de chegar no meio da tela
      }}
      
      transition={{ 
        duration: 0.3, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Uma curva de animação mais "premium"
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};