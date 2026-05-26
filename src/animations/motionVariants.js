export const screenTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
};

export const floatLoop = {
  animate: { y: [0, -6, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } },
};
