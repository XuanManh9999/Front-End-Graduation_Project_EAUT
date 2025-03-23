import confetti from "canvas-confetti";

export const fireConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#19bde6", "#ffcc00", "#ff6666"], // sử dụng màu chủ đạo và các màu khác nếu cần
  });
};
