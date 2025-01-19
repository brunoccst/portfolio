import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Header.scss';

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSize = () => {
      if (containerRef.current && textRef.current) {
        const container = containerRef.current;
        const text = textRef.current;
        const containerWidth = container.offsetWidth;
        const textWidth = text.scrollWidth;
        
        if (textWidth > containerWidth) {
          const scale = containerWidth / textWidth * 0.9; // 90% of container width
          text.style.setProperty('--scale', scale.toString());
        } else {
          text.style.setProperty('--scale', '1');
        }
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <>
      {/* Center animation */}
      <AnimatePresence>
        <motion.div 
          className="header center"
          initial={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key="center-header"
          ref={containerRef}
        >
          <motion.div 
            className="text-container"
            ref={textRef}
          >
            <motion.span 
              className="name"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20] }}
              transition={{ 
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
                delay: 1
              }}
            >
              Bruno Carvalho da Costa
            </motion.span>

            <motion.span 
              className="separator"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 5,
                times: [0, 0.2, 0.8, 1], 
                ease: "easeInOut"
              }}
            >
              |
            </motion.span>

            <motion.span 
              className="title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
              transition={{ 
                duration: 3,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut",
                delay: 1
              }}
            >
              Software Engineer & Team Lead
            </motion.span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Final position animation */}
      <motion.div 
        className="header"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 4,
          duration: 0.8,
          ease: "easeOut"
        }}
        style={{ top: 20, left: 20 }}
      >
        <div className="text-container">
          <span className="name">Bruno Carvalho da Costa</span>
          <span className="separator">|</span>
          <span className="title">Software Engineer & Team Lead</span>
        </div>
      </motion.div>
    </>
  );
};

export default Header; 