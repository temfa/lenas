import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Function to update width
    const updateWidth = () => setWidth(window.innerWidth);

    // Set initial width
    updateWidth();

    // Add event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};
