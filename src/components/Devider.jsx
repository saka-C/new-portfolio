import { useEffect, useState } from "react";

const Devider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjust the factor to control the speed of horizontal movement
  const movementFactor = 0.5;
  const translateX = scrollPosition * movementFactor;

  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-darkgrey py-7">
      <div
        className="text-5xl semibold text-primary-500 flex items-center gap-10"
        style={{
          transform: `translateX(-${translateX}px)`,
          whiteSpace: "nowrap",
          transition: "transform 0.1s linear",
        }}
      >
        Introducing Me
        <i className="bx bx-cube-alt"></i>
        Introducing Me
        <i className="bx bx-cube-alt"></i>
        Introducing Me
        <i className="bx bx-cube-alt"></i>
        Introducing Me
        <i className="bx bx-cube-alt"></i>
      </div>
    </div>
  );
};

export default Devider;
