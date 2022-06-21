interface FadeInUp {
  yHide?: number;
  yVisible?: number;
  delay?: number;
}
const ease = [0.075, 0.82, 0.165, 1];

const fadeInUp = ({ yHide, yVisible, delay }: FadeInUp) => ({
  initial: {
    y: yHide,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    y: yVisible,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay ? delay : null,
      ease: ease,
      stiffness: 150,
      type: "spring",
      damping: 4,
    },
  },
});

export { fadeInUp };
