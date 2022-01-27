import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  identifier: string;
  children: ReactNode;
}

export function PageTransition({ identifier, children }: PageTransitionProps) {
  return (
    <motion.div
      key={identifier}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          x: 300,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
