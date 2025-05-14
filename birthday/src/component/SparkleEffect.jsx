export const SparkleEffect = () => {
  const colors = ["#111111", "#4b5563", "#1f2937"];

  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      position: "absolute",
      borderRadius: "50%",
      opacity: Math.random() * 0.7 + 0.3,
      animationDelay: `${Math.random() * 3}s`,
    },
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="animate-sparkle"
          style={sparkle.style}
        ></div>
      ))}
    </div>
  );
};
